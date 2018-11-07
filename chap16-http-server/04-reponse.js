#!/usr/bin/node

const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  if(req.url==='/'){
    var html = ''+
    '<!DOCTYPE html>'+
    '<html>'+
    '<head>'+
      '<title>hello</title>'+
      '<meta charset="utf-8">'+
    '</head>'+
    '<body>'+
      '<h1>Hello World!</h1>'+
    '</body>'+
    '</html>';
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));
    res.end(html);
  }else{
    res.end('error');
  }

}).listen(8080);
