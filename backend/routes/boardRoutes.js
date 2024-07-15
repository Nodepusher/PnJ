const express = require("express");
const boardController = require("../controllers/boardController");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const upload = require("../middleware/upload");

const router = express.Router();

const storageImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/temp/");
  },
  filename: function (req, file, cb) {
    let uniqueName = uuidv4() + path.extname(file.originalname);
    cb(null, file.originalname);
  },
});
const storageFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/file/");
  },
  filename: function (req, file, cb) {
    let uniqueName = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// 이미지는 원래 filename으로 저장
// file Table에 저장할때 uuid

const uploadImage = multer({ storage: storageImg });
const uploadFile = multer({ storage: storageFile });

// 게시물 총 개수
router.post("/count", boardController.getAllCount);
// 목록페이지
router.post("/list/:category?", boardController.getAllForInfiniteScroll);

router.post(
  "/uploadImg",
  uploadImage.single("image"),
  boardController.saveUploadImg
);

router.post(
  "/createPost",
  upload.fields([{ name: "thumbnail" }, { name: "files" }]),
  boardController.createPost
);

router.post("/writeData", boardController.getBoardById);
router.put(
  "/updatePost/:id",
  uploadFile.fields([{ name: "files" }]),
  boardController.updatePost
);

router.get("/detail/:id", boardController.getPostById);
router.get("/latest", boardController.getPostByCategory);
// Board라우트라 id 기본값이 post겠지만 getCommentByPostId로 명시하면 직관적인 명명이었을것 같음
router.get("/comment/:id", boardController.getCommentById);
router.post("/createComment", boardController.createComment);
router.post("/createReply", boardController.createReply);

router.delete("/deleteComment/:commentId", boardController.deleteMyComment);
router.delete("/deleteReply/:replyId", boardController.deleteMyReply);

module.exports = router;
