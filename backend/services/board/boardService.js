const boardRepository = require("../../repositories/board/boardRepository");

module.exports = {
  // 모든 게시물 수 조회
  findAllCount: async (category) => {
    try {
      return await boardRepository.selectAllCount(category);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // 무한 스크롤을 위한 게시물 조회
  findAllForInfiniteScroll: async (limit, page, category, sort) => {
    try {
      return await boardRepository.selectAllForInfiniteScroll(
        limit,
        page,
        category,
        sort
      );
    } catch (error) {
      throw new Error(error.message);
    }
  },

  // 게시물 생성
  createPost: async (postData, fileData, thumbnail, user) => {
    console.log(postData.category);
    if (postData.category === "스터디해요") {
      postData.category = "study";
    } else if (postData.category === "정보 공유") {
      postData.category = "info";
    } else {
      postData.category = "qna";
    }
    var fileJson = { files: [] };
    if (thumbnail) {
      postData.thumbnail = thumbnail[0].originalname;
    } else {
      postData.thumbnail = "noThumb.png";
    }
    postData.UserId = user.id;
    if (!!fileData && fileData.length > 0) {
      fileJson.files = fileData.map((file) => {
        return {
          uuid: file.filename.split(".")[0],
          uploadPath: file.path,
          fileName: file.originalname,
          fileType: file.mimetype.split("/")[1],
          fileSize: file.size,
        };
      });
    }

    return await boardRepository.insertPost(postData, fileJson);
  },

  // 게시물 수정
  updatePost: async (postData, fileData) => {
    console.log(postData.category);
    if (postData.category === "스터디해요") {
      postData.category = "study";
    } else if (postData.category === "정보 공유") {
      postData.category = "info";
    } else {
      postData.category = "qna";
    }
    var fileJson = { files: [] };

    if (!!fileData && fileData.length > 0) {
      fileJson.files = fileData.map((file) => {
        return {
          uuid: file.filename.split(".")[0],
          uploadPath: file.path,
          fileName: file.originalname,
          fileType: file.mimetype.split("/")[1],
          fileSize: file.size,
        };
      });
    }
    const existFile = postData.files;
    const deleteFile = [];
    postData.deleteFile.map((file) => deleteFile.push(file.id));

    delete postData.files;
    delete postData.deleteFile;

    const selectFile = await boardRepository.selectAllFileByBoardId(
      postData.BoardId
    );
    selectFile.map((e) => console.log(e.uuid));
    if (existFile.length > 0) {
      const success_deleteFile =
        deleteFile && (await boardRepository.deleteFile(deleteFile));
      const success_insertFile =
        fileJson &&
        (await boardRepository.insertFile(
          fileJson,
          postData.BoardId,
          postData.UserId
        ));
      const success_updatePost = await boardRepository.updatePost(postData);
      return {
        message: "수정 작업 완료",
        success: {
          updatePost: success_updatePost.success,
          insertFile: success_insertFile.success,
          deleteFile: success_deleteFile.success,
        },
      };
    } else {
      const success_insertFile =
        fileJson &&
        (await boardRepository.insertFile(
          fileJson,
          postData.BoardId,
          postData.UserId
        ));
      const success_updatePost = await boardRepository.updatePost(postData);
      return {
        message: "수정 작업 완료",
        success: {
          updatePost: success_updatePost.success,
          insertFile: success_insertFile.success,
        },
      };
    }
  },

  // 게시물 ID로 게시물 조회
  findPostById: async (boardId) => {
    const files = await boardRepository.selectFileById(boardId);
    const boardData = await boardRepository.selectPostById(boardId);
    return { boardData: boardData, files: files };
  },

  // 작성된 게시물 ID로 게시물 조회
  findWritePostById: async (id) => {
    const data = await boardRepository.selectWritePostById(id);
    const category = data.postData.category;
    data.category = category;
    return data;
  },

  // 카테고리별 게시물 조회
  findPostByCategory: async (category) => {
    return await boardRepository.selectPostByCategory(category);
  },

  // 게시물 ID로 모든 댓글 조회
  findAllCommentById: async (postId) => {
    return await boardRepository.selectAllCommentById(postId);
  },

  // 댓글 생성
  createComment: async (commentData) => {
    return await boardRepository.insertComment(commentData);
  },

  // 대댓글 생성
  createReply: async (replyData) => {
    return await boardRepository.insertReply(replyData);
  },

  // 내 댓글 삭제
  deleteMyComment: async (commentId) => {
    try {
      if (!commentId) {
        throw new Error("commentId not found");
      }
      const where = { id: commentId };
      await boardRepository.deleteComment(where);
      return { success: true, message: "delete MyComment Sucess" };
    } catch (error) {
      console.error("Error in deleteMyComment boardService:", error);
      return { success: false, message: error.message };
    }
  },

  // 내 대댓글 삭제
  deleteMyReply: async (replyId) => {
    try {
      if (!replyId) {
        throw new Error("replyId not found");
      }
      const where = { id: replyId };
      await boardRepository.deleteReply(where);
      return { success: true, message: "delete MyReply Sucess" };
    } catch (error) {
      console.error("Error in deleteMyReply boardService:", error);
      return { success: false, message: error.message };
    }
  },
};
