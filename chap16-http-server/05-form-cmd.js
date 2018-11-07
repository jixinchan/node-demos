#!/usr/bin/node

const http = require('http'),
      qs = require('querystring'),
      url = require('url'),
      cp = require('child_process');
var order;

http.createServer((req,res)=>{
  var path = url.parse(req.url).pathname;
  if(path==='/'){
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log('');
    var data = qs.parse(url.parse(req.url).query).item;
    if(typeof data!== 'undefined') order = data;
    console.log(typeof order);
    //cp.execFile()
  }else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);

function show(res){
  var html = '<!DOCTYPE html>\n'
            + '<html>\n'
            + '  <head>\n'
            + '    <meta charset="UTF-8">\n'
            + '    <title>Todo list</title>\n'
            + '  </head>\n'
            + '  <body>\n'
            + '    <h1>Input a Linux Command</h1>\n'
            + '    <form method="get" action="/">\n'
            + '       <p><input type="text" name="item" />'
            + '       <input type="submit" value="excute" /></p>\n'
            + '    </form>\n'
            + '  </body>\n'
            + '</html>';
  res.end(html);
}
