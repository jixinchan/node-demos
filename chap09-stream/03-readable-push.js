#!/usr/bin/node

const Readable = require('stream').Readable;

var src = new Readable();

src.push('hello');
src.push('world');
src.push(null);

src.pipe(process.stdout);
