webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcEditorCore = __webpack_require__(3);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorPluginBasicStyle = __webpack_require__(389);
	
	var _rcEditorPluginBasicStyle2 = _interopRequireDefault(_rcEditorPluginBasicStyle);
	
	var _rcEditorPluginEmoji = __webpack_require__(557);
	
	var _rcEditorPluginEmoji2 = _interopRequireDefault(_rcEditorPluginEmoji);
	
	__webpack_require__(565);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify simple.html
	
	var plugins = [_rcEditorPluginBasicStyle2.default, _rcEditorPluginEmoji2.default];
	var toolbars = [['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji']];
	
	function keyDown(ev) {
	  if (ev.keyCode === 13 && ev.ctrlKey) {
	    return 'split-block';
	  }
	}
	
	var Editor = function (_React$Component) {
	  _inherits(Editor, _React$Component);
	
	  function Editor() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Editor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      defaultValue: (0, _rcEditorCore.toEditorState)('hello world'),
	      value: null,
	      readOnly: false
	    }, _this.editorChange = function (editorState) {
	      _this.setState({
	        value: editorState
	      });
	    }, _this.reset = function () {
	      _this.setState({
	        value: _this.state.defaultValue
	      });
	    }, _this.toggleReadOnly = function () {
	      _this.setState({
	        readOnly: !_this.state.readOnly
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Editor.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.reset },
	        ' setText '
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.toggleReadOnly },
	        ' toggleReadOnly '
	      ),
	      _react2.default.createElement(_rcEditorCore.EditorCore, {
	        ref: 'editor',
	        readOnly: this.state.readOnly,
	        plugins: plugins,
	        toolbars: toolbars,
	        onKeyDown: function onKeyDown(ev) {
	          return keyDown(ev);
	        },
	        onChange: function onChange() {},
	        value: ''
	      })
	    );
	  };
	
	  return Editor;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Editor, null), document.getElementById('__react-content'));

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _immutable = __webpack_require__(326);
	
	var _utils = __webpack_require__(390);
	
	var _Spilit = __webpack_require__(402);
	
	var _Spilit2 = _interopRequireDefault(_Spilit);
	
	var _SuperScript = __webpack_require__(403);
	
	var _SuperScript2 = _interopRequireDefault(_SuperScript);
	
	var _SubScript = __webpack_require__(404);
	
	var _SubScript2 = _interopRequireDefault(_SubScript);
	
	var _FontSize = __webpack_require__(405);
	
	var _FontSize2 = _interopRequireDefault(_FontSize);
	
	var _FontColor = __webpack_require__(553);
	
	var _FontColor2 = _interopRequireDefault(_FontColor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var Bold = (0, _utils.inlineStyleComponentFactory)('bold'); // export this package's api
	
	var Italic = (0, _utils.inlineStyleComponentFactory)('italic');
	var Underline = (0, _utils.inlineStyleComponentFactory)('underline');
	var StrikeThrough = (0, _utils.inlineStyleComponentFactory)('strikethrough');
	var AlignLeft = (0, _utils.blockStyleComponentFactory)('align-left', { textAlign: 'left' });
	var AlignRight = (0, _utils.blockStyleComponentFactory)('align-right', { textAlign: 'right' });
	var AlignMiddle = (0, _utils.blockStyleComponentFactory)('align-middle', { textAlign: 'center' });
	var AlignJustify = (0, _utils.blockStyleComponentFactory)('align-justify', { textAlign: 'justify' });
	var EditorPluginBasicStyle = (0, _immutable.List)([_FontSize2["default"], _FontColor2["default"], Bold, Italic, _Spilit2["default"], Underline, StrikeThrough, _SuperScript2["default"], _SubScript2["default"], AlignLeft, AlignRight, AlignMiddle, AlignJustify]);
	exports["default"] = EditorPluginBasicStyle;
	module.exports = exports['default'];

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.noop = noop;
	exports.getApplyFontStyleFunc = getApplyFontStyleFunc;
	exports.getToggleFontStyleFunc = getToggleFontStyleFunc;
	exports.findEntities = findEntities;
	exports.getSelectionText = getSelectionText;
	exports.getApplyEntityFunc = getApplyEntityFunc;
	exports.getToggleEntityFunc = getToggleEntityFunc;
	exports.getCurrentEntity = getCurrentEntity;
	exports.inlineStyleComponentFactory = inlineStyleComponentFactory;
	exports.blockStyleComponentFactory = blockStyleComponentFactory;
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _draftJs = __webpack_require__(46);
	
	var _classnames3 = __webpack_require__(391);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _rcEditorUtils = __webpack_require__(392);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function noop(args) {}
	function getApplyFontStyleFunc(prefix, callbacks) {
	    return function applyStyle(styleName) {
	        var needFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	        var getEditorState = callbacks.getEditorState,
	            setEditorState = callbacks.setEditorState;
	
	        var editorState = getEditorState();
	        var contentState = editorState.getCurrentContent();
	        var selection = editorState.getSelection();
	        var currentStyle = (0, _rcEditorUtils.getCurrentInlineStyle)(editorState);
	        if (selection.isCollapsed()) {
	            currentStyle.forEach(function (style) {
	                if (style.indexOf('' + prefix) !== -1 && style !== styleName) {
	                    editorState = _draftJs.RichUtils.toggleInlineStyle(editorState, style);
	                }
	            });
	            editorState = _draftJs.RichUtils.toggleInlineStyle(editorState, styleName);
	            return setEditorState(editorState, true);
	        }
	        currentStyle.forEach(function (style) {
	            if (style.indexOf('' + prefix) !== -1) {
	                contentState = _draftJs.Modifier.removeInlineStyle(contentState, selection, style);
	            }
	        });
	        contentState = _draftJs.Modifier.applyInlineStyle(contentState, selection, styleName);
	        setEditorState(_draftJs.EditorState.push(editorState, contentState, 'apply-style'), needFocus);
	    };
	}
	function getToggleFontStyleFunc(prefix, callbacks) {
	    return function toggleStyle(styleName) {
	        var getEditorState = callbacks.getEditorState,
	            setEditorState = callbacks.setEditorState;
	
	        var editorState = getEditorState(true);
	        var selection = editorState.getSelection();
	        var currentStyle = (0, _rcEditorUtils.getCurrentInlineStyle)(editorState);
	        currentStyle.forEach(function (style) {
	            if (style.indexOf('' + prefix) !== -1 && style !== styleName) {
	                editorState = _draftJs.RichUtils.toggleInlineStyle(editorState, style);
	            }
	        });
	        editorState = _draftJs.RichUtils.toggleInlineStyle(editorState, styleName);
	        if (selection.isCollapsed()) {
	            return setEditorState(editorState, true);
	        }
	        setEditorState(editorState);
	    };
	}
	function findEntities(entityType) {
	    return function findEntitiesFunc(contentBlock, callback, contentState) {
	        contentBlock.findEntityRanges(function (character) {
	            var entityKey = character.getEntity();
	            return entityKey !== null && contentState.getEntity(entityKey).getType() === entityType;
	        }, callback);
	    };
	}
	function getSelectionText(editorState, selection) {
	    var anchorKey = selection.getAnchorKey();
	    var currentContent = editorState.getCurrentContent();
	    var currentBlock = currentContent.getBlockForKey(anchorKey);
	    return currentBlock.getText();
	}
	function getApplyEntityFunc(callbacks) {
	    return function applyEntity(entityType) {
	        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        var entityMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'MUTABLE';
	        var getEditorState = callbacks.getEditorState,
	            setEditorState = callbacks.setEditorState;
	
	        var editorState = getEditorState();
	        var contentState = editorState.getCurrentContent();
	        var selection = editorState.getSelection();
	        var currentEntity = getCurrentEntity(editorState);
	        var entityKey = contentState.createEntity(entityType, entityMode, data);
	        var replacedContent = _draftJs.Modifier.applyEntity(contentState, selection, entityKey);
	        return setEditorState(_draftJs.EditorState.push(editorState, replacedContent, 'toggle-block'));
	    };
	}
	function getToggleEntityFunc(callbacks) {
	    return function toggleEntity(entityType) {
	        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        var active = arguments[2];
	        var entityMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'MUTABLE';
	        var getEditorState = callbacks.getEditorState,
	            setEditorState = callbacks.setEditorState;
	
	        var editorState = getEditorState();
	        var contentState = editorState.getCurrentContent();
	        var selection = editorState.getSelection();
	        var replacedContent = contentState;
	        var entityKey = null;
	        var currentEntity = getCurrentEntity(editorState);
	        if (!currentEntity || contentState.getEntity(currentEntity).getType() !== entityType || selection.isCollapsed() && !active) {
	            contentState.createEntity(entityType, entityMode, data);
	            entityKey = contentState.getLastCreatedEntityKey();
	        }
	        if (selection.isCollapsed()) {
	            replacedContent = _draftJs.Modifier.insertText(editorState.getCurrentContent(), selection, ' ', null, active ? null : entityKey);
	        } else {
	            replacedContent = _draftJs.Modifier.applyEntity(editorState.getCurrentContent(), selection, entityKey);
	        }
	        return setEditorState(_draftJs.EditorState.push(editorState, replacedContent, 'toggle-block'));
	    };
	}
	function getCurrentEntity(editorState) {
	    var entity = void 0;
	    var selection = editorState.getSelection();
	    var start = selection.getStartOffset();
	    var end = selection.getEndOffset();
	    if (start === end && start === 0) {
	        end = -1;
	    } else if (start === end) {
	        start = start - 1;
	    }
	    var block = (0, _rcEditorUtils.getSelectedBlock)(editorState);
	    for (var i = start; i < end; i++) {
	        var currentEntity = block.getEntityAt(i);
	        if (!currentEntity) {
	            entity = undefined;
	            break;
	        }
	        if (i === start) {
	            entity = currentEntity;
	        } else {
	            if (entity !== currentEntity) {
	                entity = undefined;
	                break;
	            }
	        }
	    }
	    return entity;
	}
	function inlineStyleComponentFactory(name) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return {
	        constructor: function constructor() {
	            var callbacks = {
	                getEditorState: noop,
	                setEditorState: noop
	            };
	            var upperName = name.toUpperCase();
	            var toggleStyle = (0, _rcEditorUtils.getToggleStyleFunc)(callbacks);
	            return {
	                name: name,
	                callbacks: callbacks,
	                component: function component(props) {
	                    var _classnames;
	
	                    var currentStyle = (0, _rcEditorUtils.getCurrentInlineStyle)(callbacks.getEditorState());
	                    var classNames = (0, _classnames4["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-' + name, true), _defineProperty(_classnames, 'active', currentStyle.has(upperName)), _classnames));
	                    return _react2["default"].createElement('span', { onMouseDown: function onMouseDown(e) {
	                            toggleStyle(upperName);e.preventDefault();
	                        }, className: classNames });
	                }
	            };
	        },
	
	        config: {}
	    };
	}
	function blockStyleComponentFactory(name, style) {
	    return {
	        constructor: function constructor() {
	            var callbacks = {
	                getEditorState: noop,
	                setEditorState: noop
	            };
	            var blockRenderMap = _defineProperty({}, '' + name, {
	                element: function element(props) {
	                    return _react2["default"].createElement('div', _extends({}, props, { style: style }));
	                },
	                elementTag: 'div',
	                style: style
	            });
	            var toggleBlockStyle = (0, _rcEditorUtils.getToggleBlockStyleFunc)(callbacks);
	            return {
	                name: name,
	                callbacks: callbacks,
	                blockRenderMap: blockRenderMap,
	                component: function component(prop) {
	                    var _classnames2;
	
	                    var selectedBlock = (0, _rcEditorUtils.getSelectedBlock)(callbacks.getEditorState());
	                    var classNames = (0, _classnames4["default"])((_classnames2 = {}, _defineProperty(_classnames2, 'editor-icon', true), _defineProperty(_classnames2, 'editor-icon-' + name, true), _defineProperty(_classnames2, 'active', selectedBlock.getType() === name), _classnames2));
	                    return _react2["default"].createElement('span', { onMouseDown: function onMouseDown() {
	                            return toggleBlockStyle(name);
	                        }, className: classNames });
	                }
	            };
	        },
	
	        config: {}
	    };
	}

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EditorUtils = __webpack_require__(393);
	
	var _EditorUtils2 = _interopRequireDefault(_EditorUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _EditorUtils2["default"];
	module.exports = exports['default'];

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getToggleStyleFunc = __webpack_require__(394);
	
	var _getToggleStyleFunc2 = _interopRequireDefault(_getToggleStyleFunc);
	
	var _getToggleBlockStyleFunc = __webpack_require__(395);
	
	var _getToggleBlockStyleFunc2 = _interopRequireDefault(_getToggleBlockStyleFunc);
	
	var _getCurrentInlineStyle = __webpack_require__(397);
	
	var _getCurrentInlineStyle2 = _interopRequireDefault(_getCurrentInlineStyle);
	
	var _getCurrentEntity = __webpack_require__(398);
	
	var _getCurrentEntity2 = _interopRequireDefault(_getCurrentEntity);
	
	var _getSelectedBlock = __webpack_require__(396);
	
	var _getSelectedBlock2 = _interopRequireDefault(_getSelectedBlock);
	
	var _getEntitySelectionState = __webpack_require__(399);
	
	var _getEntitySelectionState2 = _interopRequireDefault(_getEntitySelectionState);
	
	var _findEntity = __webpack_require__(400);
	
	var _findEntity2 = _interopRequireDefault(_findEntity);
	
	var _getSelectedText = __webpack_require__(401);
	
	var _getSelectedText2 = _interopRequireDefault(_getSelectedText);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var EditorUtils = {
	    getToggleStyleFunc: _getToggleStyleFunc2["default"],
	    getToggleBlockStyleFunc: _getToggleBlockStyleFunc2["default"],
	    getCurrentInlineStyle: _getCurrentInlineStyle2["default"],
	    getCurrentEntity: _getCurrentEntity2["default"],
	    getSelectedBlock: _getSelectedBlock2["default"],
	    getEntitySelectionState: _getEntitySelectionState2["default"],
	    findEntity: _findEntity2["default"],
	    getSelectedText: _getSelectedText2["default"]
	};
	exports["default"] = EditorUtils;
	module.exports = exports['default'];

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getToggleStyleFunc;
	
	var _draftJs = __webpack_require__(46);
	
	function getToggleStyleFunc(callbacks) {
	    return function toggleStyle(styleName) {
	        var getEditorState = callbacks.getEditorState;
	        var setEditorState = callbacks.setEditorState;
	
	        var editorState = getEditorState();
	        var selection = editorState.getSelection();
	        setEditorState(_draftJs.RichUtils.toggleInlineStyle(getEditorState(), styleName));
	    };
	}
	module.exports = exports['default'];

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getToggleBlockStyleFunc;
	
	var _draftJs = __webpack_require__(46);
	
	var _getSelectedBlock = __webpack_require__(396);
	
	var _getSelectedBlock2 = _interopRequireDefault(_getSelectedBlock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getToggleBlockStyleFunc(callbacks) {
	    return function toggleBlockStyle(styleName) {
	        var getEditorState = callbacks.getEditorState;
	        var setEditorState = callbacks.setEditorState;
	
	        var editorState = getEditorState();
	        var currentBlock = (0, _getSelectedBlock2["default"])(editorState);
	        var blockTypedContent = _draftJs.Modifier.setBlockType(editorState.getCurrentContent(), editorState.getSelection(), styleName);
	        setEditorState(_draftJs.EditorState.push(editorState, blockTypedContent, 'apply-block-type'));
	    };
	}
	module.exports = exports['default'];

/***/ }),
/* 396 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getSelectedBlock;
	function getSelectedBlock(editorState) {
	    var currentContent = editorState.getCurrentContent();
	    var selection = editorState.getSelection();
	    return currentContent.getBlockForKey(selection.getStartKey());
	}
	module.exports = exports['default'];

/***/ }),
/* 397 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getCurrentInlineStyle;
	var inlineStyleCache = {
	    editorState: null,
	    value: null
	};
	function getCurrentInlineStyle(editorState) {
	    if (editorState === inlineStyleCache.editorState) {
	        return inlineStyleCache.value;
	    }
	    inlineStyleCache.editorState = editorState;
	    inlineStyleCache.value = editorState.getCurrentInlineStyle();
	    return inlineStyleCache.value;
	}
	module.exports = exports['default'];

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getCurrentEntity;
	
	var _getSelectedBlock = __webpack_require__(396);
	
	var _getSelectedBlock2 = _interopRequireDefault(_getSelectedBlock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getCurrentEntity(editorState) {
	    var entity = void 0;
	    var selection = editorState.getSelection();
	    var start = selection.getStartOffset();
	    var end = selection.getEndOffset();
	    if (start === end && start === 0) {
	        end = -1;
	    } else if (start === end) {
	        start = start - 1;
	    }
	    var block = (0, _getSelectedBlock2["default"])(editorState);
	    for (var i = start; i < end; i++) {
	        var currentEntity = block.getEntityAt(i);
	        if (!currentEntity) {
	            entity = undefined;
	            break;
	        }
	        if (i === start) {
	            entity = currentEntity;
	        } else {
	            if (entity !== currentEntity) {
	                entity = undefined;
	                break;
	            }
	        }
	    }
	    return entity;
	}
	module.exports = exports['default'];

/***/ }),
/* 399 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getEntitySelectionState;
	function getEntitySelectionState(contentState, entityKey) {
	    var blockMap = contentState.getBlockMap();
	    console.log('>> blockmap', blockMap.toSource());
	    // const selectionKey = selectionState.getAnchorKey();
	    // const selectionOffset = selectionState.getAnchorOffset();
	    // const block = contentState.getBlockForKey(selectionKey);
	    // const blockKey = block.getKey();
	    //
	    // let entitySelection;
	    // getRangesForDraftEntity(block, entityKey).forEach((range) => {
	    //   if (range.start <= selectionOffset && selectionOffset <= range.end) {
	    //     entitySelection = new SelectionState({
	    //       anchorOffset: range.start,
	    //       anchorKey: blockKey,
	    //       focusOffset: range.end,
	    //       focusKey: blockKey,
	    //       isBackward: false,
	    //       hasFocus: selectionState.getHasFocus(),
	    //     });
	    //   }
	    // });
	    // return entitySelection;
	}
	module.exports = exports['default'];

/***/ }),
/* 400 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = findEntities;
	function findEntities(entityType) {
	    return function findEntitiesFunc(contentBlock, callback, contentState) {
	        contentBlock.findEntityRanges(function (character) {
	            var entityKey = character.getEntity();
	            return entityKey !== null && contentState.getEntity(entityKey).getType() === entityType;
	        }, callback);
	    };
	}
	module.exports = exports['default'];

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getSelectedText;
	
	var _getContentStateFragment = __webpack_require__(62);
	
	var _getContentStateFragment2 = _interopRequireDefault(_getContentStateFragment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getSelectedText(contentState, selectionState) {
	    var fragment = (0, _getContentStateFragment2["default"])(contentState, selectionState);
	    return fragment.map(function (block) {
	        return block.getText();
	    }).join('');
	}
	module.exports = exports['default'];

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function noop(args) {}
	;
	var Split = {
	    constructor: function constructor() {
	        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        var callbacks = {
	            getEditorState: noop,
	            setEditorState: noop
	        };
	        return {
	            name: '|',
	            callbacks: callbacks,
	            component: _react2["default"].createElement('span', { className: 'editor-icon-split' })
	        };
	    },
	
	    config: {}
	};
	exports["default"] = Split;
	module.exports = exports['default'];

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(391);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(390);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function exportFunction(content) {
	    var entityData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return '<sup>' + content + '</sup>';
	}
	var SuperScript = {
	    constructor: function constructor() {
	        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var toggleBlock = (0, _utils.getToggleEntityFunc)(callbacks);
	        return {
	            name: 'superscript',
	            callbacks: callbacks,
	            decorators: [{
	                strategy: (0, _utils.findEntities)('superscript'),
	                component: function component(props) {
	                    return _react2["default"].createElement(
	                        'sup',
	                        null,
	                        props.children
	                    );
	                }
	            }],
	            component: function component(props) {
	                var _classnames;
	
	                var editorState = callbacks.getEditorState();
	                var contentState = editorState.getCurrentContent();
	                var currentEntityKey = (0, _utils.getCurrentEntity)(editorState);
	                var isSuperScript = currentEntityKey ? contentState.getEntity(currentEntityKey).getType() === 'superscript' : false;
	                var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-superscript', true), _defineProperty(_classnames, 'active', isSuperScript), _classnames));
	                return _react2["default"].createElement('span', { onMouseDown: function onMouseDown() {
	                        return toggleBlock('superscript', { "export": exportFunction }, isSuperScript);
	                    }, className: classNames });
	            }
	        };
	    },
	    config: {}
	};
	exports["default"] = SuperScript;
	module.exports = exports['default'];

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(391);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(390);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function exportFunction(content) {
	    var entityData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return '<sub>' + content + '</sub>';
	}
	var SubScript = {
	    constructor: function constructor() {
	        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var toggleBlock = (0, _utils.getToggleEntityFunc)(callbacks);
	        return {
	            name: 'subscript',
	            callbacks: callbacks,
	            decorators: [{
	                strategy: (0, _utils.findEntities)('subscript'),
	                component: function component(props) {
	                    return _react2["default"].createElement(
	                        'sub',
	                        null,
	                        props.children
	                    );
	                }
	            }],
	            component: function component(props) {
	                var _classnames;
	
	                var editorState = callbacks.getEditorState();
	                var contentState = editorState.getCurrentContent();
	                var currentEntityKey = (0, _utils.getCurrentEntity)(editorState);
	                var isSuperScript = currentEntityKey ? contentState.getEntity(currentEntityKey).getType() === 'subscript' : false;
	                var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-subscript', true), _defineProperty(_classnames, 'active', isSuperScript), _classnames));
	                return _react2["default"].createElement('span', { onMouseDown: function onMouseDown() {
	                        return toggleBlock('subscript', { "export": exportFunction }, isSuperScript);
	                    }, className: classNames });
	            }
	        };
	    },
	    config: {}
	};
	exports["default"] = SubScript;
	module.exports = exports['default'];

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcSelect = __webpack_require__(406);
	
	var _rcSelect2 = _interopRequireDefault(_rcSelect);
	
	var _setImmediate = __webpack_require__(272);
	
	var _setImmediate2 = _interopRequireDefault(_setImmediate);
	
	var _utils = __webpack_require__(390);
	
	var _rcEditorUtils = __webpack_require__(392);
	
	var _rcEditorUtils2 = _interopRequireDefault(_rcEditorUtils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var getCurrentInlineStyle = _rcEditorUtils2["default"].getCurrentInlineStyle,
	    getCurrentEntity = _rcEditorUtils2["default"].getCurrentEntity;
	
	var Option = _rcSelect2["default"].Option;
	var sizeArray = [];
	for (var i = 12; i < 24; i += 2) {
	    sizeArray.push(i);
	}
	var PREFIX = 'FONTSIZE_';
	function customStyleFn(styleSet) {
	    return styleSet.map(function (style) {
	        if (style.indexOf(PREFIX) !== -1) {
	            var fontSize = Number(style.substring(PREFIX.length));
	            return {
	                fontSize: fontSize
	            };
	        }
	        return {};
	    }).reduce(function (prev, curr) {
	        return Object.assign(prev, curr);
	    });
	}
	var FontSize = {
	    constructor: function constructor(config) {
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop,
	            setInlineStyleOverride: _utils.noop
	        };
	        var toggleStyle = (0, _utils.getToggleFontStyleFunc)(PREFIX, callbacks);
	        function changeSelect(_ref) {
	            var key = _ref.key;
	
	            var applyStyle = function applyStyle() {
	                return toggleStyle('' + PREFIX + key);
	            };
	            if (callbacks.getEditorState().getSelection().isCollapsed()) {
	                (0, _setImmediate2["default"])(applyStyle);
	            } else {
	                applyStyle();
	            }
	        }
	        return {
	            name: 'fontSize',
	            callbacks: callbacks,
	            customStyleFn: customStyleFn,
	            component: function component(props) {
	                var editorState = callbacks.getEditorState();
	                var currentStyle = getCurrentInlineStyle(editorState);
	                var currentFontSize = currentStyle && currentStyle.find(function (item) {
	                    return item.indexOf('' + PREFIX) !== -1;
	                });
	                var fontSizeNumber = currentFontSize ? currentFontSize.substring(PREFIX.length) : 16;
	                var options = sizeArray.map(function (item) {
	                    return _react2["default"].createElement(
	                        Option,
	                        { key: item, value: item + '', style: { fontSize: item } },
	                        item,
	                        'px'
	                    );
	                });
	                var value = {
	                    key: fontSizeNumber + '',
	                    label: fontSizeNumber + 'px'
	                };
	                return _react2["default"].createElement(
	                    'span',
	                    { onClick: function onClick(ev) {
	                            ev.preventDefault();ev.stopPropagation();
	                        } },
	                    _react2["default"].createElement(
	                        _rcSelect2["default"],
	                        { labelInValue: true, prefixCls: config.prefixCls + '-select', onChange: changeSelect, style: { width: 80, marginRight: 6 }, value: value },
	                        options
	                    )
	                );
	            }
	        };
	    }
	};
	exports["default"] = FontSize;
	module.exports = exports['default'];

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SelectPropTypes = exports.OptGroup = exports.Option = undefined;
	
	var _Select = __webpack_require__(407);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(551);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _PropTypes = __webpack_require__(549);
	
	var _OptGroup = __webpack_require__(552);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	_Select2['default'].Option = _Option2['default'];
	_Select2['default'].OptGroup = _OptGroup2['default'];
	exports.Option = _Option2['default'];
	exports.OptGroup = _OptGroup2['default'];
	exports.SelectPropTypes = _PropTypes.SelectPropTypes;
	exports['default'] = _Select2['default'];

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(446);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _KeyCode = __webpack_require__(495);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _classnames2 = __webpack_require__(391);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _rcAnimate = __webpack_require__(496);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _componentClasses = __webpack_require__(501);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	var _util = __webpack_require__(504);
	
	var _SelectTrigger = __webpack_require__(505);
	
	var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);
	
	var _PropTypes = __webpack_require__(549);
	
	var _rcMenu = __webpack_require__(534);
	
	var _warning = __webpack_require__(550);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function noop() {} /* eslint func-names: 0 */
	
	
	function saveRef(name, component) {
	  this[name] = component;
	}
	
	function chaining() {
	  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
	    fns[_key] = arguments[_key];
	  }
	
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    // eslint-disable-line
	    for (var i = 0; i < fns.length; i++) {
	      if (fns[i] && typeof fns[i] === 'function') {
	        fns[i].apply(this, args);
	      }
	    }
	  };
	}
	
	var Select = function (_React$Component) {
	  (0, _inherits3['default'])(Select, _React$Component);
	
	  function Select(props) {
	    (0, _classCallCheck3['default'])(this, Select);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var value = [];
	    if ('value' in props) {
	      value = (0, _util.toArray)(props.value);
	    } else {
	      value = (0, _util.toArray)(props.defaultValue);
	    }
	    value = _this.addLabelToValue(props, value);
	    value = _this.addTitleToValue(props, value);
	    var inputValue = '';
	    if (props.combobox) {
	      inputValue = value.length ? _this.getLabelFromProps(props, value[0].key) : '';
	    }
	    _this.saveInputRef = saveRef.bind(_this, 'inputInstance');
	    _this.saveInputMirrorRef = saveRef.bind(_this, 'inputMirrorInstance');
	    var open = props.open;
	    if (open === undefined) {
	      open = props.defaultOpen;
	    }
	    _this.state = {
	      value: value,
	      inputValue: inputValue,
	      open: open
	    };
	    _this.adjustOpenState();
	    return _this;
	  }
	
	  (0, _createClass3['default'])(Select, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      this.props = nextProps;
	      this.state = nextState;
	      this.adjustOpenState();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if ((0, _util.isMultipleOrTags)(this.props)) {
	        var inputNode = this.getInputDOMNode();
	        var mirrorNode = this.getInputMirrorDOMNode();
	        if (inputNode.value) {
	          inputNode.style.width = '';
	          inputNode.style.width = mirrorNode.clientWidth + 'px';
	        } else {
	          inputNode.style.width = '';
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearFocusTime();
	      this.clearBlurTime();
	      this.clearAdjustTimer();
	      if (this.dropdownContainer) {
	        _reactDom2['default'].unmountComponentAtNode(this.dropdownContainer);
	        document.body.removeChild(this.dropdownContainer);
	        this.dropdownContainer = null;
	      }
	    }
	
	    // combobox ignore
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _rootCls;
	
	      var props = this.props;
	      var multiple = (0, _util.isMultipleOrTags)(props);
	      var state = this.state;
	      var className = props.className,
	          disabled = props.disabled,
	          allowClear = props.allowClear,
	          prefixCls = props.prefixCls;
	
	      var ctrlNode = this.renderTopControlNode();
	      var extraSelectionProps = {};
	      var open = this.state.open;
	
	      var options = this._options;
	      if (!(0, _util.isMultipleOrTagsOrCombobox)(props)) {
	        extraSelectionProps = {
	          onKeyDown: this.onKeyDown,
	          tabIndex: 0
	        };
	      }
	      var rootCls = (_rootCls = {}, (0, _defineProperty3['default'])(_rootCls, className, !!className), (0, _defineProperty3['default'])(_rootCls, prefixCls, 1), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-open', open), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-focused', open || !!this._focused), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-combobox', (0, _util.isCombobox)(props)), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-enabled', !disabled), (0, _defineProperty3['default'])(_rootCls, prefixCls + '-allow-clear', !!props.allowClear), _rootCls);
	      var clearStyle = (0, _extends3['default'])({}, _util.UNSELECTABLE_STYLE, {
	        display: 'none'
	      });
	      if (state.inputValue || state.value.length) {
	        clearStyle.display = 'block';
	      }
	      var clear = _react2['default'].createElement('span', (0, _extends3['default'])({
	        key: 'clear',
	        onMouseDown: _util.preventDefaultEvent,
	        style: clearStyle
	      }, _util.UNSELECTABLE_ATTRIBUTE, {
	        className: prefixCls + '-selection__clear',
	        onClick: this.onClearSelection
	      }));
	      return _react2['default'].createElement(
	        _SelectTrigger2['default'],
	        {
	          onPopupFocus: this.onPopupFocus,
	          dropdownAlign: props.dropdownAlign,
	          dropdownClassName: props.dropdownClassName,
	          dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
	          defaultActiveFirstOption: props.defaultActiveFirstOption,
	          dropdownMenuStyle: props.dropdownMenuStyle,
	          transitionName: props.transitionName,
	          animation: props.animation,
	          prefixCls: props.prefixCls,
	          dropdownStyle: props.dropdownStyle,
	          combobox: props.combobox,
	          showSearch: props.showSearch,
	          options: options,
	          multiple: multiple,
	          disabled: disabled,
	          visible: open,
	          inputValue: state.inputValue,
	          value: state.value,
	          firstActiveValue: props.firstActiveValue,
	          onDropdownVisibleChange: this.onDropdownVisibleChange,
	          getPopupContainer: props.getPopupContainer,
	          onMenuSelect: this.onMenuSelect,
	          onMenuDeselect: this.onMenuDeselect,
	          ref: 'trigger'
	        },
	        _react2['default'].createElement(
	          'div',
	          {
	            style: props.style,
	            ref: 'root',
	            onBlur: this.onOuterBlur,
	            onFocus: this.onOuterFocus,
	            className: (0, _classnames3['default'])(rootCls)
	          },
	          _react2['default'].createElement(
	            'div',
	            (0, _extends3['default'])({
	              ref: 'selection',
	              key: 'selection',
	              className: prefixCls + '-selection\n            ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
	              role: 'combobox',
	              'aria-autocomplete': 'list',
	              'aria-haspopup': 'true',
	              'aria-expanded': open
	            }, extraSelectionProps),
	            ctrlNode,
	            allowClear ? clear : null,
	            multiple || !props.showArrow ? null : _react2['default'].createElement(
	              'span',
	              (0, _extends3['default'])({
	                key: 'arrow',
	                className: prefixCls + '-arrow',
	                style: _util.UNSELECTABLE_STYLE
	              }, _util.UNSELECTABLE_ATTRIBUTE, {
	                onClick: this.onArrowClick
	              }),
	              _react2['default'].createElement('b', null)
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return Select;
	}(_react2['default'].Component);
	
	Select.propTypes = _PropTypes.SelectPropTypes;
	Select.defaultProps = {
	  prefixCls: 'rc-select',
	  defaultOpen: false,
	  labelInValue: false,
	  defaultActiveFirstOption: true,
	  showSearch: true,
	  allowClear: false,
	  placeholder: '',
	  onChange: noop,
	  onFocus: noop,
	  onBlur: noop,
	  onSelect: noop,
	  onSearch: noop,
	  onDeselect: noop,
	  showArrow: true,
	  dropdownMatchSelectWidth: true,
	  dropdownStyle: {},
	  dropdownMenuStyle: {},
	  optionFilterProp: 'value',
	  optionLabelProp: 'value',
	  notFoundContent: 'Not Found',
	  backfill: false
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.componentWillReceiveProps = function (nextProps) {
	    if ('value' in nextProps) {
	      var value = (0, _util.toArray)(nextProps.value);
	      value = _this2.addLabelToValue(nextProps, value);
	      value = _this2.addTitleToValue(nextProps, value);
	      _this2.setState({
	        value: value
	      });
	      if (nextProps.combobox) {
	        _this2.setState({
	          inputValue: value.length ? _this2.getLabelFromProps(nextProps, value[0].key) : ''
	        });
	      }
	    }
	  };
	
	  this.onInputChange = function (event) {
	    var tokenSeparators = _this2.props.tokenSeparators;
	
	    var val = event.target.value;
	    if ((0, _util.isMultipleOrTags)(_this2.props) && tokenSeparators && (0, _util.includesSeparators)(val, tokenSeparators)) {
	      var nextValue = _this2.tokenize(val);
	      _this2.fireChange(nextValue);
	      _this2.setOpenState(false, true);
	      _this2.setInputValue('', false);
	      return;
	    }
	    _this2.setInputValue(val);
	    _this2.setState({
	      open: true
	    });
	    if ((0, _util.isCombobox)(_this2.props)) {
	      _this2.fireChange([{
	        key: val
	      }]);
	    }
	  };
	
	  this.onDropdownVisibleChange = function (open) {
	    if (open && !_this2._focused) {
	      _this2.clearBlurTime();
	      _this2.timeoutFocus();
	      _this2._focused = true;
	      _this2.updateFocusClassName();
	    }
	    _this2.setOpenState(open);
	  };
	
	  this.onKeyDown = function (event) {
	    var props = _this2.props;
	    if (props.disabled) {
	      return;
	    }
	    var keyCode = event.keyCode;
	    if (_this2.state.open && !_this2.getInputDOMNode()) {
	      _this2.onInputKeyDown(event);
	    } else if (keyCode === _KeyCode2['default'].ENTER || keyCode === _KeyCode2['default'].DOWN) {
	      _this2.setOpenState(true);
	      event.preventDefault();
	    }
	  };
	
	  this.onInputKeyDown = function (event) {
	    var props = _this2.props;
	    if (props.disabled) {
	      return;
	    }
	    var state = _this2.state;
	    var keyCode = event.keyCode;
	    if ((0, _util.isMultipleOrTags)(props) && !event.target.value && keyCode === _KeyCode2['default'].BACKSPACE) {
	      event.preventDefault();
	      var value = state.value;
	
	      if (value.length) {
	        _this2.removeSelected(value[value.length - 1].key);
	      }
	      return;
	    }
	    if (keyCode === _KeyCode2['default'].DOWN) {
	      if (!state.open) {
	        _this2.openIfHasChildren();
	        event.preventDefault();
	        event.stopPropagation();
	        return;
	      }
	    } else if (keyCode === _KeyCode2['default'].ESC) {
	      if (state.open) {
	        _this2.setOpenState(false);
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      return;
	    }
	
	    if (state.open) {
	      var menu = _this2.refs.trigger.getInnerMenu();
	      if (menu && menu.onKeyDown(event, _this2.handleBackfill)) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	    }
	  };
	
	  this.onMenuSelect = function (_ref) {
	    var item = _ref.item;
	
	    var value = _this2.state.value;
	    var props = _this2.props;
	    var selectedValue = (0, _util.getValuePropValue)(item);
	    var selectedLabel = _this2.getLabelFromOption(item);
	    var lastValue = value[value.length - 1];
	    var event = selectedValue;
	    if (props.labelInValue) {
	      event = {
	        key: event,
	        label: selectedLabel
	      };
	    }
	    props.onSelect(event, item);
	    var selectedTitle = item.props.title;
	    if ((0, _util.isMultipleOrTags)(props)) {
	      if ((0, _util.findIndexInValueByKey)(value, selectedValue) !== -1) {
	        return;
	      }
	      value = value.concat([{
	        key: selectedValue,
	        label: selectedLabel,
	        title: selectedTitle
	      }]);
	    } else {
	      if ((0, _util.isCombobox)(props)) {
	        _this2.skipAdjustOpen = true;
	        _this2.clearAdjustTimer();
	        _this2.skipAdjustOpenTimer = setTimeout(function () {
	          _this2.skipAdjustOpen = false;
	        }, 0);
	      }
	      if (lastValue && lastValue.key === selectedValue && !lastValue.backfill) {
	        _this2.setOpenState(false, true);
	        return;
	      }
	      value = [{
	        key: selectedValue,
	        label: selectedLabel,
	        title: selectedTitle
	      }];
	      _this2.setOpenState(false, true);
	    }
	    _this2.fireChange(value);
	    var inputValue = void 0;
	    if ((0, _util.isCombobox)(props)) {
	      inputValue = (0, _util.getPropValue)(item, props.optionLabelProp);
	    } else {
	      inputValue = '';
	    }
	    _this2.setInputValue(inputValue, false);
	  };
	
	  this.onMenuDeselect = function (_ref2) {
	    var item = _ref2.item,
	        domEvent = _ref2.domEvent;
	
	    if (domEvent.type === 'click') {
	      _this2.removeSelected((0, _util.getValuePropValue)(item));
	    }
	    _this2.setInputValue('', false);
	  };
	
	  this.onArrowClick = function (e) {
	    e.stopPropagation();
	    if (!_this2.props.disabled) {
	      _this2.setOpenState(!_this2.state.open, !_this2.state.open);
	    }
	  };
	
	  this.onPlaceholderClick = function () {
	    if (_this2.getInputDOMNode()) {
	      _this2.getInputDOMNode().focus();
	    }
	  };
	
	  this.onOuterFocus = function (e) {
	    if (_this2.props.disabled) {
	      e.preventDefault();
	      return;
	    }
	    _this2.clearBlurTime();
	    if (!(0, _util.isMultipleOrTagsOrCombobox)(_this2.props) && e.target === _this2.getInputDOMNode()) {
	      return;
	    }
	    if (_this2._focused) {
	      return;
	    }
	    _this2._focused = true;
	    _this2.updateFocusClassName();
	    _this2.timeoutFocus();
	  };
	
	  this.onPopupFocus = function () {
	    // fix ie scrollbar, focus element again
	    _this2.maybeFocus(true, true);
	  };
	
	  this.onOuterBlur = function (e) {
	    if (_this2.props.disabled) {
	      e.preventDefault();
	      return;
	    }
	    _this2.blurTimer = setTimeout(function () {
	      _this2._focused = false;
	      _this2.updateFocusClassName();
	      var props = _this2.props;
	      var value = _this2.state.value;
	      var inputValue = _this2.state.inputValue;
	
	      if ((0, _util.isSingleMode)(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
	        var options = _this2._options || [];
	        if (options.length) {
	          var firstOption = (0, _util.findFirstMenuItem)(options);
	          if (firstOption) {
	            value = [{
	              key: firstOption.key,
	              label: _this2.getLabelFromOption(firstOption)
	            }];
	            _this2.fireChange(value);
	          }
	        }
	      } else if ((0, _util.isMultipleOrTags)(props) && inputValue) {
	        // why not use setState?
	        _this2.state.inputValue = _this2.getInputDOMNode().value = '';
	      }
	      props.onBlur(_this2.getVLForOnChange(value));
	      _this2.setOpenState(false);
	    }, 10);
	  };
	
	  this.onClearSelection = function (event) {
	    var props = _this2.props;
	    var state = _this2.state;
	    if (props.disabled) {
	      return;
	    }
	    var inputValue = state.inputValue,
	        value = state.value;
	
	    event.stopPropagation();
	    if (inputValue || value.length) {
	      if (value.length) {
	        _this2.fireChange([]);
	      }
	      _this2.setOpenState(false, true);
	      if (inputValue) {
	        _this2.setInputValue('');
	      }
	    }
	  };
	
	  this.onChoiceAnimationLeave = function () {
	    _this2.refs.trigger.refs.trigger.forcePopupAlign();
	  };
	
	  this.getLabelBySingleValue = function (children, value) {
	    if (value === undefined) {
	      return null;
	    }
	    var label = null;
	    _react2['default'].Children.forEach(children, function (child) {
	      if (!child) {
	        return;
	      }
	      if (child.type.isSelectOptGroup) {
	        var maybe = _this2.getLabelBySingleValue(child.props.children, value);
	        if (maybe !== null) {
	          label = maybe;
	        }
	      } else if ((0, _util.getValuePropValue)(child) === value) {
	        label = _this2.getLabelFromOption(child);
	      }
	    });
	    return label;
	  };
	
	  this.getValueByLabel = function (children, label) {
	    if (label === undefined) {
	      return null;
	    }
	    var value = null;
	    _react2['default'].Children.forEach(children, function (child) {
	      if (!child) {
	        return;
	      }
	      if (child.type.isSelectOptGroup) {
	        var maybe = _this2.getValueByLabel(child.props.children, label);
	        if (maybe !== null) {
	          value = maybe;
	        }
	      } else if ((0, _util.toArray)(_this2.getLabelFromOption(child)).join('') === label) {
	        value = (0, _util.getValuePropValue)(child);
	      }
	    });
	    return value;
	  };
	
	  this.getLabelFromOption = function (child) {
	    return (0, _util.getPropValue)(child, _this2.props.optionLabelProp);
	  };
	
	  this.getLabelFromProps = function (props, value) {
	    return _this2.getLabelByValue(props.children, value);
	  };
	
	  this.getVLForOnChange = function (vls_) {
	    var vls = vls_;
	    if (vls !== undefined) {
	      if (!_this2.props.labelInValue) {
	        vls = vls.map(function (v) {
	          return v.key;
	        });
	      } else {
	        vls = vls.map(function (vl) {
	          return { key: vl.key, label: vl.label };
	        });
	      }
	      return (0, _util.isMultipleOrTags)(_this2.props) ? vls : vls[0];
	    }
	    return vls;
	  };
	
	  this.getLabelByValue = function (children, value) {
	    var label = _this2.getLabelBySingleValue(children, value);
	    if (label === null) {
	      return value;
	    }
	    return label;
	  };
	
	  this.getDropdownContainer = function () {
	    if (!_this2.dropdownContainer) {
	      _this2.dropdownContainer = document.createElement('div');
	      document.body.appendChild(_this2.dropdownContainer);
	    }
	    return _this2.dropdownContainer;
	  };
	
	  this.getPlaceholderElement = function () {
	    var props = _this2.props,
	        state = _this2.state;
	
	    var hidden = false;
	    if (state.inputValue) {
	      hidden = true;
	    }
	    if (state.value.length) {
	      hidden = true;
	    }
	    if ((0, _util.isCombobox)(props) && state.value.length === 1 && !state.value[0].key) {
	      hidden = false;
	    }
	    var placeholder = props.placeholder;
	    if (placeholder) {
	      return _react2['default'].createElement(
	        'div',
	        (0, _extends3['default'])({
	          onMouseDown: _util.preventDefaultEvent,
	          style: (0, _extends3['default'])({
	            display: hidden ? 'none' : 'block'
	          }, _util.UNSELECTABLE_STYLE)
	        }, _util.UNSELECTABLE_ATTRIBUTE, {
	          onClick: _this2.onPlaceholderClick,
	          className: props.prefixCls + '-selection__placeholder'
	        }),
	        placeholder
	      );
	    }
	    return null;
	  };
	
	  this.getInputElement = function () {
	    var props = _this2.props;
	    var inputElement = props.getInputElement ? props.getInputElement() : _react2['default'].createElement('input', { id: props.id, autoComplete: 'off' });
	    var inputCls = (0, _classnames3['default'])(inputElement.props.className, (0, _defineProperty3['default'])({}, props.prefixCls + '-search__field', true));
	    // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
	    // Add space to the end of the inputValue as the width measurement tolerance
	    return _react2['default'].createElement(
	      'div',
	      { className: props.prefixCls + '-search__field__wrap' },
	      _react2['default'].cloneElement(inputElement, {
	        ref: _this2.saveInputRef,
	        onChange: _this2.onInputChange,
	        onKeyDown: chaining(_this2.onInputKeyDown, inputElement.props.onKeyDown),
	        value: _this2.state.inputValue,
	        disabled: props.disabled,
	        className: inputCls
	      }),
	      _react2['default'].createElement(
	        'span',
	        {
	          ref: _this2.saveInputMirrorRef,
	          className: props.prefixCls + '-search__field__mirror'
	        },
	        _this2.state.inputValue,
	        '\xA0'
	      )
	    );
	  };
	
	  this.getInputDOMNode = function () {
	    return _this2.topCtrlNode ? _this2.topCtrlNode.querySelector('input,textarea,div[contentEditable]') : _this2.inputInstance;
	  };
	
	  this.getInputMirrorDOMNode = function () {
	    return _this2.inputMirrorInstance;
	  };
	
	  this.getPopupDOMNode = function () {
	    return _this2.refs.trigger.getPopupDOMNode();
	  };
	
	  this.getPopupMenuComponent = function () {
	    return _this2.refs.trigger.getInnerMenu();
	  };
	
	  this.setOpenState = function (open, needFocus) {
	    var props = _this2.props,
	        state = _this2.state;
	
	    if (state.open === open) {
	      _this2.maybeFocus(open, needFocus);
	      return;
	    }
	    var nextState = {
	      open: open
	    };
	    // clear search input value when open is false in singleMode.
	    if (!open && (0, _util.isSingleMode)(props) && props.showSearch) {
	      _this2.setInputValue('');
	    }
	    if (!open) {
	      _this2.maybeFocus(open, needFocus);
	    }
	    _this2.setState(nextState, function () {
	      if (open) {
	        _this2.maybeFocus(open, needFocus);
	      }
	    });
	  };
	
	  this.setInputValue = function (inputValue) {
	    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (inputValue !== _this2.state.inputValue) {
	      _this2.setState({
	        inputValue: inputValue
	      });
	      if (fireSearch) {
	        _this2.props.onSearch(inputValue);
	      }
	    }
	  };
	
	  this.handleBackfill = function (item) {
	    if (!_this2.props.backfill || !((0, _util.isSingleMode)(_this2.props) || (0, _util.isCombobox)(_this2.props))) {
	      return;
	    }
	
	    var key = (0, _util.getValuePropValue)(item);
	    var label = _this2.getLabelFromOption(item);
	    var backfillValue = {
	      key: key,
	      label: label,
	      backfill: true
	    };
	
	    if ((0, _util.isCombobox)(_this2.props)) {
	      _this2.setInputValue(key, false);
	    }
	
	    _this2.setState({
	      value: [backfillValue]
	    });
	  };
	
	  this.filterOption = function (input, child) {
	    var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util.defaultFilterFn;
	    var value = _this2.state.value;
	
	    var lastValue = value[value.length - 1];
	    if (!input || lastValue && lastValue.backfill) {
	      return true;
	    }
	    var filterFn = _this2.props.filterOption;
	    if ('filterOption' in _this2.props) {
	      if (_this2.props.filterOption === true) {
	        filterFn = defaultFilter;
	      }
	    } else {
	      filterFn = defaultFilter;
	    }
	
	    if (!filterFn) {
	      return true;
	    } else if (child.props.disabled) {
	      return false;
	    } else if (typeof filterFn === 'function') {
	      return filterFn.call(_this2, input, child);
	    }
	    return true;
	  };
	
	  this.timeoutFocus = function () {
	    if (_this2.focusTimer) {
	      _this2.clearFocusTime();
	    }
	    _this2.focusTimer = setTimeout(function () {
	      _this2.props.onFocus();
	    }, 10);
	  };
	
	  this.clearFocusTime = function () {
	    if (_this2.focusTimer) {
	      clearTimeout(_this2.focusTimer);
	      _this2.focusTimer = null;
	    }
	  };
	
	  this.clearBlurTime = function () {
	    if (_this2.blurTimer) {
	      clearTimeout(_this2.blurTimer);
	      _this2.blurTimer = null;
	    }
	  };
	
	  this.clearAdjustTimer = function () {
	    if (_this2.skipAdjustOpenTimer) {
	      clearTimeout(_this2.skipAdjustOpenTimer);
	      _this2.skipAdjustOpenTimer = null;
	    }
	  };
	
	  this.updateFocusClassName = function () {
	    var refs = _this2.refs,
	        props = _this2.props;
	    // avoid setState and its side effect
	
	    if (_this2._focused) {
	      (0, _componentClasses2['default'])(refs.root).add(props.prefixCls + '-focused');
	    } else {
	      (0, _componentClasses2['default'])(refs.root).remove(props.prefixCls + '-focused');
	    }
	  };
	
	  this.maybeFocus = function (open, needFocus) {
	    if (needFocus || open) {
	      var input = _this2.getInputDOMNode();
	      var _document = document,
	          activeElement = _document.activeElement;
	
	      if (input && (open || (0, _util.isMultipleOrTagsOrCombobox)(_this2.props))) {
	        if (activeElement !== input) {
	          input.focus();
	          _this2._focused = true;
	        }
	      } else {
	        var selection = _this2.refs.selection;
	        if (activeElement !== selection) {
	          selection.focus();
	          _this2._focused = true;
	        }
	      }
	    }
	  };
	
	  this.addLabelToValue = function (props, value_) {
	    var value = value_;
	    if (props.labelInValue) {
	      value.forEach(function (v) {
	        v.label = v.label || _this2.getLabelFromProps(props, v.key);
	      });
	    } else {
	      value = value.map(function (v) {
	        return {
	          key: v,
	          label: _this2.getLabelFromProps(props, v)
	        };
	      });
	    }
	    return value;
	  };
	
	  this.addTitleToValue = function (props, values) {
	    var nextValues = values;
	    var keys = values.map(function (v) {
	      return v.key;
	    });
	    _react2['default'].Children.forEach(props.children, function (child) {
	      if (!child) {
	        return;
	      }
	      if (child.type.isSelectOptGroup) {
	        nextValues = _this2.addTitleToValue(child.props, nextValues);
	      } else {
	        var value = (0, _util.getValuePropValue)(child);
	        var valueIndex = keys.indexOf(value);
	        if (valueIndex > -1) {
	          nextValues[valueIndex].title = child.props.title;
	        }
	      }
	    });
	    return nextValues;
	  };
	
	  this.removeSelected = function (selectedKey) {
	    var props = _this2.props;
	    if (props.disabled || _this2.isChildDisabled(selectedKey)) {
	      return;
	    }
	    var label = void 0;
	    var value = _this2.state.value.filter(function (singleValue) {
	      if (singleValue.key === selectedKey) {
	        label = singleValue.label;
	      }
	      return singleValue.key !== selectedKey;
	    });
	    var canMultiple = (0, _util.isMultipleOrTags)(props);
	
	    if (canMultiple) {
	      var event = selectedKey;
	      if (props.labelInValue) {
	        event = {
	          key: selectedKey,
	          label: label
	        };
	      }
	      props.onDeselect(event);
	    }
	    _this2.fireChange(value);
	  };
	
	  this.openIfHasChildren = function () {
	    var props = _this2.props;
	    if (_react2['default'].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
	      _this2.setOpenState(true);
	    }
	  };
	
	  this.fireChange = function (value) {
	    var props = _this2.props;
	    if (!('value' in props)) {
	      _this2.setState({
	        value: value
	      });
	    }
	    props.onChange(_this2.getVLForOnChange(value));
	  };
	
	  this.isChildDisabled = function (key) {
	    return (0, _util.toArray)(_this2.props.children).some(function (child) {
	      var childValue = (0, _util.getValuePropValue)(child);
	      return childValue === key && child.props && child.props.disabled;
	    });
	  };
	
	  this.tokenize = function (string) {
	    var _props = _this2.props,
	        multiple = _props.multiple,
	        tokenSeparators = _props.tokenSeparators,
	        children = _props.children;
	
	    var nextValue = _this2.state.value;
	    (0, _util.splitBySeparators)(string, tokenSeparators).forEach(function (label) {
	      var selectedValue = { key: label, label: label };
	      if ((0, _util.findIndexInValueByLabel)(nextValue, label) === -1) {
	        if (multiple) {
	          var value = _this2.getValueByLabel(children, label);
	          if (value) {
	            selectedValue.key = value;
	            nextValue = nextValue.concat(selectedValue);
	          }
	        } else {
	          nextValue = nextValue.concat(selectedValue);
	        }
	      }
	    });
	    return nextValue;
	  };
	
	  this.adjustOpenState = function () {
	    if (_this2.skipAdjustOpen) {
	      return;
	    }
	    var open = _this2.state.open;
	
	    var options = [];
	    // If hidden menu due to no options, then it should be calculated again
	    if (open || _this2.hiddenForNoOptions) {
	      options = _this2.renderFilterOptions();
	    }
	    _this2._options = options;
	
	    if ((0, _util.isMultipleOrTagsOrCombobox)(_this2.props) || !_this2.props.showSearch) {
	      if (open && !options.length) {
	        open = false;
	        _this2.hiddenForNoOptions = true;
	      }
	      // Keep menu open if there are options and hidden for no options before
	      if (_this2.hiddenForNoOptions && options.length) {
	        open = true;
	        _this2.hiddenForNoOptions = false;
	      }
	    }
	    _this2.state.open = open;
	  };
	
	  this.renderFilterOptions = function (inputValue) {
	    return _this2.renderFilterOptionsFromChildren(_this2.props.children, true, inputValue);
	  };
	
	  this.renderFilterOptionsFromChildren = function (children, showNotFound, iv) {
	    var sel = [];
	    var props = _this2.props;
	    var inputValue = iv === undefined ? _this2.state.inputValue : iv;
	    var childrenKeys = [];
	    var tags = props.tags;
	    _react2['default'].Children.forEach(children, function (child) {
	      if (!child) {
	        return;
	      }
	      if (child.type.isSelectOptGroup) {
	        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, false);
	        if (innerItems.length) {
	          var label = child.props.label;
	          var key = child.key;
	          if (!key && typeof label === 'string') {
	            key = label;
	          } else if (!label && key) {
	            label = key;
	          }
	          sel.push(_react2['default'].createElement(
	            _rcMenu.ItemGroup,
	            { key: key, title: label },
	            innerItems
	          ));
	        }
	        return;
	      }
	
	      (0, _warning2['default'])(child.type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + ('instead of `' + (child.type.name || child.type.displayName || child.type) + '`.'));
	
	      var childValue = (0, _util.getValuePropValue)(child);
	      if (_this2.filterOption(inputValue, child)) {
	        sel.push(_react2['default'].createElement(_rcMenu.Item, (0, _extends3['default'])({
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          value: childValue,
	          key: childValue
	        }, child.props)));
	      }
	      if (tags && !child.props.disabled) {
	        childrenKeys.push(childValue);
	      }
	    });
	    if (tags) {
	      // tags value must be string
	      var value = _this2.state.value || [];
	      value = value.filter(function (singleValue) {
	        return childrenKeys.indexOf(singleValue.key) === -1 && (!inputValue || String(singleValue.key).indexOf(String(inputValue)) > -1);
	      });
	      sel = sel.concat(value.map(function (singleValue) {
	        var key = singleValue.key;
	        return _react2['default'].createElement(
	          _rcMenu.Item,
	          {
	            style: _util.UNSELECTABLE_STYLE,
	            attribute: _util.UNSELECTABLE_ATTRIBUTE,
	            value: key,
	            key: key
	          },
	          key
	        );
	      }));
	      if (inputValue) {
	        var notFindInputItem = sel.every(function (option) {
	          // this.filterOption return true has two meaning,
	          // 1, some one exists after filtering
	          // 2, filterOption is set to false
	          // condition 2 does not mean the option has same value with inputValue
	          var filterFn = function filterFn() {
	            return (0, _util.getValuePropValue)(option) === inputValue;
	          };
	          if (_this2.props.filterOption !== false) {
	            return !_this2.filterOption.call(_this2, inputValue, option, filterFn);
	          }
	          return !filterFn();
	        });
	        if (notFindInputItem) {
	          sel.unshift(_react2['default'].createElement(
	            _rcMenu.Item,
	            {
	              style: _util.UNSELECTABLE_STYLE,
	              attribute: _util.UNSELECTABLE_ATTRIBUTE,
	              value: inputValue,
	              key: inputValue
	            },
	            inputValue
	          ));
	        }
	      }
	    }
	    if (!sel.length && showNotFound && props.notFoundContent) {
	      sel = [_react2['default'].createElement(
	        _rcMenu.Item,
	        {
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          disabled: true,
	          value: 'NOT_FOUND',
	          key: 'NOT_FOUND'
	        },
	        props.notFoundContent
	      )];
	    }
	    return sel;
	  };
	
	  this.renderTopControlNode = function () {
	    var _state = _this2.state,
	        value = _state.value,
	        open = _state.open,
	        inputValue = _state.inputValue;
	
	    var props = _this2.props;
	    var choiceTransitionName = props.choiceTransitionName,
	        prefixCls = props.prefixCls,
	        maxTagTextLength = props.maxTagTextLength,
	        showSearch = props.showSearch;
	
	    var className = prefixCls + '-selection__rendered';
	    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
	    var innerNode = null;
	    if ((0, _util.isSingleMode)(props)) {
	      var selectedValue = null;
	      if (value.length) {
	        var showSelectedValue = false;
	        var opacity = 1;
	        if (!showSearch) {
	          showSelectedValue = true;
	        } else {
	          if (open) {
	            showSelectedValue = !inputValue;
	            if (showSelectedValue) {
	              opacity = 0.4;
	            }
	          } else {
	            showSelectedValue = true;
	          }
	        }
	        var singleValue = value[0];
	        selectedValue = _react2['default'].createElement(
	          'div',
	          {
	            key: 'value',
	            className: prefixCls + '-selection-selected-value',
	            title: singleValue.title || singleValue.label,
	            style: {
	              display: showSelectedValue ? 'block' : 'none',
	              opacity: opacity
	            }
	          },
	          value[0].label
	        );
	      }
	      if (!showSearch) {
	        innerNode = [selectedValue];
	      } else {
	        innerNode = [selectedValue, _react2['default'].createElement(
	          'div',
	          {
	            className: prefixCls + '-search ' + prefixCls + '-search--inline',
	            key: 'input',
	            style: {
	              display: open ? 'block' : 'none'
	            }
	          },
	          _this2.getInputElement()
	        )];
	      }
	    } else {
	      var selectedValueNodes = [];
	      if ((0, _util.isMultipleOrTags)(props)) {
	        selectedValueNodes = value.map(function (singleValue) {
	          var content = singleValue.label;
	          var title = singleValue.title || content;
	          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	            content = content.slice(0, maxTagTextLength) + '...';
	          }
	          var disabled = _this2.isChildDisabled(singleValue.key);
	          var choiceClassName = disabled ? prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled' : prefixCls + '-selection__choice';
	          return _react2['default'].createElement(
	            'li',
	            (0, _extends3['default'])({
	              style: _util.UNSELECTABLE_STYLE
	            }, _util.UNSELECTABLE_ATTRIBUTE, {
	              onMouseDown: _util.preventDefaultEvent,
	              className: choiceClassName,
	              key: singleValue.key,
	              title: title
	            }),
	            _react2['default'].createElement(
	              'div',
	              { className: prefixCls + '-selection__choice__content' },
	              content
	            ),
	            disabled ? null : _react2['default'].createElement('span', {
	              className: prefixCls + '-selection__choice__remove',
	              onClick: _this2.removeSelected.bind(_this2, singleValue.key)
	            })
	          );
	        });
	      }
	      selectedValueNodes.push(_react2['default'].createElement(
	        'li',
	        {
	          className: prefixCls + '-search ' + prefixCls + '-search--inline',
	          key: '__input'
	        },
	        _this2.getInputElement()
	      ));
	
	      if ((0, _util.isMultipleOrTags)(props) && choiceTransitionName) {
	        innerNode = _react2['default'].createElement(
	          _rcAnimate2['default'],
	          {
	            onLeave: _this2.onChoiceAnimationLeave,
	            component: 'ul',
	            transitionName: choiceTransitionName
	          },
	          selectedValueNodes
	        );
	      } else {
	        innerNode = _react2['default'].createElement(
	          'ul',
	          null,
	          selectedValueNodes
	        );
	      }
	    }
	    return _react2['default'].createElement(
	      'div',
	      { className: className, ref: function ref(node) {
	          return _this2.topCtrlNode = node;
	        } },
	      _this2.getPlaceholderElement(),
	      innerNode
	    );
	  };
	};
	
	exports['default'] = Select;
	
	
	Select.displayName = 'Select';
	module.exports = exports['default'];

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(409);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(410), __esModule: true };

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(411);
	module.exports = __webpack_require__(414).Object.assign;


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(412);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(427) });


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(413);
	var core = __webpack_require__(414);
	var ctx = __webpack_require__(415);
	var hide = __webpack_require__(417);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 413 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 414 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(416);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 416 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(418);
	var createDesc = __webpack_require__(426);
	module.exports = __webpack_require__(422) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(419);
	var IE8_DOM_DEFINE = __webpack_require__(421);
	var toPrimitive = __webpack_require__(425);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(422) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(420);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 420 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(422) && !__webpack_require__(423)(function () {
	  return Object.defineProperty(__webpack_require__(424)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(423)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 423 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(420);
	var document = __webpack_require__(413).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(420);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 426 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(428);
	var gOPS = __webpack_require__(443);
	var pIE = __webpack_require__(444);
	var toObject = __webpack_require__(445);
	var IObject = __webpack_require__(432);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(423)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(429);
	var enumBugKeys = __webpack_require__(442);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(430);
	var toIObject = __webpack_require__(431);
	var arrayIndexOf = __webpack_require__(435)(false);
	var IE_PROTO = __webpack_require__(439)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 430 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(432);
	var defined = __webpack_require__(434);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(433);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 433 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 434 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(431);
	var toLength = __webpack_require__(436);
	var toAbsoluteIndex = __webpack_require__(438);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(437);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 437 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(437);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(440)('keys');
	var uid = __webpack_require__(441);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(413);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 441 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 442 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 443 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 444 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(434);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(447);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(448), __esModule: true };

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(449);
	var $Object = __webpack_require__(414).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(412);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(422), 'Object', { defineProperty: __webpack_require__(418).f });


/***/ }),
/* 450 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(447);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(453);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(454);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(474);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(455), __esModule: true };

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(456);
	__webpack_require__(469);
	module.exports = __webpack_require__(473).f('iterator');


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(457)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(458)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(437);
	var defined = __webpack_require__(434);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(459);
	var $export = __webpack_require__(412);
	var redefine = __webpack_require__(460);
	var hide = __webpack_require__(417);
	var has = __webpack_require__(430);
	var Iterators = __webpack_require__(461);
	var $iterCreate = __webpack_require__(462);
	var setToStringTag = __webpack_require__(466);
	var getPrototypeOf = __webpack_require__(468);
	var ITERATOR = __webpack_require__(467)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 459 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(417);


/***/ }),
/* 461 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(463);
	var descriptor = __webpack_require__(426);
	var setToStringTag = __webpack_require__(466);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(417)(IteratorPrototype, __webpack_require__(467)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(419);
	var dPs = __webpack_require__(464);
	var enumBugKeys = __webpack_require__(442);
	var IE_PROTO = __webpack_require__(439)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(424)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(465).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(418);
	var anObject = __webpack_require__(419);
	var getKeys = __webpack_require__(428);
	
	module.exports = __webpack_require__(422) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(413).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(418).f;
	var has = __webpack_require__(430);
	var TAG = __webpack_require__(467)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(440)('wks');
	var uid = __webpack_require__(441);
	var Symbol = __webpack_require__(413).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(430);
	var toObject = __webpack_require__(445);
	var IE_PROTO = __webpack_require__(439)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(470);
	var global = __webpack_require__(413);
	var hide = __webpack_require__(417);
	var Iterators = __webpack_require__(461);
	var TO_STRING_TAG = __webpack_require__(467)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(471);
	var step = __webpack_require__(472);
	var Iterators = __webpack_require__(461);
	var toIObject = __webpack_require__(431);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(458)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 471 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 472 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(467);


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(475), __esModule: true };

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(476);
	__webpack_require__(484);
	__webpack_require__(485);
	__webpack_require__(486);
	module.exports = __webpack_require__(414).Symbol;


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(413);
	var has = __webpack_require__(430);
	var DESCRIPTORS = __webpack_require__(422);
	var $export = __webpack_require__(412);
	var redefine = __webpack_require__(460);
	var META = __webpack_require__(477).KEY;
	var $fails = __webpack_require__(423);
	var shared = __webpack_require__(440);
	var setToStringTag = __webpack_require__(466);
	var uid = __webpack_require__(441);
	var wks = __webpack_require__(467);
	var wksExt = __webpack_require__(473);
	var wksDefine = __webpack_require__(478);
	var enumKeys = __webpack_require__(479);
	var isArray = __webpack_require__(480);
	var anObject = __webpack_require__(419);
	var toIObject = __webpack_require__(431);
	var toPrimitive = __webpack_require__(425);
	var createDesc = __webpack_require__(426);
	var _create = __webpack_require__(463);
	var gOPNExt = __webpack_require__(481);
	var $GOPD = __webpack_require__(483);
	var $DP = __webpack_require__(418);
	var $keys = __webpack_require__(428);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(482).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(444).f = $propertyIsEnumerable;
	  __webpack_require__(443).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(459)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(417)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(441)('meta');
	var isObject = __webpack_require__(420);
	var has = __webpack_require__(430);
	var setDesc = __webpack_require__(418).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(423)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(413);
	var core = __webpack_require__(414);
	var LIBRARY = __webpack_require__(459);
	var wksExt = __webpack_require__(473);
	var defineProperty = __webpack_require__(418).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(428);
	var gOPS = __webpack_require__(443);
	var pIE = __webpack_require__(444);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(433);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(431);
	var gOPN = __webpack_require__(482).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(429);
	var hiddenKeys = __webpack_require__(442).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(444);
	var createDesc = __webpack_require__(426);
	var toIObject = __webpack_require__(431);
	var toPrimitive = __webpack_require__(425);
	var has = __webpack_require__(430);
	var IE8_DOM_DEFINE = __webpack_require__(421);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(422) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 484 */
