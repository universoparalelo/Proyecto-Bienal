"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/votaciones/[slug]/page",{

/***/ "(app-pages-browser)/./src/app/lib/postVote.js":
/*!*********************************!*\
  !*** ./src/app/lib/postVote.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postVote: function() { return /* binding */ postVote; }\n/* harmony export */ });\n/* harmony import */ var _strapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strapi */ \"(app-pages-browser)/./src/app/lib/strapi.js\");\n\nconst API_URL = \"http://localhost:1337\";\nconst API_TOKEN = \"7fe3baf407058e5ddd24479882d4ae2bc09388e423f9a5cbcdcec1af9a1f5f50e92a937b41807eeb89a135c44aaf34dc0619c6cf6192a4e11c65c0144b259cd50633bde97fb52e6c0ae9b9e3bb93f66b092aff9bbdde7bfab1ac47455292f60d9148d5738cd57ff607909758ecc5288773bfeebbfe312eb389658b4e141b04a8\";\nasync function postVote(data) {\n    const eventoId = await getEventoFromEscultura(data.escultura);\n    data.evento = eventoId;\n    await crearCorreo(data.email);\n    console.log(data);\n    const response = await fetch(\"\".concat(API_URL, \"/api/votos\"), {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Bearer \".concat(API_TOKEN)\n        },\n        body: JSON.stringify(data)\n    });\n    const datos = await response.json();\n    return datos;\n}\nasync function getEventoFromEscultura(id) {\n    const response = await (0,_strapi__WEBPACK_IMPORTED_MODULE_0__.query)(\"esculturas/\".concat(id, \"?populate=evento\"));\n    const dato = response.data.evento.documentId;\n    return dato;\n}\nasync function crearCorreo(email) {\n    const data = {\n        correo: email\n    };\n    const response = await fetch(\"\".concat(API_URL, \"/api/emails\"), {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": \"Bearer \".concat(API_TOKEN),\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    });\n    const datos = await response.json();\n    if (datos) {\n        console.log(\"Correo creado\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGliL3Bvc3RWb3RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDO0FBQ2pDLE1BQU1DLFVBQVVDLHVCQUErQjtBQUMvQyxNQUFNRyxZQUFZSCxrUUFBaUM7QUFFNUMsZUFBZUssU0FBU0MsSUFBSTtJQUMvQixNQUFNQyxXQUFXLE1BQU1DLHVCQUF1QkYsS0FBS0csU0FBUztJQUM1REgsS0FBS0ksTUFBTSxHQUFHSDtJQUNkLE1BQU1JLFlBQVlMLEtBQUtNLEtBQUs7SUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ1I7SUFDWixNQUFNUyxXQUFXLE1BQU1DLE1BQU0sR0FBVyxPQUFSakIsU0FBUSxlQUFhO1FBQ3JEa0IsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCQyxlQUFlLFVBQW9CLE9BQVZoQjtRQUMzQjtRQUNBaUIsTUFBTUMsS0FBS0MsU0FBUyxDQUFDaEI7SUFDdkI7SUFFQSxNQUFNaUIsUUFBUSxNQUFNUixTQUFTUyxJQUFJO0lBRWpDLE9BQU9EO0FBQ1Q7QUFFQSxlQUFlZix1QkFBdUJpQixFQUFFO0lBQ3BDLE1BQU1WLFdBQVcsTUFBTWpCLDhDQUFLQSxDQUFDLGNBQWlCLE9BQUgyQixJQUFHO0lBRTlDLE1BQU1DLE9BQU9YLFNBQVNULElBQUksQ0FBQ0ksTUFBTSxDQUFDaUIsVUFBVTtJQUM1QyxPQUFPRDtBQUNYO0FBRUEsZUFBZWYsWUFBWUMsS0FBSztJQUM5QixNQUFNTixPQUFPO1FBQ1hzQixRQUFRaEI7SUFDVjtJQUNBLE1BQU1HLFdBQVcsTUFBTUMsTUFBTSxHQUFXLE9BQVJqQixTQUFRLGdCQUFjO1FBQ3BEa0IsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsaUJBQWlCLFVBQW9CLE9BQVZmO1lBQzNCLGdCQUFnQjtRQUNsQjtRQUNBaUIsTUFBTUMsS0FBS0MsU0FBUyxDQUFDaEI7SUFDdkI7SUFFQSxNQUFNaUIsUUFBUSxNQUFNUixTQUFTUyxJQUFJO0lBQ2pDLElBQUlELE9BQU07UUFDUlYsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xpYi9wb3N0Vm90ZS5qcz9hMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcIi4vc3RyYXBpXCI7XHJcbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5jb25zdCBBUElfVE9LRU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVE9LRU47XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdFZvdGUoZGF0YSl7XHJcbiAgICBjb25zdCBldmVudG9JZCA9IGF3YWl0IGdldEV2ZW50b0Zyb21Fc2N1bHR1cmEoZGF0YS5lc2N1bHR1cmEpO1xyXG4gICAgZGF0YS5ldmVudG8gPSBldmVudG9JZDtcclxuICAgIGF3YWl0IGNyZWFyQ29ycmVvKGRhdGEuZW1haWwpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL3ZvdG9zYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBUElfVE9LRU59YCxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0b3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiBkYXRvcztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0RXZlbnRvRnJvbUVzY3VsdHVyYShpZCl7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5KGBlc2N1bHR1cmFzLyR7aWR9P3BvcHVsYXRlPWV2ZW50b2ApO1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRvID0gcmVzcG9uc2UuZGF0YS5ldmVudG8uZG9jdW1lbnRJZDsgICAgXHJcbiAgICByZXR1cm4gZGF0bztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXJDb3JyZW8oZW1haWwpe1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBjb3JyZW86IGVtYWlsXHJcbiAgfVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL2VtYWlsc2AsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7QVBJX1RPS0VOfWAsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYXRvcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAoZGF0b3Mpe1xyXG4gICAgY29uc29sZS5sb2coXCJDb3JyZW8gY3JlYWRvXCIpXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInF1ZXJ5IiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiQVBJX1RPS0VOIiwiTkVYVF9QVUJMSUNfQVBJX1RPS0VOIiwicG9zdFZvdGUiLCJkYXRhIiwiZXZlbnRvSWQiLCJnZXRFdmVudG9Gcm9tRXNjdWx0dXJhIiwiZXNjdWx0dXJhIiwiZXZlbnRvIiwiY3JlYXJDb3JyZW8iLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdG9zIiwianNvbiIsImlkIiwiZGF0byIsImRvY3VtZW50SWQiLCJjb3JyZW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lib/postVote.js\n"));

/***/ })

});