const authService = require("../services/user/authService");
const jwtUtil = require("../utils/jwtUtil");

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
      console.log(result.exist);
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
    try {
      const result = await authService.sendVerifyEmail(email);
      console.log("result", result.success);
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
};
