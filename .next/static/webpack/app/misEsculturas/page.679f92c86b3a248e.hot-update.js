"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/misEsculturas/page",{

/***/ "(app-pages-browser)/./src/app/lib/tokens.js":
/*!*******************************!*\
  !*** ./src/app/lib/tokens.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToken: function() { return /* binding */ createToken; },\n/* harmony export */   getToken: function() { return /* binding */ getToken; },\n/* harmony export */   updateToken: function() { return /* binding */ updateToken; }\n/* harmony export */ });\n/* harmony import */ var _strapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strapi */ \"(app-pages-browser)/./src/app/lib/strapi.js\");\n\nconst API_URL = \"http://localhost:1337\";\nconst API_TOKEN = \"7fe3baf407058e5ddd24479882d4ae2bc09388e423f9a5cbcdcec1af9a1f5f50e92a937b41807eeb89a135c44aaf34dc0619c6cf6192a4e11c65c0144b259cd50633bde97fb52e6c0ae9b9e3bb93f66b092aff9bbdde7bfab1ac47455292f60d9148d5738cd57ff607909758ecc5288773bfeebbfe312eb389658b4e141b04a8\";\nasync function createToken(token, escultura) {\n    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();\n    const data = {\n        token: token,\n        expiresAt: expiresAt,\n        escultura: escultura\n    };\n    const response = await fetch(\"\".concat(API_URL, \"/api/tokens\"), {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Authorization\": \"Bearer \".concat(API_TOKEN)\n        },\n        body: JSON.stringify({\n            data: data\n        })\n    });\n    return response.json();\n}\nasync function getToken(escultura) {\n    const response = await (0,_strapi__WEBPACK_IMPORTED_MODULE_0__.query)(\"tokens?filters[escultura][$eq]=\".concat(escultura));\n    if (response.data.length > 0) {\n        console.log(response.data);\n        return response.data[0].token;\n    }\n}\nasync function updateToken(token, nuevoToken) {\n    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();\n    const data = {\n        token: nuevoToken,\n        expiresAt: expiresAt\n    };\n    const response = await fetch(\"\".concat(API_URL, \"/api/tokens/\").concat(token), {\n        method: \"PUT\",\n        headers: {\n            \"Authorization\": \"Bearer \".concat(API_TOKEN)\n        },\n        body: JSON.stringify({\n            data: data\n        })\n    });\n    return response.json();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGliL3Rva2Vucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBQ2pDLE1BQU1DLFVBQVVDLHVCQUErQjtBQUMvQyxNQUFNRyxZQUFZSCxrUUFBaUM7QUFFNUMsZUFBZUssWUFBWUMsS0FBSyxFQUFFQyxTQUFTO0lBQzlDLE1BQU1DLFlBQVksSUFBSUMsS0FBS0EsS0FBS0MsR0FBRyxLQUFLLElBQUksS0FBSyxNQUFNQyxXQUFXO0lBQ2xFLE1BQU1DLE9BQU87UUFDVE4sT0FBT0E7UUFDUEUsV0FBV0E7UUFDWEQsV0FBV0E7SUFDZjtJQUVBLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSxHQUFXLE9BQVJmLFNBQVEsZ0JBQWM7UUFDbERnQixRQUFRO1FBQ1JDLFNBQVM7WUFDTCxnQkFBZ0I7WUFDaEIsaUJBQWlCLFVBQW9CLE9BQVZiO1FBQy9CO1FBQ0FjLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNqQlAsTUFBTUE7UUFDVjtJQUNKO0lBRUEsT0FBT0MsU0FBU08sSUFBSTtBQUN4QjtBQUVPLGVBQWVDLFNBQVNkLFNBQVM7SUFDcEMsTUFBTU0sV0FBVyxNQUFNZiw4Q0FBS0EsQ0FBQyxrQ0FBNEMsT0FBVlM7SUFDL0QsSUFBSU0sU0FBU0QsSUFBSSxDQUFDVSxNQUFNLEdBQUcsR0FBRTtRQUN6QkMsUUFBUUMsR0FBRyxDQUFDWCxTQUFTRCxJQUFJO1FBQ3pCLE9BQU9DLFNBQVNELElBQUksQ0FBQyxFQUFFLENBQUNOLEtBQUs7SUFDakM7QUFDSjtBQUVPLGVBQWVtQixZQUFZbkIsS0FBSyxFQUFFb0IsVUFBVTtJQUMvQyxNQUFNbEIsWUFBWSxJQUFJQyxLQUFLQSxLQUFLQyxHQUFHLEtBQUssSUFBSSxLQUFLLE1BQU1DLFdBQVc7SUFDbEUsTUFBTUMsT0FBTztRQUNUTixPQUFPb0I7UUFDUGxCLFdBQVdBO0lBQ2Y7SUFDQSxNQUFNSyxXQUFXLE1BQU1DLE1BQU0sR0FBeUJSLE9BQXRCUCxTQUFRLGdCQUFvQixPQUFOTyxRQUFTO1FBQzNEUyxRQUFRO1FBQ1JDLFNBQVM7WUFDTCxpQkFBaUIsVUFBb0IsT0FBVmI7UUFDL0I7UUFDQWMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCUCxNQUFNQTtRQUNWO0lBQ0o7SUFFQSxPQUFPQyxTQUFTTyxJQUFJO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGliL3Rva2Vucy5qcz81NDU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcIi4vc3RyYXBpXCI7XHJcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5jb25zdCBBUElfVE9LRU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVE9LRU47XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9rZW4odG9rZW4sIGVzY3VsdHVyYSl7XHJcbiAgICBjb25zdCBleHBpcmVzQXQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNSAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgIGV4cGlyZXNBdDogZXhwaXJlc0F0LFxyXG4gICAgICAgIGVzY3VsdHVyYTogZXNjdWx0dXJhLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL3Rva2Vuc2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke0FQSV9UT0tFTn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUb2tlbihlc2N1bHR1cmEpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeShgdG9rZW5zP2ZpbHRlcnNbZXNjdWx0dXJhXVskZXFdPSR7ZXNjdWx0dXJhfWApO1xyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFbMF0udG9rZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUb2tlbih0b2tlbiwgbnVldm9Ub2tlbil7XHJcbiAgICBjb25zdCBleHBpcmVzQXQgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgNSAqIDYwICogMTAwMCkudG9JU09TdHJpbmcoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgdG9rZW46IG51ZXZvVG9rZW4sXHJcbiAgICAgICAgZXhwaXJlc0F0OiBleHBpcmVzQXRcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL3Rva2Vucy8ke3Rva2VufWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7QVBJX1RPS0VOfWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJxdWVyeSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIkFQSV9UT0tFTiIsIk5FWFRfUFVCTElDX0FQSV9UT0tFTiIsImNyZWF0ZVRva2VuIiwidG9rZW4iLCJlc2N1bHR1cmEiLCJleHBpcmVzQXQiLCJEYXRlIiwibm93IiwidG9JU09TdHJpbmciLCJkYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJnZXRUb2tlbiIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVUb2tlbiIsIm51ZXZvVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lib/tokens.js\n"));

/***/ })

});