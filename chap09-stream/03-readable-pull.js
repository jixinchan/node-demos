#!/usr/bin/node

const Readable = require('stream').Readable;

var src = new Readable();

var c = 97;

src._read = function(){
  src.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) src.push(null);
}

src.pipe(process.stdout);
