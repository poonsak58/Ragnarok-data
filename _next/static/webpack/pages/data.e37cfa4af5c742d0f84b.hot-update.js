webpackHotUpdate_N_E("pages/data",{

/***/ "./components/data/LoginAccess.js":
/*!****************************************!*\
  !*** ./components/data/LoginAccess.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ \"./store/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/poonsak/Ragnarok-data/components/data/LoginAccess.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar LoginAccess = function LoginAccess() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    pin: ''\n  }),\n      currentPin = _useState[0],\n      setCurrentPin = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    text: '',\n    error: false\n  }),\n      isError = _useState2[0],\n      setError = _useState2[1];\n\n  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"])(_store__WEBPACK_IMPORTED_MODULE_4__[\"personState\"]),\n      _useRecoilState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useRecoilState, 2),\n      userObj = _useRecoilState2[0],\n      setUserObj = _useRecoilState2[1];\n\n  var changeHandler = function changeHandler(event) {\n    setCurrentPin(_objectSpread(_objectSpread({}, currentPin), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, event.target.name, event.target.value)));\n    setError(_objectSpread(_objectSpread({}, isError), {}, {\n      text: '',\n      error: false\n    }));\n  };\n\n  var signin = function signin(e) {\n    e.preventDefault();\n    console.log('current pin : ', currentPin);\n\n    if (currentPin.pin == '1669') {\n      setError(_objectSpread(_objectSpread({}, isError), {}, {\n        text: '',\n        error: false\n      }));\n      setUserObj(_objectSpread(_objectSpread({}, userObj), {}, {\n        isLogin: true\n      }));\n      document.cookie = \"isLogin=true; path=/\";\n    } else {\n      setError(_objectSpread(_objectSpread({}, isError), {}, {\n        text: 'Pin is wrong!!!',\n        error: true\n      }));\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"col text-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 25\n    }\n  }, \"\\u0E01\\u0E23\\u0E38\\u0E13\\u0E32\\u0E01\\u0E23\\u0E2D\\u0E01 PIN \", __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 43\n    }\n  }), \"\\u0E01\\u0E48\\u0E2D\\u0E19\\u0E40\\u0E02\\u0E49\\u0E32\\u0E2A\\u0E39\\u0E48\\u0E14\\u0E49\\u0E32\\u0E19\\u0E21\\u0E37\\u0E14\"), __jsx(\"img\", {\n    src: \"\".concat(\"\", \"/images/1272.gif\"),\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 25\n    }\n  }))), __jsx(\"div\", {\n    className: \"row justify-content-center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"col-6 \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }\n  }, __jsx(\"form\", {\n    onSubmit: signin,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 25\n    }\n  }, __jsx(\"div\", {\n    className: \"form-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 29\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    name: \"pin\",\n    value: currentPin.pin,\n    className: \"form-control \".concat(isError.error ? 'is-invalid' : ''),\n    placeholder: \"Pin\",\n    onChange: changeHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 33\n    }\n  }), isError.error && __jsx(\"div\", {\n    id: \"validationServer03Feedback\",\n    className: \"invalid-feedback\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 37\n    }\n  }, isError.text)), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary btn-lg btn-block\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 29\n    }\n  }, \"Unlock\"))))));\n};\n\n_s(LoginAccess, \"/xmE+0X0xpQlu46FisEb/0+FI2w=\", false, function () {\n  return [recoil__WEBPACK_IMPORTED_MODULE_3__[\"useRecoilState\"]];\n});\n\n_c = LoginAccess;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginAccess);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginAccess\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXRhL0xvZ2luQWNjZXNzLmpzP2U0MjgiXSwibmFtZXMiOlsiTG9naW5BY2Nlc3MiLCJ1c2VTdGF0ZSIsInBpbiIsImN1cnJlbnRQaW4iLCJzZXRDdXJyZW50UGluIiwidGV4dCIsImVycm9yIiwiaXNFcnJvciIsInNldEVycm9yIiwidXNlUmVjb2lsU3RhdGUiLCJwZXJzb25TdGF0ZSIsInVzZXJPYmoiLCJzZXRVc2VyT2JqIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2lnbmluIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImlzTG9naW4iLCJkb2N1bWVudCIsImNvb2tpZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUVjQyxzREFBUSxDQUFDO0FBQUVDLE9BQUcsRUFBRTtBQUFQLEdBQUQsQ0FGdEI7QUFBQSxNQUVmQyxVQUZlO0FBQUEsTUFFSEMsYUFGRzs7QUFBQSxtQkFHTUgsc0RBQVEsQ0FBQztBQUFFSSxRQUFJLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUU7QUFBbkIsR0FBRCxDQUhkO0FBQUEsTUFHZkMsT0FIZTtBQUFBLE1BR05DLFFBSE07O0FBQUEsd0JBS1FDLDZEQUFjLENBQUNDLGtEQUFELENBTHRCO0FBQUE7QUFBQSxNQUtmQyxPQUxlO0FBQUEsTUFLTkMsVUFMTTs7QUFPdEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDN0JWLGlCQUFhLGlDQUNORCxVQURNLHFHQUVSVyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFGTCxFQUVZRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FGekIsR0FBYjtBQUlBVCxZQUFRLGlDQUNERCxPQURDO0FBRUpGLFVBQUksRUFBRSxFQUZGO0FBR0pDLFdBQUssRUFBRTtBQUhILE9BQVI7QUFLSCxHQVZEOztBQVlBLE1BQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNsQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCbkIsVUFBOUI7O0FBQ0EsUUFBSUEsVUFBVSxDQUFDRCxHQUFYLElBQWtCLE1BQXRCLEVBQThCO0FBQzFCTSxjQUFRLGlDQUNERCxPQURDO0FBRUpGLFlBQUksRUFBRSxFQUZGO0FBR0pDLGFBQUssRUFBRTtBQUhILFNBQVI7QUFLQU0sZ0JBQVUsaUNBQ0hELE9BREc7QUFFTlksZUFBTyxFQUFFO0FBRkgsU0FBVjtBQUlBQyxjQUFRLENBQUNDLE1BQVQ7QUFDSCxLQVhELE1BV087QUFDSGpCLGNBQVEsaUNBQ0RELE9BREM7QUFFSkYsWUFBSSxFQUFFLGlCQUZGO0FBR0pDLGFBQUssRUFBRTtBQUhILFNBQVI7QUFLSDtBQUNKLEdBckJEOztBQXVCQSxTQUNJLG1FQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9FQUNrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGxCLGlIQURKLEVBSUk7QUFBSyxPQUFHLG1DQUFSO0FBQXdELE9BQUcsRUFBQyxFQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixDQURKLEVBY0k7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sWUFBUSxFQUFFWSxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFJLEVBQUMsS0FBNUI7QUFBa0MsU0FBSyxFQUFFZixVQUFVLENBQUNELEdBQXBEO0FBQXlELGFBQVMseUJBQWtCSyxPQUFPLENBQUNELEtBQVIsR0FBZ0IsWUFBaEIsR0FBK0IsRUFBakQsQ0FBbEU7QUFBeUgsZUFBVyxFQUFDLEtBQXJJO0FBQTJJLFlBQVEsRUFBRU8sYUFBcko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUtOLE9BQU8sQ0FBQ0QsS0FBUixJQUNHO0FBQUssTUFBRSxFQUFDLDRCQUFSO0FBQXFDLGFBQVMsRUFBQyxrQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxPQUFPLENBQUNGLElBRGIsQ0FIUixDQURKLEVBU0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsa0NBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSixDQURKLENBREosQ0FkSixDQURKLENBREo7QUFtQ0gsQ0E3RUQ7O0dBQU1MLFc7VUFLNEJTLHFEOzs7S0FMNUJULFc7QUErRVNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXRhL0xvZ2luQWNjZXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBwZXJzb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcblxuY29uc3QgTG9naW5BY2Nlc3MgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbY3VycmVudFBpbiwgc2V0Q3VycmVudFBpbl0gPSB1c2VTdGF0ZSh7IHBpbjogJycgfSlcbiAgICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoeyB0ZXh0OiAnJywgZXJyb3I6IGZhbHNlIH0pXG5cbiAgICBjb25zdCBbdXNlck9iaiwgc2V0VXNlck9ial0gPSB1c2VSZWNvaWxTdGF0ZShwZXJzb25TdGF0ZSlcblxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFBpbih7XG4gICAgICAgICAgICAuLi5jdXJyZW50UGluLFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRFcnJvcih7XG4gICAgICAgICAgICAuLi5pc0Vycm9yLFxuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBlcnJvcjogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3Qgc2lnbmluID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHBpbiA6ICcsIGN1cnJlbnRQaW4pXG4gICAgICAgIGlmIChjdXJyZW50UGluLnBpbiA9PSAnMTY2OScpIHtcbiAgICAgICAgICAgIHNldEVycm9yKHtcbiAgICAgICAgICAgICAgICAuLi5pc0Vycm9yLFxuICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldFVzZXJPYmooe1xuICAgICAgICAgICAgICAgIC4uLnVzZXJPYmosXG4gICAgICAgICAgICAgICAgaXNMb2dpbjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgaXNMb2dpbj10cnVlOyBwYXRoPS9gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXJyb3Ioe1xuICAgICAgICAgICAgICAgIC4uLmlzRXJyb3IsXG4gICAgICAgICAgICAgICAgdGV4dDogJ1BpbiBpcyB3cm9uZyEhIScsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOC4geC4o+C4uOC4k+C4suC4geC4o+C4reC4gSBQSU4gPGJyLz7guIHguYjguK3guJnguYDguILguYnguLLguKrguLnguYjguJTguYnguLLguJnguKHguLfguJRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2ltYWdlcy8xMjcyLmdpZmB9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9VUkx9L2ltYWdlcy8xMjcyLmdpZmB9IGFsdD1cIlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NpZ25pbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGluXCIgdmFsdWU9e2N1cnJlbnRQaW4ucGlufSBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtpc0Vycm9yLmVycm9yID8gJ2lzLWludmFsaWQnIDogJyd9YH0gcGxhY2Vob2xkZXI9XCJQaW5cIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRXJyb3IuZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ2YWxpZGF0aW9uU2VydmVyMDNGZWVkYmFja1wiIGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFcnJvci50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnIGJ0bi1ibG9ja1wiPlVubG9jazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5BY2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/data/LoginAccess.js\n");

/***/ })

})