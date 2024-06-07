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
  getPostById : async (id) => {
    const data = await boardRepository.findPostById(id)
    const category = data.postData.category;
    data.category = category
    console.log(data)
    return data;
  }
};


