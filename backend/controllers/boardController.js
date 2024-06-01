const boardService = require('../services/board/boardService');

module.exports = {
    getAllCount : async (req, res, next) => {
        var category = req.body.category
        if(category === ''){
            category = "all";
        }
        try {
            const board = await boardService.getAllCount(category)
            console.log(board)
            res.status(200).json(board)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },
    getAllForInfiniteScroll: async (req, res, next) => {
        console.log("::::::::::: 1"+req.query.category);
        console.log(req.query)
        var category = req.query.category;
        console.log("!category2" , (req.query.category === ''))
        if(category === ''){
            category = "all";
        }
        console.log(category)
        const limit = parseInt(req.query.limit);
        const page = parseInt(req.query.page) || 1;

        try {
            const board = await boardService.getAllForInfiniteScroll(limit, page, category);
            if (!board) {
                return res.status(404).json({ error: 'No boards found' });
            }
            console.log(":::::::::::::::: : ",board)
            console.log(board.map(v => v.dataValues.category));
            console.log(board.length);

            res.status(200).json(board);
        } catch (error) {
            console.error(error); // 에러를 로그에 기록합니다.
            res.status(500).json({ error: error.message });
        }
    }
}
