var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({"age":29,"name":"loading" });
});

var server = app.listen(50000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});