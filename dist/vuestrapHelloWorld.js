(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuestrapHelloWorld"] = factory();
	else
		root["vuestrapHelloWorld"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT EACH COMPONENT
	 */
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsHelloWorld = __webpack_require__(1);
	
	var _srcComponentsHelloWorld2 = _interopRequireDefault(_srcComponentsHelloWorld);
	
	var vuestrapHello = {
	  helloWorld: _srcComponentsHelloWorld2['default']
	};
	
	module.exports = vuestrapHello;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _helloWorldHtml = __webpack_require__(6);
	
	var _helloWorldHtml2 = _interopRequireDefault(_helloWorldHtml);
	
	// export component object
	exports['default'] = {
	  template: _helloWorldHtml2['default'],
	  replace: true,
	  props: {
	    bold: {
	      type: Boolean,
	      'default': false
	    },
	    message: {
	      type: String
	    },
	    size: {
	      type: String,
	      'default': 'ccc'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"vuestrap-hello-world\">\r\n\t<p v-bind:class=\"{'text-bold': bold, 'text-sm': size == 'sm', 'text-lg': size == 'lg'}\">*** <slot></slot>! ***</p>\r\n</div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vuestrapHelloWorld.js.map