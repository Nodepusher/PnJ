const boardRepository = require("../../repositories/board/boardRepository");

module.exports = {
  getAllCount: async (category) => {
    try {
      return await boardRepository.findAllCount(category);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getAllForInfiniteScroll: async (limit, page, category, sort) => {
    console.log("category: " + category, "limit: " + limit, "page: " + page);
    try {
      return await boardRepository.findAllForInfiniteScroll(
        limit,
        page,
        category,
        sort
      );
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createPost: async (postData, fileData) => {
    console.log(postData.category);
    if (postData.category === "스터디해요") {
      postData.category = "study";
    } else if (postData.category === "정보 공유") {
      postData.category = "info";
    } else {
      postData.category = "qna";
    }
    console.log("fileData", fileData);
    // console.log(":::::: ",fileData.length)
    console.log(":::::: ", !!fileData);
    var fileJson = { files: [] };

    if (!!fileData && fileData.length > 0) {
      console.log("!!!!!!!");
      fileJson.files = fileData.map((file) => {
        return {
          uuid: file.filename.split(".")[0],
          uploadPath: file.path,
          fileName: file.originalname,
          fileType: file.mimetype.split("/")[1],
          fileSize: file.size,
        };
      });
      console.log("fileJson :: ", fileJson);
    }

    return await boardRepository.InsertPost(postData, fileJson);
  },
  updatePost: async (postData, fileData) => {
    console.log(postData.category);
    if (postData.category === "스터디해요") {
      postData.category = "study";
    } else if (postData.category === "정보 공유") {
      postData.category = "info";
    } else {
      postData.category = "qna";
    }
    console.log("fileData", fileData);
    // console.log(":::::: ",fileData.length)
    console.log(":::::: ", !!fileData);
    var fileJson = { files: [] };

    if (!!fileData && fileData.length > 0) {
      console.log("!!!!!!!");
      fileJson.files = fileData.map((file) => {
        return {
          uuid: file.filename.split(".")[0],
          uploadPath: file.path,
          fileName: file.originalname,
          fileType: file.mimetype.split("/")[1],
          fileSize: file.size,
        };
      });
      console.log("fileJson :: ", fileJson);
    }
    const existFile = postData.files;
    const deleteFile = [];
    console.log("deleteFile ::: ", deleteFile);
    postData.deleteFile.map((file) => deleteFile.push(file.id));
    console.log("deleteFile ::: ", deleteFile);
    console.log("existFile", existFile);

    delete postData.files;
    delete postData.deleteFile;

    const selectFile = await boardRepository.findAllFileByBoardId(
      postData.BoardId
    );
    selectFile.map((e) => console.log(e.uuid));
    console.log(selectFile.length, "갯수");

    console.log(postData.BoardId);
    console.log(postData.UserId);
    console.log(postData);
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
  findBoardById: async (boardId) => {
    const files = await boardRepository.findFileById(boardId);
    const boardData = await boardRepository.findBoardById(boardId);
    // return await boardRepository.findBoardById(boardId)
    return { boardData: boardData, files: files };
  },
  getPostById: async (id) => {
    const data = await boardRepository.findPostById(id);
    const category = data.postData.category;
    data.category = category;
    // console.log(data)
    return data;
  },
  getPostByCategory: async (category) => {
    return await boardRepository.findPostByCategory(category);
  },
  getAllCommentById: async (postId) => {
    return await boardRepository.findAllCommentById(postId);
  },
  createComment: async (commentData) => {
    return await boardRepository.InsertComment(commentData);
  },
  createReply: async (replyData) => {
    return await boardRepository.InsertReply(replyData);
  },
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
