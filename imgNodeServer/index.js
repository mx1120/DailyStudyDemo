/**
 * Created by Administrator on 2018/3/19.
 */
var express = requrie('express')
var app = express()

app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

var options = [
	{"name": 'mengxiang', 'sex':"man"}
]
var server = app.listen(3000, function () {

	var host = server.address().address;

	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})