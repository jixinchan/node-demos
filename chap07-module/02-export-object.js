#!/usr/bin/node

module.exports = {
  diameter:function(radius){return 2*radius;},
  cirumference:function(radius){return 2*Math.PI*radius;},
  area:function(radius){return Math.PI*radius*radius;}
}
console.dir(module);
