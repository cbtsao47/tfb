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
    height: isSpring ? '100%' : 0
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
      return height;
    }),
    display: 'block',
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
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].span, {
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
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
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1358325674",
    __self: this
  }, "#standard-input.jsx-1358325674{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcaW5wdXRcXHN0YW5kYXJkSW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUc2QixrQkFDTCwwRUFDUyw4RUFDQyw2R0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxpbnB1dFxcc3RhbmRhcmRJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IFN0YW5kYXJkSW5wdXQgPSAoeyBwbGFjZWhvbGRlciA9ICdOYW1lJyB9KSA9PiB7XHJcbiAgY29uc3QgW2lzU3ByaW5nLCBzZXRJc1NwcmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IG8sIGNvbG9yLCBoZWlnaHQgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG86IDAuOCwgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLCBoZWlnaHQ6IDAgfSxcclxuICAgIG86IGlzU3ByaW5nID8gMSA6IDAuOCxcclxuICAgIGNvbG9yOiBpc1NwcmluZyA/IHRoZW1lLnBhbGV0dGUuYmx1ZSA6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMzBdLFxyXG4gICAgaGVpZ2h0OiBpc1NwcmluZyA/ICcxMDAlJyA6IDBcclxuICB9KVxyXG4gIGNvbnN0IGlucHV0U3R5bGUgPSB7XHJcbiAgICBib3JkZXI6IGludGVycG9sYXRlKFtvLCBjb2xvcl0sIChvLCBjKSA9PiBgJHtvICogMX1weCBzb2xpZCAke2N9YCksXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcgLyAyfXB4YCxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmd9cHggJHt0aGVtZS5zcGFjaW5nICogMS41fXB4YFxyXG4gIH1cclxuICBjb25zdCB0aXRsZVN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiBoZWlnaHQuaW50ZXJwb2xhdGUoaGVpZ2h0ID0+IGhlaWdodCksXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgZm9udFNpemU6IGAke3RoZW1lLmZvbnQuc2l6ZS5zbWFsbH1weGAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmx1ZSxcclxuICAgIGNvbG9yOiBgJHt0aGVtZS5wYWxldHRlLnNoYWRlWzBdfWAsXHJcbiAgICBtYXJnaW5MZWZ0OiBgJHt0aGVtZS5zcGFjaW5nfXB4YCxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcgKiAwLjJ9cHggJHt0aGVtZS5zcGFjaW5nfXB4YCxcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBgJHt0aGVtZS5zcGFjaW5nIC8gMn1weGAsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBgJHt0aGVtZS5zcGFjaW5nIC8gMn1weGBcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJzdGFuZGFyZC1pbnB1dFwiPlxyXG4gICAgICAgIDxhbmltYXRlZC5zcGFuIHN0eWxlPXt0aXRsZVN0eWxlfT57cGxhY2Vob2xkZXJ9PC9hbmltYXRlZC5zcGFuPlxyXG4gICAgICAgIDxhbmltYXRlZC5pbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e2lucHV0U3R5bGV9XHJcbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc1NwcmluZyh0cnVlKX1cclxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SXNTcHJpbmcoZmFsc2UpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI3N0YW5kYXJkLWlucHV0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkSW5wdXRcclxuIl19 */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\input\\standardInput.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardInput);

/***/ })

})
//# sourceMappingURL=index.js.bd258ddfbf98fb59aecc.hot-update.js.map