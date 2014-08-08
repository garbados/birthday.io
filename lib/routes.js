var Router = require('express').Router;
var db = require('orchestrate')(process.env.ORCHESTRATE_API_KEY);
var FB = require('fb');
var Youtube = require("youtube-api");

Youtube.authenticate({
  type: 'oauth',
  token: process.env.YOUTUBE_ACCESS_TOKEN
});

var routes = Router();

// index
routes.get('/', function (req, res) {
  res.render('index');
});

// list fb friends
// TODO requires FB auth
routes.get('/friends', function (req, res) {
  // TODO
});

// list videos for a name
routes.post('/v/:name', function (req, res) {
  // TODO
});

// display a single video
routes.get('/b/:video_id', function (req, res) {
  // TODO
});

// 404
routes.use(function (req, res, next) {
  res.status(404);
  res.render('notfound');
});

module.exports = routes;
