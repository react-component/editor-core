webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(327);


/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(166);
	
	var _Bold = __webpack_require__(307);
	
	var _Bold2 = _interopRequireDefault(_Bold);
	
	var _Italic = __webpack_require__(308);
	
	var _Italic2 = _interopRequireDefault(_Italic);
	
	var _Spilit = __webpack_require__(311);
	
	var _Spilit2 = _interopRequireDefault(_Spilit);
	
	var _Underline = __webpack_require__(312);
	
	var _Underline2 = _interopRequireDefault(_Underline);
	
	var _StrikeThrough = __webpack_require__(313);
	
	var _StrikeThrough2 = _interopRequireDefault(_StrikeThrough);
	
	var _SuperScript = __webpack_require__(314);
	
	var _SuperScript2 = _interopRequireDefault(_SuperScript);
	
	var _SubScript = __webpack_require__(315);
	
	var _SubScript2 = _interopRequireDefault(_SubScript);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	// export this package's api
	
	var EditorPluginBasicStyle = (0, _immutable.List)([_Bold2["default"], _Italic2["default"], _Spilit2["default"], _Underline2["default"], _StrikeThrough2["default"], _SuperScript2["default"], _SubScript2["default"]]);
	exports["default"] = EditorPluginBasicStyle;
	module.exports = exports['default'];

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	var BoldStyle = {
	    constructor: function constructor() {
	        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        return {
	            name: 'bold',
	            component: React.createElement('span', { className: 'editor-icon editor-icon-bold' }),
	            callbacks: {}
	        };
	    },
	    config: {}
	};
	exports["default"] = BoldStyle;
	module.exports = exports['default'];

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames2 = __webpack_require__(309);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(310);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var ItalicStyle = {
	    constructor: function constructor() {
	        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var toggleStyle = (0, _utils.getToggleStyleFunc)(callbacks);
	        return {
	            name: 'italic',
	            callbacks: callbacks,
	            component: function component(props) {
	                var _classnames;
	
	                var currentStyle = callbacks.getEditorState().getCurrentInlineStyle();
	                console.log('>> currentStyle', currentStyle);
	                var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-italic', true), _defineProperty(_classnames, 'active', currentStyle.has('ITALIC')), _classnames));
	                return React.createElement('span', { onMouseDown: function onMouseDown() {
	                        return toggleStyle('ITALIC');
	                    }, className: classNames });
	            }
	        };
	    },
	    config: {}
	};
	exports["default"] = ItalicStyle;
	module.exports = exports['default'];

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

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


