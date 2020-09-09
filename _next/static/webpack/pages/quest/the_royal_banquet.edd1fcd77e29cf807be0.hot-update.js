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

      e.target.nextSibling.style.removeProperty("display");
      e.persist();
      setTimeout(function () {
        e.target.classList.remove("d-none"); // e.target.nextSibling.classList.add("d-none")
        // e.target.nextSibling.css({
        //     'color': '#e0ac28',
        //     'border': '1px dotted #e0ac28',
        //     'padding': '0 20px',
        //     'border-radius': '5px',
        //     'display': 'none'
        // })
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
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1876506244",
        __self: this
      }, "article{color:#dadada !important;}span.naviText{color:#e0ac28;cursor:pointer;padding:1px;}span.naviCopied{color:#e0ac28;border:1px dotted #e0ac28;padding:0 20px;border-radius:5px;display:none;}b{color:white;}h1,h2,h3,h4,h5{border-bottom:1px solid #a2a9b1;}br[Attributes Style]{clear:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlVFWU1DXFxEZXNrdG9wXFxSYWduYXJvay1kYXRhXFxwYWdlc1xccXVlc3RcXHRoZV9yb3lhbF9iYW5xdWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDNEIsQUFHa0QsQUFHWCxBQUtBLEFBT0YsQUFHb0IsQUFHckIsV0FDZixDQU5BLEVBWm1CLEFBS1csV0FSOUIsSUFJZ0IsR0FjaEIsUUFUbUIsQ0FKbkIsY0FLc0Isa0JBQ0wsYUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxGVUVZTUNcXERlc2t0b3BcXFJhZ25hcm9rLWRhdGFcXHBhZ2VzXFxxdWVzdFxcdGhlX3JveWFsX2JhbnF1ZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5pbXBvcnQgTmV3V29ybGRRdWVzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L05ld1dvcmxkQWNjZXNzUXVlc3QnXHJcbmltcG9ydCBUaGVSb3lhbEJhbnF1ZXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UaGVSb3lhbEJhbnF1ZXQnXHJcbmltcG9ydCBUZXJyYUdsb3JpYSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3F1ZXN0L1RlcnJhR2xvcmlhJ1xyXG5cclxuY2xhc3MgQmFucXVldCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29weU5hdmkgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBtYXAgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1hcFwiKVxyXG4gICAgICAgIGxldCBtYXBYID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpXHJcbiAgICAgICAgbGV0IG1hcFkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIilcclxuXHJcbiAgICAgICAgdmFyIHRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICB0ZXh0RmllbGQuaW5uZXJUZXh0ID0gYC9uYXZpICR7bWFwfSAke21hcFh9LyR7bWFwWX1gXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpXHJcbiAgICAgICAgdGV4dEZpZWxkLnNlbGVjdCgpXHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgICAgIHRleHRGaWVsZC5yZW1vdmUoKVxyXG5cclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgLy8gZS50YXJnZXQubmV4dFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKVxyXG5cclxuICAgICAgICBlLnBlcnNpc3QoKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgICAgICAgIC8vIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgICAgICAgLy8gZS50YXJnZXQubmV4dFNpYmxpbmcuY3NzKHtcclxuICAgICAgICAgICAgLy8gICAgICdjb2xvcic6ICcjZTBhYzI4JyxcclxuICAgICAgICAgICAgLy8gICAgICdib3JkZXInOiAnMXB4IGRvdHRlZCAjZTBhYzI4JyxcclxuICAgICAgICAgICAgLy8gICAgICdwYWRkaW5nJzogJzAgMjBweCcsXHJcbiAgICAgICAgICAgIC8vICAgICAnYm9yZGVyLXJhZGl1cyc6ICc1cHgnLFxyXG4gICAgICAgICAgICAvLyAgICAgJ2Rpc3BsYXknOiAnbm9uZSdcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIlRoZSBSb3lhbCBCYW5xdWV0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChhcnRpY2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoc3Bhbi5uYXZpVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoc3Bhbi5uYXZpQ29waWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTBhYzI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoaDEsIGgyLCBoMywgaDQsIGg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTJhOWIxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGJyW0F0dHJpYnV0ZXMgU3R5bGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFzdGhlYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi9kYWY5ODVjOC1jNjViLTRjNmMtYTBiYy1lZDJkZTE5OTMyOWEvZDF5a2YwMy0wNjkzZjBjMS1mNjg4LTQyZTktOGNlYi02MGE2NTU1ZTBjYjguanBnP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09pSXNJbWx6Y3lJNkluVnlianBoY0hBNklpd2liMkpxSWpwYlczc2ljR0YwYUNJNklsd3ZabHd2WkdGbU9UZzFZemd0WXpZMVlpMDBZelpqTFdFd1ltTXRaV1F5WkdVeE9Ua3pNamxoWEM5a01YbHJaakF6TFRBMk9UTm1NR014TFdZMk9EZ3ROREpsT1MwNFkyVmlMVFl3WVRZMU5UVmxNR05pT0M1cWNHY2lmVjFkTENKaGRXUWlPbHNpZFhKdU9uTmxjblpwWTJVNlptbHNaUzVrYjNkdWJHOWhaQ0pkZlEuSzVJbXVfN19pQ3oxd0l6MHBhLVIxbXJRSHJTekl6d1gyNDhzRzF5Y3Y0UScgKyAnKScgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBib3JkZXJCb3R0b206ICcwcHgnIH19PkVQIDE3LjEgLSBJbGx1c2lvbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj4oZm9yIG5ldyBjaGFyYWN0ZXIpPGJyIC8+UmVxdWlyZSBMdi4gMTEwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3V29ybGRRdWVzdCBjb3B5TmF2aT17dGhpcy5jb3B5TmF2aX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRoZVJveWFsQmFucXVldCBjb3B5TmF2aT17dGhpcy5jb3B5TmF2aX0gLz4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlcnJhR2xvcmlhIGNvcHlOYXZpPXt0aGlzLmNvcHlOYXZpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbnF1ZXQiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FUEYMC\\\\Desktop\\\\Ragnarok-data\\\\pages\\\\quest\\\\the_royal_banquet.js */"), __jsx("header", {
        style: {
          backgroundImage: 'url(' + 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daf985c8-c65b-4c6c-a0bc-ed2de199329a/d1ykf03-0693f0c1-f688-42e9-8ceb-60a6555e0cb8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhXC9kMXlrZjAzLTA2OTNmMGMxLWY2ODgtNDJlOS04Y2ViLTYwYTY1NTVlMGNiOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K5Imu_7_iCz1wIz0pa-R1mrQHrSzIzwX248sG1ycv4Q' + ')'
        },
        className: "jsx-1876506244" + " " + "masthead",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "overlay",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }), __jsx("div", {
        className: "jsx-1876506244" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "col-lg-8 col-md-10 mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "site-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 77,
          columnNumber: 37
        }
      }, "EP 17.1 - Illusion"), __jsx("span", {
        className: "jsx-1876506244" + " " + "subheading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 37
        }
      }, "(for new character)", __jsx("br", {
        className: "jsx-1876506244",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 85
        }
      }), "Require Lv. 110")))))), __jsx("article", {
        className: "jsx-1876506244",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-1876506244" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }
      }, __jsx(_components_quest_NewWorldAccessQuest__WEBPACK_IMPORTED_MODULE_10__["default"], {
        copyNavi: this.copyNavi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }
      }), __jsx(_components_quest_TheRoyalBanquet__WEBPACK_IMPORTED_MODULE_11__["default"], {
        copyNavi: this.copyNavi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }), __jsx(_components_quest_TerraGloria__WEBPACK_IMPORTED_MODULE_12__["default"], {
        copyNavi: this.copyNavi,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVlc3QvdGhlX3JveWFsX2JhbnF1ZXQuanMiXSwibmFtZXMiOlsiQmFucXVldCIsImUiLCJtYXAiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtYXBYIiwibWFwWSIsInRleHRGaWVsZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlIiwiY2xhc3NMaXN0IiwiYWRkIiwibmV4dFNpYmxpbmciLCJzdHlsZSIsInJlbW92ZVByb3BlcnR5IiwicGVyc2lzdCIsInNldFRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXJCb3R0b20iLCJjb3B5TmF2aSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztJQUVNQSxPOzs7Ozs7Ozs7Ozs7Ozs7O21OQUVTLFVBQUNDLENBQUQsRUFBTztBQUNkLFVBQUlDLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsVUFBdEIsQ0FBVjtBQUNBLFVBQUlDLElBQUksR0FBR0osQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsUUFBdEIsQ0FBWDtBQUNBLFVBQUlFLElBQUksR0FBR0wsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsUUFBdEIsQ0FBWDtBQUVBLFVBQUlHLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0FGLGVBQVMsQ0FBQ0csU0FBVixtQkFBK0JSLEdBQS9CLGNBQXNDRyxJQUF0QyxjQUE4Q0MsSUFBOUM7QUFDQUUsY0FBUSxDQUFDRyxJQUFULENBQWNDLFdBQWQsQ0FBMEJMLFNBQTFCO0FBQ0FBLGVBQVMsQ0FBQ00sTUFBVjtBQUNBTCxjQUFRLENBQUNNLFdBQVQsQ0FBcUIsTUFBckI7QUFDQVAsZUFBUyxDQUFDUSxNQUFWO0FBRUFkLE9BQUMsQ0FBQ0UsTUFBRixDQUFTYSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixRQUF2QixFQVpjLENBYWQ7O0FBQ0FoQixPQUFDLENBQUNFLE1BQUYsQ0FBU2UsV0FBVCxDQUFxQkMsS0FBckIsQ0FBMkJDLGNBQTNCLENBQTBDLFNBQTFDO0FBRUFuQixPQUFDLENBQUNvQixPQUFGO0FBQ0FDLGdCQUFVLENBQUMsWUFBTTtBQUNickIsU0FBQyxDQUFDRSxNQUFGLENBQVNhLFNBQVQsQ0FBbUJELE1BQW5CLENBQTBCLFFBQTFCLEVBRGEsQ0FFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsT0FWUyxFQVVQLElBVk8sQ0FBVjtBQVdILEs7Ozs7Ozs7NkJBRVE7QUFDTCxhQUNJLE1BQUMsMERBQUQ7QUFBUSxhQUFLLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrck5BMkJJO0FBQ0ksYUFBSyxFQUFFO0FBQUVRLHlCQUFlLEVBQUUsU0FBUywrZEFBVCxHQUEyZTtBQUE5ZixTQURYO0FBQUEsNENBQWtCLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHSTtBQUFBLDRDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLEVBSUk7QUFBQSw0Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDRDQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUEsNENBQWUsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUEsNENBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRTtBQUFoQixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixFQUVJO0FBQUEsNENBQWdCLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQWdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFoRCxvQkFGSixDQURKLENBREosQ0FESixDQUpKLENBM0JKLEVBMENJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUEsNENBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyw4RUFBRDtBQUFlLGdCQUFRLEVBQUUsS0FBS0MsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQywwRUFBRDtBQUFpQixnQkFBUSxFQUFFLEtBQUtBLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJLE1BQUMsc0VBQUQ7QUFBYSxnQkFBUSxFQUFFLEtBQUtBLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFISixDQURKLENBMUNKLENBREo7QUFvREg7Ozs7RUFyRmlCQywrQzs7QUF3RlAxQixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9xdWVzdC90aGVfcm95YWxfYmFucXVldC5lZGQxZmNkNzdlMjljZjgwN2JlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5cclxuaW1wb3J0IE5ld1dvcmxkUXVlc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9OZXdXb3JsZEFjY2Vzc1F1ZXN0J1xyXG5pbXBvcnQgVGhlUm95YWxCYW5xdWV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcXVlc3QvVGhlUm95YWxCYW5xdWV0J1xyXG5pbXBvcnQgVGVycmFHbG9yaWEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9xdWVzdC9UZXJyYUdsb3JpYSdcclxuXHJcbmNsYXNzIEJhbnF1ZXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvcHlOYXZpID0gKGUpID0+IHtcclxuICAgICAgICBsZXQgbWFwID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXBcIilcclxuICAgICAgICBsZXQgbWFwWCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKVxyXG4gICAgICAgIGxldCBtYXBZID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpXHJcblxyXG4gICAgICAgIHZhciB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgICAgICAgdGV4dEZpZWxkLmlubmVyVGV4dCA9IGAvbmF2aSAke21hcH0gJHttYXBYfS8ke21hcFl9YFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEZpZWxkKVxyXG4gICAgICAgIHRleHRGaWVsZC5zZWxlY3QoKVxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcclxuICAgICAgICB0ZXh0RmllbGQucmVtb3ZlKClcclxuXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIC8vIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIilcclxuICAgICAgICBlLnRhcmdldC5uZXh0U2libGluZy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImRpc3BsYXlcIilcclxuXHJcbiAgICAgICAgZS5wZXJzaXN0KClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICAgICAgICAvLyBlLnRhcmdldC5uZXh0U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXHJcbiAgICAgICAgICAgIC8vIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmNzcyh7XHJcbiAgICAgICAgICAgIC8vICAgICAnY29sb3InOiAnI2UwYWMyOCcsXHJcbiAgICAgICAgICAgIC8vICAgICAnYm9yZGVyJzogJzFweCBkb3R0ZWQgI2UwYWMyOCcsXHJcbiAgICAgICAgICAgIC8vICAgICAncGFkZGluZyc6ICcwIDIwcHgnLFxyXG4gICAgICAgICAgICAvLyAgICAgJ2JvcmRlci1yYWRpdXMnOiAnNXB4JyxcclxuICAgICAgICAgICAgLy8gICAgICdkaXNwbGF5JzogJ25vbmUnXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJUaGUgUm95YWwgQmFucXVldFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYXJ0aWNsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RhZGFkYSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKHNwYW4ubmF2aVRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKHNwYW4ubmF2aUNvcGllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UwYWMyODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZG90dGVkICNlMGFjMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6Z2xvYmFsKGgxLCBoMiwgaDMsIGg0LCBoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2EyYTliMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChicltBdHRyaWJ1dGVzIFN0eWxlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1hc3RoZWFkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArICdodHRwczovL2ltYWdlcy13aXhtcC1lZDMwYTg2YjhjNGNhODg3NzczNTk0YzIud2l4bXAuY29tL2YvZGFmOTg1YzgtYzY1Yi00YzZjLWEwYmMtZWQyZGUxOTkzMjlhL2QxeWtmMDMtMDY5M2YwYzEtZjY4OC00MmU5LThjZWItNjBhNjU1NWUwY2I4LmpwZz90b2tlbj1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUoxY200NllYQndPaUlzSW1semN5STZJblZ5YmpwaGNIQTZJaXdpYjJKcUlqcGJXM3NpY0dGMGFDSTZJbHd2Wmx3dlpHRm1PVGcxWXpndFl6WTFZaTAwWXpaakxXRXdZbU10WldReVpHVXhPVGt6TWpsaFhDOWtNWGxyWmpBekxUQTJPVE5tTUdNeExXWTJPRGd0TkRKbE9TMDRZMlZpTFRZd1lUWTFOVFZsTUdOaU9DNXFjR2NpZlYxZExDSmhkV1FpT2xzaWRYSnVPbk5sY25acFkyVTZabWxzWlM1a2IzZHViRzloWkNKZGZRLks1SW11XzdfaUN6MXdJejBwYS1SMW1yUUhyU3pJendYMjQ4c0cxeWN2NFEnICsgJyknIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMHB4JyB9fT5FUCAxNy4xIC0gSWxsdXNpb248L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+KGZvciBuZXcgY2hhcmFjdGVyKTxiciAvPlJlcXVpcmUgTHYuIDExMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1dvcmxkUXVlc3QgY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVSb3lhbEJhbnF1ZXQgY29weU5hdmk9e3RoaXMuY29weU5hdml9IC8+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXJyYUdsb3JpYSBjb3B5TmF2aT17dGhpcy5jb3B5TmF2aX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5xdWV0Il0sInNvdXJjZVJvb3QiOiIifQ==