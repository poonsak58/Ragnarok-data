webpackHotUpdate_N_E("pages/quest/the_royal_banquet",{

/***/ "./pages/quest/the_royal_banquet.js":
/*!******************************************!*\
  !*** ./pages/quest/the_royal_banquet.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_quest_NewWorldAccessQuest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/quest/NewWorldAccessQuest */ "./components/quest/NewWorldAccessQuest.js");
/* harmony import */ var _components_quest_TheRoyalBanquet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/quest/TheRoyalBanquet */ "./components/quest/TheRoyalBanquet.js");
/* harmony import */ var _components_quest_TerraGloria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/quest/TerraGloria */ "./components/quest/TerraGloria.js");
/* harmony import */ var _components_quest_Illusion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/quest/Illusion */ "./components/quest/Illusion.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\FUEYMC\\Desktop\\Ragnarok-data\\pages\\quest\\the_royal_banquet.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Banquet = function Banquet() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      royalToggle = _useState[0],
      setRoyalToggle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      terraToggle = _useState2[0],
      setTerraToggle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      illusionToggle = _useState3[0],
      setIllusionToggle = _useState3[1];

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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "The Royal Banquet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2484297253",
    __self: _this
  }, "article{color:#dadada !important;}span.naviText{color:#e0ac28;cursor:pointer;padding:1px;}span.naviCopied{color:#e0ac28;border:1px dotted #e0ac28;padding:0 20px;border-radius:5px;}b{color:white;}h1,h2,h3,h4,h5{border-bottom:1px solid #a2a9b1;}br[Attributes Style]{clear:both;}a{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlVFWU1DXFxEZXNrdG9wXFxSYWduYXJvay1kYXRhXFxwYWdlc1xccXVlc3RcXHRoZV9yb3lhbF9iYW5xdWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDd0IsQUFHa0QsQUFHWCxBQUtBLEFBTUYsQUFHb0IsQUFHckIsQUFHRCxVQUNkLENBSEEsQ0FOQSxFQVhtQixBQUtXLFdBUjlCLElBSWdCLEdBYWhCLFFBUm1CLENBSm5CLGNBS3NCLGtCQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXEZVRVlNQ1xcRGVza3RvcFxcUmFnbmFyb2stZGF0YVxccGFnZXNcXHF1ZXN0XFx0aGVfcm95YWxfYmFucXVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuaW1wb3J0IE5ld1dvcmxkUXVlc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9OZXdXb3JsZEFjY2Vzc1F1ZXN0J1xyXG5pbXBvcnQgVGhlUm95YWxCYW5xdWV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvVGhlUm95YWxCYW5xdWV0J1xyXG5pbXBvcnQgVGVycmFHbG9yaWEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UZXJyYUdsb3JpYSdcclxuaW1wb3J0IElsbHVzaW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvSWxsdXNpb24nXHJcblxyXG5jb25zdCBCYW5xdWV0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtyb3lhbFRvZ2dsZSwgc2V0Um95YWxUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdGVycmFUb2dnbGUsIHNldFRlcnJhVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lsbHVzaW9uVG9nZ2xlLCBzZXRJbGx1c2lvblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBjb3B5TmF2aSA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbWFwXCIpXHJcbiAgICAgICAgbGV0IG1hcFggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIilcclxuICAgICAgICBsZXQgbWFwWSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKVxyXG5cclxuICAgICAgICB2YXIgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRleHRGaWVsZC5pbm5lclRleHQgPSBgL25hdmkgJHttYXB9ICR7bWFwWH0vJHttYXBZfWBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRGaWVsZClcclxuICAgICAgICB0ZXh0RmllbGQuc2VsZWN0KClcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgdGV4dEZpZWxkLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcblxyXG4gICAgICAgIGUucGVyc2lzdCgpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJUaGUgUm95YWwgQmFucXVldFwiPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChhcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoc3Bhbi5uYXZpVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoc3Bhbi5uYXZpQ29waWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoaDEsIGgyLCBoMywgaDQsIGg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTJhOWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGJyW0F0dHJpYnV0ZXMgU3R5bGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFzdGhlYWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyAnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2RhZjk4NWM4LWM2NWItNGM2Yy1hMGJjLWVkMmRlMTk5MzI5YS9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2lJc0ltbHpjeUk2SW5WeWJqcGhjSEE2SWl3aWIySnFJanBiVzNzaWNHRjBhQ0k2SWx3dlpsd3ZaR0ZtT1RnMVl6Z3RZelkxWWkwMFl6WmpMV0V3WW1NdFpXUXlaR1V4T1Rrek1qbGhYQzlrTVhsclpqQXpMVEEyT1RObU1HTXhMV1kyT0RndE5ESmxPUzA0WTJWaUxUWXdZVFkxTlRWbE1HTmlPQzVxY0djaWZWMWRMQ0poZFdRaU9sc2lkWEp1T25ObGNuWnBZMlU2Wm1sc1pTNWtiM2R1Ykc5aFpDSmRmUS5LNUltdV83X2lDejF3SXowcGEtUjFtclFIclN6SXp3WDI0OHNHMXljdjRRJyArICcpJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMHB4JyB9fT5FUCAxNy4xIC0gSWxsdXNpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj7guKrguLPguKvguKPguLHguJrguJXguLHguKfguKXguLDguITguKPguYPguKvguKHguYjguJfguLXguYjguYTguKHguYjguJfguLPguYDguITguKfguKrguKHguLLguIHguYjguK3guJk8YnIgLz5SZXF1aXJlIEx2LiAxMTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmV3V29ybGRRdWVzdCBjb3B5TmF2aT17Y29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgZGlzcGxheTogJ2Jsb2NrJywgY29sb3I6ICcjMDA3YmZmJ319IG9uQ2xpY2s9eygpID0+IHNldFJveWFsVG9nZ2xlKCFyb3lhbFRvZ2dsZSl9Pnsgcm95YWxUb2dnbGUgPyA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWRvd25cIj48L2k+IDogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT4gfSBFUCAxNi4xIC0gVGhlIFJveWFsIEJhbnF1ZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgeyByb3lhbFRvZ2dsZSAmJiA8VGhlUm95YWxCYW5xdWV0IGNvcHlOYXZpPXtjb3B5TmF2aX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdibG9jaycsIGNvbG9yOiAnIzAwN2JmZid9fSBvbkNsaWNrPXsoKSA9PiBzZXRUZXJyYVRvZ2dsZSghdGVycmFUb2dnbGUpfT57IHRlcnJhVG9nZ2xlID8gPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1kb3duXCI+PC9pPiA6IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+IH0gRVAgMTYuMiAtIFRlcnJhIEdsb3JpYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7IHRlcnJhVG9nZ2xlICYmIDxUZXJyYUdsb3JpYSBjb3B5TmF2aT17Y29weU5hdml9IC8+IH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInLCBkaXNwbGF5OiAnYmxvY2snLCBjb2xvcjogJyMwMDdiZmYnfX0gb25DbGljaz17KCkgPT4gc2V0SWxsdXNpb25Ub2dnbGUoIWlsbHVzaW9uVG9nZ2xlKX0+eyBpbGx1c2lvblRvZ2dsZSA/IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtZG93blwiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPiB9IEVQIDE3LjEgLSBJbGx1c2lvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7IGlsbHVzaW9uVG9nZ2xlICYmIDxJbGx1c2lvbiBjb3B5TmF2aT17Y29weU5hdml9IC8+IH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5xdWV0Il19 */\n/*@ sourceURL=C:\\\\Users\\\\FUEYMC\\\\Desktop\\\\Ragnarok-data\\\\pages\\\\quest\\\\the_royal_banquet.js */"), __jsx("header", {
    style: {
      backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')'
    },
    className: "jsx-2484297253" + " " + "masthead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2484297253" + " " + "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2484297253" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2484297253" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2484297253" + " " + "col-lg-8 col-md-10 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-2484297253" + " " + "site-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("h2", {
    style: {
      borderBottom: '0px'
    },
    className: "jsx-2484297253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, "EP 17.1 - Illusion"), __jsx("span", {
    className: "jsx-2484297253" + " " + "subheading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 33
    }
  }, "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E25\u0E30\u0E04\u0E23\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E17\u0E33\u0E40\u0E04\u0E27\u0E2A\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19", __jsx("br", {
    className: "jsx-2484297253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 97
    }
  }), "Require Lv. 110")))))), __jsx("article", {
    className: "jsx-2484297253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2484297253" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(_components_quest_NewWorldAccessQuest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    copyNavi: copyNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }), __jsx("span", {
    style: {
      cursor: 'pointer',
      display: 'block',
      color: '#007bff'
    },
    onClick: function onClick() {
      return setRoyalToggle(!royalToggle);
    },
    className: "jsx-2484297253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, royalToggle ? __jsx("i", {
    className: "jsx-2484297253" + " " + "fas fa-angle-double-down",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 152
    }
  }) : __jsx("i", {
    className: "jsx-2484297253" + " " + "fas fa-angle-double-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 199
    }
  }), " EP 16.1 - The Royal Banquet"), royalToggle && __jsx(_components_quest_TheRoyalBanquet__WEBPACK_IMPORTED_MODULE_4__["default"], {
    copyNavi: copyNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 38
    }
  }), __jsx("span", {
    style: {
      cursor: 'pointer',
      display: 'block',
      color: '#007bff'
    },
    onClick: function onClick() {
      return setTerraToggle(!terraToggle);
    },
    className: "jsx-2484297253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, terraToggle ? __jsx("i", {
    className: "jsx-2484297253" + " " + "fas fa-angle-double-down",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 152
    }
  }) : __jsx("i", {
    className: "jsx-2484297253" + " " + "fas fa-angle-double-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 199
    }
  }), " EP 16.2 - Terra Gloria"), terraToggle && __jsx(_components_quest_TerraGloria__WEBPACK_IMPORTED_MODULE_5__["default"], {
    copyNavi: copyNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 38
    }
  }), __jsx("span", {
    style: {
      cursor: 'pointer',
      display: 'block',
      color: '#007bff'
    },
    onClick: function onClick() {
      return setIllusionToggle(!illusionToggle);
    },
    className: "jsx-2484297253",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, illusionToggle ? __jsx("i", {
    className: "jsx-2484297253" + " " + "fas fa-angle-double-down",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 161
    }
  }) : __jsx("i", {
    className: "jsx-2484297253" + " " + "fas fa-angle-double-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 208
    }
  }), " EP 17.1 - Illusion"), illusionToggle && __jsx(_components_quest_Illusion__WEBPACK_IMPORTED_MODULE_6__["default"], {
    copyNavi: copyNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 41
    }
  }))));
};

