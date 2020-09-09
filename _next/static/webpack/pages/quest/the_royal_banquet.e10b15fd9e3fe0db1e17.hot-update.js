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
    id: "1237612460",
    __self: _this
  }, "article{color:#dadada !important;}span.naviText{color:#e0ac28;cursor:pointer;padding:1px;}span.naviCopied{color:#e0ac28;border:1px dotted #e0ac28;padding:0 20px;border-radius:5px;}b{color:white;}h1,h2,h3,h4,h5{border-bottom:1px solid #a2a9b1;}br[Attributes Style]{clear:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlVFWU1DXFxEZXNrdG9wXFxSYWduYXJvay1kYXRhXFxwYWdlc1xccXVlc3RcXHRoZV9yb3lhbF9iYW5xdWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDd0IsQUFHa0QsQUFHWCxBQUtBLEFBTUYsQUFHb0IsQUFHckIsV0FDZixDQU5BLEVBWG1CLEFBS1csV0FSOUIsSUFJZ0IsR0FhaEIsUUFSbUIsQ0FKbkIsY0FLc0Isa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlVFWU1DXFxEZXNrdG9wXFxSYWduYXJvay1kYXRhXFxwYWdlc1xccXVlc3RcXHRoZV9yb3lhbF9iYW5xdWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5pbXBvcnQgTmV3V29ybGRRdWVzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L05ld1dvcmxkQWNjZXNzUXVlc3QnXHJcbmltcG9ydCBUaGVSb3lhbEJhbnF1ZXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UaGVSb3lhbEJhbnF1ZXQnXHJcbmltcG9ydCBUZXJyYUdsb3JpYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L1RlcnJhR2xvcmlhJ1xyXG5pbXBvcnQgSWxsdXNpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9JbGx1c2lvbidcclxuXHJcbmNvbnN0IEJhbnF1ZXQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3JveWFsVG9nZ2xlLCBzZXRSb3lhbFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt0ZXJyYVRvZ2dsZSwgc2V0VGVycmFUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaWxsdXNpb25Ub2dnbGUsIHNldElsbHVzaW9uVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGNvcHlOYXZpID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgbWFwID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXBcIilcclxuICAgICAgICBsZXQgbWFwWCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKVxyXG4gICAgICAgIGxldCBtYXBZID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpXHJcblxyXG4gICAgICAgIHZhciB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgdGV4dEZpZWxkLmlubmVyVGV4dCA9IGAvbmF2aSAke21hcH0gJHttYXBYfS8ke21hcFl9YFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEZpZWxkKVxyXG4gICAgICAgIHRleHRGaWVsZC5zZWxlY3QoKVxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcclxuICAgICAgICB0ZXh0RmllbGQucmVtb3ZlKClcclxuXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuXHJcbiAgICAgICAgZS5wZXJzaXN0KClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCB0aXRsZT1cIlRoZSBSb3lhbCBCYW5xdWV0XCI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlDb3BpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChoMSwgaDIsIGgzLCBoNCwgaDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMmE5YjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYnJbQXR0cmlidXRlcyBTdHlsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1hc3RoZWFkXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi9kYWY5ODVjOC1jNjViLTRjNmMtYTBiYy1lZDJkZTE5OTMyOWEvZDF5a2YwMy0wNjkzZjBjMS1mNjg4LTQyZTktOGNlYi02MGE2NTU1ZTBjYjguanBnP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09pSXNJbWx6Y3lJNkluVnlianBoY0hBNklpd2liMkpxSWpwYlczc2ljR0YwYUNJNklsd3ZabHd2WkdGbU9UZzFZemd0WXpZMVlpMDBZelpqTFdFd1ltTXRaV1F5WkdVeE9Ua3pNamxoWEM5a01YbHJaakF6TFRBMk9UTm1NR014TFdZMk9EZ3ROREpsT1MwNFkyVmlMVFl3WVRZMU5UVmxNR05pT0M1cWNHY2lmVjFkTENKaGRXUWlPbHNpZFhKdU9uTmxjblpwWTJVNlptbHNaUzVrYjNkdWJHOWhaQ0pkZlEuSzVJbXVfN19pQ3oxd0l6MHBhLVIxbXJRSHJTekl6d1gyNDhzRzF5Y3Y0UScgKyAnKScgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzBweCcgfX0+RVAgMTcuMSAtIElsbHVzaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+4Liq4Liz4Lir4Lij4Lix4Lia4LiV4Lix4Lin4Lil4Liw4LiE4Lij4LmD4Lir4Lih4LmI4LiX4Li14LmI4LmE4Lih4LmI4LiX4Liz4LmA4LiE4Lin4Liq4Lih4Liy4LiB4LmI4Lit4LiZPGJyIC8+UmVxdWlyZSBMdi4gMTEwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE5ld1dvcmxkUXVlc3QgY29weU5hdmk9e2NvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdibG9jayd9fSBvbkNsaWNrPXsoKSA9PiBzZXRSb3lhbFRvZ2dsZSghcm95YWxUb2dnbGUpfT5Sb3lhbCBCYW5xdWV0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcm95YWxUb2dnbGUgJiYgPFRoZVJveWFsQmFucXVldCBjb3B5TmF2aT17Y29weU5hdml9IC8+IH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInLCBkaXNwbGF5OiAnYmxvY2snfX0gb25DbGljaz17KCkgPT4gc2V0VGVycmFUb2dnbGUoIXRlcnJhVG9nZ2xlKX0+VGVycmEgR2xvcmlhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgdGVycmFUb2dnbGUgJiYgPFRlcnJhR2xvcmlhIGNvcHlOYXZpPXtjb3B5TmF2aX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdibG9jayd9fSBvbkNsaWNrPXsoKSA9PiBzZXRJbGx1c2lvblRvZ2dsZSghaWxsdXNpb25Ub2dnbGUpfT5JbGx1c2lvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7IGlsbHVzaW9uVG9nZ2xlICYmIDxJbGx1c2lvbiBjb3B5TmF2aT17Y29weU5hdml9IC8+IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbnF1ZXQiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FUEYMC\\\\Desktop\\\\Ragnarok-data\\\\pages\\\\quest\\\\the_royal_banquet.js */"), __jsx("header", {
    style: {
      backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')'
    },
    className: "jsx-1237612460" + " " + "masthead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1237612460" + " " + "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1237612460" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1237612460" + " " + "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1237612460" + " " + "col-lg-8 col-md-10 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1237612460" + " " + "site-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx("h2", {
    style: {
      borderBottom: '0px'
    },
    className: "jsx-1237612460",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, "EP 17.1 - Illusion"), __jsx("span", {
    className: "jsx-1237612460" + " " + "subheading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E25\u0E30\u0E04\u0E23\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E17\u0E33\u0E40\u0E04\u0E27\u0E2A\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19", __jsx("br", {
    className: "jsx-1237612460",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 97
    }
  }), "Require Lv. 110")))))), __jsx("article", {
    className: "jsx-1237612460",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1237612460" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_components_quest_NewWorldAccessQuest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    copyNavi: copyNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx("span", {
    style: {
      cursor: 'pointer',
      display: 'block'
    },
    onClick: function onClick() {
      return setRoyalToggle(!royalToggle);
    },
    className: "jsx-1237612460",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Royal Banquet"), royalToggle && __jsx(_components_quest_TheRoyalBanquet__WEBPACK_IMPORTED_MODULE_4__["default"], {
    copyNavi: copyNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 38
    }
  }), __jsx("span", {
    style: {
      cursor: 'pointer',
      display: 'block'
    },
    onClick: function onClick() {
      return setTerraToggle(!terraToggle);
    },
    className: "jsx-1237612460",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "Terra Gloria"), terraToggle && __jsx(_components_quest_TerraGloria__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      display: 'block'
    },
    onClick: function onClick() {
      return setIllusionToggle(!illusionToggle);
    },
    className: "jsx-1237612460",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Illusion"), illusionToggle && __jsx(_components_quest_Illusion__WEBPACK_IMPORTED_MODULE_6__["default"], {
    copyNavi: copyNavi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuanMiXSwibmFtZXMiOlsiQmFucXVldCIsInVzZVN0YXRlIiwicm95YWxUb2dnbGUiLCJzZXRSb3lhbFRvZ2dsZSIsInRlcnJhVG9nZ2xlIiwic2V0VGVycmFUb2dnbGUiLCJpbGx1c2lvblRvZ2dsZSIsInNldElsbHVzaW9uVG9nZ2xlIiwiY29weU5hdmkiLCJlIiwibWFwIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwibWFwWCIsIm1hcFkiLCJ0ZXh0RmllbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZSIsImNsYXNzTGlzdCIsImFkZCIsIm5leHRTaWJsaW5nIiwicGVyc2lzdCIsInNldFRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXJCb3R0b20iLCJjdXJzb3IiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBRW9CQyxzREFBUSxDQUFDLEtBQUQsQ0FGNUI7QUFBQSxNQUVYQyxXQUZXO0FBQUEsTUFFRUMsY0FGRjs7QUFBQSxtQkFHb0JGLHNEQUFRLENBQUMsS0FBRCxDQUg1QjtBQUFBLE1BR1hHLFdBSFc7QUFBQSxNQUdFQyxjQUhGOztBQUFBLG1CQUkwQkosc0RBQVEsQ0FBQyxLQUFELENBSmxDO0FBQUEsTUFJWEssY0FKVztBQUFBLE1BSUtDLGlCQUpMOztBQU1sQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDcEIsUUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixV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QUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLEVBSU1BLFdBQVcsSUFBSSxNQUFDLHlFQUFEO0FBQWlCLFlBQVEsRUFBRU0sUUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpyQixFQUtJO0FBQU0sU0FBSyxFQUFFO0FBQUN1QixZQUFNLEVBQUUsU0FBVDtBQUFvQkMsYUFBTyxFQUFFO0FBQTdCLEtBQWI7QUFBb0QsV0FBTyxFQUFFO0FBQUEsYUFBTTNCLGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXBCO0FBQUEsS0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLEVBTU1BLFdBQVcsSUFBSSxNQUFDLHFFQUFEO0FBQWEsWUFBUSxFQUFFSSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTnJCLEVBT0k7QUFBTSxTQUFLLEVBQUU7QUFBQ3VCLFlBQU0sRUFBRSxTQUFUO0FBQW9CQyxhQUFPLEVBQUU7QUFBN0IsS0FBYjtBQUFvRCxXQUFPLEVBQUU7QUFBQSxhQUFNekIsaUJBQWlCLENBQUMsQ0FBQ0QsY0FBRixDQUF2QjtBQUFBLEtBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixFQVFNQSxjQUFjLElBQUksTUFBQyxrRUFBRDtBQUFVLFlBQVEsRUFBRUUsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJ4QixDQURKLENBekNKLENBREo7QUF3REgsQ0FyRkQ7O0dBQU1SLE87O0tBQUFBLE87QUF1RlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1ZXN0L3RoZV9yb3lhbF9iYW5xdWV0LmUxMGIxNWZkOWUzZmUwZGIxZTE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuXHJcbmltcG9ydCBOZXdXb3JsZFF1ZXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvTmV3V29ybGRBY2Nlc3NRdWVzdCdcclxuaW1wb3J0IFRoZVJveWFsQmFucXVldCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L1RoZVJveWFsQmFucXVldCdcclxuaW1wb3J0IFRlcnJhR2xvcmlhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvVGVycmFHbG9yaWEnXHJcbmltcG9ydCBJbGx1c2lvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L0lsbHVzaW9uJ1xyXG5cclxuY29uc3QgQmFucXVldCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcm95YWxUb2dnbGUsIHNldFJveWFsVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3RlcnJhVG9nZ2xlLCBzZXRUZXJyYVRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpbGx1c2lvblRvZ2dsZSwgc2V0SWxsdXNpb25Ub2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgY29weU5hdmkgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBtYXAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hcFwiKVxyXG4gICAgICAgIGxldCBtYXBYID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpXHJcbiAgICAgICAgbGV0IG1hcFkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIilcclxuXHJcbiAgICAgICAgdmFyIHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gYC9uYXZpICR7bWFwfSAke21hcFh9LyR7bWFwWX1gXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgdGV4dEZpZWxkLnNlbGVjdCgpXHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG5cclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG5cclxuICAgICAgICBlLnBlcnNpc3QoKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiVGhlIFJveWFsIEJhbnF1ZXRcIj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RhZGFkYSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKHNwYW4ubmF2aVRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKHNwYW4ubmF2aUNvcGllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZG90dGVkICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGgxLCBoMiwgaDMsIGg0LCBoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EyYTliMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChicltBdHRyaWJ1dGVzIFN0eWxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFzdGhlYWRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyAnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2RhZjk4NWM4LWM2NWItNGM2Yy1hMGJjLWVkMmRlMTk5MzI5YS9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2lJc0ltbHpjeUk2SW5WeWJqcGhjSEE2SWl3aWIySnFJanBiVzNzaWNHRjBhQ0k2SWx3dlpsd3ZaR0ZtT1RnMVl6Z3RZelkxWWkwMFl6WmpMV0V3WW1NdFpXUXlaR1V4T1Rrek1qbGhYQzlrTVhsclpqQXpMVEEyT1RObU1HTXhMV1kyT0RndE5ESmxPUzA0WTJWaUxUWXdZVFkxTlRWbE1HTmlPQzVxY0djaWZWMWRMQ0poZFdRaU9sc2lkWEp1T25ObGNuWnBZMlU2Wm1sc1pTNWtiM2R1Ykc5aFpDSmRmUS5LNUltdV83X2lDejF3SXowcGEtUjFtclFIclN6SXp3WDI0OHNHMXljdjRRJyArICcpJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMHB4JyB9fT5FUCAxNy4xIC0gSWxsdXNpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj7guKrguLPguKvguKPguLHguJrguJXguLHguKfguKXguLDguITguKPguYPguKvguKHguYjguJfguLXguYjguYTguKHguYjguJfguLPguYDguITguKfguKrguKHguLLguIHguYjguK3guJk8YnIgLz5SZXF1aXJlIEx2LiAxMTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TmV3V29ybGRRdWVzdCBjb3B5TmF2aT17Y29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgZGlzcGxheTogJ2Jsb2NrJ319IG9uQ2xpY2s9eygpID0+IHNldFJveWFsVG9nZ2xlKCFyb3lhbFRvZ2dsZSl9PlJveWFsIEJhbnF1ZXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgeyByb3lhbFRvZ2dsZSAmJiA8VGhlUm95YWxCYW5xdWV0IGNvcHlOYXZpPXtjb3B5TmF2aX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdibG9jayd9fSBvbkNsaWNrPXsoKSA9PiBzZXRUZXJyYVRvZ2dsZSghdGVycmFUb2dnbGUpfT5UZXJyYSBHbG9yaWE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgeyB0ZXJyYVRvZ2dsZSAmJiA8VGVycmFHbG9yaWEgY29weU5hdmk9e2NvcHlOYXZpfSAvPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJywgZGlzcGxheTogJ2Jsb2NrJ319IG9uQ2xpY2s9eygpID0+IHNldElsbHVzaW9uVG9nZ2xlKCFpbGx1c2lvblRvZ2dsZSl9PklsbHVzaW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgaWxsdXNpb25Ub2dnbGUgJiYgPElsbHVzaW9uIGNvcHlOYXZpPXtjb3B5TmF2aX0gLz4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFucXVldCJdLCJzb3VyY2VSb290IjoiIn0=