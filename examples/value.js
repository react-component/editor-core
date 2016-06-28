webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(776);


/***/ },

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcEditorCore = __webpack_require__(3);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(213);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorPluginBasicStyle = __webpack_require__(306);
	
	var _rcEditorPluginBasicStyle2 = _interopRequireDefault(_rcEditorPluginBasicStyle);
	
	var _rcEditorPluginEmoji = __webpack_require__(316);
	
	var _rcEditorPluginEmoji2 = _interopRequireDefault(_rcEditorPluginEmoji);
	
	__webpack_require__(775);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var plugins = [_rcEditorPluginBasicStyle2.default, _rcEditorPluginEmoji2.default]; // use jsx to render html, do not modify simple.html
	
	var toolbars = [['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji']];
	
	function editorChange(editorState) {
	  console.log('>> editorExport:', (0, _rcEditorCore.GetText)(editorState));
	}
	
	function keyDown(ev) {
	  if (ev.keyCode === 13 && ev.ctrlKey) {
	    return 'split-block';
	  }
	}
	
	var Editor = _react2.default.createClass({
	  displayName: 'Editor',
	  getInitialState: function getInitialState() {
	    return {
	      defaultValue: "hello world"
	    };
	  },
	  reset: function reset() {
	    this.refs.editor.Reset();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.reset },
	        ' reset '
	      ),
	      _react2.default.createElement(_rcEditorCore.EditorCore, {
	        ref: 'editor',
	        plugins: plugins,
	        toolbars: toolbars,
	        defaultValue: this.state.defaultValue,
	        onKeyDown: function onKeyDown(ev) {
	          return keyDown(ev);
	        },
	        onChange: function onChange(editorState) {
	          return editorChange(editorState);
	        }
	      })
	    );
	  }
	});
	_reactDom2.default.render(_react2.default.createElement(Editor, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=value.js.map