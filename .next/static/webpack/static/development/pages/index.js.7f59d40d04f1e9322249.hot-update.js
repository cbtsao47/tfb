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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1030242198", [_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 1.5]]]),
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
    id: "1030242198",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 1.5],
    __self: this
  }, "form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:".concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, "px;border:1px solid black;border-radius:").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, "px;padding:").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 1.5, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHd0IsMEVBQ1MsOEVBQ2lCLHVDQUNoQix1QkFDc0IsNkNBQ3lCLHNFQUN4RSIsImZpbGUiOiJDOlxcVXNlcnNcXHBoYW1yXFxjb2RlXFx0ZmJcXGNvbXBvbmVudHNcXGZvcm1cXFN0YW5kYXJkRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdGFuZGFyZElucHV0IGZyb20gJy4uL2lucHV0L1N0YW5kYXJkSW5wdXQnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IGRlZmF1bHRGb3JtRGF0YSA9IHtcclxuICBuYW1lOiB7XHJcbiAgICB2YWx1ZTogJydcclxuICB9LFxyXG4gIHBob25lOiB7XHJcbiAgICB2YWx1ZTogJydcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTY2hlbWFGaWVsZHMgPSBbeyBuYW1lOiAnbmFtZScgfSwgeyBuYW1lOiAncGhvbmUnIH1dXHJcblxyXG5jb25zdCBTdGFuZGFyZEZvcm0gPSAoe1xyXG4gIGZvcm1EYXRhID0gZGVmYXVsdEZvcm1EYXRhLFxyXG4gIHNjaGVtYUZpZWxkcyA9IGRlZmF1bHRTY2hlbWFGaWVsZHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50Rm9ybURhdGEsIHNldEN1cnJlbnRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtRGF0YSlcclxuICBjb25zdCBoYW5kbGVTZXRGb3JtRGF0YSA9IChmaWVsZE5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkRm9ybURhdGEgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnRGb3JtRGF0YSxcclxuICAgICAgW2ZpZWxkTmFtZV06IHtcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50Rm9ybURhdGEodXBkYXRlZEZvcm1EYXRhKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAge3NjaGVtYUZpZWxkcy5tYXAoZmllbGQgPT4gKFxyXG4gICAgICAgICAgPFN0YW5kYXJkSW5wdXRcclxuICAgICAgICAgICAga2V5PXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRGb3JtRGF0YVtmaWVsZC5uYW1lXS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2VJbnB1dD17dmFsdWUgPT4gaGFuZGxlU2V0Rm9ybURhdGEoZmllbGQubmFtZSwgdmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ31weDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zcGFjaW5nIC8gNH1weDtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZ31weCAke3RoZW1lLnNwYWNpbmcgKiAxLjV9cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YW5kYXJkRm9ybVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.7f59d40d04f1e9322249.hot-update.js.map