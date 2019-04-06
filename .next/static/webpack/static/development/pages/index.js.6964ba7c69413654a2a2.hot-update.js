webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/input/StandardInput.js":
/*!*******************************************!*\
  !*** ./components/input/StandardInput.js ***!
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

var _jsxFileName = "C:\\Users\\phamr\\code\\tfb\\components\\input\\StandardInput.js";






var StandardInput = function StandardInput(_ref) {
  var _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Name' : _ref$placeholder,
      value = _ref.value,
      name = _ref.name,
      onChange = _ref.onChange;

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
    o: isFocus || !isFocus && value ? 1 : 0.8,
    color: isFocus || !isFocus && value ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30],
    opacity: isFocus || !isFocus && value ? 1 : 0
  }),
      o = _useSpring.o,
      color = _useSpring.color,
      opacity = _useSpring.opacity;

  var inputStyle = {
    border: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([o, color], function (o, c) {
      return "".concat(o * 1, "px solid ").concat(c);
    }),
    outline: 'none',
    borderRadius: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing / 4, "px"),
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
  console.log(value);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "standard-input",
    className: "jsx-4082147586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].span, {
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, placeholder), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].input, {
    type: "text",
    value: value,
    name: name,
    placeholder: isFocus ? '' : placeholder,
    style: inputStyle,
    onFocus: function onFocus() {
      return setIsFocus(true);
    },
    onBlur: function onBlur() {
      return setIsFocus(false);
    },
    onChange: function onChange(e) {
      return onChangeInput(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4082147586",
    __self: this
  }, "#standard-input.jsx-4082147586{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXFN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUd3QiwwRUFDUyw4RUFDQyw2R0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcU3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoeyBwbGFjZWhvbGRlciA9ICdOYW1lJywgdmFsdWUsIG5hbWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBbaXNGb2N1cywgc2V0SXNGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IG8sIGNvbG9yLCBvcGFjaXR5IH0gPSB1c2VTcHJpbmcoe1xyXG4gICAgZnJvbTogeyBvOiAwLjgsIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNoYWRlWzMwXSwgb3BhY2l0eTogMCB9LFxyXG4gICAgbzogaXNGb2N1cyB8fCAoIWlzRm9jdXMgJiYgdmFsdWUpID8gMSA6IDAuOCxcclxuICAgIGNvbG9yOlxyXG4gICAgICBpc0ZvY3VzIHx8ICghaXNGb2N1cyAmJiB2YWx1ZSlcclxuICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYmx1ZVxyXG4gICAgICAgIDogdGhlbWUucGFsZXR0ZS5zaGFkZVszMF0sXHJcbiAgICBvcGFjaXR5OiBpc0ZvY3VzIHx8ICghaXNGb2N1cyAmJiB2YWx1ZSkgPyAxIDogMFxyXG4gIH0pXHJcbiAgY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogaW50ZXJwb2xhdGUoW28sIGNvbG9yXSwgKG8sIGMpID0+IGAke28gKiAxfXB4IHNvbGlkICR7Y31gKSxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUuc3BhY2luZyAvIDR9cHhgLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZ31weCAke3RoZW1lLnNwYWNpbmcgKiAxLjV9cHhgLFxyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYDBweGBcclxuICB9XHJcbiAgY29uc3QgdGl0bGVTdHlsZSA9IHtcclxuICAgIG9wYWNpdHk6IG9wYWNpdHksXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgZm9udFNpemU6IGAke3RoZW1lLmZvbnQuc2l6ZS5zbWFsbH1weGAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmx1ZSxcclxuICAgIGNvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnNoYWRlWzBdfWAsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nICogMC4yfXB4ICR7dGhlbWUuc3BhY2luZ31weGBcclxuICB9XHJcbiAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJzdGFuZGFyZC1pbnB1dFwiPlxyXG4gICAgICAgIDxhbmltYXRlZC5zcGFuIHN0eWxlPXt0aXRsZVN0eWxlfT57cGxhY2Vob2xkZXJ9PC9hbmltYXRlZC5zcGFuPlxyXG4gICAgICAgIDxhbmltYXRlZC5pbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtpc0ZvY3VzID8gJycgOiBwbGFjZWhvbGRlcn1cclxuICAgICAgICAgIHN0eWxlPXtpbnB1dFN0eWxlfVxyXG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0SXNGb2N1cyh0cnVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SXNGb2N1cyhmYWxzZSl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNzdGFuZGFyZC1pbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZElucHV0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\StandardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.6964ba7c69413654a2a2.hot-update.js.map