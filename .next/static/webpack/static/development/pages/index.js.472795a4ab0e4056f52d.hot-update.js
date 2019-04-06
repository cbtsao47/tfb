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






var StandardInput = function StandardInput(_ref) {
  var _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Name' : _ref$placeholder;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isSpring = _useState2[0],
      setIsSpring = _useState2[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      o: 0.8,
      color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30]
    },
    o: isSpring ? 1 : 0.8,
    color: isSpring ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30]
  }),
      o = _useSpring.o,
      color = _useSpring.color;

  var inputStyle = {
    border: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([o, color], function (o, c) {
      return "".concat(o * 1, "px solid ").concat(c);
    }),
    outline: 'none',
    borderRadius: '4px',
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 1.5, "px")
  };
  var titleStyle = {
    position: 'absolute',
    top: '0px',
    fontSize: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].font.size.small, "px"),
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "standard-input",
    className: "jsx-3197926492",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].span, {
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, placeholder), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].input, {
    type: "text",
    style: inputStyle,
    onFocus: function onFocus() {
      return setIsSpring(true);
    },
    onBlur: function onBlur() {
      return setIsSpring(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3197926492",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBoYW1yXFxjb2RlXFx0ZmJcXGNvbXBvbmVudHNcXGlucHV0XFxzdGFuZGFyZElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lJ1xyXG5cclxuY29uc3QgU3RhbmRhcmRJbnB1dCA9ICh7IHBsYWNlaG9sZGVyID0gJ05hbWUnIH0pID0+IHtcclxuICBjb25zdCBbaXNTcHJpbmcsIHNldElzU3ByaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHsgbywgY29sb3IgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG86IDAuOCwgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdIH0sXHJcbiAgICBvOiBpc1NwcmluZyA/IDEgOiAwLjgsXHJcbiAgICBjb2xvcjogaXNTcHJpbmcgPyB0aGVtZS5wYWxldHRlLmJsdWUgOiB0aGVtZS5wYWxldHRlLnNoYWRlWzMwXVxyXG4gIH0pXHJcbiAgY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogaW50ZXJwb2xhdGUoW28sIGNvbG9yXSwgKG8sIGMpID0+IGAke28gKiAxfXB4IHNvbGlkICR7Y31gKSxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDEuNX1weGBcclxuICB9XHJcbiAgY29uc3QgdGl0bGVTdHlsZSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMHB4JyxcclxuICAgIGZvbnRTaXplOiBgJHt0aGVtZS5mb250LnNpemUuc21hbGx9cHhgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJsdWVcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJzdGFuZGFyZC1pbnB1dFwiPlxyXG4gICAgICAgIDxhbmltYXRlZC5zcGFuIHN0eWxlPXt0aXRsZVN0eWxlfT57cGxhY2Vob2xkZXJ9PC9hbmltYXRlZC5zcGFuPlxyXG4gICAgICAgIDxhbmltYXRlZC5pbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e2lucHV0U3R5bGV9XHJcbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc1NwcmluZyh0cnVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SXNTcHJpbmcoZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgIHtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRJbnB1dFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.472795a4ab0e4056f52d.hot-update.js.map