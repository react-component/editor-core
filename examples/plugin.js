webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(323);


/***/ },

/***/ 321:
2,

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcEditorCore = __webpack_require__(3);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(91);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _draftJs = __webpack_require__(43);
	
	__webpack_require__(321);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	var Test = {
	  name: 'test',
	  callbacks: {
	    getEditorState: function getEditorState() {},
	    setEditorState: function setEditorState() {}
	  },
	  component: _react2.default.createElement(
	    'div',
	    null,
	    '123'
	  )
	};
	
	var plugins = [Test];
	var toolbars = [['test']];
	
	function editorChange(editorState) {
	  console.log('>> editorExport:', (0, _rcEditorCore.GetText)(editorState));
	}
	
	function keyDown(ev) {
	  console.log('>> keydown', ev.keyCode, ev.ctrlKey);
	  if (ev.keyCode === 13) {
	    if (ev.ctrlKey) {
	      return 'split-block';
	    }
	    return true;
	  }
	  return false;
	}
	
	var EditorWrapper = _react2.default.createClass({
	  displayName: 'EditorWrapper',
	  getInitialState: function getInitialState() {
	    return {
	      plugins: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var i = 0;
	    setInterval(function () {
	      i++;
	      _this.setState({
	        plugins: [{
	          name: 'test',
	          callbacks: {
	            getEditorState: function getEditorState() {},
	            setEditorState: function setEditorState() {}
	          },
	          component: _react2.default.createElement(
	            'div',
	            null,
	            i
	          )
	        }]
	      });
	    }, 1000);
	  },
	  render: function render() {
	    console.log('>> render', this.state.plugins);
	    return _react2.default.createElement(_rcEditorCore.EditorCore, {
	      plugins: this.state.plugins,
	      toolbars: toolbars,
	      placeholder: 'input text here',
	      onKeyDown: function onKeyDown(ev) {
	        return keyDown(ev);
	      },
	      onChange: function onChange(editorState) {
	        return editorChange(editorState);
	      }
	    });
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(EditorWrapper, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=plugin.js.map