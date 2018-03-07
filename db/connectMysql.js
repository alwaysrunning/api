var mysql = require('mysql');
var db = require('../config/db');
var sql;
var arguments = process.argv.splice(2);

var args = arguments[0]

if(args && args.indexOf('pro')>-1){
    process.env.NODE_ENV = 'production'
    sql = mysql.createConnection(db.prd)
}else{
    process.env.NODE_ENV = 'development'
    sql = mysql.createConnection(db.dev)
}

module.exports = sql;
