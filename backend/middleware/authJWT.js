const jwt = require("../utils/jwtUtil");
const jsonwebtoken = require("jsonwebtoken");

const authJWT = (req, res, next) => {
  if (req.headers.authorization) {
    const accessToken = req.cookies.accessToken;
    console.log("accessToken", accessToken);
    const result = jwt.verify(accessToken);
    if (result.success) {
      // token이 검증되었으면 req에 값을 세팅하고, 다음 콜백함수로 갑니다.
      req.email = result.email;
      next();
    } else {
      // 검증에 실패하거나 토큰이 만료되었다면 클라이언트에게 메세지를 담아서 응답합니다.
      res.status(401).send({
        success: false,
        message: result.message, // jwt가 만료되었다면 메세지는 'jwt expired'입니다.
      });
    }
  }
};

module.exports = authJWT;
