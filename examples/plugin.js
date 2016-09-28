webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(512);


/***/ },

/***/ 510:
2,

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcEditorCore = __webpack_require__(3);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(87);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _draftJs = __webpack_require__(39);
	
	__webpack_require__(510);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// use jsx to render html, do not modify simple.html
	
	function findWithRegex(regex, contentBlock, callback) {
	  // Get the text from the contentBlock
	  var text = contentBlock.getText();
	  var matchArr = void 0;
	  var start = void 0; // eslint-disable-line
	  // Go through all matches in the text and return the indizes to the callback
	  while ((matchArr = regex.exec(text)) !== null) {
	    // eslint-disable-line
	    start = matchArr.index;
	    callback(start, start + matchArr[0].length);
	  }
	}
	
	var suggestionRegex = new RegExp('(\\s|^)@[\\w]*', 'g');
	
	var callbacks = {
	  getEditorState: function getEditorState() {},
	  setEditorState: function setEditorState() {},
	  getStyleMap: function getStyleMap() {}
	};
	
	function toggleInlineStyle(style) {
	  return function () {
	    var editorState = callbacks.getEditorState();
	
	    callbacks.setEditorState(_draftJs.RichUtils.toggleInlineStyle(editorState, 'customer-style-' + style));
	  };
	}
	
	var Test = {
	  name: 'test',
	  callbacks: callbacks,
	  component: _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { onMouseDown: toggleInlineStyle('red') },
	      'red'
	    ),
	    _react2.default.createElement(
	      'div',
	      { onMouseDown: toggleInlineStyle('bold') },
	      'bold'
	    )
	  ),
	  customStyleFn: function customStyleFn(styleSet) {
	    return styleSet.map(function (style) {
	      if (style === 'customer-style-red') {
	        return {
	          color: 'red'
	        };
	      }
	      if (style === 'customer-style-bold') {
	        return {
	          fontWeight: 'bold'
	        };
	      }
	      return {};
	    }).reduce(Object.assign);
	  }
	};
	
	var plugins = [Test];
	var toolbars = [['test']];
	
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
	      plugins: [],
	      editorState: null
	    };
	  },
	  onChange: function onChange(editorState) {
	    console.log('>> onChange', editorState.getDecorator());
	    this.setState({
	      editorState: editorState
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(_rcEditorCore.EditorCore, {
	      plugins: plugins,
	      toolbars: toolbars,
	      onKeyDown: function onKeyDown(ev) {
	        return keyDown(ev);
	      },
	      onChange: this.onChange,
	      value: this.state.editorState
	    });
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(EditorWrapper, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=plugin.js.map