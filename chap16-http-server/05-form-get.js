#!/usr/bin/node

const http = require('http'),
      qs = require('querystring'),
      url = require('url');
var items=[];

http.createServer((req,res)=>{
  var path = url.parse(req.url).pathname;
  if(path==='/'){
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log('');
    var data = qs.parse(url.parse(req.url).query).item;
    if(typeof data!== 'undefined') items.push(data);
    //console.log(data);
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
              + '    <form method="get" action="/">\n'
              + '       <p><input type="text" name="item" />'
              + '       <input type="submit" value="Add Item" /></p>\n'
              + '    </form>\n'
              + '  </body>\n'
              + '</html>';
    res.end(html);
    res.end('OK');
  }else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);
