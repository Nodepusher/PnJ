const jwt = require("../util/jwtUtil");
const jsonwebtoken = require("jsonwebtoken");

const refresh = async (req, res, next) => {
  console.log(req.cookies.refreshToken);
  if (req.cookies.accessToken && req.cookies.refreshToken) {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    const authResult = jwt.verify(accessToken);

    const decoded = jsonwebtoken.decode(accessToken);
    console.log("decoded", decoded);
    if (decoded === null) {
      res.status(401).send({
        ok: false,
        message: "No authorized!",
      });
    }

    const refreshResult = await refreshVerify(refreshToken, decoded.email);

    if (authResult.success === false && authResult.message === "jwt expired") {
      if (refreshResult.ok === false) {
        res.status(401).send({
          success: false,
          message: "No authorized",
        });
      } else {
        const new_accessToken = jwt.sign({
          email: decoded.email,
        });

        res.cookie("accessToken", new_accessToken, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        });

        res.status(200).send({
          success: true,
          data: {
            email: decoded.email,
          },
        });
      }
    }
  } else {
    res.status(403).send({
      success: false,
      error: "토큰이 없습니다.",
    });
  }
};

module.exports = refresh;

/*
{
  // 엑세스 토큰 만료 시 재발급을 위한 미들웨어
  if (req.expired) {
    try {
      const cookies = req.cookies;
      // 쿠키가 없는 경우
      if (!cookies?.issuebombomCookie)
        return res.status(403).send({ msg: '엑세스 토큰 재발급을 위한 쿠키 없음' });

      // 쿠키가 있으면
      const refreshToken = cookies.issuebombomCookie;
      // DB에 저장된 쿠키가 있는지 확인
      const user = await User.findOne({ refreshToken });
      if (!user) return res.status(403).send({ msg: '해당 쿠키에는 등록된 리프레시 토큰이 없음' });
      // 쿠키 검증
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
        // refresh token이 만료된 경우 재로그인 안내
        if (err) return res.status(403).send({ msg: '리프레시 토큰이 만료됨 (재 로그인 필요)' });

        // 신규 토큰 생성
        const accessToken = jwt.sign(
          { username: user.username, _id: user._id },
          process.env.ACCESS_TOKEN_KEY,
          { expiresIn: '30m' }
        );
        // 재발급
        res.setHeader('Authorization', `Bearer ${accessToken}`);
        res.status(200).send({ msg: '엑세스 토큰이 만료되어 재발급' });
      });
    } catch (err) {
      console.error(err.name, ':', err.message);
      return res.status(500).send({ msg: `${err.message}` });
    }
  } else {
    next();
  }
}
*/
