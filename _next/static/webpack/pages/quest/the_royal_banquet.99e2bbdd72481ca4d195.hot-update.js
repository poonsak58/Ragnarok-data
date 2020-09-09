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
      e.target.classList.add("d-none"); // e.target.nextSibling.classList.remove("d-none")

      e.target.nextSibling.css({
        'color': '#e0ac28',
        'border': '1px dotted #e0ac28',
        'padding': '0 20px',
        'border-radius': '5px'
      });
      e.persist();
      setTimeout(function () {
        e.target.classList.remove("d-none"); // e.target.nextSibling.classList.add("d-none")

        e.target.nextSibling.css({
          'color': '#e0ac28',
          'border': '1px dotted #e0ac28',
          'padding': '0 20px',
          'border-radius': '5px',
          'display': 'none'
        });
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
          lineNumber: 47,
          columnNumber: 13
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1876506244",
        __self: this
      }, "article{color:#dadada !important;}span.naviText{color:#e0ac28;cursor:pointer;padding:1px;}span.naviCopied{color:#e0ac28;border:1px dotted #e0ac28;padding:0 20px;border-radius:5px;display:none;}b{color:white;}h1,h2,h3,h4,h5{border-bottom:1px solid #a2a9b1;}br[Attributes Style]{clear:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlVFWU1DXFxEZXNrdG9wXFxSYWduYXJvay1kYXRhXFxwYWdlc1xccXVlc3RcXHRoZV9yb3lhbF9iYW5xdWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDNEIsQUFHa0QsQUFHWCxBQUtBLEFBT0YsQUFHb0IsQUFHckIsV0FDZixDQU5BLEVBWm1CLEFBS1csV0FSOUIsSUFJZ0IsR0FjaEIsUUFUbUIsQ0FKbkIsY0FLc0Isa0JBQ0wsYUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxGVUVZTUNcXERlc2t0b3BcXFJhZ25hcm9rLWRhdGFcXHBhZ2VzXFxxdWVzdFxcdGhlX3JveWFsX2JhbnF1ZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5pbXBvcnQgTmV3V29ybGRRdWVzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L05ld1dvcmxkQWNjZXNzUXVlc3QnXHJcbmltcG9ydCBUaGVSb3lhbEJhbnF1ZXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UaGVSb3lhbEJhbnF1ZXQnXHJcbmltcG9ydCBUZXJyYUdsb3JpYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L1RlcnJhR2xvcmlhJ1xyXG5cclxuY2xhc3MgQmFucXVldCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29weU5hdmkgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBtYXAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hcFwiKVxyXG4gICAgICAgIGxldCBtYXBYID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpXHJcbiAgICAgICAgbGV0IG1hcFkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIilcclxuXHJcbiAgICAgICAgdmFyIHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gYC9uYXZpICR7bWFwfSAke21hcFh9LyR7bWFwWX1gXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgdGV4dEZpZWxkLnNlbGVjdCgpXHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG5cclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgLy8gZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNzcyh7XHJcbiAgICAgICAgICAgICdjb2xvcic6ICcjZTBhYzI4JyxcclxuICAgICAgICAgICAgJ2JvcmRlcic6ICcxcHggZG90dGVkICNlMGFjMjgnLFxyXG4gICAgICAgICAgICAncGFkZGluZyc6ICcwIDIwcHgnLFxyXG4gICAgICAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICc1cHgnLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGUucGVyc2lzdCgpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgLy8gZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2NvbG9yJzogJyNlMGFjMjgnLFxyXG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcxcHggZG90dGVkICNlMGFjMjgnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCAyMHB4JyxcclxuICAgICAgICAgICAgICAgICdib3JkZXItcmFkaXVzJzogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiVGhlIFJveWFsIEJhbnF1ZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlDb3BpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChoMSwgaDIsIGgzLCBoNCwgaDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMmE5YjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYnJbQXR0cmlidXRlcyBTdHlsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYXN0aGVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyAnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2RhZjk4NWM4LWM2NWItNGM2Yy1hMGJjLWVkMmRlMTk5MzI5YS9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2lJc0ltbHpjeUk2SW5WeWJqcGhjSEE2SWl3aWIySnFJanBiVzNzaWNHRjBhQ0k2SWx3dlpsd3ZaR0ZtT1RnMVl6Z3RZelkxWWkwMFl6WmpMV0V3WW1NdFpXUXlaR1V4T1Rrek1qbGhYQzlrTVhsclpqQXpMVEEyT1RObU1HTXhMV1kyT0RndE5ESmxPUzA0WTJWaUxUWXdZVFkxTlRWbE1HTmlPQzVxY0djaWZWMWRMQ0poZFdRaU9sc2lkWEp1T25ObGNuWnBZMlU2Wm1sc1pTNWtiM2R1Ykc5aFpDSmRmUS5LNUltdV83X2lDejF3SXowcGEtUjFtclFIclN6SXp3WDI0OHNHMXljdjRRJyArICcpJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzBweCcgfX0+RVAgMTcuMSAtIElsbHVzaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPihmb3IgbmV3IGNoYXJhY3Rlcik8YnIgLz5SZXF1aXJlIEx2LiAxMTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdXb3JsZFF1ZXN0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlUm95YWxCYW5xdWV0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVycmFHbG9yaWEgY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFucXVldCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FUEYMC\\\\Desktop\\\\Ragnarok-data\\\\pages\\\\quest\\\\the_royal_banquet.js */"), __jsx("header", {
        style: {
          backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')'
        },
        className: "jsx-1876506244" + " " + "masthead",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "overlay",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "jsx-1876506244" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "col-lg-8 col-md-10 mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "site-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 33
        }
      }, __jsx("h2", {
        style: {
          borderBottom: '0px'
        },
        className: "jsx-1876506244",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 37
        }
      }, "EP 17.1 - Illusion"), __jsx("span", {
        className: "jsx-1876506244" + " " + "subheading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 37
        }
      }, "(for new character)", __jsx("br", {
        className: "jsx-1876506244",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 85
        }
      }), "Require Lv. 110")))))), __jsx("article", {
        className: "jsx-1876506244",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      }, __jsx(_components_quest_NewWorldAccessQuest__WEBPACK_IMPORTED_MODULE_10__["default"], {
        copyNavi: this.copyNavi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }
      }), __jsx(_components_quest_TheRoyalBanquet__WEBPACK_IMPORTED_MODULE_11__["default"], {
        copyNavi: this.copyNavi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }
      }), __jsx(_components_quest_TerraGloria__WEBPACK_IMPORTED_MODULE_12__["default"], {
        copyNavi: this.copyNavi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuanMiXSwibmFtZXMiOlsiQmFucXVldCIsImUiLCJtYXAiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtYXBYIiwibWFwWSIsInRleHRGaWVsZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwiY2xhc3NMaXN0IiwiYWRkIiwibmV4dFNpYmxpbmciLCJjc3MiLCJwZXJzaXN0Iiwic2V0VGltZW91dCIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlckJvdHRvbSIsImNvcHlOYXZpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7bU5BRVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2QsVUFBSUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFWO0FBQ0EsVUFBSUMsSUFBSSxHQUFHSixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBQ0EsVUFBSUUsSUFBSSxHQUFHTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixRQUF0QixDQUFYO0FBRUEsVUFBSUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQUYsZUFBUyxDQUFDRyxTQUFWLG1CQUErQlIsR0FBL0IsY0FBc0NHLElBQXRDLGNBQThDQyxJQUE5QztBQUNBRSxjQUFRLENBQUNHLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsU0FBMUI7QUFDQUEsZUFBUyxDQUFDTSxNQUFWO0FBQ0FMLGNBQVEsQ0FBQ00sV0FBVCxDQUFxQixNQUFyQjtBQUNBUCxlQUFTLENBQUNRLE1BQVY7QUFFQWQsT0FBQyxDQUFDRSxNQUFGLENBQVNhLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFFBQXZCLEVBWmMsQ0FhZDs7QUFDQWhCLE9BQUMsQ0FBQ0UsTUFBRixDQUFTZSxXQUFULENBQXFCQyxHQUFyQixDQUF5QjtBQUNyQixpQkFBUyxTQURZO0FBRXJCLGtCQUFVLG9CQUZXO0FBR3JCLG1CQUFXLFFBSFU7QUFJckIseUJBQWlCO0FBSkksT0FBekI7QUFPQWxCLE9BQUMsQ0FBQ21CLE9BQUY7QUFDQUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2JwQixTQUFDLENBQUNFLE1BQUYsQ0FBU2EsU0FBVCxDQUFtQkQsTUFBbkIsQ0FBMEIsUUFBMUIsRUFEYSxDQUViOztBQUNBZCxTQUFDLENBQUNFLE1BQUYsQ0FBU2UsV0FBVCxDQUFxQkMsR0FBckIsQ0FBeUI7QUFDckIsbUJBQVMsU0FEWTtBQUVyQixvQkFBVSxvQkFGVztBQUdyQixxQkFBVyxRQUhVO0FBSXJCLDJCQUFpQixLQUpJO0FBS3JCLHFCQUFXO0FBTFUsU0FBekI7QUFPSCxPQVZTLEVBVVAsSUFWTyxDQUFWO0FBV0gsSzs7Ozs7Ozs2QkFFUTtBQUNMLGFBQ0ksTUFBQywwREFBRDtBQUFRLGFBQUssRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHMxTkEyQkk7QUFDSSxhQUFLLEVBQUU7QUFBRUcseUJBQWUsRUFBRSxTQUFTLCtkQUFULEdBQTJlO0FBQTlmLFNBRFg7QUFBQSw0Q0FBa0IsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdJO0FBQUEsNENBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEosRUFJSTtBQUFBLDRDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUEsNENBQWUsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBZSw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBZSxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGFBQUssRUFBRTtBQUFFQyxzQkFBWSxFQUFFO0FBQWhCLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLEVBRUk7QUFBQSw0Q0FBZ0IsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQWhELG9CQUZKLENBREosQ0FESixDQURKLENBSkosQ0EzQkosRUEwQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDhFQUFEO0FBQWUsZ0JBQVEsRUFBRSxLQUFLQyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSSxNQUFDLDBFQUFEO0FBQWlCLGdCQUFRLEVBQUUsS0FBS0EsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBR0ksTUFBQyxzRUFBRDtBQUFhLGdCQUFRLEVBQUUsS0FBS0EsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLENBREosQ0ExQ0osQ0FESjtBQW9ESDs7OztFQTFGaUJDLCtDOztBQTZGUHpCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3F1ZXN0L3RoZV9yb3lhbF9iYW5xdWV0Ljk5ZTJiYmRkNzI0ODFjYTRkMTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5pbXBvcnQgTmV3V29ybGRRdWVzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L05ld1dvcmxkQWNjZXNzUXVlc3QnXHJcbmltcG9ydCBUaGVSb3lhbEJhbnF1ZXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UaGVSb3lhbEJhbnF1ZXQnXHJcbmltcG9ydCBUZXJyYUdsb3JpYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L1RlcnJhR2xvcmlhJ1xyXG5cclxuY2xhc3MgQmFucXVldCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29weU5hdmkgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBtYXAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hcFwiKVxyXG4gICAgICAgIGxldCBtYXBYID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpXHJcbiAgICAgICAgbGV0IG1hcFkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIilcclxuXHJcbiAgICAgICAgdmFyIHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gYC9uYXZpICR7bWFwfSAke21hcFh9LyR7bWFwWX1gXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgdGV4dEZpZWxkLnNlbGVjdCgpXHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG5cclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgLy8gZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNzcyh7XHJcbiAgICAgICAgICAgICdjb2xvcic6ICcjZTBhYzI4JyxcclxuICAgICAgICAgICAgJ2JvcmRlcic6ICcxcHggZG90dGVkICNlMGFjMjgnLFxyXG4gICAgICAgICAgICAncGFkZGluZyc6ICcwIDIwcHgnLFxyXG4gICAgICAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICc1cHgnLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGUucGVyc2lzdCgpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgLy8gZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2NvbG9yJzogJyNlMGFjMjgnLFxyXG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcxcHggZG90dGVkICNlMGFjMjgnLFxyXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnOiAnMCAyMHB4JyxcclxuICAgICAgICAgICAgICAgICdib3JkZXItcmFkaXVzJzogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiVGhlIFJveWFsIEJhbnF1ZXRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGFydGljbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzcGFuLm5hdmlDb3BpZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChoMSwgaDIsIGgzLCBoNCwgaDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMmE5YjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYnJbQXR0cmlidXRlcyBTdHlsZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYXN0aGVhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyAnaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9mL2RhZjk4NWM4LWM2NWItNGM2Yy1hMGJjLWVkMmRlMTk5MzI5YS9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGc/dG9rZW49ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKMWNtNDZZWEJ3T2lJc0ltbHpjeUk2SW5WeWJqcGhjSEE2SWl3aWIySnFJanBiVzNzaWNHRjBhQ0k2SWx3dlpsd3ZaR0ZtT1RnMVl6Z3RZelkxWWkwMFl6WmpMV0V3WW1NdFpXUXlaR1V4T1Rrek1qbGhYQzlrTVhsclpqQXpMVEEyT1RObU1HTXhMV1kyT0RndE5ESmxPUzA0WTJWaUxUWXdZVFkxTlRWbE1HTmlPQzVxY0djaWZWMWRMQ0poZFdRaU9sc2lkWEp1T25ObGNuWnBZMlU2Wm1sc1pTNWtiM2R1Ykc5aFpDSmRmUS5LNUltdV83X2lDejF3SXowcGEtUjFtclFIclN6SXp3WDI0OHNHMXljdjRRJyArICcpJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC0xMCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzBweCcgfX0+RVAgMTcuMSAtIElsbHVzaW9uPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPihmb3IgbmV3IGNoYXJhY3Rlcik8YnIgLz5SZXF1aXJlIEx2LiAxMTA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdXb3JsZFF1ZXN0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlUm95YWxCYW5xdWV0IGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVycmFHbG9yaWEgY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFucXVldCJdLCJzb3VyY2VSb290IjoiIn0=