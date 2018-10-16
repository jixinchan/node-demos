#!/usr/bin/node

//文件高级操作，异步
const fs = require('fs');

var file = process.argv[2] || __filename;

fs.readFile(file,(err,data)=>{
  if(err){
    console.error(err.message);
  }else{
    console.log(data.toString('utf8'));
  }
})
