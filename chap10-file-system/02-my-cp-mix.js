#!/usr/bin/node

//底层文件操作
const fs = require('fs');

var src = process.argv[2],
    dst = process.argv[3];

//打开文件
const fid = fs.openSync(src,'r');

fs.writeFileSync(dst,fs.readFileSync(fid));

//关闭文件
fs.closeSync(fid);
