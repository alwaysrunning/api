var mysql = require('mysql');
var db = require('../config/db');
var sql = mysql.createConnection(db.mysql)

module.exports = sql;
