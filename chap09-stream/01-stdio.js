#!/usr/bin/node

const stdin = process.stdin;

stdin.resume();
stdin.setEncoding('utf8');

//stdin.on('data',(data)=>{
//  process.stdout.write(data.toUpperCase());
//});

//stdin.push('hhhaaa');
//stdin.push(null);//标志push结束
stdin.pipe(process.stdout);

/*
stdin.on('data',(data)=>{
  process.stdout.write(data);
})


global.setTimeout(()=>{
  process.stdin.removeAllListeners('data');
},2000);


stdin.on('end',()=>{
  process.exit(1);
})
*/
