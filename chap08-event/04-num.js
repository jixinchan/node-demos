#!/usr/bin/node

var n = 0;
function Num(){}

Num.prototype.add=()=>{
  n++;
};

Num.prototype.getNum=()=>n;

module.exports = Num;
