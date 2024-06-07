const express = require('express');
const boardController = require('../controllers/boardController');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const storageImg = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/temp/');
    },
    filename: function (req, file, cb) {
        let uniqueName = uuidv4() + path.extname(file.originalname);
        cb(null, file.originalname);
    },
});
const storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/file/');
    },
    filename: function (req, file, cb) {
        let uniqueName = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
})

// 이미지는 원래 filename으로 저장
// file Table에 저장할때 uuid 

const uploadImage = multer({ storage: storageImg });
const uploadFile = multer({storage: storageFile});
router.post('/count', boardController.getAllCount);
router.get('/:category?', boardController.getAllForInfiniteScroll);
router.post('/uploadImg', uploadImage.single('image'), boardController.saveUploadImg);
router.post('/createPost', uploadFile.fields([{name : 'files'}]), boardController.createPost);

router.get('/detail/:id', boardController.getPostDetailById);


module.exports = router;
