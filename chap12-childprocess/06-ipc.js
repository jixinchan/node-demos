#!/usr/bin/node

const cp = require('child_process');

console.log('I am father. PID',process.pid);
var cmd = cp.fork('./06-ipc-child.js');

global.setTimeout(()=>{
  cmd.send('I am father. PID:'+cmd.pid);
},3000);

cmd.on('message',(msg)=>{
  console.log('CHILD-MSG:',msg);
})
