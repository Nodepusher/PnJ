const userRepository = require("../../repositories/user/userRepository");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const crypto = require("crypto");
const path = require("path");
const jwtUtil = require("../../utils/jwtUtil");
const redisClient = require("../../utils/redisClient");
const userController = require("../../controllers/userController");
require("dotenv").config();

module.exports = {
  // 폰 인증코드 보내기
  sendVerifyPhoneCode: async (phone) => {
    // 메시지 SDK 불러오기
    const msgModule = require("coolsms-node-sdk").default;

    // 인증을 위해 발급받은 본인의 API Key를 사용합니다.
    const apiKey = process.env.COOL_API;
    const apiSecret = process.env.COOL_API_SECRET;

    const verifyCode = "000111";
    const messageService = new msgModule(apiKey, apiSecret);
    messageService
      .sendOne({
        to: phone,
        from: "01029237309",
        text: `[PnJ]본인확인 인증번호는(${verifyCode}) 입니다.`,
      })
      .then((res) => console.log(res));
  },
  // 폰 인증코드 확인
  verifyPhone: async (verifyCode) => {
    try {
      if (verifyCode === "000111") {
        return {
          success: true,
          message: "서비스단 폰 인증 성공",
          verifyCode,
        };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  // 기존회원인지 핸드폰 번호 중복 확인
  existUserVerify: async (phone) => {
    try {
      const user = await userRepository.checkUserByPhone(phone);
      if (user) {
        console.log("email:", user.email, "phone:", user.phone);
        return {
          exist: true,
          message: "User already exists",
          email: user.email,
          phone: user.phone,
        };
      } else {
        return { exist: false, message: "User does not exist" };
      }
    } catch (error) {
      return { message: error.message };
    }
  },

  // 인증메일 보내기
  sendVerifyEmail: async (
    userEmail,
    tokenType,
    expiresIn,
    ejsName,
    mailTitle,
    props
  ) => {
    try {
      //해시코드 생성
      // const code = crypto.randomBytes(3).toString("hex");
      //DB에 해당 유저 튜플에 코드 값 UPDATE 코드 .. 생략

      // JWT 토큰 생성
      const token = jwtUtil.sign(userEmail, tokenType, expiresIn);
      const url = `http://localhost:4000/user/${props}/${token}`;

      redisClient.setex(userEmail, expiresIn, token);

      //발송 할 ejs 준비
      let emailTemplate;
      ejs.renderFile(
        path.join(__dirname, `../../utils/${ejsName}`), //ejs파일 위치
        { email: userEmail, url: url },
        (err, data) => {
          //ejs mapping
          if (err) {
            console.log(err);
          }
          emailTemplate = data;
        }
      );

      let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      let mailOptions = {
        from: "PnJ_admin <PnJ_admin@PnJ.com>",
        to: userEmail,
        subject: mailTitle,
        html: emailTemplate,
      };

      // send mail
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log("send mail error", error);
        }
        console.log("Message sent: %s", info.messageId);
      });
      return { success: true, message: "서비스단 메일 전송 성공" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  // 인증메일 확인
  confirmVerifyEmail: async (email) => {
    const status = "active";

    try {
      // 레디스 토큰 삭제 로직
      const redisDeletePromise = new Promise((resolve, reject) => {
        redisClient.del(email, (err, response) => {
          if (err) {
            reject(new Error("레디스 토큰 삭제 에러:", err));
          } else {
            if (response === 1) {
              console.log("토큰 삭제 성공");
              resolve();
            } else {
              reject(new Error("레디스에서 해당 토큰을 찾을 수 없음"));
            }
          }
        });
      });

      await redisDeletePromise;

      // 유저 상태값 업데이트 로직
      const statusUpdate = userRepository.setUserStatus(email, status);
      if (!statusUpdate) {
        throw new Error("유저 스테이터스 업데이트 실패");
      } else if (statusUpdate) {
        return { success: true, message: "유저 스테이터스 업데이트" };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  validateToken: async (token) => {
    const { success, email, token_type } = jwtUtil.verify(token);
    try {
      if (!email || !success) {
        throw new Error("The token is invalid");
      }

      if (success && token_type === "reset_password") {
        return { success: true, message: "token is vaild" };
      }
    } catch (error) {
      console.error("Error in validateToken authService:", error);
      return { success: false, message: error.message };
    }
  },
  resetPassword: async (password, token) => {
    const { success, email, token_type } = jwtUtil.verify(token);
    try {
      if (!email || !success) {
        throw new Error("The token is invalid");
      }

      if (success && token_type === "reset_password") {
        const include = {
          password: password,
        };
        const where = { email: email };
        await userRepository.updateUser(include, where);

        const redisDeletePromise = new Promise((resolve, reject) => {
          redisClient.del(email, (err, response) => {
            if (err) {
              reject(new Error("레디스 토큰 삭제 에러:", err));
            } else {
              if (response === 1) {
                console.log("토큰 삭제 성공");
                resolve();
              } else {
                reject(new Error("레디스에서 해당 토큰을 찾을 수 없음"));
              }
            }
          });
        });

        await redisDeletePromise;
      }

      res.clearCookie("resetPwdToken");

      return { success: true, message: "update resetPassword success" };
    } catch (error) {
      console.error("Error in resetPassword authService:", error);
      return { success: false, message: error.message };
    }
  },
};
