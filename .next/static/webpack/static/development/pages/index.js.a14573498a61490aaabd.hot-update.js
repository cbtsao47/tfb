webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/input/standardInput.js":
/*!*******************************************!*\
  !*** ./components/input/standardInput.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme */ "./theme.js");


var _jsxFileName = "C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js";






var StandardInput = function StandardInput() {
  var _React$createElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isSpring = _useState2[0],
      setIsSpring = _useState2[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])({
    spring: isSpring ? 100 : 0,
    from: {
      spring: 0
    }
  }),
      spring = _useSpring.spring;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].input, (_React$createElement = {
    type: "text",
    style: {
      borderWidth: "".concat(spring.interpolate(function (value) {
        return value * 0.2;
      }), "px solid\n        ").concat(_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.shade[30])
    },
    onFocus: function onFocus() {
      return setIsSpring(true);
    }
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onFocus", function onFocus() {
    return setIsSpring(false);
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 13
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2058136835",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing * 2],
    __self: this
  }, "input.__jsx-style-dynamic-selector{border-radius:4px;padding:".concat(_theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing * 2, "px;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUc2QixrQkFDb0Qsc0VBQ3pELGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcc3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzU3ByaW5nLCBzZXRJc1NwcmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IHNwcmluZyB9ID0gdXNlU3ByaW5nKHtcclxuICAgIHNwcmluZzogaXNTcHJpbmcgPyAxMDAgOiAwLFxyXG4gICAgZnJvbTogeyBzcHJpbmc6IDAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhbmltYXRlZC5pbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IGAke3NwcmluZy5pbnRlcnBvbGF0ZSh2YWx1ZSA9PiB2YWx1ZSAqIDAuMil9cHggc29saWRcclxuICAgICAgICAke3RoZW1lLnBhbGV0dGUuc2hhZGVbMzBdfWBcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldElzU3ByaW5nKHRydWUpfVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldElzU3ByaW5nKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ31weCAke3RoZW1lLnNwYWNpbmcgKiAyfXB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRJbnB1dFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.a14573498a61490aaabd.hot-update.js.map