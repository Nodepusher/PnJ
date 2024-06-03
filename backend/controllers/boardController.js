const boardService = require('../services/board/boardService');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    getAllCount : async (req, res, next) => {
        var category = req.body.category;
        if(category === ''){
            category = "all";
        }
        try {
            const board = await boardService.getAllCount(category);
            console.log(board);
            res.status(200).json(board);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    getAllForInfiniteScroll: async (req, res, next) => {
        console.log(req.query);
        var category = req.query.category;
        var sort = req.query.dropdownState === '최신순' ? 'DESC' : 'ASC';
        if(category === ''){
            category = "all";
        }
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
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
    saveUploadImg: async (req, res, next) => {
        console.log('File received:', req.file);
        console.log('Other data:', req.body);
    
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const tempFilePath = req.file.path;
        const outputFilePath = path.join(__dirname, '..', 'uploads', 'temp', `compressed-${req.file.filename}`);

        try {
            await sharp(tempFilePath)
                .resize({ width: 800, height: 800, fit: sharp.fit.inside, withoutEnlargement: true })
                .toFormat('jpeg', { quality: 80 })
                .toFile(outputFilePath);

            fs.unlink(tempFilePath, (err) => {
                if (err) {
                    console.error('Error deleting original file:', err);
                }
            });

            const fileUrl = `http://localhost:4000/uploads/temp/compressed-${req.file.filename}`;
            res.json({ url: fileUrl });
        } catch (error) {
            console.error('Error processing image:', error);
            res.status(500).json({ message: 'Error processing image' });
        }
    }
}
