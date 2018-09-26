#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2],
      log = console.log;

if(process.argv.length!==3){
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}

try{
  var buf = fs.readFileSync(file);
}catch(e){
  console.error(e.message);
  process.exit(2);
}

if
