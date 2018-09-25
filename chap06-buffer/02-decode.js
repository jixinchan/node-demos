#!/usr/bin/node

const bstr = process.argv[2],
      log = console.log;

if(process.argv.length!==3){
  console.error("未输入命令行参数");
  process.exit(1);
}

var buf = new Buffer(bstr,'Base64');
var info = buf.toString('utf8').split(':');

if(info.length!==2){
  console.error("转换错误！");
  process.exit(2);
}

log("usr:%s\npwd:%s",info[0],info[1]);


