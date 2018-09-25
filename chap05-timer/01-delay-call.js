#!/usr/bin/node

console.log("1");

global.setTimeout(()=>{
  console.log("2");
},1000);

console.log("3");

function Bomb(){
  this.message="Bomb!!!";
}

Bomb.prototype.explode = function(){
  console.log(this.message);
};
Bomb.prototype.timer = function(){
  setTimeout(this.explode.bind(b),2000);
};

var b = new Bomb();
b.timer();
