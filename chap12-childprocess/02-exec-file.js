#!/usr/bin/node

const cp =require('child_process');


cp.execFile('./02-child.js',(err,out,error)=>{
  if(err){
    console.error(error);
    process.exit(100);
  }

  console.log(out);
});
