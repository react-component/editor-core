webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(392);


/***/ },

/***/ 390:
2,

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcEditorCore = __webpack_require__(3);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(91);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _draftJs = __webpack_require__(43);
	
	__webpack_require__(390);
	
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
	
	function toggleBlockType() {
	  var editorState = callbacks.getEditorState();
	  var blockTypedContent = _draftJs.Modifier.setBlockType(editorState.getCurrentContent(), editorState.getSelection(), 'text_align');
	
	  callbacks.setEditorState(_draftJs.EditorState.push(editorState, blockTypedContent, 'apply-block-type'));
	}
	
	var Test = {
	  name: 'test',
	  callbacks: callbacks,
	  component: _react2.default.createElement(
	    'div',
	    { onMouseDown: toggleBlockType },
	    '123'
	  ),
	  blockStyleMap: {
	    'text_align': 'alignLeft'
	  },
	  decorators: [{
	    strategy: function strategy(contentBlock, callback) {
	      findWithRegex(suggestionRegex, contentBlock, callback);
	    },
	    component: function component(props) {
	      return _react2.default.createElement(
	        'span',
	        { style: { color: 'red' } },
	        props.children
	      );
	    }
	  }]
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