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
    color: isFocus ? _theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[30] : _theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[20]
  }),
      color = _useSpring.color;

  var formStyle = {
    display: 'inline-block',
    border: "0.6px solid ".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[30]),
    borderRadius: "".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing / 4, "px"),
    padding: "".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 3, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 5, "px"),
    boxShadow: Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["interpolate"])([color], function (color) {
      return "".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].boxShadow, " ").concat(color);
    })
  };

  var handleSetFormData = function handleSetFormData(fieldName, value) {
    var updatedFormData = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, currentFormData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fieldName, {
      value: value
    }));

    setCurrentFormData(updatedFormData);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].form, {
    style: formStyle,
    onFocus: function onFocus() {
      return setIsFocus(true);
    },
    onBlur: function onBlur() {
      return setIsFocus(false);
    },
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
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEa0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxmb3JtXFxTdGFuZGFyZEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBpbnRlcnBvbGF0ZSB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IFN0YW5kYXJkSW5wdXQgZnJvbSAnLi4vaW5wdXQvU3RhbmRhcmRJbnB1dCdcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lJ1xyXG5cclxuY29uc3QgZGVmYXVsdEZvcm1EYXRhID0ge1xyXG4gIG5hbWU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH0sXHJcbiAgcGhvbmU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFNjaGVtYUZpZWxkcyA9IFt7IG5hbWU6ICduYW1lJyB9LCB7IG5hbWU6ICdwaG9uZScgfV1cclxuXHJcbmNvbnN0IFN0YW5kYXJkRm9ybSA9ICh7XHJcbiAgZm9ybURhdGEgPSBkZWZhdWx0Rm9ybURhdGEsXHJcbiAgc2NoZW1hRmllbGRzID0gZGVmYXVsdFNjaGVtYUZpZWxkc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRGb3JtRGF0YSwgc2V0Q3VycmVudEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhKVxyXG4gIGNvbnN0IFtpc0ZvY3VzLCBzZXRJc0ZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHsgY29sb3IgfSA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLnNoYWRlWzIwXSB9LFxyXG4gICAgY29sb3I6IGlzRm9jdXMgPyB0aGVtZS5wYWxldHRlLnNoYWRlWzMwXSA6IHRoZW1lLnBhbGV0dGUuc2hhZGVbMjBdXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZm9ybVN0eWxlID0ge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBib3JkZXI6IGAwLjZweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuc2hhZGVbMzBdfWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IGAke3RoZW1lLnNwYWNpbmcgLyA0fXB4YCxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcgKiAzfXB4ICR7dGhlbWUuc3BhY2luZyAqIDV9cHhgLFxyXG4gICAgYm94U2hhZG93OiBpbnRlcnBvbGF0ZShbY29sb3JdLCBjb2xvciA9PiBgJHt0aGVtZS5ib3hTaGFkb3d9ICR7Y29sb3J9YClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNldEZvcm1EYXRhID0gKGZpZWxkTmFtZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRGb3JtRGF0YSA9IHtcclxuICAgICAgLi4uY3VycmVudEZvcm1EYXRhLFxyXG4gICAgICBbZmllbGROYW1lXToge1xyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRGb3JtRGF0YSh1cGRhdGVkRm9ybURhdGEpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YW5pbWF0ZWQuZm9ybVxyXG4gICAgICAgIHN0eWxlPXtmb3JtU3R5bGV9XHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0SXNGb2N1cyh0cnVlKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldElzRm9jdXMoZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAge3NjaGVtYUZpZWxkcy5tYXAoZmllbGQgPT4gKFxyXG4gICAgICAgICAgPFN0YW5kYXJkSW5wdXRcclxuICAgICAgICAgICAga2V5PXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRGb3JtRGF0YVtmaWVsZC5uYW1lXS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2VJbnB1dD17dmFsdWUgPT4gaGFuZGxlU2V0Rm9ybURhdGEoZmllbGQubmFtZSwgdmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9hbmltYXRlZC5mb3JtPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkRm9ybVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.88004ce7e3bed23dd721.hot-update.js.map