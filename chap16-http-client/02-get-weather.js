#!/usr/bin/node


function urlencode (str) {  
  str = (str + '').toString();   
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');  
} 


const http = require('http');

var format = process.argv[2] || 1,
   // cityname =urlencode(process.argv[3]);
   cityname = process.argv[3];

var address = 'http://v.juhe.cn/weather/index?format='+format+'&cityname='+cityname+'&key=c1c8a843b278b4d821b90c1b239d0136';
address = global.encodeURI(address);
console.log(format,cityname);
http.get(address,(res)=>{
  res.pipe(process.stdout);
});
