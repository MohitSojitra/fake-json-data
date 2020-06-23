var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let json1 = require("./db.json");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get("/" , (req,res,next)=>{
  res.status(200);
  res.setHeader("content-type" , "application/json")

  res.json(json1)
})
app.get("/authors" , (req,res,next)=>{
  res.status(200);
  res.setHeader("content-type" , "application/json")
 
  res.json(json1.authors)
})
app.get("/authors/:id" , (req,res,next)=>{
  
  let id = req.params.id;
  res.status(200);
  res.setHeader("content-type" , "application/json")
  res.json(json1.authors[parseInt(req.params.id)])
})
app.get("/posts" , (req,res,next)=>{
  res.status(200);
  res.setHeader("content-type" , "application/json")
 
  res.json(json1.posts)
})
app.get("/posts/:id" , (req,res,next)=>{
  
  let id = req.params.id;
  res.status(200);
  res.setHeader("content-type" , "application/json")
  res.json(json1.posts[parseInt(req.params.id)])
})
app.get("/comments" , (req,res,next)=>{
  res.status(200);
  res.setHeader("content-type" , "application/json")
  
  res.json(json1.comments)
})
app.get("/comments/:id" , (req,res,next)=>{
  
  let id = req.params.id;
  res.status(200);
  res.setHeader("content-type" , "application/json")
  res.json(json1.comments[parseInt(req.params.id)])
})
app.get("/likes" , (req,res,next)=>{
  res.status(200);
  res.setHeader("content-type" , "application/json")
  
  res.json(json1.likes)
})
app.get("/likes/:id" , (req,res,next)=>{
  
  let id = req.params.id;
  res.status(200);
  res.setHeader("content-type" , "application/json")
  res.json(json1.likes[parseInt(req.params.id)])
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
