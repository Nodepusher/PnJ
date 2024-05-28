const boardService = require('../services/board/boardService');

module.exports = {
    getAllBoardByCategory : async (req, res, next) => {
        const category = req.params.category
        console.log(category)
        try {
            const board = await boardService.getAllBoardsByCategory(category)
            console.log(board)
            res.status(200).json(board)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }


}
