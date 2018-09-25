#!/usr/bin/node

var pi = require('./02-export-var.js');

console.log("\nPI:",pi);
console.log();
console.dir(module);

var circle = require('./02-export-function.js');
console.log(circle(20).diameter());
console.log(circle(20).cirumference());
console.log(circle(20).area());

var circle1=require('./02-export-object');
console.log(circle1.diameter(10));
