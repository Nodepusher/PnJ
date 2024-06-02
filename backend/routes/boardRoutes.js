const express = require('express');
const boardController = require('../controllers/boardController');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/temp/');
    },
    filename: function (req, file, cb) {
        const uniqueName = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

const upload = multer({ storage: storage });

router.post('/count', boardController.getAllCount);
router.get('/:category?', boardController.getAllForInfiniteScroll);
router.post('/uploadImg', upload.single('image'), boardController.saveUploadImg);
// router.post('/createBoard', upload.single('file'), boardController.createBoard);

module.exports = router;
