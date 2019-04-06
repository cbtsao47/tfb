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
    color: isFocus || !isFocus && value ? _theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.blue : _theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[20]
  }),
      color = _useSpring.color;

  var handleSetFormData = function handleSetFormData(fieldName, value) {
    var updatedFormData = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, currentFormData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fieldName, {
      value: value
    }));

    setCurrentFormData(updatedFormData);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2381084648", [_theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 3, _theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 5, _theme__WEBPACK_IMPORTED_MODULE_7__["default"].boxShadow]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
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
        lineNumber: 44
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2381084648",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 3, _theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 5, _theme__WEBPACK_IMPORTED_MODULE_7__["default"].boxShadow],
    __self: this
  }, "form.__jsx-style-dynamic-selector{display:inline-block;border:0.6px solid ".concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.shade[30], ";border-radius:").concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing / 4, "px;padding:").concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 3, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].spacing * 5, "px;box-shadow:").concat(_theme__WEBPACK_IMPORTED_MODULE_7__["default"].boxShadow, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ea0IsQUFHZ0MscUJBQzJCLGdEQUNILDZDQUN5QixzRUFDOUIsd0NBQzFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCBTdGFuZGFyZElucHV0IGZyb20gJy4uL2lucHV0L1N0YW5kYXJkSW5wdXQnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSdcclxuXHJcbmNvbnN0IGRlZmF1bHRGb3JtRGF0YSA9IHtcclxuICBuYW1lOiB7XHJcbiAgICB2YWx1ZTogJydcclxuICB9LFxyXG4gIHBob25lOiB7XHJcbiAgICB2YWx1ZTogJydcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTY2hlbWFGaWVsZHMgPSBbeyBuYW1lOiAnbmFtZScgfSwgeyBuYW1lOiAncGhvbmUnIH1dXHJcblxyXG5jb25zdCBTdGFuZGFyZEZvcm0gPSAoe1xyXG4gIGZvcm1EYXRhID0gZGVmYXVsdEZvcm1EYXRhLFxyXG4gIHNjaGVtYUZpZWxkcyA9IGRlZmF1bHRTY2hlbWFGaWVsZHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50Rm9ybURhdGEsIHNldEN1cnJlbnRGb3JtRGF0YV0gPSB1c2VTdGF0ZShmb3JtRGF0YSlcclxuICBjb25zdCBbaXNGb2N1cywgc2V0SXNGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IGNvbG9yIH0gPSB1c2VTcHJpbmcoe1xyXG4gICAgZnJvbTogeyBjb2xvcjogdGhlbWUucGFsZXR0ZS5zaGFkZVsyMF0gfSxcclxuICAgIGNvbG9yOlxyXG4gICAgICBpc0ZvY3VzIHx8ICghaXNGb2N1cyAmJiB2YWx1ZSlcclxuICAgICAgICA/IHRoZW1lLnBhbGV0dGUuYmx1ZVxyXG4gICAgICAgIDogdGhlbWUucGFsZXR0ZS5zaGFkZVsyMF1cclxuICB9KVxyXG5cclxuICBjb25zdCBoYW5kbGVTZXRGb3JtRGF0YSA9IChmaWVsZE5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkRm9ybURhdGEgPSB7XHJcbiAgICAgIC4uLmN1cnJlbnRGb3JtRGF0YSxcclxuICAgICAgW2ZpZWxkTmFtZV06IHtcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50Rm9ybURhdGEodXBkYXRlZEZvcm1EYXRhKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAge3NjaGVtYUZpZWxkcy5tYXAoZmllbGQgPT4gKFxyXG4gICAgICAgICAgPFN0YW5kYXJkSW5wdXRcclxuICAgICAgICAgICAga2V5PXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRGb3JtRGF0YVtmaWVsZC5uYW1lXS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2VJbnB1dD17dmFsdWUgPT4gaGFuZGxlU2V0Rm9ybURhdGEoZmllbGQubmFtZSwgdmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBib3JkZXI6IDAuNnB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5zaGFkZVszMF19O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zcGFjaW5nIC8gNH1weDtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZyAqIDN9cHggJHt0aGVtZS5zcGFjaW5nICogNX1weDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICR7dGhlbWUuYm94U2hhZG93fTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.6a8026de23488b29604d.hot-update.js.map