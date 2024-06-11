const userService = require("../services/user/userService");
const jwtUtil = require("../utils/jwtUtil");
const redisClient = require("../utils/redisClient");
const crypto = require("crypto");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const login = await userService.login(email, password);
      console.log(login.success, login.message);

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

        res.set({
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + accessToken,
          Refresh: "Bearer " + refreshToken,
        });

        res.status(200).send({
          // client에게 토큰 모두를 반환합니다.
          success: true,
          /*
          token: {
            accessToken,
            refreshToken,
          },*/
        });
      } else {
        res.status(401).send({
          success: false,
          message: "email or password is incorrect",
        });
      }
    } catch (error) {
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
      const post = await userService.getMyPost(email);
      if (!post) {
        res.status(400).json(post);
        return;
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "500",
      });
    }
  },
};