/***/ (function(module, exports) {



/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(478)('asyncIterator');


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(478)('observable');


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(488);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(492);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(453);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(489), __esModule: true };

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(490);
	module.exports = __webpack_require__(414).Object.setPrototypeOf;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(412);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(491).set });


/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(420);
	var anObject = __webpack_require__(419);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(415)(Function.call, __webpack_require__(483).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(493), __esModule: true };

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(494);
	var $Object = __webpack_require__(414).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(412);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(463) });


/***/ }),
/* 495 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	exports['default'] = KeyCode;
	module.exports = exports['default'];

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(446);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(497);
	
	var _AnimateChild = __webpack_require__(498);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(503);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = function (_React$Component) {
	  (0, _inherits3['default'])(Animate, _React$Component);
	
	  function Animate(props) {
	    (0, _classCallCheck3['default'])(this, Animate);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.childrenRefs = {};
	    return _this;
	  }
	
	  (0, _createClass3['default'])(Animate, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var showProp = this.props.showProp;
	      var children = this.state.children;
	      if (showProp) {
	        children = children.filter(function (child) {
	          return !!child.props[showProp];
	        });
	      }
	      children.forEach(function (child) {
	        if (child) {
	          _this2.performAppear(child.key);
	        }
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      this.nextProps = nextProps;
	      var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	      var props = this.props;
	      // exclusive needs immediate response
	      if (props.exclusive) {
	        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	          _this3.stop(key);
	        });
	      }
	      var showProp = props.showProp;
	      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	      // last props children if exclusive
	      var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	      // in case destroy in showProp mode
	      var newChildren = [];
	      if (showProp) {
	        currentChildren.forEach(function (currentChild) {
	          var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	          var newChild = void 0;
	          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	            newChild = _react2['default'].cloneElement(nextChild || currentChild, (0, _defineProperty3['default'])({}, showProp, true));
	          } else {
	            newChild = nextChild;
	          }
	          if (newChild) {
	            newChildren.push(newChild);
	          }
	        });
	        nextChildren.forEach(function (nextChild) {
	          if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	            newChildren.push(nextChild);
	          }
	        });
	      } else {
	        newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	      }
	
	      // need render to avoid update
	      this.setState({
	        children: newChildren
	      });
	
	      nextChildren.forEach(function (child) {
	        var key = child && child.key;
	        if (child && currentlyAnimatingKeys[key]) {
	          return;
	        }
	        var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	        if (showProp) {
	          var showInNext = child.props[showProp];
	          if (hasPrev) {
	            var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	            if (!showInNow && showInNext) {
	              _this3.keysToEnter.push(key);
	            }
	          } else if (showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (!hasPrev) {
	          _this3.keysToEnter.push(key);
	        }
	      });
	
	      currentChildren.forEach(function (child) {
	        var key = child && child.key;
	        if (child && currentlyAnimatingKeys[key]) {
	          return;
	        }
	        var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	        if (showProp) {
	          var showInNow = child.props[showProp];
	          if (hasNext) {
	            var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	            if (!showInNext && showInNow) {
	              _this3.keysToLeave.push(key);
	            }
	          } else if (showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (!hasNext) {
	          _this3.keysToLeave.push(key);
	        }
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  }, {
	    key: 'isValidChildByKey',
	    value: function isValidChildByKey(currentChildren, key) {
	      var showProp = this.props.showProp;
	      if (showProp) {
	        return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	      }
	      return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	    }
	  }, {
	    key: 'stop',
	    value: function stop(key) {
	      delete this.currentlyAnimatingKeys[key];
	      var component = this.childrenRefs[key];
	      if (component) {
	        component.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var props = this.props;
	      this.nextProps = props;
	      var stateChildren = this.state.children;
	      var children = null;
	      if (stateChildren) {
	        children = stateChildren.map(function (child) {
	          if (child === null || child === undefined) {
	            return child;
	          }
	          if (!child.key) {
	            throw new Error('must set key for <rc-animate> children');
	          }
	          return _react2['default'].createElement(
	            _AnimateChild2['default'],
	            {
	              key: child.key,
	              ref: function ref(node) {
	                return _this4.childrenRefs[child.key] = node;
	              },
	              animation: props.animation,
	              transitionName: props.transitionName,
	              transitionEnter: props.transitionEnter,
	              transitionAppear: props.transitionAppear,
	              transitionLeave: props.transitionLeave
	            },
	            child
	          );
	        });
	      }
	      var Component = props.component;
	      if (Component) {
	        var passedProps = props;
	        if (typeof Component === 'string') {
	          passedProps = (0, _extends3['default'])({
	            className: props.className,
	            style: props.style
	          }, props.componentProps);
	        }
	        return _react2['default'].createElement(
	          Component,
	          passedProps,
	          children
	        );
	      }
	      return children[0] || null;
	    }
	  }]);
	  return Animate;
	}(_react2['default'].Component);
	
	Animate.propTypes = {
	  component: _propTypes2['default'].any,
	  componentProps: _propTypes2['default'].object,
	  animation: _propTypes2['default'].object,
	  transitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  transitionEnter: _propTypes2['default'].bool,
	  transitionAppear: _propTypes2['default'].bool,
	  exclusive: _propTypes2['default'].bool,
	  transitionLeave: _propTypes2['default'].bool,
	  onEnd: _propTypes2['default'].func,
	  onEnter: _propTypes2['default'].func,
	  onLeave: _propTypes2['default'].func,
	  onAppear: _propTypes2['default'].func,
	  showProp: _propTypes2['default'].string
	};
	Animate.defaultProps = {
	  animation: {},
	  component: 'span',
	  componentProps: {},
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.performEnter = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
	    }
	  };
	
	  this.performAppear = function (key) {
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
	    }
	  };
	
	  this.handleDoneAdding = function (key, type) {
	    var props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!_this5.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      _this5.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  this.performLeave = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
	    }
	  };
	
	  this.handleDoneLeaving = function (key) {
	    var props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (_this5.isValidChildByKey(currentChildren, key)) {
	      _this5.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2['default'].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      if (!(0, _ChildrenUtils.isSameChildren)(_this5.state.children, currentChildren, props.showProp)) {
	        _this5.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	};
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(453);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _cssAnimation = __webpack_require__(499);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(503);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = function (_React$Component) {
	  (0, _inherits3['default'])(AnimateChild, _React$Component);
	
	  function AnimateChild() {
	    (0, _classCallCheck3['default'])(this, AnimateChild);
	    return (0, _possibleConstructorReturn3['default'])(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
	  }
	
	  (0, _createClass3['default'])(AnimateChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stop();
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(done) {
	      if (_util2['default'].isEnterSupported(this.props)) {
	        this.transition('enter', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(done) {
	      if (_util2['default'].isAppearSupported(this.props)) {
	        this.transition('appear', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(done) {
	      if (_util2['default'].isLeaveSupported(this.props)) {
	        this.transition('leave', done);
	      } else {
	        // always sync, do not interupt with react component life cycle
	        // update hidden -> animate hidden ->
	        // didUpdate -> animate leave -> unmount (if animate is none)
	        done();
	      }
	    }
	  }, {
	    key: 'transition',
	    value: function transition(animationType, finishCallback) {
	      var _this2 = this;
	
	      var node = _reactDom2['default'].findDOMNode(this);
	      var props = this.props;
	      var transitionName = props.transitionName;
	      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : (0, _typeof3['default'])(transitionName)) === 'object';
	      this.stop();
	      var end = function end() {
	        _this2.stopper = null;
	        finishCallback();
	      };
	      if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	        var activeName = name + '-active';
	        if (nameIsObj && transitionName[animationType + 'Active']) {
	          activeName = transitionName[animationType + 'Active'];
	        }
	        this.stopper = (0, _cssAnimation2['default'])(node, {
	          name: name,
	          active: activeName
	        }, end);
	      } else {
	        this.stopper = props.animation[animationType](node, end);
	      }
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      var stopper = this.stopper;
	      if (stopper) {
	        this.stopper = null;
	        stopper.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return AnimateChild;
	}(_react2['default'].Component);
	
	AnimateChild.propTypes = {
	  children: _propTypes2['default'].any
	};
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isCssAnimationSupported = undefined;
	
	var _typeof2 = __webpack_require__(453);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Event = __webpack_require__(500);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(501);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var isCssAnimationSupported = _Event2['default'].endEvents.length !== 0;
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
	  var style = window.getComputedStyle(node, null);
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : (0, _typeof3['default'])(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2['default'])(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2['default'].addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2['default'].addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports.isCssAnimationSupported = isCssAnimationSupported;
	exports['default'] = cssAnimation;

/***/ }),
/* 500 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports['default'] = TransitionEvents;
	module.exports = exports['default'];

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(502);
	} catch (err) {
	  var index = __webpack_require__(502);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 502 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 503 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports['default'];

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_STYLE = undefined;
	exports.getValuePropValue = getValuePropValue;
	exports.getPropValue = getPropValue;
	exports.isCombobox = isCombobox;
	exports.isMultipleOrTags = isMultipleOrTags;
	exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
	exports.isSingleMode = isSingleMode;
	exports.toArray = toArray;
	exports.preventDefaultEvent = preventDefaultEvent;
	exports.findIndexInValueByKey = findIndexInValueByKey;
	exports.findIndexInValueByLabel = findIndexInValueByLabel;
	exports.getSelectKeys = getSelectKeys;
	exports.findFirstMenuItem = findFirstMenuItem;
	exports.includesSeparators = includesSeparators;
	exports.splitBySeparators = splitBySeparators;
	exports.defaultFilterFn = defaultFilterFn;
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getValuePropValue(child) {
	  var props = child.props;
	  if ('value' in props) {
	    return props.value;
	  }
	  if (child.key) {
	    return child.key;
	  }
	  if (child.type && child.type.isSelectOptGroup && props.label) {
	    return props.label;
	  }
	  throw new Error('Need at least a key or a value or a label (only for OptGroup) for ' + child);
	}
	
	function getPropValue(child, prop) {
	  if (prop === 'value') {
	    return getValuePropValue(child);
	  }
	  return child.props[prop];
	}
	
	function isCombobox(props) {
	  return props.combobox;
	}
	
	function isMultipleOrTags(props) {
	  return props.multiple || props.tags;
	}
	
	function isMultipleOrTagsOrCombobox(props) {
	  return isMultipleOrTags(props) || isCombobox(props);
	}
	
	function isSingleMode(props) {
	  return !isMultipleOrTagsOrCombobox(props);
	}
	
	function toArray(value) {
	  var ret = value;
	  if (value === undefined) {
	    ret = [];
	  } else if (!Array.isArray(value)) {
	    ret = [value];
	  }
	  return ret;
	}
	
	function preventDefaultEvent(e) {
	  e.preventDefault();
	}
	
	function findIndexInValueByKey(value, key) {
	  var index = -1;
	  for (var i = 0; i < value.length; i++) {
	    if (value[i].key === key) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}
	
	function findIndexInValueByLabel(value, label) {
	  var index = -1;
	  for (var i = 0; i < value.length; i++) {
	    if (toArray(value[i].label).join('') === label) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}
	
	function getSelectKeys(menuItems, value) {
	  if (value === null || value === undefined) {
	    return [];
	  }
	  var selectedKeys = [];
	  _react2['default'].Children.forEach(menuItems, function (item) {
	    if (item.type.isMenuItemGroup) {
	      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
	    } else {
	      var itemValue = getValuePropValue(item);
	      var itemKey = item.key;
	      if (findIndexInValueByKey(value, itemValue) !== -1 && itemKey) {
	        selectedKeys.push(itemKey);
	      }
	    }
	  });
	  return selectedKeys;
	}
	
	var UNSELECTABLE_STYLE = exports.UNSELECTABLE_STYLE = {
	  userSelect: 'none',
	  WebkitUserSelect: 'none'
	};
	
	var UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_ATTRIBUTE = {
	  unselectable: 'unselectable'
	};
	
	function findFirstMenuItem(children) {
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (child.type.isMenuItemGroup) {
	      var found = findFirstMenuItem(child.props.children);
	      if (found) {
	        return found;
	      }
	    } else if (!child.props.disabled) {
	      return child;
	    }
	  }
	  return null;
	}
	
	function includesSeparators(string, separators) {
	  for (var i = 0; i < separators.length; ++i) {
	    if (string.lastIndexOf(separators[i]) > 0) {
	      return true;
	    }
	  }
	  return false;
	}
	
	function splitBySeparators(string, separators) {
	  var reg = new RegExp('[' + separators.join() + ']');
	  return string.split(reg).filter(function (token) {
	    return token;
	  });
	}
	
	function defaultFilterFn(input, child) {
	  return String(getPropValue(child, this.props.optionFilterProp)).indexOf(input) > -1;
	}

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(446);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _objectWithoutProperties2 = __webpack_require__(506);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _rcTrigger = __webpack_require__(507);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(391);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _DropdownMenu = __webpack_require__(532);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _util = __webpack_require__(504);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	_rcTrigger2['default'].displayName = 'Trigger';
	
	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  }
	};
	
	var SelectTrigger = function (_React$Component) {
	  (0, _inherits3['default'])(SelectTrigger, _React$Component);
	
	  function SelectTrigger() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3['default'])(this, SelectTrigger);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = SelectTrigger.__proto__ || Object.getPrototypeOf(SelectTrigger)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      dropdownWidth: null
	    }, _this.setDropdownWidth = function () {
	      var width = _reactDom2['default'].findDOMNode(_this).offsetWidth;
	      if (width !== _this.state.dropdownWidth) {
	        _this.setState({ dropdownWidth: width });
	      }
	    }, _this.getInnerMenu = function () {
	      return _this.popupMenu && _this.popupMenu.refs.menu;
	    }, _this.getPopupDOMNode = function () {
	      return _this.refs.trigger.getPopupDomNode();
	    }, _this.getDropdownElement = function (newProps) {
	      var props = _this.props;
	      return _react2['default'].createElement(_DropdownMenu2['default'], (0, _extends3['default'])({
	        ref: _this.saveMenu
	      }, newProps, {
	        prefixCls: _this.getDropdownPrefixCls(),
	        onMenuSelect: props.onMenuSelect,
	        onMenuDeselect: props.onMenuDeselect,
	        value: props.value,
	        firstActiveValue: props.firstActiveValue,
	        defaultActiveFirstOption: props.defaultActiveFirstOption,
	        dropdownMenuStyle: props.dropdownMenuStyle
	      }));
	    }, _this.getDropdownTransitionName = function () {
	      var props = _this.props;
	      var transitionName = props.transitionName;
	      if (!transitionName && props.animation) {
	        transitionName = _this.getDropdownPrefixCls() + '-' + props.animation;
	      }
	      return transitionName;
	    }, _this.getDropdownPrefixCls = function () {
	      return _this.props.prefixCls + '-dropdown';
	    }, _this.saveMenu = function (menu) {
	      _this.popupMenu = menu;
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }
	
	  (0, _createClass3['default'])(SelectTrigger, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setDropdownWidth();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setDropdownWidth();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _popupClassName;
	
	      var _props = this.props,
	          onPopupFocus = _props.onPopupFocus,
	          props = (0, _objectWithoutProperties3['default'])(_props, ['onPopupFocus']);
	      var multiple = props.multiple,
	          visible = props.visible,
	          inputValue = props.inputValue,
	          dropdownAlign = props.dropdownAlign,
	          disabled = props.disabled,
	          showSearch = props.showSearch,
	          dropdownClassName = props.dropdownClassName,
	          dropdownStyle = props.dropdownStyle,
	          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
	
	      var dropdownPrefixCls = this.getDropdownPrefixCls();
	      var popupClassName = (_popupClassName = {}, (0, _defineProperty3['default'])(_popupClassName, dropdownClassName, !!dropdownClassName), (0, _defineProperty3['default'])(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
	      var popupElement = this.getDropdownElement({
	        menuItems: props.options,
	        onPopupFocus: onPopupFocus,
	        multiple: multiple,
	        inputValue: inputValue,
	        visible: visible
	      });
	      var hideAction = void 0;
	      if (disabled) {
	        hideAction = [];
	      } else if ((0, _util.isSingleMode)(props) && !showSearch) {
	        hideAction = ['click'];
	      } else {
	        hideAction = ['blur'];
	      }
	      var popupStyle = (0, _extends3['default'])({}, dropdownStyle);
	      var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
	      if (this.state.dropdownWidth) {
	        popupStyle[widthProp] = this.state.dropdownWidth + 'px';
	      }
	
	      return _react2['default'].createElement(
	        _rcTrigger2['default'],
	        (0, _extends3['default'])({}, props, {
	          showAction: disabled ? [] : ['click'],
	          hideAction: hideAction,
	          ref: 'trigger',
	          popupPlacement: 'bottomLeft',
	          builtinPlacements: BUILT_IN_PLACEMENTS,
	          prefixCls: dropdownPrefixCls,
	          popupTransitionName: this.getDropdownTransitionName(),
	          onPopupVisibleChange: props.onDropdownVisibleChange,
	          popup: popupElement,
	          popupAlign: dropdownAlign,
	          popupVisible: visible,
	          getPopupContainer: props.getPopupContainer,
	          popupClassName: (0, _classnames2['default'])(popupClassName),
	          popupStyle: popupStyle
	        }),
	        props.children
	      );
	    }
	  }]);
	  return SelectTrigger;
	}(_react2['default'].Component);
	
	SelectTrigger.propTypes = {
	  onPopupFocus: _propTypes2['default'].func,
	  dropdownMatchSelectWidth: _propTypes2['default'].bool,
	  dropdownAlign: _propTypes2['default'].object,
	  visible: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  showSearch: _propTypes2['default'].bool,
	  dropdownClassName: _propTypes2['default'].string,
	  multiple: _propTypes2['default'].bool,
	  inputValue: _propTypes2['default'].string,
	  filterOption: _propTypes2['default'].any,
	  options: _propTypes2['default'].any,
	  prefixCls: _propTypes2['default'].string,
	  popupClassName: _propTypes2['default'].string,
	  children: _propTypes2['default'].any
	};
	exports['default'] = SelectTrigger;
	
	
	SelectTrigger.displayName = 'SelectTrigger';
	module.exports = exports['default'];

/***/ }),
/* 506 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(97);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _contains = __webpack_require__(509);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _addEventListener = __webpack_require__(510);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _Popup = __webpack_require__(514);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _utils = __webpack_require__(530);
	
	var _getContainerRenderMixin = __webpack_require__(531);
	
	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function noop() {}
	
	function returnEmptyString() {
	  return '';
	}
	
	function returnDocument() {
	  return window.document;
	}
	
	var isMobile = typeof navigator !== 'undefined' && !!navigator.userAgent.match(/(Android|iPhone|iPad|iPod|iOS|UCWEB)/i);
	
	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
	
	var Trigger = (0, _createReactClass2['default'])({
	  displayName: 'Trigger',
	  propTypes: {
	    children: _propTypes2['default'].any,
	    action: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].arrayOf(_propTypes2['default'].string)]),
	    showAction: _propTypes2['default'].any,
	    hideAction: _propTypes2['default'].any,
	    getPopupClassNameFromAlign: _propTypes2['default'].any,
	    onPopupVisibleChange: _propTypes2['default'].func,
	    afterPopupVisibleChange: _propTypes2['default'].func,
	    popup: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]).isRequired,
	    popupStyle: _propTypes2['default'].object,
	    prefixCls: _propTypes2['default'].string,
	    popupClassName: _propTypes2['default'].string,
	    popupPlacement: _propTypes2['default'].string,
	    builtinPlacements: _propTypes2['default'].object,
	    popupTransitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	    popupAnimation: _propTypes2['default'].any,
	    mouseEnterDelay: _propTypes2['default'].number,
	    mouseLeaveDelay: _propTypes2['default'].number,
	    zIndex: _propTypes2['default'].number,
	    focusDelay: _propTypes2['default'].number,
	    blurDelay: _propTypes2['default'].number,
	    getPopupContainer: _propTypes2['default'].func,
	    getDocument: _propTypes2['default'].func,
	    destroyPopupOnHide: _propTypes2['default'].bool,
	    mask: _propTypes2['default'].bool,
	    maskClosable: _propTypes2['default'].bool,
	    onPopupAlign: _propTypes2['default'].func,
	    popupAlign: _propTypes2['default'].object,
	    popupVisible: _propTypes2['default'].bool,
	    maskTransitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	    maskAnimation: _propTypes2['default'].string
	  },
	
	  mixins: [(0, _getContainerRenderMixin2['default'])({
	    autoMount: false,
	
	    isVisible: function isVisible(instance) {
	      return instance.state.popupVisible;
	    },
	    getContainer: function getContainer(instance) {
	      var props = instance.props;
	
	      var popupContainer = document.createElement('div');
	      // Make sure default popup container will never cause scrollbar appearing
	      // https://github.com/react-component/trigger/issues/41
	      popupContainer.style.position = 'absolute';
	      popupContainer.style.top = '0';
	      popupContainer.style.left = '0';
	      popupContainer.style.width = '100%';
	      var mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : props.getDocument().body;
	      mountNode.appendChild(popupContainer);
	      return popupContainer;
	    }
	  })],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-trigger-popup',
	      getPopupClassNameFromAlign: returnEmptyString,
	      getDocument: returnDocument,
	      onPopupVisibleChange: noop,
	      afterPopupVisibleChange: noop,
	      onPopupAlign: noop,
	      popupClassName: '',
	      mouseEnterDelay: 0,
	      mouseLeaveDelay: 0.1,
	      focusDelay: 0,
	      blurDelay: 0.15,
	      popupStyle: {},
	      destroyPopupOnHide: false,
	      popupAlign: {},
	      defaultPopupVisible: false,
	      mask: false,
	      maskClosable: true,
	      action: [],
	      showAction: [],
	      hideAction: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }
	    return {
	      popupVisible: popupVisible
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;
	
	    ALL_HANDLERS.forEach(function (h) {
	      _this['fire' + h] = function (e) {
	        _this.fireEvents(h, e);
	      };
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;
	
	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    this.renderComponent(null, function () {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    });
	
	    // We must listen to `mousedown`, edge case:
	    // https://github.com/ant-design/ant-design/issues/5804
	    // https://github.com/react-component/calendar/issues/250
	    // https://github.com/react-component/trigger/issues/50
	    if (state.popupVisible) {
	      var currentDocument = void 0;
	      if (!this.clickOutsideHandler && this.isClickToHide()) {
	        currentDocument = props.getDocument();
	        this.clickOutsideHandler = (0, _addEventListener2['default'])(currentDocument, 'mousedown', this.onDocumentClick);
	      }
	      // always hide on mobile
	      // `isMobile` fix: mask clicked will cause below element events triggered
	      // https://github.com/ant-design/ant-design-mobile/issues/1909
	      // https://github.com/ant-design/ant-design-mobile/issues/1928
	      if (!this.touchOutsideHandler && isMobile) {
	        currentDocument = currentDocument || props.getDocument();
	        this.touchOutsideHandler = (0, _addEventListener2['default'])(currentDocument, 'click', this.onDocumentClick);
	      }
	      return;
	    }
	
	    this.clearOutsideHandler();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.clearDelayTimer();
	    this.clearOutsideHandler();
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    this.fireEvents('onMouseEnter', e);
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    this.fireEvents('onMouseLeave', e);
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onPopupMouseEnter: function onPopupMouseEnter() {
	    this.clearDelayTimer();
	  },
	  onPopupMouseLeave: function onPopupMouseLeave(e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && (0, _contains2['default'])(this._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onFocus: function onFocus(e) {
	    this.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    this.clearDelayTimer();
	    if (this.isFocusToShow()) {
	      this.focusTime = Date.now();
	      this.delaySetPopupVisible(true, this.props.focusDelay);
	    }
	  },
	  onMouseDown: function onMouseDown(e) {
	    this.fireEvents('onMouseDown', e);
	    this.preClickTime = Date.now();
	  },
	  onTouchStart: function onTouchStart(e) {
	    this.fireEvents('onTouchStart', e);
	    this.preTouchTime = Date.now();
	  },
	  onBlur: function onBlur(e) {
	    this.fireEvents('onBlur', e);
	    this.clearDelayTimer();
	    if (this.isBlurToHide()) {
	      this.delaySetPopupVisible(false, this.props.blurDelay);
	    }
	  },
	  onClick: function onClick(event) {
	    this.fireEvents('onClick', event);
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  },
	  onDocumentClick: function onDocumentClick(event) {
	    if (this.props.mask && !this.props.maskClosable) {
	      return;
	    }
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!(0, _contains2['default'])(root, target) && !(0, _contains2['default'])(popupNode, target)) {
	      this.close();
	    }
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    // for test
	    if (this._component && this._component.getPopupDomNode) {
	      return this._component.getPopupDomNode();
	    }
	    return null;
	  },
	  getRootDomNode: function getRootDomNode() {
	    return (0, _reactDom.findDOMNode)(this);
	  },
	  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        builtinPlacements = props.builtinPlacements,
	        prefixCls = props.prefixCls;
	
	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  },
	  getPopupAlign: function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        popupAlign = props.popupAlign,
	        builtinPlacements = props.builtinPlacements;
	
	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  },
	  getComponent: function getComponent() {
	    var props = this.props,
	        state = this.state;
	
	    var mouseProps = {};
	    if (this.isMouseEnterToShow()) {
	      mouseProps.onMouseEnter = this.onPopupMouseEnter;
	    }
	    if (this.isMouseLeaveToHide()) {
	      mouseProps.onMouseLeave = this.onPopupMouseLeave;
	    }
	    return _react2['default'].createElement(
	      _Popup2['default'],
	      (0, _extends3['default'])({
	        prefixCls: props.prefixCls,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: this.getPopupAlign(),
	        onAlign: props.onPopupAlign,
	        animation: props.popupAnimation,
	        getClassNameFromAlign: this.getPopupClassNameFromAlign
	      }, mouseProps, {
	        getRootDomNode: this.getRootDomNode,
	        style: props.popupStyle,
	        mask: props.mask,
	        zIndex: props.zIndex,
	        transitionName: props.popupTransitionName,
	        maskAnimation: props.maskAnimation,
	        maskTransitionName: props.maskTransitionName
	      }),
	      typeof props.popup === 'function' ? props.popup() : props.popup
	    );
	  },
	  setPopupVisible: function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  },
	  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
	    var _this2 = this;
	
	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this2.setPopupVisible(visible);
	        _this2.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  },
	  clearDelayTimer: function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  },
	  clearOutsideHandler: function clearOutsideHandler() {
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	    }
	
	    if (this.touchOutsideHandler) {
	      this.touchOutsideHandler.remove();
	      this.touchOutsideHandler = null;
	    }
	  },
	  createTwoChains: function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  },
	  isClickToShow: function isClickToShow() {
	    var _props = this.props,
	        action = _props.action,
	        showAction = _props.showAction;
	
	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  },
	  isClickToHide: function isClickToHide() {
	    var _props2 = this.props,
	        action = _props2.action,
	        hideAction = _props2.hideAction;
	
	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  },
	  isMouseEnterToShow: function isMouseEnterToShow() {
	    var _props3 = this.props,
	        action = _props3.action,
	        showAction = _props3.showAction;
	
	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  },
	  isMouseLeaveToHide: function isMouseLeaveToHide() {
	    var _props4 = this.props,
	        action = _props4.action,
	        hideAction = _props4.hideAction;
	
	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  },
	  isFocusToShow: function isFocusToShow() {
	    var _props5 = this.props,
	        action = _props5.action,
	        showAction = _props5.showAction;
	
	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  },
	  isBlurToHide: function isBlurToHide() {
	    var _props6 = this.props,
	        action = _props6.action,
	        hideAction = _props6.hideAction;
	
	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  },
	  forcePopupAlign: function forcePopupAlign() {
	    if (this.state.popupVisible && this._component && this._component.alignInstance) {
	      this._component.alignInstance.forceAlign();
	    }
	  },
	  fireEvents: function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  },
	  close: function close() {
	    this.setPopupVisible(false);
	  },
	  render: function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2['default'].Children.only(children);
	    var newChildProps = {};
	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }
	
	    return _react2['default'].cloneElement(child, newChildProps);
	  }
	});
	
	exports['default'] = Trigger;
	module.exports = exports['default'];

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(9);
	var factory = __webpack_require__(42);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 509 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(511);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
	    _reactDom2['default'].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2['default'])(target, eventType, callback);
	}
	module.exports = exports['default'];

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListener;
	
	var _EventObject = __webpack_require__(512);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2["default"](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventBaseObject = __webpack_require__(513);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(11);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = void 0;
	    var deltaY = void 0;
	    var delta = void 0;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = void 0;
	    var doc = void 0;
	    var body = void 0;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2["default"].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = void 0;
	  var l = void 0;
	  var prop = void 0;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2["default"].prototype;
	
	(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports["default"] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 513 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports['default'];

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAlign = __webpack_require__(515);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(496);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _PopupInner = __webpack_require__(528);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	var _LazyRenderBox = __webpack_require__(529);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	var _utils = __webpack_require__(530);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Popup = function (_Component) {
	  (0, _inherits3['default'])(Popup, _Component);
	
	  function Popup(props) {
	    (0, _classCallCheck3['default'])(this, Popup);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    _this.savePopupRef = _utils.saveRef.bind(_this, 'popupInstance');
	    _this.saveAlignRef = _utils.saveRef.bind(_this, 'alignInstance');
	    return _this;
	  }
	
	  (0, _createClass3['default'])(Popup, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.rootNode = this.getPopupDomNode();
	    }
	  }, {
	    key: 'getPopupDomNode',
	    value: function getPopupDomNode() {
	      return _reactDom2['default'].findDOMNode(this.popupInstance);
	    }
	  }, {
	    key: 'getMaskTransitionName',
	    value: function getMaskTransitionName() {
	      var props = this.props;
	      var transitionName = props.maskTransitionName;
	      var animation = props.maskAnimation;
	      if (!transitionName && animation) {
	        transitionName = props.prefixCls + '-' + animation;
	      }
	      return transitionName;
	    }
	  }, {
	    key: 'getTransitionName',
	    value: function getTransitionName() {
	      var props = this.props;
	      var transitionName = props.transitionName;
	      if (!transitionName && props.animation) {
	        transitionName = props.prefixCls + '-' + props.animation;
	      }
	      return transitionName;
	    }
	  }, {
	    key: 'getClassName',
	    value: function getClassName(currentAlignClassName) {
	      return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	    }
	  }, {
	    key: 'getPopupElement',
	    value: function getPopupElement() {
	      var savePopupRef = this.savePopupRef,
	          props = this.props;
	      var align = props.align,
	          style = props.style,
	          visible = props.visible,
	          prefixCls = props.prefixCls,
	          destroyPopupOnHide = props.destroyPopupOnHide;
	
	      var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	      var hiddenClassName = prefixCls + '-hidden';
	      if (!visible) {
	        this.currentAlignClassName = null;
	      }
	      var newStyle = (0, _extends3['default'])({}, style, this.getZIndexStyle());
	      var popupInnerProps = {
	        className: className,
	        prefixCls: prefixCls,
	        ref: savePopupRef,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: newStyle
	      };
	      if (destroyPopupOnHide) {
	        return _react2['default'].createElement(
	          _rcAnimate2['default'],
	          {
	            component: '',
	            exclusive: true,
	            transitionAppear: true,
	            transitionName: this.getTransitionName()
	          },
	          visible ? _react2['default'].createElement(
	            _rcAlign2['default'],
	            {
	              target: this.getTarget,
	              key: 'popup',
	              ref: this.saveAlignRef,
	              monitorWindowResize: true,
	              align: align,
	              onAlign: this.onAlign
	            },
	            _react2['default'].createElement(
	              _PopupInner2['default'],
	              (0, _extends3['default'])({
	                visible: true
	              }, popupInnerProps),
	              props.children
	            )
	          ) : null
	        );
	      }
	      return _react2['default'].createElement(
	        _rcAnimate2['default'],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName(),
	          showProp: 'xVisible'
	        },
	        _react2['default'].createElement(
	          _rcAlign2['default'],
	          {
	            target: this.getTarget,
	            key: 'popup',
	            ref: this.saveAlignRef,
	            monitorWindowResize: true,
	            xVisible: visible,
	            childrenProps: { visible: 'xVisible' },
	            disabled: !visible,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2['default'].createElement(
	            _PopupInner2['default'],
	            (0, _extends3['default'])({
	              hiddenClassName: hiddenClassName
	            }, popupInnerProps),
	            props.children
	          )
	        )
	      );
	    }
	  }, {
	    key: 'getZIndexStyle',
	    value: function getZIndexStyle() {
	      var style = {};
	      var props = this.props;
	      if (props.zIndex !== undefined) {
	        style.zIndex = props.zIndex;
	      }
	      return style;
	    }
	  }, {
	    key: 'getMaskElement',
	    value: function getMaskElement() {
	      var props = this.props;
	      var maskElement = void 0;
	      if (props.mask) {
	        var maskTransition = this.getMaskTransitionName();
	        maskElement = _react2['default'].createElement(_LazyRenderBox2['default'], {
	          style: this.getZIndexStyle(),
	          key: 'mask',
	          className: props.prefixCls + '-mask',
	          hiddenClassName: props.prefixCls + '-mask-hidden',
	          visible: props.visible
	        });
	        if (maskTransition) {
	          maskElement = _react2['default'].createElement(
	            _rcAnimate2['default'],
	            {
	              key: 'mask',
	              showProp: 'visible',
	              transitionAppear: true,
	              component: '',
	              transitionName: maskTransition
	            },
	            maskElement
	          );
	        }
	      }
	      return maskElement;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        this.getMaskElement(),
	        this.getPopupElement()
	      );
	    }
	  }]);
	  return Popup;
	}(_react.Component);
	
	Popup.propTypes = {
	  visible: _propTypes2['default'].bool,
	  style: _propTypes2['default'].object,
	  getClassNameFromAlign: _propTypes2['default'].func,
	  onAlign: _propTypes2['default'].func,
	  getRootDomNode: _propTypes2['default'].func,
	  onMouseEnter: _propTypes2['default'].func,
	  align: _propTypes2['default'].any,
	  destroyPopupOnHide: _propTypes2['default'].bool,
	  className: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  onMouseLeave: _propTypes2['default'].func
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.onAlign = function (popupDomNode, align) {
	    var props = _this2.props;
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    // FIX: https://github.com/react-component/trigger/issues/56
	    // FIX: https://github.com/react-component/tooltip/issues/79
	    if (_this2.currentAlignClassName !== currentAlignClassName) {
	      _this2.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = _this2.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  };
	
	  this.getTarget = function () {
	    return _this2.props.getRootDomNode();
	  };
	};
	
	exports['default'] = Popup;
	module.exports = exports['default'];

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Align = __webpack_require__(516);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _Align2['default']; // export this package's api
	
	module.exports = exports['default'];

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(517);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(510);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _isWindow = __webpack_require__(527);
	
	var _isWindow2 = _interopRequireDefault(_isWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function buffer(fn, ms) {
	  var timer = void 0;
	
	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }
	
	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }
	
	  bufferFn.clear = clear;
	
	  return bufferFn;
	}
	
	var Align = function (_Component) {
	  (0, _inherits3['default'])(Align, _Component);
	
	  function Align() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3['default'])(this, Align);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
	      var props = _this.props;
	      if (!props.disabled) {
	        var source = _reactDom2['default'].findDOMNode(_this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	      }
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }
	
	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if ((0, _isWindow2['default'])(lastTarget) && (0, _isWindow2['default'])(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      this.forceAlign();
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };
	
	  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2['default'])(window, 'resize', this.bufferMonitor);
	    }
	  };
	
	  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  };
	
	  Align.prototype.render = function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;
	
	    var child = _react2['default'].Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2['default'].cloneElement(child, newProps);
	    }
	    return child;
	  };
	
	  return Align;
	}(_react.Component);
	
	Align.propTypes = {
	  childrenProps: _propTypes2['default'].object,
	  align: _propTypes2['default'].object.isRequired,
	  target: _propTypes2['default'].func,
	  onAlign: _propTypes2['default'].func,
	  monitorBufferTime: _propTypes2['default'].number,
	  monitorWindowResize: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  children: _propTypes2['default'].any
	};
	Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	exports['default'] = Align;
	module.exports = exports['default'];

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(518);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(520);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(521);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(523);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(524);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(525);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);
	
	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTargetNotOutOfVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = _getOffsetParent2['default'];
	
	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	module.exports = exports['default'];

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _propertyUtils = __webpack_require__(519);
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = void 0;
	
	function force(x, y) {
	  return x + y;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}
	
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}
	
	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	
	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 519 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;
	
	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};
	
	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}
	
	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}
	
	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}
	
	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}
	
	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}
	
	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}
	
	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}
	
	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;
	
	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(518);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(518);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(520);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _isAncestorFixed = __webpack_require__(522);
	
	var _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;
	
	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }
	
	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
	
	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }
	
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;
	
	var _utils = __webpack_require__(518);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }
	
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(518);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(518);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getAlignOffset = __webpack_require__(526);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 526 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	
	  var x = region.left;
	  var y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 527 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = isWindow;
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	module.exports = exports['default'];

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _LazyRenderBox = __webpack_require__(529);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var PopupInner = function (_Component) {
	  (0, _inherits3['default'])(PopupInner, _Component);
	
	  function PopupInner() {
	    (0, _classCallCheck3['default'])(this, PopupInner);
	    return (0, _possibleConstructorReturn3['default'])(this, (PopupInner.__proto__ || Object.getPrototypeOf(PopupInner)).apply(this, arguments));
	  }
	
	  (0, _createClass3['default'])(PopupInner, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var className = props.className;
	      if (!props.visible) {
	        className += ' ' + props.hiddenClassName;
	      }
	      return _react2['default'].createElement(
	        'div',
	        {
	          className: className,
	          onMouseEnter: props.onMouseEnter,
	          onMouseLeave: props.onMouseLeave,
	          style: props.style
	        },
	        _react2['default'].createElement(
	          _LazyRenderBox2['default'],
	          { className: props.prefixCls + '-content', visible: props.visible },
	          props.children
	        )
	      );
	    }
	  }]);
	  return PopupInner;
	}(_react.Component);
	
	PopupInner.propTypes = {
	  hiddenClassName: _propTypes2['default'].string,
	  className: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  children: _propTypes2['default'].any
	};
	exports['default'] = PopupInner;
	module.exports = exports['default'];

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectWithoutProperties2 = __webpack_require__(506);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var LazyRenderBox = function (_Component) {
	  (0, _inherits3['default'])(LazyRenderBox, _Component);
	
	  function LazyRenderBox() {
	    (0, _classCallCheck3['default'])(this, LazyRenderBox);
	    return (0, _possibleConstructorReturn3['default'])(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
	  }
	
	  (0, _createClass3['default'])(LazyRenderBox, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return nextProps.hiddenClassName || nextProps.visible;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          hiddenClassName = _props.hiddenClassName,
	          visible = _props.visible,
	          props = (0, _objectWithoutProperties3['default'])(_props, ['hiddenClassName', 'visible']);
	
	
	      if (hiddenClassName || _react2['default'].Children.count(props.children) > 1) {
	        if (!visible && hiddenClassName) {
	          props.className += ' ' + hiddenClassName;
	        }
	        return _react2['default'].createElement('div', props);
	      }
	
	      return _react2['default'].Children.only(props.children);
	    }
	  }]);
	  return LazyRenderBox;
	}(_react.Component);
	
	LazyRenderBox.propTypes = {
	  children: _propTypes2['default'].any,
	  className: _propTypes2['default'].string,
	  visible: _propTypes2['default'].bool,
	  hiddenClassName: _propTypes2['default'].string
	};
	exports['default'] = LazyRenderBox;
	module.exports = exports['default'];

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	exports.saveRef = saveRef;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}
	
	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return (0, _extends3['default'])({}, baseAlign, align);
	}
	
	function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}
	
	function saveRef(name, component) {
	  this[name] = component;
	}

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports['default'] = getContainerRenderMixin;
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function defaultGetContainer() {
	  var container = document.createElement('div');
	  document.body.appendChild(container);
	  return container;
	}
	
	function getContainerRenderMixin(config) {
	  var _config$autoMount = config.autoMount,
	      autoMount = _config$autoMount === undefined ? true : _config$autoMount,
	      _config$autoDestroy = config.autoDestroy,
	      autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy,
	      isVisible = config.isVisible,
	      isForceRender = config.isForceRender,
	      getComponent = config.getComponent,
	      _config$getContainer = config.getContainer,
	      getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;
	
	
	  var mixin = void 0;
	
	  function _renderComponent(instance, componentArg, ready) {
	    if (!isVisible || instance._component || isVisible(instance) || isForceRender && isForceRender(instance)) {
	      if (!instance._container) {
	        instance._container = getContainer(instance);
	      }
	      var component = void 0;
	      if (instance.getComponent) {
	        component = instance.getComponent(componentArg);
	      } else {
	        component = getComponent(instance, componentArg);
	      }
	      _reactDom2['default'].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  }
	
	  if (autoMount) {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      componentDidMount: function componentDidMount() {
	        _renderComponent(this);
	      },
	      componentDidUpdate: function componentDidUpdate() {
	        _renderComponent(this);
	      }
	    });
	  }
	
	  if (!autoMount || !autoDestroy) {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      renderComponent: function renderComponent(componentArg, ready) {
	        _renderComponent(this, componentArg, ready);
	      }
	    });
	  }
	
	  function _removeContainer(instance) {
	    if (instance._container) {
	      var container = instance._container;
	      _reactDom2['default'].unmountComponentAtNode(container);
	      container.parentNode.removeChild(container);
	      instance._container = null;
	    }
	  }
	
	  if (autoDestroy) {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      componentWillUnmount: function componentWillUnmount() {
	        _removeContainer(this);
	      }
	    });
	  } else {
	    mixin = (0, _extends3['default'])({}, mixin, {
	      removeContainer: function removeContainer() {
	        _removeContainer(this);
	      }
	    });
	  }
	
	  return mixin;
	}
	module.exports = exports['default'];

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(451);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(97);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _toArray = __webpack_require__(533);
	
	var _toArray2 = _interopRequireDefault(_toArray);
	
	var _rcMenu = __webpack_require__(534);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	var _domScrollIntoView = __webpack_require__(538);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _util = __webpack_require__(504);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var DropdownMenu = function (_React$Component) {
	  (0, _inherits3['default'])(DropdownMenu, _React$Component);
	
	  function DropdownMenu() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3['default'])(this, DropdownMenu);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.scrollActiveItemToView = function () {
	      // scroll into view
	      var itemComponent = (0, _reactDom.findDOMNode)(_this.firstActiveItem);
	      var props = _this.props;
	
	      if (itemComponent) {
	        var scrollIntoViewOpts = {
	          onlyScrollIfNeeded: true
	        };
	        if ((!props.value || props.value.length === 0) && props.firstActiveValue) {
	          scrollIntoViewOpts.alignWithTop = true;
	        }
	
	        (0, _domScrollIntoView2['default'])(itemComponent, (0, _reactDom.findDOMNode)(_this.refs.menu), scrollIntoViewOpts);
	      }
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }
	
	  (0, _createClass3['default'])(DropdownMenu, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.lastInputValue = this.props.inputValue;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollActiveItemToView();
	      this.lastVisible = this.props.visible;
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      if (!nextProps.visible) {
	        this.lastVisible = false;
	      }
	      // freeze when hide
	      return nextProps.visible;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var props = this.props;
	      if (!prevProps.visible && props.visible) {
	        this.scrollActiveItemToView();
	      }
	      this.lastVisible = props.visible;
	      this.lastInputValue = props.inputValue;
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      var _this2 = this;
	
	      var props = this.props;
	      var menuItems = props.menuItems,
	          defaultActiveFirstOption = props.defaultActiveFirstOption,
	          value = props.value,
	          prefixCls = props.prefixCls,
	          multiple = props.multiple,
	          onMenuSelect = props.onMenuSelect,
	          inputValue = props.inputValue,
	          firstActiveValue = props.firstActiveValue;
	
	      if (menuItems && menuItems.length) {
	        var menuProps = {};
	        if (multiple) {
	          menuProps.onDeselect = props.onMenuDeselect;
	          menuProps.onSelect = onMenuSelect;
	        } else {
	          menuProps.onClick = onMenuSelect;
	        }
	
	        var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
	        var activeKeyProps = {};
	
	        var clonedMenuItems = menuItems;
	        if (selectedKeys.length || firstActiveValue) {
	          if (props.visible && !this.lastVisible) {
	            activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
	          }
	          var foundFirst = false;
	          // set firstActiveItem via cloning menus
	          // for scroll into view
	          var clone = function clone(item) {
	            if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
	              foundFirst = true;
	              return (0, _react.cloneElement)(item, {
	                ref: function ref(_ref2) {
	                  _this2.firstActiveItem = _ref2;
	                }
	              });
	            }
	            return item;
	          };
	
	          clonedMenuItems = menuItems.map(function (item) {
	            if (item.type.isMenuItemGroup) {
	              var children = (0, _toArray2['default'])(item.props.children).map(clone);
	              return (0, _react.cloneElement)(item, {}, children);
	            }
	            return clone(item);
	          });
	        }
	
	        // clear activeKey when inputValue change
	        var lastValue = value && value[value.length - 1];
	        if (inputValue !== this.lastInputValue && (!lastValue || !lastValue.backfill)) {
	          activeKeyProps.activeKey = '';
	        }
	
	        return _react2['default'].createElement(
	          _rcMenu2['default'],
	          (0, _extends3['default'])({
	            ref: 'menu',
	            style: this.props.dropdownMenuStyle,
	            defaultActiveFirst: defaultActiveFirstOption
	          }, activeKeyProps, {
	            multiple: multiple,
	            focusable: false
	          }, menuProps, {
	            selectedKeys: selectedKeys,
	            prefixCls: prefixCls + '-menu'
	          }),
	          clonedMenuItems
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var renderMenu = this.renderMenu();
	      return renderMenu ? _react2['default'].createElement(
	        'div',
	        {
	          style: { overflow: 'auto' },
	          onFocus: this.props.onPopupFocus,
	          onMouseDown: _util.preventDefaultEvent
	        },
	        renderMenu
	      ) : null;
	    }
	  }]);
	  return DropdownMenu;
	}(_react2['default'].Component);
	
	DropdownMenu.propTypes = {
	  defaultActiveFirstOption: _propTypes2['default'].bool,
	  value: _propTypes2['default'].any,
	  dropdownMenuStyle: _propTypes2['default'].object,
	  multiple: _propTypes2['default'].bool,
	  onPopupFocus: _propTypes2['default'].func,
	  onMenuDeSelect: _propTypes2['default'].func,
	  onMenuSelect: _propTypes2['default'].func,
	  prefixCls: _propTypes2['default'].string,
	  menuItems: _propTypes2['default'].any,
	  inputValue: _propTypes2['default'].string,
	  visible: _propTypes2['default'].bool
	};
	exports['default'] = DropdownMenu;
	
	
	DropdownMenu.displayName = 'DropdownMenu';
	module.exports = exports['default'];

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toArray;
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}
	module.exports = exports['default'];

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.Item = exports.SubMenu = undefined;
	
	var _Menu = __webpack_require__(535);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(543);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(546);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(547);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	var _Divider = __webpack_require__(548);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.SubMenu = _SubMenu2['default'];
	exports.Item = _MenuItem2['default'];
	exports.MenuItem = _MenuItem2['default'];
	exports.MenuItemGroup = _MenuItemGroup2['default'];
	exports.ItemGroup = _MenuItemGroup2['default'];
	exports.Divider = _Divider2['default'];
	exports['default'] = _Menu2['default'];

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _MenuMixin = __webpack_require__(536);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _util = __webpack_require__(541);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// import React from 'react';
	var Menu = (0, _createReactClass2['default'])({
	  displayName: 'Menu',
	
	  propTypes: {
	    openSubMenuOnMouseEnter: _propTypes2['default'].bool,
	    closeSubMenuOnMouseLeave: _propTypes2['default'].bool,
	    selectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    defaultSelectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    defaultOpenKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    openKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    mode: _propTypes2['default'].string,
	    onClick: _propTypes2['default'].func,
	    onSelect: _propTypes2['default'].func,
	    onDeselect: _propTypes2['default'].func,
	    onDestroy: _propTypes2['default'].func,
	    openTransitionName: _propTypes2['default'].string,
	    openAnimation: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	    level: _propTypes2['default'].number,
	    eventKey: _propTypes2['default'].string,
	    selectable: _propTypes2['default'].bool,
	    children: _propTypes2['default'].any
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      openSubMenuOnMouseEnter: true,
	      closeSubMenuOnMouseLeave: true,
	      selectable: true,
	      onClick: _util.noop,
	      onSelect: _util.noop,
	      onOpenChange: _util.noop,
	      onDeselect: _util.noop,
	      defaultSelectedKeys: [],
	      defaultOpenKeys: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedKeys = props.defaultSelectedKeys;
	    var openKeys = props.defaultOpenKeys;
	    if ('selectedKeys' in props) {
	      selectedKeys = props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = props.openKeys || [];
	    }
	    return {
	      selectedKeys: selectedKeys,
	      openKeys: openKeys
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys || [];
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys || [];
	    }
	    this.setState(props);
	  },
	  onDestroy: function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  },
	  onItemHover: function onItemHover(e) {
	    var item = e.item;
	    var _props = this.props,
	        mode = _props.mode,
	        closeSubMenuOnMouseLeave = _props.closeSubMenuOnMouseLeave;
	    var _e$openChanges = e.openChanges,
	        openChanges = _e$openChanges === undefined ? [] : _e$openChanges;
	    // special for top sub menu
	
	    if (mode !== 'inline' && !closeSubMenuOnMouseLeave && item.isSubMenu) {
	      var activeKey = this.state.activeKey;
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.props.open) {
	        openChanges = openChanges.concat({
	          key: item.props.eventKey,
	          item: item,
	          originalEvent: e,
	          open: true
	        });
	      }
	    }
	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  },
	  onSelect: function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect((0, _extends3['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	  onOpenChange: function onOpenChange(e_) {
	    var props = this.props;
	    var openKeys = this.state.openKeys.concat();
	    var changed = false;
	    var processSingle = function processSingle(e) {
	      var oneChanged = false;
	      if (e.open) {
	        oneChanged = openKeys.indexOf(e.key) === -1;
	        if (oneChanged) {
	          openKeys.push(e.key);
	        }
	      } else {
	        var index = openKeys.indexOf(e.key);
	        oneChanged = index !== -1;
	        if (oneChanged) {
	          openKeys.splice(index, 1);
	        }
	      }
	      changed = changed || oneChanged;
	    };
	    if (Array.isArray(e_)) {
	      // batch change call
	      e_.forEach(processSingle);
	    } else {
	      processSingle(e_);
	    }
	    if (changed) {
	      if (!('openKeys' in this.props)) {
	        this.setState({ openKeys: openKeys });
	      }
	      props.onOpenChange(openKeys);
	    }
	  },
	  onDeselect: function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect((0, _extends3['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	  getOpenTransitionName: function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  },
	  isInlineMode: function isInlineMode() {
	    return this.props.mode === 'inline';
	  },
	  lastOpenSubMenu: function lastOpenSubMenu() {
	    var lastOpen = [];
	    var openKeys = this.state.openKeys;
	
	    if (openKeys.length) {
	      lastOpen = this.getFlatInstanceArray().filter(function (c) {
	        return c && openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  },
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    if (!c) {
	      return null;
	    }
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      selectedKeys: state.selectedKeys,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	  render: function render() {
	    var props = (0, _extends3['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-root';
	    return this.renderRoot(props);
	  }
	});
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(446);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _KeyCode = __webpack_require__(495);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _createChainedFunction = __webpack_require__(537);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _classnames = __webpack_require__(391);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domScrollIntoView = __webpack_require__(538);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _util = __webpack_require__(541);
	
	var _DOMWrap = __webpack_require__(542);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}
	
	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children,
	      eventKey = props.eventKey;
	
	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (c && !c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && c && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}
	
	var MenuMixin = {
	  propTypes: {
	    focusable: _propTypes2['default'].bool,
	    multiple: _propTypes2['default'].bool,
	    style: _propTypes2['default'].object,
	    defaultActiveFirst: _propTypes2['default'].bool,
	    visible: _propTypes2['default'].bool,
	    activeKey: _propTypes2['default'].string,
	    selectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    defaultSelectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    defaultOpenKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    openKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    children: _propTypes2['default'].any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-menu',
	      className: '',
	      mode: 'vertical',
	      level: 1,
	      inlineIndent: 24,
	      visible: true,
	      focusable: true,
	      style: {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    return {
	      activeKey: getActiveKey(props, props.activeKey)
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = void 0;
	    if ('activeKey' in nextProps) {
	      props = {
	        activeKey: getActiveKey(nextProps, nextProps.activeKey)
	      };
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props = {
	          activeKey: activeKey
	        };
	      }
	    }
	    if (props) {
	      this.setState(props);
	    }
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	  componentWillMount: function componentWillMount() {
	    this.instanceArray = [];
	  },
	
	
	  // all keyboard events callbacks run from here at first
	  onKeyDown: function onKeyDown(e, callback) {
	    var _this = this;
	
	    var keyCode = e.keyCode;
	    var handled = void 0;
	    this.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _KeyCode2['default'].UP || keyCode === _KeyCode2['default'].DOWN) {
	      activeItem = this.step(keyCode === _KeyCode2['default'].UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        (0, _domScrollIntoView2['default'])(_reactDom2['default'].findDOMNode(activeItem), _reactDom2['default'].findDOMNode(_this), {
	          onlyScrollIfNeeded: true
	        });
	        if (callback) {
	          callback(activeItem);
	        }
	      });
	      return 1;
	    } else if (activeItem === undefined) {
	      e.preventDefault();
	      this.setState({
	        activeKey: null
	      });
	      return 1;
	    }
	  },
	  getOpenChangesOnItemHover: function getOpenChangesOnItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key,
	        hover = e.hover,
	        trigger = e.trigger;
	
	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty
	
	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        return {
	          item: activeItem,
	          originalEvent: e,
	          key: activeItem.props.eventKey,
	          open: false
	        };
	      }
	    }
	    return [];
	  },
	  getFlatInstanceArray: function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  },
	  renderCommonMenuItem: function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = (0, _extends3['default'])({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _createChainedFunction2['default'])(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2['default'].cloneElement(child, newChildProps);
	  },
	  renderRoot: function renderRoot(props) {
	    var _classes;
	
	    this.instanceArray = [];
	    var classes = (_classes = {}, (0, _defineProperty3['default'])(_classes, props.prefixCls, 1), (0, _defineProperty3['default'])(_classes, props.prefixCls + '-' + props.mode, 1), (0, _defineProperty3['default'])(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2['default'])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2['default'].createElement(
	        _DOMWrap2['default'],
	        (0, _extends3['default'])({
	          style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.prefixCls + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2['default'].Children.map(props.children, this.renderMenuItem)
	      )
	      /*eslint-enable */
	
	    );
	  },
	  step: function step(direction) {
	    var children = this.getFlatInstanceArray();
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (!len) {
	      return null;
	    }
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!this.props.defaultActiveFirst && activeIndex !== -1) {
	      if (allDisabled(children.slice(activeIndex, len - 1))) {
	        return undefined;
	      }
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  }
	};
	
	exports['default'] = MenuMixin;
	module.exports = exports['default'];

