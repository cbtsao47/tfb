webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/form/StandardForm.js":
/*!*****************************************!*\
  !*** ./components/form/StandardForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _input_StandardInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input/StandardInput */ "./components/input/StandardInput.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme */ "./theme.js");



var _jsxFileName = "C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js";






var defaultFormData = {
  name: {
    value: ''
  },
  phone: {
    value: ''
  }
};
var defaultSchemaFields = [{
  name: 'name'
}, {
  name: 'phone'
}];

var StandardForm = function StandardForm(_ref) {
  var _ref$formData = _ref.formData,
      formData = _ref$formData === void 0 ? defaultFormData : _ref$formData,
      _ref$schemaFields = _ref.schemaFields,
      schemaFields = _ref$schemaFields === void 0 ? defaultSchemaFields : _ref$schemaFields;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(formData),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      currentFormData = _useState2[0],
      setCurrentFormData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      isFocus = _useState4[0],
      setIsFocus = _useState4[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])({
    from: {
      color: _theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[20]
    },
    color: isFocus ? _theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.blue : _theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[20]
  }),
      color = _useSpring.color;

  var formStyle = {
    display: 'inline-block',
    border: "0.6px solid ".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[30]),
    borderRadius: "".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing / 4, "px"),
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 3, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 5, "px"),
    boxShadow: color.interpolate(function (color) {
      return "".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].boxShadow, " ").concat(color);
    })
  };

  var handleSetFormData = function handleSetFormData(fieldName, value) {
    var updatedFormData = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, currentFormData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fieldName, {
      value: value
    }));

    setCurrentFormData(updatedFormData);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    style: formStyle,
    onFocus: function onFocus() {
      return setIsFocus(true);
    },
    onBlur: function onBlur() {
      return setIsFocus(false);
    },
    className: "jsx-1497963835",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, schemaFields.map(function (field) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_StandardInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: field.name,
      name: field.name,
      placeholder: field.name,
      value: currentFormData[field.name].value,
      onChangeInput: function onChangeInput(value) {
        return handleSetFormData(field.name, value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1497963835",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEa0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxmb3JtXFxTdGFuZGFyZEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IFN0YW5kYXJkSW5wdXQgZnJvbSAnLi4vaW5wdXQvU3RhbmRhcmRJbnB1dCdcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lJ1xyXG5cclxuY29uc3QgZGVmYXVsdEZvcm1EYXRhID0ge1xyXG4gIG5hbWU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH0sXHJcbiAgcGhvbmU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFNjaGVtYUZpZWxkcyA9IFt7IG5hbWU6ICduYW1lJyB9LCB7IG5hbWU6ICdwaG9uZScgfV1cclxuXHJcbmNvbnN0IFN0YW5kYXJkRm9ybSA9ICh7XHJcbiAgZm9ybURhdGEgPSBkZWZhdWx0Rm9ybURhdGEsXHJcbiAgc2NoZW1hRmllbGRzID0gZGVmYXVsdFNjaGVtYUZpZWxkc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRGb3JtRGF0YSwgc2V0Q3VycmVudEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhKVxyXG4gIGNvbnN0IFtpc0ZvY3VzLCBzZXRJc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHsgY29sb3IgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLnNoYWRlWzIwXSB9LFxyXG4gICAgY29sb3I6IGlzRm9jdXMgPyB0aGVtZS5wYWxldHRlLmJsdWUgOiB0aGVtZS5wYWxldHRlLnNoYWRlWzIwXVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZvcm1TdHlsZSA9IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgYm9yZGVyOiBgMC42cHggc29saWQgJHt0aGVtZS5wYWxldHRlLnNoYWRlWzMwXX1gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBgJHt0aGVtZS5zcGFjaW5nIC8gNH1weGAsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nICogM31weCAke3RoZW1lLnNwYWNpbmcgKiA1fXB4YCxcclxuICAgIGJveFNoYWRvdzogY29sb3IuaW50ZXJwb2xhdGUoY29sb3IgPT4gYCR7dGhlbWUuYm94U2hhZG93fSAke2NvbG9yfWApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZXRGb3JtRGF0YSA9IChmaWVsZE5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkRm9ybURhdGEgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnRGb3JtRGF0YSxcclxuICAgICAgW2ZpZWxkTmFtZV06IHtcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50Rm9ybURhdGEodXBkYXRlZEZvcm1EYXRhKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBzdHlsZT17Zm9ybVN0eWxlfVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldElzRm9jdXModHJ1ZSl9XHJcbiAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRJc0ZvY3VzKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzY2hlbWFGaWVsZHMubWFwKGZpZWxkID0+IChcclxuICAgICAgICAgIDxTdGFuZGFyZElucHV0XHJcbiAgICAgICAgICAgIGtleT17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50Rm9ybURhdGFbZmllbGQubmFtZV0udmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlSW5wdXQ9e3ZhbHVlID0+IGhhbmRsZVNldEZvcm1EYXRhKGZpZWxkLm5hbWUsIHZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFuZGFyZEZvcm1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.88750734a9b663032055.hot-update.js.map