webpackJsonp([3],{

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(432);


/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_editor_core_assets_index_less__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_editor_core_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_editor_core_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_editor_core__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_editor_plugin_emoji_assets_index_css__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_editor_plugin_emoji_assets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rc_editor_plugin_emoji_assets_index_css__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// use jsx to render html, do not modify simple.html
/* eslint-disable new-cap, no-console */








var callbacks = {
  getEditorState: function getEditorState() {},
  setEditorState: function setEditorState() {},
  getStyleMap: function getStyleMap() {}
};

function toggleInlineStyle(style) {
  return function () {
    var editorState = callbacks.getEditorState();

    callbacks.setEditorState(__WEBPACK_IMPORTED_MODULE_4_draft_js__["RichUtils"].toggleInlineStyle(editorState, 'customer-style-' + style));
  };
}

var Test = {
  name: 'test',
  callbacks: callbacks,
  component: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      { onMouseDown: toggleInlineStyle('red') },
      'red'
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
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
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_editor_core__["a" /* EditorCore */], {
        plugins: plugins,
        toolbars: toolbars,
        onKeyDown: function onKeyDown(ev) {
          return keyDown(ev);
        },
        onChange: this.onChange,
        value: this.state.editorState
      }),
      this.state.editorState ? Object(__WEBPACK_IMPORTED_MODULE_1_rc_editor_core__["b" /* GetHTML */])(this.state.editorState) : null
    );
  };

  return EditorWrapper;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(EditorWrapper, null), document.getElementById('__react-content'));

/***/ })

},[431]);
//# sourceMappingURL=plugin.js.map