/***/ }),
/* 537 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = createChainedFunction;
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = [].slice.call(arguments, 0);
	  if (args.length === 1) {
	    return args[0];
	  }
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(539);

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(540);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;

/***/ }),
/* 540 */
/***/ (function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;
	
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.loopMenuItem = loopMenuItem;
	exports.loopMenuItemRecusively = loopMenuItemRecusively;
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function noop() {}
	
	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + index;
	}
	
	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2['default'].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type && c.type.isMenuItemGroup) {
	      _react2['default'].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}
	
	function loopMenuItemRecusively(children, keys, ret) {
	  if (!children || ret.find) {
	    return;
	  }
	  _react2['default'].Children.forEach(children, function (c) {
	    if (ret.find) {
	      return;
	    }
	    if (c) {
	      var construt = c.type;
	      if (!construt || !(construt.isSubMenu || construt.isMenuItem || construt.isMenuItemGroup)) {
	        return;
	      }
	      if (keys.indexOf(c.key) !== -1) {
	        ret.find = true;
	      } else if (c.props.children) {
	        loopMenuItemRecusively(c.props.children, keys, ret);
	      }
	    }
	  });
	}

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var DOMWrap = (0, _createReactClass2['default'])({
	  displayName: 'DOMWrap',
	
	  propTypes: {
	    tag: _propTypes2['default'].string,
	    hiddenClassName: _propTypes2['default'].string,
	    visible: _propTypes2['default'].bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tag: 'div'
	    };
	  },
	  render: function render() {
	    var props = (0, _extends3['default'])({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    delete props.tag;
	    delete props.hiddenClassName;
	    delete props.visible;
	    return _react2['default'].createElement(Tag, props);
	  }
	});
	
	exports['default'] = DOMWrap;
	module.exports = exports['default'];

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(446);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _SubPopupMenu = __webpack_require__(544);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _KeyCode = __webpack_require__(495);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _classnames = __webpack_require__(391);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(541);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var guid = 0;
	
	/* eslint react/no-is-mounted:0 */
	
	var SubMenu = (0, _createReactClass2['default'])({
	  displayName: 'SubMenu',
	
	  propTypes: {
	    parentMenu: _propTypes2['default'].object,
	    title: _propTypes2['default'].node,
	    children: _propTypes2['default'].any,
	    selectedKeys: _propTypes2['default'].array,
	    openKeys: _propTypes2['default'].array,
	    onClick: _propTypes2['default'].func,
	    onOpenChange: _propTypes2['default'].func,
	    rootPrefixCls: _propTypes2['default'].string,
	    eventKey: _propTypes2['default'].string,
	    multiple: _propTypes2['default'].bool,
	    active: _propTypes2['default'].bool,
	    onSelect: _propTypes2['default'].func,
	    closeSubMenuOnMouseLeave: _propTypes2['default'].bool,
	    openSubMenuOnMouseEnter: _propTypes2['default'].bool,
	    onDeselect: _propTypes2['default'].func,
	    onDestroy: _propTypes2['default'].func,
	    onItemHover: _propTypes2['default'].func,
	    onMouseEnter: _propTypes2['default'].func,
	    onMouseLeave: _propTypes2['default'].func,
	    onTitleMouseEnter: _propTypes2['default'].func,
	    onTitleMouseLeave: _propTypes2['default'].func,
	    onTitleClick: _propTypes2['default'].func
	  },
	
	  mixins: [__webpack_require__(545)],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: _util.noop,
	      onMouseLeave: _util.noop,
	      onTitleMouseEnter: _util.noop,
	      onTitleMouseLeave: _util.noop,
	      onTitleClick: _util.noop,
	      title: ''
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.isSubMenu = 1;
	    return {
	      defaultActiveFirst: false
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var _props = this.props,
	        onDestroy = _props.onDestroy,
	        eventKey = _props.eventKey,
	        parentMenu = _props.parentMenu;
	
	    if (onDestroy) {
	      onDestroy(eventKey);
	    }
	    if (parentMenu.subMenuInstance === this) {
	      this.clearSubMenuTimers();
	    }
	  },
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	    var isOpen = this.isOpen();
	
	    if (keyCode === _KeyCode2['default'].ENTER) {
	      this.onTitleClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }
	
	    if (keyCode === _KeyCode2['default'].RIGHT) {
	      if (isOpen) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _KeyCode2['default'].LEFT) {
	      var handled = void 0;
	      if (isOpen) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }
	
	    if (isOpen && (keyCode === _KeyCode2['default'].UP || keyCode === _KeyCode2['default'].DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  },
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    var props = this.props;
	    this.clearSubMenuLeaveTimer();
	    props.onMouseEnter({
	      key: props.eventKey,
	      domEvent: e
	    });
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    var _this = this;
	
	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        eventKey = props.eventKey;
	
	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuLeaveFn = function () {
	      // leave whole sub tree
	      // still active
	      if (props.mode !== 'inline') {
	        var isOpen = _this.isOpen();
	        if (isOpen && props.closeSubMenuOnMouseLeave && props.active) {
	          props.onItemHover({
	            key: eventKey,
	            item: _this,
	            hover: false,
	            trigger: 'mouseleave',
	            openChanges: [{
	              key: eventKey,
	              item: _this,
	              trigger: 'mouseleave',
	              open: false
	            }]
	          });
	        } else {
	          if (props.active) {
	            props.onItemHover({
	              key: eventKey,
	              item: _this,
	              hover: false,
	              trigger: 'mouseleave'
	            });
	          }
	          if (isOpen && props.closeSubMenuOnMouseLeave) {
	            _this.triggerOpenChange(false);
	          }
	        }
	      }
	      // trigger mouseleave
	      props.onMouseLeave({
	        key: eventKey,
	        domEvent: e
	      });
	    };
	    // prevent popup menu and submenu gap
	    parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.subMenuLeaveFn, 100);
	  },
	  onTitleMouseEnter: function onTitleMouseEnter(domEvent) {
	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        key = props.eventKey;
	
	    var item = this;
	    this.clearSubMenuTitleLeaveTimer();
	    if (parentMenu.menuItemInstance) {
	      parentMenu.menuItemInstance.clearMenuItemMouseLeaveTimer();
	    }
	    var openChanges = [];
	    if (props.openSubMenuOnMouseEnter) {
	      openChanges.push({
	        key: key,
	        item: item,
	        trigger: 'mouseenter',
	        open: true
	      });
	    }
	    props.onItemHover({
	      key: key,
	      item: item,
	      hover: true,
	      trigger: 'mouseenter',
	      openChanges: openChanges
	    });
	    this.setState({
	      defaultActiveFirst: false
	    });
	    props.onTitleMouseEnter({
	      key: key,
	      domEvent: domEvent
	    });
	  },
	  onTitleMouseLeave: function onTitleMouseLeave(e) {
	    var _this2 = this;
	
	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        eventKey = props.eventKey;
	
	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuTitleLeaveFn = function () {
	      // leave whole sub tree
	      // still active
	      if (props.mode === 'inline' && props.active) {
	        props.onItemHover({
	          key: eventKey,
	          item: _this2,
	          hover: false,
	          trigger: 'mouseleave'
	        });
	      }
	      props.onTitleMouseLeave({
	        key: props.eventKey,
	        domEvent: e
	      });
	    };
	    parentMenu.subMenuTitleLeaveTimer = setTimeout(parentMenu.subMenuTitleLeaveFn, 100);
	  },
	  onTitleClick: function onTitleClick(e) {
	    var props = this.props;
	
	    props.onTitleClick({
	      key: props.eventKey,
	      domEvent: e
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.isOpen(), 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	  onSubMenuClick: function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  },
	  onSelect: function onSelect(info) {
	    this.props.onSelect(info);
	  },
	  onDeselect: function onDeselect(info) {
	    this.props.onDeselect(info);
	  },
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  },
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	  getOpenClassName: function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  },
	  saveMenuInstance: function saveMenuInstance(c) {
	    this.menuInstance = c;
	  },
	  addKeyPath: function addKeyPath(info) {
	    return (0, _extends3['default'])({}, info, {
	      keyPath: (info.keyPath || []).concat(this.props.eventKey)
	    });
	  },
	  triggerOpenChange: function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  },
	  clearSubMenuTimers: function clearSubMenuTimers() {
	    this.clearSubMenuLeaveTimer();
	    this.clearSubMenuTitleLeaveTimer();
	  },
	  clearSubMenuTitleLeaveTimer: function clearSubMenuTitleLeaveTimer() {
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuTitleLeaveTimer) {
	      clearTimeout(parentMenu.subMenuTitleLeaveTimer);
	      parentMenu.subMenuTitleLeaveTimer = null;
	      parentMenu.subMenuTitleLeaveFn = null;
	    }
	  },
	  clearSubMenuLeaveTimer: function clearSubMenuLeaveTimer() {
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuLeaveTimer) {
	      clearTimeout(parentMenu.subMenuLeaveTimer);
	      parentMenu.subMenuLeaveTimer = null;
	      parentMenu.subMenuLeaveFn = null;
	    }
	  },
	  isChildrenSelected: function isChildrenSelected() {
	    var ret = { find: false };
	    (0, _util.loopMenuItemRecusively)(this.props.children, this.props.selectedKeys, ret);
	    return ret.find;
	  },
	  isOpen: function isOpen() {
	    return this.props.openKeys.indexOf(this.props.eventKey) !== -1;
	  },
	  renderChildren: function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: this.isOpen(),
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2['default'].createElement(
	      _SubPopupMenu2['default'],
	      baseProps,
	      children
	    );
	  },
	  render: function render() {
	    var _classes;
	
	    var isOpen = this.isOpen();
	    this.haveOpen = this.haveOpen || isOpen;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, (0, _defineProperty3['default'])(_classes, props.className, !!props.className), (0, _defineProperty3['default'])(_classes, prefixCls + '-' + props.mode, 1), _classes);
	
	    classes[this.getOpenClassName()] = isOpen;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getSelectedClassName()] = this.isChildrenSelected();
	
	    if (!this._menuId) {
	      if (props.eventKey) {
	        this._menuId = props.eventKey + '$Menu';
	      } else {
	        this._menuId = '$__$' + ++guid + '$Menu';
	      }
	    }
	
	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var mouseEvents = {};
	    var titleClickEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	      titleClickEvents = {
	        onClick: this.onTitleClick
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onTitleMouseEnter,
	        onMouseLeave: this.onTitleMouseLeave
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2['default'].createElement(
	      'li',
	      (0, _extends3['default'])({ className: (0, _classnames2['default'])(classes) }, mouseEvents, { style: props.style }),
	      _react2['default'].createElement(
	        'div',
	        (0, _extends3['default'])({
	          style: style,
	          className: prefixCls + '-title'
	        }, titleMouseEvents, titleClickEvents, {
	          'aria-expanded': isOpen,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true',
	          title: typeof props.title === 'string' ? props.title : undefined
	        }),
	        props.title,
	        _react2['default'].createElement('i', { className: prefixCls + '-arrow' })
	      ),
	      this.renderChildren(props.children)
	    );
	  }
	});
	
	SubMenu.isSubMenu = 1;
	
	exports['default'] = SubMenu;
	module.exports = exports['default'];

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(453);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _MenuMixin = __webpack_require__(536);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _rcAnimate = __webpack_require__(496);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var SubPopupMenu = (0, _createReactClass2['default'])({
	  displayName: 'SubPopupMenu',
	
	  propTypes: {
	    onSelect: _propTypes2['default'].func,
	    onClick: _propTypes2['default'].func,
	    onDeselect: _propTypes2['default'].func,
	    onOpenChange: _propTypes2['default'].func,
	    onDestroy: _propTypes2['default'].func,
	    openTransitionName: _propTypes2['default'].string,
	    openAnimation: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	    openKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	    closeSubMenuOnMouseLeave: _propTypes2['default'].bool,
	    visible: _propTypes2['default'].bool,
	    children: _propTypes2['default'].any
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  onDeselect: function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  },
	  onSelect: function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  },
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	  onItemHover: function onItemHover(e) {
	    var _e$openChanges = e.openChanges,
	        openChanges = _e$openChanges === undefined ? [] : _e$openChanges;
	
	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  },
	  getOpenTransitionName: function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  },
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    if (!c) {
	      return null;
	    }
	    var props = this.props;
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	  render: function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = (0, _extends3['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if ((0, _typeof3['default'])(props.openAnimation) === 'object') {
	      animProps.animation = (0, _extends3['default'])({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      (0, _extends3['default'])({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear
	      }),
	      this.renderRoot(props)
	    );
	  }
	});
	
	exports['default'] = SubPopupMenu;
	module.exports = exports['default'];

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _KeyCode = __webpack_require__(495);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _addEventListener = __webpack_require__(510);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _contains = __webpack_require__(509);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.mode !== 'inline') {
	      if (this.props.open) {
	        this.bindRootCloseHandlers();
	      } else {
	        this.unbindRootCloseHandlers();
	      }
	    }
	  },
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === _KeyCode2['default'].ESC) {
	      this.props.onItemHover({
	        key: this.props.eventKey,
	        item: this,
	        hover: false
	      });
	    }
	  },
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    if ((0, _contains2['default'])(_reactDom2['default'].findDOMNode(this), e.target)) {
	      return;
	    }
	    var props = this.props;
	    props.onItemHover({
	      hover: false,
	      item: this,
	      key: this.props.eventKey
	    });
	    this.triggerOpenChange(false);
	  },
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    if (!this._onDocumentClickListener) {
	      this._onDocumentClickListener = (0, _addEventListener2['default'])(document, 'click', this.handleDocumentClick);
	      this._onDocumentKeyupListener = (0, _addEventListener2['default'])(document, 'keyup', this.handleDocumentKeyUp);
	    }
	  },
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	      this._onDocumentClickListener = null;
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	      this._onDocumentKeyupListener = null;
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(408);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var _KeyCode = __webpack_require__(495);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _classnames = __webpack_require__(391);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(541);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint react/no-is-mounted:0 */
	
	var MenuItem = (0, _createReactClass2['default'])({
	  displayName: 'MenuItem',
	
	  propTypes: {
	    rootPrefixCls: _propTypes2['default'].string,
	    eventKey: _propTypes2['default'].string,
	    active: _propTypes2['default'].bool,
	    children: _propTypes2['default'].any,
	    selectedKeys: _propTypes2['default'].array,
	    disabled: _propTypes2['default'].bool,
	    title: _propTypes2['default'].string,
	    onSelect: _propTypes2['default'].func,
	    onClick: _propTypes2['default'].func,
	    onDeselect: _propTypes2['default'].func,
	    parentMenu: _propTypes2['default'].object,
	    onItemHover: _propTypes2['default'].func,
	    onDestroy: _propTypes2['default'].func,
	    onMouseEnter: _propTypes2['default'].func,
	    onMouseLeave: _propTypes2['default'].func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onSelect: _util.noop,
	      onMouseEnter: _util.noop,
	      onMouseLeave: _util.noop
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	    if (props.parentMenu.menuItemInstance === this) {
	      this.clearMenuItemMouseLeaveTimer();
	    }
	  },
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    if (keyCode === _KeyCode2['default'].ENTER) {
	      this.onClick(e);
	      return true;
	    }
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    var _this = this;
	
	    var props = this.props;
	    var eventKey = props.eventKey,
	        parentMenu = props.parentMenu;
	
	    parentMenu.menuItemInstance = this;
	    parentMenu.menuItemMouseLeaveFn = function () {
	      if (props.active) {
	        props.onItemHover({
	          key: eventKey,
	          item: _this,
	          hover: false,
	          domEvent: e,
	          trigger: 'mouseleave'
	        });
	      }
	    };
	    parentMenu.menuItemMouseLeaveTimer = setTimeout(parentMenu.menuItemMouseLeaveFn, 30);
	    props.onMouseLeave({
	      key: eventKey,
	      domEvent: e
	    });
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    var props = this.props;
	    var eventKey = props.eventKey,
	        parentMenu = props.parentMenu;
	
	    this.clearMenuItemMouseLeaveTimer();
	    if (parentMenu.subMenuInstance) {
	      parentMenu.subMenuInstance.clearSubMenuTimers();
	    }
	    props.onItemHover({
	      key: eventKey,
	      item: this,
	      hover: true,
	      domEvent: e,
	      trigger: 'mouseenter'
	    });
	    props.onMouseEnter({
	      key: eventKey,
	      domEvent: e
	    });
	  },
	  onClick: function onClick(e) {
	    var props = this.props;
	    var selected = this.isSelected();
	    var eventKey = props.eventKey;
	    var info = {
	      key: eventKey,
	      keyPath: [eventKey],
	      item: this,
	      domEvent: e
	    };
	    props.onClick(info);
	    if (props.multiple) {
	      if (selected) {
	        props.onDeselect(info);
	      } else {
	        props.onSelect(info);
	      }
	    } else if (!selected) {
	      props.onSelect(info);
	    }
	  },
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  },
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	  clearMenuItemMouseLeaveTimer: function clearMenuItemMouseLeaveTimer() {
	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	      parentMenu.menuItemMouseLeaveFn = null;
	    }
	  },
	  isSelected: function isSelected() {
	    return this.props.selectedKeys.indexOf(this.props.eventKey) !== -1;
	  },
	  render: function render() {
	    var props = this.props;
	    var selected = this.isSelected();
	    var classes = {};
	    classes[this.getActiveClassName()] = !props.disabled && props.active;
	    classes[this.getSelectedClassName()] = selected;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getPrefixCls()] = true;
	    classes[props.className] = !!props.className;
	    var attrs = (0, _extends3['default'])({}, props.attribute, {
	      title: props.title,
	      className: (0, _classnames2['default'])(classes),
	      role: 'menuitem',
	      'aria-selected': selected,
	      'aria-disabled': props.disabled
	    });
	    var mouseEvent = {};
	    if (!props.disabled) {
	      mouseEvent = {
	        onClick: this.onClick,
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = (0, _extends3['default'])({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2['default'].createElement(
	      'li',
	      (0, _extends3['default'])({
	        style: style
	      }, attrs, mouseEvent),
	      props.children
	    );
	  }
	});
	
	MenuItem.isMenuItem = 1;
	
	exports['default'] = MenuItem;
	module.exports = exports['default'];

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var MenuItemGroup = (0, _createReactClass2['default'])({
	  displayName: 'MenuItemGroup',
	
	  propTypes: {
	    renderMenuItem: _propTypes2['default'].func,
	    index: _propTypes2['default'].number,
	    className: _propTypes2['default'].string,
	    rootPrefixCls: _propTypes2['default'].string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	  renderInnerMenuItem: function renderInnerMenuItem(item, subIndex) {
	    var _props = this.props,
	        renderMenuItem = _props.renderMenuItem,
	        index = _props.index;
	
	    return renderMenuItem(item, index, subIndex);
	  },
	  render: function render() {
	    var props = this.props;
	    var _props$className = props.className,
	        className = _props$className === undefined ? '' : _props$className,
	        rootPrefixCls = props.rootPrefixCls;
	
	    var titleClassName = rootPrefixCls + '-item-group-title';
	    var listClassName = rootPrefixCls + '-item-group-list';
	    return _react2['default'].createElement(
	      'li',
	      { className: className + ' ' + rootPrefixCls + '-item-group' },
	      _react2['default'].createElement(
	        'div',
	        {
	          className: titleClassName,
	          title: typeof props.title === 'string' ? props.title : undefined
	        },
	        props.title
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { className: listClassName },
	        _react2['default'].Children.map(props.children, this.renderInnerMenuItem)
	      )
	    );
	  }
	});
	
	MenuItemGroup.isMenuItemGroup = true;
	
	exports['default'] = MenuItemGroup;
	module.exports = exports['default'];

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(508);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Divider = (0, _createReactClass2['default'])({
	  displayName: 'Divider',
	
	  propTypes: {
	    disabled: _propTypes2['default'].bool,
	    className: _propTypes2['default'].string,
	    rootPrefixCls: _propTypes2['default'].string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        _props$className = _props.className,
	        className = _props$className === undefined ? '' : _props$className,
	        rootPrefixCls = _props.rootPrefixCls;
	
	    return _react2['default'].createElement('li', { className: className + ' ' + rootPrefixCls + '-item-divider' });
	  }
	});
	
	exports['default'] = Divider;
	module.exports = exports['default'];

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SelectPropTypes = undefined;
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function valueType(props, propName, componentName) {
	  var labelInValueShape = _propTypes2['default'].shape({
	    key: _propTypes2['default'].string.isRequired,
	    label: _propTypes2['default'].string
	  });
	  if (props.labelInValue) {
	    var validate = _propTypes2['default'].oneOfType([_propTypes2['default'].arrayOf(labelInValueShape), labelInValueShape]);
	    var error = validate.apply(undefined, arguments);
	    if (error) {
	      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`, ' + ('when you set `labelInValue` to `true`, `' + propName + '` should in ') + 'shape of `{ key: string, label?: string }`.');
	    }
	  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
	    return new Error('Invalid prop `' + propName + '` of type `string` supplied to `' + componentName + '`, ' + 'expected `array` when `multiple` or `tags` is `true`.');
	  } else {
	    var _validate = _propTypes2['default'].oneOfType([_propTypes2['default'].arrayOf(_propTypes2['default'].string), _propTypes2['default'].string]);
	    return _validate.apply(undefined, arguments);
	  }
	}
	
	var SelectPropTypes = exports.SelectPropTypes = {
	  defaultActiveFirstOption: _propTypes2['default'].bool,
	  multiple: _propTypes2['default'].bool,
	  filterOption: _propTypes2['default'].any,
	  children: _propTypes2['default'].any,
	  showSearch: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  allowClear: _propTypes2['default'].bool,
	  showArrow: _propTypes2['default'].bool,
	  tags: _propTypes2['default'].bool,
	  prefixCls: _propTypes2['default'].string,
	  className: _propTypes2['default'].string,
	  transitionName: _propTypes2['default'].string,
	  optionLabelProp: _propTypes2['default'].string,
	  optionFilterProp: _propTypes2['default'].string,
	  animation: _propTypes2['default'].string,
	  choiceTransitionName: _propTypes2['default'].string,
	  onChange: _propTypes2['default'].func,
	  onBlur: _propTypes2['default'].func,
	  onFocus: _propTypes2['default'].func,
	  onSelect: _propTypes2['default'].func,
	  onSearch: _propTypes2['default'].func,
	  placeholder: _propTypes2['default'].any,
	  onDeselect: _propTypes2['default'].func,
	  labelInValue: _propTypes2['default'].bool,
	  value: valueType,
	  defaultValue: valueType,
	  dropdownStyle: _propTypes2['default'].object,
	  maxTagTextLength: _propTypes2['default'].number,
	  tokenSeparators: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  getInputElement: _propTypes2['default'].func
	};

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(44);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Option = function (_React$Component) {
	  (0, _inherits3['default'])(Option, _React$Component);
	
	  function Option() {
	    (0, _classCallCheck3['default'])(this, Option);
	    return (0, _possibleConstructorReturn3['default'])(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	  }
	
	  return Option;
	}(_react2['default'].Component);
	
	Option.propTypes = {
	  value: _propTypes2['default'].string
	};
	Option.isSelectOption = true;
	exports['default'] = Option;
	module.exports = exports['default'];

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(450);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(452);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(487);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var OptGroup = function (_React$Component) {
	  (0, _inherits3['default'])(OptGroup, _React$Component);
	
	  function OptGroup() {
	    (0, _classCallCheck3['default'])(this, OptGroup);
	    return (0, _possibleConstructorReturn3['default'])(this, (OptGroup.__proto__ || Object.getPrototypeOf(OptGroup)).apply(this, arguments));
	  }
	
	  return OptGroup;
	}(_react2['default'].Component);
	
	OptGroup.isSelectOptGroup = true;
	exports['default'] = OptGroup;
	module.exports = exports['default'];

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ColorPickerPanel = __webpack_require__(554);
	
	var _ColorPickerPanel2 = _interopRequireDefault(_ColorPickerPanel);
	
	var _utils = __webpack_require__(390);
	
	var _rcEditorUtils = __webpack_require__(392);
	
	var _rcEditorUtils2 = _interopRequireDefault(_rcEditorUtils);
	
	var _ColorPickerBtn = __webpack_require__(556);
	
	var _ColorPickerBtn2 = _interopRequireDefault(_ColorPickerBtn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var getCurrentInlineStyle = _rcEditorUtils2["default"].getCurrentInlineStyle,
	    getCurrentEntity = _rcEditorUtils2["default"].getCurrentEntity;
	
	var defaultFontColor = '000';
	var PREFIX = 'FONTCOLOR_';
	var fontColor = {
	    constructor: function constructor(config) {
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var applyStyle = (0, _utils.getApplyFontStyleFunc)(PREFIX, callbacks);
	        function changeSelect(_ref) {
	            var color = _ref.color;
	
	            var colorString = color.substring(1);
	            applyStyle('' + PREFIX + colorString, true);
	        }
	        function customStyleFn(styleSet) {
	            return styleSet.map(function (style) {
	                if (style.indexOf(PREFIX) !== -1) {
	                    var color = '#' + style.substring(PREFIX.length);
	                    return {
	                        color: color
	                    };
	                }
	                return {};
	            }).reduce(function (prev, curr) {
	                return Object.assign(prev, curr);
	            });
	        }
	        return {
	            name: 'fontColor',
	            callbacks: callbacks,
	            customStyleFn: customStyleFn,
	            component: function component(props) {
	                var editorState = callbacks.getEditorState();
	                var currentStyle = getCurrentInlineStyle(editorState);
	                var currentFontColor = currentStyle && currentStyle.find(function (item) {
	                    return item.indexOf('' + PREFIX) !== -1;
	                });
	                var fontColor = currentFontColor ? currentFontColor.substring(PREFIX.length) : defaultFontColor;
	                return _react2["default"].createElement(
	                    _ColorPickerPanel2["default"],
	                    { prefixCls: config.prefixCls + '-editor', defaultColor: '#' + defaultFontColor, animation: 'slide-up', color: '#' + fontColor, onChange: changeSelect },
	                    _react2["default"].createElement(_ColorPickerBtn2["default"], { style: { backgroundColor: '#' + fontColor } })
	                );
	            }
	        };
	    }
	};
	exports["default"] = fontColor;
	module.exports = exports['default'];

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(97);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTrigger = __webpack_require__(507);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _placements = __webpack_require__(555);
	
	var _placements2 = _interopRequireDefault(_placements);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var ColorSet = 'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,\n  \'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,\n  \'d8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,\n  \'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,\n  \'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,\n  \'7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,\n  \'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,'.split(',');
	function noop() {}
	function newArray(length, iterator) {
	    if (Array.prototype.fill) {
	        return new Array(length).fill(0).map(iterator);
	    }
	    return new Array(length).join('').split('').map(iterator);
	}
	
	var ColorPickerPanel = function (_React$Component) {
	    _inherits(ColorPickerPanel, _React$Component);
	
	    function ColorPickerPanel(props) {
	        _classCallCheck(this, ColorPickerPanel);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this._canvas = {};
	        _this.fillCanvasColor = function () {
	            for (var color in _this._canvas) {
	                if (_this._canvas.hasOwnProperty(color)) {
	                    var canvas = _this._canvas[color];
	                    if (canvas && !canvas.getAttribute('filled')) {
	                        var ctx = canvas.getContext('2d');
	                        ctx.fillStyle = color;
	                        ctx.fillRect(0, 0, canvas.width, canvas.height);
	                        _this._canvas[color].setAttribute('filled', true);
	                    }
	                }
	            }
	        };
	        _this.reset = function () {
	            _this.pickColor(_this.getDefaultColor(), true);
	        };
	        _this.onVisibleChange = function (open) {
	            _this.setState({ open: open }, function () {
	                if (open) {
	                    _this.fillCanvasColor();
	                    _reactDom2["default"].findDOMNode(_this.pickerPanelInstance).focus();
	                }
	            });
	        };
	        _this.renderColorPickerCell = function (color, idx) {
	            var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	            var ele = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'li';
	
	            var Ele = ele;
	            return _react2["default"].createElement(
	                Ele,
	                { className: _this.props.prefixCls + '-color-picker-cell', key: idx },
	                _react2["default"].createElement(
	                    'a',
	                    { tabIndex: 0, onMouseDown: function onMouseDown(e) {
	                            _this.pickColor(color, true);e.preventDefault();
	                        } },
	                    _react2["default"].createElement('canvas', { className: _this.props.prefixCls + '-color-picker-celldiv', ref: function ref(ele) {
	                            return _this._canvas[color] = ele;
	                        } }),
	                    text
	                )
	            );
	        };
	        _this.state = {
	            currentColor: _this.getDefaultColor(props),
	            open: false
	        };
	        _this._canvas = {};
	        return _this;
	    }
	
	    ColorPickerPanel.prototype.getDefaultColor = function getDefaultColor() {
	        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	        return props.defaultColor || '#000';
	    };
	
	    ColorPickerPanel.prototype.pickColor = function pickColor(currentColor) {
	        var closeModal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	        this.props.onChange ? this.props.onChange({ color: currentColor }) : null;
	        this.setState({
	            currentColor: currentColor,
	            open: closeModal ? false : this.state.open
	        });
	    };
	
	    ColorPickerPanel.prototype.getPickerElement = function getPickerElement() {
	        var _this2 = this;
	
	        if (!this._pickerElement) {
	            this._pickerElement = _react2["default"].createElement(
	                'div',
	                { className: this.props.prefixCls + '-color-picker-panel', ref: function ref(ele) {
	                        return _this2.pickerPanelInstance = ele;
	                    } },
	                _react2["default"].createElement(
	                    'div',
	                    { className: this.props.prefixCls + '-color-picker-color-auto', onMouseDown: this.reset },
	                    _react2["default"].createElement(
	                        'ul',
	                        null,
	                        this.renderColorPickerCell('#000', 0, '自动')
	                    )
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: this.props.prefixCls + '-color-picker-first-row' },
	                    _react2["default"].createElement(
	                        'ul',
	                        null,
	                        newArray(10, function (_, idx) {
	                            return _this2.renderColorPickerCell('#' + ColorSet[idx], idx + 1);
	                        })
	                    )
	                ),
	                _react2["default"].createElement(
	                    'table',
	                    null,
	                    _react2["default"].createElement(
	                        'tbody',
	                        null,
	                        newArray(5, function (_, row) {
	                            return _react2["default"].createElement(
	                                'tr',
	                                { className: _this2.props.prefixCls + '-color-picker-compactrow', key: row },
	                                newArray(10, function (_, idx) {
	                                    return _this2.renderColorPickerCell('#' + ColorSet[idx + (row + 1) * 10], row * 10 + idx + 1, null, 'td');
	                                })
	                            );
	                        })
	                    )
	                ),
	                _react2["default"].createElement(
	                    'span',
	                    null,
	                    '\u6807\u51C6\u989C\u8272'
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: this.props.prefixCls + '-color-picker-last-row' },
	                    _react2["default"].createElement(
	                        'ul',
	                        null,
	                        newArray(10, function (_, idx) {
	                            return _this2.renderColorPickerCell('#' + ColorSet[idx + 60], idx + 1);
	                        })
	                    )
	                )
	            );
	        }
	        return this._pickerElement;
	    };
	
	    ColorPickerPanel.prototype.render = function render() {
	        var _this3 = this;
	
	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            placement = _props.placement,
	            style = _props.style,
	            getCalendarContainer = _props.getCalendarContainer,
	            align = _props.align,
	            animation = _props.animation,
	            disabled = _props.disabled,
	            transitionName = _props.transitionName;
	
	        var children = this.props.children;
	        if (children) {
	            children = _react2["default"].cloneElement(children, {
	                ref: function ref(ele) {
	                    return _this3.triggerInstance = ele;
	                },
	                unselectable: true
	            });
	        }
	        return _react2["default"].createElement(
	            _rcTrigger2["default"],
	            { popup: this.getPickerElement(), popupAlign: align, builtinPlacements: _placements2["default"], popupPlacement: placement, action: disabled ? [] : ['click'], destroyPopupOnHide: true, getPopupContainer: getCalendarContainer, popupStyle: style, popupAnimation: animation, popupTransitionName: transitionName, popupVisible: this.state.open, onPopupVisibleChange: this.onVisibleChange, prefixCls: prefixCls + '-color-picker' },
	            children
	        );
	    };
	
	    return ColorPickerPanel;
	}(_react2["default"].Component);
	
	exports["default"] = ColorPickerPanel;
	
	ColorPickerPanel.defaultProps = {
	    defaultColor: '#F00',
	    defaultAlpha: 100,
	    onChange: noop,
	    onOpen: noop,
	    onClose: noop,
	    prefixCls: 'rc-editor',
	    children: _react2["default"].createElement('span', { className: 'rc-color-picker-trigger' }),
	    placement: 'topLeft',
	    style: {}
	};
	module.exports = exports['default'];

/***/ }),
/* 555 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var autoAdjustOverflow = {
	    adjustX: 1,
	    adjustY: 1
	};
	var targetOffset = [0, 0];
	var placements = {
	    topLeft: {
	        points: ['bl', 'tl'],
	        overflow: autoAdjustOverflow,
	        offset: [0, 25],
	        targetOffset: targetOffset
	    },
	    topRight: {
	        points: ['br', 'tr'],
	        overflow: autoAdjustOverflow,
	        offset: [0, 25],
	        targetOffset: targetOffset
	    },
	    bottomLeft: {
	        points: ['tl', 'bl'],
	        overflow: autoAdjustOverflow,
	        offset: [0, -25],
	        targetOffset: targetOffset
	    },
	    bottomRight: {
	        points: ['tr', 'br'],
	        overflow: autoAdjustOverflow,
	        offset: [0, -25],
	        targetOffset: targetOffset
	    }
	};
	exports["default"] = placements;
	module.exports = exports['default'];

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = ColorPickerBtn;
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(391);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function ColorPickerBtn(props) {
	    var _classnames;
	
	    var _props = Object.assign({}, props, { style: {} });
	    var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-font-color', true), _classnames));
	    return _react2["default"].createElement(
	        'span',
	        _extends({}, _props, { className: 'editor-icon-wrapper' }),
	        _react2["default"].createElement('span', { className: classNames }),
	        _react2["default"].createElement('span', { className: 'font-color-preview', style: props.style })
	    );
	}
	module.exports = exports['default'];

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EditorPluginEmoji = __webpack_require__(558);
	
	var _EditorPluginEmoji2 = _interopRequireDefault(_EditorPluginEmoji);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _EditorPluginEmoji2["default"]; // export this package's api
	
	module.exports = exports['default'];

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(391);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _draftJs = __webpack_require__(46);
	
	var _util = __webpack_require__(559);
	
	var _EmojiButton = __webpack_require__(560);
	
	var _EmojiButton2 = _interopRequireDefault(_EmojiButton);
	
	var _EmojiIcon = __webpack_require__(563);
	
	var _EmojiIcon2 = _interopRequireDefault(_EmojiIcon);
	
	var _EmojiRaw = __webpack_require__(564);
	
	var _EmojiRaw2 = _interopRequireDefault(_EmojiRaw);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function noop() {};
	
	var emojiRex = /\[([\u4e00-\u9fa5])+\]/g;
	
	function findWithRegex(regex, contentBlock, callback) {
	  var text = contentBlock.getText();
	  var matchArr = void 0,
	      start = void 0;
	  while ((matchArr = regex.exec(text)) !== null) {
	    start = matchArr.index;
	    callback(start, start + matchArr[0].length);
	  }
	}
	
	function findEntities(entityType) {
	  return function findEntitiesFunc(contentBlock, callback) {
	    contentBlock.findEntityRanges(function (character) {
	      var entityKey = character.getEntity();
	      return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === entityType;
	    }, callback);
	  };
	}
	
	var Emoji = {
	  constructor: function constructor() {
	    var _this = this;
	
	    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var callbacks = {
	      getEditorState: noop,
	      setEditorState: noop,
	      focus: noop
	    };
	    function pickEmoji(emoji) {
	      var editorState = callbacks.getEditorState();
	      callbacks.setEditorState((0, _util.insertEntity)(editorState, 'emoji', { emoji: emoji, "export": _util.exportEntity }), true);
	    }
	    return {
	      name: 'emoji',
	      callbacks: callbacks,
	      decorators: [{
	        strategy: findEntities('emoji'),
	        component: _EmojiIcon2["default"]
	      }, {
	        strategy: function strategy(contentBlock, callback) {
	          return findWithRegex(emojiRex, contentBlock, callback);
	        },
	        component: function component(props) {
	          return _react2["default"].createElement(_EmojiRaw2["default"], _extends({ callbacks: callbacks }, props));
	        }
	      }],
	      component: function component(props) {
	        return _react2["default"].createElement(_EmojiButton2["default"], { onChange: pickEmoji.bind(_this) });
	      }
	    };
	  },
	
	  config: {}
	};
	
	exports["default"] = Emoji;
	module.exports = exports['default'];

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceEntity = replaceEntity;
	exports.createEntity = createEntity;
	exports.insertEntity = insertEntity;
	exports.exportEntity = exportEntity;
	
	var _draftJs = __webpack_require__(46);
	
	function replaceEntity(editorState, selection, text, entity) {
	  var content = editorState.getCurrentContent();
	  var insertContent = _draftJs.Modifier.replaceText(content, selection, text, {}, entity);
	
	  var InsertSpaceContent = _draftJs.Modifier.insertText(insertContent, insertContent.getSelectionAfter(), ' ');
	  return _draftJs.EditorState.push(editorState, InsertSpaceContent, 'replace-entity');
	}
	
	function createEntity(entityType, data) {
	  var entityMode = arguments.length <= 2 || arguments[2] === undefined ? 'IMMUTABLE' : arguments[2];
	
	  return _draftJs.Entity.create(entityType, entityMode, data || {});
	}
	
	function insertEntity(editorState, entityType, data) {
	  var entityMode = arguments.length <= 3 || arguments[3] === undefined ? 'IMMUTABLE' : arguments[3];
	
	  var selection = editorState.getSelection();
	  var content = editorState.getCurrentContent();
	  var entityKey = createEntity(entityType, data, entityMode);
	  var insertContent = _draftJs.Modifier.insertText(content, selection, ' ', {}, entityKey);
	
	  var InsertSpaceContent = _draftJs.Modifier.insertText(insertContent, insertContent.getSelectionAfter(), ' ');
	
	  var newEditorState = _draftJs.EditorState.push(editorState, InsertSpaceContent, 'insert-entity');
	  return _draftJs.EditorState.forceSelection(newEditorState, InsertSpaceContent.getSelectionAfter());
	}
	
	function exportEntity(entityData) {
	  console.log('> exportEneity', entityData);
	  return '' + entityData.emoji.shortCut;
	}

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(391);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _EmojiPicker = __webpack_require__(561);
	
	var _EmojiPicker2 = _interopRequireDefault(_EmojiPicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var EmojiButton = function (_React$Component) {
	  _inherits(EmojiButton, _React$Component);
	
	  function EmojiButton() {
	    _classCallCheck(this, EmojiButton);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.eventHandler = null;
	
	    _this.toggleEmojiPicker = function (ev) {
	      ev.stopPropagation();
	      ev.nativeEvent.stopImmediatePropagation();
	      _this.setState({
	        visible: !_this.state.visible
	      });
	    };
	
	    _this.hideEmojiPicker = function (e) {
	      _this.setState({
	        visible: false
	      });
	    };
	
	    _this.state = {
	      visible: false
	    };
	    return _this;
	  }
	
	  EmojiButton.prototype.componentDidMount = function componentDidMount() {
	    this.eventHandler = document.addEventListener('click', this.hideEmojiPicker);
	  };
	
	  EmojiButton.prototype.componentWillUmount = function componentWillUmount() {
	    document.removeEventListener('click', this.hideEmojiPicker);
	  };
	
	  EmojiButton.prototype.onChange = function onChange(emoji) {
	    this.setState({
	      visible: false
	    });
	    this.props.onChange(emoji);
	  };
	
	  EmojiButton.prototype.render = function render() {
	    var _classnames;
	
	    var visible = this.state.visible;
	
	    var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-emoji', true), _defineProperty(_classnames, 'active', visible), _classnames));
	    return _react2["default"].createElement(
	      'div',
	      { className: 'editor-icon-emoji-wrap' },
	      _react2["default"].createElement('span', { className: classNames, onClick: this.toggleEmojiPicker }),
	      visible ? _react2["default"].createElement(_EmojiPicker2["default"], { onChange: this.onChange.bind(this), visible: visible }) : null
	    );
	  };
	
	  return EmojiButton;
	}(_react2["default"].Component);
	
	exports["default"] = EmojiButton;
	module.exports = exports['default'];

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _emojisList = __webpack_require__(562);
	
	var _emojisList2 = _interopRequireDefault(_emojisList);
	
	var _classnames3 = __webpack_require__(391);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var emojisPerPage = 50;
	
	var EmojiPicker = function (_React$Component) {
	  _inherits(EmojiPicker, _React$Component);
	
	  function EmojiPicker() {
	    _classCallCheck(this, EmojiPicker);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      currentPage: 0,
	      totalPage: Math.floor(_emojisList2["default"].length / emojisPerPage)
	    };
	    return _this;
	  }
	
	  EmojiPicker.prototype.pickEmoji = function pickEmoji(emoji) {
	    if (this.props.onChange) {
	      this.props.onChange(emoji);
	    }
	  };
	
	  EmojiPicker.prototype.render = function render() {
	    var _this2 = this;
	
	    var _state = this.state;
	    var currentPage = _state.currentPage;
	    var totalPage = _state.totalPage;
	
	    var emojis = _emojisList2["default"].slice(currentPage * emojisPerPage, (currentPage + 1) * emojisPerPage).map(function (emoji) {
	      var _classnames;
	
	      var className = (0, _classnames4["default"])((_classnames = {}, _defineProperty(_classnames, 'emoji', true), _defineProperty(_classnames, 'emoji-' + emoji.shortCut, true), _classnames));
	      return _react2["default"].createElement(
	        'span',
	        { className: className, onMouseDown: _this2.pickEmoji.bind(_this2, emoji) },
	        _react2["default"].createElement('img', { src: '' + emoji.url, alt: '' })
	      );
	    });
	    var paginations = [];
	
	    var _loop = function _loop(i) {
	      var _classnames2;
	
	      var className = (0, _classnames4["default"])((_classnames2 = {}, _defineProperty(_classnames2, 'emoji-paginationIcon', true), _defineProperty(_classnames2, 'active', i === currentPage), _classnames2));
	      paginations.push(_react2["default"].createElement('span', { className: className, onClick: function onClick() {
	          return _this2.setState({ currentPage: i });
	        } }));
	    };
	
	    for (var i = 0; i < totalPage; i++) {
	      _loop(i);
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: 'emoji-picker-wrapper', onClick: function onClick(ev) {
	          ev.stopPropagation();ev.nativeEvent.stopImmediatePropagation();
	        } },
	      emojis,
	      _react2["default"].createElement(
	        'div',
	        { className: 'pagination-wrap' },
	        paginations
	      )
	    );
	  };
	
	  return EmojiPicker;
	}(_react2["default"].Component);
	
	exports["default"] = EmojiPicker;
	module.exports = exports['default'];

/***/ }),
/* 562 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var emojis = [{ "shortCut": "[愉快]", "emotionId": "01.png", "url": "https://zos.alipayobjects.com/rmsportal/vywkIryvSnQiynQ.png" }, { "shortCut": "[撇嘴]", "emotionId": "02.png", "url": "https://zos.alipayobjects.com/rmsportal/drSYuckhTfZZcwD.png" }, { "shortCut": "[色]", "emotionId": "03.png", "url": "https://zos.alipayobjects.com/rmsportal/TipqhdZhZZwoGZm.png" }, { "shortCut": "[傻笑]", "emotionId": "04.png", "url": "https://zos.alipayobjects.com/rmsportal/cVHjmaeIdVqDemq.png" }, { "shortCut": "[得意]", "emotionId": "05.png", "url": "https://zos.alipayobjects.com/rmsportal/ZARnJThSNEtakfI.png" }, { "shortCut": "[流泪]", "emotionId": "06.png", "url": "https://zos.alipayobjects.com/rmsportal/MZKUHuFnZvpQoRQ.png" }, { "shortCut": "[色眯眯]", "emotionId": "07.png", "url": "https://zos.alipayobjects.com/rmsportal/WhvVecdOxnujPpz.png" }, { "shortCut": "[闭嘴]", "emotionId": "08.png", "url": "https://zos.alipayobjects.com/rmsportal/PnKrzWJIKuoVmuq.png" }, { "shortCut": "[可怜]", "emotionId": "09.png", "url": "https://zos.alipayobjects.com/rmsportal/YdWtgNSDTUPhjfi.png" }, { "shortCut": "[亲亲]", "emotionId": "10.png", "url": "https://zos.alipayobjects.com/rmsportal/vxfbQOcuzBuzWqJ.png" }, { "shortCut": "[无聊]", "emotionId": "11.png", "url": "https://zos.alipayobjects.com/rmsportal/OjIYEGtOeywXLIK.png" }, { "shortCut": "[发怒]", "emotionId": "12.png", "url": "https://zos.alipayobjects.com/rmsportal/FxWMNcblzixUzka.png" }, { "shortCut": "[做鬼脸]", "emotionId": "13.png", "url": "https://zos.alipayobjects.com/rmsportal/FxOKNcADwgRqgqv.png" }, { "shortCut": "[呲牙]", "emotionId": "14.png", "url": "https://zos.alipayobjects.com/rmsportal/gRDziqJzJjuADqO.png" }, { "shortCut": "[难过]", "emotionId": "15.png", "url": "https://zos.alipayobjects.com/rmsportal/odgrADoukpuzCGr.png" }, { "shortCut": "[抢劫]", "emotionId": "16.png", "url": "https://zos.alipayobjects.com/rmsportal/UpyCjmqpRzRuSPa.png" }, { "shortCut": "[抠鼻]", "emotionId": "17.png", "url": "https://zos.alipayobjects.com/rmsportal/CHoSKlMvpBmtFms.png" }, { "shortCut": "[冷汗]", "emotionId": "18.png", "url": "https://zos.alipayobjects.com/rmsportal/IkkQuIgRvOLICHb.png" }, { "shortCut": "[阴险]", "emotionId": "19.png", "url": "https://zos.alipayobjects.com/rmsportal/NaWqSofezRZkKiA.png" }, { "shortCut": "[竖中指]", "emotionId": "20.png", "url": "https://zos.alipayobjects.com/rmsportal/sBFNWbgMbPiikNg.png" }, { "shortCut": "[鄙视]", "emotionId": "21.png", "url": "https://zos.alipayobjects.com/rmsportal/aVsPdQLRHtFRcNn.png" }, { "shortCut": "[抓狂]", "emotionId": "22.png", "url": "https://zos.alipayobjects.com/rmsportal/yrgxgixgWrliWpp.png" }, { "shortCut": "[偷笑]", "emotionId": "23.png", "url": "https://zos.alipayobjects.com/rmsportal/jGxyVvDtPFlUHtv.png" }, { "shortCut": "[敲打]", "emotionId": "24.png", "url": "https://zos.alipayobjects.com/rmsportal/noYMnGVgHZnAieY.png" }, { "shortCut": "[白眼]", "emotionId": "25.png", "url": "https://zos.alipayobjects.com/rmsportal/GOmumXXrfpnphWy.png" }, { "shortCut": "[吐血]", "emotionId": "26.png", "url": "https://zos.alipayobjects.com/rmsportal/HhVFvCbWdDYsnDR.png" }, { "shortCut": "[大笑]", "emotionId": "27.png", "url": "https://zos.alipayobjects.com/rmsportal/WyNriyyOVOVnzoM.png" }, { "shortCut": "[尴尬]", "emotionId": "28.png", "url": "https://zos.alipayobjects.com/rmsportal/kJXaqufOrVJOvPT.png" }, { "shortCut": "[困]", "emotionId": "29.png", "url": "https://zos.alipayobjects.com/rmsportal/EfICOMkCEcBRSgc.png" }, { "shortCut": "[惊恐]", "emotionId": "30.png", "url": "https://zos.alipayobjects.com/rmsportal/zqYBpYqQLVrUZkn.png" }, { "shortCut": "[流汗]", "emotionId": "31.png", "url": "https://zos.alipayobjects.com/rmsportal/zyjnlBbdiKfvdPR.png" }, { "shortCut": "[憨笑]", "emotionId": "32.png", "url": "https://zos.alipayobjects.com/rmsportal/WcwFOGwwwHnorsk.png" }, { "shortCut": "[休闲]", "emotionId": "33.png", "url": "https://zos.alipayobjects.com/rmsportal/VarXmGRDyBIQKPE.png" }, { "shortCut": "[大哭]", "emotionId": "34.png", "url": "https://zos.alipayobjects.com/rmsportal/HBcShjHuaabLObv.png" }, { "shortCut": "[奋斗]", "emotionId": "35.png", "url": "https://zos.alipayobjects.com/rmsportal/mrrZUGBUENxRwaX.png" }, { "shortCut": "[咒骂]", "emotionId": "36.png", "url": "https://zos.alipayobjects.com/rmsportal/PLepKrBdocStpYB.png" }, { "shortCut": "[疑问]", "emotionId": "37.png", "url": "https://zos.alipayobjects.com/rmsportal/NfoHbDLQwnmnBWi.png" }, { "shortCut": "[晕]", "emotionId": "38.png", "url": "https://zos.alipayobjects.com/rmsportal/WnPQnSPEseIPQiY.png" }, { "shortCut": "[震惊]", "emotionId": "39.png", "url": "https://zos.alipayobjects.com/rmsportal/rMqvUHRICnzJQlw.png" }, { "shortCut": "[疯了]", "emotionId": "40.png", "url": "https://zos.alipayobjects.com/rmsportal/oXYPMTgSubdgmFc.png" }, { "shortCut": "[嘘]", "emotionId": "41.png", "url": "https://zos.alipayobjects.com/rmsportal/cjnvaNigJqnZRya.png" }, { "shortCut": "[露齿笑]", "emotionId": "42.png", "url": "https://zos.alipayobjects.com/rmsportal/GdVlQdDruOqCbIR.png" }, { "shortCut": "[衰]", "emotionId": "43.png", "url": "https://zos.alipayobjects.com/rmsportal/tqpwQOHqlItVfyR.png" }, { "shortCut": "[骷髅]", "emotionId": "44.png", "url": "https://zos.alipayobjects.com/rmsportal/eCTIoLckXCuzGvR.png" }, { "shortCut": "[骂人]", "emotionId": "45.png", "url": "https://zos.alipayobjects.com/rmsportal/InLZLpWShNQmjND.png" }, { "shortCut": "[睡]", "emotionId": "46.png", "url": "https://zos.alipayobjects.com/rmsportal/MkHGbKjquMKiqwl.png" }, { "shortCut": "[再见]", "emotionId": "47.png", "url": "https://zos.alipayobjects.com/rmsportal/TGvpOwPFfPkXZMl.png" }, { "shortCut": "[笑哭]", "emotionId": "48.png", "url": "https://zos.alipayobjects.com/rmsportal/hbRPyXlOhaVjOvU.png" }, { "shortCut": "[擦汗]", "emotionId": "49.png", "url": "https://zos.alipayobjects.com/rmsportal/JgRiaQKrLZbpAiU.png" }, { "shortCut": "[飞吻]", "emotionId": "50.png", "url": "https://zos.alipayobjects.com/rmsportal/GkTJCkCBzhoeVfw.png" }, { "shortCut": "[爱慕]", "emotionId": "51.png", "url": "https://zos.alipayobjects.com/rmsportal/QzTzrcSIRDdOyPk.png" }, { "shortCut": "[惊讶]", "emotionId": "52.png", "url": "https://zos.alipayobjects.com/rmsportal/bfpHHVhSHDFlkHZ.png" }, { "shortCut": "[糗大了]", "emotionId": "53.png", "url": "https://zos.alipayobjects.com/rmsportal/mtFwTaxlhOtoBqf.png" }, { "shortCut": "[坏笑]", "emotionId": "54.png", "url": "https://zos.alipayobjects.com/rmsportal/CucqDBTyqczcxnr.png" }, { "shortCut": "[左哼哼]", "emotionId": "55.png", "url": "https://zos.alipayobjects.com/rmsportal/hHtPxVRvcAVXMbD.png" }, { "shortCut": "[右哼哼]", "emotionId": "56.png", "url": "https://zos.alipayobjects.com/rmsportal/wVsViSAnjBYCZwp.png" }, { "shortCut": "[哈欠]", "emotionId": "57.png", "url": "https://zos.alipayobjects.com/rmsportal/dGVjMbIzSsufjWB.png" }, { "shortCut": "[吐]", "emotionId": "58.png", "url": "https://zos.alipayobjects.com/rmsportal/eIUmtPjvYFzRhEM.png" }, { "shortCut": "[委屈]", "emotionId": "59.png", "url": "https://zos.alipayobjects.com/rmsportal/tPZryHXyBWjrcgD.png" }, { "shortCut": "[微笑]", "emotionId": "60.png", "url": "https://zos.alipayobjects.com/rmsportal/mNLrqfprwqyKDYs.png" }, { "shortCut": "[快哭了]", "emotionId": "61.png", "url": "https://zos.alipayobjects.com/rmsportal/LSwQMsXkpbaDSGF.png" }, { "shortCut": "[对不起]", "emotionId": "62.png", "url": "https://zos.alipayobjects.com/rmsportal/TWoNnzbOaawpJlo.png" }, { "shortCut": "[邪恶]", "emotionId": "63.png", "url": "https://zos.alipayobjects.com/rmsportal/bjWoMtInUeTgiAQ.png" }, { "shortCut": "[傲慢]", "emotionId": "64.png", "url": "https://zos.alipayobjects.com/rmsportal/hqbKachDgaSevYf.png" }, { "shortCut": "[安慰]", "emotionId": "65.png", "url": "https://zos.alipayobjects.com/rmsportal/JsKFHhOxVrvrzsl.png" }, { "shortCut": "[吓]", "emotionId": "66.png", "url": "https://zos.alipayobjects.com/rmsportal/frXVTvJeeDNAgok.png" }, { "shortCut": "[口罩]", "emotionId": "67.png", "url": "https://zos.alipayobjects.com/rmsportal/mAYxBLqKqaPLbwE.png" }, { "shortCut": "[害羞]", "emotionId": "68.png", "url": "https://zos.alipayobjects.com/rmsportal/SJoCgDcNDkhvNRT.png" }, { "shortCut": "[思考]", "emotionId": "69.png", "url": "https://zos.alipayobjects.com/rmsportal/WEHZPLivIjpnyFL.png" }, { "shortCut": "[财迷]", "emotionId": "70.png", "url": "https://zos.alipayobjects.com/rmsportal/LIAzafnAJbbIPdX.png" }, { "shortCut": "[饥饿]", "emotionId": "71.png", "url": "https://zos.alipayobjects.com/rmsportal/BcOjgkYeyyfsfLr.png" }, { "shortCut": "[享受]", "emotionId": "72.png", "url": "https://zos.alipayobjects.com/rmsportal/hLEUEmjIonXohGV.png" }, { "shortCut": "[天使]", "emotionId": "73.png", "url": "https://zos.alipayobjects.com/rmsportal/GlmPskLxDtGGGHc.png" }, { "shortCut": "[调皮]", "emotionId": "74.png", "url": "https://zos.alipayobjects.com/rmsportal/FHxHsChxJmxHbVO.png" }, { "shortCut": "[加油]", "emotionId": "75.png", "url": "https://zos.alipayobjects.com/rmsportal/emVDTUMZHQJbvjy.png" }, { "shortCut": "[恭喜发财]", "emotionId": "76.png", "url": "https://zos.alipayobjects.com/rmsportal/XBkDupINJAbdIHt.png" }, { "shortCut": "[好主意]", "emotionId": "77.png", "url": "https://zos.alipayobjects.com/rmsportal/kSwgUeAhVXuGXll.png" }, { "shortCut": "[呼叫]", "emotionId": "78.png", "url": "https://zos.alipayobjects.com/rmsportal/LhmtbMnFDniPbrR.png" }, { "shortCut": "[酷]", "emotionId": "79.png", "url": "https://zos.alipayobjects.com/rmsportal/jvzslCUtlQrKKfI.png" }, { "shortCut": "[发呆]", "emotionId": "80.png", "url": "https://zos.alipayobjects.com/rmsportal/zlXTmChIDknMEcV.png" }, { "shortCut": "[牛X]", "emotionId": "81.png", "url": "https://zos.alipayobjects.com/rmsportal/HvnrGlzCryMHNLB.png" }, { "shortCut": "[老大]", "emotionId": "82.png", "url": "https://zos.alipayobjects.com/rmsportal/fYaDlPjHyznwlfr.png" }, { "shortCut": "[怀疑]", "emotionId": "83.png", "url": "https://zos.alipayobjects.com/rmsportal/RyEGrLaWZOCoqPU.png" }, { "shortCut": "[背]", "emotionId": "84.png", "url": "https://zos.alipayobjects.com/rmsportal/BLzjIrmHKtNxShz.png" }, { "shortCut": "[生病]", "emotionId": "85.png", "url": "https://zos.alipayobjects.com/rmsportal/SKeDExjRfQSKvFj.png" }, { "shortCut": "[没办法]", "emotionId": "86.png", "url": "https://zos.alipayobjects.com/rmsportal/VvvvMcjDXTqacOD.png" }, { "shortCut": "[拥抱]", "emotionId": "87.png", "url": "https://zos.alipayobjects.com/rmsportal/HHLKqWmHaVdCuaL.png" }, { "shortCut": "[闪电]", "emotionId": "88.png", "url": "https://zos.alipayobjects.com/rmsportal/JZbTseePiFKHsLc.png" }, { "shortCut": "[月亮]", "emotionId": "89.png", "url": "https://zos.alipayobjects.com/rmsportal/xOIMRQARlyzuTKU.png" }, { "shortCut": "[太阳]", "emotionId": "90.png", "url": "https://zos.alipayobjects.com/rmsportal/LTjZIbkgBtWNaFI.png" }, { "shortCut": "[强]", "emotionId": "91.png", "url": "https://zos.alipayobjects.com/rmsportal/ukFQAUiaIEiPwin.png" }, { "shortCut": "[弱]", "emotionId": "92.png", "url": "https://zos.alipayobjects.com/rmsportal/qFmxvdIDSMwEBIb.png" }, { "shortCut": "[握手]", "emotionId": "93.png", "url": "https://zos.alipayobjects.com/rmsportal/wLAaaIrIaVwibtB.png" }, { "shortCut": "[胜利]", "emotionId": "94.png", "url": "https://zos.alipayobjects.com/rmsportal/CAZXOEhtiXVpXFn.png" }, { "shortCut": "[抱拳]", "emotionId": "95.png", "url": "https://zos.alipayobjects.com/rmsportal/eMdWkHGtgeSmXpM.png" }, { "shortCut": "[勾引]", "emotionId": "96.png", "url": "https://zos.alipayobjects.com/rmsportal/WHfFEKvDZIKwcVW.png" }, { "shortCut": "[拳头]", "emotionId": "97.png", "url": "https://zos.alipayobjects.com/rmsportal/vXbGiYGaKgYTPkW.png" }, { "shortCut": "[差劲]", "emotionId": "98.png", "url": "https://zos.alipayobjects.com/rmsportal/CiuNFtWnqAZzjWP.png" }, { "shortCut": "[我爱你]", "emotionId": "99.png", "url": "https://zos.alipayobjects.com/rmsportal/YVsnANcNnxlIvIt.png" }, { "shortCut": "[NO]", "emotionId": "100.png", "url": "https://zos.alipayobjects.com/rmsportal/yTiPQAkmQkfsBUG.png" }, { "shortCut": "[OK]", "emotionId": "101.png", "url": "https://zos.alipayobjects.com/rmsportal/MWhlaZHAVuHLLvQ.png" }, { "shortCut": "[鼓掌]", "emotionId": "102.png", "url": "https://zos.alipayobjects.com/rmsportal/tLBIQWjUFWlEVxz.png" }, { "shortCut": "[合十]", "emotionId": "103.png", "url": "https://zos.alipayobjects.com/rmsportal/pxuPMSVdSOOZYgR.png" }, { "shortCut": "[玫瑰]", "emotionId": "104.png", "url": "https://zos.alipayobjects.com/rmsportal/yNgGDbVoWGjKLJB.png" }, { "shortCut": "[凋谢]", "emotionId": "105.png", "url": "https://zos.alipayobjects.com/rmsportal/DCOuiPptMPJvhTY.png" }, { "shortCut": "[嘴唇]", "emotionId": "106.png", "url": "https://zos.alipayobjects.com/rmsportal/rzVhzlyzcequcxt.png" }, { "shortCut": "[爱心]", "emotionId": "107.png", "url": "https://zos.alipayobjects.com/rmsportal/FOWdQFAgJCagfwL.png" }, { "shortCut": "[心碎]", "emotionId": "108.png", "url": "https://zos.alipayobjects.com/rmsportal/YECpRjqUApECeyS.png" }, { "shortCut": "[红包]", "emotionId": "109.png", "url": "https://zos.alipayobjects.com/rmsportal/dkldwINCjaPAPqS.png" }, { "shortCut": "[菜刀]", "emotionId": "110.png", "url": "https://zos.alipayobjects.com/rmsportal/EVloHTfgUYpCRDQ.png" }, { "shortCut": "[咖啡]", "emotionId": "111.png", "url": "https://zos.alipayobjects.com/rmsportal/cWQscSDATasrNrR.png" }, { "shortCut": "[饭]", "emotionId": "112.png", "url": "https://zos.alipayobjects.com/rmsportal/czqnAeEAWPocNtX.png" }, { "shortCut": "[猪头]", "emotionId": "113.png", "url": "https://zos.alipayobjects.com/rmsportal/zyhsOospdOClVod.png" }, { "shortCut": "[足球]", "emotionId": "114.png", "url": "https://zos.alipayobjects.com/rmsportal/HcJgzJEURpsuLsa.png" }];
	exports["default"] = emojis;
	module.exports = exports['default'];

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = function (props) {
	  var _classname;
	
	  var entityKey = props.entityKey;
	
	  var data = _draftJs.Entity.get(entityKey).getData();
	  var emoji = data.emoji;
	
	  var className = (0, _classnames2["default"])((_classname = {}, _defineProperty(_classname, 'emoji', true), _defineProperty(_classname, 'emoji-' + emoji.shortCut, true), _classname));
	  var emojiStyle = _extends({}, iconStyle, { backgroundImage: 'url(\'' + emoji.url + '\')' });
	  return _react2["default"].createElement(
	    'span',
	    { style: emojiStyle, contentEditable: false, className: className },
	    props.children
	  );
	};
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(391);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _draftJs = __webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var emojiRex = /\[([\u4e00-\u9fa5])+\]/g;
	
	var iconStyle = {
	  letterSpacing: 32,
	  width: 32,
	  fontSize: 32,
	  height: 32,
	  display: 'inline-block',
	  backgroundSize: '100%',
	  overflow: 'hidden'
	};
	
	module.exports = exports['default'];

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _draftJs = __webpack_require__(46);
	
	var _emojisList = __webpack_require__(562);
	
	var _emojisList2 = _interopRequireDefault(_emojisList);
	
	var _util = __webpack_require__(559);
	
	var _DraftOffsetKey = __webpack_require__(252);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var emojiMap = {};
	
	_emojisList2["default"].forEach(function (emoji) {
	  var shortCut = emoji.shortCut;
	
	  emojiMap[shortCut] = emoji;
	});
	
	var EmojiRaw = function (_React$Component) {
	  _inherits(EmojiRaw, _React$Component);
	
	  function EmojiRaw() {
	    _classCallCheck(this, EmojiRaw);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  EmojiRaw.prototype.componentDidMount = function componentDidMount() {
	    var _props = this.props;
	    var decoratedText = _props.decoratedText;
	    var callbacks = _props.callbacks;
	    var offsetKey = _props.offsetKey;
	    var getEditorState = callbacks.getEditorState;
	    var setEditorState = callbacks.setEditorState;
	
	    var editorState = getEditorState();
	    var contentState = editorState.getCurrentContent();
	    var blockMap = contentState.getBlockMap();
	
	    var _decode = (0, _DraftOffsetKey.decode)(offsetKey);
	
	    var blockKey = _decode.blockKey;
	    var decoratorKey = _decode.decoratorKey;
	    var leafKey = _decode.leafKey;
	
	    var leaf = editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);
	    if (!leaf) {
	      return false;
	    }
	    var startKey = leaf.get('start');
	    var endKey = leaf.get('end');
	    console.log('EmojiRaw', startKey, endKey);
	    var selection = _draftJs.SelectionState.createEmpty();
	    var updatedSelection = selection.merge({
	      anchorKey: blockKey,
	      anchorOffset: startKey,
	      focusKey: blockKey,
	      focusOffset: endKey
	    });
	    if (emojiMap.hasOwnProperty(decoratedText)) {
	      var newEditorState = (0, _util.replaceEntity)(editorState, updatedSelection, ' ', (0, _util.createEntity)('emoji', { emoji: emojiMap[decoratedText], "export": _util.exportEntity }));
	
	      setEditorState(_draftJs.EditorState.moveFocusToEnd(newEditorState));
	    }
	    // if (emojiMap.hasOwnProperty(decoratedText)) {
	    //   Entity.replaceData(entityKey, emojiMap[decoratedText]);
	    // }
	  };
	
	  EmojiRaw.prototype.render = function render() {
	    return _react2["default"].createElement(
	      'span',
	      { style: { backgroundColor: 'red' } },
	      this.props.children
	    );
	  };
	
	  return EmojiRaw;
	}(_react2["default"].Component);
	
	exports["default"] = EmojiRaw;
	module.exports = exports['default'];

/***/ }),
/* 565 */
2
]);
//# sourceMappingURL=controllered.js.map