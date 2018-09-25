#!/usr/bin/node

const usr = process.argv[2],
      pwd = process.argv[3],
      log = console.log;

if(process.argv.length!==4){
  console.error("命令行参数个数不正确！");
  process.exit(1);
}

log("usr:%s\npwd:%s\n",usr,pwd);

var str = new Buffer(usr + ":"+ pwd);
log("Base64:",str.toString('Base64'));
