#!/usr/bin/node
//通过链接读取文件
const fs = require('fs');

var lnk = process.argv[2];
   

console.log(fs.readlinkSync(lnk));
