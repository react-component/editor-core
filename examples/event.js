webpackJsonp([5],{

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(425);


/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_editor_core_assets_index_less__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_editor_core_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_editor_core_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rc_editor_core__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
// use jsx to render html, do not modify event.html
/* eslint-disable new-cap, no-console */






var EventPlugin = {
  callbacks: {
    setEditorState: null,
    getEditorState: null,
    onUpArrow: function onUpArrow() {
      console.log('>> onUpArrow');
    },
    onDownArrow: function onDownArrow() {
      console.log('>> onDownArrow ');
    },
    onBlur: function onBlur() {
      console.log('>> onBlur');
    },
    onFocus: function onFocus() {
      console.log('>> onBlur prevent');return true;
    },
    handlePastedText: function handlePastedText(text, html) {
      console.log('>> handlePastedText', text, html);
    }
  }
};
var plugins = [EventPlugin];
var toolbars = [];

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_rc_editor_core__["a" /* EditorCore */], {
  plugins: plugins,
  onFocus: function onFocus() {
    return console.log('on focus');
  },
  onBlur: function onBlur() {
    return console.log('on blur');
  },
  toolbars: toolbars
}), document.getElementById('__react-content'));

/***/ })

},[424]);
//# sourceMappingURL=event.js.map