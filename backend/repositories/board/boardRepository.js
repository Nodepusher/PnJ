const { Sequelize, DataTypes, where } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const File = require("../../models/fileModel");
const Comment = require("../../models/commentModel");
const Reply = require("../../models/replyModel");
const db = require("../../models");

module.exports = {
  findAllCount: async (category) => {
    console.log("repo ::: ", category);
    whereCondition = {};

    if (category !== "all") {
      whereCondition = { category: category };
    }
    try {
      const findAllCount = await Board.count({
        where: whereCondition,
      });
      return findAllCount;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  findAllForInfiniteScroll: async (limit, page, category, sort) => {
    try {
      console.log("category", category === "false");

      whereCondition = {};
      if (category !== "all") {
        whereCondition = { category: category };
      }
      const offset = (page - 1) * limit;

      let infiniteScroll = await Board.findAll({
        limit: limit,
        offset: offset,
        order: [["created_at", `${sort}`]],
        include: {
          model: User,
          attributes: ["id", "name"],
        },
        // option
        where: whereCondition,
      });
      return infiniteScroll;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  InsertPost: async (postData, fileJson) => {
    const transaction = await sequelize.transaction();
    // 게시물 작성
    // Board.create()
    // console.log("postData :::: ", postData);
    // console.log("files :::: ", fileJson.files);
    const fileData = fileJson.files;
    try {
      const newPost = await Board.create(postData, { transaction });
      console.log(newPost.dataValues);
      if (fileData && fileData.length > 0) {
        console.log("test");
        const filePromise = fileData.map((files) => {
          return File.create(
            {
              uuid: files.uuid,
              uploadPath: files.uploadPath,
              fileName: files.fileName,
              fileType: files.fileType,
              fileSize: files.fileSize,
              BoardId: newPost.dataValues.id,
              UserId: postData.UserId,
            },
            { transaction }
          );
        });
        await Promise.all(filePromise);
      }
      await transaction.commit();
      return { success: true, message: "게시물 작성 성공", post: newPost };
    } catch (error) {
      await transaction.rollback();
      console.log("[boardRepository]" + "게시물 작성 오류 :::: ", error);
      return { success: false, message: "게시물 작성 실패", error };
    }
  },
  findBoardById: async (boardId) => {
    try {
      const board = await Board.findOne({
        where: { id: boardId },
      });

      console.log("board 정보 ", board.dataValues);
      return board.dataValues;
    } catch (error) {
      console.log(error);
      return { success: false, message: "에러" };
    }
  },
  findFileById: async (boardId) => {
    try {
      const file = await File.findAll({
        where: { BoardId: boardId },
      });
      return file;
    } catch (err) {
      return { success: false, message: "에러" };
    }
  },

  findPostById: async (id) => {
    const t = await sequelize.transaction();
    try {
      const postData = await Board.findOne(
        {
          where: { id: id },
          include: [{ model: User }],
        },
        { transaction: t }
      );
      const Files = await File.findAll(
        {
          where: { BoardId: id },
        },
        { transaction: t }
      );
      const userId = postData.User.id;
      const allUserPost = await Board.findAll(
        {
          where: { UserId: userId },
          order: [["createdAt", "DESC"]],
          limit: 3,
          include: { model: User },
        },
        { transaction: t }
      );

      await t.commit();
      console.log(Files)
      postData.File = Files;
      // console.log(postData)

      return { postData: postData, userPost: allUserPost, Files: Files };
    } catch (error) {
      // 오류 처리
      console.error(error);
      await t.rollback();
      throw error;
    }
  },
  findPostByCategory: async (category) => {
    try {
      const postData = await Board.findAll({
        where: { category: category },
        order: [["createdAt", "DESC"]],
        limit: 5,
        include: { model: User },
      });
      return postData;
    } catch (error) {
      console.error(error);
    }
  },
  findAllCommentById: async (postId) => {
    try {
      const comments = await Comment.findAll({
        where: { BoardId: postId },
        include: [
          {
            model: Reply,
            include: [
              {
                model: User,
                attributes: ["name", "profile"],
              },
            ],
          },
          {
            model: User,
            attributes: ["name", "profile"],
          },
        ],
      });

      return comments;
    } catch (error) {
      return { error: error.message };
    }
  },
  InsertComment: async (commentData) => {
    console.log(commentData);
    try {
      const newComment = await Comment.create(commentData);
      return newComment;
    } catch (error) {
      console.log(error.message);
      return { success: false };
    }
  },
  InsertReply: async (replyData) => {
    console.log(replyData);
    console.log(Reply);
    try {
      const newReply = await Reply.create(replyData);
      return newReply;
    } catch (error) {
      console.log(error.message);
      return { success: false };
    }
  },
  updatePost: async (postData) => {
    console.log("updateadfafas ",postData);
    try {
      const update = await Board.update(
        {
          title: postData.title,
          content: postData.content,
          category: postData.category,
          tag: postData.tag,
        },
        {
          where: {
            id: postData.BoardId,
          },
        }
      );
      return { success: true, message: "post update Success" };
    } catch (error) {
      return { success: false, message: "post update fail" + error.message };
    }
  },
  insertFile: async (fileJson, boardId, userId) => {
    console.log(fileJson);
    const fileData = fileJson.files;
    try {
      // const createFile = await File.create(fileJson.files, {where : {BoardId: boardId}})
      const filePromise = fileData.map((files) => {
        return File.create({
          uuid: files.uuid,
          uploadPath: files.uploadPath,
          fileName: files.fileName,
          fileType: files.fileType,
          fileSize: files.fileSize,
          BoardId: boardId,
          UserId: userId,
        });
      });
      await Promise.all(filePromise);
      return { success: true, message: "file create Success" };
    } catch (error) {
      return { success: false, message: "file create Fail" + error.message };
    }
  },
  deleteFile: async (deleteFile) => {
    try {
      await File.destroy({
        where: {
          id: deleteFile,
        },
      });
      return { success: true, message: "file delete Success" };
    } catch (error) {
      return { success: false, message: "file delete Fail" + error.message };
    }
  },
  findAllFileByBoardId: async (postId) => {
    console.log("postId", postId);
    try {
      const file = await File.findAll({
        where: { BoardId: postId },
      });
      console.log("findAll File", file);
      return file;
    } catch (err) {
      return { success: false, message: "에러" };
    }
  },
};
