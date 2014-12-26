var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server)
var socket = require('./src/socketController.js')(io);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(request, response){
  response.render('index.ejs')
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;