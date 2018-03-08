var express = require('express');
var router = express.Router();
var sql = require('../db/connectMysql')
var bodyParser = require('body-parser')

/* GET home page. */
router.post('/login', function(req, res, next) {
    sql.query('select * from user where username="' + req.body.username+ '" and password="'+req.body.password+'"', function(err,rows){
		if(err || rows.length == 0){
            res.send({code: 0,msg: ' 服务器出错 '})
        }else{
            res.send({
				code: 200, 
				msg: '请求成功',
				user:rows[0]
          	})
        }
    })
});

// 列表
router.get('/user/listpage', function(req, res, next){
	var name = req.query.name||''
	var pageNum = req.query.pageSize || 1
	var startPage = (req.query.page - 1)*pageNum
	sql.query('select count(*) as total from list', function(err, row){
		if(err){
			res.send({code: 0, msg:' 服务器出错 '})
		}else{
			if(name){
				sql.query('select * from list where name="'+ name +'" limit '+startPage +', '+ pageNum , function(err,rows){
					if(err || rows.length == 0){
						res.send({code: 0, msg:' 服务器出错 '})
					}else{
						res.send({
							users:rows,
							total:row[0].total||0
						})
					}
				})
			}else{
				console.log(row[0].total, 'select * from list limit '+ startPage +', '+ pageNum)
				sql.query('select * from list limit '+ startPage +', '+ pageNum, function(err,rows){
					if(err || rows.length == 0){
						res.send({code: 0, msg:' 服务器出错 '})
					}else{
						res.send({
							users:rows,
							total:row[0].total||0
						})
					}
				})
			}
		}
	})
	
})

// 新增
router.get('/user/add', function(req, res, next) {
    sql.query('insert into list set ?', {name:req.query.name,sex:req.query.sex,age:req.query.age,birth:req.query.birth,addr:req.query.addr}, function(err,rows){
		if(err || rows.length == 0){
            res.send({code: 0,msg: ' 服务器出错 '})
        }else{
            res.send({
				code: 200, 
				msg: '请求成功'
          	})
        }
    })
});

// 编辑
router.get('/user/edit', function(req, res, next) {
	sql.query('select * from list where id="'+ req.query.id +'"', function(err, row){
		if(err || row.length != 1){
			res.send({code: 0,msg: ' 服务器出错 '})
		}else{
			sql.query('update list set name=?, sex=?, age=?, birth=?, addr=? where id=?', [req.query.name,req.query.sex,req.query.age,req.query.birth,req.query.addr,req.query.id], function(errs,rows){
				if(errs || rows.length == 0){
					res.send({code: 0,msg: ' 编辑失败 '})
				}else{
					res.send({
						code: 200, 
						msg: '编辑成功'
					})
				}
			})
		}
	})
});

// 删除
router.get('/user/remove', function(req, res, next) {
	sql.query('delete from list where id="'+ req.query.id +'"', function(err, row){
		if(err ){
			res.send({code: 0,msg: ' 删除失败 '})
		}else{
			res.send({code: 200,msg: ' 删除成功 '})
		}
	})
});

// 批量删除
router.get('/user/batchremove', function(req, res, next) {
	sql.query('delete from list where id in ('+ req.query.ids +')', function(err, row){
		if(err){
			res.send({code: 0,msg: ' 批量删除失败 '})
		}else{
			res.send({code: 200,msg: ' 批量删除成功 '})
		}
	})
});

module.exports = router;
