#!/usr/bin/node

const user={
  name:'jixinchan',
  age:21,
  qq:1209980074
};
//占位符
console.log("name:%s",user.name);
console.log("age:%d",user.age);
console.log("qq:%j",user.qq);
//字符串拼接
console.log("qq:"+user.qq);
//模板字符串
console.log(`qq:${user.qq}`);

//输出错误
console.error("a big bug!");
