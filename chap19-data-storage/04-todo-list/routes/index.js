const TodoList = require('../models/todo.js');
const express = require('express');
const router = express.Router();
var items=[];

var todolist = new TodoList();

/* GET home page. */
router.get('/', function(req, res, next) {
  todolist.getAll((err,items)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('index',{items:items});
  });
});
  

router.post('/',function(req,res,next){
  if(req.body.item!==''){
    todolist.addItem(req.body.item,function(err){
      if(err) console.log(err);
    });
  }
  
  todolist.getAll((err,items)=>{
    if(err){
      console.error(err);
      return;
    }
    res.render('index',{items:items});
  });
});

module.exports = router;
