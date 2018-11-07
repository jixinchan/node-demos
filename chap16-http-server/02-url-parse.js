#!/usr/bin/node

const http = require('http'),
      url  = require('url'),
      log  = console.log,
      qs   = require('querystring');

http.createServer((req,res)=>{
  log('url:',req.url);
  log('pathname:',url.parse(req.url).pathname);
  log('queryString:',url.parse(req.url).query);
  log('qs parse:',qs.parse(url.parse(req.url).query));
  
  res.end('OK!');
}).listen(8080);

