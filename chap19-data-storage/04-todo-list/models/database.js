var mysql = require('mysql');

var cfg = require('./config.json');
//连接池
//z自己可以打开和关闭连接
var pool = mysql.createPool(cfg);

module.exports=pool;
