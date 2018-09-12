#!/usr/bin/node

function longTime(){
  var n;

  for(var i=1;i<1000;i++){
    for(var j=1;j<10000;j++){
      n=n*i*j;
    }
  }
  return n;
}

console.time('TEST');
longTime();
console.timeEnd('TEST');
