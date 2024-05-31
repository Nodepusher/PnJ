const boardRepository = require('../../repositories/board/boardRepository');

module.exports = {
  getAllCount : async (category) => {
    try {
        return await boardRepository.findAllCount(category);
      } catch (error) {
        throw new Error(error.message);
      }
  },
  getAllForInfiniteScroll : async (limit, page, category,) => {
    try {
      return await boardRepository.findAllForInfiniteScroll(limit, page, category);
    } catch (error) {
      throw new Error(error.message);
    }

  }
};


