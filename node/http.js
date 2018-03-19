/**
 * Created by Administrator on 2018/2/28.
 */
var http = require('http')

http.createServer(function (request, response) {
	// 发送 HTTP 头部
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'})

	// 发送响应数据 "Hello World"
	response.end('hello Word\nthis is first\n HAHAHHA')

}).listen(8888)

console.log('Server running at http://127.0.0.01:8888')