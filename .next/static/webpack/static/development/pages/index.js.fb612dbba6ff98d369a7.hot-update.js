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
    value: 100,
    from: {
      value: 0
    }
  });
  console.log(spring.value);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2408863623", [spring.value * 0.01, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing * 2]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2408863623",
    dynamic: [spring.value * 0.01, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing * 2],
    __self: this
  }, "input.__jsx-style-dynamic-selector{border:".concat(spring.value * 0.01, "px solid ").concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.shade[30], ";border-radius:3px;padding:").concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing * 2, "px;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBR29GLHlFQUN2RCxrQkFDb0Qsc0VBQ3pELGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcc3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vdGhlbWUnXHJcblxyXG5jb25zdCBSYXdTdGFuZGFyZElucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNwcmluZyA9IHVzZVNwcmluZyh7IHZhbHVlOiAxMDAsIGZyb206IHsgdmFsdWU6IDAgfSB9KVxyXG4gIGNvbnNvbGUubG9nKHNwcmluZy52YWx1ZSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJvcmRlcjogJHtzcHJpbmcudmFsdWUgKiAwLjAxfXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5zaGFkZVszMF19O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDJ9cHg7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSBhbmltYXRlZChSYXdTdGFuZGFyZElucHV0KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRJbnB1dFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */")));
};

var StandardInput = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(RawStandardInput);
/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.fb612dbba6ff98d369a7.hot-update.js.map