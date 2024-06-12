const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const redisClient = require("./redisClient");
const secret = process.env.JWT_SECRET;
const refreshSecret = process.env.JWT_REFRESH_SECRET;

module.exports = {
  sign: (email, tokenType = "default", expiresIn = "15m") => {
    const payload = {
      email: email,
      token_type: tokenType,
    };

    return jwt.sign(payload, secret, {
      // secret으로 sign하여 발급하고 return
      algorithm: "HS256", // 암호화 알고리즘
      expiresIn: expiresIn, // 유효기간
    });
  },
  verify: (token) => {
    // access token 검증
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret);
      return {
        success: true,
        email: decoded.email,
        token_type: decoded.token_type,
      };
    } catch (err) {
      return {
        success: false,
        message: err.message,
      };
    }
  },
  refresh: () => {
    // refresh token 발급
    return jwt.sign({}, refreshSecret, {
      // refresh token은 payload 없이 발급
      algorithm: "HS256",
      expiresIn: "1h",
    });
  },
  refreshVerify: async (token, email) => {
    // refresh token 검증
    /* redis 모듈은 기본적으로 promise를 반환하지 않으므로,
       promisify를 이용하여 promise를 반환하게 해줍니다.*/
    const getAsync = promisify(redisClient.get).bind(redisClient);

    try {
      const data = await getAsync(email); // refresh token 가져오기
      if (token === data) {
        try {
          jwt.verify(token, refreshSecret);
          return true;
        } catch (err) {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
};
