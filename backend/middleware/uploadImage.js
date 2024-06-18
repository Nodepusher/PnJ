const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 파일 저장 경로 및 파일명 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/file/"); // 업로드할 디렉토리 설정
  },
  filename: async function (req, file, cb) {
    const { email, profile } = req.auth.user;
    const extension = path.extname(file.originalname);
    const newFileName = `${email}_profileImage${extension}`;
    const oldFilePath = path.join("uploads", "file", profile);
    try {
      // 기존 파일 삭제
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
        console.log("기존 파일 삭제 완료:", oldFilePath);
      }
      cb(null, newFileName); // 새로운 파일명 설정 콜백
    } catch (err) {
      console.error("Error deleting old profile image:", err);
      cb(err);
    }
  },
});

const uploadImage = multer({ storage: storage });
module.exports = uploadImage;
