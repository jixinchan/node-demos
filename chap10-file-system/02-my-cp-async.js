#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

fs.readFile(src,(err,data)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }else{
    fs.writeFile(dst,data,(err,data)=>{
      if(err){
        console.error(err.message);
        process.exit(1);
      }
    });
  }
});
