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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_GalleryComponents_plantillaEvento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/GalleryComponents/plantillaEvento */ \"(app-pages-browser)/./src/app/ui/GalleryComponents/plantillaEvento.jsx\");\n/* harmony import */ var _lib_getElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/getElement */ \"(app-pages-browser)/./src/app/lib/getElement.js\");\n/* harmony import */ var _lib_filtrarEsculturas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/filtrarEsculturas */ \"(app-pages-browser)/./src/app/lib/filtrarEsculturas.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Page() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    const [evento, setEvento] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [esculturas, setEsculturas] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const getSculp = async ()=>{\n            const escult = await (0,_lib_getElement__WEBPACK_IMPORTED_MODULE_2__.getEvento)(pathname.split(\"/\")[2]);\n            setEvento(escult); // Guardamos el resultado en el estado\n            const escultu = await (0,_lib_filtrarEsculturas__WEBPACK_IMPORTED_MODULE_3__.filtrarEsculturas)(escult.tematica);\n            setEsculturas(escultu); // Guardamos el resultado en el estado\n        };\n        getSculp();\n    }, [\n        pathname\n    ]);\n    if (!evento) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Cargando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this); // Muestra un mensaje de carga si no hay datos\n    }\n    console.log(esculturas);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_5__.Suspense, {\n            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Cargando...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 29\n            }, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_GalleryComponents_plantillaEvento__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                nombre: evento.nombre,\n                lugar: evento.lugar,\n                fecha_hora: evento.fecha_hora,\n                descripcion: evento.descripcion,\n                foto: evento.imagen,\n                tematica: evento.tematica,\n                esculturas: esculturas.esculturas\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\eventos\\\\[slug]\\\\page.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"WnN9yuNsySlZVWTIeCFdEAcJyRE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXZlbnRvcy9bc2x1Z10vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN5RTtBQUN4QjtBQUNlO0FBQ25CO0FBQ0Q7QUFDWjtBQUVqQixTQUFTTzs7SUFDcEIsTUFBTUMsV0FBV0wsNERBQVdBO0lBQzVCLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFHN0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVMsV0FBVztZQUNmLE1BQU1DLFNBQVMsTUFBTWIsMERBQVNBLENBQUNPLFNBQVNPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyREwsVUFBVUksU0FBUyxzQ0FBc0M7WUFDekQsTUFBTUUsVUFBVSxNQUFNZCx5RUFBaUJBLENBQUNZLE9BQU9HLFFBQVE7WUFDdkRMLGNBQWNJLFVBQVUsc0NBQXNDO1FBQ2hFO1FBRUFIO0lBQ0YsR0FBRztRQUFDTDtLQUFTO0lBRWYsSUFBSSxDQUFDQyxRQUFRO1FBQ1QscUJBQU8sOERBQUNTO3NCQUFFOzs7OztrQkFBaUIsOENBQThDO0lBQzdFO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFFWixxQkFDSSw4REFBQ1U7a0JBQ0QsNEVBQUNmLDJDQUFRQTtZQUFDZ0Isd0JBQVUsOERBQUNKOzBCQUFFOzs7Ozs7c0JBQ25CLDRFQUFDbEIsNkVBQWVBO2dCQUNadUIsUUFBUWQsT0FBT2MsTUFBTTtnQkFDckJDLE9BQU9mLE9BQU9lLEtBQUs7Z0JBQ25CQyxZQUFZaEIsT0FBT2dCLFVBQVU7Z0JBQzdCQyxhQUFhakIsT0FBT2lCLFdBQVc7Z0JBQy9CQyxNQUFNbEIsT0FBT21CLE1BQU07Z0JBQ25CWCxVQUFVUixPQUFPUSxRQUFRO2dCQUN6Qk4sWUFBWUEsV0FBV0EsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQXZDd0JKOztRQUNISix3REFBV0E7OztLQURSSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2V2ZW50b3MvW3NsdWddL3BhZ2UuanN4PzVkNzUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBQbGFudGlsbGFFdmVudG8gZnJvbSBcIi4uLy4uL3VpL0dhbGxlcnlDb21wb25lbnRzL3BsYW50aWxsYUV2ZW50b1wiO1xyXG5pbXBvcnQgeyBnZXRFdmVudG8gfSBmcm9tIFwiLi4vLi4vbGliL2dldEVsZW1lbnRcIjtcclxuaW1wb3J0IHsgZmlsdHJhckVzY3VsdHVyYXMgfSBmcm9tIFwiLi4vLi4vbGliL2ZpbHRyYXJFc2N1bHR1cmFzXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcclxuICAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICAgIGNvbnN0IFtldmVudG8sIHNldEV2ZW50b10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlc2N1bHR1cmFzLCBzZXRFc2N1bHR1cmFzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBnZXRTY3VscCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVzY3VsdCA9IGF3YWl0IGdldEV2ZW50byhwYXRobmFtZS5zcGxpdCgnLycpWzJdKTtcclxuICAgICAgICAgIHNldEV2ZW50byhlc2N1bHQpOyAvLyBHdWFyZGFtb3MgZWwgcmVzdWx0YWRvIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgICAgY29uc3QgZXNjdWx0dSA9IGF3YWl0IGZpbHRyYXJFc2N1bHR1cmFzKGVzY3VsdC50ZW1hdGljYSk7XHJcbiAgICAgICAgICBzZXRFc2N1bHR1cmFzKGVzY3VsdHUpOyAvLyBHdWFyZGFtb3MgZWwgcmVzdWx0YWRvIGVuIGVsIGVzdGFkb1xyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBnZXRTY3VscCgpO1xyXG4gICAgICB9LCBbcGF0aG5hbWVdKTtcclxuXHJcbiAgICBpZiAoIWV2ZW50bykge1xyXG4gICAgICAgIHJldHVybiA8cD5DYXJnYW5kby4uLjwvcD47IC8vIE11ZXN0cmEgdW4gbWVuc2FqZSBkZSBjYXJnYSBzaSBubyBoYXkgZGF0b3NcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhlc2N1bHR1cmFzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+Q2FyZ2FuZG8uLi48L3A+fT5cclxuICAgICAgICAgICAgPFBsYW50aWxsYUV2ZW50b1xyXG4gICAgICAgICAgICAgICAgbm9tYnJlPXtldmVudG8ubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgbHVnYXI9e2V2ZW50by5sdWdhcn1cclxuICAgICAgICAgICAgICAgIGZlY2hhX2hvcmE9e2V2ZW50by5mZWNoYV9ob3JhfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcGNpb249e2V2ZW50by5kZXNjcmlwY2lvbn1cclxuICAgICAgICAgICAgICAgIGZvdG89e2V2ZW50by5pbWFnZW59XHJcbiAgICAgICAgICAgICAgICB0ZW1hdGljYT17ZXZlbnRvLnRlbWF0aWNhfVxyXG4gICAgICAgICAgICAgICAgZXNjdWx0dXJhcz17ZXNjdWx0dXJhcy5lc2N1bHR1cmFzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJQbGFudGlsbGFFdmVudG8iLCJnZXRFdmVudG8iLCJmaWx0cmFyRXNjdWx0dXJhcyIsInVzZVBhdGhuYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdXNwZW5zZSIsIlBhZ2UiLCJwYXRobmFtZSIsImV2ZW50byIsInNldEV2ZW50byIsImVzY3VsdHVyYXMiLCJzZXRFc2N1bHR1cmFzIiwiZ2V0U2N1bHAiLCJlc2N1bHQiLCJzcGxpdCIsImVzY3VsdHUiLCJ0ZW1hdGljYSIsInAiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImZhbGxiYWNrIiwibm9tYnJlIiwibHVnYXIiLCJmZWNoYV9ob3JhIiwiZGVzY3JpcGNpb24iLCJmb3RvIiwiaW1hZ2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/eventos/[slug]/page.jsx\n"));

/***/ })

});