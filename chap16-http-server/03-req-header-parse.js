#!/usr/bin/node

const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log(req.headers);
  log('host:',req.headers['host']);
  log('user-agent',req.headers['user-agent']);
  log('content-type',req.headers['Content-Type']);
}).listen(8080)
