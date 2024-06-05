const userService = require("../services/user/userService");
const jwt = require("../utils/jwtUtil");
const redisClient = require("../utils/redisClient");
const crypto = require("crypto");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const login = await userService.login(email, password);
      if (login.success) {
        // access token과 refresh token을 발급합니다.
        // const accessToken = jwt.sign(login.email);
        const accessToken = jwt.sign(email);
        const refreshToken = jwt.refresh();

        // 발급한 refresh token을 redis에 key를 user의 id로 하여 저장합니다.
        //redisClient.set(login.email, refreshToken);
        redisClient.set(email, refreshToken);

        res.status(200).send({
          // client에게 토큰 모두를 반환합니다.
          success: true,
          data: {
            accessToken,
            refreshToken,
          },
        });
      } else {
        res.status(401).send({
          success: false,
          message: "password is incorrect",
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
    const { email, phone, password, name } = req.body;
    try {
      const result = await userService.createUser(email, phone, password, name);
      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(401).json(result);
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "500",
      });
    }
  },
};
