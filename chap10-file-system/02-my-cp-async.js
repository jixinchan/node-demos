#!/usr/bin/node

const fs = require('fs');

var fsrc = process.argv[2],
    fdst = process.argv[3];

fs.readFile(fsrc,(err,data)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }else{
    fs.writeFileSync(fdst);
  }
})
