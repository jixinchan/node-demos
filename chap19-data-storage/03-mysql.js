#!/usr/bin/node

const mysql = require('mysql');

const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'1234qwerasdf',
  database:'test'
});

con.connect();

//operation db
//增
con.query('insert into books values(?,?,?)',[3,'Node.js实战',0],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }

  console.log(result);
});

//删
con.query('delete from books where BOOK_ID=?',[1],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(result);
});

//改
con.query('update books set STATUS=1 where BOOK_ID=?',[3],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(result);
})

//查
const sql = 'select * from books where BOOK_ID=?';
con.query(sql,[1],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  console.log(result);
});

con.end();
