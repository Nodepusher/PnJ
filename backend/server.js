var express = require('express');
const cors = require('cors');
var path = require('path');
var logger = require('morgan');

var userRouter = require('./routes/userRoutes');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', userRouter);

// app.use(function(req, res, next) {
//   next(createError(404));
// });


app.listen(4000,() => {
  console.log('server is running on port 4000');
})


