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
/* harmony default export */ __webpack_exports__["default"] = (function () {
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
    "data-map": "ein_fild05",
    "data-x": "156",
    "data-y": "288",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "(ein_fild05 156, 288)"), __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWVzdC9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbImNvcHlOYXZpIiwiZSIsIm1hcCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIm1hcFgiLCJtYXBZIiwidGV4dEZpZWxkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJyZW1vdmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXh0U2libGluZyIsInBlcnNpc3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSwyRUFBTTtBQUVqQixNQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDcEIsUUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHSixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBQ0EsUUFBSUUsSUFBSSxHQUFHTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBRUEsUUFBSUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQUYsYUFBUyxDQUFDRyxTQUFWLG1CQUErQlIsR0FBL0IsY0FBc0NHLElBQXRDLGNBQThDQyxJQUE5QztBQUNBRSxZQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsU0FBMUI7QUFDQUEsYUFBUyxDQUFDTSxNQUFWO0FBQ0FMLFlBQVEsQ0FBQ00sV0FBVCxDQUFxQixNQUFyQjtBQUNBUCxhQUFTLENBQUNRLE1BQVY7QUFFQWQsS0FBQyxDQUFDRSxNQUFGLENBQVNhLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0FoQixLQUFDLENBQUNFLE1BQUYsQ0FBU2UsV0FBVCxDQUFxQkYsU0FBckIsQ0FBK0JELE1BQS9CLENBQXNDLFFBQXRDO0FBRUFkLEtBQUMsQ0FBQ2tCLE9BQUY7QUFDQUMsY0FBVSxDQUFDLFlBQU07QUFDYm5CLE9BQUMsQ0FBQ0UsTUFBRixDQUFTYSxTQUFULENBQW1CRCxNQUFuQixDQUEwQixRQUExQjtBQUNBZCxPQUFDLENBQUNFLE1BQUYsQ0FBU2UsV0FBVCxDQUFxQkYsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLFFBQW5DO0FBQ0gsS0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlILEdBcEJEOztBQXNCQSxTQUNJLG1FQUNJO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQTJCLFdBQU8sRUFBRSxpQkFBQ2hCLENBQUQ7QUFBQSxhQUFPRCxRQUFRLENBQUNDLENBQUQsQ0FBZjtBQUFBLEtBQXBDO0FBQXdELGdCQUFTLFlBQWpFO0FBQThFLGNBQU8sS0FBckY7QUFBMkYsY0FBTyxLQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLEVBRUk7QUFBTSxhQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixDQURKO0FBTUgsQ0E5QkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuNjM5M2ZhY2M2ZTkxMjYxMDI0NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb3B5TmF2aSA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbWFwXCIpXHJcbiAgICAgICAgbGV0IG1hcFggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIilcclxuICAgICAgICBsZXQgbWFwWSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKVxyXG5cclxuICAgICAgICB2YXIgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRleHRGaWVsZC5pbm5lclRleHQgPSBgL25hdmkgJHttYXB9ICR7bWFwWH0vJHttYXBZfWBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRGaWVsZClcclxuICAgICAgICB0ZXh0RmllbGQuc2VsZWN0KClcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgdGV4dEZpZWxkLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcblxyXG4gICAgICAgIGUucGVyc2lzdCgpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2aVRleHRcIiBvbkNsaWNrPXsoZSkgPT4gY29weU5hdmkoZSl9IGRhdGEtbWFwPVwiZWluX2ZpbGQwNVwiIGRhdGEteD1cIjE1NlwiIGRhdGEteT1cIjI4OFwiPihlaW5fZmlsZDA1IDE1NiwgMjg4KTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2aUNvcGllZCBkLW5vbmVcIj5Db3BpZWQhPC9zcGFuPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=