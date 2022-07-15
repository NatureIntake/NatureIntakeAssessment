"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizUnit2",{

/***/ "./src/components/quiz.js":
/*!********************************!*\
  !*** ./src/components/quiz.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/context/SidebarContext */ \"./src/assests/context/SidebarContext.js\");\n/* harmony import */ var _assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/context/TestContext */ \"./src/assests/context/TestContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    var srink = function srink() {\n        return Open ? \"pl-[20rem] px-20\" : \"pl-[10rem] px-20 \";\n    };\n    _s();\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 1024px)\");\n    var isTablet = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 768px )\");\n    var Open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).Open;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentQuestion = ref5[0], setCurrentQuestion = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedOptions = ref1[0], setSelectedOptions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScore = ref3[0], setShowScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), Practice1 = ref4.Practice1, Practice2 = ref4.Practice2, Practice3 = ref4.Practice3, FinalTest = ref4.FinalTest, QuestionState = ref4.QuestionState, TestState = ref4.TestState;\n    var handleLabel = function() {\n    // if (TestState === Practice1) return \"Practice-1\";\n    // if (TestState === Practice2) return \"Practice-2\";\n    // if (TestState === Practice3) return \"Practice-3\";\n    // if (TestState === FinalTest) return \"Final-Test\";\n    };\n    var handleAnswerOption = function(answer) {\n        setSelectedOptions([\n            selectedOptions[currentQuestion] = {\n                answerByUser: answer\n            }, \n        ]);\n        setSelectedOptions(_toConsumableArray(selectedOptions));\n        console.log(selectedOptions);\n    };\n    var handlePrevious = function() {\n        var prevQues = currentQuestion - 1;\n        prevQues >= 0 && setCurrentQuestion(prevQues);\n    };\n    var handleNext = function() {\n        var nextQues = currentQuestion + 1;\n        nextQues < QuestionState.length && setCurrentQuestion(nextQues);\n    };\n    var handleSubmitButton = function() {\n        var _loop = function(i) {\n            QuestionState[i].options.map(function(answer) {\n                var ref;\n                return answer.isCorrect && answer.answer === ((ref = selectedOptions[i]) === null || ref === void 0 ? void 0 : ref.answerByUser) && (newScore += 1);\n            });\n        };\n        var newScore = 0;\n        for(var i = 0; i < QuestionState.length; i++)_loop(i);\n        setScore(newScore);\n        setShowScore(true);\n        if (score >= 40 / QuestionState.length * 100) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \".concat(isLaptop && srink(), \" \").concat(isTablet && \"px-10\", \" px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col  w-screen  gap-12 pb-10 px-1 items-center\\n        \".concat(isTablet && \"gap-10 \", \" \").concat(isLaptop && \"gap-14  min-h-screen\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center  gap-4  w-full  \".concat(isLaptop && \"w-9/12\", \" \\n            \").concat(isTablet && \"w-11/12\", \" \\n           \"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize \",\n                        children: handleLabel\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                showScore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5\",\n                        children: [\n                            \"You scored \",\n                            score,\n                            \" out of \",\n                            QuestionState.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-8 p-10 rounded-xl shadow-sm bg-skin-base dark:bg-gradient-to-r from-[#222222] to-[#1a1a1a]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center rounded-xl border-2 border-skin-base bg-skin-muted dark:theme-dark px-10 py-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"px-10 py-5 text-xl text-skin-muted rounded-2xl bg-skin-dull dark:theme-dark\",\n                                        children: [\n                                            \"Question \",\n                                            currentQuestion + 1,\n                                            \" of \",\n                                            QuestionState.length\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 text-md md:text-xl text-center text-skin-base dark:theme-dark\",\n                                        children: QuestionState[currentQuestion].question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full \",\n                                children: QuestionState[currentQuestion].options.map(function(answer, index) {\n                                    var ref;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-skin-muted rounded-2xl bg-skin-muted dark:theme-dark shadow-sm hover:bg-skin-btn-hover-muted\",\n                                        onClick: function(e) {\n                                            return handleAnswerOption(answer.answer);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: answer.answer,\n                                                value: answer.answer,\n                                                checked: answer.answer === ((ref = selectedOptions[currentQuestion]) === null || ref === void 0 ? void 0 : ref.answerByUser),\n                                                onChange: function(e) {\n                                                    return handleAnswerOption(answer.answer);\n                                                },\n                                                className: \"w-6 h-6 bg-black\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"ml-6 text-skin-base \",\n                                                children: answer.answer\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 132,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 114,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between w-full mt-4 text-white px-5 gap-6 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handlePrevious,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: \"Previous\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: currentQuestion + 1 === QuestionState.length ? handleSubmitButton : handleNext,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: currentQuestion + 1 === QuestionState.length ? \"Submit\" : \"Next\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 136,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n};\n_s(Quiz, \"zthvarjBKLawjpOO7oKdSlLj+Ks=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNpZGViYXJDb250ZXh0IGZyb20gXCIuLi9hc3Nlc3RzL2NvbnRleHQvU2lkZWJhckNvbnRleHRcIjtcclxuaW1wb3J0IFRlc3RDb250ZXh0IGZyb20gXCIuLi9hc3Nlc3RzL2NvbnRleHQvVGVzdENvbnRleHRcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIi4uL2Fzc2VzdHMvaG9va3MvdXNlTWVkaWFRdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcclxuICBjb25zdCBpc0xhcHRvcCA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAxMDI0cHgpXCIpO1xyXG4gIGNvbnN0IGlzVGFibGV0ID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDc2OHB4IClcIik7XHJcbiAgY29uc3QgeyBPcGVuIH0gPSB1c2VDb250ZXh0KFNpZGViYXJDb250ZXh0KTtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uLCBzZXRDdXJyZW50UXVlc3Rpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9ucywgc2V0U2VsZWN0ZWRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG93U2NvcmUsIHNldFNob3dTY29yZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qge1xyXG4gICAgUHJhY3RpY2UxLFxyXG4gICAgUHJhY3RpY2UyLFxyXG4gICAgUHJhY3RpY2UzLFxyXG4gICAgRmluYWxUZXN0LFxyXG4gICAgUXVlc3Rpb25TdGF0ZSxcclxuICAgIFRlc3RTdGF0ZSxcclxuICB9ID0gdXNlQ29udGV4dChUZXN0Q29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxhYmVsID0gKCkgPT4ge1xyXG4gICAgLy8gaWYgKFRlc3RTdGF0ZSA9PT0gUHJhY3RpY2UxKSByZXR1cm4gXCJQcmFjdGljZS0xXCI7XHJcbiAgICAvLyBpZiAoVGVzdFN0YXRlID09PSBQcmFjdGljZTIpIHJldHVybiBcIlByYWN0aWNlLTJcIjtcclxuICAgIC8vIGlmIChUZXN0U3RhdGUgPT09IFByYWN0aWNlMykgcmV0dXJuIFwiUHJhY3RpY2UtM1wiO1xyXG4gICAgLy8gaWYgKFRlc3RTdGF0ZSA9PT0gRmluYWxUZXN0KSByZXR1cm4gXCJGaW5hbC1UZXN0XCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5zd2VyT3B0aW9uID0gKGFuc3dlcikgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRPcHRpb25zKFtcclxuICAgICAgKHNlbGVjdGVkT3B0aW9uc1tjdXJyZW50UXVlc3Rpb25dID0geyBhbnN3ZXJCeVVzZXI6IGFuc3dlciB9KSxcclxuICAgIF0pO1xyXG4gICAgc2V0U2VsZWN0ZWRPcHRpb25zKFsuLi5zZWxlY3RlZE9wdGlvbnNdKTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2UXVlcyA9IGN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcbiAgICBwcmV2UXVlcyA+PSAwICYmIHNldEN1cnJlbnRRdWVzdGlvbihwcmV2UXVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5leHRRdWVzID0gY3VycmVudFF1ZXN0aW9uICsgMTtcclxuICAgIG5leHRRdWVzIDwgUXVlc3Rpb25TdGF0ZS5sZW5ndGggJiYgc2V0Q3VycmVudFF1ZXN0aW9uKG5leHRRdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3U2NvcmUgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBRdWVzdGlvblN0YXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIFF1ZXN0aW9uU3RhdGVbaV0ub3B0aW9ucy5tYXAoXHJcbiAgICAgICAgKGFuc3dlcikgPT5cclxuICAgICAgICAgIGFuc3dlci5pc0NvcnJlY3QgJiZcclxuICAgICAgICAgIGFuc3dlci5hbnN3ZXIgPT09IHNlbGVjdGVkT3B0aW9uc1tpXT8uYW5zd2VyQnlVc2VyICYmXHJcbiAgICAgICAgICAobmV3U2NvcmUgKz0gMSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHNldFNjb3JlKG5ld1Njb3JlKTtcclxuICAgIHNldFNob3dTY29yZSh0cnVlKTtcclxuICAgIGlmIChzY29yZSA+PSAoNDAgLyBRdWVzdGlvblN0YXRlLmxlbmd0aCkgKiAxMDApIHtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzcmluaygpIHtcclxuICAgIHJldHVybiBPcGVuID8gXCJwbC1bMjByZW1dIHB4LTIwXCIgOiBcInBsLVsxMHJlbV0gcHgtMjAgXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2AgJHtpc0xhcHRvcCAmJiBzcmluaygpfSAke1xyXG4gICAgICAgIGlzVGFibGV0ICYmIFwicHgtMTBcIlxyXG4gICAgICB9IHB4LTIgIG10LTE2IHB0LTEwIG1pbi1oLXNjcmVlbiBtaW4tdy1zY3JlZW4gIGZsZXggIGp1c3RpZnktY2VudGVyYH1cclxuICAgID5cclxuICAgICAgey8qIG1haW4gcGFnZSAqL31cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sICB3LXNjcmVlbiAgZ2FwLTEyIHBiLTEwIHB4LTEgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgJHtpc1RhYmxldCAmJiBcImdhcC0xMCBcIn0gJHtpc0xhcHRvcCAmJiBcImdhcC0xNCAgbWluLWgtc2NyZWVuXCJ9IGB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGgtNTIgICByb3VuZGVkLTN4bCBiZy1za2luLWJhc2UgZGFyazpiZy1ncmFkaWVudC10by1yIGZyb20tWyMzMjMyMzJdIHRvLVsjMjkyOTI5XSBkYXJrOnRoZW1lLWRhcmsgc2hhZG93LW1kIHB5LTcgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHRleHQtY2VudGVyICBnYXAtNCAgdy1mdWxsICAke1xyXG4gICAgICAgICAgICBpc0xhcHRvcCAmJiBcInctOS8xMlwiXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAke2lzVGFibGV0ICYmIFwidy0xMS8xMlwifSBcclxuICAgICAgICAgICBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCB0ZXh0LTN4bCB0ZXh0LXNraW4tYmFzZSBiZy1za2luLW11dGVkIGJvcmRlci0yIGJvcmRlci1za2luLWJhc2UgcHgtMyBweS0zIHctOS8xMiByb3VuZGVkLXhsIHNoYWRvdy1zbSAgZGFyazp0aGVtZS1kYXJrIGZvbnQtYm9sZCBjYXBpdGFsaXplIGB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtoYW5kbGVMYWJlbH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd1Njb3JlID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd3LTYvMTIgdGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXNraW4tYmFzZSByb3VuZGVkLTJ4bCBiZy1za2luLWR1bGwgZGFyazp0aGVtZS1kYXJrIHAtNSc+XHJcbiAgICAgICAgICAgICAgWW91IHNjb3JlZCB7c2NvcmV9IG91dCBvZiB7UXVlc3Rpb25TdGF0ZS5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtOCBwLTEwIHJvdW5kZWQteGwgc2hhZG93LXNtICBiZy1za2luLWJhc2UgZGFyazpiZy1ncmFkaWVudC10by1yIGZyb20tWyMyMjIyMjJdIHRvLVsjMWExYTFhXSc+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZC14bCBib3JkZXItMiBib3JkZXItc2tpbi1iYXNlIGJnLXNraW4tbXV0ZWQgZGFyazp0aGVtZS1kYXJrIHB4LTEwIHB5LTVgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHgtMTAgcHktNSB0ZXh0LXhsIHRleHQtc2tpbi1tdXRlZCByb3VuZGVkLTJ4bCBiZy1za2luLWR1bGwgZGFyazp0aGVtZS1kYXJrJz5cclxuICAgICAgICAgICAgICAgICAgUXVlc3Rpb24ge2N1cnJlbnRRdWVzdGlvbiArIDF9IG9mIHtRdWVzdGlvblN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXQtNCB0ZXh0LW1kIG1kOnRleHQteGwgdGV4dC1jZW50ZXIgdGV4dC1za2luLWJhc2UgZGFyazp0aGVtZS1kYXJrYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1F1ZXN0aW9uU3RhdGVbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCAnPlxyXG4gICAgICAgICAgICAgICAge1F1ZXN0aW9uU3RhdGVbY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBweS00IHBsLTUgbS0yIG1sLTAgc3BhY2UteC0yIGJvcmRlci0yIGN1cnNvci1wb2ludGVyIGJvcmRlci1za2luLW11dGVkIHJvdW5kZWQtMnhsIGJnLXNraW4tbXV0ZWQgZGFyazp0aGVtZS1kYXJrIHNoYWRvdy1zbSBob3ZlcjpiZy1za2luLWJ0bi1ob3Zlci1tdXRlZCdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQW5zd2VyT3B0aW9uKGFuc3dlci5hbnN3ZXIpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Fuc3dlci5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIuYW5zd2VyID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnNbY3VycmVudFF1ZXN0aW9uXT8uYW5zd2VyQnlVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUFuc3dlck9wdGlvbihhbnN3ZXIuYW5zd2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy02IGgtNiBiZy1ibGFjaydcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtNiB0ZXh0LXNraW4tYmFzZSAnPnthbnN3ZXIuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG10LTQgdGV4dC13aGl0ZSBweC01IGdhcC02ICc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzQ5JV0gcHktMyBiZy1bIzA5OWFiM10gaG92ZXI6YmctWyMwMTcxODVdIHJvdW5kZWQtM3hsIHRleHQteGwgc2hhZG93LW1kJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiArIDEgPT09IFF1ZXN0aW9uU3RhdGUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZVN1Ym1pdEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVOZXh0XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LVs0OSVdIHB5LTMgYmctWyMwOTlhYjNdIGhvdmVyOmJnLVsjMDE3MTg1XSByb3VuZGVkLTN4bCB0ZXh0LXhsIHNoYWRvdy1tZCdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbiArIDEgPT09IFF1ZXN0aW9uU3RhdGUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIk5leHRcIn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJTaWRlYmFyQ29udGV4dCIsIlRlc3RDb250ZXh0IiwidXNlTWVkaWFRdWVyeSIsIlF1aXoiLCJzcmluayIsIk9wZW4iLCJpc0xhcHRvcCIsImlzVGFibGV0IiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2VsZWN0ZWRPcHRpb25zIiwic2V0U2VsZWN0ZWRPcHRpb25zIiwic2NvcmUiLCJzZXRTY29yZSIsInNob3dTY29yZSIsInNldFNob3dTY29yZSIsIlByYWN0aWNlMSIsIlByYWN0aWNlMiIsIlByYWN0aWNlMyIsIkZpbmFsVGVzdCIsIlF1ZXN0aW9uU3RhdGUiLCJUZXN0U3RhdGUiLCJoYW5kbGVMYWJlbCIsImhhbmRsZUFuc3dlck9wdGlvbiIsImFuc3dlciIsImFuc3dlckJ5VXNlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQcmV2aW91cyIsInByZXZRdWVzIiwiaGFuZGxlTmV4dCIsIm5leHRRdWVzIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0QnV0dG9uIiwiaSIsIm9wdGlvbnMiLCJtYXAiLCJpc0NvcnJlY3QiLCJuZXdTY29yZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJxdWVzdGlvbiIsImluZGV4Iiwib25DbGljayIsImUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/quiz.js\n");

/***/ })

});