var express = require('express');
var router = express.Router();
var sql = require('../db/connectMysql')
var bodyParser = require('body-parser')


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req, res, 777)
});

module.exports = router;
