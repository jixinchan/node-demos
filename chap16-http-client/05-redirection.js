#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      log = console.log;

const addr = 'http://sian.com';

function getOpt(addr){
  var opt = url.parse(addr);
  opt.headers = {'User-Agent':'curl/7.0'};
  return opt;
}

function getURL(opt){
  http.get(opt,(res)=>{  
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log();
    if(res.statusCode>300 && res.statusCode<400){
      var newAddr = res.headers['location'];
      getURL(getOpt(newAddr));
    }else{
      res.pipe(process.stdout);
    }
  });
}

getURL(getOpt(addr));
