"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[query]",{

/***/ "./components/CartSummary.js":
/*!***********************************!*\
  !*** ./components/CartSummary.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CartSummary = ()=>{\n    _s();\n    const { cart } = (0,_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.useCart)();\n    const totalItems = cart.items.reduce((sum, item)=>sum + item.quantity, 0);\n    const totalPrice = cart.items.reduce((sum, item)=>sum + parseFloat(item.price.replace(\"$\", \"\")) * item.quantity, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cart-summary\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/cart\",\n            className: \"cart-summary-link\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cart-summary-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            totalItems,\n                            \" item\",\n                            totalItems !== 1 ? \"s\" : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/components/CartSummary.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cart-summary-price\",\n                        children: [\n                            \"$\",\n                            totalPrice.toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/components/CartSummary.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dangnguyen/popstart/components/CartSummary.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/dangnguyen/popstart/components/CartSummary.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dangnguyen/popstart/components/CartSummary.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CartSummary, \"GQSP7DAu2z+QzdS9621Ip+kHB6w=\", false, function() {\n    return [\n        _context_CartContext__WEBPACK_IMPORTED_MODULE_2__.useCart\n    ];\n});\n_c = CartSummary;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartSummary);\nvar _c;\n$RefreshReg$(_c, \"CartSummary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRTdW1tYXJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFDcEI7QUFFN0IsTUFBTUcsY0FBYzs7SUFDbEIsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0gsNkRBQU9BO0lBRXhCLE1BQU1JLGFBQWFELEtBQUtFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELE1BQU1DLEtBQUtDLFFBQVEsRUFBRTtJQUN6RSxNQUFNQyxhQUFhUCxLQUFLRSxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxPQUFTRCxNQUFNSSxXQUFXSCxLQUFLSSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxLQUFLLE9BQU9MLEtBQUtDLFFBQVEsRUFBRTtJQUVuSCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2Qsa0RBQUlBO1lBQUNlLE1BQUs7WUFBUUQsV0FBVTtzQkFDM0IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7OzRCQUFNYjs0QkFBVzs0QkFBTUEsZUFBZSxJQUFJLE1BQU07Ozs7Ozs7a0NBQ2pELDhEQUFDYTt3QkFBS0YsV0FBVTs7NEJBQXFCOzRCQUFFTCxXQUFXUSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BFO0dBaEJNaEI7O1FBQ2FGLHlEQUFPQTs7O0tBRHBCRTtBQWtCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcnRTdW1tYXJ5LmpzPzBhNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9jb250ZXh0L0NhcnRDb250ZXh0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IENhcnRTdW1tYXJ5ID0gKCkgPT4ge1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNhcnQoKTtcblxuICBjb25zdCB0b3RhbEl0ZW1zID0gY2FydC5pdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSwgMCk7XG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBjYXJ0Lml0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBwYXJzZUZsb2F0KGl0ZW0ucHJpY2UucmVwbGFjZSgnJCcsICcnKSkgKiBpdGVtLnF1YW50aXR5LCAwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zdW1tYXJ5XCI+XG4gICAgICA8TGluayBocmVmPVwiL2NhcnRcIiBjbGFzc05hbWU9XCJjYXJ0LXN1bW1hcnktbGlua1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc3VtbWFyeS1jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4+e3RvdGFsSXRlbXN9IGl0ZW17dG90YWxJdGVtcyAhPT0gMSA/ICdzJyA6ICcnfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LXN1bW1hcnktcHJpY2VcIj4ke3RvdGFsUHJpY2UudG9GaXhlZCgyKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydFN1bW1hcnk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FydCIsIkxpbmsiLCJDYXJ0U3VtbWFyeSIsImNhcnQiLCJ0b3RhbEl0ZW1zIiwiaXRlbXMiLCJyZWR1Y2UiLCJzdW0iLCJpdGVtIiwicXVhbnRpdHkiLCJ0b3RhbFByaWNlIiwicGFyc2VGbG9hdCIsInByaWNlIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcGFuIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartSummary.js\n"));

/***/ })

});