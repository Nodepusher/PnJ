const boardRepository = require("../../repositories/board/boardRepository");

module.exports = {
  // 주어진 카테고리에 해당하는 모든 게시물 수를 반환
  getAllCount: async (category) => {
    try {
      return await boardRepository.findAllCount(category);
    } catch (error) {
      throw new Error(`모든 게시물 수를 가져오는 중 오류 발생: ${error.message}`);
    }
  },

  // 무한 스크롤을 위해 주어진 조건에 맞는 게시물들을 반환
  getAllForInfiniteScroll: async (limit, page, category, sort) => {
    console.log(`category: ${category}, limit: ${limit}, page: ${page}`);
    try {
      return await boardRepository.findAllForInfiniteScroll(limit, page, category, sort);
    } catch (error) {
      throw new Error(`무한 스크롤용 게시물 가져오는 중 오류 발생: ${error.message}`);
    }
  },

  // 새로운 게시물 생성
  createPost: async (postData, fileData, thumbnail, user) => {
    try {
      postData.category = translateCategory(postData.category);
      postData.thumbnail = thumbnail ? thumbnail[0].originalname : "noThumb.png";
      postData.UserId = user.id;

      const fileJson = processFileData(fileData);
      return await boardRepository.InsertPost(postData, fileJson);
    } catch (error) {
      throw new Error(`게시물 생성 중 오류 발생: ${error.message}`);
    }
  },

  // 게시물 업데이트
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

      return { message: "게시물 업데이트 성공", success: true };
    } catch (error) {
      throw new Error(`게시물 업데이트 중 오류 발생: ${error.message}`);
    }
  },

  // 게시물 ID로 게시물 찾기
  findBoardById: async (boardId) => {
    try {
      const files = await boardRepository.findFileById(boardId);
      const boardData = await boardRepository.findBoardById(boardId);
      return { boardData, files };
    } catch (error) {
      throw new Error(`게시물 ID로 찾기 중 오류 발생: ${error.message}`);
    }
  },

  // 게시물 ID로 게시물 및 관련 데이터 가져오기
  getPostById: async (id) => {
    try {
      const data = await boardRepository.findPostById(id);
      data.category = data.postData.category;
      return data;
    } catch (error) {
      throw new Error(`게시물 ID로 가져오는 중 오류 발생: ${error.message}`);
    }
  },

  // 카테고리로 게시물 찾기
  getPostByCategory: async (category) => {
    try {
      return await boardRepository.findPostByCategory(category);
    } catch (error) {
      throw new Error(`카테고리로 게시물 찾기 중 오류 발생: ${error.message}`);
    }
  },

  // 게시물 ID로 모든 댓글 찾기
  getAllCommentById: async (postId) => {
    try {
      return await boardRepository.findAllCommentById(postId);
    } catch (error) {
      throw new Error(`게시물 ID로 모든 댓글 찾기 중 오류 발생: ${error.message}`);
    }
  },

  // 새로운 댓글 생성
  createComment: async (commentData) => {
    try {
      return await boardRepository.InsertComment(commentData);
    } catch (error) {
      throw new Error(`댓글 생성 중 오류 발생: ${error.message}`);
    }
  },

  // 새로운 답글 생성
  createReply: async (replyData) => {
    try {
      return await boardRepository.InsertReply(replyData);
    } catch (error) {
      throw new Error(`답글 생성 중 오류 발생: ${error.message}`);
    }
  },

  // 댓글 삭제
  deleteMyComment: async (commentId) => {
    try {
      if (!commentId) throw new Error("댓글 ID를 찾을 수 없습니다.");
      await boardRepository.deleteComment({ id: commentId });
      return { success: true, message: "댓글 삭제 성공" };
    } catch (error) {
      console.error(`댓글 삭제 중 오류 발생: ${error.message}`);
      return { success: false, message: error.message };
    }
  },

  // 답글 삭제
  deleteMyReply: async (replyId) => {
    try {
      if (!replyId) throw new Error("답글 ID를 찾을 수 없습니다.");
      await boardRepository.deleteReply({ id: replyId });
      return { success: true, message: "답글 삭제 성공" };
    } catch (error) {
      console.error(`답글 삭제 중 오류 발생: ${error.message}`);
      return { success: false, message: error.message };
    }
  }
};

// 헬퍼 함수들
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
