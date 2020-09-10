webpackHotUpdate_N_E("pages/quest/the_royal_banquet",{

/***/ "./components/quest/Navigation.js":
/*!****************************************!*\
  !*** ./components/quest/Navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\FUEYMC\\Desktop\\Ragnarok-data\\components\\quest\\Navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var copyNavi = function copyNavi(e) {
    var map = e.target.getAttribute("data-map");
    var mapX = e.target.getAttribute("data-x");
    var mapY = e.target.getAttribute("data-y");
    var textField = document.createElement('textarea');
    textField.innerText = "/navi ".concat(map, " ").concat(mapX, "/").concat(mapY);
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    e.target.classList.add("d-none");
    e.target.nextSibling.classList.remove("d-none");
    e.persist();
    setTimeout(function () {
      e.target.classList.remove("d-none");
      e.target.nextSibling.classList.add("d-none");
    }, 1000);
  };

  console.log(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    className: "naviText",
    onClick: function onClick(e) {
      return copyNavi(e);
    },
    "data-map": "ein_fild05",
    "data-x": "156",
    "data-y": "288",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "(", props.data, " 156, 288)"), __jsx("span", {
    className: "naviCopied d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Copied!"));
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWVzdC9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29weU5hdmkiLCJlIiwibWFwIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibWFwWCIsIm1hcFkiLCJ0ZXh0RmllbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImNsYXNzTGlzdCIsImFkZCIsIm5leHRTaWJsaW5nIiwicGVyc2lzdCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUseUVBQUNBLEtBQUQsRUFBVztBQUV0QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDcEIsUUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHSixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBQ0EsUUFBSUUsSUFBSSxHQUFHTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBRUEsUUFBSUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQUYsYUFBUyxDQUFDRyxTQUFWLG1CQUErQlIsR0FBL0IsY0FBc0NHLElBQXRDLGNBQThDQyxJQUE5QztBQUNBRSxZQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsU0FBMUI7QUFDQUEsYUFBUyxDQUFDTSxNQUFWO0FBQ0FMLFlBQVEsQ0FBQ00sV0FBVCxDQUFxQixNQUFyQjtBQUNBUCxhQUFTLENBQUNRLE1BQVY7QUFFQWQsS0FBQyxDQUFDRSxNQUFGLENBQVNhLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0FoQixLQUFDLENBQUNFLE1BQUYsQ0FBU2UsV0FBVCxDQUFxQkYsU0FBckIsQ0FBK0JELE1BQS9CLENBQXNDLFFBQXRDO0FBRUFkLEtBQUMsQ0FBQ2tCLE9BQUY7QUFDQUMsY0FBVSxDQUFDLFlBQU07QUFDYm5CLE9BQUMsQ0FBQ0UsTUFBRixDQUFTYSxTQUFULENBQW1CRCxNQUFuQixDQUEwQixRQUExQjtBQUNBZCxPQUFDLENBQUNFLE1BQUYsQ0FBU2UsV0FBVCxDQUFxQkYsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLFFBQW5DO0FBQ0gsS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlILEdBcEJEOztBQXFCQUksU0FBTyxDQUFDQyxHQUFSLENBQVl2QixLQUFaO0FBQ0EsU0FDSSxtRUFDSTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFPLEVBQUUsaUJBQUNFLENBQUQ7QUFBQSxhQUFPRCxRQUFRLENBQUNDLENBQUQsQ0FBZjtBQUFBLEtBQXBDO0FBQXdELGdCQUFTLFlBQWpFO0FBQThFLGNBQU8sS0FBckY7QUFBMkYsY0FBTyxLQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTBHRixLQUFLLENBQUN3QixJQUFoSCxlQURKLEVBRUk7QUFBTSxhQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixDQURKO0FBTUgsQ0E5QkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuYzg2ZTc0YzljODY3MWI4OGU3NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvcHlOYXZpID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgbWFwID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXBcIilcclxuICAgICAgICBsZXQgbWFwWCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKVxyXG4gICAgICAgIGxldCBtYXBZID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpXHJcblxyXG4gICAgICAgIHZhciB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgdGV4dEZpZWxkLmlubmVyVGV4dCA9IGAvbmF2aSAke21hcH0gJHttYXBYfS8ke21hcFl9YFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEZpZWxkKVxyXG4gICAgICAgIHRleHRGaWVsZC5zZWxlY3QoKVxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcclxuICAgICAgICB0ZXh0RmllbGQucmVtb3ZlKClcclxuXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuXHJcbiAgICAgICAgZS5wZXJzaXN0KClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2aVRleHRcIiBvbkNsaWNrPXsoZSkgPT4gY29weU5hdmkoZSl9IGRhdGEtbWFwPVwiZWluX2ZpbGQwNVwiIGRhdGEteD1cIjE1NlwiIGRhdGEteT1cIjI4OFwiPih7cHJvcHMuZGF0YX0gMTU2LCAyODgpPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZpQ29waWVkIGQtbm9uZVwiPkNvcGllZCE8L3NwYW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==