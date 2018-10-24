#!/usr/bin/node

const cp = require('child_process');

console.log('I am father. PID:',process.pid);

cp.spawnSync('node',['02-child.js'],{stdio:['ignore',1,2]});
