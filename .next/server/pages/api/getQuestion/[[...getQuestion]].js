"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getQuestion/[[...getQuestion]]";
exports.ids = ["pages/api/getQuestion/[[...getQuestion]]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./src/middleware/connectDb.js":
/*!*************************************!*\
  !*** ./src/middleware/connectDb.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGO_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbWlkZGxld2FyZS9jb25uZWN0RGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7QUFDakMsTUFBTUMsT0FBTyxHQUFHO0lBQ2RDLGtCQUFrQixFQUFFLElBQUk7SUFDeEJDLGVBQWUsRUFBRSxJQUFJO0NBQ3RCO0FBRUQsSUFBSUMsTUFBTTtBQUNWLElBQUlDLGFBQWE7QUFFakIsSUFBSVAsSUFBc0MsRUFBRTtJQUMxQyxJQUFJLENBQUNRLE1BQU0sQ0FBQ0MsbUJBQW1CLEVBQUU7UUFDL0JILE1BQU0sR0FBRyxJQUFJUixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDSyxNQUFNLENBQUNDLG1CQUFtQixHQUFHSCxNQUFNLENBQUNJLE9BQU8sRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDREgsYUFBYSxHQUFHQyxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFHTjtBQUVELGlFQUFlRixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvbWlkZGxld2FyZS9jb25uZWN0RGIuanM/YWU3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT19VUkk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxufTtcclxuXHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwib3B0aW9ucyIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/middleware/connectDb.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/getQuestion/[[...getQuestion]].js":
/*!*********************************************************!*\
  !*** ./src/pages/api/getQuestion/[[...getQuestion]].js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _middleware_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../middleware/connectDb */ \"(api)/./src/middleware/connectDb.js\");\n\nasync function handler(req, res) {\n    const { getQuestion  } = req.query;\n    const client = await _middleware_connectDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"QuestionBank\");\n    const allPosts = await db.collection(getQuestion[0]).aggregate([\n        {\n            $match: {\n                testType: getQuestion[1]\n            }\n        },\n        {\n            $sample: {\n                size: parseInt(getQuestion[2])\n            }\n        }, \n    ]).toArray();\n    res.json(allPosts);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldFF1ZXN0aW9uL1tbLi4uZ2V0UXVlc3Rpb25dXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwRDtBQUUzQyxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsV0FBVyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUNqQyxNQUFNQyxNQUFNLEdBQUcsTUFBTU4sNkRBQWE7SUFDbEMsTUFBTU8sRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFFcEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1ELEVBQUUsQ0FDdEJFLFVBQVUsQ0FBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzFCTSxTQUFTLENBQUM7UUFDVDtZQUFFQyxNQUFNLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRVIsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7UUFDeEM7WUFBRVMsT0FBTyxFQUFFO2dCQUFFQyxJQUFJLEVBQUVDLFFBQVEsQ0FBQ1gsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FBRTtLQUVoRCxDQUFDLENBQ0RZLE9BQU8sRUFBRTtJQUNaYixHQUFHLENBQUNjLElBQUksQ0FBQ1QsUUFBUSxDQUFDLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvZ2V0UXVlc3Rpb24vW1suLi5nZXRRdWVzdGlvbl1dLmpzP2Q0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL21pZGRsZXdhcmUvY29ubmVjdERiXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBnZXRRdWVzdGlvbiB9ID0gcmVxLnF1ZXJ5O1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJRdWVzdGlvbkJhbmtcIik7XHJcblxyXG4gIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKGdldFF1ZXN0aW9uWzBdKVxyXG4gICAgLmFnZ3JlZ2F0ZShbXHJcbiAgICAgIHsgJG1hdGNoOiB7IHRlc3RUeXBlOiBnZXRRdWVzdGlvblsxXSB9IH0sXHJcbiAgICAgIHsgJHNhbXBsZTogeyBzaXplOiBwYXJzZUludChnZXRRdWVzdGlvblsyXSkgfSB9LFxyXG4gICAgICAvLyB7ICRwcm9qZWN0OiB7IGFnZTogMSwgc3RhdHVzOiAxLCBuYW1lOiAxIH0gfSxcclxuICAgIF0pXHJcbiAgICAudG9BcnJheSgpO1xyXG4gIHJlcy5qc29uKGFsbFBvc3RzKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJnZXRRdWVzdGlvbiIsInF1ZXJ5IiwiY2xpZW50IiwiZGIiLCJhbGxQb3N0cyIsImNvbGxlY3Rpb24iLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCJ0ZXN0VHlwZSIsIiRzYW1wbGUiLCJzaXplIiwicGFyc2VJbnQiLCJ0b0FycmF5IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getQuestion/[[...getQuestion]].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getQuestion/[[...getQuestion]].js"));
module.exports = __webpack_exports__;

})();