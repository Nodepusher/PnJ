const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const File = require("../../models/fileModel");
const Comment = require("../../models/commentModel");
const Reply = require("../../models/replyModel");

module.exports = {
  // 주어진 카테고리에 해당하는 게시물 수를 반환
  findAllCount: async (category) => {
    console.log("repo ::: ", category);
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

  // 무한 스크롤을 위해 주어진 조건에 맞는 게시물들을 반환
  findAllForInfiniteScroll: async (limit, page, category, sort) => {
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
        order: [["created_at", sort]],
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

  // 새로운 게시물을 삽입
  InsertPost: async (postData, fileJson) => {
    const transaction = await sequelize.transaction();
    const fileData = fileJson.files;
    try {
      const newPost = await Board.create(postData, { transaction });
      console.log(newPost.dataValues);

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

  // 게시물 ID로 게시물 찾기
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

  // 게시물 ID로 파일 찾기
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

  // 게시물 ID로 게시물 및 관련 파일, 사용자 게시물 찾기
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
      postData.File = Files;

      return { postData: postData, userPost: allUserPost, Files: Files };
    } catch (error) {
      console.error(error);
      await t.rollback();
      throw error;
    }
  },

  // 주어진 카테고리로 게시물 찾기
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

  // 게시물 ID로 댓글 및 답글 찾기
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

  // 새로운 댓글 삽입
  InsertComment: async (commentData) => {
    try {
      const newComment = await Comment.create(commentData);
      return newComment;
    } catch (error) {
      console.log(error.message);
      return { success: false };
    }
  },

  // 새로운 답글 삽입
  InsertReply: async (replyData) => {
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
      return { success: true, message: "게시물 업데이트 성공" };
    } catch (error) {
      return { success: false, message: "게시물 업데이트 실패: " + error.message };
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
      return { success: true, message: "파일 생성 성공" };
    } catch (error) {
      return { success: false, message: "파일 생성 실패: " + error.message };
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
      return { success: true, message: "파일 삭제 성공" };
    } catch (error) {
      return { success: false, message: "파일 삭제 실패: " + error.message };
    }
  },

  // 게시물 ID로 모든 파일 찾기
  findAllFileByBoardId: async (postId) => {
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
      console.error("댓글 삭제 오류:", error);
      throw error;
    }
  },

  // 답글 삭제
  deleteReply: async (where) => {
    try {
      return await Reply.destroy({ where: where });
    } catch (error) {
      console.error("답글 삭제 오류:", error);
      throw error;
    }
  },
};
