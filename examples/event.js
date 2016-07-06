webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(322);


/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcEditorCore = __webpack_require__(3);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(91);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	var EventPlugin = {
	  callbacks: {
	    setEditorState: null,
	    getEditorState: null,
	    onUpArrow: function onUpArrow() {
	      console.log('>> onUpArrow');
	    },
	    onDownArrow: function onDownArrow() {
	      console.log('>> onDownArrow ');
	    }
	  }
	};
	var plugins = [EventPlugin];
	var toolbars = [];
	
	_reactDom2.default.render(_react2.default.createElement(_rcEditorCore.EditorCore, {
	  plugins: plugins,
	  onFocus: function onFocus() {
	    return console.log('on focus');
	  },
	  onBlur: function onBlur() {
	    return console.log('on blur');
	  },
	  toolbars: toolbars,
	  handlePastedFiles: function handlePastedFiles(files) {
	    console.log('handlePastedFiles', files);
	    return true;
	  }
	}), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=event.js.map