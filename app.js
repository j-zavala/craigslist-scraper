// my server-side Javascript is held here, 
// while the client-side file(s) will be placed in the “javascripts” directory.

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Commented out the two dependencies since we're
//defining all our views directly in app.js
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//When users sends an HTTP GET request to /, index.ejs view is rendered
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/searching", function (req, res) {
  res.send("wheeee");
});

// Starts the app on port 3000
app.listen(3000);

module.exports = app;

