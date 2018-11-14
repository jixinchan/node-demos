#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      fs = require('fs');

var items=[];

http.createServer((req,res)=>{
  var path = url.parse(req.url).pathname;
  if(path==='/' && req.method === 'POST'){
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log('');
    addItem(req,res);
  }else if(path==='/'&&req.method==='GET'){
    show(res);
  }else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);

function addItem(req,res){
  var item = '';
  req.on('data',(chunk)=>{
    item += chunk;
  });
  req.on('end',()=>{
    console.log(item);
    if(item!==''){
      items.push(qs.parse(item).item);
    }
    show(res);
  })
  
}

function show(res){

  var html = fs.readFileSync('./todo-list-template.html').toString('utf8'),
      content = items.map(function(item){return'        <li>'+item+'</li>';}).join('\n');

  html = html.replace('%',content);
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html),
    'Access-Control-Allow-Origin':'*'
  });
  
  res.end(html);
}