_s(Banquet, "U6r3qyOQxlMUmcofNc5pBs75OhU=");

_c = Banquet;
/* harmony default export */ __webpack_exports__["default"] = (Banquet);

var _c;

$RefreshReg$(_c, "Banquet");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuanMiXSwibmFtZXMiOlsiQmFucXVldCIsInVzZVN0YXRlIiwicm95YWxUb2dnbGUiLCJzZXRSb3lhbFRvZ2dsZSIsInRlcnJhVG9nZ2xlIiwic2V0VGVycmFUb2dnbGUiLCJpbGx1c2lvblRvZ2dsZSIsInNldElsbHVzaW9uVG9nZ2xlIiwiY29weU5hdmkiLCJlIiwibWFwIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibWFwWCIsIm1hcFkiLCJ0ZXh0RmllbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImNsYXNzTGlzdCIsImFkZCIsIm5leHRTaWJsaW5nIiwicGVyc2lzdCIsInNldFRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXJCb3R0b20iLCJjdXJzb3IiLCJkaXNwbGF5IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFFb0JDLHNEQUFRLENBQUMsS0FBRCxDQUY1QjtBQUFBLE1BRVhDLFdBRlc7QUFBQSxNQUVFQyxjQUZGOztBQUFBLG1CQUdvQkYsc0RBQVEsQ0FBQyxLQUFELENBSDVCO0FBQUEsTUFHWEcsV0FIVztBQUFBLE1BR0VDLGNBSEY7O0FBQUEsbUJBSTBCSixzREFBUSxDQUFDLEtBQUQsQ0FKbEM7QUFBQSxNQUlYSyxjQUpXO0FBQUEsTUFJS0MsaUJBSkw7O0FBTWxCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUNwQixRQUFJQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxZQUFU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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJIQSxjQUFjLEdBQUc7QUFBQSx3Q0FBYSwwQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBa0Q7QUFBQSx3Q0FBYSwyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTNMLHdCQU5KLEVBT01BLGNBQWMsSUFBSSxNQUFDLGtFQUFEO0FBQVUsWUFBUSxFQUFFRSxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUHhCLENBREosQ0E1Q0osQ0FESjtBQTJESCxDQXhGRDs7R0FBTVIsTzs7S0FBQUEsTztBQTBGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuZGQzNGJhNDAxYWEzNWZjNmMxNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuaW1wb3J0IE5ld1dvcmxkUXVlc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9OZXdXb3JsZEFjY2Vzc1F1ZXN0J1xyXG5pbXBvcnQgVGhlUm95YWxCYW5xdWV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvVGhlUm95YWxCYW5xdWV0J1xyXG5pbXBvcnQgVGVycmFHbG9yaWEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UZXJyYUdsb3JpYSdcclxuaW1wb3J0IElsbHVzaW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvSWxsdXNpb24nXHJcblxyXG5jb25zdCBCYW5xdWV0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtyb3lhbFRvZ2dsZSwgc2V0Um95YWxUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbdGVycmFUb2dnbGUsIHNldFRlcnJhVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lsbHVzaW9uVG9nZ2xlLCBzZXRJbGx1c2lvblRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBjb3B5TmF2aSA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbWFwXCIpXHJcbiAgICAgICAgbGV0IG1hcFggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIilcclxuICAgICAgICBsZXQgbWFwWSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKVxyXG5cclxuICAgICAgICB2YXIgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRleHRGaWVsZC5pbm5lclRleHQgPSBgL25hdmkgJHttYXB9ICR7bWFwWH0vJHttYXBZfWBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRGaWVsZClcclxuICAgICAgICB0ZXh0RmllbGQuc2VsZWN0KClcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgdGV4dEZpZWxkLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcblxyXG4gICAgICAgIGUucGVyc2lzdCgpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGl0bGU9XCJUaGUgUm95YWwgQmFucXVldFwiPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChhcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoc3Bhbi5uYXZpVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoc3Bhbi5uYXZpQ29waWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoaDEsIGgyLCBoMywgaDQsIGg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTJhOWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGJyW0F0dHJpYnV0ZXMgU3R5bGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFzdGhlYWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyAnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2RhZjk4NWM4LWM2NWItNGM2Yy1hMGJjLWVkMmRlMTk5MzI5YS9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2lJc0ltbHpjeUk2SW5WeWJqcGhjSEE2SWl3aWIySnFJanBiVzNzaWNHRjBhQ0k2SWx3dlpsd3ZaR0ZtT1RnMVl6Z3RZelkxWWkwMFl6WmpMV0V3WW1NdFpXUXlaR1V4T1Rrek1qbGhYQzlrTVhsclpqQXpMVEEyT1RObU1HTXhMV1kyT0RndE5ESmxPUzA0WTJWaUxUWXdZVFkxTlRWbE1HTmlPQzVxY0djaWZWMWRMQ0poZFdRaU9sc2lkWEp1T25ObGNuWnBZMlU2Wm1sc1pTNWtiM2R1Ykc5aFpDSmRmUS5LNUltdV83X2lDejF3SXowcGEtUjFtclFIclN6SXp3WDI0OHNHMXljdjRRJyArICcpJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMHB4JyB9fT5FUCAxNy4xIC0gSWxsdXNpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj7guKrguLPguKvguKPguLHguJrguJXguLHguKfguKXguLDguITguKPguYPguKvguKHguYjguJfguLXguYjguYTguKHguYjguJfguLPguYDguITguKfguKrguKHguLLguIHguYjguK3guJk8YnIgLz5SZXF1aXJlIEx2LiAxMTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TmV3V29ybGRRdWVzdCBjb3B5TmF2aT17Y29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgZGlzcGxheTogJ2Jsb2NrJywgY29sb3I6ICcjMDA3YmZmJ319IG9uQ2xpY2s9eygpID0+IHNldFJveWFsVG9nZ2xlKCFyb3lhbFRvZ2dsZSl9Pnsgcm95YWxUb2dnbGUgPyA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWRvd25cIj48L2k+IDogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT4gfSBFUCAxNi4xIC0gVGhlIFJveWFsIEJhbnF1ZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgeyByb3lhbFRvZ2dsZSAmJiA8VGhlUm95YWxCYW5xdWV0IGNvcHlOYXZpPXtjb3B5TmF2aX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdibG9jaycsIGNvbG9yOiAnIzAwN2JmZid9fSBvbkNsaWNrPXsoKSA9PiBzZXRUZXJyYVRvZ2dsZSghdGVycmFUb2dnbGUpfT57IHRlcnJhVG9nZ2xlID8gPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1kb3duXCI+PC9pPiA6IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+IH0gRVAgMTYuMiAtIFRlcnJhIEdsb3JpYTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7IHRlcnJhVG9nZ2xlICYmIDxUZXJyYUdsb3JpYSBjb3B5TmF2aT17Y29weU5hdml9IC8+IH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInLCBkaXNwbGF5OiAnYmxvY2snLCBjb2xvcjogJyMwMDdiZmYnfX0gb25DbGljaz17KCkgPT4gc2V0SWxsdXNpb25Ub2dnbGUoIWlsbHVzaW9uVG9nZ2xlKX0+eyBpbGx1c2lvblRvZ2dsZSA/IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtZG93blwiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPiB9IEVQIDE3LjEgLSBJbGx1c2lvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7IGlsbHVzaW9uVG9nZ2xlICYmIDxJbGx1c2lvbiBjb3B5TmF2aT17Y29weU5hdml9IC8+IH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5xdWV0Il0sInNvdXJjZVJvb3QiOiIifQ==