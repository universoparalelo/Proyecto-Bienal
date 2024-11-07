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

/***/ "(app-pages-browser)/./src/app/eventos/[slug]/page.jsx":
/*!*****************************************!*\
  !*** ./src/app/eventos/[slug]/page.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_GalleryComponents_plantillaEvento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/GalleryComponents/plantillaEvento */ \"(app-pages-browser)/./src/app/ui/GalleryComponents/plantillaEvento.jsx\");\n/* harmony import */ var _lib_getElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/getElement */ \"(app-pages-browser)/./src/app/lib/getElement.js\");\n/* harmony import */ var _lib_filtrarEsculturas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/filtrarEsculturas */ \"(app-pages-browser)/./src/app/lib/filtrarEsculturas.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const [evento, setEvento] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [esculturas, setEsculturas] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const getSculp = async ()=>{\n            const escult = await (0,_lib_getElement__WEBPACK_IMPORTED_MODULE_2__.getEvento)(pathname.split(\"/\")[2]);\n            setEvento(escult); // Guardamos el resultado en el estado\n            const escultu = await (0,_lib_filtrarEsculturas__WEBPACK_IMPORTED_MODULE_3__.filtrarEsculturas)(evento.tematica);\n            setEsculturas(esculturas); // Guardamos el resultado en el estado\n        };\n        getSculp();\n    }, [\n        pathname\n    ]);\n    if (!evento) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this); // Muestra un mensaje de carga si no hay datos\n    }\n    console.log(evento);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_5__.Suspense, {\n            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Cargando...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 29\n            }, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_GalleryComponents_plantillaEvento__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                nombre: evento.nombre,\n                lugar: evento.lugar,\n                fecha_hora: evento.fecha_hora,\n                descripcion: evento.descripcion,\n                foto: evento.imagen,\n                tematica: evento.tematica\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"WnN9yuNsySlZVWTIeCFdEAcJyRE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXZlbnRvcy9bc2x1Z10vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN5RTtBQUN4QjtBQUNlO0FBQ25CO0FBQ0Q7QUFDWjtBQUVqQixTQUFTTzs7SUFDcEIsTUFBTUMsV0FBV0wsNERBQVdBO0lBQzVCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFHN0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVMsV0FBVztZQUNmLE1BQU1DLFNBQVMsTUFBTWIsMERBQVNBLENBQUNPLFNBQVNPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyREwsVUFBVUksU0FBUyxzQ0FBc0M7WUFDekQsTUFBTUUsVUFBVSxNQUFNZCx5RUFBaUJBLENBQUNPLE9BQU9RLFFBQVE7WUFDdkRMLGNBQWNELGFBQWEsc0NBQXNDO1FBQ25FO1FBRUFFO0lBQ0YsR0FBRztRQUFDTDtLQUFTO0lBRWYsSUFBSSxDQUFDQyxRQUFRO1FBQ1QscUJBQU8sOERBQUNTO3NCQUFFOzs7OztrQkFBaUIsOENBQThDO0lBQzdFO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1g7SUFFWixxQkFDSSw4REFBQ1k7a0JBQ0QsNEVBQUNmLDJDQUFRQTtZQUFDZ0Isd0JBQVUsOERBQUNKOzBCQUFFOzs7Ozs7c0JBQ25CLDRFQUFDbEIsNkVBQWVBO2dCQUNadUIsUUFBUWQsT0FBT2MsTUFBTTtnQkFDckJDLE9BQU9mLE9BQU9lLEtBQUs7Z0JBQ25CQyxZQUFZaEIsT0FBT2dCLFVBQVU7Z0JBQzdCQyxhQUFhakIsT0FBT2lCLFdBQVc7Z0JBQy9CQyxNQUFNbEIsT0FBT21CLE1BQU07Z0JBQ25CWCxVQUFVUixPQUFPUSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FBTXpDO0dBdEN3QlY7O1FBQ0hKLHdEQUFXQTs7O0tBRFJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZXZlbnRvcy9bc2x1Z10vcGFnZS5qc3g/NWQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFBsYW50aWxsYUV2ZW50byBmcm9tIFwiLi4vLi4vdWkvR2FsbGVyeUNvbXBvbmVudHMvcGxhbnRpbGxhRXZlbnRvXCI7XHJcbmltcG9ydCB7IGdldEV2ZW50byB9IGZyb20gXCIuLi8uLi9saWIvZ2V0RWxlbWVudFwiO1xyXG5pbXBvcnQgeyBmaWx0cmFyRXNjdWx0dXJhcyB9IGZyb20gXCIuLi8uLi9saWIvZmlsdHJhckVzY3VsdHVyYXNcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gICAgY29uc3QgW2V2ZW50bywgc2V0RXZlbnRvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2VzY3VsdHVyYXMsIHNldEVzY3VsdHVyYXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldFNjdWxwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZXNjdWx0ID0gYXdhaXQgZ2V0RXZlbnRvKHBhdGhuYW1lLnNwbGl0KCcvJylbMl0pO1xyXG4gICAgICAgICAgc2V0RXZlbnRvKGVzY3VsdCk7IC8vIEd1YXJkYW1vcyBlbCByZXN1bHRhZG8gZW4gZWwgZXN0YWRvXHJcbiAgICAgICAgICBjb25zdCBlc2N1bHR1ID0gYXdhaXQgZmlsdHJhckVzY3VsdHVyYXMoZXZlbnRvLnRlbWF0aWNhKTtcclxuICAgICAgICAgIHNldEVzY3VsdHVyYXMoZXNjdWx0dXJhcyk7IC8vIEd1YXJkYW1vcyBlbCByZXN1bHRhZG8gZW4gZWwgZXN0YWRvXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGdldFNjdWxwKCk7XHJcbiAgICAgIH0sIFtwYXRobmFtZV0pO1xyXG5cclxuICAgIGlmICghZXZlbnRvKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPkNhcmdhbmRvLi4uPC9wPjsgLy8gTXVlc3RyYSB1biBtZW5zYWplIGRlIGNhcmdhIHNpIG5vIGhheSBkYXRvc1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGV2ZW50byk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxwPkNhcmdhbmRvLi4uPC9wPn0+XHJcbiAgICAgICAgICAgIDxQbGFudGlsbGFFdmVudG9cclxuICAgICAgICAgICAgICAgIG5vbWJyZT17ZXZlbnRvLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgIGx1Z2FyPXtldmVudG8ubHVnYXJ9XHJcbiAgICAgICAgICAgICAgICBmZWNoYV9ob3JhPXtldmVudG8uZmVjaGFfaG9yYX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXBjaW9uPXtldmVudG8uZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICBmb3RvPXtldmVudG8uaW1hZ2VufVxyXG4gICAgICAgICAgICAgICAgdGVtYXRpY2E9e2V2ZW50by50ZW1hdGljYX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUGxhbnRpbGxhRXZlbnRvIiwiZ2V0RXZlbnRvIiwiZmlsdHJhckVzY3VsdHVyYXMiLCJ1c2VQYXRobmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VzcGVuc2UiLCJQYWdlIiwicGF0aG5hbWUiLCJldmVudG8iLCJzZXRFdmVudG8iLCJlc2N1bHR1cmFzIiwic2V0RXNjdWx0dXJhcyIsImdldFNjdWxwIiwiZXNjdWx0Iiwic3BsaXQiLCJlc2N1bHR1IiwidGVtYXRpY2EiLCJwIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJmYWxsYmFjayIsIm5vbWJyZSIsImx1Z2FyIiwiZmVjaGFfaG9yYSIsImRlc2NyaXBjaW9uIiwiZm90byIsImltYWdlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/eventos/[slug]/page.jsx\n"));

/***/ })

});