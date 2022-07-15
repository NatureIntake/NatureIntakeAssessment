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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/context/SidebarContext */ \"./src/assests/context/SidebarContext.js\");\n/* harmony import */ var _assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/context/TestContext */ \"./src/assests/context/TestContext.js\");\n/* harmony import */ var _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/hooks/useMediaQuery */ \"./src/assests/hooks/useMediaQuery.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    var srink = function srink() {\n        return Open ? \"pl-[20rem] px-20\" : \"pl-[10rem] px-20 \";\n    };\n    _s();\n    var isLaptop = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 1024px)\");\n    var isTablet = (0,_assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"(min-width: 768px )\");\n    var Open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_SidebarContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).Open;\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentQuestion = ref5[0], setCurrentQuestion = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), selectedOptions = ref1[0], setSelectedOptions = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showScore = ref3[0], setShowScore = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_assests_context_TestContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), Practice1 = ref4.Practice1, Practice2 = ref4.Practice2, Practice3 = ref4.Practice3, FinalTest = ref4.FinalTest, QuestionState = ref4.QuestionState, TestState = ref4.TestState, TestTitle = ref4.TestTitle;\n    var handleLabel = function() {\n        if (TestState === Practice1) return \"Practice-1\";\n        if (TestState === Practice2) return \"Practice-2\";\n        if (TestState === Practice3) return \"Practice-3\";\n        if (TestState === FinalTest) return \"Final-Test\";\n    };\n    var handleAnswerOption = function(answer) {\n        setSelectedOptions([\n            selectedOptions[currentQuestion] = {\n                answerByUser: answer\n            }, \n        ]);\n        setSelectedOptions(_toConsumableArray(selectedOptions));\n        console.log(selectedOptions);\n    };\n    var handlePrevious = function() {\n        var prevQues = currentQuestion - 1;\n        prevQues >= 0 && setCurrentQuestion(prevQues);\n    };\n    var handleNext = function() {\n        var nextQues = currentQuestion + 1;\n        nextQues < QuestionState.length && setCurrentQuestion(nextQues);\n    };\n    var handleSubmitButton = function() {\n        var _loop = function(i) {\n            QuestionState[i].options.map(function(answer) {\n                var ref;\n                return answer.isCorrect && answer.answer === ((ref = selectedOptions[i]) === null || ref === void 0 ? void 0 : ref.answerByUser) && (newScore += 1);\n            });\n        };\n        var newScore = 0;\n        for(var i = 0; i < QuestionState.length; i++)_loop(i);\n        setScore(newScore);\n        setShowScore(true);\n        if (score >= 40 / QuestionState.length * 100) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" \".concat(isLaptop && srink(), \" \").concat(isTablet && \"px-10\", \" px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col  w-screen  gap-12 pb-10 px-1 items-center\\n        \".concat(isTablet && \"gap-10 \", \" \").concat(isLaptop && \"gap-14  min-h-screen\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center  gap-4  w-full  \".concat(isLaptop && \"w-9/12\", \" \\n            \").concat(isTablet && \"w-11/12\", \" \\n           \"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \" text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize \",\n                        children: handleLabel()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                showScore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"w-6/12 text-3xl font-semibold text-center text-skin-base rounded-2xl bg-skin-dull dark:theme-dark p-5\",\n                        children: [\n                            \"You scored \",\n                            score,\n                            \" out of \",\n                            QuestionState.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-8 p-10 rounded-xl shadow-sm bg-skin-base dark:bg-gradient-to-r from-[#222222] to-[#1a1a1a]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center rounded-xl border-2 border-skin-base bg-skin-muted dark:theme-dark px-10 py-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"px-10 py-5 text-xl text-skin-muted rounded-2xl bg-skin-dull dark:theme-dark\",\n                                        children: [\n                                            \"Question \",\n                                            currentQuestion + 1,\n                                            \" of \",\n                                            QuestionState.length\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 text-md md:text-xl text-center text-skin-base dark:theme-dark\",\n                                        children: QuestionState[currentQuestion].question\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 104,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full \",\n                                children: QuestionState[currentQuestion].options.map(function(answer, index) {\n                                    var ref;\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-skin-muted rounded-2xl bg-skin-muted dark:theme-dark shadow-sm hover:bg-skin-btn-hover-muted\",\n                                        onClick: function(e) {\n                                            return handleAnswerOption(answer.answer);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                name: answer.answer,\n                                                value: answer.answer,\n                                                checked: answer.answer === ((ref = selectedOptions[currentQuestion]) === null || ref === void 0 ? void 0 : ref.answerByUser),\n                                                onChange: function(e) {\n                                                    return handleAnswerOption(answer.answer);\n                                                },\n                                                className: \"w-6 h-6 bg-black\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 123,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"ml-6 text-skin-base \",\n                                                children: answer.answer\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                                lineNumber: 134,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 19\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 116,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between w-full mt-4 text-white px-5 gap-6 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handlePrevious,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: \"Previous\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: currentQuestion + 1 === QuestionState.length ? handleSubmitButton : handleNext,\n                                        className: \"w-[49%] py-3 bg-[#099ab3] hover:bg-[#017185] rounded-3xl text-xl shadow-md\",\n                                        children: currentQuestion + 1 === QuestionState.length ? \"Submit\" : \"Next\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                                lineNumber: 138,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n                        lineNumber: 103,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\neera\\\\OneDrive\\\\Documents\\\\DEV\\\\VSC\\\\Projects\\\\Nextjs\\\\natureintakeapp\\\\src\\\\components\\\\quiz.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n};\n_s(Quiz, \"huhegPMXnTtxsOEDCv6u6kfgfoo=\", false, function() {\n    return [\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _assests_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs7Ozs7NENBQ0g7Ozs7OztvQ0FDTDs7Ozs7OzRCQUNGO2lDQUNMOzs7Ozs7Z0JBRUQ7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBOUp1QjlCLElBQUk7O1FBQ1RELG9FQUFhO1FBQ2JBLG9FQUFhOzs7QUFGUkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9xdWl6LmpzP2JlNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaWRlYmFyQ29udGV4dCBmcm9tIFwiLi4vYXNzZXN0cy9jb250ZXh0L1NpZGViYXJDb250ZXh0XCI7XHJcbmltcG9ydCBUZXN0Q29udGV4dCBmcm9tIFwiLi4vYXNzZXN0cy9jb250ZXh0L1Rlc3RDb250ZXh0XCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCIuLi9hc3Nlc3RzL2hvb2tzL3VzZU1lZGlhUXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXooKSB7XHJcbiAgY29uc3QgaXNMYXB0b3AgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKTtcclxuICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiA3NjhweCApXCIpO1xyXG4gIGNvbnN0IHsgT3BlbiB9ID0gdXNlQ29udGV4dChTaWRlYmFyQ29udGV4dCk7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbnMsIHNldFNlbGVjdGVkT3B0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1Njb3JlLCBzZXRTaG93U2NvcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHtcclxuICAgIFByYWN0aWNlMSxcclxuICAgIFByYWN0aWNlMixcclxuICAgIFByYWN0aWNlMyxcclxuICAgIEZpbmFsVGVzdCxcclxuICAgIFF1ZXN0aW9uU3RhdGUsXHJcbiAgICBUZXN0U3RhdGUsXHJcbiAgICBUZXN0VGl0bGUsXHJcbiAgfSA9IHVzZUNvbnRleHQoVGVzdENvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMYWJlbCA9ICgpID0+IHtcclxuICAgIGlmIChUZXN0U3RhdGUgPT09IFByYWN0aWNlMSkgcmV0dXJuIFwiUHJhY3RpY2UtMVwiO1xyXG4gICAgaWYgKFRlc3RTdGF0ZSA9PT0gUHJhY3RpY2UyKSByZXR1cm4gXCJQcmFjdGljZS0yXCI7XHJcbiAgICBpZiAoVGVzdFN0YXRlID09PSBQcmFjdGljZTMpIHJldHVybiBcIlByYWN0aWNlLTNcIjtcclxuICAgIGlmIChUZXN0U3RhdGUgPT09IEZpbmFsVGVzdCkgcmV0dXJuIFwiRmluYWwtVGVzdFwiO1xyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5zd2VyT3B0aW9uID0gKGFuc3dlcikgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRPcHRpb25zKFtcclxuICAgICAgKHNlbGVjdGVkT3B0aW9uc1tjdXJyZW50UXVlc3Rpb25dID0geyBhbnN3ZXJCeVVzZXI6IGFuc3dlciB9KSxcclxuICAgIF0pO1xyXG4gICAgc2V0U2VsZWN0ZWRPcHRpb25zKFsuLi5zZWxlY3RlZE9wdGlvbnNdKTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2UXVlcyA9IGN1cnJlbnRRdWVzdGlvbiAtIDE7XHJcbiAgICBwcmV2UXVlcyA+PSAwICYmIHNldEN1cnJlbnRRdWVzdGlvbihwcmV2UXVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5leHRRdWVzID0gY3VycmVudFF1ZXN0aW9uICsgMTtcclxuICAgIG5leHRRdWVzIDwgUXVlc3Rpb25TdGF0ZS5sZW5ndGggJiYgc2V0Q3VycmVudFF1ZXN0aW9uKG5leHRRdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBsZXQgbmV3U2NvcmUgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBRdWVzdGlvblN0YXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIFF1ZXN0aW9uU3RhdGVbaV0ub3B0aW9ucy5tYXAoXHJcbiAgICAgICAgKGFuc3dlcikgPT5cclxuICAgICAgICAgIGFuc3dlci5pc0NvcnJlY3QgJiZcclxuICAgICAgICAgIGFuc3dlci5hbnN3ZXIgPT09IHNlbGVjdGVkT3B0aW9uc1tpXT8uYW5zd2VyQnlVc2VyICYmXHJcbiAgICAgICAgICAobmV3U2NvcmUgKz0gMSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHNldFNjb3JlKG5ld1Njb3JlKTtcclxuICAgIHNldFNob3dTY29yZSh0cnVlKTtcclxuICAgIGlmIChzY29yZSA+PSAoNDAgLyBRdWVzdGlvblN0YXRlLmxlbmd0aCkgKiAxMDApIHtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzcmluaygpIHtcclxuICAgIHJldHVybiBPcGVuID8gXCJwbC1bMjByZW1dIHB4LTIwXCIgOiBcInBsLVsxMHJlbV0gcHgtMjAgXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2AgJHtpc0xhcHRvcCAmJiBzcmluaygpfSAke1xyXG4gICAgICAgIGlzVGFibGV0ICYmIFwicHgtMTBcIlxyXG4gICAgICB9IHB4LTIgIG10LTE2IHB0LTEwIG1pbi1oLXNjcmVlbiBtaW4tdy1zY3JlZW4gIGZsZXggIGp1c3RpZnktY2VudGVyYH1cclxuICAgID5cclxuICAgICAgey8qIG1haW4gcGFnZSAqL31cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sICB3LXNjcmVlbiAgZ2FwLTEyIHBiLTEwIHB4LTEgaXRlbXMtY2VudGVyXHJcbiAgICAgICAgJHtpc1RhYmxldCAmJiBcImdhcC0xMCBcIn0gJHtpc0xhcHRvcCAmJiBcImdhcC0xNCAgbWluLWgtc2NyZWVuXCJ9IGB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGgtNTIgICByb3VuZGVkLTN4bCBiZy1za2luLWJhc2UgZGFyazpiZy1ncmFkaWVudC10by1yIGZyb20tWyMzMjMyMzJdIHRvLVsjMjkyOTI5XSBkYXJrOnRoZW1lLWRhcmsgc2hhZG93LW1kIHB5LTcgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHRleHQtY2VudGVyICBnYXAtNCAgdy1mdWxsICAke1xyXG4gICAgICAgICAgICBpc0xhcHRvcCAmJiBcInctOS8xMlwiXHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAke2lzVGFibGV0ICYmIFwidy0xMS8xMlwifSBcclxuICAgICAgICAgICBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCB0ZXh0LTN4bCB0ZXh0LXNraW4tYmFzZSBiZy1za2luLW11dGVkIGJvcmRlci0yIGJvcmRlci1za2luLWJhc2UgcHgtMyBweS0zIHctOS8xMiByb3VuZGVkLXhsIHNoYWRvdy1zbSAgZGFyazp0aGVtZS1kYXJrIGZvbnQtYm9sZCBjYXBpdGFsaXplIGB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtoYW5kbGVMYWJlbCgpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93U2NvcmUgPyAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ctNi8xMiB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtc2tpbi1iYXNlIHJvdW5kZWQtMnhsIGJnLXNraW4tZHVsbCBkYXJrOnRoZW1lLWRhcmsgcC01Jz5cclxuICAgICAgICAgICAgICBZb3Ugc2NvcmVkIHtzY29yZX0gb3V0IG9mIHtRdWVzdGlvblN0YXRlLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC04IHAtMTAgcm91bmRlZC14bCBzaGFkb3ctc20gIGJnLXNraW4tYmFzZSBkYXJrOmJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzIyMjIyMl0gdG8tWyMxYTFhMWFdJz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciByb3VuZGVkLXhsIGJvcmRlci0yIGJvcmRlci1za2luLWJhc2UgYmctc2tpbi1tdXRlZCBkYXJrOnRoZW1lLWRhcmsgcHgtMTAgcHktNWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdweC0xMCBweS01IHRleHQteGwgdGV4dC1za2luLW11dGVkIHJvdW5kZWQtMnhsIGJnLXNraW4tZHVsbCBkYXJrOnRoZW1lLWRhcmsnPlxyXG4gICAgICAgICAgICAgICAgICBRdWVzdGlvbiB7Y3VycmVudFF1ZXN0aW9uICsgMX0gb2Yge1F1ZXN0aW9uU3RhdGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtdC00IHRleHQtbWQgbWQ6dGV4dC14bCB0ZXh0LWNlbnRlciB0ZXh0LXNraW4tYmFzZSBkYXJrOnRoZW1lLWRhcmtgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7UXVlc3Rpb25TdGF0ZVtjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1mdWxsICc+XHJcbiAgICAgICAgICAgICAgICB7UXVlc3Rpb25TdGF0ZVtjdXJyZW50UXVlc3Rpb25dLm9wdGlvbnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB5LTQgcGwtNSBtLTIgbWwtMCBzcGFjZS14LTIgYm9yZGVyLTIgY3Vyc29yLXBvaW50ZXIgYm9yZGVyLXNraW4tbXV0ZWQgcm91bmRlZC0yeGwgYmctc2tpbi1tdXRlZCBkYXJrOnRoZW1lLWRhcmsgc2hhZG93LXNtIGhvdmVyOmJnLXNraW4tYnRuLWhvdmVyLW11dGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVBbnN3ZXJPcHRpb24oYW5zd2VyLmFuc3dlcil9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17YW5zd2VyLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbnN3ZXIuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlci5hbnN3ZXIgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uc1tjdXJyZW50UXVlc3Rpb25dPy5hbnN3ZXJCeVVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQW5zd2VyT3B0aW9uKGFuc3dlci5hbnN3ZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYgaC02IGJnLWJsYWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtbC02IHRleHQtc2tpbi1iYXNlICc+e2Fuc3dlci5hbnN3ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXQtNCB0ZXh0LXdoaXRlIHB4LTUgZ2FwLTYgJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXN9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1bNDklXSBweS0zIGJnLVsjMDk5YWIzXSBob3ZlcjpiZy1bIzAxNzE4NV0gcm91bmRlZC0zeGwgdGV4dC14bCBzaGFkb3ctbWQnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uICsgMSA9PT0gUXVlc3Rpb25TdGF0ZS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgID8gaGFuZGxlU3VibWl0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGhhbmRsZU5leHRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctWzQ5JV0gcHktMyBiZy1bIzA5OWFiM10gaG92ZXI6YmctWyMwMTcxODVdIHJvdW5kZWQtM3hsIHRleHQteGwgc2hhZG93LW1kJ1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uICsgMSA9PT0gUXVlc3Rpb25TdGF0ZS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICA/IFwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiTmV4dFwifVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlNpZGViYXJDb250ZXh0IiwiVGVzdENvbnRleHQiLCJ1c2VNZWRpYVF1ZXJ5IiwiUXVpeiIsInNyaW5rIiwiT3BlbiIsImlzTGFwdG9wIiwiaXNUYWJsZXQiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJzZWxlY3RlZE9wdGlvbnMiLCJzZXRTZWxlY3RlZE9wdGlvbnMiLCJzY29yZSIsInNldFNjb3JlIiwic2hvd1Njb3JlIiwic2V0U2hvd1Njb3JlIiwiUHJhY3RpY2UxIiwiUHJhY3RpY2UyIiwiUHJhY3RpY2UzIiwiRmluYWxUZXN0IiwiUXVlc3Rpb25TdGF0ZSIsIlRlc3RTdGF0ZSIsIlRlc3RUaXRsZSIsImhhbmRsZUxhYmVsIiwiaGFuZGxlQW5zd2VyT3B0aW9uIiwiYW5zd2VyIiwiYW5zd2VyQnlVc2VyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVByZXZpb3VzIiwicHJldlF1ZXMiLCJoYW5kbGVOZXh0IiwibmV4dFF1ZXMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXRCdXR0b24iLCJpIiwib3B0aW9ucyIsIm1hcCIsImlzQ29ycmVjdCIsIm5ld1Njb3JlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInF1ZXN0aW9uIiwiaW5kZXgiLCJvbkNsaWNrIiwiZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/quiz.js\n");

/***/ })

});