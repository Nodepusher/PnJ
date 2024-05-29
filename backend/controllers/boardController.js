const boardService = require('../services/board/boardService');

module.exports = {
    // getAllBoardByCategory : async (req, res, next) => {
    //     const category = req.params.category
    //     console.log(category)
    //     try {
    //         const board = await boardService.getAllBoardsByCategory(category)
    //         console.log(board)
    //         res.status(200).json(board)
    //     } catch (error) {
    //         res.status(500).json({error: error.message})
    //     }
    // },
    getAllForInfiniteScroll: async (req, res, next) => {
        const option = {};
        console.log(req.query);

        var category = req.query.category;
        if (!req.query.category) {
            category = "false";
        }
        console.log(category);

        const limit = 8;
        const page = parseInt(req.query.page) || 1;

        try {
            const board = await boardService.getAllForInfiniteScroll(limit, page, category);

            if (!board) {
                return res.status(404).json({ error: 'No boards found' });
            }

            console.log(board.map(v => v.dataValues.category));
            console.log(board.length);

            res.status(200).json(board);
        } catch (error) {
            console.error(error); // 에러를 로그에 기록합니다.
            res.status(500).json({ error: error.message });
        }
    }
}
