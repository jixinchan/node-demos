#!/usr/bin/node

console.log('filename:',__filename);
console.log('dirname:',__dirname);

switch(process.platform){
  case 'linux':
     fileName=__dirname +'/view/data.html';
     break;
  case 'win32':
     fileName=__dirname +'\\view\\data.html';
     break;
  default:
     fileName='something wrong';

}

const path = require('path');
fileName=path.join(__dirname,'view','data.html');
console.log("fileName:"+fileName);
