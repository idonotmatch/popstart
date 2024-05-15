/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/SearchContext.js":
/*!**********************************!*\
  !*** ./context/SearchContext.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga4 */ \"./node_modules/react-ga4/dist/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_SearchContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SearchContext */ \"./context/SearchContext.js\");\n/* harmony import */ var _context_SearchContext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_context_SearchContext__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Import SearchProvider\n// Setup Apollo Client\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloClient({\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.HttpLink({\n        uri: \"/api/graphql\"\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.InMemoryCache()\n});\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize GA4 with the ID from environment variables\n        react_ga4__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize(\"G-51Y38PPW5G\");\n        const handleRouteChange = (url)=>{\n            react_ga4__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\n                hitType: \"pageview\",\n                page: url\n            });\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // Cleanup subscription on unmount\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SearchContext__WEBPACK_IMPORTED_MODULE_5__.SearchProvider, {\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQ3VCO0FBQ3RDO0FBQ087QUFDVDtBQUMyQixDQUFDLHdCQUF3QjtBQUVuRixzQkFBc0I7QUFDdEIsTUFBTVMsU0FBUyxJQUFJTix3REFBWUEsQ0FBQztJQUM5Qk8sTUFBTSxJQUFJTCxvREFBUUEsQ0FBQztRQUNqQk0sS0FBSztJQUNQO0lBQ0FDLE9BQU8sSUFBSVIseURBQWFBO0FBQzFCO0FBRUEsU0FBU1MsTUFBTSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4Qjs7SUFDYixNQUFNQyxTQUFTVCxzREFBU0E7SUFFeEJOLGdEQUFTQSxDQUFDO1FBQ1Isd0RBQXdEO1FBQ3hESyw0REFBbUIsQ0FBQ1ksY0FBeUM7UUFFN0QsTUFBTUcsb0JBQW9CLENBQUNDO1lBQ3pCaEIsc0RBQWEsQ0FBQztnQkFBRWtCLFNBQVM7Z0JBQVlDLE1BQU1IO1lBQUk7UUFDakQ7UUFFQU4sT0FBT1UsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCTjtRQUV4QyxrQ0FBa0M7UUFDbEMsT0FBTztZQUNMTCxPQUFPVSxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJQO1FBQzNDO0lBQ0YsR0FBRztRQUFDTCxPQUFPVSxNQUFNO0tBQUM7SUFFbEIscUJBQ0UsOERBQUN4QiwwREFBY0E7UUFBQ08sUUFBUUE7a0JBQ3RCLDRFQUFDRCxrRUFBY0E7O2dCQUFDOzhCQUNkLDhEQUFDTTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztHQTFCU0Y7O1FBQ1FOLGtEQUFTQTs7O0tBRGpCTTtBQTRCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBSZWFjdEdBNCBmcm9tICdyZWFjdC1nYTQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgU2VhcmNoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1NlYXJjaENvbnRleHQnOyAvLyBJbXBvcnQgU2VhcmNoUHJvdmlkZXJcblxuLy8gU2V0dXAgQXBvbGxvIENsaWVudFxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiAnL2FwaS9ncmFwaHFsJyxcbiAgfSksXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEluaXRpYWxpemUgR0E0IHdpdGggdGhlIElEIGZyb20gZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAgUmVhY3RHQTQuaW5pdGlhbGl6ZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9NRUFTVVJFTUVOVF9JRCk7XG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcbiAgICAgIFJlYWN0R0E0LnNlbmQoeyBoaXRUeXBlOiBcInBhZ2V2aWV3XCIsIHBhZ2U6IHVybCB9KTtcbiAgICB9O1xuXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcblxuICAgIC8vIENsZWFudXAgc3Vic2NyaXB0aW9uIG9uIHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8U2VhcmNoUHJvdmlkZXI+IHsvKiBXcmFwIHRoZSBhcHBsaWNhdGlvbiB3aXRoIFNlYXJjaFByb3ZpZGVyICovfVxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1NlYXJjaFByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQXBvbGxvUHJvdmlkZXIiLCJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiSHR0cExpbmsiLCJSZWFjdEdBNCIsInVzZVJvdXRlciIsIlNlYXJjaFByb3ZpZGVyIiwiY2xpZW50IiwibGluayIsInVyaSIsImNhY2hlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJpbml0aWFsaXplIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dBX01FQVNVUkVNRU5UX0lEIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJzZW5kIiwiaGl0VHlwZSIsInBhZ2UiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});