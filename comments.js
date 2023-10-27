// Create web server 
// 1. Create a web server
// 2. Create a route for the root
// 3. Create a route for /comments
// 4. Create a route for /comments/new
// 5. Create a route for /comments/:id

// 1. Create a web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var comments = require('./comments.js');

// 2. Create a route for the root
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// 3. Create a route for /comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});