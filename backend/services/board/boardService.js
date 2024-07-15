const boardRepository = require("../../repositories/board/boardRepository");

module.exports = {
  getAllCount: async (category) => {
    try {
      return await boardRepository.findAllCount(category);
    } catch (error) {
      throw new Error(`Error getting all count: ${error.message}`);
    }
  },

  getAllForInfiniteScroll: async (limit, page, category, sort) => {
    console.log(`category: ${category}, limit: ${limit}, page: ${page}`);
    try {
      return await boardRepository.findAllForInfiniteScroll(limit, page, category, sort);
    } catch (error) {
      throw new Error(`Error getting posts for infinite scroll: ${error.message}`);
    }
  },

  createPost: async (postData, fileData, thumbnail, user) => {
    try {
      postData.category = translateCategory(postData.category);
      postData.thumbnail = thumbnail ? thumbnail[0].originalname : "noThumb.png";
      postData.UserId = user.id;

      const fileJson = processFileData(fileData);
      return await boardRepository.InsertPost(postData, fileJson);
    } catch (error) {
      throw new Error(`Error creating post: ${error.message}`);
    }
  },

  updatePost: async (postData, fileData) => {
    try {
      postData.category = translateCategory(postData.category);

      const fileJson = processFileData(fileData);
      const deleteFileIds = postData.deleteFile.map(file => file.id);

      delete postData.files;
      delete postData.deleteFile;

      if (deleteFileIds.length > 0) {
        await boardRepository.deleteFile(deleteFileIds);
      }

      if (fileJson.files.length > 0) {
        await boardRepository.insertFile(fileJson, postData.BoardId, postData.UserId);
      }

      await boardRepository.updatePost(postData);

      return { message: "Post updated successfully", success: true };
    } catch (error) {
      throw new Error(`Error updating post: ${error.message}`);
    }
  },

  findBoardById: async (boardId) => {
    try {
      const files = await boardRepository.findFileById(boardId);
      const boardData = await boardRepository.findBoardById(boardId);
      return { boardData, files };
    } catch (error) {
      throw new Error(`Error finding board by ID: ${error.message}`);
    }
  },

  getPostById: async (id) => {
    try {
      const data = await boardRepository.findPostById(id);
      data.category = data.postData.category;
      return data;
    } catch (error) {
      throw new Error(`Error getting post by ID: ${error.message}`);
    }
  },

  getPostByCategory: async (category) => {
    try {
      return await boardRepository.findPostByCategory(category);
    } catch (error) {
      throw new Error(`Error getting posts by category: ${error.message}`);
    }
  },

  getAllCommentById: async (postId) => {
    try {
      return await boardRepository.findAllCommentById(postId);
    } catch (error) {
      throw new Error(`Error getting comments by post ID: ${error.message}`);
    }
  },

  createComment: async (commentData) => {
    try {
      return await boardRepository.InsertComment(commentData);
    } catch (error) {
      throw new Error(`Error creating comment: ${error.message}`);
    }
  },

  createReply: async (replyData) => {
    try {
      return await boardRepository.InsertReply(replyData);
    } catch (error) {
      throw new Error(`Error creating reply: ${error.message}`);
    }
  },

  deleteMyComment: async (commentId) => {
    try {
      if (!commentId) throw new Error("Comment ID not found");
      await boardRepository.deleteComment({ id: commentId });
      return { success: true, message: "Comment deleted successfully" };
    } catch (error) {
      console.error(`Error deleting comment: ${error.message}`);
      return { success: false, message: error.message };
    }
  },

  deleteMyReply: async (replyId) => {
    try {
      if (!replyId) throw new Error("Reply ID not found");
      await boardRepository.deleteReply({ id: replyId });
      return { success: true, message: "Reply deleted successfully" };
    } catch (error) {
      console.error(`Error deleting reply: ${error.message}`);
      return { success: false, message: error.message };
    }
  }
};

// Helper functions
const translateCategory = (category) => {
  switch (category) {
    case "스터디해요":
      return "study";
    case "정보 공유":
      return "info";
    default:
      return "qna";
  }
};

const processFileData = (fileData) => {
  const files = fileData ? fileData.map((file) => ({
    uuid: file.filename.split(".")[0],
    uploadPath: file.path,
    fileName: file.originalname,
    fileType: file.mimetype.split("/")[1],
    fileSize: file.size,
  })) : [];

  return { files };
};
