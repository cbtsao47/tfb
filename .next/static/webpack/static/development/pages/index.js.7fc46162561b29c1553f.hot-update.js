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
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 0.2, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px")
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1198161956" + " " + "standard-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].span, {
    className: "title",
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1198161956",
    __self: this
  }, ".standard-input.jsx-1198161956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.title.jsx-1198161956{text-transform:capitalize;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXFN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RrQixBQUd3QixBQUthLDBCQUM1QixnREFMd0IsOEVBQ0MsNkdBQ3pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXFN0YW5kYXJkSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vdGhlbWUnXHJcblxyXG5jb25zdCBTdGFuZGFyZElucHV0ID0gKHtcclxuICBwbGFjZWhvbGRlciA9ICdOYW1lJyxcclxuICB2YWx1ZSxcclxuICBuYW1lLFxyXG4gIG9uQ2hhbmdlSW5wdXRcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtpc0ZvY3VzLCBzZXRJc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHsgbywgY29sb3IsIG9wYWNpdHkgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG86IDAuOCwgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLCBvcGFjaXR5OiAwIH0sXHJcbiAgICBvOiBpc0ZvY3VzIHx8ICghaXNGb2N1cyAmJiB2YWx1ZSkgPyAxIDogMC44LFxyXG4gICAgY29sb3I6XHJcbiAgICAgIGlzRm9jdXMgfHwgKCFpc0ZvY3VzICYmIHZhbHVlKVxyXG4gICAgICAgID8gdGhlbWUucGFsZXR0ZS5ibHVlXHJcbiAgICAgICAgOiB0aGVtZS5wYWxldHRlLnNoYWRlWzMwXSxcclxuICAgIG9wYWNpdHk6IGlzRm9jdXMgfHwgKCFpc0ZvY3VzICYmIHZhbHVlKSA/IDEgOiAwXHJcbiAgfSlcclxuICBjb25zdCBpbnB1dFN0eWxlID0ge1xyXG4gICAgYm9yZGVyOiBpbnRlcnBvbGF0ZShbbywgY29sb3JdLCAobywgYykgPT4gYCR7byAqIDF9cHggc29saWQgJHtjfWApLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5zcGFjaW5nIC8gNH1weGAsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDEuNX1weGAsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAwLFxyXG4gICAgbWFyZ2luQm90dG9tOiBgJHt0aGVtZS5zcGFjaW5nfXB4YFxyXG4gIH1cclxuICBjb25zdCB0aXRsZVN0eWxlID0ge1xyXG4gICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBmb250U2l6ZTogYCR7dGhlbWUuZm9udC5zaXplLnNtYWxsfXB4YCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ibHVlLFxyXG4gICAgY29sb3I6IGAke3RoZW1lLnBhbGV0dGUuc2hhZGVbMF19YCxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcgKiAwLjJ9cHggJHt0aGVtZS5zcGFjaW5nfXB4YFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFuZGFyZC1pbnB1dFwiPlxyXG4gICAgICAgIDxhbmltYXRlZC5zcGFuIGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3RpdGxlU3R5bGV9PlxyXG4gICAgICAgICAge3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIDwvYW5pbWF0ZWQuc3Bhbj5cclxuICAgICAgICA8YW5pbWF0ZWQuaW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17aXNGb2N1cyA/ICcnIDogcGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBzdHlsZT17aW5wdXRTdHlsZX1cclxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldElzRm9jdXModHJ1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IHNldElzRm9jdXMoZmFsc2UpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc3RhbmRhcmQtaW5wdXQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZElucHV0XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\StandardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.7fc46162561b29c1553f.hot-update.js.map