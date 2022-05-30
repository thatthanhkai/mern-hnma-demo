var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

connectDataase()
  .catch(err => console.log(err));

async function connectDataase() {
  await mongoose.connect(`mongodb+srv://demoadmin:demopass@cluster0.czqeroh.mongodb.net/db-mern-hnam?retryWrites=true&w=majority`);  
}

module.exports = app;
