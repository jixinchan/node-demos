#!/usr/bin/node

//const Dog = require('./02-dog.js');
const Dog = require('./03-dog.js');

var keji = new Dog('keji',6);
var hashiqi = new Dog('erha',8);

//keji.on('bark',onbark);
//hashiqi.on('bark',onbark);
keji.on('bark',onbark.bind(keji));
hashiqi.on('bark',onbark.bind(hashiqi));

function onbark(){
  console.log("%s is barking,energy is %d",this.name(),this.energy());
}
