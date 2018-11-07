#!/usr/bin/node

const http = require('http'),
      cheerio = require('cheerio'),
      log = console.log;

var address = 'http://202.206.100.221:8080/StuExpbook/index/indexAction.do?op=index';

http.get(address,(res)=>{
  var html = '';
  res.on('data',(data)=>{
    html+=data;
  });

  res.on('end',()=>{
    var $ = cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName = $(this).find('a').text(),
          cTime = $(this).find('p.fl').text(),
          cTarget = $(this).find('div.course_target').text(),
          cURL = $(this).find('a').attr('href');
      log('课程名称：',cName.trim());
      log('课程时长：',cTime.trim());
      log('课程目标：',cTarget.trim());
      log('课程地址：',cURL.trim());
      log();
    })
  })
});
