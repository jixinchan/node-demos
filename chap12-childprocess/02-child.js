#!/usr/bin/node

console.log('I an child process. PID:',process.pid);

var timer = global.setInterval(()=>{
  console.log('time:',Date.now());
},1500);

global.setTimeout(()=>{
  global.clearInterval(timer);
  console.log('Goodbye!');
},15000);
