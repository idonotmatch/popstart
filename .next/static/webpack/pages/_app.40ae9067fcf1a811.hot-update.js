/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
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
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga4 */ \"./node_modules/react-ga4/dist/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_SearchContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/SearchContext */ \"./context/SearchContext.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Layout__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Import the Layout component\n// Setup Apollo Client\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloClient({\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.HttpLink({\n        uri: \"/api/graphql\"\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.InMemoryCache()\n});\nfunction MyApp(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize GA4 with the ID from environment variables\n        react_ga4__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initialize(\"G-51Y38PPW5G\");\n        const handleRouteChange = (url)=>{\n            react_ga4__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send({\n                hitType: \"pageview\",\n                page: url\n            });\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // Cleanup subscription on unmount\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SearchContext__WEBPACK_IMPORTED_MODULE_5__.SearchProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Layout__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDTztBQUN1QjtBQUN0QztBQUNPO0FBQ1Q7QUFDMkI7QUFDaEIsQ0FBQyw4QkFBOEI7QUFFekUsc0JBQXNCO0FBQ3RCLE1BQU1VLFNBQVMsSUFBSVAsd0RBQVlBLENBQUM7SUFDOUJRLE1BQU0sSUFBSU4sb0RBQVFBLENBQUM7UUFDakJPLEtBQUs7SUFDUDtJQUNBQyxPQUFPLElBQUlULHlEQUFhQTtBQUMxQjtBQUVBLFNBQVNVLE1BQU0sS0FBd0I7UUFBeEIsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBeEI7O0lBQ2IsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBRXhCTixnREFBU0EsQ0FBQztRQUNSLHdEQUF3RDtRQUN4REssNERBQW1CLENBQUNhLGNBQXlDO1FBRTdELE1BQU1HLG9CQUFvQixDQUFDQztZQUN6QmpCLHNEQUFhLENBQUM7Z0JBQUVtQixTQUFTO2dCQUFZQyxNQUFNSDtZQUFJO1FBQ2pEO1FBRUFOLE9BQU9VLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHVCQUF1Qk47UUFFeEMsa0NBQWtDO1FBQ2xDLE9BQU87WUFDTEwsT0FBT1UsTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCUDtRQUMzQztJQUNGLEdBQUc7UUFBQ0wsT0FBT1UsTUFBTTtLQUFDO0lBRWxCLHFCQUNFLDhEQUFDekIsMERBQWNBO1FBQUNRLFFBQVFBO2tCQUN0Qiw0RUFBQ0Ysa0VBQWNBO3NCQUNiLDRFQUFDQywyREFBTUE7MEJBQ0wsNEVBQUNNO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQTVCU0Y7O1FBQ1FQLGtEQUFTQTs7O0tBRGpCTztBQThCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBSZWFjdEdBNCBmcm9tICdyZWFjdC1nYTQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgU2VhcmNoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1NlYXJjaENvbnRleHQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7IC8vIEltcG9ydCB0aGUgTGF5b3V0IGNvbXBvbmVudFxuXG4vLyBTZXR1cCBBcG9sbG8gQ2xpZW50XG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICB1cmk6ICcvYXBpL2dyYXBocWwnLFxuICB9KSxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSW5pdGlhbGl6ZSBHQTQgd2l0aCB0aGUgSUQgZnJvbSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgICBSZWFjdEdBNC5pbml0aWFsaXplKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX01FQVNVUkVNRU5UX0lEKTtcblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgUmVhY3RHQTQuc2VuZCh7IGhpdFR5cGU6IFwicGFnZXZpZXdcIiwgcGFnZTogdXJsIH0pO1xuICAgIH07XG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgLy8gQ2xlYW51cCBzdWJzY3JpcHRpb24gb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbcm91dGVyLmV2ZW50c10pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxTZWFyY2hQcm92aWRlcj5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9TZWFyY2hQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJBcG9sbG9Qcm92aWRlciIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJIdHRwTGluayIsIlJlYWN0R0E0IiwidXNlUm91dGVyIiwiU2VhcmNoUHJvdmlkZXIiLCJMYXlvdXQiLCJjbGllbnQiLCJsaW5rIiwidXJpIiwiY2FjaGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImluaXRpYWxpemUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR0FfTUVBU1VSRU1FTlRfSUQiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInNlbmQiLCJoaXRUeXBlIiwicGFnZSIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});