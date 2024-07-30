const boardService = require("../services/board/boardService");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  // 모든 게시물 수 가져오기
  getAllCount: async (req, res, next) => {
    let category = req.body.category || "all";
    try {
      const board = await boardService.findAllCount(category);
      res.status(200).json(board);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  // 무한 스크롤을 위한 게시물 가져오기
  getAllForInfiniteScroll: async (req, res, next) => {
    let category = req.body.category || "all";
    const sort = req.body.dropdownState === "최신순" ? "DESC" : "ASC";
    const limit = parseInt(req.body.limit);
    const page = parseInt(req.body.page) || 1;

    try {
      const board = await boardService.findAllForInfiniteScroll(
        limit,
        page,
        category,
        sort
      );
      if (!board) {
        return res.status(404).json({ error: "No boards found" });
      }
      res.status(200).json(board);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  
  // 이미지 업로드 처리 및 저장
  saveUploadImg: async (req, res, next) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const tempFilePath = req.file.path;
    const outputFilePath = path.join(
      __dirname,
      "..",
      "uploads",
      "temp",
      `compressed-${req.file.filename}`
    );

    try {
      await sharp(tempFilePath)
        .resize({
          width: 800,
          height: 800,
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toFormat("jpeg", { quality: 80 })
        .toFile(outputFilePath);

      fs.unlink(tempFilePath, (err) => {
        if (err) {
          console.error("Error deleting original file:", err);
        }
      });

      const fileUrl = `http://localhost:4000/uploads/temp/compressed-${req.file.filename}`;
      res.json({ url: fileUrl });
    } catch (error) {
      res.status(500).json({ message: "Error processing image" });
    }
  },
  
  // 게시물 생성
  createPost: async (req, res, next) => {
    const { thumbnail, files } = req.files;
    const { user } = req.auth;
    const postData = JSON.parse(req.body.postData);
    const result = await boardService.createPost(postData, files, thumbnail, user);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  },
  
  // 게시물 수정
  updatePost: async (req, res, next) => {
    const fileJson = req.files.files;
    const postData = JSON.parse(req.body.postData);
    const sendResult = await boardService.updatePost(postData, fileJson);
    if (sendResult.success) {
      res.status(200).json(sendResult);
    } else {
      res.status(400).json(sendResult);
    }
  },
  
  // 게시물 ID로 게시물 가져오기
  getBoardById: async (req, res, next) => {
    const boardData = await boardService.findPostById(req.body.boardId);
    res.json(boardData);
  },

  // 작성된 게시물 ID로 게시물 가져오기
  getWritePostById: async (req, res, next) => {
    const data = await boardService.findWritePostById(req.params.id);
    res.json(data);
  },
  
  // 카테고리별 게시물 가져오기
  getPostByCategory: async (req, res, next) => {
    const data = await boardService.findPostByCategory(req.query.category);
    res.json(data);
  },
  
  // 게시물 ID로 모든 댓글 가져오기
  getCommentById: async (req, res, next) => {
    const data = await boardService.findAllCommentById(req.params.id);
    if (data.error) {
      res.status(404).send(data);
    } else {
      res.status(200).json(data);
    }
  },
  
  // 댓글 생성
  createComment: async (req, res, next) => {
    const { BoardId, content } = req.body;
    const { isAuthenticated, user } = req.auth;
    if (!isAuthenticated) {
      return res.status(400).json({ message: "Is Not Authenticated User" });
    }
    const commentData = {
      content: content,
      BoardId: BoardId,
      UserId: user.id,
    };
    const data = await boardService.createComment(commentData);
    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  },
  
  // 대댓글 생성
  createReply: async (req, res, next) => {
    const { BoardId, content, CommentId } = req.body;
    const { isAuthenticated, user } = req.auth;
    if (!isAuthenticated) {
      return res.status(400).json({ message: "Is Not Authenticated User" });
    }
    const replyData = {
      content: content,
      BoardId: BoardId,
      UserId: user.id,
      CommentId: CommentId,
    };
    const data = await boardService.createReply(replyData);
    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  },
  
  // 내 댓글 삭제
  deleteMyComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const result = await boardService.deleteMyComment(commentId);

      if (result.success) {
        return res
          .status(200)
          .json({ success: true, message: "댓글 삭제 성공" });
      } else {
        res
          .status(400)
          .json({ success: false, message: "댓글 삭제 실패" });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "서버 오류",
      });
    }
  },

  // 내 대댓글 삭제
  deleteMyReply: async (req, res) => {
    try {
      const { replyId } = req.params;
      const result = await boardService.deleteMyReply(replyId);

      if (result.success) {
        return res
          .status(200)
          .json({ success: true, message: "대댓글 삭제 성공" });
      } else {
        res
          .status(400)
          .json({ success: false, message: "대댓글 삭제 실패" });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "서버 오류",
      });
    }
  },
};
