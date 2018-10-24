#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID；',process.pid);

var cmd = cp.spawn('./02-child.js',{detached:true,stdio:['ignore',1,2]});
//options  detached是否分离 stdio安排子进程的输出

//cmd.stdout.pipe(process.stdout);

global.setTimeout(()=>{
  console.log('I am father,goodbye!');
  process.exit();
},6000);
