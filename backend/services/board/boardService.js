const Board = require('../../models/boardModel');

const getAllBoards = async () => {
  try {
    const boards = await Board.findAll();
    console.log(boards)
    return boards;
  } catch (error) {
    throw new Error('Error fetching boards');
  }
};

module.exports = {
  getAllBoards
};
