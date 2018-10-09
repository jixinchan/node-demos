#!/usr/bin/node

const stdin = process.stdin;

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
});

global.setTimeout(()=>{
  process.stdin.removeAllListeners('data');
},2000);

stdin.on('end',()=>{
  process.exit(1);
})

