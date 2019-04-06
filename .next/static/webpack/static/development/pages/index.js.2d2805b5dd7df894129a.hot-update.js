webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/input/standardInput.js":
/*!*******************************************!*\
  !*** ./components/input/standardInput.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./theme.js");
var _jsxFileName = "C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js";






var RawStandardInput = function RawStandardInput() {
  var spring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    borderRadius: '10px',
    from: {
      borderRadius: '0px'
    }
  });
  console.log(spring.value);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].input, {
    type: "text",
    styles: spring,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2034950505",
    dynamic: [spring.value.value * 0.01, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing * 2],
    __self: this
  }, "input.__jsx-style-dynamic-selector{border:".concat(spring.value.value * 0.01, "px solid ").concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.shade[30], ";border-radius:3px;padding:").concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing * 2, "px;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWtCLEFBSXlDLHlFQUNaLGtCQUNvRCxzRUFDekQsYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXHBoYW1yXFxjb2RlXFx0ZmJcXGNvbXBvbmVudHNcXGlucHV0XFxzdGFuZGFyZElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFJhd1N0YW5kYXJkSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3ByaW5nID0gdXNlU3ByaW5nKHtcclxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgZnJvbTogeyBib3JkZXJSYWRpdXM6ICcwcHgnIH1cclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKHNwcmluZy52YWx1ZSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGFuaW1hdGVkLmlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGVzPXtzcHJpbmd9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBib3JkZXI6ICR7c3ByaW5nLnZhbHVlLnZhbHVlICogMC4wMX1weCBzb2xpZFxyXG4gICAgICAgICAgICAke3RoZW1lLnBhbGV0dGUuc2hhZGVbMzBdfTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ31weCAke3RoZW1lLnNwYWNpbmcgKiAyfXB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5jb25zdCBTdGFuZGFyZElucHV0ID0gYW5pbWF0ZWQoUmF3U3RhbmRhcmRJbnB1dClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkSW5wdXRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */")));
};

var StandardInput = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(RawStandardInput);
/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.2d2805b5dd7df894129a.hot-update.js.map