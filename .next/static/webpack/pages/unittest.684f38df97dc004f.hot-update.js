"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/unittest",{

/***/ "./src/pages/unittest.js":
/*!*******************************!*\
  !*** ./src/pages/unittest.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/quiz */ \"./src/components/quiz.js\");\n/* harmony import */ var _assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/context/SidebarContext */ \"./src/assests/context/SidebarContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var srink = function srink() {\n        return Open ? \"pl-[17rem] px-8\" : \"pl-[7rem] px-8\";\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentQuestion = ref[0], setCurrentQuestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), mainPage = ref1[0], setmainPage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedOptions = ref2[0], setSelectedOptions = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref3[0], setScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScore = ref4[0], setShowScore = ref4[1];\n    var Open = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).Open;\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 1024px)\");\n    var isTablet = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 768px )\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \".concat(isLaptop && srink(), \" \").concat(isTablet && \"px-12\", \" px-2  min-h-screen min-w-screen  flex flex-col  justify-center   font-raleway\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] shadow-md   py-3 px-3 h-52 w-full items-center justify-end text-center  gap-4 pb-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-3xl text-skin-base bg-skin-muted px-3 py-3 w-8/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize\",\n                        children: \"UNIT TEST\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\unittest.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    mainPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\".concat(isTablet && \"text-lg block\", \" text-md text-skin-muted dark:theme-dark italic \"),\n                        children: \"Let's start the Unit test\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\unittest.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\".concat(isTablet && \"text-lg block\", \" text-md text-skin-muted dark:theme-dark italic \"),\n                        children: \"Please atempt all the questions.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\unittest.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\unittest.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"quiz\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\unittest.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\pages\\\\unittest.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"MOd5c/iLohq44PH8krFSVxEgUBo=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdW5pdHRlc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNGO0FBQ3lCO0FBQ0o7O0FBRTVDLFNBQVNLLElBQUksR0FBRztRQVVwQkMsS0FBSyxHQUFkLFNBQVNBLEtBQUssR0FBRztRQUNmLE9BQU9DLElBQUksR0FBRyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztLQUNwRDs7SUFYRCxJQUE4Q04sR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQU4zRCxlQU13QixHQUF3QkEsR0FBVyxHQUFuQyxFQU54QixrQkFNNEMsR0FBSUEsR0FBVyxHQUFmO0lBQzFDLElBQWdDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBUDdDLFFBT2lCLEdBQWlCQSxJQUFXLEdBQTVCLEVBUGpCLFdBTzhCLEdBQUlBLElBQVcsR0FBZjtJQUM1QixJQUE4Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVI1RCxlQVF3QixHQUF3QkEsSUFBWSxHQUFwQyxFQVJ4QixrQkFRNEMsR0FBSUEsSUFBWSxHQUFoQjtJQUMxQyxJQUEwQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQVR2QyxLQVNjLEdBQWNBLElBQVcsR0FBekIsRUFUZCxRQVN3QixHQUFJQSxJQUFXLEdBQWY7SUFDdEIsSUFBa0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFWbkQsU0FVa0IsR0FBa0JBLElBQWUsR0FBakMsRUFWbEIsWUFVZ0MsR0FBSUEsSUFBZSxHQUFuQjtJQUM5QixJQUFNLElBQU0sR0FBS0QsdURBQWdCLENBQUNHLHVFQUFjLENBQUMsQ0FBekNJLElBQUk7SUFDWixJQUFNWSxRQUFRLEdBQUdmLHdFQUFhLENBQUMscUJBQXFCLENBQUM7SUFDckQsSUFBTWdCLFFBQVEsR0FBR2hCLHdFQUFhLENBQUMscUJBQXFCLENBQUM7SUFPckQscUJBQ0UsOERBQUNpQixLQUFHO1FBQ0ZDLFNBQVMsRUFBRSxHQUFFLENBQ1hGLE1BQW1CLENBRE5ELFFBQVEsSUFBSWIsS0FBSyxFQUFFLEVBQUMsR0FBQyxDQUNkLENBQ3JCLE1BQThFLENBRDdFYyxRQUFRLElBQUksT0FBTyxFQUNwQixnRkFBOEUsQ0FBQzs7MEJBR2hGLDhEQUFDQyxLQUFHO2dCQUNGQyxTQUFTLEVBQUcsOEtBQTRLOztrQ0FFeEwsOERBQUNDLE1BQUk7d0JBQ0hELFNBQVMsRUFBRyxvSEFBa0g7a0NBQy9ILFdBRUQ7Ozs7OzRCQUFPO29CQUVOWixRQUFRLGlCQUNQLDhEQUFDYSxNQUFJO3dCQUNIRCxTQUFTLEVBQUUsRUFBQyxDQUVYLE1BQWdELENBRC9DRixRQUFRLElBQUksZUFBZSxFQUM1QixrREFBZ0QsQ0FBQztrQ0FDbkQsMkJBRUQ7Ozs7OzRCQUFPLGlCQUVQLDhEQUFDRyxNQUFJO3dCQUNIRCxTQUFTLEVBQUUsRUFBQyxDQUVYLE1BQWdELENBRC9DRixRQUFRLElBQUksZUFBZSxFQUM1QixrREFBZ0QsQ0FBQztrQ0FDbkQsa0NBRUQ7Ozs7OzRCQUFPOzs7Ozs7b0JBRUw7MEJBR04sOERBQUNsQixNQUFJOzs7O29CQUFFOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0F0RHVCRyxJQUFJOztRQU9URCxvRUFBYTtRQUNiQSxvRUFBYTs7O0FBUlJDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VuaXR0ZXN0LmpzPzVmNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBxdWl6IGZyb20gXCIuLi9jb21wb25lbnRzL3F1aXpcIjtcclxuaW1wb3J0IFNpZGViYXJDb250ZXh0IGZyb20gXCIuLi9hc3Nlc3RzL2NvbnRleHQvU2lkZWJhckNvbnRleHRcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIi4uL2Fzc2VzdHMvaG9va3MvdXNlTWVkaWFRdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21haW5QYWdlLCBzZXRtYWluUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb25zLCBzZXRTZWxlY3RlZE9wdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3dTY29yZSwgc2V0U2hvd1Njb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IE9wZW4gfSA9IFJlYWN0LnVzZUNvbnRleHQoU2lkZWJhckNvbnRleHQpO1xyXG4gIGNvbnN0IGlzTGFwdG9wID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDEwMjRweClcIik7XHJcbiAgY29uc3QgaXNUYWJsZXQgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogNzY4cHggKVwiKTtcclxuXHJcbiAgZnVuY3Rpb24gc3JpbmsoKSB7XHJcbiAgICByZXR1cm4gT3BlbiA/IFwicGwtWzE3cmVtXSBweC04XCIgOiBcInBsLVs3cmVtXSBweC04XCI7XHJcbiAgfVxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2AgJHtpc0xhcHRvcCAmJiBzcmluaygpfSAke1xyXG4gICAgICAgIGlzVGFibGV0ICYmIFwicHgtMTJcIlxyXG4gICAgICB9IHB4LTIgIG1pbi1oLXNjcmVlbiBtaW4tdy1zY3JlZW4gIGZsZXggZmxleC1jb2wgIGp1c3RpZnktY2VudGVyICAgZm9udC1yYWxld2F5YH1cclxuICAgID5cclxuICAgICAgey8qIG1haW4gcGFnZSAqL31cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgcm91bmRlZC0zeGwgYmctc2tpbi1iYXNlIGRhcms6YmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMzIzMjMyXSB0by1bIzI5MjkyOV0gc2hhZG93LW1kICAgcHktMyBweC0zIGgtNTIgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB0ZXh0LWNlbnRlciAgZ2FwLTQgcGItMTBgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCB0ZXh0LTN4bCB0ZXh0LXNraW4tYmFzZSBiZy1za2luLW11dGVkIHB4LTMgcHktMyB3LTgvMTIgcm91bmRlZC14bCBzaGFkb3ctc20gIGRhcms6dGhlbWUtZGFyayBmb250LWJvbGQgY2FwaXRhbGl6ZWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVU5JVCBURVNUXHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICB7bWFpblBhZ2UgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgIGlzVGFibGV0ICYmIFwidGV4dC1sZyBibG9ja1wiXHJcbiAgICAgICAgICAgIH0gdGV4dC1tZCB0ZXh0LXNraW4tbXV0ZWQgZGFyazp0aGVtZS1kYXJrIGl0YWxpYyBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMZXQncyBzdGFydCB0aGUgVW5pdCB0ZXN0XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgaXNUYWJsZXQgJiYgXCJ0ZXh0LWxnIGJsb2NrXCJcclxuICAgICAgICAgICAgfSB0ZXh0LW1kIHRleHQtc2tpbi1tdXRlZCBkYXJrOnRoZW1lLWRhcmsgaXRhbGljIGB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFBsZWFzZSBhdGVtcHQgYWxsIHRoZSBxdWVzdGlvbnMuXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogcXVpeiAqL31cclxuICAgICAgPHF1aXovPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInF1aXoiLCJTaWRlYmFyQ29udGV4dCIsInVzZU1lZGlhUXVlcnkiLCJIb21lIiwic3JpbmsiLCJPcGVuIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwibWFpblBhZ2UiLCJzZXRtYWluUGFnZSIsInNlbGVjdGVkT3B0aW9ucyIsInNldFNlbGVjdGVkT3B0aW9ucyIsInNjb3JlIiwic2V0U2NvcmUiLCJzaG93U2NvcmUiLCJzZXRTaG93U2NvcmUiLCJ1c2VDb250ZXh0IiwiaXNMYXB0b3AiLCJpc1RhYmxldCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/unittest.js\n");

/***/ })

});