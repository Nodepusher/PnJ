const multer = require("multer");
const path = require("path");

// 파일 저장 경로 및 파일명 설정
const storage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, "uploads/file/"); // 업로드할 디렉토리 설정
  },
  filename: function (req, file, next) {
    const { email } = req.auth.user;
    let uniqueName = email + "_profileImage" + path.extname(file.originalname); // 파일명 설정 (고유한 이름 사용)
    next(null, uniqueName); // 파일명 설정 콜백
  },
});

const uploadImage = multer({ storage: storage });
module.exports = uploadImage;
