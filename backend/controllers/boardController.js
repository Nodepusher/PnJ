const boardService = require("../services/board/boardService");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  getAllCount: async (req, res, next) => {
    var category = req.body.category;
    if (category === "") {
      category = "all";
    }
    try {
      const board = await boardService.getAllCount(category);
      console.log(board);
      res.status(200).json(board);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAllForInfiniteScroll: async (req, res, next) => {
    console.log(req.body.params);
    var category = req.body.category;
    var sort = req.body.dropdownState === "최신순" ? "DESC" : "ASC";
    console.log(":::cate", !category);
    if (!category) {
      category = "all";
    }
    console.log(category);
    const limit = parseInt(req.body.limit);
    const page = parseInt(req.body.page) || 1;

    try {
      const board = await boardService.getAllForInfiniteScroll(
        limit,
        page,
        category,
        sort
      );
      if (!board) {
        return res.status(404).json({ error: "No boards found" });
      }
      console.log(":::::: ", board.length);
      res.status(200).json(board);
    } catch (error) {
      console.error("1234 :::::::", error);
      res.status(500).json({ error: error.message });
    }
  },
  saveUploadImg: async (req, res, next) => {
    console.log("File received:", req.file);
    console.log("Other data:", req.body);

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
      console.error("Error processing image:", error);
      res.status(500).json({ message: "Error processing image" });
    }
  },
  createPost: async (req, res, next) => {
    console.log(req.files);
    console.log(req.body);
    const fileJson = req.files.files;
    const postData = JSON.parse(req.body.postData);
    const result = await boardService.createPost(postData, fileJson);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  },
  getBoardById: async (req, res, next) => {
    console.log(req.body);
    const boardData = await boardService.findBoardById(req.body.boardId);
    res.json(boardData);
  },

  getPostById: async (req, res, next) => {
    console.log(req.params);
    const data = await boardService.getPostById(req.params.id);
    res.json(data);
  },
  getPostByCategory : async (req, res, next) => {
    console.log("::::::: ",req.query);
    const data = await boardService.getPostByCategory(req.query.category);
    res.json(data)

  }
};
