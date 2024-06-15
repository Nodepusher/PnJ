const { getUserByUserEmail } = require("../repositories/user/userRepository");
const jwtUtil = require("../utils/jwtUtil");
const jwt = require("jsonwebtoken");

const refresh = async (req, res, next) => {
  try {
    if (req.cookies.accessToken && req.cookies.refreshToken) {
      const accessToken = req.cookies.accessToken;
      const refreshToken = req.cookies.refreshToken;

      // 액세스 토큰 검증
      const authResult = jwtUtil.verify(accessToken);
      const decoded = jwt.decode(accessToken);

      // 액세스 토큰 만료 시 리프레시 토큰을 비교해서 액세스 토큰 재발급
      if (
        authResult.success === false &&
        authResult.message === "jwt expired"
      ) {
        const refreshResult = await jwtUtil.refreshVerify(
          refreshToken,
          decoded.email
        );
        if (!refreshResult) {
          throw new Error("Refresh failed"); // 리프레시 실패 시 에러 처리
        }

        // 액세스 토큰 만료 & 리프레시 토큰 검증 통과 시 새 액세스 토큰 발급
        const newAccessToken = jwtUtil.sign(decoded.email);

        // 쿠키에 새 액세스 토큰 저장 (res 객체를 직접 사용하지 않고, 쿠키는 나중에 라우트 핸들러에서 설정)
        req.newAccessToken = newAccessToken;
      }

      // 사용자 정보 가져오기
      const { id, email, name, profile, phone } = await getUserByUserEmail(
        decoded.email
      );

      // 인증이 성공했을 때 req.user에 할당
      req.auth = {
        isAuthenticated: true,
        user: {
          id: id,
          email: email,
          name: name,
          phone: phone,
          profile: profile,
        },
        message: "You are authorized!",
      };
    } else {
      // 토큰이 없을 때 req.user에 할당
      req.auth = {
        isAuthenticated: false,
        success: false,
        user: null,
        message: "Tokens not found",
      };
    }
  } catch (error) {
    console.error("Authentication error:", error.message);
    req.auth = {
      isAuthenticated: false,
      success: false,
      message: error.message,
    };
  } finally {
    next(); // 다음 미들웨어 또는 라우트 핸들러로 요청 전달
  }
};

module.exports = refresh;
