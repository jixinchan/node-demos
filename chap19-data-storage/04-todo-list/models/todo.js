const db = require('./database.js');

var TodoList = function(){};

TodoList.prototype.getAll=function(cb){
  const sql = 'select * from todo';

  var items=[];
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    //console.log(results) ;
    results.forEach((e)=>{items.push(e.item);});
    cb(false,items);
  });
};

TodoList.prototype.addItem= function(item,cb){
  const sql = 'insert into todo(item) values(?)';

  db.query(sql,[item],function(err,results){
    if(err){
      cb(true);
      return;
    }

    cb(false,results);
  });
};

module.exports=TodoList;
