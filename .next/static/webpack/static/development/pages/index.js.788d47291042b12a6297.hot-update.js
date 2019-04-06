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
      onChangeInput = _ref.onChangeInput;

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
    borderTopLeftRadius: 0,
    marginBottom: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px")
  };
  var titleStyle = {
    opacity: opacity,
    display: 'block',
    top: 0,
    fontSize: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].font.size.small, "px"),
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue,
    color: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[0]),
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 0.2, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px"),
    textTransform: 'capitalize'
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2109860782" + " " + "standard-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].span, {
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2109860782",
    __self: this
  }, ".standard-input.jsx-2109860782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXFN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUd3QiwwRUFDUyw4RUFDQyw2R0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcU3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoe1xyXG4gIHBsYWNlaG9sZGVyID0gJ05hbWUnLFxyXG4gIHZhbHVlLFxyXG4gIG5hbWUsXHJcbiAgb25DaGFuZ2VJbnB1dFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2lzRm9jdXMsIHNldElzRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyBvLCBjb2xvciwgb3BhY2l0eSB9ID0gdXNlU3ByaW5nKHtcclxuICAgIGZyb206IHsgbzogMC44LCBjb2xvcjogdGhlbWUucGFsZXR0ZS5zaGFkZVszMF0sIG9wYWNpdHk6IDAgfSxcclxuICAgIG86IGlzRm9jdXMgfHwgKCFpc0ZvY3VzICYmIHZhbHVlKSA/IDEgOiAwLjgsXHJcbiAgICBjb2xvcjpcclxuICAgICAgaXNGb2N1cyB8fCAoIWlzRm9jdXMgJiYgdmFsdWUpXHJcbiAgICAgICAgPyB0aGVtZS5wYWxldHRlLmJsdWVcclxuICAgICAgICA6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLFxyXG4gICAgb3BhY2l0eTogaXNGb2N1cyB8fCAoIWlzRm9jdXMgJiYgdmFsdWUpID8gMSA6IDBcclxuICB9KVxyXG4gIGNvbnN0IGlucHV0U3R5bGUgPSB7XHJcbiAgICBib3JkZXI6IGludGVycG9sYXRlKFtvLCBjb2xvcl0sIChvLCBjKSA9PiBgJHtvICogMX1weCBzb2xpZCAke2N9YCksXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcgLyA0fXB4YCxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmd9cHggJHt0aGVtZS5zcGFjaW5nICogMS41fXB4YCxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDAsXHJcbiAgICBtYXJnaW5Cb3R0b206IGAke3RoZW1lLnNwYWNpbmd9cHhgXHJcbiAgfVxyXG4gIGNvbnN0IHRpdGxlU3R5bGUgPSB7XHJcbiAgICBvcGFjaXR5OiBvcGFjaXR5LFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHRvcDogMCxcclxuICAgIGZvbnRTaXplOiBgJHt0aGVtZS5mb250LnNpemUuc21hbGx9cHhgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJsdWUsXHJcbiAgICBjb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5zaGFkZVswXX1gLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZyAqIDAuMn1weCAke3RoZW1lLnNwYWNpbmd9cHhgLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YW5kYXJkLWlucHV0XCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLnNwYW4gc3R5bGU9e3RpdGxlU3R5bGV9PntwbGFjZWhvbGRlcn08L2FuaW1hdGVkLnNwYW4+XHJcbiAgICAgICAgPGFuaW1hdGVkLmlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2lzRm9jdXMgPyAnJyA6IHBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgc3R5bGU9e2lucHV0U3R5bGV9XHJcbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc0ZvY3VzKHRydWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRJc0ZvY3VzKGZhbHNlKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnN0YW5kYXJkLWlucHV0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkSW5wdXRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\StandardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.788d47291042b12a6297.hot-update.js.map