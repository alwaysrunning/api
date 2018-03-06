var express = require('express');
var router = express.Router();
var sql = require('../db/connectMysql')
var bodyParser = require('body-parser')


/* GET home page. */
router.get('/', function(req, res, next) {
    sql.query('insert into person set ?' , {user: 'andy', password: '123456', name:'haitao'}, function (err, rows) {
        if (err) {
          res.send({code: 0,ms: ' 服务器出错 '})
        }else {
          res.send({code: 1})
        }
    })
    // res.json({
    //     age:'app'
    // })
});

module.exports = router;
