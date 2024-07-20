const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../utils/db").sequelize;
const Board = require("../../models/boardModel");
const User = require("../../models/userModel");
const File = require("../../models/fileModel");
const Comment = require("../../models/commentModel");
const Reply = require("../../models/replyModel");
const db = require("../../models");

module.exports = {
  findAllCount: async (category) => {
    try {
      const whereCondition = category !== "all" ? { category } : {};
      return await Board.count({ where: whereCondition });
    } catch (error) {
      throw new Error(`Error finding all count: ${error.message}`);
    }
  },

  findAllForInfiniteScroll: async (limit, page, category, sort) => {
    try {
      const whereCondition = category !== "all" ? { category } : {};
      const offset = (page - 1) * limit;

      return await Board.findAll({
        limit,
        offset,
        order: [["created_at", sort]],
        include: {
          model: User,
          attributes: ["id", "name"],
        },
        where: whereCondition,
      });
    } catch (error) {
      console.error(`Error in infinite scroll: ${error.message}`);
      return { error: 'Error in fetching posts for infinite scroll' };
    }
  },

  InsertPost: async (postData, fileJson) => {
    const transaction = await sequelize.transaction();
    try {
      const newPost = await Board.create(postData, { transaction });

      if (fileJson.files && fileJson.files.length > 0) {
        const filePromises = fileJson.files.map((file) =>
          File.create({
            uuid: file.uuid,
            uploadPath: file.uploadPath,
            fileName: file.fileName,
            fileType: file.fileType,
            fileSize: file.fileSize,
            BoardId: newPost.id,
            UserId: postData.UserId,
          }, { transaction })
        );
        await Promise.all(filePromises);
      }

      await transaction.commit();
      return { success: true, message: "Post created successfully", post: newPost };
    } catch (error) {
      await transaction.rollback();
      console.error(`Error in inserting post: ${error.message}`);
      return { success: false, message: "Failed to create post", error: error.message };
    }
  },

  findBoardById: async (boardId) => {
    try {
      const board = await Board.findOne({ where: { id: boardId } });
      return board ? board.dataValues : null;
    } catch (error) {
      console.error(`Error finding board by ID: ${error.message}`);
      return { success: false, message: "Error fetching board by ID" };
    }
  },

  findFileById: async (boardId) => {
    try {
      return await File.findAll({ where: { BoardId: boardId } });
    } catch (error) {
      console.error(`Error finding file by board ID: ${error.message}`);
      return { success: false, message: "Error fetching files by board ID" };
    }
  },

  findPostById: async (id) => {
    const transaction = await sequelize.transaction();
    try {
      const postData = await Board.findOne({
        where: { id },
        include: [{ model: User }],
        transaction
      });

      const files = await File.findAll({ where: { BoardId: id }, transaction });
      const userPosts = await Board.findAll({
        where: { UserId: postData.User.id },
        order: [["createdAt", "DESC"]],
        limit: 3,
        include: { model: User },
        transaction
      });

      await transaction.commit();
      postData.dataValues.Files = files;

      return { postData, userPosts, files };
    } catch (error) {
      await transaction.rollback();
      console.error(`Error finding post by ID: ${error.message}`);
      throw new Error(`Error finding post by ID: ${error.message}`);
    }
  },

  findPostByCategory: async (category) => {
    try {
      return await Board.findAll({
        where: { category },
        order: [["createdAt", "DESC"]],
        limit: 5,
        include: { model: User }
      });
    } catch (error) {
      console.error(`Error finding posts by category: ${error.message}`);
    }
  },

  findAllCommentById: async (postId) => {
    try {
      return await Comment.findAll({
        where: { BoardId: postId },
        include: [
          {
            model: Reply,
            include: [
              {
                model: User,
                attributes: ["name", "profile"]
              }
            ]
          },
          {
            model: User,
            attributes: ["name", "profile"]
          }
        ]
      });
    } catch (error) {
      console.error(`Error finding comments by post ID: ${error.message}`);
      return { error: error.message };
    }
  },

  InsertComment: async (commentData) => {
    try {
      return await Comment.create(commentData);
    } catch (error) {
      console.error(`Error inserting comment: ${error.message}`);
      return { success: false, message: error.message };
    }
  },

  InsertReply: async (replyData) => {
    try {
      return await Reply.create(replyData);
    } catch (error) {
      console.error(`Error inserting reply: ${error.message}`);
      return { success: false, message: error.message };
    }
  },

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
          where: { id: postData.BoardId }
        }
      );
      return { success: true, message: "Post updated successfully" };
    } catch (error) {
      console.error(`Error updating post: ${error.message}`);
      return { success: false, message: `Failed to update post: ${error.message}` };
    }
  },

  insertFile: async (fileJson, boardId, userId) => {
    try {
      const filePromises = fileJson.files.map((file) =>
        File.create({
          uuid: file.uuid,
          uploadPath: file.uploadPath,
          fileName: file.fileName,
          fileType: file.fileType,
          fileSize: file.fileSize,
          BoardId: boardId,
          UserId: userId
        })
      );
      await Promise.all(filePromises);
      return { success: true, message: "Files uploaded successfully" };
    } catch (error) {
      console.error(`Error inserting files: ${error.message}`);
      return { success: false, message: `Failed to upload files: ${error.message}` };
    }
  },

  deleteFile: async (fileId) => {
    try {
      await File.destroy({ where: { id: fileId } });
      return { success: true, message: "File deleted successfully" };
    } catch (error) {
      console.error(`Error deleting file: ${error.message}`);
      return { success: false, message: `Failed to delete file: ${error.message}` };
    }
  },

  findAllFileByBoardId: async (postId) => {
    try {
      return await File.findAll({ where: { BoardId: postId } });
    } catch (error) {
      console.error(`Error finding files by board ID: ${error.message}`);
      return { success: false, message: "Error fetching files by board ID" };
    }
  },

  deleteComment: async (where) => {
    try {
      await Comment.destroy({ where });
    } catch (error) {
      console.error(`Error deleting comment: ${error.message}`);
      throw error;
    }
  },

  deleteReply: async (where) => {
    try {
      await Reply.destroy({ where });
    } catch (error) {
      console.error(`Error deleting reply: ${error.message}`);
      throw error;
    }
  }
};
