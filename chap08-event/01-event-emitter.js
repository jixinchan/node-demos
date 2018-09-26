#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

//这个箭头函数是hello事件的第一个订阅者
emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('bye',()=>{
  console.log('bye event');
});

//hello事件的第二个订阅者
emitter.on('hello',()=>{
  console.log('HELLO EVENT!');
});

//用emit发出事件
global.setInterval(()=>{
  emitter.emit('hello');
},1000);

global.setTimeout(()=>{
  emitter.emit('bye');
},2000);
