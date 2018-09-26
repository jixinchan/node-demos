#!/usr/bin/node

const Num = require('./04-num.js');

var n1 = new Num();
var n2 = new Num();

n1.add();
n2.add();
console.log(n1.getNum());

n1.add();
console.log(n2.getNum());
