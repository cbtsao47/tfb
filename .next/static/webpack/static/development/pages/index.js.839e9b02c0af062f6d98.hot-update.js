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
      placeholder = _ref$placeholder === void 0 ? 'Name' : _ref$placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'Thuy Pham' : _ref$value;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isFocus = _useState2[0],
      setIsFocus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(value),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      currentValue = _useState4[0],
      setCurrentValue = _useState4[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    from: {
      o: 0.8,
      color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30],
      opacity: 0
    },
    o: isFocus ? 1 : 0.8,
    color: isFocus || !isFocus && currentValue ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30],
    opacity: isFocus || !isFocus && currentValue ? 1 : 0
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
    placeholder: isFocus ? '' : placeholder,
    style: inputStyle,
    onFocus: function onFocus() {
      return setIsFocus(true);
    },
    onBlur: function onBlur() {
      return setIsFocus(false);
    },
    onChange: function onChange(e) {
      return setCurrentValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4082147586",
    __self: this
  }, "#standard-input.jsx-4082147586{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENrQixBQUd3QiwwRUFDUyw4RUFDQyw2R0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcc3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoeyBwbGFjZWhvbGRlciA9ICdOYW1lJywgdmFsdWUgPSAnVGh1eSBQaGFtJyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzRm9jdXMsIHNldElzRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnJlbnRWYWx1ZSwgc2V0Q3VycmVudFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKVxyXG4gIGNvbnN0IHsgbywgY29sb3IsIG9wYWNpdHkgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG86IDAuOCwgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLCBvcGFjaXR5OiAwIH0sXHJcbiAgICBvOiBpc0ZvY3VzID8gMSA6IDAuOCxcclxuICAgIGNvbG9yOlxyXG4gICAgICBpc0ZvY3VzIHx8ICghaXNGb2N1cyAmJiBjdXJyZW50VmFsdWUpXHJcbiAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJsdWVcclxuICAgICAgICA6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLFxyXG4gICAgb3BhY2l0eTogaXNGb2N1cyB8fCAoIWlzRm9jdXMgJiYgY3VycmVudFZhbHVlKSA/IDEgOiAwXHJcbiAgfSlcclxuICBjb25zdCBpbnB1dFN0eWxlID0ge1xyXG4gICAgYm9yZGVyOiBpbnRlcnBvbGF0ZShbbywgY29sb3JdLCAobywgYykgPT4gYCR7byAqIDF9cHggc29saWQgJHtjfWApLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5zcGFjaW5nIC8gMn1weGAsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDEuNX1weGAsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBgMHB4YFxyXG4gIH1cclxuICBjb25zdCB0aXRsZVN0eWxlID0ge1xyXG4gICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBmb250U2l6ZTogYCR7dGhlbWUuZm9udC5zaXplLnNtYWxsfXB4YCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ibHVlLFxyXG4gICAgY29sb3I6IGAke3RoZW1lLnBhbGV0dGUuc2hhZGVbMF19YCxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcgKiAwLjJ9cHggJHt0aGVtZS5zcGFjaW5nfXB4YFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cInN0YW5kYXJkLWlucHV0XCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLnNwYW4gc3R5bGU9e3RpdGxlU3R5bGV9PntwbGFjZWhvbGRlcn08L2FuaW1hdGVkLnNwYW4+XHJcbiAgICAgICAgPGFuaW1hdGVkLmlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17aXNGb2N1cyA/ICcnIDogcGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBzdHlsZT17aW5wdXRTdHlsZX1cclxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldElzRm9jdXModHJ1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IHNldElzRm9jdXMoZmFsc2UpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q3VycmVudFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNzdGFuZGFyZC1pbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZElucHV0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.839e9b02c0af062f6d98.hot-update.js.map