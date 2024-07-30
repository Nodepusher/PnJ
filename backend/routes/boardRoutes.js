const express = require("express");
const boardController = require("../controllers/boardController");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const upload = require("../middleware/upload");

const router = express.Router();

// 이미지 저장소 설정
const storageImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/temp/"); // 이미지 임시 저장 경로 설정
  },
  filename: function (req, file, cb) {
    let uniqueName = uuidv4() + path.extname(file.originalname); // 파일 이름에 uuid 추가하여 유니크하게 만듦
    cb(null, uniqueName);
  },
});

// 파일 저장소 설정
const storageFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/file/"); // 파일 저장 경로 설정
  },
  filename: function (req, file, cb) {
    let uniqueName = uuidv4() + path.extname(file.originalname); // 파일 이름에 uuid 추가하여 유니크하게 만듦
    cb(null, uniqueName);
  },
});

// Multer 설정
const uploadImage = multer({ storage: storageImg });
const uploadFile = multer({ storage: storageFile });

// 모든 게시물 수 가져오기
router.post("/count", boardController.getAllCount);

// 무한 스크롤을 위한 게시물 리스트 가져오기
router.post("/list/:category?", boardController.getAllForInfiniteScroll);

// 이미지 업로드
router.post(
  "/uploadImg",
  uploadImage.single("image"), // 단일 이미지 업로드 설정
  boardController.saveUploadImg
);

// 게시물 생성
router.post(
  "/createPost",
  upload.fields([{ name: "thumbnail" }, { name: "files" }]), // 썸네일 및 파일 업로드 설정
  boardController.createPost
);

// 게시물 ID로 게시물 가져오기
router.post("/writeData", boardController.getBoardById);

// 게시물 수정
router.put(
  "/updatePost/:id",
  uploadFile.fields([{ name: "files" }]), // 파일 업로드 설정
  boardController.updatePost
);

// 작성된 게시물 ID로 게시물 가져오기
router.get("/detail/:id", boardController.getWritePostById);

// 최신 게시물 카테고리별로 가져오기
router.get("/latest", boardController.getPostByCategory);

// 게시물 ID로 댓글 가져오기
router.get("/comment/:id", boardController.getCommentById);

// 댓글 생성
router.post("/createComment", boardController.createComment);

// 대댓글 생성
router.post("/createReply", boardController.createReply);

// 내 댓글 삭제
router.delete("/deleteComment/:commentId", boardController.deleteMyComment);

// 내 대댓글 삭제
router.delete("/deleteReply/:replyId", boardController.deleteMyReply);

module.exports = router;
