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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    className: "naviText",
    onClick: function onClick(e) {
      return copyNavi(e);
    },
    "data-map": props['data-map'],
    "data-x": props['data-x'],
    "data-y": props['data-y'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "(", props['data-map'], " ", props['data-x'], ", ", props['data-y'], ")"), __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWVzdC9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29weU5hdmkiLCJlIiwibWFwIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibWFwWCIsIm1hcFkiLCJ0ZXh0RmllbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImNsYXNzTGlzdCIsImFkZCIsIm5leHRTaWJsaW5nIiwicGVyc2lzdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLHlFQUFDQSxLQUFELEVBQVc7QUFFdEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCLFFBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsVUFBdEIsQ0FBVjtBQUNBLFFBQUlDLElBQUksR0FBR0osQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsUUFBdEIsQ0FBWDtBQUNBLFFBQUlFLElBQUksR0FBR0wsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsUUFBdEIsQ0FBWDtBQUVBLFFBQUlHLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0FGLGFBQVMsQ0FBQ0csU0FBVixtQkFBK0JSLEdBQS9CLGNBQXNDRyxJQUF0QyxjQUE4Q0MsSUFBOUM7QUFDQUUsWUFBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFNBQTFCO0FBQ0FBLGFBQVMsQ0FBQ00sTUFBVjtBQUNBTCxZQUFRLENBQUNNLFdBQVQsQ0FBcUIsTUFBckI7QUFDQVAsYUFBUyxDQUFDUSxNQUFWO0FBRUFkLEtBQUMsQ0FBQ0UsTUFBRixDQUFTYSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixRQUF2QjtBQUNBaEIsS0FBQyxDQUFDRSxNQUFGLENBQVNlLFdBQVQsQ0FBcUJGLFNBQXJCLENBQStCRCxNQUEvQixDQUFzQyxRQUF0QztBQUVBZCxLQUFDLENBQUNrQixPQUFGO0FBQ0FDLGNBQVUsQ0FBQyxZQUFNO0FBQ2JuQixPQUFDLENBQUNFLE1BQUYsQ0FBU2EsU0FBVCxDQUFtQkQsTUFBbkIsQ0FBMEIsUUFBMUI7QUFDQWQsT0FBQyxDQUFDRSxNQUFGLENBQVNlLFdBQVQsQ0FBcUJGLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQztBQUNILEtBSFMsRUFHUCxJQUhPLENBQVY7QUFJSCxHQXBCRDs7QUFzQkEsU0FDSSxtRUFDSTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUEyQixXQUFPLEVBQUUsaUJBQUNoQixDQUFEO0FBQUEsYUFBT0QsUUFBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxLQUFwQztBQUF3RCxnQkFBVUYsS0FBSyxDQUFDLFVBQUQsQ0FBdkU7QUFBcUYsY0FBUUEsS0FBSyxDQUFDLFFBQUQsQ0FBbEc7QUFBOEcsY0FBUUEsS0FBSyxDQUFDLFFBQUQsQ0FBM0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUF5SUEsS0FBSyxDQUFDLFVBQUQsQ0FBOUksT0FBNkpBLEtBQUssQ0FBQyxRQUFELENBQWxLLFFBQWdMQSxLQUFLLENBQUMsUUFBRCxDQUFyTCxNQURKLEVBRUk7QUFBTSxhQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixDQURKO0FBTUgsQ0E5QkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuOWFhNWUxNmQ3ZWNjOGViZDBlZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvcHlOYXZpID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgbWFwID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXBcIilcclxuICAgICAgICBsZXQgbWFwWCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKVxyXG4gICAgICAgIGxldCBtYXBZID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpXHJcblxyXG4gICAgICAgIHZhciB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgdGV4dEZpZWxkLmlubmVyVGV4dCA9IGAvbmF2aSAke21hcH0gJHttYXBYfS8ke21hcFl9YFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEZpZWxkKVxyXG4gICAgICAgIHRleHRGaWVsZC5zZWxlY3QoKVxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcclxuICAgICAgICB0ZXh0RmllbGQucmVtb3ZlKClcclxuXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuXHJcbiAgICAgICAgZS5wZXJzaXN0KClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZpVGV4dFwiIG9uQ2xpY2s9eyhlKSA9PiBjb3B5TmF2aShlKX0gZGF0YS1tYXA9e3Byb3BzWydkYXRhLW1hcCddfSBkYXRhLXg9e3Byb3BzWydkYXRhLXgnXX0gZGF0YS15PXtwcm9wc1snZGF0YS15J119Pih7cHJvcHNbJ2RhdGEtbWFwJ119IHtwcm9wc1snZGF0YS14J119LCB7cHJvcHNbJ2RhdGEteSddfSk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmlDb3BpZWQgZC1ub25lXCI+Q29waWVkITwvc3Bhbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9