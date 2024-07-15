const boardService = require("../services/board/boardService");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  // 주어진 카테고리에 해당하는 모든 게시물 수를 반환
  getAllCount: async (req, res, next) => {
    let category = req.body.category || "all";
    try {
      const board = await boardService.getAllCount(category);
      res.status(200).json(board);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 무한 스크롤을 위해 주어진 조건에 맞는 게시물들을 반환
  getAllForInfiniteScroll: async (req, res, next) => {
    let category = req.body.category || "all";
    const sort = req.body.dropdownState === "최신순" ? "DESC" : "ASC";
    const limit = parseInt(req.body.limit);
    const page = parseInt(req.body.page) || 1;

    try {
      const board = await boardService.getAllForInfiniteScroll(limit, page, category, sort);
      if (!board) {
        return res.status(404).json({ error: "게시물을 찾을 수 없습니다." });
      } else if (board.error) {
        res.status(404).json({ error: "데이터를 가져오지 못했습니다." });
      } else {
        res.status(200).json(board);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 이미지 파일을 업로드하고 압축하여 저장
  saveUploadImg: async (req, res, next) => {
    if (!req.file) {
      return res.status(400).send("업로드된 파일이 없습니다.");
    }

    const tempFilePath = req.file.path;
    const outputFilePath = path.join(__dirname, "..", "uploads", "temp", `compressed-${req.file.filename}`);

    try {
      await sharp(tempFilePath)
        .resize({ width: 800, height: 800, fit: sharp.fit.inside, withoutEnlargement: true })
        .toFormat("jpeg", { quality: 80 })
        .toFile(outputFilePath);

      fs.unlink(tempFilePath, (err) => {
        if (err) {
          console.error("원본 파일 삭제 오류:", err);
        }
      });

      const fileUrl = `http://localhost:4000/uploads/temp/compressed-${req.file.filename}`;
      res.json({ url: fileUrl });
    } catch (error) {
      console.error("이미지 처리 오류:", error);
      res.status(500).json({ message: "이미지 처리 오류" });
    }
  },

  // 새로운 게시물을 생성
  createPost: async (req, res, next) => {
    const { thumbnail, files } = req.files;
    const { user } = req.auth;
    const postData = JSON.parse(req.body.postData);

    try {
      const result = await boardService.createPost(postData, files, thumbnail, user);
      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 게시물을 업데이트
  updatePost: async (req, res, next) => {
    const fileJson = req.files.files;
    const postData = JSON.parse(req.body.postData);

    try {
      const result = await boardService.updatePost(postData, fileJson);
      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 게시물 ID로 게시물 정보 가져오기
  getBoardById: async (req, res, next) => {
    try {
      const boardData = await boardService.findBoardById(req.body.boardId);
      res.json(boardData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 게시물 ID로 게시물 및 관련 데이터 가져오기
  getPostById: async (req, res, next) => {
    try {
      const data = await boardService.getPostById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 카테고리로 게시물 가져오기
  getPostByCategory: async (req, res, next) => {
    try {
      const data = await boardService.getPostByCategory(req.query.category);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 게시물 ID로 모든 댓글 가져오기
  getCommentById: async (req, res, next) => {
    try {
      const data = await boardService.getAllCommentById(req.params.id);
      res.status(data.error ? 404 : 200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 새로운 댓글 생성
  createComment: async (req, res, next) => {
    const { BoardId, content } = req.body;
    const { isAuthenticated, user } = req.auth;

    if (!isAuthenticated) {
      return res.status(400).json({ message: "사용자가 인증되지 않았습니다." });
    }

    const commentData = { content, BoardId, UserId: user.id };

    try {
      const data = await boardService.createComment(commentData);
      res.status(data.success ? 200 : 400).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 새로운 답글 생성
  createReply: async (req, res, next) => {
    const { BoardId, content, CommentId } = req.body;
    const { isAuthenticated, user } = req.auth;

    if (!isAuthenticated) {
      return res.status(400).json({ message: "사용자가 인증되지 않았습니다." });
    }

    const replyData = { content, BoardId, UserId: user.id, CommentId };

    try {
      const data = await boardService.createReply(replyData);
      res.status(data.success ? 200 : 400).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 댓글 삭제
  deleteMyComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const result = await boardService.deleteMyComment(commentId);

      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      console.error("댓글 삭제 중 오류:", error);
      res.status(500).json({ success: false, message: "서버 내부 오류" });
    }
  },

  // 답글 삭제
  deleteMyReply: async (req, res) => {
    try {
      const { replyId } = req.params;
      const result = await boardService.deleteMyReply(replyId);

      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      console.error("답글 삭제 중 오류:", error);
      res.status(500).json({ success: false, message: "서버 내부 오류" });
    }
  },
};
