var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.headers)
  res.send("node server test 중 node server test 중 node server test 중 node server test 중 node server test 중 node server test 중 ")
});

module.exports = router;