/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.noop = noop;
	exports.getSelectedBlock = getSelectedBlock;
	exports.getToggleStyleFunc = getToggleStyleFunc;
	exports.findEntities = findEntities;
	exports.getSelectionText = getSelectionText;
	exports.getToggleBlockFunc = getToggleBlockFunc;
	exports.getCurrentEntity = getCurrentEntity;
	
	var _draftJs = __webpack_require__(163);
	
	function noop(args) {}
	function getSelectedBlock(editorState) {
	    var currentContent = editorState.getCurrentContent();
	    var selection = editorState.getSelection();
	    return currentContent.getBlockForKey(selection.getStartKey());
	}
	function getToggleStyleFunc(callbacks) {
	    return function toggleStyle(styleName) {
	        var getEditorState = callbacks.getEditorState;
	        var setEditorState = callbacks.setEditorState;
	
	        setEditorState(_draftJs.RichUtils.toggleInlineStyle(getEditorState(), styleName));
	    };
	}
	function findEntities(entityType) {
	    return function findEntitiesFunc(contentBlock, callback) {
	        contentBlock.findEntityRanges(function (character) {
	            var entityKey = character.getEntity();
	            return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === entityType;
	        }, callback);
	    };
	}
	function getSelectionText(editorState, selection) {
	    var anchorKey = selection.getAnchorKey();
	    var currentContent = editorState.getCurrentContent();
	    var currentBlock = currentContent.getBlockForKey(anchorKey);
	    return currentBlock.getText();
	}
	function getToggleBlockFunc(callbacks) {
	    return function toggleBlock(entityType) {
	        var entityMode = arguments.length <= 1 || arguments[1] === undefined ? 'MUTABLE' : arguments[1];
	        var getEditorState = callbacks.getEditorState;
	        var setEditorState = callbacks.setEditorState;
	
	        var editorState = getEditorState();
	        var selection = editorState.getSelection();
	        var entityKey = null;
	        var currentEntity = getCurrentEntity(editorState);
	        if (!currentEntity || _draftJs.Entity.get(currentEntity).getType() !== entityType) {
	            entityKey = _draftJs.Entity.create(entityType, entityMode, {});
	        }
	        var replacedContent = _draftJs.Modifier.applyEntity(editorState.getCurrentContent(), selection, entityKey);
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
	    var block = getSelectedBlock(editorState);
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

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function noop(args) {}
	;
	var Split = {
	    constructor: function constructor() {
	        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var callbacks = {
	            getEditorState: noop,
	            setEditorState: noop
	        };
	        return {
	            name: '|',
	            callbacks: callbacks,
	            component: React.createElement('span', { className: 'editor-icon-split' })
	        };
	    },
	
	    config: {}
	};
	exports["default"] = Split;
	module.exports = exports['default'];

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames2 = __webpack_require__(309);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(310);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var UnderlineStyle = {
	    constructor: function constructor() {
	        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var toggleStyle = (0, _utils.getToggleStyleFunc)(callbacks);
	        return {
	            name: 'underline',
	            callbacks: callbacks,
	            component: function component(props) {
	                var _classnames;
	
	                var currentStyle = callbacks.getEditorState().getCurrentInlineStyle();
	                console.log('>> currentStyle', currentStyle);
	                var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-underline', true), _defineProperty(_classnames, 'active', currentStyle.has('UNDERLINE')), _classnames));
	                return React.createElement('span', { onMouseDown: function onMouseDown() {
	                        return toggleStyle('UNDERLINE');
	                    }, className: classNames });
	            }
	        };
	    },
	    config: {}
	};
	exports["default"] = UnderlineStyle;
	module.exports = exports['default'];

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames2 = __webpack_require__(309);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _utils = __webpack_require__(310);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var StrikeThrough = {
	    constructor: function constructor() {
	        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var toggleStyle = (0, _utils.getToggleStyleFunc)(callbacks);
	        return {
	            name: 'strikethrough',
	            callbacks: callbacks,
	            component: function component(props) {
	                var _classnames;
	
	                var currentStyle = callbacks.getEditorState().getCurrentInlineStyle();
	                console.log('>> currentStyle', currentStyle);
	                var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-strikethrough', true), _defineProperty(_classnames, 'active', currentStyle.has('STRIKETHROUGH')), _classnames));
	                return React.createElement('span', { onMouseDown: function onMouseDown() {
	                        return toggleStyle('STRIKETHROUGH');
	                    }, className: classNames });
	            }
	        };
	    },
	    config: {}
	};
	exports["default"] = StrikeThrough;
	module.exports = exports['default'];

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames2 = __webpack_require__(309);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _draftJs = __webpack_require__(163);
	
	var _utils = __webpack_require__(310);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var SuperScript = {
	    constructor: function constructor() {
	        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var toggleBlock = (0, _utils.getToggleBlockFunc)(callbacks);
	        return {
	            name: 'superscript',
	            callbacks: callbacks,
	            decorators: [{
	                strategy: (0, _utils.findEntities)('superscript'),
	                component: function component(props) {
	                    return React.createElement(
	                        'sup',
	                        null,
	                        props.children
	                    );
	                }
	            }],
	            component: function component(props) {
	                var _classnames;
	
	                var editorState = callbacks.getEditorState();
	                var currentEntityKey = (0, _utils.getCurrentEntity)(editorState);
	                var isSuperScript = currentEntityKey ? _draftJs.Entity.get(currentEntityKey).getType() === 'superscript' : false;
	                var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-superscript', true), _defineProperty(_classnames, 'active', isSuperScript), _classnames));
	                return React.createElement('span', { onMouseDown: function onMouseDown() {
	                        return toggleBlock('superscript');
	                    }, className: classNames });
	            }
	        };
	    },
	    config: {}
	};
	exports["default"] = SuperScript;
	module.exports = exports['default'];

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(6);
	
	var React = _interopRequireWildcard(_react);
	
	var _classnames2 = __webpack_require__(309);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _draftJs = __webpack_require__(163);
	
	var _utils = __webpack_require__(310);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var SubScript = {
	    constructor: function constructor() {
	        var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var callbacks = {
	            getEditorState: _utils.noop,
	            setEditorState: _utils.noop
	        };
	        var toggleBlock = (0, _utils.getToggleBlockFunc)(callbacks);
	        return {
	            name: 'subscript',
	            callbacks: callbacks,
	            decorators: [{
	                strategy: (0, _utils.findEntities)('subscript'),
	                component: function component(props) {
	                    return React.createElement(
	                        'sub',
	                        null,
	                        props.children
	                    );
	                }
	            }],
	            component: function component(props) {
	                var _classnames;
	
	                var editorState = callbacks.getEditorState();
	                var currentEntityKey = (0, _utils.getCurrentEntity)(editorState);
	                var isSuperScript = currentEntityKey ? _draftJs.Entity.get(currentEntityKey).getType() === 'subscript' : false;
	                var classNames = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-subscript', true), _defineProperty(_classnames, 'active', isSuperScript), _classnames));
	                return React.createElement('span', { onMouseDown: function onMouseDown() {
	                        return toggleBlock('subscript');
	                    }, className: classNames });
	            }
	        };
	    },
	    config: {}
	};
	exports["default"] = SubScript;
	module.exports = exports['default'];

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EditorPluginEmoji = __webpack_require__(317);
	
	var _EditorPluginEmoji2 = _interopRequireDefault(_EditorPluginEmoji);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _EditorPluginEmoji2["default"]; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(309);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _draftJs = __webpack_require__(163);
	
	var _util = __webpack_require__(318);
	
	var _EmojiButton = __webpack_require__(319);
	
	var _EmojiButton2 = _interopRequireDefault(_EmojiButton);
	
	var _EmojiIcon = __webpack_require__(322);
	
	var _EmojiIcon2 = _interopRequireDefault(_EmojiIcon);
	
	var _EmojiRaw = __webpack_require__(323);
	
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
	      setEditorState: noop
	    };
	    function pickEmoji(emoji) {
	      var editorState = callbacks.getEditorState();
	      callbacks.setEditorState((0, _util.insertEntity)(editorState, 'emoji', { emoji: emoji, "export": _util.exportEntity }));
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

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replaceEntity = replaceEntity;
	exports.createEntity = createEntity;
	exports.insertEntity = insertEntity;
	exports.exportEntity = exportEntity;
	
	var _draftJs = __webpack_require__(163);
	
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

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(309);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _EmojiPicker = __webpack_require__(320);
	
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
	      e.preventDefault();
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

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _emojisList = __webpack_require__(321);
	
	var _emojisList2 = _interopRequireDefault(_emojisList);
	
	var _classnames3 = __webpack_require__(309);
	
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

/***/ },

/***/ 321:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var emojis = [{ "shortCut": "[愉快]", "emotionId": "01.png", "url": "https://zos.alipayobjects.com/rmsportal/vywkIryvSnQiynQ.png" }, { "shortCut": "[撇嘴]", "emotionId": "02.png", "url": "https://zos.alipayobjects.com/rmsportal/drSYuckhTfZZcwD.png" }, { "shortCut": "[色]", "emotionId": "03.png", "url": "https://zos.alipayobjects.com/rmsportal/TipqhdZhZZwoGZm.png" }, { "shortCut": "[傻笑]", "emotionId": "04.png", "url": "https://zos.alipayobjects.com/rmsportal/cVHjmaeIdVqDemq.png" }, { "shortCut": "[得意]", "emotionId": "05.png", "url": "https://zos.alipayobjects.com/rmsportal/ZARnJThSNEtakfI.png" }, { "shortCut": "[流泪]", "emotionId": "06.png", "url": "https://zos.alipayobjects.com/rmsportal/MZKUHuFnZvpQoRQ.png" }, { "shortCut": "[色眯眯]", "emotionId": "07.png", "url": "https://zos.alipayobjects.com/rmsportal/WhvVecdOxnujPpz.png" }, { "shortCut": "[闭嘴]", "emotionId": "08.png", "url": "https://zos.alipayobjects.com/rmsportal/PnKrzWJIKuoVmuq.png" }, { "shortCut": "[可怜]", "emotionId": "09.png", "url": "https://zos.alipayobjects.com/rmsportal/YdWtgNSDTUPhjfi.png" }, { "shortCut": "[亲亲]", "emotionId": "10.png", "url": "https://zos.alipayobjects.com/rmsportal/vxfbQOcuzBuzWqJ.png" }, { "shortCut": "[无聊]", "emotionId": "11.png", "url": "https://zos.alipayobjects.com/rmsportal/OjIYEGtOeywXLIK.png" }, { "shortCut": "[发怒]", "emotionId": "12.png", "url": "https://zos.alipayobjects.com/rmsportal/FxWMNcblzixUzka.png" }, { "shortCut": "[做鬼脸]", "emotionId": "13.png", "url": "https://zos.alipayobjects.com/rmsportal/FxOKNcADwgRqgqv.png" }, { "shortCut": "[呲牙]", "emotionId": "14.png", "url": "https://zos.alipayobjects.com/rmsportal/gRDziqJzJjuADqO.png" }, { "shortCut": "[难过]", "emotionId": "15.png", "url": "https://zos.alipayobjects.com/rmsportal/odgrADoukpuzCGr.png" }, { "shortCut": "[抢劫]", "emotionId": "16.png", "url": "https://zos.alipayobjects.com/rmsportal/UpyCjmqpRzRuSPa.png" }, { "shortCut": "[抠鼻]", "emotionId": "17.png", "url": "https://zos.alipayobjects.com/rmsportal/CHoSKlMvpBmtFms.png" }, { "shortCut": "[冷汗]", "emotionId": "18.png", "url": "https://zos.alipayobjects.com/rmsportal/IkkQuIgRvOLICHb.png" }, { "shortCut": "[阴险]", "emotionId": "19.png", "url": "https://zos.alipayobjects.com/rmsportal/NaWqSofezRZkKiA.png" }, { "shortCut": "[竖中指]", "emotionId": "20.png", "url": "https://zos.alipayobjects.com/rmsportal/sBFNWbgMbPiikNg.png" }, { "shortCut": "[鄙视]", "emotionId": "21.png", "url": "https://zos.alipayobjects.com/rmsportal/aVsPdQLRHtFRcNn.png" }, { "shortCut": "[抓狂]", "emotionId": "22.png", "url": "https://zos.alipayobjects.com/rmsportal/yrgxgixgWrliWpp.png" }, { "shortCut": "[偷笑]", "emotionId": "23.png", "url": "https://zos.alipayobjects.com/rmsportal/jGxyVvDtPFlUHtv.png" }, { "shortCut": "[敲打]", "emotionId": "24.png", "url": "https://zos.alipayobjects.com/rmsportal/noYMnGVgHZnAieY.png" }, { "shortCut": "[白眼]", "emotionId": "25.png", "url": "https://zos.alipayobjects.com/rmsportal/GOmumXXrfpnphWy.png" }, { "shortCut": "[吐血]", "emotionId": "26.png", "url": "https://zos.alipayobjects.com/rmsportal/HhVFvCbWdDYsnDR.png" }, { "shortCut": "[大笑]", "emotionId": "27.png", "url": "https://zos.alipayobjects.com/rmsportal/WyNriyyOVOVnzoM.png" }, { "shortCut": "[尴尬]", "emotionId": "28.png", "url": "https://zos.alipayobjects.com/rmsportal/kJXaqufOrVJOvPT.png" }, { "shortCut": "[困]", "emotionId": "29.png", "url": "https://zos.alipayobjects.com/rmsportal/EfICOMkCEcBRSgc.png" }, { "shortCut": "[惊恐]", "emotionId": "30.png", "url": "https://zos.alipayobjects.com/rmsportal/zqYBpYqQLVrUZkn.png" }, { "shortCut": "[流汗]", "emotionId": "31.png", "url": "https://zos.alipayobjects.com/rmsportal/zyjnlBbdiKfvdPR.png" }, { "shortCut": "[憨笑]", "emotionId": "32.png", "url": "https://zos.alipayobjects.com/rmsportal/WcwFOGwwwHnorsk.png" }, { "shortCut": "[休闲]", "emotionId": "33.png", "url": "https://zos.alipayobjects.com/rmsportal/VarXmGRDyBIQKPE.png" }, { "shortCut": "[大哭]", "emotionId": "34.png", "url": "https://zos.alipayobjects.com/rmsportal/HBcShjHuaabLObv.png" }, { "shortCut": "[奋斗]", "emotionId": "35.png", "url": "https://zos.alipayobjects.com/rmsportal/mrrZUGBUENxRwaX.png" }, { "shortCut": "[咒骂]", "emotionId": "36.png", "url": "https://zos.alipayobjects.com/rmsportal/PLepKrBdocStpYB.png" }, { "shortCut": "[疑问]", "emotionId": "37.png", "url": "https://zos.alipayobjects.com/rmsportal/NfoHbDLQwnmnBWi.png" }, { "shortCut": "[晕]", "emotionId": "38.png", "url": "https://zos.alipayobjects.com/rmsportal/WnPQnSPEseIPQiY.png" }, { "shortCut": "[震惊]", "emotionId": "39.png", "url": "https://zos.alipayobjects.com/rmsportal/rMqvUHRICnzJQlw.png" }, { "shortCut": "[疯了]", "emotionId": "40.png", "url": "https://zos.alipayobjects.com/rmsportal/oXYPMTgSubdgmFc.png" }, { "shortCut": "[嘘]", "emotionId": "41.png", "url": "https://zos.alipayobjects.com/rmsportal/cjnvaNigJqnZRya.png" }, { "shortCut": "[露齿笑]", "emotionId": "42.png", "url": "https://zos.alipayobjects.com/rmsportal/GdVlQdDruOqCbIR.png" }, { "shortCut": "[衰]", "emotionId": "43.png", "url": "https://zos.alipayobjects.com/rmsportal/tqpwQOHqlItVfyR.png" }, { "shortCut": "[骷髅]", "emotionId": "44.png", "url": "https://zos.alipayobjects.com/rmsportal/eCTIoLckXCuzGvR.png" }, { "shortCut": "[骂人]", "emotionId": "45.png", "url": "https://zos.alipayobjects.com/rmsportal/InLZLpWShNQmjND.png" }, { "shortCut": "[睡]", "emotionId": "46.png", "url": "https://zos.alipayobjects.com/rmsportal/MkHGbKjquMKiqwl.png" }, { "shortCut": "[再见]", "emotionId": "47.png", "url": "https://zos.alipayobjects.com/rmsportal/TGvpOwPFfPkXZMl.png" }, { "shortCut": "[笑哭]", "emotionId": "48.png", "url": "https://zos.alipayobjects.com/rmsportal/hbRPyXlOhaVjOvU.png" }, { "shortCut": "[擦汗]", "emotionId": "49.png", "url": "https://zos.alipayobjects.com/rmsportal/JgRiaQKrLZbpAiU.png" }, { "shortCut": "[飞吻]", "emotionId": "50.png", "url": "https://zos.alipayobjects.com/rmsportal/GkTJCkCBzhoeVfw.png" }, { "shortCut": "[爱慕]", "emotionId": "51.png", "url": "https://zos.alipayobjects.com/rmsportal/QzTzrcSIRDdOyPk.png" }, { "shortCut": "[惊讶]", "emotionId": "52.png", "url": "https://zos.alipayobjects.com/rmsportal/bfpHHVhSHDFlkHZ.png" }, { "shortCut": "[糗大了]", "emotionId": "53.png", "url": "https://zos.alipayobjects.com/rmsportal/mtFwTaxlhOtoBqf.png" }, { "shortCut": "[坏笑]", "emotionId": "54.png", "url": "https://zos.alipayobjects.com/rmsportal/CucqDBTyqczcxnr.png" }, { "shortCut": "[左哼哼]", "emotionId": "55.png", "url": "https://zos.alipayobjects.com/rmsportal/hHtPxVRvcAVXMbD.png" }, { "shortCut": "[右哼哼]", "emotionId": "56.png", "url": "https://zos.alipayobjects.com/rmsportal/wVsViSAnjBYCZwp.png" }, { "shortCut": "[哈欠]", "emotionId": "57.png", "url": "https://zos.alipayobjects.com/rmsportal/dGVjMbIzSsufjWB.png" }, { "shortCut": "[吐]", "emotionId": "58.png", "url": "https://zos.alipayobjects.com/rmsportal/eIUmtPjvYFzRhEM.png" }, { "shortCut": "[委屈]", "emotionId": "59.png", "url": "https://zos.alipayobjects.com/rmsportal/tPZryHXyBWjrcgD.png" }, { "shortCut": "[微笑]", "emotionId": "60.png", "url": "https://zos.alipayobjects.com/rmsportal/mNLrqfprwqyKDYs.png" }, { "shortCut": "[快哭了]", "emotionId": "61.png", "url": "https://zos.alipayobjects.com/rmsportal/LSwQMsXkpbaDSGF.png" }, { "shortCut": "[对不起]", "emotionId": "62.png", "url": "https://zos.alipayobjects.com/rmsportal/TWoNnzbOaawpJlo.png" }, { "shortCut": "[邪恶]", "emotionId": "63.png", "url": "https://zos.alipayobjects.com/rmsportal/bjWoMtInUeTgiAQ.png" }, { "shortCut": "[傲慢]", "emotionId": "64.png", "url": "https://zos.alipayobjects.com/rmsportal/hqbKachDgaSevYf.png" }, { "shortCut": "[安慰]", "emotionId": "65.png", "url": "https://zos.alipayobjects.com/rmsportal/JsKFHhOxVrvrzsl.png" }, { "shortCut": "[吓]", "emotionId": "66.png", "url": "https://zos.alipayobjects.com/rmsportal/frXVTvJeeDNAgok.png" }, { "shortCut": "[口罩]", "emotionId": "67.png", "url": "https://zos.alipayobjects.com/rmsportal/mAYxBLqKqaPLbwE.png" }, { "shortCut": "[害羞]", "emotionId": "68.png", "url": "https://zos.alipayobjects.com/rmsportal/SJoCgDcNDkhvNRT.png" }, { "shortCut": "[思考]", "emotionId": "69.png", "url": "https://zos.alipayobjects.com/rmsportal/WEHZPLivIjpnyFL.png" }, { "shortCut": "[财迷]", "emotionId": "70.png", "url": "https://zos.alipayobjects.com/rmsportal/LIAzafnAJbbIPdX.png" }, { "shortCut": "[饥饿]", "emotionId": "71.png", "url": "https://zos.alipayobjects.com/rmsportal/BcOjgkYeyyfsfLr.png" }, { "shortCut": "[享受]", "emotionId": "72.png", "url": "https://zos.alipayobjects.com/rmsportal/hLEUEmjIonXohGV.png" }, { "shortCut": "[天使]", "emotionId": "73.png", "url": "https://zos.alipayobjects.com/rmsportal/GlmPskLxDtGGGHc.png" }, { "shortCut": "[调皮]", "emotionId": "74.png", "url": "https://zos.alipayobjects.com/rmsportal/FHxHsChxJmxHbVO.png" }, { "shortCut": "[加油]", "emotionId": "75.png", "url": "https://zos.alipayobjects.com/rmsportal/emVDTUMZHQJbvjy.png" }, { "shortCut": "[恭喜发财]", "emotionId": "76.png", "url": "https://zos.alipayobjects.com/rmsportal/XBkDupINJAbdIHt.png" }, { "shortCut": "[好主意]", "emotionId": "77.png", "url": "https://zos.alipayobjects.com/rmsportal/kSwgUeAhVXuGXll.png" }, { "shortCut": "[呼叫]", "emotionId": "78.png", "url": "https://zos.alipayobjects.com/rmsportal/LhmtbMnFDniPbrR.png" }, { "shortCut": "[酷]", "emotionId": "79.png", "url": "https://zos.alipayobjects.com/rmsportal/jvzslCUtlQrKKfI.png" }, { "shortCut": "[发呆]", "emotionId": "80.png", "url": "https://zos.alipayobjects.com/rmsportal/zlXTmChIDknMEcV.png" }, { "shortCut": "[牛X]", "emotionId": "81.png", "url": "https://zos.alipayobjects.com/rmsportal/HvnrGlzCryMHNLB.png" }, { "shortCut": "[老大]", "emotionId": "82.png", "url": "https://zos.alipayobjects.com/rmsportal/fYaDlPjHyznwlfr.png" }, { "shortCut": "[怀疑]", "emotionId": "83.png", "url": "https://zos.alipayobjects.com/rmsportal/RyEGrLaWZOCoqPU.png" }, { "shortCut": "[背]", "emotionId": "84.png", "url": "https://zos.alipayobjects.com/rmsportal/BLzjIrmHKtNxShz.png" }, { "shortCut": "[生病]", "emotionId": "85.png", "url": "https://zos.alipayobjects.com/rmsportal/SKeDExjRfQSKvFj.png" }, { "shortCut": "[没办法]", "emotionId": "86.png", "url": "https://zos.alipayobjects.com/rmsportal/VvvvMcjDXTqacOD.png" }, { "shortCut": "[拥抱]", "emotionId": "87.png", "url": "https://zos.alipayobjects.com/rmsportal/HHLKqWmHaVdCuaL.png" }, { "shortCut": "[闪电]", "emotionId": "88.png", "url": "https://zos.alipayobjects.com/rmsportal/JZbTseePiFKHsLc.png" }, { "shortCut": "[月亮]", "emotionId": "89.png", "url": "https://zos.alipayobjects.com/rmsportal/xOIMRQARlyzuTKU.png" }, { "shortCut": "[太阳]", "emotionId": "90.png", "url": "https://zos.alipayobjects.com/rmsportal/LTjZIbkgBtWNaFI.png" }, { "shortCut": "[强]", "emotionId": "91.png", "url": "https://zos.alipayobjects.com/rmsportal/ukFQAUiaIEiPwin.png" }, { "shortCut": "[弱]", "emotionId": "92.png", "url": "https://zos.alipayobjects.com/rmsportal/qFmxvdIDSMwEBIb.png" }, { "shortCut": "[握手]", "emotionId": "93.png", "url": "https://zos.alipayobjects.com/rmsportal/wLAaaIrIaVwibtB.png" }, { "shortCut": "[胜利]", "emotionId": "94.png", "url": "https://zos.alipayobjects.com/rmsportal/CAZXOEhtiXVpXFn.png" }, { "shortCut": "[抱拳]", "emotionId": "95.png", "url": "https://zos.alipayobjects.com/rmsportal/eMdWkHGtgeSmXpM.png" }, { "shortCut": "[勾引]", "emotionId": "96.png", "url": "https://zos.alipayobjects.com/rmsportal/WHfFEKvDZIKwcVW.png" }, { "shortCut": "[拳头]", "emotionId": "97.png", "url": "https://zos.alipayobjects.com/rmsportal/vXbGiYGaKgYTPkW.png" }, { "shortCut": "[差劲]", "emotionId": "98.png", "url": "https://zos.alipayobjects.com/rmsportal/CiuNFtWnqAZzjWP.png" }, { "shortCut": "[我爱你]", "emotionId": "99.png", "url": "https://zos.alipayobjects.com/rmsportal/YVsnANcNnxlIvIt.png" }, { "shortCut": "[NO]", "emotionId": "100.png", "url": "https://zos.alipayobjects.com/rmsportal/yTiPQAkmQkfsBUG.png" }, { "shortCut": "[OK]", "emotionId": "101.png", "url": "https://zos.alipayobjects.com/rmsportal/MWhlaZHAVuHLLvQ.png" }, { "shortCut": "[鼓掌]", "emotionId": "102.png", "url": "https://zos.alipayobjects.com/rmsportal/tLBIQWjUFWlEVxz.png" }, { "shortCut": "[合十]", "emotionId": "103.png", "url": "https://zos.alipayobjects.com/rmsportal/pxuPMSVdSOOZYgR.png" }, { "shortCut": "[玫瑰]", "emotionId": "104.png", "url": "https://zos.alipayobjects.com/rmsportal/yNgGDbVoWGjKLJB.png" }, { "shortCut": "[凋谢]", "emotionId": "105.png", "url": "https://zos.alipayobjects.com/rmsportal/DCOuiPptMPJvhTY.png" }, { "shortCut": "[嘴唇]", "emotionId": "106.png", "url": "https://zos.alipayobjects.com/rmsportal/rzVhzlyzcequcxt.png" }, { "shortCut": "[爱心]", "emotionId": "107.png", "url": "https://zos.alipayobjects.com/rmsportal/FOWdQFAgJCagfwL.png" }, { "shortCut": "[心碎]", "emotionId": "108.png", "url": "https://zos.alipayobjects.com/rmsportal/YECpRjqUApECeyS.png" }, { "shortCut": "[红包]", "emotionId": "109.png", "url": "https://zos.alipayobjects.com/rmsportal/dkldwINCjaPAPqS.png" }, { "shortCut": "[菜刀]", "emotionId": "110.png", "url": "https://zos.alipayobjects.com/rmsportal/EVloHTfgUYpCRDQ.png" }, { "shortCut": "[咖啡]", "emotionId": "111.png", "url": "https://zos.alipayobjects.com/rmsportal/cWQscSDATasrNrR.png" }, { "shortCut": "[饭]", "emotionId": "112.png", "url": "https://zos.alipayobjects.com/rmsportal/czqnAeEAWPocNtX.png" }, { "shortCut": "[猪头]", "emotionId": "113.png", "url": "https://zos.alipayobjects.com/rmsportal/zyhsOospdOClVod.png" }, { "shortCut": "[足球]", "emotionId": "114.png", "url": "https://zos.alipayobjects.com/rmsportal/HcJgzJEURpsuLsa.png" }];
	exports["default"] = emojis;
	module.exports = exports['default'];

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

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
	    { style: emojiStyle, className: className },
	    props.children
	  );
	};
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(309);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _draftJs = __webpack_require__(163);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var emojiRex = /\[([\u4e00-\u9fa5])+\]/g;
	
	var iconStyle = {
	  letterSpacing: 32,
	  width: 32,
	  fontSize: 32,
	  height: 32,
	  display: 'inline-block',
	  backgroundSize: '100%'
	};
	
	module.exports = exports['default'];

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _draftJs = __webpack_require__(163);
	
	var _emojisList = __webpack_require__(321);
	
	var _emojisList2 = _interopRequireDefault(_emojisList);
	
	var _util = __webpack_require__(318);
	
	var _DraftOffsetKey = __webpack_require__(226);
	
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
	      setEditorState((0, _util.replaceEntity)(editorState, updatedSelection, ' ', (0, _util.createEntity)('emoji', { emoji: emojiMap[decoratedText], "export": _util.exportEntity })));
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

/***/ },

/***/ 324:
2,

/***/ 327:
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
	
	__webpack_require__(324);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var plugins = [_rcEditorPluginBasicStyle2.default, _rcEditorPluginEmoji2.default]; // use jsx to render html, do not modify simple.html
	
	var toolbars = [['bold', 'italic', 'underline', 'strikethrough', '|', 'superscript', 'subscript', '|', 'emoji']];
	
	function editorChange(editorState) {
	  console.log('>> editorExport:', (0, _rcEditorCore.GetText)(editorState));
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
	  keyDown: function keyDown(ev) {
	    if (ev.keyCode === 13) {
	      if (ev.ctrlKey) {
	        return 'split-block';
	      }
	      this.refs.editor.Reset();
	    }
	    return false;
	  },
	  render: function render() {
	    var _this = this;
	
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
	        defaultValue: '12312313123 [色眯眯] 123 13 ',
	        onKeyDown: function onKeyDown(ev) {
	          return _this.keyDown(ev);
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