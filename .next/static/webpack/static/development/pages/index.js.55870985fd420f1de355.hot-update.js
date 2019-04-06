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
    className: "jsx-2006244917",
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
    id: "2006244917",
    __self: this
  }, "form.jsx-2006244917{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:".concat(theme.spacing, "px;border:1px solid black;border-radius:").concat(theme.spacing / 4, "px;padding:").concat(theme.spacing, "px ").concat(theme.spacing * 1.5, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGhhbXJcXGNvZGVcXHRmYlxcY29tcG9uZW50c1xcZm9ybVxcU3RhbmRhcmRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHd0IsMEVBQ1MsOEVBQ2lCLHVDQUNoQix1QkFDc0IsNkNBQ3lCLHNFQUN4RSIsImZpbGUiOiJDOlxcVXNlcnNcXHBoYW1yXFxjb2RlXFx0ZmJcXGNvbXBvbmVudHNcXGZvcm1cXFN0YW5kYXJkRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdGFuZGFyZElucHV0IGZyb20gJy4uL2lucHV0L1N0YW5kYXJkSW5wdXQnXHJcblxyXG5jb25zdCBkZWZhdWx0Rm9ybURhdGEgPSB7XHJcbiAgbmFtZToge1xyXG4gICAgdmFsdWU6ICcnXHJcbiAgfSxcclxuICBwaG9uZToge1xyXG4gICAgdmFsdWU6ICcnXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0U2NoZW1hRmllbGRzID0gW3sgbmFtZTogJ25hbWUnIH0sIHsgbmFtZTogJ3Bob25lJyB9XVxyXG5cclxuY29uc3QgU3RhbmRhcmRGb3JtID0gKHtcclxuICBmb3JtRGF0YSA9IGRlZmF1bHRGb3JtRGF0YSxcclxuICBzY2hlbWFGaWVsZHMgPSBkZWZhdWx0U2NoZW1hRmllbGRzXHJcbn0pID0+IHtcclxuICBjb25zdCBbY3VycmVudEZvcm1EYXRhLCBzZXRDdXJyZW50Rm9ybURhdGFdID0gdXNlU3RhdGUoZm9ybURhdGEpXHJcbiAgY29uc3QgaGFuZGxlU2V0Rm9ybURhdGEgPSAoZmllbGROYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZEZvcm1EYXRhID0ge1xyXG4gICAgICAuLi5jdXJyZW50Rm9ybURhdGEsXHJcbiAgICAgIFtmaWVsZE5hbWVdOiB7XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0Q3VycmVudEZvcm1EYXRhKHVwZGF0ZWRGb3JtRGF0YSlcclxuICB9XHJcbiAgY29uc29sZS5sb2coY3VycmVudEZvcm1EYXRhKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICB7c2NoZW1hRmllbGRzLm1hcChmaWVsZCA9PiAoXHJcbiAgICAgICAgICA8U3RhbmRhcmRJbnB1dFxyXG4gICAgICAgICAgICBrZXk9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZvcm1EYXRhW2ZpZWxkLm5hbWVdLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZUlucHV0PXt2YWx1ZSA9PiBoYW5kbGVTZXRGb3JtRGF0YShmaWVsZC5uYW1lLCB2YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNwYWNpbmcgLyA0fXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nfXB4ICR7dGhlbWUuc3BhY2luZyAqIDEuNX1weDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhbmRhcmRGb3JtXHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.55870985fd420f1de355.hot-update.js.map