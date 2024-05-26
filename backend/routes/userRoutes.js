const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', function(req, res, next) {
    console.log(req.headers)
  res.send("node server test 중 node server test 중 node server test 중 node server test 중 node server test 중 node server test 중 ")
});

// router 예시
router.post('/login', userController.loginUser);
/// ... 쭉쭉 작성

module.exports = router;
