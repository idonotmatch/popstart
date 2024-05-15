/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/SearchContext.js":
/*!**********************************!*\
  !*** ./context/SearchContext.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchProvider: () => (/* binding */ SearchProvider),\n/* harmony export */   useSearch: () => (/* binding */ useSearch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst SearchProvider = ({ children })=>{\n    const [searchCache, setSearchCache] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const setSearchResults = (query, results)=>{\n        setSearchCache((prevCache)=>({\n                ...prevCache,\n                [query]: results\n            }));\n    };\n    const getSearchResults = (query)=>searchCache[query] || null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchContext.Provider, {\n        value: {\n            setSearchResults,\n            getSearchResults\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dangnguyen/popstart/context/SearchContext.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\nconst useSearch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1NlYXJjaENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRTtBQUVuRSxNQUFNSSw4QkFBZ0JILG9EQUFhQTtBQUU1QixNQUFNSSxpQkFBaUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDekMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLENBQUM7SUFFaEQsTUFBTU8sbUJBQW1CLENBQUNDLE9BQU9DO1FBQy9CSCxlQUFlLENBQUNJLFlBQWU7Z0JBQzdCLEdBQUdBLFNBQVM7Z0JBQ1osQ0FBQ0YsTUFBTSxFQUFFQztZQUNYO0lBQ0Y7SUFFQSxNQUFNRSxtQkFBbUIsQ0FBQ0gsUUFBVUgsV0FBVyxDQUFDRyxNQUFNLElBQUk7SUFFMUQscUJBQ0UsOERBQUNOLGNBQWNVLFFBQVE7UUFBQ0MsT0FBTztZQUFFTjtZQUFrQkk7UUFBaUI7a0JBQ2pFUDs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1VLFlBQVksSUFBTWIsaURBQVVBLENBQUNDLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1ncmFwaHFsLXByb2plY3QvLi9jb250ZXh0L1NlYXJjaENvbnRleHQuanM/NjlhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlYXJjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3NlYXJjaENhY2hlLCBzZXRTZWFyY2hDYWNoZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3Qgc2V0U2VhcmNoUmVzdWx0cyA9IChxdWVyeSwgcmVzdWx0cykgPT4ge1xuICAgIHNldFNlYXJjaENhY2hlKChwcmV2Q2FjaGUpID0+ICh7XG4gICAgICAuLi5wcmV2Q2FjaGUsXG4gICAgICBbcXVlcnldOiByZXN1bHRzLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBnZXRTZWFyY2hSZXN1bHRzID0gKHF1ZXJ5KSA9PiBzZWFyY2hDYWNoZVtxdWVyeV0gfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNldFNlYXJjaFJlc3VsdHMsIGdldFNlYXJjaFJlc3VsdHMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TZWFyY2hDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVNlYXJjaCA9ICgpID0+IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiU2VhcmNoQ29udGV4dCIsIlNlYXJjaFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWFyY2hDYWNoZSIsInNldFNlYXJjaENhY2hlIiwic2V0U2VhcmNoUmVzdWx0cyIsInF1ZXJ5IiwicmVzdWx0cyIsInByZXZDYWNoZSIsImdldFNlYXJjaFJlc3VsdHMiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2VhcmNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/SearchContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga4 */ \"react-ga4\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ga4__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_SearchContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/SearchContext */ \"./context/SearchContext.js\");\n\n\n\n\n\n\n\n // Import SearchProvider\n// Setup Apollo Client\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.HttpLink({\n        uri: \"/api/graphql\"\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache()\n});\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize GA4 with the ID from environment variables\n        react_ga4__WEBPACK_IMPORTED_MODULE_3___default().initialize(\"G-51Y38PPW5G\");\n        const handleRouteChange = (url)=>{\n            react_ga4__WEBPACK_IMPORTED_MODULE_3___default().send({\n                hitType: \"pageview\",\n                page: url\n            });\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // Cleanup subscription on unmount\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SearchContext__WEBPACK_IMPORTED_MODULE_6__.SearchProvider, {\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dangnguyen/popstart/pages/_app.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQ3VCO0FBQ3RDO0FBQ087QUFDVDtBQUMyQixDQUFDLHdCQUF3QjtBQUVuRixzQkFBc0I7QUFDdEIsTUFBTVMsU0FBUyxJQUFJTix3REFBWUEsQ0FBQztJQUM5Qk8sTUFBTSxJQUFJTCxvREFBUUEsQ0FBQztRQUNqQk0sS0FBSztJQUNQO0lBQ0FDLE9BQU8sSUFBSVIseURBQWFBO0FBQzFCO0FBRUEsU0FBU1MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxTQUFTVCxzREFBU0E7SUFFeEJOLGdEQUFTQSxDQUFDO1FBQ1Isd0RBQXdEO1FBQ3hESywyREFBbUIsQ0FBQ1ksY0FBeUM7UUFFN0QsTUFBTUcsb0JBQW9CLENBQUNDO1lBQ3pCaEIscURBQWEsQ0FBQztnQkFBRWtCLFNBQVM7Z0JBQVlDLE1BQU1IO1lBQUk7UUFDakQ7UUFFQU4sT0FBT1UsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCTjtRQUV4QyxrQ0FBa0M7UUFDbEMsT0FBTztZQUNMTCxPQUFPVSxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJQO1FBQzNDO0lBQ0YsR0FBRztRQUFDTCxPQUFPVSxNQUFNO0tBQUM7SUFFbEIscUJBQ0UsOERBQUN4QiwwREFBY0E7UUFBQ08sUUFBUUE7a0JBQ3RCLDRFQUFDRCxrRUFBY0E7O2dCQUFDOzhCQUNkLDhEQUFDTTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZ3JhcGhxbC1wcm9qZWN0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgUmVhY3RHQTQgZnJvbSAncmVhY3QtZ2E0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IFNlYXJjaFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9TZWFyY2hDb250ZXh0JzsgLy8gSW1wb3J0IFNlYXJjaFByb3ZpZGVyXG5cbi8vIFNldHVwIEFwb2xsbyBDbGllbnRcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgIHVyaTogJy9hcGkvZ3JhcGhxbCcsXG4gIH0pLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJbml0aWFsaXplIEdBNCB3aXRoIHRoZSBJRCBmcm9tIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICAgIFJlYWN0R0E0LmluaXRpYWxpemUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0FfTUVBU1VSRU1FTlRfSUQpO1xuXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XG4gICAgICBSZWFjdEdBNC5zZW5kKHsgaGl0VHlwZTogXCJwYWdldmlld1wiLCBwYWdlOiB1cmwgfSk7XG4gICAgfTtcblxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG5cbiAgICAvLyBDbGVhbnVwIHN1YnNjcmlwdGlvbiBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPFNlYXJjaFByb3ZpZGVyPiB7LyogV3JhcCB0aGUgYXBwbGljYXRpb24gd2l0aCBTZWFyY2hQcm92aWRlciAqL31cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9TZWFyY2hQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkFwb2xsb1Byb3ZpZGVyIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkh0dHBMaW5rIiwiUmVhY3RHQTQiLCJ1c2VSb3V0ZXIiLCJTZWFyY2hQcm92aWRlciIsImNsaWVudCIsImxpbmsiLCJ1cmkiLCJjYWNoZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaW5pdGlhbGl6ZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HQV9NRUFTVVJFTUVOVF9JRCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwic2VuZCIsImhpdFR5cGUiLCJwYWdlIiwiZXZlbnRzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-ga4":
/*!****************************!*\
  !*** external "react-ga4" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga4");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();