"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/eventos/[slug]/page",{

/***/ "(app-pages-browser)/./src/app/ui/GalleryComponents/plantillaEvento.jsx":
/*!**********************************************************!*\
  !*** ./src/app/ui/GalleryComponents/plantillaEvento.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction Page(param) {\n    let { nombre, lugar, fecha_hora, descripcion, foto, tematica, esculturas } = param;\n    const fecha = fecha_hora.split(\"T\");\n    const hora = fecha[1].split(\":\");\n    console.log(esculturas);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"evento\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: nombre\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: foto,\n                alt: nombre\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Lugar:\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    lugar\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Fecha y hora:\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    fecha[0],\n                    \" \",\n                    hora[0],\n                    \":\",\n                    hora[1],\n                    \"hs\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Descripci\\xf3n:\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    descripcion\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Tem\\xe1tica:\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    tematica\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Esculturas relacionadas\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: esculturas.map((escultura)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: escultura.imagen,\n                                        alt: escultura.nombre\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: escultura.nombre\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, escultura.documentId, true, {\n                                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\GalleryComponents\\\\plantillaEvento.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvR2FsbGVyeUNvbXBvbmVudHMvcGxhbnRpbGxhRXZlbnRvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZSxTQUFTQSxLQUFLLEtBUTVCO1FBUjRCLEVBQzNCQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1gsR0FSNEI7SUFTM0IsTUFBTUMsUUFBUUwsV0FBV00sS0FBSyxDQUFDO0lBQy9CLE1BQU1DLE9BQU9GLEtBQUssQ0FBQyxFQUFFLENBQUNDLEtBQUssQ0FBQztJQUU1QkUsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUlkOzs7Ozs7MEJBQ0wsOERBQUNlO2dCQUFJQyxLQUFLWjtnQkFBTWEsS0FBS2pCOzs7Ozs7MEJBQ3JCLDhEQUFDa0I7O2tDQUNDLDhEQUFDQztrQ0FBTzs7Ozs7O29CQUFlO29CQUFFbEI7Ozs7Ozs7MEJBRTNCLDhEQUFDaUI7O2tDQUNDLDhEQUFDQztrQ0FBTzs7Ozs7O29CQUFzQjtvQkFBRVosS0FBSyxDQUFDLEVBQUU7b0JBQUM7b0JBQUVFLElBQUksQ0FBQyxFQUFFO29CQUFDO29CQUFFQSxJQUFJLENBQUMsRUFBRTtvQkFBQzs7Ozs7OzswQkFFL0QsOERBQUNTOztrQ0FDQyw4REFBQ0M7a0NBQU87Ozs7OztvQkFBcUI7b0JBQUVoQjs7Ozs7OzswQkFFakMsOERBQUNlOztrQ0FDQyw4REFBQ0M7a0NBQU87Ozs7OztvQkFBa0I7b0JBQUVkOzs7Ozs7OzBCQUU5Qiw4REFBQ087O2tDQUNDLDhEQUFDUTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQztrQ0FDRWYsV0FBV2dCLEdBQUcsQ0FBQyxDQUFDQywwQkFDZiw4REFBQ0M7O2tEQUNDLDhEQUFDVDt3Q0FBSUMsS0FBS08sVUFBVUUsTUFBTTt3Q0FBRVIsS0FBS00sVUFBVXZCLE1BQU07Ozs7OztrREFDakQsOERBQUNrQjtrREFBR0ssVUFBVXZCLE1BQU07Ozs7Ozs7K0JBRmJ1QixVQUFVRyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3pDO0tBM0N3QjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdWkvR2FsbGVyeUNvbXBvbmVudHMvcGxhbnRpbGxhRXZlbnRvLmpzeD84NDRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2Uoe1xyXG4gIG5vbWJyZSxcclxuICBsdWdhcixcclxuICBmZWNoYV9ob3JhLFxyXG4gIGRlc2NyaXBjaW9uLFxyXG4gIGZvdG8sXHJcbiAgdGVtYXRpY2EsXHJcbiAgZXNjdWx0dXJhc1xyXG59KSB7XHJcbiAgY29uc3QgZmVjaGEgPSBmZWNoYV9ob3JhLnNwbGl0KFwiVFwiKTtcclxuICBjb25zdCBob3JhID0gZmVjaGFbMV0uc3BsaXQoXCI6XCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhlc2N1bHR1cmFzKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJldmVudG9cIj5cclxuICAgICAgPGgyPntub21icmV9PC9oMj5cclxuICAgICAgPGltZyBzcmM9e2ZvdG99IGFsdD17bm9tYnJlfSAvPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Ryb25nPkx1Z2FyOjwvc3Ryb25nPiB7bHVnYXJ9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHN0cm9uZz5GZWNoYSB5IGhvcmE6PC9zdHJvbmc+IHtmZWNoYVswXX0ge2hvcmFbMF19Ontob3JhWzFdfWhzXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHN0cm9uZz5EZXNjcmlwY2nDs246PC9zdHJvbmc+IHtkZXNjcmlwY2lvbn1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Ryb25nPlRlbcOhdGljYTo8L3N0cm9uZz4ge3RlbWF0aWNhfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPkVzY3VsdHVyYXMgcmVsYWNpb25hZGFzPC9oMz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7ZXNjdWx0dXJhcy5tYXAoKGVzY3VsdHVyYSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtlc2N1bHR1cmEuZG9jdW1lbnRJZH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VzY3VsdHVyYS5pbWFnZW59IGFsdD17ZXNjdWx0dXJhLm5vbWJyZX0gLz5cclxuICAgICAgICAgICAgICA8cD57ZXNjdWx0dXJhLm5vbWJyZX08L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2UiLCJub21icmUiLCJsdWdhciIsImZlY2hhX2hvcmEiLCJkZXNjcmlwY2lvbiIsImZvdG8iLCJ0ZW1hdGljYSIsImVzY3VsdHVyYXMiLCJmZWNoYSIsInNwbGl0IiwiaG9yYSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImltZyIsInNyYyIsImFsdCIsInAiLCJzdHJvbmciLCJoMyIsInVsIiwibWFwIiwiZXNjdWx0dXJhIiwibGkiLCJpbWFnZW4iLCJkb2N1bWVudElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/GalleryComponents/plantillaEvento.jsx\n"));

/***/ })

});