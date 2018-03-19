/**
 * Created by Administrator on 2018/2/28.
 */
var fs = require('fs')

var data = fs.readFileSync('input.txt')

console.log(data.toString())

//非阻塞式 并没有指定的顺心
fs.readFile('input.txt', function (err, data) {
	if (err) return console.info(err)
	console.info(data.toString())
})

console.info('程序执行结束')