#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(req.method);
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      add(req,res);
      break;
    case 'DELETE':
      del(req,res)
      break;
    case 'PUT':
      update(req,res);
      break;
    default:
      res.end('error1');
  }

  res.end('OK!');
}).listen(8080);

function select(req,res){}
function add(req,res){}
function del(req,res){}
function update(req,res){}
