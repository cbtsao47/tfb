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

  console.log(currentFormData);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: "jsx-734524463",
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
    id: "734524463",
    __self: this
  }, "form.jsx-734524463{border:1px solid black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:".concat(theme.spacing, "px;borderradius:").concat(theme.spacing / 4, "px;padding:").concat(theme.spacing, "px ").concat(theme.spacing * 1.5, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHa0MsdUJBQ1YsMEVBQ1MsOEVBQ2lCLHVDQUNLLDRDQUMwQixzRUFDeEUiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxmb3JtXFxTdGFuZGFyZEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RhbmRhcmRJbnB1dCBmcm9tICcuLi9pbnB1dC9TdGFuZGFyZElucHV0J1xyXG5cclxuY29uc3QgZGVmYXVsdEZvcm1EYXRhID0ge1xyXG4gIG5hbWU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH0sXHJcbiAgcGhvbmU6IHtcclxuICAgIHZhbHVlOiAnJ1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFNjaGVtYUZpZWxkcyA9IFt7IG5hbWU6ICduYW1lJyB9LCB7IG5hbWU6ICdwaG9uZScgfV1cclxuXHJcbmNvbnN0IFN0YW5kYXJkRm9ybSA9ICh7XHJcbiAgZm9ybURhdGEgPSBkZWZhdWx0Rm9ybURhdGEsXHJcbiAgc2NoZW1hRmllbGRzID0gZGVmYXVsdFNjaGVtYUZpZWxkc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnRGb3JtRGF0YSwgc2V0Q3VycmVudEZvcm1EYXRhXSA9IHVzZVN0YXRlKGZvcm1EYXRhKVxyXG4gIGNvbnN0IGhhbmRsZVNldEZvcm1EYXRhID0gKGZpZWxkTmFtZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHVwZGF0ZWRGb3JtRGF0YSA9IHtcclxuICAgICAgLi4uY3VycmVudEZvcm1EYXRhLFxyXG4gICAgICBbZmllbGROYW1lXToge1xyXG4gICAgICAgIHZhbHVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRGb3JtRGF0YSh1cGRhdGVkRm9ybURhdGEpXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRGb3JtRGF0YSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAge3NjaGVtYUZpZWxkcy5tYXAoZmllbGQgPT4gKFxyXG4gICAgICAgICAgPFN0YW5kYXJkSW5wdXRcclxuICAgICAgICAgICAga2V5PXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRGb3JtRGF0YVtmaWVsZC5uYW1lXS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2VJbnB1dD17dmFsdWUgPT4gaGFuZGxlU2V0Rm9ybURhdGEoZmllbGQubmFtZSwgdmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4O1xyXG4gICAgICAgICAgYm9yZGVycmFkaXVzOiAke3RoZW1lLnNwYWNpbmcgLyA0fXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDEuNX1weDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.d3d70425c41610b367a7.hot-update.js.map