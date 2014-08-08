var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// app view globals
app.locals.title = "birthday.io";
app.locals.description = "Send birthday videos to your friends and enemies!";
app.locals.GOOGLE_ANALYTICS_TOKEN = process.env.GOOGLE_ANALYTICS_TOKEN;

// view engine setup
app.set('views', 'views');
app.set('view engine', 'jade');

app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static('public'));

module.exports = app;
