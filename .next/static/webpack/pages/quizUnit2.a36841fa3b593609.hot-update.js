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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/context/SidebarContext */ \"./src/assests/context/SidebarContext.js\");\n/* harmony import */ var _assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/context/TestContext */ \"./src/assests/context/TestContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    var srink = function srink() {\n        return Open ? \"pl-[20rem] px-20\" : \"pl-[10rem] px-20 \";\n    };\n    _s();\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 1024px)\");\n    var isTablet = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 768px )\");\n    var Open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).Open;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentQuestion = ref5[0], setCurrentQuestion = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedOptions = ref1[0], setSelectedOptions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScore = ref3[0], setShowScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), Practice1 = ref4.Practice1, Practice2 = ref4.Practice2, Practice3 = ref4.Practice3, FinalTest = ref4.FinalTest, QuestionState = ref4.QuestionState, TestState = ref4.TestState;\n    var handleLabel = function() {\n        if (TestState === Practice1) return \"Practice-1\";\n        if (TestState === Practice2) return \"Practice-2\";\n        if (TestState === Practice3) return \"Practice-3\";\n        if (TestState === FinalTest) return \"Final-Test\";\n    };\n    var handleAnswerOption = function(answer) {\n        setSelectedOptions([\n            selectedOptions[currentQuestion] = {\n                answerByUser: answer\n            }, \n        ]);\n        setSelectedOptions(_toConsumableArray(selectedOptions));\n        console.log(selectedOptions);\n    };\n    var handlePrevious = function() {\n        var prevQues = currentQuestion - 1;\n        prevQues >= 0 && setCurrentQuestion(prevQues);\n    };\n    var handleNext = function() {\n        var nextQues = currentQuestion + 1;\n        nextQues < QuestionState.length && setCurrentQuestion(nextQues);\n    };\n    var handleSubmitButton = function() {\n        var _loop = function(i) {\n            QuestionState[i].options.map(function(answer) {\n                var ref;\n                return answer.isCorrect && answer.answer === ((ref = selectedOptions[i]) === null || ref === void 0 ? void 0 : ref.answerByUser) && (newScore += 1);\n            });\n        };\n        var newScore = 0;\n        for(var i = 0; i < QuestionState.length; i++)_loop(i);\n        setScore(newScore);\n        setShowScore(true);\n        if (score >= 40 / QuestionState.length * 100) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \".concat(isLaptop && srink(), \" \").concat(isTablet && \"px-10\", \" px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col  w-screen  gap-12 pb-10 px-1 items-center\\n        \".concat(isTablet && \"gap-10 \", \" \").concat(isLaptop && \"gap-14  min-h-screen\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center  gap-4  w-full  \".concat(isLaptop && \"w-9/12\", \" \\n            \").concat(isTablet && \"w-11/12\", \" \\n           \"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize \",\n                        children: handleLabel()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                showScore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5\",\n                        children: [\n                            \"You scored \",\n                            score,\n                            \" out of \",\n                            QuestionState.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-8 p-10 rounded-xl shadow-sm bg-skin-base dark:bg-gradient-to-r from-[#222222] to-[#1a1a1a]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center rounded-xl border-2 border-skin-base bg-skin-muted dark:theme-dark px-10 py-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"px-10 py-5 text-xl text-skin-muted rounded-2xl bg-skin-dull dark:theme-dark\",\n                                        children: [\n                                            \"Question \",\n                                            currentQuestion + 1,\n                                            \" of \",\n                                            QuestionState.length\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 text-md md:text-xl text-center text-skin-base dark:theme-dark\",\n                                        children: QuestionState[currentQuestion].question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full \",\n                                children: QuestionState[currentQuestion].options.map(function(answer, index) {\n                                    var ref;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-skin-muted rounded-2xl bg-skin-muted dark:theme-dark shadow-sm hover:bg-skin-btn-hover-muted\",\n                                        onClick: function(e) {\n                                            return handleAnswerOption(answer.answer);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: answer.answer,\n                                                value: answer.answer,\n                                                checked: answer.answer === ((ref = selectedOptions[currentQuestion]) === null || ref === void 0 ? void 0 : ref.answerByUser),\n                                                onChange: function(e) {\n                                                    return handleAnswerOption(answer.answer);\n                                                },\n                                                className: \"w-6 h-6 bg-black\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 121,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"ml-6 text-skin-base \",\n                                                children: answer.answer\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 132,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 114,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between w-full mt-4 text-white px-5 gap-6 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handlePrevious,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: \"Previous\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: currentQuestion + 1 === QuestionState.length ? handleSubmitButton : handleNext,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: currentQuestion + 1 === QuestionState.length ? \"Submit\" : \"Next\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 136,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n};\n_s(Quiz, \"zthvarjBKLawjpOO7oKdSlLj+Ks=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Z0JBRUQ7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBNUp1QjdCLElBQUk7O1FBQ1RELG9FQUFhO1FBQ2JBLG9FQUFhOzs7QUFGUkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9xdWl6LmpzP2JlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWRlYmFyQ29udGV4dCBmcm9tIFwiLi4vYXNzZXN0cy9jb250ZXh0L1NpZGViYXJDb250ZXh0XCI7XHJcbmltcG9ydCBUZXN0Q29udGV4dCBmcm9tIFwiLi4vYXNzZXN0cy9jb250ZXh0L1Rlc3RDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCIuLi9hc3Nlc3RzL2hvb2tzL3VzZU1lZGlhUXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgaXNMYXB0b3AgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKTtcclxuICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiA3NjhweCApXCIpO1xyXG4gIGNvbnN0IHsgT3BlbiB9ID0gdXNlQ29udGV4dChTaWRlYmFyQ29udGV4dCk7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1Njb3JlLCBzZXRTaG93U2NvcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHtcclxuICAgIFByYWN0aWNlMSxcclxuICAgIFByYWN0aWNlMixcclxuICAgIFByYWN0aWNlMyxcclxuICAgIEZpbmFsVGVzdCxcclxuICAgIFF1ZXN0aW9uU3RhdGUsXHJcbiAgICBUZXN0U3RhdGUsXHJcbiAgfSA9IHVzZUNvbnRleHQoVGVzdENvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMYWJlbCA9ICgpID0+IHtcclxuICAgIGlmIChUZXN0U3RhdGUgPT09IFByYWN0aWNlMSkgcmV0dXJuIFwiUHJhY3RpY2UtMVwiO1xyXG4gICAgaWYgKFRlc3RTdGF0ZSA9PT0gUHJhY3RpY2UyKSByZXR1cm4gXCJQcmFjdGljZS0yXCI7XHJcbiAgICBpZiAoVGVzdFN0YXRlID09PSBQcmFjdGljZTMpIHJldHVybiBcIlByYWN0aWNlLTNcIjtcclxuICAgIGlmIChUZXN0U3RhdGUgPT09IEZpbmFsVGVzdCkgcmV0dXJuIFwiRmluYWwtVGVzdFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFuc3dlck9wdGlvbiA9IChhbnN3ZXIpID0+IHtcclxuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhbXHJcbiAgICAgIChzZWxlY3RlZE9wdGlvbnNbY3VycmVudFF1ZXN0aW9uXSA9IHsgYW5zd2VyQnlVc2VyOiBhbnN3ZXIgfSksXHJcbiAgICBdKTtcclxuICAgIHNldFNlbGVjdGVkT3B0aW9ucyhbLi4uc2VsZWN0ZWRPcHRpb25zXSk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE9wdGlvbnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJldlF1ZXMgPSBjdXJyZW50UXVlc3Rpb24gLSAxO1xyXG4gICAgcHJldlF1ZXMgPj0gMCAmJiBzZXRDdXJyZW50UXVlc3Rpb24ocHJldlF1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0UXVlcyA9IGN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICBuZXh0UXVlcyA8IFF1ZXN0aW9uU3RhdGUubGVuZ3RoICYmIHNldEN1cnJlbnRRdWVzdGlvbihuZXh0UXVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1Njb3JlID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUXVlc3Rpb25TdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBRdWVzdGlvblN0YXRlW2ldLm9wdGlvbnMubWFwKFxyXG4gICAgICAgIChhbnN3ZXIpID0+XHJcbiAgICAgICAgICBhbnN3ZXIuaXNDb3JyZWN0ICYmXHJcbiAgICAgICAgICBhbnN3ZXIuYW5zd2VyID09PSBzZWxlY3RlZE9wdGlvbnNbaV0/LmFuc3dlckJ5VXNlciAmJlxyXG4gICAgICAgICAgKG5ld1Njb3JlICs9IDEpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzZXRTY29yZShuZXdTY29yZSk7XHJcbiAgICBzZXRTaG93U2NvcmUodHJ1ZSk7XHJcbiAgICBpZiAoc2NvcmUgPj0gKDQwIC8gUXVlc3Rpb25TdGF0ZS5sZW5ndGgpICogMTAwKSB7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc3JpbmsoKSB7XHJcbiAgICByZXR1cm4gT3BlbiA/IFwicGwtWzIwcmVtXSBweC0yMFwiIDogXCJwbC1bMTByZW1dIHB4LTIwIFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgICR7aXNMYXB0b3AgJiYgc3JpbmsoKX0gJHtcclxuICAgICAgICBpc1RhYmxldCAmJiBcInB4LTEwXCJcclxuICAgICAgfSBweC0yICBtdC0xNiBwdC0xMCBtaW4taC1zY3JlZW4gbWluLXctc2NyZWVuICBmbGV4ICBqdXN0aWZ5LWNlbnRlcmB9XHJcbiAgICA+XHJcbiAgICAgIHsvKiBtYWluIHBhZ2UgKi99XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCAgdy1zY3JlZW4gIGdhcC0xMiBwYi0xMCBweC0xIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgICR7aXNUYWJsZXQgJiYgXCJnYXAtMTAgXCJ9ICR7aXNMYXB0b3AgJiYgXCJnYXAtMTQgIG1pbi1oLXNjcmVlblwifSBgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBoLTUyICAgcm91bmRlZC0zeGwgYmctc2tpbi1iYXNlIGRhcms6YmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMzIzMjMyXSB0by1bIzI5MjkyOV0gZGFyazp0aGVtZS1kYXJrIHNoYWRvdy1tZCBweS03IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCB0ZXh0LWNlbnRlciAgZ2FwLTQgIHctZnVsbCAgJHtcclxuICAgICAgICAgICAgaXNMYXB0b3AgJiYgXCJ3LTkvMTJcIlxyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgICAgJHtpc1RhYmxldCAmJiBcInctMTEvMTJcIn0gXHJcbiAgICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2AgdGV4dC0zeGwgdGV4dC1za2luLWJhc2UgYmctc2tpbi1tdXRlZCBib3JkZXItMiBib3JkZXItc2tpbi1iYXNlIHB4LTMgcHktMyB3LTkvMTIgcm91bmRlZC14bCBzaGFkb3ctc20gIGRhcms6dGhlbWUtZGFyayBmb250LWJvbGQgY2FwaXRhbGl6ZSBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aGFuZGxlTGFiZWwoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd1Njb3JlID8gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd3LTYvMTIgdGV4dC0zeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXNraW4tYmFzZSByb3VuZGVkLTJ4bCBiZy1za2luLWR1bGwgZGFyazp0aGVtZS1kYXJrIHAtNSc+XHJcbiAgICAgICAgICAgICAgWW91IHNjb3JlZCB7c2NvcmV9IG91dCBvZiB7UXVlc3Rpb25TdGF0ZS5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtOCBwLTEwIHJvdW5kZWQteGwgc2hhZG93LXNtICBiZy1za2luLWJhc2UgZGFyazpiZy1ncmFkaWVudC10by1yIGZyb20tWyMyMjIyMjJdIHRvLVsjMWExYTFhXSc+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcm91bmRlZC14bCBib3JkZXItMiBib3JkZXItc2tpbi1iYXNlIGJnLXNraW4tbXV0ZWQgZGFyazp0aGVtZS1kYXJrIHB4LTEwIHB5LTVgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHgtMTAgcHktNSB0ZXh0LXhsIHRleHQtc2tpbi1tdXRlZCByb3VuZGVkLTJ4bCBiZy1za2luLWR1bGwgZGFyazp0aGVtZS1kYXJrJz5cclxuICAgICAgICAgICAgICAgICAgUXVlc3Rpb24ge2N1cnJlbnRRdWVzdGlvbiArIDF9IG9mIHtRdWVzdGlvblN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXQtNCB0ZXh0LW1kIG1kOnRleHQteGwgdGV4dC1jZW50ZXIgdGV4dC1za2luLWJhc2UgZGFyazp0aGVtZS1kYXJrYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1F1ZXN0aW9uU3RhdGVbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctZnVsbCAnPlxyXG4gICAgICAgICAgICAgICAge1F1ZXN0aW9uU3RhdGVbY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHctZnVsbCBweS00IHBsLTUgbS0yIG1sLTAgc3BhY2UteC0yIGJvcmRlci0yIGN1cnNvci1wb2ludGVyIGJvcmRlci1za2luLW11dGVkIHJvdW5kZWQtMnhsIGJnLXNraW4tbXV0ZWQgZGFyazp0aGVtZS1kYXJrIHNoYWRvdy1zbSBob3ZlcjpiZy1za2luLWJ0bi1ob3Zlci1tdXRlZCdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQW5zd2VyT3B0aW9uKGFuc3dlci5hbnN3ZXIpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbydcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Fuc3dlci5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5zd2VyLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIuYW5zd2VyID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnNbY3VycmVudFF1ZXN0aW9uXT8uYW5zd2VyQnlVc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUFuc3dlck9wdGlvbihhbnN3ZXIuYW5zd2VyKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy02IGgtNiBiZy1ibGFjaydcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWwtNiB0ZXh0LXNraW4tYmFzZSAnPnthbnN3ZXIuYW5zd2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG10LTQgdGV4dC13aGl0ZSBweC01IGdhcC02ICc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzQ5JV0gcHktMyBiZy1bIzA5OWFiM10gaG92ZXI6YmctWyMwMTcxODVdIHJvdW5kZWQtM3hsIHRleHQteGwgc2hhZG93LW1kJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiArIDEgPT09IFF1ZXN0aW9uU3RhdGUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZVN1Ym1pdEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVOZXh0XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LVs0OSVdIHB5LTMgYmctWyMwOTlhYjNdIGhvdmVyOmJnLVsjMDE3MTg1XSByb3VuZGVkLTN4bCB0ZXh0LXhsIHNoYWRvdy1tZCdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2N1cnJlbnRRdWVzdGlvbiArIDEgPT09IFF1ZXN0aW9uU3RhdGUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIk5leHRcIn1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJTaWRlYmFyQ29udGV4dCIsIlRlc3RDb250ZXh0IiwidXNlTWVkaWFRdWVyeSIsIlF1aXoiLCJzcmluayIsIk9wZW4iLCJpc0xhcHRvcCIsImlzVGFibGV0IiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2VsZWN0ZWRPcHRpb25zIiwic2V0U2VsZWN0ZWRPcHRpb25zIiwic2NvcmUiLCJzZXRTY29yZSIsInNob3dTY29yZSIsInNldFNob3dTY29yZSIsIlByYWN0aWNlMSIsIlByYWN0aWNlMiIsIlByYWN0aWNlMyIsIkZpbmFsVGVzdCIsIlF1ZXN0aW9uU3RhdGUiLCJUZXN0U3RhdGUiLCJoYW5kbGVMYWJlbCIsImhhbmRsZUFuc3dlck9wdGlvbiIsImFuc3dlciIsImFuc3dlckJ5VXNlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQcmV2aW91cyIsInByZXZRdWVzIiwiaGFuZGxlTmV4dCIsIm5leHRRdWVzIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0QnV0dG9uIiwiaSIsIm9wdGlvbnMiLCJtYXAiLCJpc0NvcnJlY3QiLCJuZXdTY29yZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJxdWVzdGlvbiIsImluZGV4Iiwib25DbGljayIsImUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/quiz.js\n");

/***/ })

});