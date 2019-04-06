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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_StandardInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/StandardInput */ "./components/input/StandardInput.js");



var _jsxFileName = "C:\\Users\\phamr\\code\\tfb\\components\\form\\StandardForm.js";



var defaultFormData = {
  name: {
    value: ''
  },
  phone: {
    value: ''
  }
};
var schemaFields = ['name', 'phone'];

var StandardForm = function StandardForm(_ref) {
  var _ref$formData = _ref.formData,
      formData = _ref$formData === void 0 ? defaultFormData : _ref$formData,
      _ref$schemaFields = _ref.schemaFields,
      schemaFields = _ref$schemaFields === void 0 ? schemaFields : _ref$schemaFields;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(formData),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      currentFormData = _useState2[0],
      setCurrentFormData = _useState2[1];

  var handleSetFormData = function handleSetFormData(fieldName, value) {
    var updatedFormData = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, currentFormData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fieldName, value));

    setFormData(updatedFormData);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, schemaFields.map(function (field) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_input_StandardInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: field.name,
      placeholder: field.name,
      value: currentFormData[field.name].value,
      onChange: function onChange(value) {
        return handleSetFormData(field.name, value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StandardForm);

/***/ })

})
//# sourceMappingURL=index.js.1f8f6923e8979c5e3e3f.hot-update.js.map