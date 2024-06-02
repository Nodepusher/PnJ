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
        console.log(req.query)
        var category = req.query.category;
        var sort = req.query.dropdownState === '최신순' ? 'DESC' : 'ASC';
        console.log("!category2" , (req.query.category === ''))
        if(category === ''){
            category = "all";
        }
        console.log(category)
        const limit = parseInt(req.query.limit);
        const page = parseInt(req.query.page) || 1;

        try {
            const board = await boardService.getAllForInfiniteScroll(limit, page, category, sort);
            if (!board) {
                return res.status(404).json({ error: 'No boards found' });
            }
            console.log(board.length);

            res.status(200).json(board);
        } catch (error) {
            console.error(error); // 에러를 로그에 기록합니다.
            res.status(500).json({ error: error.message });
        }
    },
    saveUploadImg: async (req, res, next) => {
        console.log('File received:', req.file); // 업로드된 파일 정보
        console.log('Other data:', req.body); // 기타 폼 데이터
    
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const fileUrl = `http://localhost:4000/uploads/temp/${req.file.filename}`;
        res.json({ url: fileUrl });
    }
}
