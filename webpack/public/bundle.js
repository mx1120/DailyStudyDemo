/*! 孟祥版权所有 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * Created by Administrator on 2017/10/27.\r\n */\nvar config = __webpack_require__(2);\nmodule.exports = function () {\n\tvar greet = document.createElement('div');\n\tgreet.textContent = config.greetText;\n\treturn greet;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvR3JlZXRlci5qcz9lYjg0Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0VGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0FBR0EsSUFBSUEsU0FBUyxtQkFBQUMsQ0FBUSxDQUFSLENBQWI7QUFDQUMsT0FBT0MsT0FBUCxHQUFpQixZQUFZO0FBQzVCLEtBQUlDLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRixPQUFNRyxXQUFOLEdBQW9CUCxPQUFPUSxTQUEzQjtBQUNBLFFBQU9KLEtBQVA7QUFDQSxDQUpEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTcvMTAvMjcuXHJcbiAqL1xyXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcuanNvbicpXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0Z3JlZXQudGV4dENvbnRlbnQgPSBjb25maWcuZ3JlZXRUZXh0XHJcblx0cmV0dXJuIGdyZWV0XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvR3JlZXRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Greeter = __webpack_require__(0);\n\nvar _Greeter2 = _interopRequireDefault(_Greeter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar greeter = __webpack_require__(0); /**\r\n                                     * Created by Administrator on 2017/10/27.\r\n                                     */\n\ndocument.querySelector('#root').appendChild(greeter());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbImdyZWV0ZXIiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBSUE7Ozs7OztBQUVBLElBQU1BLFVBQVUsbUJBQUFDLENBQVEsQ0FBUixDQUFoQixDLENBTkE7Ozs7QUFPQUMsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixFQUFnQ0MsV0FBaEMsQ0FBNENKLFNBQTVDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTcvMTAvMjcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEdyZWV0ZXIgZnJvbSAnLi9HcmVldGVyJ1xyXG5cclxuY29uc3QgZ3JlZXRlciA9IHJlcXVpcmUoJy4vR3JlZXRlcicpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykuYXBwZW5kQ2hpbGQoZ3JlZXRlcigpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = {\"greetText\":\"Hi there and greetings from JSON!\"}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlnLmpzb24/MTE1MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1wiZ3JlZXRUZXh0XCI6XCJIaSB0aGVyZSBhbmQgZ3JlZXRpbmdzIGZyb20gSlNPTiFcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb25maWcuanNvblxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);