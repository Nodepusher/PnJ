const express = require('express');
const boardController = require('../controllers/boardController');
const router = express.Router();

router.post('/count', boardController.getAllCount);
router.get('/:category?', boardController.getAllForInfiniteScroll);

module.exports = router;
