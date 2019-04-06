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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["3658693578", [_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 1.5]]]),
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
    id: "3658693578",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.shade[30], _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, _theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 1.5],
    __self: this
  }, "form.__jsx-style-dynamic-selector{display:inline-block;padding:".concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, "px;border:1px solid ").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.shade[30], ";border-radius:").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing / 4, "px;padding:").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing, "px ").concat(_theme__WEBPACK_IMPORTED_MODULE_6__["default"].spacing * 1.5, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHZ0MscUJBQ2tCLHVDQUNPLDhDQUNELDZDQUN5QixzRUFDeEUiLCJmaWxlIjoiQzpcXFVzZXJzXFxwaGFtclxcY29kZVxcdGZiXFxjb21wb25lbnRzXFxmb3JtXFxTdGFuZGFyZEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RhbmRhcmRJbnB1dCBmcm9tICcuLi9pbnB1dC9TdGFuZGFyZElucHV0J1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vdGhlbWUnXHJcblxyXG5jb25zdCBkZWZhdWx0Rm9ybURhdGEgPSB7XHJcbiAgbmFtZToge1xyXG4gICAgdmFsdWU6ICcnXHJcbiAgfSxcclxuICBwaG9uZToge1xyXG4gICAgdmFsdWU6ICcnXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0U2NoZW1hRmllbGRzID0gW3sgbmFtZTogJ25hbWUnIH0sIHsgbmFtZTogJ3Bob25lJyB9XVxyXG5cclxuY29uc3QgU3RhbmRhcmRGb3JtID0gKHtcclxuICBmb3JtRGF0YSA9IGRlZmF1bHRGb3JtRGF0YSxcclxuICBzY2hlbWFGaWVsZHMgPSBkZWZhdWx0U2NoZW1hRmllbGRzXHJcbn0pID0+IHtcclxuICBjb25zdCBbY3VycmVudEZvcm1EYXRhLCBzZXRDdXJyZW50Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGEpXHJcbiAgY29uc3QgaGFuZGxlU2V0Rm9ybURhdGEgPSAoZmllbGROYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZEZvcm1EYXRhID0ge1xyXG4gICAgICAuLi5jdXJyZW50Rm9ybURhdGEsXHJcbiAgICAgIFtmaWVsZE5hbWVdOiB7XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudEZvcm1EYXRhKHVwZGF0ZWRGb3JtRGF0YSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHtzY2hlbWFGaWVsZHMubWFwKGZpZWxkID0+IChcclxuICAgICAgICAgIDxTdGFuZGFyZElucHV0XHJcbiAgICAgICAgICAgIGtleT17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50Rm9ybURhdGFbZmllbGQubmFtZV0udmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlSW5wdXQ9e3ZhbHVlID0+IGhhbmRsZVNldEZvcm1EYXRhKGZpZWxkLm5hbWUsIHZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnNoYWRlWzMwXX07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNwYWNpbmcgLyA0fXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDEuNX1weDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.65eb1e47e9bd8d3dfa48.hot-update.js.map