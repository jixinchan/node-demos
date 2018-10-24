#!/usr/bin/node

const cp = require('child_process');

var cmd = cp.spawn('node',['02-child.js']);

cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);

//可以一行一行打出来child的运行结果
