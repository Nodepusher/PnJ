const express = require("express");
const boardController = require("../controllers/boardController");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const upload = require("../middleware/upload");

const router = express.Router();

// 이미지 저장소 설정
const storageImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/temp/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// 파일 저장소 설정
const storageFile = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/file/");
  },
  filename: (req, file, cb) => {
    const uniqueName = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// 이미지 업로드 미들웨어 설정
const uploadImage = multer({ storage: storageImg });

// 파일 업로드 미들웨어 설정
const uploadFile = multer({ storage: storageFile });

// 라우트 정의
router.post("/count", boardController.getAllCount); // 게시물 총 개수
router.post("/list/:category?", boardController.getAllForInfiniteScroll); // 목록 페이지

// 이미지 업로드 라우트
router.post("/uploadImg", uploadImage.single("image"), boardController.saveUploadImg);

// 게시물 생성 라우트
router.post("/createPost", upload.fields([{ name: "thumbnail" }, { name: "files" }]), boardController.createPost);

// 게시물 ID로 게시물 정보 가져오기
router.post("/writeData", boardController.getBoardById);

// 게시물 업데이트 라우트
router.put("/updatePost/:id", uploadFile.fields([{ name: "files" }]), boardController.updatePost);

// 게시물 ID로 게시물 상세 정보 가져오기
router.get("/detail/:id", boardController.getPostById);

// 카테고리별 최신 게시물 가져오기
router.get("/latest", boardController.getPostByCategory);

// 게시물 ID로 댓글 가져오기
router.get("/comment/:id", boardController.getCommentById);

// 새로운 댓글 생성
router.post("/createComment", boardController.createComment);

// 새로운 답글 생성
router.post("/createReply", boardController.createReply);

// 댓글 삭제
router.delete("/deleteComment/:commentId", boardController.deleteMyComment);

// 답글 삭제
router.delete("/deleteReply/:replyId", boardController.deleteMyReply);

module.exports = router;
