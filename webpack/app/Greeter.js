/**
 * Created by Administrator on 2017/10/27.
 */
var config = require('./config.json')
module.exports = function () {
	var greet = document.createElement('div')
	greet.textContent = config.greetText
	return greet
}