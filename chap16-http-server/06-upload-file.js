#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log('');
  if(req.url==='/' && req.method === 'POST'){
    var data = '';
    req.setEncoding('binary');
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
      console.log(data);
      var das = data.split('\r\n');
      var fileData = das[4];
      var fileName = das[1].split(';')[2].split('=')[1];
      fileName = fileName.slice(1,fileName.length-1);
      fs.writeFileSync(fileName,fileData,{'encoding':'binary'}) ;     
    });    
  }else{
    res.statusCode=404;
    res.end('Error');
  }
}).listen(8080);

function showPage(res,page){
  var html = fs.readFileSync(page).toString('utf8');
  res.setHeader(404,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html);
  });
  res.end(html);
}
