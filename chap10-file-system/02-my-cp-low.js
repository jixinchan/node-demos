#!/usr/bin/node

const fs = require('fs');

var fsrc = process.argv[2],
    fdst = process.argv[3];

try{
  fs.openSync(fsrc,'r');
}catch(err){
  console.error(err.message);
  process.exit(1);
}

var fid = fs.openSync(fsrc,'r'),
    len = fs.statSync(fsrc).size;

var buf = new Buffer(len);

fs.readSync(fid,buf,0,len);
fs.writeFileSync(fdst,buf.toString('utf8'));

fs.closeSync(fsrc);
