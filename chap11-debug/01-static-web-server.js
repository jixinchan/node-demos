#!/usr/bin/node

const http = require('http'),
      path = require('path'),
      fs = require('fs'),
      util = require('util'),
      log = util.debuglog('app');//标识要调试的代码

var file;
http.createServer((req,res)=>{
  log(req.headers);
  file = path.join(__dirname,req.url);
  log();
  log(req.url);
  var read = fs.createReadStream(file);
  read.on('error',(err)=>{
    
    res.end(err.message);
    return;
  });
  read.pipe(res);
}).listen(8080);
