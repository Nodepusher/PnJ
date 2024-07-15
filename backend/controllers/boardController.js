const boardService = require("../services/board/boardService");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  getAllCount: async (req, res, next) => {
    let category = req.body.category || "all";
    try {
      const board = await boardService.getAllCount(category);
      res.status(200).json(board);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllForInfiniteScroll: async (req, res, next) => {
    let category = req.body.category || "all";
    const sort = req.body.dropdownState === "최신순" ? "DESC" : "ASC";
    const limit = parseInt(req.body.limit);
    const page = parseInt(req.body.page) || 1;

    try {
      const board = await boardService.getAllForInfiniteScroll(limit, page, category, sort);
      if (!board) {
        return res.status(404).json({ error: "No boards found" });
      } else if (board.error) {
        res.status(404).json({ error: "Failed to fetch data" });
      } else {
        res.status(200).json(board);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  saveUploadImg: async (req, res, next) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
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
          console.error("Error deleting original file:", err);
        }
      });

      const fileUrl = `http://localhost:4000/uploads/temp/compressed-${req.file.filename}`;
      res.json({ url: fileUrl });
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(500).json({ message: "Error processing image" });
    }
  },

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

  getBoardById: async (req, res, next) => {
    try {
      const boardData = await boardService.findBoardById(req.body.boardId);
      res.json(boardData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPostById: async (req, res, next) => {
    try {
      const data = await boardService.getPostById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPostByCategory: async (req, res, next) => {
    try {
      const data = await boardService.getPostByCategory(req.query.category);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCommentById: async (req, res, next) => {
    try {
      const data = await boardService.getAllCommentById(req.params.id);
      res.status(data.error ? 404 : 200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createComment: async (req, res, next) => {
    const { BoardId, content } = req.body;
    const { isAuthenticated, user } = req.auth;

    if (!isAuthenticated) {
      return res.status(400).json({ message: "User is not authenticated" });
    }

    const commentData = { content, BoardId, UserId: user.id };

    try {
      const data = await boardService.createComment(commentData);
      res.status(data.success ? 200 : 400).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createReply: async (req, res, next) => {
    const { BoardId, content, CommentId } = req.body;
    const { isAuthenticated, user } = req.auth;

    if (!isAuthenticated) {
      return res.status(400).json({ message: "User is not authenticated" });
    }

    const replyData = { content, BoardId, UserId: user.id, CommentId };

    try {
      const data = await boardService.createReply(replyData);
      res.status(data.success ? 200 : 400).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteMyComment: async (req, res) => {
    try {
      const { commentId } = req.params;
      const result = await boardService.deleteMyComment(commentId);

      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      console.error("Error in deleteMyComment:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  },

  deleteMyReply: async (req, res) => {
    try {
      const { replyId } = req.params;
      const result = await boardService.deleteMyReply(replyId);

      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      console.error("Error in deleteMyReply:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  },
};
