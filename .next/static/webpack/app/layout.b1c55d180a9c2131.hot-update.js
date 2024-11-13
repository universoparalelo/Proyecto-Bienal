"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/ui/componentes/AuthContainer.jsx":
/*!**************************************************!*\
  !*** ./src/app/ui/componentes/AuthContainer.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Page() {\n    _s();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Función para obtener el token del localStorage\n    const getToken = ()=>{\n        try {\n            const user = localStorage.getItem(\"user\");\n            const role1 = localStorage.getItem(\"role\");\n            console.log(role1);\n            if (user) {\n                setToken(user);\n            } else {\n                setToken(null);\n            }\n        } catch (error) {\n            console.error(\"Error accediendo a localStorage:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Cargamos el token al iniciar\n        getToken();\n        // Escuchamos cambios en el localStorage\n        window.addEventListener(\"storage\", getToken);\n        // Limpiamos el listener al desmontar el componente\n        return ()=>{\n            window.removeEventListener(\"storage\", getToken);\n        };\n    }, []);\n    // Cerrar sesión\n    const logout = ()=>{\n        localStorage.removeItem(\"jwt\");\n        localStorage.removeItem(\"user\");\n        setToken(null);\n        window.location.reload(\"/\");\n    };\n    if (token) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: token\n                }, void 0, false, {\n                    fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/misEsculturas\",\n                        children: role == \"escultor\" ? \"\" : \"Mis esculturas\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 20\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: logout,\n                    children: \"Cerrar sesi\\xf3n\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"rootHeaderUsuario\",\n                        href: \"/login\",\n                        children: \"Iniciar sesi\\xf3n\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"rootHeaderUsuario\",\n                        href: \"/registrarse\",\n                        children: \"Registrarse\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\2024-01-TPI\\\\src\\\\app\\\\ui\\\\componentes\\\\AuthContainer.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n_s(Page, \"SSLzquenZQzOMzU62DrezfOo2pU=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdWkvY29tcG9uZW50ZXMvQXV0aENvbnRhaW5lci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QztBQUNmO0FBRWQsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVuQyxpREFBaUQ7SUFDakQsTUFBTUssV0FBVztRQUNiLElBQUk7WUFDQSxNQUFNQyxPQUFPQyxhQUFhQyxPQUFPLENBQUM7WUFDbEMsTUFBTUMsUUFBT0YsYUFBYUMsT0FBTyxDQUFDO1lBQ2xDRSxRQUFRQyxHQUFHLENBQUNGO1lBQ1osSUFBSUgsTUFBTTtnQkFDTkYsU0FBU0U7WUFDYixPQUFPO2dCQUNIRixTQUFTO1lBQ2I7UUFDSixFQUFFLE9BQU9RLE9BQU87WUFDWkYsUUFBUUUsS0FBSyxDQUFDLG9DQUFvQ0E7UUFDdEQ7SUFDSjtJQUVBYixnREFBU0EsQ0FBQztRQUNOLCtCQUErQjtRQUMvQk07UUFFQSx3Q0FBd0M7UUFDeENRLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdUO1FBRW5DLG1EQUFtRDtRQUNuRCxPQUFPO1lBQ0hRLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdWO1FBQzFDO0lBQ0osR0FBRyxFQUFFO0lBRUwsZ0JBQWdCO0lBQ2hCLE1BQU1XLFNBQVM7UUFDWFQsYUFBYVUsVUFBVSxDQUFDO1FBQ3hCVixhQUFhVSxVQUFVLENBQUM7UUFDeEJiLFNBQVM7UUFDVFMsT0FBT0ssUUFBUSxDQUFDQyxNQUFNLENBQUM7SUFDM0I7SUFFQSxJQUFJaEIsT0FBTztRQUNQLHFCQUNJOzs4QkFDSSw4REFBQ2lCOzhCQUFJakI7Ozs7Ozs4QkFDTCw4REFBQ2tCOzhCQUFFLDRFQUFDcEIsaURBQUlBO3dCQUFDcUIsTUFBTTtrQ0FBbUJiLFFBQVEsYUFBYSxLQUFJOzs7Ozs7Ozs7Ozs4QkFDM0QsOERBQUNjO29CQUFPQyxTQUFTUjs4QkFBUTs7Ozs7Ozs7SUFHckMsT0FBTztRQUNILHFCQUNJOzs4QkFDSSw4REFBQ0k7OEJBQ0csNEVBQUNuQixpREFBSUE7d0JBQUN3QixXQUFVO3dCQUFvQkgsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OEJBRXRELDhEQUFDRjs4QkFDRyw0RUFBQ25CLGlEQUFJQTt3QkFBQ3dCLFdBQVU7d0JBQW9CSCxNQUFLO2tDQUFlOzs7Ozs7Ozs7Ozs7O0lBSXhFO0FBQ0o7R0E1RHdCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91aS9jb21wb25lbnRlcy9BdXRoQ29udGFpbmVyLmpzeD84MmJiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIFxyXG4gICAgLy8gRnVuY2nDs24gcGFyYSBvYnRlbmVyIGVsIHRva2VuIGRlbCBsb2NhbFN0b3JhZ2VcclxuICAgIGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJvbGVcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvbGUpO1xyXG4gICAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW4odXNlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbihudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2NlZGllbmRvIGEgbG9jYWxTdG9yYWdlOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIENhcmdhbW9zIGVsIHRva2VuIGFsIGluaWNpYXJcclxuICAgICAgICBnZXRUb2tlbigpO1xyXG5cclxuICAgICAgICAvLyBFc2N1Y2hhbW9zIGNhbWJpb3MgZW4gZWwgbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGdldFRva2VuKTtcclxuXHJcbiAgICAgICAgLy8gTGltcGlhbW9zIGVsIGxpc3RlbmVyIGFsIGRlc21vbnRhciBlbCBjb21wb25lbnRlXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGdldFRva2VuKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIENlcnJhciBzZXNpw7NuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgIHNldFRva2VuKG51bGwpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoXCIvXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGxpPnt0b2tlbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgPHA+PExpbmsgaHJlZj17Jy9taXNFc2N1bHR1cmFzJ30+e3JvbGUgPT0gJ2VzY3VsdG9yJyA/ICcnOiAnTWlzIGVzY3VsdHVyYXMnfTwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0+Q2VycmFyIHNlc2nDs248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJyb290SGVhZGVyVXN1YXJpb1wiIGhyZWY9XCIvbG9naW5cIj5JbmljaWFyIHNlc2nDs248L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInJvb3RIZWFkZXJVc3VhcmlvXCIgaHJlZj1cIi9yZWdpc3RyYXJzZVwiPlJlZ2lzdHJhcnNlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiUGFnZSIsInRva2VuIiwic2V0VG9rZW4iLCJnZXRUb2tlbiIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm9sZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImxvY2F0aW9uIiwicmVsb2FkIiwibGkiLCJwIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ui/componentes/AuthContainer.jsx\n"));

/***/ })

});