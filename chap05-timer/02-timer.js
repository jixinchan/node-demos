#!/usr/bin/node

var i=0;
const timeId = global.setInterval(loop,2000);

//设置最大循环次数
function loop(){
  if(i<20){
    console.log("loop!"+i++);
  }else{
    global.clearInterval(timeId);
  }
}

//设置最长运行时间
global.setTimeout(()=>{
  clearInterval(timeId);
},10000);

