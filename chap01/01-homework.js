#!/usr/bin/node

var res=1;
for(var i=1;i<=10;i++){
  res=res*i;
}
console.log(res);

function result(n){
  return n=1?1: n*result(n-1);
}
result(10);

