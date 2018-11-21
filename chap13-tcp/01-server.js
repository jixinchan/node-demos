#!/usr/bin/node

var server = require('net').createServer();

server.on('connection',function(socket){
  console.log('new connection from',socket.remoteAddress);

  socket.setEncoding('utf8');

  socket.on('data',function(data){
    console.log(data.length,data);
  });

  socket.on('end',function(){
    console.log(socket.remoteAddress,'disconnected');
  });
}).listen(8080,function(){
  console.log('TCP server is listening on port 8080');
});
