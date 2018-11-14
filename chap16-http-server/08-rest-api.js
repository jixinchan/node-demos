#!/usr/bin/node

const http = require('http'),
      log = console.log;

var items=[];

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP${req.httpVersion}`);
  log(req.headers);
  log('');

  switch(req.method){
    case 'GET':
      select(res);
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
      break;
  }
}).listen(8080);

function select(res){
  var body = JSON.stringify(items);
  res.writeHead(200,{
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain;charset="utf-8"',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(body);
}

function add(req,res){
  var item = '';
  req.on('data',(data)=>{
    item+=data;
  });
  req.on('end',()=>{
    items.push(item);
    res.statusCode=200;
    res.setHeader('Access-Control-Allow-Origin','*'); 
    res.end('Add OK!');
  })
}

function del(req,res){
 var arg = req.url.split('/') ;
 if(arg[1]===''){
   items = [];
   res.end('Delete all');
   return;
 }
 
 var i = parseInt(arg[1]);
 res.setHeader('Access-Control-Allow-Origin', '*'); 
 log(i);
 if(!items[i]){
   res.statusCode = 404;
   res.end('Not Found');
 }else{
   items.splice(i,1);
   res.statusCode = 200;
   res.end('Delete OK!');
 }
}

function update(req,res){
 var arg = req.url.split('/') ;
 if(arg[1]===''){
   items = [];
 }
 var item='';
 res.setHeader('Access-Control-Allow-Origin','*');
 req.on('data',function(data){item+=data;});
 req.on('end',()=>{
   var i = parseInt(arg[1]);
   if(!items[i]){
     res.statusCode = 404;
     res.end('Not Found!');
   }else{
     items[i]=item;
     res.statusCode = 200;
     res.end('Updata OK!');
   }

 })
}
