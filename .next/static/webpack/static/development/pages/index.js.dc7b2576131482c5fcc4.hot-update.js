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
/* harmony import */ var _input_StandardInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input/StandardInput */ "./components/input/StandardInput.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme */ "./theme.js");



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

  var handleSetFormData = function handleSetFormData(fieldName, value) {
    var updatedFormData = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, currentFormData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fieldName, {
      value: value
    }));

    setCurrentFormData(updatedFormData);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1340207211", [_theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 3, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 5, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].boxShadow]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, schemaFields.map(function (field) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_StandardInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: field.name,
      name: field.name,
      placeholder: field.name,
      value: currentFormData[field.name].value,
      onChangeInput: function onChangeInput(value) {
        return handleSetFormData(field.name, value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1340207211",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 3, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 5, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].boxShadow],
    __self: this
  }, "form.__jsx-style-dynamic-selector{display:inline-block;border:1px solid ".concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.shade[30], ";border-radius:").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, "px;padding:").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 3, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 5, "px;box-shadow:").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].boxShadow, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHZ0MscUJBQ3lCLDhDQUNELDZDQUN5QixzRUFDOUIsd0NBQzFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0YW5kYXJkSW5wdXQgZnJvbSAnLi4vaW5wdXQvU3RhbmRhcmRJbnB1dCdcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lJ1xyXG5cclxuY29uc3QgZGVmYXVsdEZvcm1EYXRhID0ge1xyXG4gIG5hbWU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH0sXHJcbiAgcGhvbmU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFNjaGVtYUZpZWxkcyA9IFt7IG5hbWU6ICduYW1lJyB9LCB7IG5hbWU6ICdwaG9uZScgfV1cclxuXHJcbmNvbnN0IFN0YW5kYXJkRm9ybSA9ICh7XHJcbiAgZm9ybURhdGEgPSBkZWZhdWx0Rm9ybURhdGEsXHJcbiAgc2NoZW1hRmllbGRzID0gZGVmYXVsdFNjaGVtYUZpZWxkc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRGb3JtRGF0YSwgc2V0Q3VycmVudEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhKVxyXG4gIGNvbnN0IGhhbmRsZVNldEZvcm1EYXRhID0gKGZpZWxkTmFtZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRGb3JtRGF0YSA9IHtcclxuICAgICAgLi4uY3VycmVudEZvcm1EYXRhLFxyXG4gICAgICBbZmllbGROYW1lXToge1xyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRGb3JtRGF0YSh1cGRhdGVkRm9ybURhdGEpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICB7c2NoZW1hRmllbGRzLm1hcChmaWVsZCA9PiAoXHJcbiAgICAgICAgICA8U3RhbmRhcmRJbnB1dFxyXG4gICAgICAgICAgICBrZXk9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZvcm1EYXRhW2ZpZWxkLm5hbWVdLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZUlucHV0PXt2YWx1ZSA9PiBoYW5kbGVTZXRGb3JtRGF0YShmaWVsZC5uYW1lLCB2YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5zaGFkZVszMF19O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zcGFjaW5nIC8gNH1weDtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZyAqIDN9cHggJHt0aGVtZS5zcGFjaW5nICogNX1weDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICR7dGhlbWUuYm94U2hhZG93fTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.dc7b2576131482c5fcc4.hot-update.js.map