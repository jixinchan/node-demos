#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring');

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
  var html = '<!DOCTYPE html>\n'
          + '<html>\n'
          + '  <head>\n'
          + '    <meta charset="UTF-8">\n'
          + '    <title>Todo list</title>\n'
          + '  </head>\n'
          + '  <body>\n'
          + '    <h1>Todo List</h1>\n'
          + '    <ul>\n'
          + items.map(function(item) {return '      <li>' + item + '</li>';}).join('\n')
          + '    </ul>\n'
          + '    <form method="post" action="/">\n'
          + '       <p><input type="text" name="item" />'
          + '       <input type="submit" value="Add Item" /></p>\n'
          + '    </form>\n'
          + '  </body>\n'
            + '</html>';
  res.statusCode = 200;
  res.end(html);
}


