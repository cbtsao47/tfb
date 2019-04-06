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
      })
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
    id: "2058136835",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 2],
    __self: this
  }, "input.__jsx-style-dynamic-selector{border-radius:4px;padding:".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 2, "px;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUc2QixrQkFDb0Qsc0VBQ3pELGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcc3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzU3ByaW5nLCBzZXRJc1NwcmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IG8sIHh5eiwgY29sb3IgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG86IDAsIHh5ejogWzAsIDAsIDBdLCBjb2xvcjogdGhlbWUucGFsZXR0ZS5zaGFkZVszMF0gfSxcclxuICAgIG86IGlzU3ByaW5nID8gMSA6IDAsXHJcbiAgICB4eXo6IFsxMCwgMjAsIDVdLFxyXG4gICAgY29sb3I6IGlzU3ByaW5nID8gJ2dyZWVuJyA6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdXHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGFuaW1hdGVkLmlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBib3JkZXI6IGludGVycG9sYXRlKFtvLCBjb2xvcl0sIChvLCBjKSA9PiBgJHtvICogMX1weCBzb2xpZCAke2N9YClcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldElzU3ByaW5nKHRydWUpfVxyXG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SXNTcHJpbmcoZmFsc2UpfVxyXG4gICAgICAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDJ9cHg7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZElucHV0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.5e6f113e719ad04d5cc5.hot-update.js.map