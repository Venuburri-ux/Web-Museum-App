"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// components/MainNav.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MainNav() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [searchField, setSearchField] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n    const handleSearchSubmit = (event)=>{\n        event.preventDefault();\n        router.push(\"/artwork?title=true&q=\".concat(searchField));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: \"fixed-top navbar-dark\",\n                style: {\n                    backgroundColor: '#2c3e0',\n                    padding: '10px 20px'\n                },\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Brand, {\n                        style: {\n                            fontWeight: 'bold',\n                            color: 'white'\n                        },\n                        children: \"Venu Burri\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"me-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                passHref: true,\n                                legacyBehavior: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/search\",\n                                passHref: true,\n                                legacyBehavior: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                    children: \"Advanced Search\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"d-flex\",\n                        onSubmit: handleSearchSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n                                type: \"search\",\n                                placeholder: \"Search\",\n                                className: \"me-2\",\n                                \"aria-label\": \"Search\",\n                                value: searchField,\n                                onChange: (e)=>setSearchField(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                type: \"submit\",\n                                variant: \"success\",\n                                style: {\n                                    borderRadius: '4px',\n                                    padding: '0.375rem 0.75rem'\n                                },\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bajpa\\\\OneDrive\\\\Desktop\\\\web\\\\venu\\\\components\\\\MainNav.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainNav, \"Gac0kufTsVipuEMjL5u387PppOI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MainNav;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5OYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUF3Qjs7O0FBQ29CO0FBQ047QUFDRTtBQUNJO0FBQ0o7QUFDWDtBQUNJO0FBRWpDLFNBQVNPOztJQUNQLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7SUFFL0MsTUFBTUsscUJBQXFCLENBQUNDO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCTCxPQUFPTSxJQUFJLENBQUMseUJBQXFDLE9BQVpMO0lBQ3ZDO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDVCw4REFBTUE7Z0JBQUNlLFdBQVU7Z0JBQXdCQyxPQUFPO29CQUFFQyxpQkFBaUI7b0JBQVVDLFNBQVM7Z0JBQVk7O29CQUFHO2tDQUNwRyw4REFBQ2xCLG9FQUFZO3dCQUFDZ0IsT0FBTzs0QkFBRUksWUFBWTs0QkFBUUMsT0FBTzt3QkFBUTtrQ0FBRzs7Ozs7O2tDQUM3RCw4REFBQ3BCLDJEQUFHQTt3QkFBQ2MsV0FBVTs7MENBQ2IsOERBQUNWLGtEQUFJQTtnQ0FBQ2lCLE1BQUs7Z0NBQUlDLFFBQVE7Z0NBQUNDLGNBQWM7MENBQ3BDLDRFQUFDdkIsZ0VBQVE7OENBQUM7Ozs7Ozs7Ozs7OzBDQUVaLDhEQUFDSSxrREFBSUE7Z0NBQUNpQixNQUFLO2dDQUFVQyxRQUFRO2dDQUFDQyxjQUFjOzBDQUMxQyw0RUFBQ3ZCLGdFQUFROzhDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0MsNERBQUlBO3dCQUFDYSxXQUFVO3dCQUFTVSxVQUFVZDs7MENBQ2pDLDhEQUFDVCxvRUFBWTtnQ0FDWHlCLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1piLFdBQVU7Z0NBQ1ZjLGNBQVc7Z0NBQ1hDLE9BQU9yQjtnQ0FDUHNCLFVBQVUsQ0FBQ0MsSUFBTXRCLGVBQWVzQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FFaEQsOERBQUMzQiw4REFBTUE7Z0NBQUN3QixNQUFLO2dDQUFTTyxTQUFRO2dDQUFVbEIsT0FBTztvQ0FBRW1CLGNBQWM7b0NBQU9qQixTQUFTO2dDQUFtQjswQ0FBRzs7Ozs7OzRCQUFlOzs7Ozs7Ozs7Ozs7OzBCQUd4SCw4REFBQ2tCOzs7OzswQkFDRCw4REFBQ0E7Ozs7Ozs7QUFHUDtHQXJDUzdCOztRQUNRSCxrREFBU0E7OztLQURqQkc7QUF1Q1QsaUVBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5OYXYuanM/ZWY4OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL01haW5OYXYuanNcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTWFpbk5hdigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2VhcmNoRmllbGQsIHNldFNlYXJjaEZpZWxkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcm91dGVyLnB1c2goYC9hcnR3b3JrP3RpdGxlPXRydWUmcT0ke3NlYXJjaEZpZWxkfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIGNsYXNzTmFtZT1cImZpeGVkLXRvcCBuYXZiYXItZGFya1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMyYzNlMCcsIHBhZGRpbmc6ICcxMHB4IDIwcHgnIH19PiB7LyogRGFya2VyIGJhY2tncm91bmQgY29sb3IgKi99XHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIGNvbG9yOiAnd2hpdGUnIH19PlZlbnUgQnVycmk8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgIDxOYXYuTGluaz5Ib21lPC9OYXYuTGluaz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VhcmNoXCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgIDxOYXYuTGluaz5BZHZhbmNlZCBTZWFyY2g8L05hdi5MaW5rPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImQtZmxleFwiIG9uU3VibWl0PXtoYW5kbGVTZWFyY2hTdWJtaXR9PlxyXG4gICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hGaWVsZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hGaWVsZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc0cHgnLCBwYWRkaW5nOiAnMC4zNzVyZW0gMC43NXJlbScgfX0+U2VhcmNoPC9CdXR0b24+IHsvKiBVcGRhdGVkIGJ1dHRvbiBzdHlsaW5nICovfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXY7XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJOYXYiLCJGb3JtIiwiQnV0dG9uIiwidXNlUm91dGVyIiwiTGluayIsInVzZVN0YXRlIiwiTWFpbk5hdiIsInJvdXRlciIsInNlYXJjaEZpZWxkIiwic2V0U2VhcmNoRmllbGQiLCJoYW5kbGVTZWFyY2hTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIkJyYW5kIiwiZm9udFdlaWdodCIsImNvbG9yIiwiaHJlZiIsInBhc3NIcmVmIiwibGVnYWN5QmVoYXZpb3IiLCJvblN1Ym1pdCIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YXJpYW50IiwiYm9yZGVyUmFkaXVzIiwiYnIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNav.js\n"));

/***/ })

});