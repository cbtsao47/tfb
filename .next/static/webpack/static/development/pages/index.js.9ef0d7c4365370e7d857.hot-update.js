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
      color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30],
      height: 0
    },
    o: isSpring ? 1 : 0.8,
    color: isSpring ? _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue : _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[30],
    height: isSpring ? 30 : 0
  }),
      o = _useSpring.o,
      color = _useSpring.color,
      height = _useSpring.height;

  var inputStyle = {
    border: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([o, color], function (o, c) {
      return "".concat(o * 1, "px solid ").concat(c);
    }),
    outline: 'none',
    borderRadius: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing / 2, "px"),
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 1.5, "px")
  };
  var titleStyle = {
    height: height.interpolate(function (height) {
      return "".concat(height, "px");
    }),
    display: 'block',
    position: 'absolute',
    top: 0,
    fontSize: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].font.size.small, "px"),
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.blue,
    color: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.shade[0]),
    marginLeft: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px"),
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing * 0.2, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing, "px"),
    borderTopRightRadius: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing / 2, "px"),
    borderTopLeftRadius: "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing / 2, "px")
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "standard-input",
    className: "jsx-1358325674",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].span, {
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1358325674",
    __self: this
  }, "#standard-input.jsx-1358325674{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUc2QixrQkFDTCwwRUFDUyw4RUFDQyw2R0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcc3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoeyBwbGFjZWhvbGRlciA9ICdOYW1lJyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzU3ByaW5nLCBzZXRJc1NwcmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IG8sIGNvbG9yLCBoZWlnaHQgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG86IDAuOCwgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLCBoZWlnaHQ6IDAgfSxcclxuICAgIG86IGlzU3ByaW5nID8gMSA6IDAuOCxcclxuICAgIGNvbG9yOiBpc1NwcmluZyA/IHRoZW1lLnBhbGV0dGUuYmx1ZSA6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLFxyXG4gICAgaGVpZ2h0OiBpc1NwcmluZyA/IDMwIDogMFxyXG4gIH0pXHJcbiAgY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuICAgIGJvcmRlcjogaW50ZXJwb2xhdGUoW28sIGNvbG9yXSwgKG8sIGMpID0+IGAke28gKiAxfXB4IHNvbGlkICR7Y31gKSxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGJvcmRlclJhZGl1czogYCR7dGhlbWUuc3BhY2luZyAvIDJ9cHhgLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZ31weCAke3RoZW1lLnNwYWNpbmcgKiAxLjV9cHhgXHJcbiAgfVxyXG4gIGNvbnN0IHRpdGxlU3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6IGhlaWdodC5pbnRlcnBvbGF0ZShoZWlnaHQgPT4gYCR7aGVpZ2h0fXB4YCksXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBmb250U2l6ZTogYCR7dGhlbWUuZm9udC5zaXplLnNtYWxsfXB4YCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ibHVlLFxyXG4gICAgY29sb3I6IGAke3RoZW1lLnBhbGV0dGUuc2hhZGVbMF19YCxcclxuICAgIG1hcmdpbkxlZnQ6IGAke3RoZW1lLnNwYWNpbmd9cHhgLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZyAqIDAuMn1weCAke3RoZW1lLnNwYWNpbmd9cHhgLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcgLyAyfXB4YCxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcgLyAyfXB4YFxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cInN0YW5kYXJkLWlucHV0XCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLnNwYW4gc3R5bGU9e3RpdGxlU3R5bGV9PntwbGFjZWhvbGRlcn08L2FuaW1hdGVkLnNwYW4+XHJcbiAgICAgICAgPGFuaW1hdGVkLmlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBzdHlsZT17aW5wdXRTdHlsZX1cclxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldElzU3ByaW5nKHRydWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRJc1NwcmluZyhmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjc3RhbmRhcmQtaW5wdXQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRJbnB1dFxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.9ef0d7c4365370e7d857.hot-update.js.map