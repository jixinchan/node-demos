#!/usr/bin/node

global.pi = Math.PI;

global.circle=(radius)=>{  
  function diameter(){return 2*radius;    }
  function cirumference(){return 2*Math.PI*radius;}
  function area(){return Math.PI*radius*radius;}
  return{
    diameter:diameter,
    cirumference:cirumference,
    area:area
  }
}

global.objCircle = {
  diameter:(r)=>2*r,
  cirumference:(r)=>2*pi*r,
  area:(r)=>pi*r*r
}

