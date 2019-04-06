webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/input/standardInput.js":
/*!*******************************************!*\
  !*** ./components/input/standardInput.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./theme.js");

var _jsxFileName = "C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js";






var StandardInput = function StandardInput() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isSpring = _useState2[0],
      setIsSpring = _useState2[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      o: 0,
      xyz: [0, 0, 0],
      color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30]
    },
    o: isSpring ? 1 : 0,
    xyz: [10, 20, 5],
    color: isSpring ? 'green' : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30]
  }),
      o = _useSpring.o,
      xyz = _useSpring.xyz,
      color = _useSpring.color;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].input, {
    type: "text",
    style: {
      border: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([o, color], function (o, c) {
        return "".concat(o * 1, "px solid ").concat(c);
      }),
      outline: 'none'
    },
    onFocus: function onFocus() {
      return setIsSpring(true);
    },
    onBlur: function onBlur() {
      return setIsSpring(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3359919256",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 2],
    __self: this
  }, "input.__jsx-style-dynamic-selector{border-radius:4px;padding:".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 2, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJrQixBQUc2QixrQkFDb0Qsc0VBQ3hFIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vdGhlbWUnXHJcblxyXG5jb25zdCBTdGFuZGFyZElucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc1NwcmluZywgc2V0SXNTcHJpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyBvLCB4eXosIGNvbG9yIH0gPSB1c2VTcHJpbmcoe1xyXG4gICAgZnJvbTogeyBvOiAwLCB4eXo6IFswLCAwLCAwXSwgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdIH0sXHJcbiAgICBvOiBpc1NwcmluZyA/IDEgOiAwLFxyXG4gICAgeHl6OiBbMTAsIDIwLCA1XSxcclxuICAgIGNvbG9yOiBpc1NwcmluZyA/ICdncmVlbicgOiB0aGVtZS5wYWxldHRlLnNoYWRlWzMwXVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhbmltYXRlZC5pbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyOiBpbnRlcnBvbGF0ZShbbywgY29sb3JdLCAobywgYykgPT4gYCR7byAqIDF9cHggc29saWQgJHtjfWApLFxyXG4gICAgICAgICAgb3V0bGluZTogJ25vbmUnXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc1NwcmluZyh0cnVlKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldElzU3ByaW5nKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ31weCAke3RoZW1lLnNwYWNpbmcgKiAyfXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZElucHV0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.097addb286633cdb2ec7.hot-update.js.map