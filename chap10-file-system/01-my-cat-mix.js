#!/usr/bin/node

//底层文件操作
const fs = require('fs');

var file = process.argv[2] || __filename;

//打开文件
try{
  fs.openSync(file,'r');
}catch(err){
  console.error(err.message);
  process.exit(1);
}
var fid = fs.openSync(file,'r');

//1是标准的输出流，也就是输出到控制台
//fs.writeSync(1,fs.readFileSync(file).toString('utf8'));

//统计字节数
var len = fs.statSync(file).size;

var buf = new Buffer(len);

//读取
fs.readSync(fid,buf,0,len);
//console.log(buf.toString('utf8'));
fs.writeSync(1,buf.toString('utf8'));

//关闭文件
fs.closeSync(fid);
