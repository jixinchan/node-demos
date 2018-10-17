#!/usr/bin/node

const Readable = require('stream').Readable,
      utl = require('util');

var c = 97;

var MyReadable = function(){
  Readable.call(this);
};

MyReadable.prototype = Readable.prototype;

MyReadable.prototype._read = function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
};

var rs = new MyReadable();
rs.pipe(process.stdout);
