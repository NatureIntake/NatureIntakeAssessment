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
exports.id = "pages/api/getForm/[[...getForm]]";
exports.ids = ["pages/api/getForm/[[...getForm]]"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGO_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbWlkZGxld2FyZS9jb25uZWN0RGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7QUFDakMsTUFBTUMsT0FBTyxHQUFHO0lBQ2RDLGtCQUFrQixFQUFFLElBQUk7SUFDeEJDLGVBQWUsRUFBRSxJQUFJO0NBQ3RCO0FBRUQsSUFBSUMsTUFBTTtBQUNWLElBQUlDLGFBQWE7QUFFakIsSUFBSVAsSUFBc0MsRUFBRTtJQUMxQyxJQUFJLENBQUNRLE1BQU0sQ0FBQ0MsbUJBQW1CLEVBQUU7UUFDL0JILE1BQU0sR0FBRyxJQUFJUixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDSyxNQUFNLENBQUNDLG1CQUFtQixHQUFHSCxNQUFNLENBQUNJLE9BQU8sRUFBRSxDQUFDO0tBQy9DO0lBQ0RILGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQztDQUM1QyxNQUFNLEVBR047QUFFRCxpRUFBZUYsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL21pZGRsZXdhcmUvY29ubmVjdERiLmpzP2FlN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbn07XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcclxufSBlbHNlIHtcclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/middleware/connectDb.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/getForm/[[...getForm]].js":
/*!*************************************************!*\
  !*** ./src/pages/api/getForm/[[...getForm]].js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _middleware_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../middleware/connectDb */ \"(api)/./src/middleware/connectDb.js\");\n\nasync function handler(req, res) {\n    const { getForm  } = req.query;\n    const client = await _middleware_connectDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = client.db(\"Forms\");\n    const isFind = await db.collection(\"forms\").aggregate([\n        {\n            $match: {\n                slug: getForm[0]\n            }\n        },\n        {\n            $project: {\n                _id: 0,\n                slug: 0\n            }\n        }, \n    ]).toArray();\n    res.json(isFind);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldEZvcm0vW1suLi5nZXRGb3JtXV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEQ7QUFFM0MsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDN0IsTUFBTUMsTUFBTSxHQUFHLE1BQU1OLDZEQUFhO0lBQ2xDLE1BQU1PLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFFLENBQUMsT0FBTyxDQUFDO0lBRTdCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQ3BCRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQ25CQyxTQUFTLENBQUM7UUFDVDtZQUFFQyxNQUFNLEVBQUU7Z0JBQUVDLElBQUksRUFBRVIsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUFFO1NBQUU7UUFDaEM7WUFBRVMsUUFBUSxFQUFFO2dCQUFFQyxHQUFHLEVBQUUsQ0FBQztnQkFBRUYsSUFBSSxFQUFFLENBQUM7YUFBRTtTQUFFO0tBQ2xDLENBQUMsQ0FDREcsT0FBTyxFQUFFO0lBRVpaLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDUixNQUFNLENBQUMsQ0FBQztDQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvZ2V0Rm9ybS9bWy4uLmdldEZvcm1dXS5qcz8xNjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlL2Nvbm5lY3REYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgZ2V0Rm9ybSB9ID0gcmVxLnF1ZXJ5O1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJGb3Jtc1wiKTtcclxuXHJcbiAgY29uc3QgaXNGaW5kID0gYXdhaXQgZGJcclxuICAgIC5jb2xsZWN0aW9uKFwiZm9ybXNcIilcclxuICAgIC5hZ2dyZWdhdGUoW1xyXG4gICAgICB7ICRtYXRjaDogeyBzbHVnOiBnZXRGb3JtWzBdIH0gfSxcclxuICAgICAgeyAkcHJvamVjdDogeyBfaWQ6IDAsIHNsdWc6IDAgfSB9LFxyXG4gICAgXSlcclxuICAgIC50b0FycmF5KCk7XHJcblxyXG4gIHJlcy5qc29uKGlzRmluZCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZ2V0Rm9ybSIsInF1ZXJ5IiwiY2xpZW50IiwiZGIiLCJpc0ZpbmQiLCJjb2xsZWN0aW9uIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwic2x1ZyIsIiRwcm9qZWN0IiwiX2lkIiwidG9BcnJheSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getForm/[[...getForm]].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getForm/[[...getForm]].js"));
module.exports = __webpack_exports__;

})();