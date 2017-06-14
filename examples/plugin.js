webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(567);


/***/ }),

/***/ 565:
2,

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcEditorCore = __webpack_require__(3);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(95);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _draftJs = __webpack_require__(45);
	
	__webpack_require__(565);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify simple.html
	
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
	  toHtml: function toHtml(text, entity) {
	    console.log('>> toHtml', entity);
	    if (entity.getType() === 'LINK') {
	      return '<a href="#">text</a>';
	    }
	  },
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
	  if (ev.keyCode === 13) {
	    if (ev.ctrlKey) {
	      return 'split-block';
	    }
	    return true;
	  }
	  return false;
	}
	
	var EditorWrapper = function (_React$Component) {
	  _inherits(EditorWrapper, _React$Component);
	
	  function EditorWrapper() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, EditorWrapper);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      plugins: [],
	      editorState: null
	    }, _this.onChange = function (editorState) {
	      _this.setState({
	        editorState: editorState
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  EditorWrapper.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_rcEditorCore.EditorCore, {
	        plugins: plugins,
	        toolbars: toolbars,
	        onKeyDown: function onKeyDown(ev) {
	          return keyDown(ev);
	        },
	        onChange: this.onChange,
	        value: this.state.editorState
	      }),
	      this.state.editorState ? (0, _rcEditorCore.GetHTML)(this.state.editorState) : null
	    );
	  };
	
	  return EditorWrapper;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(EditorWrapper, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=plugin.js.map