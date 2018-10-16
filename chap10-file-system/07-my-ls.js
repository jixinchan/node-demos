#!/usr/bin/node


const fs = require('fs');

var dir = process.argv[2];

console.log(fs.readdirSync(dir));
