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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/link.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/votaciones/[slug]/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_getElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/getElement */ \"(app-pages-browser)/./src/app/lib/getElement.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.15_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// function to show the documentId of escultura to vote\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const [escultura, setEscultura] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const jwt = localStorage.getItem(\"jwt\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleVote = ()=>{\n        if (!jwt) {\n            router.push(\"/login\");\n        } else {\n            // Lógica para emitir la votación\n            router.push(\"/votaciones/exito\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const getSculp = async ()=>{\n            const escult = await (0,_lib_getElement__WEBPACK_IMPORTED_MODULE_3__.getEscultura)(pathname.split(\"/\")[2]);\n            setEscultura(escult); // Guardamos el resultado en el estado\n        };\n        getSculp();\n    }, [\n        pathname\n    ]);\n    console.log(escultura);\n    if (!escultura) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n            lineNumber: 36,\n            columnNumber: 16\n        }, this); // Muestra un mensaje de carga si no hay datos\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().votacionCard),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().votacionCardVolver),\n                    href: \"/eventos\",\n                    children: \"Volver\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: escultura.nombre\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"red\"\n                    },\n                    children: jwt ? \"\" : \"Debe estar registrado para emitir una votacion\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: escultura.descripcion == null ? \"\" : escultura.descripcion\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Escultor: \",\n                        escultura.escultor\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"puntaje\",\n                    children: \"Puntaje: \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"puntaje\",\n                    name: \"puntaje\",\n                    min: \"1\",\n                    max: \"5\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleVote,\n                    children: \"Votar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: escultura.imagen_despues,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Escritorio\\\\2024\\\\2024-01-TPI\\\\src\\\\app\\\\votaciones\\\\[slug]\\\\page.jsx\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Page, \"5qG0mQ6ZKUxkujefpsNC0Vjk3Fk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdm90YWNpb25lcy9bc2x1Z10vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVTtBQUNhO0FBQ1A7QUFDRDtBQUNBO0FBRTVDLHVEQUF1RDtBQUN4QyxTQUFTTzs7SUFDcEIsTUFBTUMsV0FBV0wsNERBQVdBO0lBQzVCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNTSxNQUFNQyxhQUFhQyxPQUFPLENBQUM7SUFDakMsTUFBTUMsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU1TLGFBQWE7UUFDZixJQUFJLENBQUNKLEtBQUs7WUFDTkcsT0FBT0UsSUFBSSxDQUFDO1FBQ2hCLE9BQU87WUFDSCxpQ0FBaUM7WUFDakNGLE9BQU9FLElBQUksQ0FBQztRQUNoQjtJQUNKO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsV0FBVztZQUNmLE1BQU1DLFNBQVMsTUFBTWhCLDZEQUFZQSxDQUFDTSxTQUFTVyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeERULGFBQWFRLFNBQVMsc0NBQXNDO1FBQzlEO1FBRUFEO0lBQ0YsR0FBRztRQUFDVDtLQUFTO0lBRWZZLFFBQVFDLEdBQUcsQ0FBQ1o7SUFDWixJQUFJLENBQUNBLFdBQVc7UUFDWixxQkFBTyw4REFBQ2E7c0JBQUU7Ozs7O2tCQUFpQiw4Q0FBOEM7SUFDN0UsT0FBTztRQUNILHFCQUNJLDhEQUFDQztZQUFJQyxXQUFXdkIsc0VBQW1COzs4QkFDL0IsOERBQUNELGlEQUFJQTtvQkFBQ3dCLFdBQVd2Qiw0RUFBeUI7b0JBQUUwQixNQUFLOzhCQUFXOzs7Ozs7OEJBQzVELDhEQUFDQzs4QkFBSW5CLFVBQVVvQixNQUFNOzs7Ozs7OEJBQ3JCLDhEQUFDUDtvQkFBRVEsT0FBTzt3QkFBRUMsT0FBTztvQkFBTTs4QkFBSXBCLE1BQUssS0FBRzs7Ozs7OzhCQUNyQyw4REFBQ1c7OEJBQUdiLFVBQVV1QixXQUFXLElBQUksT0FBTSxLQUFJdkIsVUFBVXVCLFdBQVc7Ozs7Ozs4QkFDNUQsOERBQUNWOzt3QkFBRTt3QkFBV2IsVUFBVXdCLFFBQVE7Ozs7Ozs7OEJBQ2hDLDhEQUFDQztvQkFBTUMsU0FBUTs4QkFBVTs7Ozs7OzhCQUN6Qiw4REFBQ0M7b0JBQU1DLE1BQUs7b0JBQVNDLElBQUc7b0JBQVVDLE1BQUs7b0JBQVVDLEtBQUk7b0JBQUlDLEtBQUk7Ozs7Ozs4QkFDN0QsOERBQUNDO29CQUFPQyxTQUFTNUI7OEJBQVk7Ozs7Ozs4QkFDN0IsOERBQUM2Qjs7Ozs7OEJBQ0QsOERBQUNDO29CQUFJQyxLQUFLckMsVUFBVXNDLGNBQWM7b0JBQUVDLEtBQUk7Ozs7Ozs7Ozs7OztJQUdwRDtBQUNKO0dBM0N3QnpDOztRQUNISix3REFBV0E7UUFHYkcsc0RBQVNBOzs7S0FKSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC92b3RhY2lvbmVzL1tzbHVnXS9wYWdlLmpzeD8xZjk5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGdldEVzY3VsdHVyYSB9IGZyb20gXCIuLi8uLi9saWIvZ2V0RWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbi8vIGZ1bmN0aW9uIHRvIHNob3cgdGhlIGRvY3VtZW50SWQgb2YgZXNjdWx0dXJhIHRvIHZvdGVcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICAgIGNvbnN0IFtlc2N1bHR1cmEsIHNldEVzY3VsdHVyYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3QnKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVZvdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFqd3QpIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEzDs2dpY2EgcGFyYSBlbWl0aXIgbGEgdm90YWNpw7NuXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvdm90YWNpb25lcy9leGl0bycpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0U2N1bHAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlc2N1bHQgPSBhd2FpdCBnZXRFc2N1bHR1cmEocGF0aG5hbWUuc3BsaXQoJy8nKVsyXSk7XHJcbiAgICAgICAgICBzZXRFc2N1bHR1cmEoZXNjdWx0KTsgLy8gR3VhcmRhbW9zIGVsIHJlc3VsdGFkbyBlbiBlbCBlc3RhZG9cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgZ2V0U2N1bHAoKTtcclxuICAgICAgfSwgW3BhdGhuYW1lXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZXNjdWx0dXJhKTtcclxuICAgIGlmICghZXNjdWx0dXJhKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPkNhcmdhbmRvLi4uPC9wPjsgLy8gTXVlc3RyYSB1biBtZW5zYWplIGRlIGNhcmdhIHNpIG5vIGhheSBkYXRvc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvdGFjaW9uQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy52b3RhY2lvbkNhcmRWb2x2ZXJ9IGhyZWY9XCIvZXZlbnRvc1wiPlZvbHZlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxoMT57ZXNjdWx0dXJhLm5vbWJyZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pntqd3Q/ICcnOidEZWJlIGVzdGFyIHJlZ2lzdHJhZG8gcGFyYSBlbWl0aXIgdW5hIHZvdGFjaW9uJ308L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57ZXNjdWx0dXJhLmRlc2NyaXBjaW9uID09IG51bGw/ICcnOiBlc2N1bHR1cmEuZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+RXNjdWx0b3I6IHtlc2N1bHR1cmEuZXNjdWx0b3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwdW50YWplXCI+UHVudGFqZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwdW50YWplXCIgbmFtZT1cInB1bnRhamVcIiBtaW49XCIxXCIgbWF4PVwiNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVZvdGV9PlZvdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlc2N1bHR1cmEuaW1hZ2VuX2Rlc3B1ZXN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiTGluayIsInN0eWxlcyIsImdldEVzY3VsdHVyYSIsInVzZVBhdGhuYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQYWdlIiwicGF0aG5hbWUiLCJlc2N1bHR1cmEiLCJzZXRFc2N1bHR1cmEiLCJqd3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiaGFuZGxlVm90ZSIsInB1c2giLCJnZXRTY3VscCIsImVzY3VsdCIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJ2b3RhY2lvbkNhcmQiLCJ2b3RhY2lvbkNhcmRWb2x2ZXIiLCJocmVmIiwiaDEiLCJub21icmUiLCJzdHlsZSIsImNvbG9yIiwiZGVzY3JpcGNpb24iLCJlc2N1bHRvciIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsIm1pbiIsIm1heCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsImltZyIsInNyYyIsImltYWdlbl9kZXNwdWVzIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/votaciones/[slug]/page.jsx\n"));

/***/ })

});