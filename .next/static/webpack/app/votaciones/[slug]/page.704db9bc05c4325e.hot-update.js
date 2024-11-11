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

/***/ "(app-pages-browser)/./src/app/votaciones/[slug]/page.jsx":
/*!********************************************!*\
  !*** ./src/app/votaciones/[slug]/page.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _lib_getElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/getElement */ \"(app-pages-browser)/./src/app/lib/getElement.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// function to show the documentId of escultura to vote\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const [escultura, setEscultura] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getSculp = async ()=>{\n            const escult = await (0,_lib_getElement__WEBPACK_IMPORTED_MODULE_2__.getEscultura)(pathname.split(\"/\")[2]);\n            setEscultura(escult); // Guardamos el resultado en el estado\n        };\n        getSculp();\n    }, [\n        pathname\n    ]);\n    console.log(escultura);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: escultura.nombre\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Escultor: \",\n                    escultura.escultor\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"puntaje\",\n                children: \"Puntaje: \"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                id: \"puntaje\",\n                name: \"puntaje\",\n                min: \"1\",\n                max: \"5\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Votar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: escultura.imagen_despues,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"Du7BIT9ehsPSJotIKsV/WM6Z3kk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdm90YWNpb25lcy9bc2x1Z10vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ3VCO0FBQ1A7QUFDRDtBQUU1Qyx1REFBdUQ7QUFDeEMsU0FBU0s7O0lBQ3BCLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU0sV0FBVztZQUNmLE1BQU1DLFNBQVMsTUFBTVQsNkRBQVlBLENBQUNLLFNBQVNLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4REgsYUFBYUUsU0FBUyxzQ0FBc0M7UUFDOUQ7UUFFQUQ7SUFDRixHQUFHO1FBQUNIO0tBQVM7SUFFZk0sUUFBUUMsR0FBRyxDQUFDTjtJQUVaLHFCQUNJLDhEQUFDTzs7MEJBQ0csOERBQUNDOzBCQUFJUixVQUFVUyxNQUFNOzs7Ozs7MEJBQ3JCLDhEQUFDQzs7b0JBQUU7b0JBQVdWLFVBQVVXLFFBQVE7Ozs7Ozs7MEJBQ2hDLDhEQUFDQztnQkFBTUMsU0FBUTswQkFBVTs7Ozs7OzBCQUN6Qiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNDLElBQUc7Z0JBQVVDLE1BQUs7Z0JBQVVDLEtBQUk7Z0JBQUlDLEtBQUk7Ozs7OzswQkFDN0QsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7MEJBQU87Ozs7OzswQkFDUiw4REFBQ0M7Z0JBQUlDLEtBQUt2QixVQUFVd0IsY0FBYztnQkFBRUMsS0FBSTs7Ozs7Ozs7Ozs7O0FBR3BEO0dBMUJ3QjNCOztRQUNISCx3REFBV0E7OztLQURSRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3ZvdGFjaW9uZXMvW3NsdWddL3BhZ2UuanN4PzFmOTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgZ2V0RXNjdWx0dXJhIH0gZnJvbSBcIi4uLy4uL2xpYi9nZXRFbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gZnVuY3Rpb24gdG8gc2hvdyB0aGUgZG9jdW1lbnRJZCBvZiBlc2N1bHR1cmEgdG8gdm90ZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gICAgY29uc3QgW2VzY3VsdHVyYSwgc2V0RXNjdWx0dXJhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldFNjdWxwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZXNjdWx0ID0gYXdhaXQgZ2V0RXNjdWx0dXJhKHBhdGhuYW1lLnNwbGl0KCcvJylbMl0pO1xyXG4gICAgICAgICAgc2V0RXNjdWx0dXJhKGVzY3VsdCk7IC8vIEd1YXJkYW1vcyBlbCByZXN1bHRhZG8gZW4gZWwgZXN0YWRvXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGdldFNjdWxwKCk7XHJcbiAgICAgIH0sIFtwYXRobmFtZV0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGVzY3VsdHVyYSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+e2VzY3VsdHVyYS5ub21icmV9PC9oMT5cclxuICAgICAgICAgICAgPHA+RXNjdWx0b3I6IHtlc2N1bHR1cmEuZXNjdWx0b3J9PC9wPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInB1bnRhamVcIj5QdW50YWplOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicHVudGFqZVwiIG5hbWU9XCJwdW50YWplXCIgbWluPVwiMVwiIG1heD1cIjVcIiAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbj5Wb3RhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17ZXNjdWx0dXJhLmltYWdlbl9kZXNwdWVzfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiZ2V0RXNjdWx0dXJhIiwidXNlUGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJwYXRobmFtZSIsImVzY3VsdHVyYSIsInNldEVzY3VsdHVyYSIsImdldFNjdWxwIiwiZXNjdWx0Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJub21icmUiLCJwIiwiZXNjdWx0b3IiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJtaW4iLCJtYXgiLCJiciIsImJ1dHRvbiIsImltZyIsInNyYyIsImltYWdlbl9kZXNwdWVzIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/votaciones/[slug]/page.jsx\n"));

/***/ })

});