// 初始化，连接数据库，创建数据表

var sql = require('./connectMysql')
var db = require('../config/db')
const NAME =db.user
const PASSWORD = db.password

var dbInit = function () {
    sql.connect(function (err) {
        if (err) {
            console.log('数据库连接失败')
        }else {
            console.log('成功连接数据库,正在初始化数据库')
            sql.query('CREATE TABLE user(id smallint(6) unsigned NOT NULL auto_increment,username varchar(255),password varchar(255),avatar varchar(255),name varchar(255),PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
                !err ? console.log('user表创建成功') : console.log(err)
            })
            sql.query('CREATE TABLE list(id smallint(6) unsigned NOT NULL auto_increment,name varchar(255),addr varchar(255),age int(30),birth longtext,sex varchar(255),PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
                !err ? console.log('list表创建成功') : console.log(err)
            })
            // sql.query('CREATE TABLE comment(commentId smallint(6) unsigned NOT NULL auto_increment,id varchar(255) ,blogId varchar(255),text varchar(255),PRIMARY KEY (`commentId`)) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
            //     !err ? console.log('comment表创建成功') : console.log(err)
            // })
            // sql.query('insert into person set ?', {user: NAME,password: PASSWORD}, function (err) {
            //     !err ? console.log('person初始化成功') : console.log(err)
            // })
            // sql.query('CREATE TABLE leaveword(lwId smallint(6) unsigned NOT NULL auto_increment,id varchar(255),name varchar(255),time int(30),text varchar(255),PRIMARY KEY(`lwId`)) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
            //     !err ? console.log('leaveword表创建成功') : console.log(err)
            // })
            // sql.query('CREATE TABLE visit(id smallint(6) unsigned NOT NULL auto_increment,name varchar(255),time int(100),PRIMARY KEY(`id`)) ENGINE=InnoDB DEFAULT CHARSET=gbk', function (err) {
            //     !err ? console.log('visit表创建成功') : console.log(err)
            // })
            sql.end()
        }
    })
}

dbInit()