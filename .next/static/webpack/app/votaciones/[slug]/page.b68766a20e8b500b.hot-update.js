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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/link.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/votaciones/[slug]/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_getElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/getElement */ \"(app-pages-browser)/./src/app/lib/getElement.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// function to show the documentId of escultura to vote\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const [escultura, setEscultura] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const jwt = localStorage.getItem(\"jwt\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleVote = ()=>{\n        if (!jwt) {\n            router.push(\"/login\");\n        } else {\n            // Lógica para emitir la votación\n            router.push(\"/votaciones/exito\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const getSculp = async ()=>{\n            const escult = await (0,_lib_getElement__WEBPACK_IMPORTED_MODULE_3__.getEscultura)(pathname.split(\"/\")[2]);\n            setEscultura(escult); // Guardamos el resultado en el estado\n        };\n        getSculp();\n    }, [\n        pathname\n    ]);\n    console.log(escultura);\n    if (!escultura) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n            lineNumber: 36,\n            columnNumber: 16\n        }, this); // Muestra un mensaje de carga si no hay datos\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().votacionCard),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/eventos\",\n                    children: \"Volver\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: escultura.nombre\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().votacionCardAviso),\n                    children: jwt ? \"\" : \"Debe estar registrado para emitir una votacion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().votacionCardDescrip),\n                    children: escultura.descripcion == null ? \"\" : escultura.descripcion\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Escultor: \",\n                        escultura.escultor\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"puntaje\",\n                    children: \"Puntaje: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"puntaje\",\n                    name: \"puntaje\",\n                    min: \"1\",\n                    max: \"5\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleVote,\n                    children: \"Votar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: escultura.imagen_despues,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Page, \"5qG0mQ6ZKUxkujefpsNC0Vjk3Fk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdm90YWNpb25lcy9bc2x1Z10vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVTtBQUNhO0FBQ1A7QUFDRDtBQUNBO0FBRTVDLHVEQUF1RDtBQUN4QyxTQUFTTzs7SUFDcEIsTUFBTUMsV0FBV0wsNERBQVdBO0lBQzVCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNTSxNQUFNQyxhQUFhQyxPQUFPLENBQUM7SUFDakMsTUFBTUMsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU1TLGFBQWE7UUFDZixJQUFJLENBQUNKLEtBQUs7WUFDTkcsT0FBT0UsSUFBSSxDQUFDO1FBQ2hCLE9BQU87WUFDSCxpQ0FBaUM7WUFDakNGLE9BQU9FLElBQUksQ0FBQztRQUNoQjtJQUNKO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsV0FBVztZQUNmLE1BQU1DLFNBQVMsTUFBTWhCLDZEQUFZQSxDQUFDTSxTQUFTVyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeERULGFBQWFRLFNBQVMsc0NBQXNDO1FBQzlEO1FBRUFEO0lBQ0YsR0FBRztRQUFDVDtLQUFTO0lBRWZZLFFBQVFDLEdBQUcsQ0FBQ1o7SUFDWixJQUFJLENBQUNBLFdBQVc7UUFDWixxQkFBTyw4REFBQ2E7c0JBQUU7Ozs7O2tCQUFpQiw4Q0FBOEM7SUFDN0UsT0FBTztRQUNILHFCQUNJLDhEQUFDQztZQUFJQyxXQUFXdkIsc0VBQW1COzs4QkFDL0IsOERBQUNELGlEQUFJQTtvQkFBQzBCLE1BQUs7OEJBQVc7Ozs7Ozs4QkFDdEIsOERBQUNDOzhCQUFJbEIsVUFBVW1CLE1BQU07Ozs7Ozs4QkFDckIsOERBQUNOO29CQUFFRSxXQUFXdkIsMkVBQXdCOzhCQUFHVSxNQUFLLEtBQUc7Ozs7Ozs4QkFDakQsOERBQUNXO29CQUFFRSxXQUFXdkIsNkVBQTBCOzhCQUFHUSxVQUFVc0IsV0FBVyxJQUFJLE9BQU0sS0FBSXRCLFVBQVVzQixXQUFXOzs7Ozs7OEJBQ25HLDhEQUFDVDs7d0JBQUU7d0JBQVdiLFVBQVV1QixRQUFROzs7Ozs7OzhCQUNoQyw4REFBQ0M7b0JBQU1DLFNBQVE7OEJBQVU7Ozs7Ozs4QkFDekIsOERBQUNDO29CQUFNQyxNQUFLO29CQUFTQyxJQUFHO29CQUFVQyxNQUFLO29CQUFVQyxLQUFJO29CQUFJQyxLQUFJOzs7Ozs7OEJBQzdELDhEQUFDQztvQkFBT0MsU0FBUzNCOzhCQUFZOzs7Ozs7OEJBQzdCLDhEQUFDNEI7Ozs7OzhCQUNELDhEQUFDQztvQkFBSUMsS0FBS3BDLFVBQVVxQyxjQUFjO29CQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7SUFHcEQ7QUFDSjtHQTNDd0J4Qzs7UUFDSEosd0RBQVdBO1FBR2JHLHNEQUFTQTs7O0tBSkpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdm90YWNpb25lcy9bc2x1Z10vcGFnZS5qc3g/MWY5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRFc2N1bHR1cmEgfSBmcm9tIFwiLi4vLi4vbGliL2dldEVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG4vLyBmdW5jdGlvbiB0byBzaG93IHRoZSBkb2N1bWVudElkIG9mIGVzY3VsdHVyYSB0byB2b3RlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgICBjb25zdCBbZXNjdWx0dXJhLCBzZXRFc2N1bHR1cmFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBqd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0Jyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVWb3RlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghand0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBMw7NnaWNhIHBhcmEgZW1pdGlyIGxhIHZvdGFjacOzblxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3ZvdGFjaW9uZXMvZXhpdG8nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldFNjdWxwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZXNjdWx0ID0gYXdhaXQgZ2V0RXNjdWx0dXJhKHBhdGhuYW1lLnNwbGl0KCcvJylbMl0pO1xyXG4gICAgICAgICAgc2V0RXNjdWx0dXJhKGVzY3VsdCk7IC8vIEd1YXJkYW1vcyBlbCByZXN1bHRhZG8gZW4gZWwgZXN0YWRvXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGdldFNjdWxwKCk7XHJcbiAgICAgIH0sIFtwYXRobmFtZV0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGVzY3VsdHVyYSk7XHJcbiAgICBpZiAoIWVzY3VsdHVyYSkge1xyXG4gICAgICAgIHJldHVybiA8cD5DYXJnYW5kby4uLjwvcD47IC8vIE11ZXN0cmEgdW4gbWVuc2FqZSBkZSBjYXJnYSBzaSBubyBoYXkgZGF0b3NcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b3RhY2lvbkNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ldmVudG9zXCI+Vm9sdmVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGgxPntlc2N1bHR1cmEubm9tYnJlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy52b3RhY2lvbkNhcmRBdmlzb30+e2p3dD8gJyc6J0RlYmUgZXN0YXIgcmVnaXN0cmFkbyBwYXJhIGVtaXRpciB1bmEgdm90YWNpb24nfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnZvdGFjaW9uQ2FyZERlc2NyaXB9Pntlc2N1bHR1cmEuZGVzY3JpcGNpb24gPT0gbnVsbD8gJyc6IGVzY3VsdHVyYS5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5Fc2N1bHRvcjoge2VzY3VsdHVyYS5lc2N1bHRvcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInB1bnRhamVcIj5QdW50YWplOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInB1bnRhamVcIiBuYW1lPVwicHVudGFqZVwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlVm90ZX0+Vm90YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2VzY3VsdHVyYS5pbWFnZW5fZGVzcHVlc30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwiZ2V0RXNjdWx0dXJhIiwidXNlUGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlBhZ2UiLCJwYXRobmFtZSIsImVzY3VsdHVyYSIsInNldEVzY3VsdHVyYSIsImp3dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3V0ZXIiLCJoYW5kbGVWb3RlIiwicHVzaCIsImdldFNjdWxwIiwiZXNjdWx0Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwicCIsImRpdiIsImNsYXNzTmFtZSIsInZvdGFjaW9uQ2FyZCIsImhyZWYiLCJoMSIsIm5vbWJyZSIsInZvdGFjaW9uQ2FyZEF2aXNvIiwidm90YWNpb25DYXJkRGVzY3JpcCIsImRlc2NyaXBjaW9uIiwiZXNjdWx0b3IiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJtaW4iLCJtYXgiLCJidXR0b24iLCJvbkNsaWNrIiwiYnIiLCJpbWciLCJzcmMiLCJpbWFnZW5fZGVzcHVlcyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/votaciones/[slug]/page.jsx\n"));

/***/ })

});