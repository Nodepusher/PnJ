const userRepository = require("../repositories/user/userRepository");
const userService = require("../services/user/userService");
const jwtUtil = require("../utils/jwtUtil");
const redisClient = require("../utils/redisClient");
const crypto = require("crypto");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const login = await userService.login(email, password);

      if (login.status === "require_verify") {
        return res.status(401).send({
          success: false,
          message: "인증되지 않은 사용자입니다.",
          status: login.status,
        });
      }

      if (login.success) {
        // access token과 refresh token을 발급합니다.
        // const accessToken = jwt.sign(login.email);
        const accessToken = jwtUtil.sign(email);
        const refreshToken = jwtUtil.refresh();

        // 발급한 refresh token을 redis에 key를 user의 id로 하여 저장합니다.
        //redisClient.set(login.email, refreshToken);
        redisClient.set(email, refreshToken);
        redisClient.expire(email, 60 * 60);

        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        });

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        });

        const user = await userRepository.getUserByUserEmail(email);

        res.status(200).send({
          user: user,
          success: true,
        });
      } else {
        res.status(401).send({
          success: false,
          message: "email or password is incorrect",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "500",
      });
    }
  },

  logout: async (req, res) => {
    try {
      // Access Token 및 Refresh Token 변수 선언
      const accessToken = req.cookies.accessToken;
      const refreshToken = req.cookies.refreshToken;

      // Redis에서 토큰들 삭제
      redisClient.del(refreshToken);
      redisClient.del(accessToken);

      // 쿠키에 담은 토큰들 삭제
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      return res.status(200).json({ message: "Logout successful" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "500",
      });
    }
  },

  createUser: async (req, res) => {
    const { email, phoneNumber: phone, password, name } = req.body.data;
    try {
      const create = await userService.createUser(email, phone, password, name);
      if (create.result === "duplEmail") {
        res.status(409).json(create);
        return;
      }
      res.status(200).json(create);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "500",
      });
    }
  },

  getMyPost: async (req, res) => {
    try {
      const { user } = req.auth;
      console.log(user);
      const post = await userService.getMyPost(user.id);
      if (!post) {
        res.status(400).json(post);
        return;
      }
      res.status(200).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "500",
      });
    }
  },

  checkAuthenticated: async (req, res) => {
    try {
      res.status(200).json(req.auth);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "500",
      });
    }
  },

  updateUserInfo: async (req, res) => {
    try {
      const { email } = req.auth.user;
      const { password } = req.body;
      const { originalname } = req.file;
      const update = await userService.updateUserInfo(
        email,
        password,
        originalname
      );

      if (!update) {
        res.status(400).json({ success: false });
        return;
      }
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.log("updateUserInfo Controller Error", error);
      res.status(500).json({
        file: req.file,
        success: false,
        message: "500",
      });
    }
  },
};
