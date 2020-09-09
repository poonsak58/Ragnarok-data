webpackHotUpdate_N_E("pages/quest/the_royal_banquet",{

/***/ "./pages/quest/the_royal_banquet.js":
/*!******************************************!*\
  !*** ./pages/quest/the_royal_banquet.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_quest_NewWorldAccessQuest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/quest/NewWorldAccessQuest */ "./components/quest/NewWorldAccessQuest.js");
/* harmony import */ var _components_quest_TheRoyalBanquet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/quest/TheRoyalBanquet */ "./components/quest/TheRoyalBanquet.js");
/* harmony import */ var _components_quest_TerraGloria__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/quest/TerraGloria */ "./components/quest/TerraGloria.js");
/* harmony import */ var _components_quest_Illusion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/quest/Illusion */ "./components/quest/Illusion.js");







var _jsxFileName = "C:\\Users\\FUEYMC\\Desktop\\Ragnarok-data\\pages\\quest\\the_royal_banquet.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Banquet = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Banquet, _Component);

  var _super = _createSuper(Banquet);

  function Banquet() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banquet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "copyNavi", function (e) {
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
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banquet, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "The Royal Banquet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1237612460",
        __self: this
      }, "article{color:#dadada !important;}span.naviText{color:#e0ac28;cursor:pointer;padding:1px;}span.naviCopied{color:#e0ac28;border:1px dotted #e0ac28;padding:0 20px;border-radius:5px;}b{color:white;}h1,h2,h3,h4,h5{border-bottom:1px solid #a2a9b1;}br[Attributes Style]{clear:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlVFWU1DXFxEZXNrdG9wXFxSYWduYXJvay1kYXRhXFxwYWdlc1xccXVlc3RcXHRoZV9yb3lhbF9iYW5xdWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DNEIsQUFHa0QsQUFHWCxBQUtBLEFBTUYsQUFHb0IsQUFHckIsV0FDZixDQU5BLEVBWG1CLEFBS1csV0FSOUIsSUFJZ0IsR0FhaEIsUUFSbUIsQ0FKbkIsY0FLc0Isa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlVFWU1DXFxEZXNrdG9wXFxSYWduYXJvay1kYXRhXFxwYWdlc1xccXVlc3RcXHRoZV9yb3lhbF9iYW5xdWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuaW1wb3J0IE5ld1dvcmxkUXVlc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9OZXdXb3JsZEFjY2Vzc1F1ZXN0J1xyXG5pbXBvcnQgVGhlUm95YWxCYW5xdWV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvVGhlUm95YWxCYW5xdWV0J1xyXG5pbXBvcnQgVGVycmFHbG9yaWEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UZXJyYUdsb3JpYSdcclxuaW1wb3J0IElsbHVzaW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvSWxsdXNpb24nXHJcblxyXG5jbGFzcyBCYW5xdWV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb3B5TmF2aSA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbWFwXCIpXHJcbiAgICAgICAgbGV0IG1hcFggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIilcclxuICAgICAgICBsZXQgbWFwWSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKVxyXG5cclxuICAgICAgICB2YXIgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRleHRGaWVsZC5pbm5lclRleHQgPSBgL25hdmkgJHttYXB9ICR7bWFwWH0vJHttYXBZfWBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRGaWVsZClcclxuICAgICAgICB0ZXh0RmllbGQuc2VsZWN0KClcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgdGV4dEZpZWxkLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcblxyXG4gICAgICAgIGUucGVyc2lzdCgpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiVGhlIFJveWFsIEJhbnF1ZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlDb3BpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChoMSwgaDIsIGgzLCBoNCwgaDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMmE5YjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYnJbQXR0cmlidXRlcyBTdHlsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYXN0aGVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyAnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2RhZjk4NWM4LWM2NWItNGM2Yy1hMGJjLWVkMmRlMTk5MzI5YS9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2lJc0ltbHpjeUk2SW5WeWJqcGhjSEE2SWl3aWIySnFJanBiVzNzaWNHRjBhQ0k2SWx3dlpsd3ZaR0ZtT1RnMVl6Z3RZelkxWWkwMFl6WmpMV0V3WW1NdFpXUXlaR1V4T1Rrek1qbGhYQzlrTVhsclpqQXpMVEEyT1RObU1HTXhMV1kyT0RndE5ESmxPUzA0WTJWaUxUWXdZVFkxTlRWbE1HTmlPQzVxY0djaWZWMWRMQ0poZFdRaU9sc2lkWEp1T25ObGNuWnBZMlU2Wm1sc1pTNWtiM2R1Ykc5aFpDSmRmUS5LNUltdV83X2lDejF3SXowcGEtUjFtclFIclN6SXp3WDI0OHNHMXljdjRRJyArICcpJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzBweCcgfX0+RVAgMTcuMSAtIElsbHVzaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPuC4quC4s+C4q+C4o+C4seC4muC4leC4seC4p+C4peC4sOC4hOC4o+C5g+C4q+C4oeC5iOC4l+C4teC5iOC5hOC4oeC5iOC4l+C4s+C5gOC4hOC4p+C4quC4oeC4suC4geC5iOC4reC4mTxiciAvPlJlcXVpcmUgTHYuIDExMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOZXdXb3JsZFF1ZXN0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlUm95YWxCYW5xdWV0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVycmFHbG9yaWEgY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWxsdXNpb24gY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFucXVldCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FUEYMC\\\\Desktop\\\\Ragnarok-data\\\\pages\\\\quest\\\\the_royal_banquet.js */"), __jsx("header", {
        style: {
          backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')'
        },
        className: "jsx-1237612460" + " " + "masthead",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-1237612460" + " " + "overlay",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "jsx-1237612460" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "jsx-1237612460" + " " + "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-1237612460" + " " + "col-lg-8 col-md-10 mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "jsx-1237612460" + " " + "site-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 33
        }
      }, __jsx("h2", {
        style: {
          borderBottom: '0px'
        },
        className: "jsx-1237612460",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 37
        }
      }, "EP 17.1 - Illusion"), __jsx("span", {
        className: "jsx-1237612460" + " " + "subheading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 37
        }
      }, "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E25\u0E30\u0E04\u0E23\u0E43\u0E2B\u0E21\u0E48\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E17\u0E33\u0E40\u0E04\u0E27\u0E2A\u0E21\u0E32\u0E01\u0E48\u0E2D\u0E19", __jsx("br", {
        className: "jsx-1237612460",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 101
        }
      }), "Require Lv. 110")))))), __jsx("article", {
        className: "jsx-1237612460",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-1237612460" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }, __jsx(_components_quest_Illusion__WEBPACK_IMPORTED_MODULE_13__["default"], {
        copyNavi: this.copyNavi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return Banquet;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Banquet);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuanMiXSwibmFtZXMiOlsiQmFucXVldCIsImUiLCJtYXAiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtYXBYIiwibWFwWSIsInRleHRGaWVsZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwiY2xhc3NMaXN0IiwiYWRkIiwibmV4dFNpYmxpbmciLCJwZXJzaXN0Iiwic2V0VGltZW91dCIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlckJvdHRvbSIsImNvcHlOYXZpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7bU5BRVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2QsVUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFWO0FBQ0EsVUFBSUMsSUFBSSxHQUFHSixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBQ0EsVUFBSUUsSUFBSSxHQUFHTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBRUEsVUFBSUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQUYsZUFBUyxDQUFDRyxTQUFWLG1CQUErQlIsR0FBL0IsY0FBc0NHLElBQXRDLGNBQThDQyxJQUE5QztBQUNBRSxjQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsU0FBMUI7QUFDQUEsZUFBUyxDQUFDTSxNQUFWO0FBQ0FMLGNBQVEsQ0FBQ00sV0FBVCxDQUFxQixNQUFyQjtBQUNBUCxlQUFTLENBQUNRLE1BQVY7QUFFQWQsT0FBQyxDQUFDRSxNQUFGLENBQVNhLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFFBQXZCO0FBQ0FoQixPQUFDLENBQUNFLE1BQUYsQ0FBU2UsV0FBVCxDQUFxQkYsU0FBckIsQ0FBK0JELE1BQS9CLENBQXNDLFFBQXRDO0FBRUFkLE9BQUMsQ0FBQ2tCLE9BQUY7QUFDQUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JuQixTQUFDLENBQUNFLE1BQUYsQ0FBU2EsU0FBVCxDQUFtQkQsTUFBbkIsQ0FBMEIsUUFBMUI7QUFDQWQsU0FBQyxDQUFDRSxNQUFGLENBQVNlLFdBQVQsQ0FBcUJGLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxRQUFuQztBQUNILE9BSFMsRUFHUCxJQUhPLENBQVY7QUFJSCxLOzs7Ozs7OzZCQUVRO0FBQ0wsYUFDSSxNQUFDLDBEQUFEO0FBQVEsYUFBSyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscTRNQTBCSTtBQUNJLGFBQUssRUFBRTtBQUFFSSx5QkFBZSxFQUFFLFNBQVMsK2RBQVQsR0FBMmU7QUFBOWYsU0FEWDtBQUFBLDRDQUFrQixVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0k7QUFBQSw0Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFISixFQUlJO0FBQUEsNENBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDRDQUFlLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDRDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksYUFBSyxFQUFFO0FBQUVDLHNCQUFZLEVBQUU7QUFBaEIsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosRUFFSTtBQUFBLDRDQUFnQixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtOQUFnRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBaEUsb0JBRkosQ0FESixDQURKLENBREosQ0FKSixDQTFCSixFQXlDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDRDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlJLE1BQUMsbUVBQUQ7QUFBVSxnQkFBUSxFQUFFLEtBQUtDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKSixDQURKLENBekNKLENBREo7QUFvREg7Ozs7RUE3RWlCQywrQzs7QUFnRlB4QixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWVzdC90aGVfcm95YWxfYmFucXVldC5jMDRmMjRiYTIxMGZjOGJiNDAxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuaW1wb3J0IE5ld1dvcmxkUXVlc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9OZXdXb3JsZEFjY2Vzc1F1ZXN0J1xyXG5pbXBvcnQgVGhlUm95YWxCYW5xdWV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvVGhlUm95YWxCYW5xdWV0J1xyXG5pbXBvcnQgVGVycmFHbG9yaWEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UZXJyYUdsb3JpYSdcclxuaW1wb3J0IElsbHVzaW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvSWxsdXNpb24nXHJcblxyXG5jbGFzcyBCYW5xdWV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb3B5TmF2aSA9IChlKSA9PiB7XHJcbiAgICAgICAgbGV0IG1hcCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbWFwXCIpXHJcbiAgICAgICAgbGV0IG1hcFggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIilcclxuICAgICAgICBsZXQgbWFwWSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKVxyXG5cclxuICAgICAgICB2YXIgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIHRleHRGaWVsZC5pbm5lclRleHQgPSBgL25hdmkgJHttYXB9ICR7bWFwWH0vJHttYXBZfWBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRleHRGaWVsZClcclxuICAgICAgICB0ZXh0RmllbGQuc2VsZWN0KClcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXHJcbiAgICAgICAgdGV4dEZpZWxkLnJlbW92ZSgpXHJcblxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcblxyXG4gICAgICAgIGUucGVyc2lzdCgpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiVGhlIFJveWFsIEJhbnF1ZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlDb3BpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChoMSwgaDIsIGgzLCBoNCwgaDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMmE5YjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYnJbQXR0cmlidXRlcyBTdHlsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYXN0aGVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyAnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2RhZjk4NWM4LWM2NWItNGM2Yy1hMGJjLWVkMmRlMTk5MzI5YS9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2lJc0ltbHpjeUk2SW5WeWJqcGhjSEE2SWl3aWIySnFJanBiVzNzaWNHRjBhQ0k2SWx3dlpsd3ZaR0ZtT1RnMVl6Z3RZelkxWWkwMFl6WmpMV0V3WW1NdFpXUXlaR1V4T1Rrek1qbGhYQzlrTVhsclpqQXpMVEEyT1RObU1HTXhMV1kyT0RndE5ESmxPUzA0WTJWaUxUWXdZVFkxTlRWbE1HTmlPQzVxY0djaWZWMWRMQ0poZFdRaU9sc2lkWEp1T25ObGNuWnBZMlU2Wm1sc1pTNWtiM2R1Ykc5aFpDSmRmUS5LNUltdV83X2lDejF3SXowcGEtUjFtclFIclN6SXp3WDI0OHNHMXljdjRRJyArICcpJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzBweCcgfX0+RVAgMTcuMSAtIElsbHVzaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPuC4quC4s+C4q+C4o+C4seC4muC4leC4seC4p+C4peC4sOC4hOC4o+C5g+C4q+C4oeC5iOC4l+C4teC5iOC5hOC4oeC5iOC4l+C4s+C5gOC4hOC4p+C4quC4oeC4suC4geC5iOC4reC4mTxiciAvPlJlcXVpcmUgTHYuIDExMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxOZXdXb3JsZFF1ZXN0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlUm95YWxCYW5xdWV0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVycmFHbG9yaWEgY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWxsdXNpb24gY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFucXVldCJdLCJzb3VyY2VSb290IjoiIn0=