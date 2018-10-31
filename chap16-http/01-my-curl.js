#!/usr/bin/node

const http = require('http'),
      url = require('url')

var address = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

const options = {
  hostname: url.parse(address).hostname,
  port: url.parse(address).port,
  path: url.parse(address).pathname,
  method: 'GET',
  headers: {
    'User-Agent':'01-my-curl.js' 
  }
};

http.get(address,(res)=>{
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log();
  //打印报文头
  console.log(res.headers);
  
  console.log();
  //答应报文体
  res.pipe(process.stdout);

});
