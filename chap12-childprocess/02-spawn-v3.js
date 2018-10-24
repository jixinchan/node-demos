#!/usr/bin/node

const cp = require('child_process'),
      http = require('http');

http.createServer((req,res)=>{
  var child = cp.spawn('./02-child.js');
  child.stdout.pipe(res);
}).listen(8080);


