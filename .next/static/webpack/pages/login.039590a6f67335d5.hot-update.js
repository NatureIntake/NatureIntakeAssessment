"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login/index.js":
/*!**********************************!*\
  !*** ./src/pages/login/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Login_loginPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Login/loginPage */ \"./src/components/Login/loginPage.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_context_FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/context/FormContext */ \"./src/components/context/FormContext.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction login() {\n    _s();\n    var isForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_FormContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).isForm;\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (session && !isForm) {\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/login/form\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-cover bg-center h-screen w-screen \",\n            style: {\n                backgroundImage: \"url(https://source.unsplash.com/vblGMzpFvmY)\",\n                backgroundRepeat: \"no-repeat\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center h-screen w-screen px-20 bg-gray-800 bg-opacity-30\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login_loginPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\login\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\login\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\login\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\login\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(login, \"Wi/VDOlhgYqWqgoFIHXiBl00pDA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNGO0FBQ2E7QUFDeEI7QUFDNkI7O0FBRS9DLFNBQVNNLEtBQUssR0FBRzs7SUFDOUIsSUFBTSxNQUFRLEdBQUtMLGlEQUFVLENBQUNJLHVFQUFXLENBQUMsQ0FBbENFLE1BQU07SUFDZCxJQUEwQkwsR0FBWSxHQUFaQSwyREFBVSxFQUFFLEVBQTlCTSxPQUFhLEdBQUtOLEdBQVksQ0FBOUJNLElBQUk7SUFFWlIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVMsT0FBTyxJQUFJLENBQUNGLE1BQU0sRUFBRTtZQUN0QkgsdURBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1QjtLQUNGLENBQUMsQ0FBQztJQUNILHFCQUNFO2tCQUNFLDRFQUFDTyxLQUFHO1lBQ0ZDLFNBQVMsRUFBQyx3Q0FBd0M7WUFDbERDLEtBQUssRUFBRTtnQkFDTEMsZUFBZSxFQUFHLDhDQUE0QztnQkFDOURDLGdCQUFnQixFQUFFLFdBQVc7YUFDOUI7c0JBRUQsNEVBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxvRkFBb0Y7MEJBQ2pHLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsOEdBQThHOzhCQUMzSCw0RUFBQ1QsbUVBQVM7Ozs7NEJBQUc7Ozs7O3dCQUNUOzs7OztvQkFDRjs7Ozs7Z0JBQ0Y7cUJBQ0wsQ0FDSDtDQUNIO0dBMUJ1QkcsS0FBSzs7UUFFREosdURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LmpzP2JkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0ICwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IExvZ2luUGFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2dpbi9sb2dpblBhZ2VcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEZvcm1Db250ZXh0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRleHQvRm9ybUNvbnRleHRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgY29uc3QgeyBpc0Zvcm0gfSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb24gJiYgIWlzRm9ybSkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbi9mb3JtXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPScgYmctY292ZXIgYmctY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuICdcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS92YmxHTXpwRnZtWSlgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIHB4LTIwIGJnLWdyYXktODAwIGJnLW9wYWNpdHktMzAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1mdWxsIG1heC13LW1kIHB4LTQgcHktOCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJnLWdyYXktODAwIHNtOnB4LTYgbWQ6cHgtOCBsZzpweC0xMCc+XHJcbiAgICAgICAgICAgIDxMb2dpblBhZ2UgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VTZXNzaW9uIiwiTG9naW5QYWdlIiwiUm91dGVyIiwiRm9ybUNvbnRleHQiLCJsb2dpbiIsImlzRm9ybSIsImRhdGEiLCJzZXNzaW9uIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login/index.js\n");

/***/ })

});