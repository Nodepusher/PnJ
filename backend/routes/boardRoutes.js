const express = require('express');
const boardController = require('../controllers/boardController');
const router = express.Router();

router.get('/:category?', boardController.getAllBoardByCategory);

module.exports = router;
