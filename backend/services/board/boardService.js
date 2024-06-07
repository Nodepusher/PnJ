const boardRepository = require('../../repositories/board/boardRepository');

module.exports = {
  getAllCount : async (category) => {
    try {
        return await boardRepository.findAllCount(category);
      } catch (error) {
        throw new Error(error.message);
      }
  },
  getAllForInfiniteScroll : async (limit, page, category, sort) => {
    console.log("category: " + category, "limit: " + limit, "page: " + page)
    try {
      return await boardRepository.findAllForInfiniteScroll(limit, page, category, sort);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createPost : async (postData, fileData) => {
    console.log(postData.category)
    if(postData.category === "스터디해요"){
      postData.category = "study"
    }else if(postData.category === "정보 공유"){
      postData.category = "info"
    }else{
      postData.category = "qna"
    }
    console.log("fileData",fileData)
    console.log(":::::: ",fileData.length)
    console.log(":::::: ",!!fileData)
    var fileJson = { files: [] };
    
    if(!!fileData && fileData.length > 0){
      console.log("!!!!!!!")
      fileJson.files = fileData.map(file => {
        return {
          uuid: file.filename.split('.')[0],
          uploadPath: file.path,
          fileName: file.originalname,
          fileType: file.mimetype.split('/')[1]
        }; 
      });
      console.log("fileJson :: ",fileJson)
    }
    
    return await boardRepository.InsertPost(postData, fileJson);
  },
  findBoardById : async (boardId) => {
    return await boardRepository.findBoardById(boardId)
  },
  getPostById : async (id) => {
    const data = await boardRepository.findPostById(id)
    const category = data.postData.category;
    data.category = category
    console.log(data)
    return data;
  }
};


