#!/usr/bin/node

var buf1 = new Buffer(256);
const log = console.log;

buf1[0] = 44;
log("\n buf1 content:",buf1);

for(var i=0;i<256;i++)buf1[i] = i;

log("\n buf1 loop content:",buf1);

var buf2 = buf1.slice(246,256);
log("\n buf2:",buf2);

var arr = [23,45,23,67,4,6];
var buf3 = new Buffer(arr);
log("\n buf3:",buf3);

var buf4 = new Buffer('hello World!','utf8');
log("\n buf4:",buf4);

buf4.copy(buf3);
log("\n buf3:",buf3);
log("\n buf3 length:",buf3.length);
log("\n buf3 string",buf3.toString());
