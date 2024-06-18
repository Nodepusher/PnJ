const { getUserByUserEmail } = require("../repositories/user/userRepository");
const authService = require("../services/user/authService");
const jwtUtil = require("../utils/jwtUtil");
const jwt = require("jsonwebtoken");

module.exports = {
  sendVerifyPhoneCode: async (req, res) => {
    const { phone } = req.body;
    try {
      const result = await authService.sendVerifyPhoneCode(phone);
      if (result.success) {
        res.status(200).json({
          code: 200,
          message: "sendPhoneVerifyCode Success",
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "sendPhoneVerifyCode Fail code 400",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "code 500",
      });
    }
  },
  phoneAuthentication: async (req, res) => {
    const { verifyCode } = req.body;
    try {
      const result = await authService.verifyPhone(verifyCode);
      if (result.success) {
        res.status(200).json({
          code: 200,
          message: "Phone Verify Success",
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "phoneAuthentication Fail code 400",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "verifyPhone code 500",
      });
    }
  },
  existUserVerify: async (req, res) => {
    const { phone } = req.body;
    try {
      const result = await authService.existUserVerify(phone);

      if (result.exist) {
        res.status(200).json({
          redirect: "/existing-account",
          code: 200,
          message: "Already Exist User",
          email: result.email,
          phone: result.phone,
        });
      } else if (result.exist === false) {
        res.status(200).json({
          redirect: "/verify-phone-token",
          code: 200,
          message: "Does not Exist User",
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "Exist User Verify Fail code 400",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Exist User Verify code 500",
      });
    }
  },
  emailAuthentication: async (req, res) => {
    const { email } = req.body;
    const mailTitle = "[PnJ] 회원가입 인증메일 입니다.";
    const tokenType = "email_verification";
    const expiresIn = 300;
    const ejsName = "registerVerify.ejs";
    const props = "confirmation";
    try {
      const result = await authService.sendVerifyEmail(
        email,
        tokenType,
        expiresIn,
        ejsName,
        mailTitle,
        props
      );
      if (email && result.success) {
        res.status(200).json({
          code: 200,
          message: "발송 성공",
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "발송 실패 code 400",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "발송 실패 code 500",
      });
    }
  },
  confirmEmail: async (req, res) => {
    const { token } = req.params;
    const result = jwtUtil.verify(token);
    const { email, token_type } = result;
    try {
      if (!result.success) {
        return res.status(400).send("유효하지 않거나 만료된 토큰입니다.");
      }

      if (token_type !== "email_verification") {
        return res.status(400).send("유효하지 않은 토큰 타입 입니다.");
      }

      await authService.confirmVerifyEmail(email);

      /*return res.status(200).json({
        code: 200,
        message: "인증 성공",
      });*/
      return res.redirect(
        302,
        `http://localhost:3000/login/success-verify-email`
      );
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "인증 확인 실패 code 500",
      });
    }
  },
  sendResetMail: async (req, res) => {
    const { email } = req.body;
    const mailTitle = "[PnJ] 비밀번호를 재설정 해주세요.";
    const tokenType = "reset_password";
    const expiresIn = 3600;
    const ejsName = "resetPassword.ejs";
    const props = "validate-token";
    try {
      const result = await authService.sendVerifyEmail(
        email,
        tokenType,
        expiresIn,
        ejsName,
        mailTitle,
        props
      );
      if (email && result.success) {
        res.status(200).json({
          code: 200,
          message: "비밀번호 재설정 링크 발송 성공",
        });
      } else {
        res.status(400).json({
          code: 400,
          message: "비밀번호 재설정 링크 발송 실패 code 400",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "비밀번호 재설정 링크 발송 실패 code 500",
      });
    }
  },
  validateToken: async (req, res) => {
    const { token } = req.params;
    // 토큰 검증 로직
    const result = await authService.validateToken(token);

    if (result.success) {
      res.cookie("resetPwdToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 3600 * 1000,
      });
      // 토큰이 유효하면 비밀번호 재설정 페이지로 리다이렉트, 토큰을 URL 파라미터로 포함
      res.redirect(302, `http://localhost:3000/login/reset-password`);
    } else {
      // 토큰이 유효하지 않으면 에러 페이지로 리다이렉트
      res.redirect("/error");
    }
  },
  successResetPassword: async (req, res) => {
    const token = req.cookies.resetPwdToken;
    const { password } = req.body;
    const result = await authService.resetPassword(password, token);
    try {
      if (!result.success) {
        return res
          .status(400)
          .json({ message: "유효하지 않거나 만료된 토큰입니다." });
      }

      return res.status(200).json({
        code: 200,
        message: "패스워드 재설정 성공",
      });
    } catch (error) {
      console.log(" Error in authController, successResetPassword", error);
      res.status(500).json({
        success: false,
        message: "인증 확인 실패 code 500",
      });
    }
  },
};
