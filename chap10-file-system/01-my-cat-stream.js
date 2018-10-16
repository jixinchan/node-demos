#!/usr/bin/node

//文件流操作 异步 事件异步
const fs = require('fs');

var file = process.argv[2] || __filename;


var src = fs.createReadStream(file);

//异常处理需要捕获异常事件
src.on('error',(err)=>{
  console.log(err.message);
  process.exit(1);
});

//箭头函数里面的this指向是全局
src.on('open',function(){
  this.pipe(process.stdout);
});
