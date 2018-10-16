#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2];
try{
  fs.unlinkSync(file);
}catch(err){
  console.error(err.message);
  process.exit(1);
}

