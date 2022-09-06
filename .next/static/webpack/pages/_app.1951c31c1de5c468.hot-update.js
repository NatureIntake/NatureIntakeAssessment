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

/***/ "./src/components/Sidebar/sideBar.js":
/*!*******************************************!*\
  !*** ./src/components/Sidebar/sideBar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/SidebarContext */ \"./src/components/context/SidebarContext.js\");\n/* harmony import */ var _Sidebar_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar_list */ \"./src/components/Sidebar/Sidebar_list.js\");\n/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useMediaQuery */ \"./src/components/hooks/useMediaQuery.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SideBar() {\n    var hide = function hide() {\n        return Open ? \"translate-x-0 w-70 px-2\" : \"-translate-x-full w-0 px-1\";\n    };\n    var srink = function srink() {\n        return Open ? \"w-70 px-4\" : \"w-20 px-2\";\n    };\n    _s();\n    var ref = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), Open = ref.Open, setOpen = ref.setOpen;\n    var isLaptop = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 1024px)\");\n    var isSmall = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 320px)\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n            className: \" \".concat(isLaptop ? srink() : hide(), \"   ml-0 fixed z-10 top-0 pb-3 pt- flex flex-col justify-between h-full  font-raleway bg-skin-base dark:bg-gradient-to-tr from-[#19191b] to-[#2c2c2e] border-r border-skin-base dark:theme-dark transition duration-200 ease-in-out dark:shadow-none shadow-gray-400 shadow-sm   \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" \".concat(isSmall && \"mt-[rem]\", \" sm:mt-[5rem] md:mt-[5rem] lg:mt-[6rem] flex justify-center items-center   py-3 -mr-5 flex-none\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        \"aria-label\": \"sidebar-arrow\",\n                        className: \"hidden lg:block absolute -right-5 top-24   shadow-sm shadow-gray-400 dark:theme-dark  dark:shadow-none  bg-skin-btn-accent hover:bg-skin-btn-hover active:bg-skin-btn-accent  p-2 focus:outline-none text-lg rounded-full   cursor-pointer transition duration-200 ease-in-out  \".concat(!Open && \"rotate-180 \"),\n                        onClick: function() {\n                            return setOpen(!Open);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            class: \"h-10 w-10 text-skin-inverted\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                \"stroke-linecap\": \"round\",\n                                \"stroke-linejoin\": \"round\",\n                                d: \"M15 19l-7-7 7-7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Sidebar_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex-none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" flex justify-between items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" \".concat(!isLaptop && !Open && \"hidden\", \" px-4 py-4 w-full text-lg justify-center flex items-center bg-skin-btn-accent hover:bg-skin-btn-hover theme-amber space-x-2 rounded-3xl  transition ease-in duration-100 shadow-md \"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    className: \"h-7 w-7 text-skin-base\",\n                                    viewBox: \"0 0 20 20\",\n                                    fill: \"currentColor\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-raleway font-bold text-skin-base \".concat(!Open && \"hidden\", \" \"),\n                                    children: \"Take test\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\Sidebar\\\\sideBar.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(SideBar, \"8zThYyiPbsvEzRwvm76XbWL5F0U=\", false, function() {\n    return [\n        _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = SideBar;\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQ7Ozs7O3dDQUFPOzs7Ozs7Z0NBQ0E7Ozs7OzRCQUNMOzs7Ozt3QkFDRjs7Ozs7O2dCQUNBOzs7OztZQUVKLENBQ047Q0FDSDtHQTlHdUJGLE9BQU87O1FBRVpELDREQUFhO1FBQ2RBLDREQUFhOzs7QUFIUEMsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL3NpZGVCYXIuanM/OTc0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWRlYmFyQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9TaWRlYmFyQ29udGV4dFwiO1xyXG5pbXBvcnQgU2lkZUJhcl9saXN0IGZyb20gXCIuL1NpZGViYXJfbGlzdFwiO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiLi4vaG9va3MvdXNlTWVkaWFRdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcclxuICBjb25zdCB7IE9wZW4sIHNldE9wZW4gfSA9IFJlYWN0LnVzZUNvbnRleHQoU2lkZWJhckNvbnRleHQpO1xyXG4gIGNvbnN0IGlzTGFwdG9wID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEwMjRweClcIik7XHJcbiAgY29uc3QgaXNTbWFsbCA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAzMjBweClcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGUoKSB7XHJcbiAgICByZXR1cm4gT3BlbiA/IFwidHJhbnNsYXRlLXgtMCB3LTcwIHB4LTJcIiA6IFwiLXRyYW5zbGF0ZS14LWZ1bGwgdy0wIHB4LTFcIjtcclxuICB9XHJcbiAgZnVuY3Rpb24gc3JpbmsoKSB7XHJcbiAgICByZXR1cm4gT3BlbiA/IFwidy03MCBweC00XCIgOiBcInctMjAgcHgtMlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxhc2lkZVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgaXNMYXB0b3AgPyBzcmluaygpIDogaGlkZSgpXHJcbiAgICAgICAgfSAgIG1sLTAgZml4ZWQgei0xMCB0b3AtMCBwYi0zIHB0LSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoLWZ1bGwgIGZvbnQtcmFsZXdheSBiZy1za2luLWJhc2UgZGFyazpiZy1ncmFkaWVudC10by10ciBmcm9tLVsjMTkxOTFiXSB0by1bIzJjMmMyZV0gYm9yZGVyLXIgYm9yZGVyLXNraW4tYmFzZSBkYXJrOnRoZW1lLWRhcmsgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgZGFyazpzaGFkb3ctbm9uZSBzaGFkb3ctZ3JheS00MDAgc2hhZG93LXNtICAgYH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICBpc1NtYWxsICYmIFwibXQtW3JlbV1cIlxyXG4gICAgICAgICAgfSBzbTptdC1bNXJlbV0gbWQ6bXQtWzVyZW1dIGxnOm10LVs2cmVtXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgIHB5LTMgLW1yLTUgZmxleC1ub25lYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9J3NpZGViYXItYXJyb3cnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGhpZGRlbiBsZzpibG9jayBhYnNvbHV0ZSAtcmlnaHQtNSB0b3AtMjQgICBzaGFkb3ctc20gc2hhZG93LWdyYXktNDAwIGRhcms6dGhlbWUtZGFyayAgZGFyazpzaGFkb3ctbm9uZSAgYmctc2tpbi1idG4tYWNjZW50IGhvdmVyOmJnLXNraW4tYnRuLWhvdmVyIGFjdGl2ZTpiZy1za2luLWJ0bi1hY2NlbnQgIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1sZyByb3VuZGVkLWZ1bGwgICBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCAgJHtcclxuICAgICAgICAgICAgICAhT3BlbiAmJiBcInJvdGF0ZS0xODAgXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIU9wZW4pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgIGNsYXNzPSdoLTEwIHctMTAgdGV4dC1za2luLWludmVydGVkJ1xyXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgICBkPSdNMTUgMTlsLTctNyA3LTcnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFNpZGViYXIgTGlzdCAqL31cclxuICAgICAgICA8U2lkZUJhcl9saXN0IC8+XHJcblxyXG4gICAgICAgIHsvKiBQcm9maWxlIHBpYyAmIGJ1dHRvbiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBmbGV4LW5vbmUnPlxyXG4gICAgICAgICAgey8qIHtPcGVuICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xyXG4gICAgICAgICAgICAgICAgT3BlbiAmJiBcInB4LTIgcHktNCBwYi02IFwiXHJcbiAgICAgICAgICAgICAgfSBib3JkZXItdC0yIGJvcmRlci1za2luLWJhc2UgYm9yZGVyLXJvdW5kZWQgZGFyazp0aGVtZS1kYXJrICBmbGV4IGZsZXgtcm93IGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ub25lJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPSdpbWFnZXMvcHJvZmlsZS5qcGVnJ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgIHctMTAgaC0xMCBzaGFkb3ctbGcgIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgbXQtMSBweC01IHRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LXNraW4tYmFzZSAgZGFyazp0aGVtZS1kYXJrIGZsZXgtYXV0byB0ZXh0LWNlbnRlcmB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgbmVlcmF2IGdhcmdcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgey8qIFRha2UgdGVzdCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcclxuICAgICAgICAgICAgICAgICFpc0xhcHRvcCAmJiAhT3BlbiAmJiBcImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgfSBweC00IHB5LTQgdy1mdWxsIHRleHQtbGcganVzdGlmeS1jZW50ZXIgZmxleCBpdGVtcy1jZW50ZXIgYmctc2tpbi1idG4tYWNjZW50IGhvdmVyOmJnLXNraW4tYnRuLWhvdmVyIHRoZW1lLWFtYmVyIHNwYWNlLXgtMiByb3VuZGVkLTN4bCAgdHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMCBzaGFkb3ctbWQgYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC03IHctNyB0ZXh0LXNraW4tYmFzZSdcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyMCAyMCdcclxuICAgICAgICAgICAgICAgIGZpbGw9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTcuNDE0IDIuNTg2YTIgMiAwIDAwLTIuODI4IDBMNyAxMC4xNzJWMTNoMi44MjhsNy41ODYtNy41ODZhMiAyIDAgMDAwLTIuODI4eicgLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPSdldmVub2RkJ1xyXG4gICAgICAgICAgICAgICAgICBkPSdNMiA2YTIgMiAwIDAxMi0yaDRhMSAxIDAgMDEwIDJINHYxMGgxMHYtNGExIDEgMCAxMTIgMHY0YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2eidcclxuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9J2V2ZW5vZGQnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LXJhbGV3YXkgZm9udC1ib2xkIHRleHQtc2tpbi1iYXNlICR7XHJcbiAgICAgICAgICAgICAgICAgICFPcGVuICYmIFwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBUYWtlIHRlc3RcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTaWRlYmFyQ29udGV4dCIsIlNpZGVCYXJfbGlzdCIsInVzZU1lZGlhUXVlcnkiLCJTaWRlQmFyIiwiaGlkZSIsIk9wZW4iLCJzcmluayIsInVzZUNvbnRleHQiLCJzZXRPcGVuIiwiaXNMYXB0b3AiLCJpc1NtYWxsIiwiZGl2IiwiYXNpZGUiLCJjbGFzc05hbWUiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwiY2xhc3MiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sidebar/sideBar.js\n");

/***/ })

});