#!/usr/bin/node

const EventEmitter = require('events').EventEmitter,
      util = require('util');

function Dog(name,energy){
  var _name = name;
  var _energy = energy;
  //var self = this;
  var _listeners = {};
  
  var timer= global.setInterval(()=>{
    if(_energy>0){
      emit('bark');
      _energy--;
    }else{
      global.clearInterval(timer);
    }
  },1000);

  function emit(e,arg){
    _listeners[e].forEach((fn)=>{
      fn.call(this,arg);
    });
  }
  this.name=()=>_name;
  this.energy=()=>_energy;
  this.on=function(e,fn){
    if(typeof _listeners[e]==='undefined'){
      _listeners[e]=[];
    }
     _listeners[e].push(fn);
    
  }

}

//Dog.prototype = EventEmitter.prototype;
util.inherits(Dog,EventEmitter);

module.exports=Dog;
