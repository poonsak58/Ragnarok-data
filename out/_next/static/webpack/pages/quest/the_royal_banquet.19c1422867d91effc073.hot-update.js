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
    "data-map": "ein_fild05",
    "data-x": "156",
    "data-y": "288",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "(", props.data - map, " 156, 288)"), __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9xdWVzdC9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiY29weU5hdmkiLCJlIiwibWFwIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibWFwWCIsIm1hcFkiLCJ0ZXh0RmllbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImNsYXNzTGlzdCIsImFkZCIsIm5leHRTaWJsaW5nIiwicGVyc2lzdCIsInNldFRpbWVvdXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSx5RUFBQ0EsS0FBRCxFQUFXO0FBRXRCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUNwQixRQUFJQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxZQUFULENBQXNCLFVBQXRCLENBQVY7QUFDQSxRQUFJQyxJQUFJLEdBQUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxZQUFULENBQXNCLFFBQXRCLENBQVg7QUFDQSxRQUFJRSxJQUFJLEdBQUdMLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxZQUFULENBQXNCLFFBQXRCLENBQVg7QUFFQSxRQUFJRyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBRixhQUFTLENBQUNHLFNBQVYsbUJBQStCUixHQUEvQixjQUFzQ0csSUFBdEMsY0FBOENDLElBQTlDO0FBQ0FFLFlBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxTQUExQjtBQUNBQSxhQUFTLENBQUNNLE1BQVY7QUFDQUwsWUFBUSxDQUFDTSxXQUFULENBQXFCLE1BQXJCO0FBQ0FQLGFBQVMsQ0FBQ1EsTUFBVjtBQUVBZCxLQUFDLENBQUNFLE1BQUYsQ0FBU2EsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDQWhCLEtBQUMsQ0FBQ0UsTUFBRixDQUFTZSxXQUFULENBQXFCRixTQUFyQixDQUErQkQsTUFBL0IsQ0FBc0MsUUFBdEM7QUFFQWQsS0FBQyxDQUFDa0IsT0FBRjtBQUNBQyxjQUFVLENBQUMsWUFBTTtBQUNibkIsT0FBQyxDQUFDRSxNQUFGLENBQVNhLFNBQVQsQ0FBbUJELE1BQW5CLENBQTBCLFFBQTFCO0FBQ0FkLE9BQUMsQ0FBQ0UsTUFBRixDQUFTZSxXQUFULENBQXFCRixTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUMsUUFBbkM7QUFDSCxLQUhTLEVBR1AsSUFITyxDQUFWO0FBSUgsR0FwQkQ7O0FBc0JBLFNBQ0ksbUVBQ0k7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBMkIsV0FBTyxFQUFFLGlCQUFDaEIsQ0FBRDtBQUFBLGFBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsS0FBcEM7QUFBd0QsZ0JBQVMsWUFBakU7QUFBOEUsY0FBTyxLQUFyRjtBQUEyRixjQUFPLEtBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBMEdGLEtBQUssQ0FBQ3NCLElBQU4sR0FBV25CLEdBQXJILGVBREosRUFFSTtBQUFNLGFBQVMsRUFBQyxtQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLENBREo7QUFNSCxDQTlCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWVzdC90aGVfcm95YWxfYmFucXVldC4xOWMxNDIyODY3ZDkxZWZmYzA3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29weU5hdmkgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBtYXAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hcFwiKVxyXG4gICAgICAgIGxldCBtYXBYID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpXHJcbiAgICAgICAgbGV0IG1hcFkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIilcclxuXHJcbiAgICAgICAgdmFyIHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gYC9uYXZpICR7bWFwfSAke21hcFh9LyR7bWFwWX1gXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgdGV4dEZpZWxkLnNlbGVjdCgpXHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG5cclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG5cclxuICAgICAgICBlLnBlcnNpc3QoKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmlUZXh0XCIgb25DbGljaz17KGUpID0+IGNvcHlOYXZpKGUpfSBkYXRhLW1hcD1cImVpbl9maWxkMDVcIiBkYXRhLXg9XCIxNTZcIiBkYXRhLXk9XCIyODhcIj4oe3Byb3BzLmRhdGEtbWFwfSAxNTYsIDI4OCk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmlDb3BpZWQgZC1ub25lXCI+Q29waWVkITwvc3Bhbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9