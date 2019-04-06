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
      isFocus = _useState2[0],
      setIsFocus = _useState2[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      o: 0.8,
      color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30],
      opacity: 0
    },
    o: isFocus ? 1 : 0.8,
    color: isFocus ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30],
    opacity: isFocus ? 1 : 0
  }),
      o = _useSpring.o,
      color = _useSpring.color,
      opacity = _useSpring.opacity;

  var inputStyle = {
    border: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([o, color], function (o, c) {
      return "".concat(o * 1, "px solid ").concat(c);
    }),
    outline: 'none',
    borderRadius: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing / 2, "px"),
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 1.5, "px"),
    borderTopLeftRadius: "0px"
  };
  var titleStyle = {
    opacity: opacity,
    display: 'block',
    top: 0,
    fontSize: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].font.size.small, "px"),
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue,
    color: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[0]),
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 0.2, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px")
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "standard-input",
    className: "jsx-4082147586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].span, {
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, placeholder), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].input, {
    type: "text",
    placeholder: isFocus ? '' : placeholder,
    style: inputStyle,
    onFocus: function onFocus() {
      return setIsFocus(true);
    },
    onBlur: function onBlur() {
      return setIsFocus(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4082147586",
    __self: this
  }, "#standard-input.jsx-4082147586{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUd3QiwwRUFDUyw4RUFDQyw2R0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcc3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoeyBwbGFjZWhvbGRlciA9ICdOYW1lJyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzRm9jdXMsIHNldElzRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyBvLCBjb2xvciwgb3BhY2l0eSB9ID0gdXNlU3ByaW5nKHtcclxuICAgIGZyb206IHsgbzogMC44LCBjb2xvcjogdGhlbWUucGFsZXR0ZS5zaGFkZVszMF0sIG9wYWNpdHk6IDAgfSxcclxuICAgIG86IGlzRm9jdXMgPyAxIDogMC44LFxyXG4gICAgY29sb3I6IGlzRm9jdXMgPyB0aGVtZS5wYWxldHRlLmJsdWUgOiB0aGVtZS5wYWxldHRlLnNoYWRlWzMwXSxcclxuICAgIG9wYWNpdHk6IGlzRm9jdXMgPyAxIDogMFxyXG4gIH0pXHJcbiAgY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogaW50ZXJwb2xhdGUoW28sIGNvbG9yXSwgKG8sIGMpID0+IGAke28gKiAxfXB4IHNvbGlkICR7Y31gKSxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUuc3BhY2luZyAvIDJ9cHhgLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZ31weCAke3RoZW1lLnNwYWNpbmcgKiAxLjV9cHhgLFxyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYDBweGBcclxuICB9XHJcbiAgY29uc3QgdGl0bGVTdHlsZSA9IHtcclxuICAgIG9wYWNpdHk6IG9wYWNpdHksXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgZm9udFNpemU6IGAke3RoZW1lLmZvbnQuc2l6ZS5zbWFsbH1weGAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmx1ZSxcclxuICAgIGNvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnNoYWRlWzBdfWAsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nICogMC4yfXB4ICR7dGhlbWUuc3BhY2luZ31weGBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJzdGFuZGFyZC1pbnB1dFwiPlxyXG4gICAgICAgIDxhbmltYXRlZC5zcGFuIHN0eWxlPXt0aXRsZVN0eWxlfT57cGxhY2Vob2xkZXJ9PC9hbmltYXRlZC5zcGFuPlxyXG4gICAgICAgIDxhbmltYXRlZC5pbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2lzRm9jdXMgPyAnJyA6IHBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgc3R5bGU9e2lucHV0U3R5bGV9XHJcbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc0ZvY3VzKHRydWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRJc0ZvY3VzKGZhbHNlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNzdGFuZGFyZC1pbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZElucHV0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.0079559fd25f366f0ef2.hot-update.js.map