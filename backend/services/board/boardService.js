const boardRepository = require('../../repositories/board/boardRepository');

module.exports = {
  getAllBoardsByCategory : async (category) => {
    try {
        return await boardRepository.findAllByCategory(category);
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


