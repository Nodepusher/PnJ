const { Sequelize, DataTypes, where } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const File = require("../../models/fileModel");
const Comment = require("../../models/commentModel");
const Reply = require("../../models/replyModel");

module.exports = {
  // 전체 게시물 수 카운트
  selectAllCount: async (category) => {
    let whereCondition = {};

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

  // 무한 스크롤을 위한 게시물 찾기
  selectAllForInfiniteScroll: async (limit, page, category, sort) => {
    try {
      console.log("category", category === "false");

      let whereCondition = {};
      if (category !== "all") {
        whereCondition = { category: category };
      }
      const offset = (page - 1) * limit;

      const infiniteScroll = await Board.findAll({
        limit: limit,
        offset: offset,
        order: [["created_at", `${sort}`]],
        include: {
          model: User,
          attributes: ["id", "name"],
        },
        where: whereCondition,
      });
      return infiniteScroll;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // 게시물 삽입
  insertPost: async (postData, fileJson, thumbnail) => {
    const transaction = await sequelize.transaction();
    const fileData = fileJson.files;
    try {
      const newPost = await Board.create(postData, { transaction });
      if (fileData && fileData.length > 0) {
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
      console.log("[boardRepository] 게시물 작성 오류 :::: ", error);
      return { success: false, message: "게시물 작성 실패", error };
    }
  },

  // 게시물 ID로 찾기
  selectPostById: async (boardId) => {
    try {
      const board = await Board.findOne({
        where: { id: boardId },
      });
      return board.dataValues;
    } catch (error) {
      console.log(error);
      return { success: false, message: "에러" };
    }
  },

  // 게시물 ID로 파일 찾기
  selectFileById: async (boardId) => {
    try {
      const file = await File.findAll({
        where: { BoardId: boardId },
      });
      return file;
    } catch (err) {
      return { success: false, message: "에러" };
    }
  },

  // 게시물 ID로 포스트 찾기
  selectWritePostById: async (id) => {
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
      postData.File = Files;

      return { postData: postData, userPost: allUserPost, Files: Files };
    } catch (error) {
      console.error(error);
      await t.rollback();
      throw error;
    }
  },

  // 카테고리별 게시물 찾기
  selectPostByCategory: async (category) => {
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

  // 게시물 ID로 모든 댓글 찾기
  selectAllCommentById: async (postId) => {
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

  // 댓글 삽입
  insertComment: async (commentData) => {
    try {
      const newComment = await Comment.create(commentData);
      return newComment;
    } catch (error) {
      console.log(error.message);
      return { success: false };
    }
  },

  // 답글 삽입
  insertReply: async (replyData) => {
    try {
      const newReply = await Reply.create(replyData);
      return newReply;
    } catch (error) {
      console.log(error.message);
      return { success: false };
    }
  },

  // 게시물 업데이트
  updatePost: async (postData) => {
    try {
      await Board.update(
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

  // 파일 삽입
  insertFile: async (fileJson, boardId, userId) => {
    const fileData = fileJson.files;
    try {
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

  // 파일 삭제
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

  // 게시물 ID로 모든 파일 찾기
  selectAllFileByBoardId: async (postId) => {
    try {
      const file = await File.findAll({
        where: { BoardId: postId },
      });
      return file;
    } catch (err) {
      return { success: false, message: "에러" };
    }
  },

  // 댓글 삭제
  deleteComment: async (where) => {
    try {
      return await Comment.destroy({ where: where });
    } catch (error) {
      console.error("Error in deleteMyComment:", error);
      throw error;
    }
  },

  // 답글 삭제
  deleteReply: async (where) => {
    try {
      return await Reply.destroy({ where: where });
    } catch (error) {
      console.error("Error in deleteMyReply:", error);
      throw error;
    }
  },
};
