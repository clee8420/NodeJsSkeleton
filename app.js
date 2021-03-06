var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var upload = multer({
    dest: 'public/images' 
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const asyncHandler = fn => (req, res, next) =>
  Promise
    .resolve(fn(req, res, next))
    .catch(next)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
  
app.set('view engine', 'hbs');
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
