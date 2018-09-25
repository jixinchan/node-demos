#!/usr/bin/node

const fileName = process.argv[2],
      fs = require('fs'),
      path = require('path'),
      http = require('http');

if(process.argv.length!==3){
  console.error("命令行参数正确格式：cmd fileName");
  process.exit(1);
}
var data = fs.readFileSync(fileName).toString('base64');
var ext = path.extname(fileName);
var uridata = 'data:img/'+ext.slice(1,ext.length)+';base64,'+data;

var html = '<!DOCTYPE html><html><body><img alt="'+path.basename(fileName,ext)+'" src="'+uridata +'"></body></html>';

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);
