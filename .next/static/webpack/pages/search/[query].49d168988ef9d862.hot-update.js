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

/***/ "./pages/search/[query].js":
/*!*********************************!*\
  !*** ./pages/search/[query].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer */ \"./components/footer.js\");\n/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive */ \"./node_modules/react-responsive/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SearchPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { query } = router.query;\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query || \"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredResults, setFilteredResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [hasMore, setHasMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const isDesktop = (0,react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)({\n        minWidth: 768\n    });\n    const fetchResults = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        if (!query) return;\n        setLoading(true);\n        try {\n            const response = await fetch(\"/api/search?term=\".concat(encodeURIComponent(query), \"&page=\").concat(page), {\n                method: \"GET\"\n            });\n            if (!response.ok) throw new Error(\"Network response was not ok\");\n            const data = await response.json();\n            if (!data.results) throw new Error(\"Invalid API response\");\n            console.log(\"Fetched data:\", data);\n            setResults((prevResults)=>page === 1 ? data.results : [\n                    ...prevResults,\n                    ...data.results\n                ]);\n            setHasMore(data.results.length > 0);\n            setError(\"\");\n        } catch (error) {\n            setError(error.message);\n            setResults([]);\n            setHasMore(false);\n        } finally{\n            setLoading(false);\n        }\n    }, [\n        query,\n        page\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (query) {\n            fetchResults();\n        }\n    }, [\n        query,\n        page,\n        fetchResults\n    ]);\n    const handleSearch = (e)=>{\n        e.preventDefault();\n        if (searchTerm.trim()) {\n            router.push(\"/search/\".concat(encodeURIComponent(searchTerm)));\n        } else {\n            setError(\"Please enter a valid search term\");\n        }\n    };\n    const filterAndAlternateResults = ()=>{\n        const amazonResults = results.filter((result)=>result.link.includes(\"amazon.com\"));\n        const walmartResults = results.filter((result)=>result.link.includes(\"walmart.com\"));\n        if (activeTab === \"all\") {\n            const alternated = [];\n            const maxLength = Math.max(amazonResults.length, walmartResults.length);\n            for(let i = 0; i < maxLength; i++){\n                if (amazonResults[i]) alternated.push(amazonResults[i]);\n                if (walmartResults[i]) alternated.push(walmartResults[i]);\n            }\n            setFilteredResults(alternated);\n        } else if (activeTab === \"amazon\") {\n            setFilteredResults(amazonResults);\n        } else if (activeTab === \"walmart\") {\n            setFilteredResults(walmartResults);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        filterAndAlternateResults();\n    }, [\n        results,\n        activeTab\n    ]);\n    const renderResults = (results)=>{\n        return results.map((item, index)=>{\n            // Debug log the entire item\n            console.log(\"Item:\", item);\n            const { title, price, image, link, rating, brand } = item;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"result-item\",\n                children: [\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: title\n                    }, void 0, false, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"details\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"brand\",\n                                children: brand\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"title\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rating\",\n                        children: [\n                            \"Rating: \",\n                            rating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price\",\n                        children: [\n                            \"Price: \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"link\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: link,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: [\n                                \"View on \",\n                                link.includes(\"amazon.com\") ? \"Amazon\" : \"Walmart\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"search-form\",\n                        onSubmit: handleSearch,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"search-input\",\n                                placeholder: \"Search...\",\n                                value: searchTerm,\n                                onChange: (e)=>setSearchTerm(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"search-button\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 127,\n                        columnNumber: 19\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"results-container\",\n                        children: [\n                            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 130,\n                                columnNumber: 23\n                            }, this),\n                            !loading && filteredResults.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No results found\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 132,\n                                columnNumber: 56\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"tabs\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: activeTab === \"all\" ? \"active\" : \"\",\n                                        onClick: ()=>setActiveTab(\"all\"),\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                        lineNumber: 135,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: activeTab === \"amazon\" ? \"active\" : \"\",\n                                        onClick: ()=>setActiveTab(\"amazon\"),\n                                        children: \"Amazon\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                        lineNumber: 136,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: activeTab === \"walmart\" ? \"active\" : \"\",\n                                        onClick: ()=>setActiveTab(\"walmart\"),\n                                        children: \"Walmart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                        lineNumber: 137,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"searchResults\",\n                                className: \"results-list \".concat(isDesktop ? \"desktop\" : \"mobile\"),\n                                children: renderResults(filteredResults)\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 140,\n                                columnNumber: 11\n                            }, this),\n                            !loading && hasMore && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setPage((prevPage)=>prevPage + 1),\n                                children: \"Load More\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                                lineNumber: 145,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dangnguyen/popstart/pages/search/[query].js\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(SearchPage, \"HHj9q+lnl6w6Uvoq9aStdI7vlqg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_responsive__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery\n    ];\n});\n_c = SearchPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchPage);\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ21FLFdBQWFBLFdBQVc7MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEUsOERBQUNuRiwwREFBTUE7Ozs7Ozs7QUFHYjtHQWpKU0U7O1FBQ1FKLGtEQUFTQTtRQVdORywyREFBYUE7OztLQVp4QkM7QUFtSlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1txdWVyeV0uanM/YTc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xuXG5mdW5jdGlvbiBTZWFyY2hQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShxdWVyeSB8fCAnJyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsdGVyZWRSZXN1bHRzLCBzZXRGaWx0ZXJlZFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCdhbGwnKTtcblxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHsgbWluV2lkdGg6IDc2OCB9KTtcblxuICBjb25zdCBmZXRjaFJlc3VsdHMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFxdWVyeSkgcmV0dXJuO1xuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9zZWFyY2g/dGVybT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9JnBhZ2U9JHtwYWdlfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmICghZGF0YS5yZXN1bHRzKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQVBJIHJlc3BvbnNlJyk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkIGRhdGE6JywgZGF0YSk7XG5cbiAgICAgIHNldFJlc3VsdHMocHJldlJlc3VsdHMgPT4gKHBhZ2UgPT09IDEgPyBkYXRhLnJlc3VsdHMgOiBbLi4ucHJldlJlc3VsdHMsIC4uLmRhdGEucmVzdWx0c10pKTtcbiAgICAgIHNldEhhc01vcmUoZGF0YS5yZXN1bHRzLmxlbmd0aCA+IDApO1xuICAgICAgc2V0RXJyb3IoJycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIHNldFJlc3VsdHMoW10pO1xuICAgICAgc2V0SGFzTW9yZShmYWxzZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5LCBwYWdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIGZldGNoUmVzdWx0cygpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5LCBwYWdlLCBmZXRjaFJlc3VsdHNdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc2VhcmNoVGVybS50cmltKCkpIHtcbiAgICAgIHJvdXRlci5wdXNoKGAvc2VhcmNoLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaFRlcm0pfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcignUGxlYXNlIGVudGVyIGEgdmFsaWQgc2VhcmNoIHRlcm0nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQW5kQWx0ZXJuYXRlUmVzdWx0cyA9ICgpID0+IHtcbiAgICBjb25zdCBhbWF6b25SZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdC5saW5rLmluY2x1ZGVzKCdhbWF6b24uY29tJykpO1xuICAgIGNvbnN0IHdhbG1hcnRSZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIocmVzdWx0ID0+IHJlc3VsdC5saW5rLmluY2x1ZGVzKCd3YWxtYXJ0LmNvbScpKTtcblxuICAgIGlmIChhY3RpdmVUYWIgPT09ICdhbGwnKSB7XG4gICAgICBjb25zdCBhbHRlcm5hdGVkID0gW107XG4gICAgICBjb25zdCBtYXhMZW5ndGggPSBNYXRoLm1heChhbWF6b25SZXN1bHRzLmxlbmd0aCwgd2FsbWFydFJlc3VsdHMubGVuZ3RoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYW1hem9uUmVzdWx0c1tpXSkgYWx0ZXJuYXRlZC5wdXNoKGFtYXpvblJlc3VsdHNbaV0pO1xuICAgICAgICBpZiAod2FsbWFydFJlc3VsdHNbaV0pIGFsdGVybmF0ZWQucHVzaCh3YWxtYXJ0UmVzdWx0c1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHNldEZpbHRlcmVkUmVzdWx0cyhhbHRlcm5hdGVkKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVRhYiA9PT0gJ2FtYXpvbicpIHtcbiAgICAgIHNldEZpbHRlcmVkUmVzdWx0cyhhbWF6b25SZXN1bHRzKTtcbiAgICB9IGVsc2UgaWYgKGFjdGl2ZVRhYiA9PT0gJ3dhbG1hcnQnKSB7XG4gICAgICBzZXRGaWx0ZXJlZFJlc3VsdHMod2FsbWFydFJlc3VsdHMpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZpbHRlckFuZEFsdGVybmF0ZVJlc3VsdHMoKTtcbiAgfSwgW3Jlc3VsdHMsIGFjdGl2ZVRhYl0pO1xuXG4gIGNvbnN0IHJlbmRlclJlc3VsdHMgPSAocmVzdWx0cykgPT4ge1xuICAgIHJldHVybiByZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIC8vIERlYnVnIGxvZyB0aGUgZW50aXJlIGl0ZW1cbiAgICAgIGNvbnNvbGUubG9nKCdJdGVtOicsIGl0ZW0pO1xuXG4gICAgICBjb25zdCB7IHRpdGxlLCBwcmljZSwgaW1hZ2UsIGxpbmssIHJhdGluZywgYnJhbmQgfSA9IGl0ZW07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVzdWx0LWl0ZW1cIj5cbiAgICAgICAgICB7aW1hZ2UgJiYgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj57YnJhbmR9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+UmF0aW5nOiB7cmF0aW5nfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5QcmljZToge3ByaWNlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlZpZXcgb24ge2xpbmsuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSA/ICdBbWF6b24nIDogJ1dhbG1hcnQnfTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge2Vycm9yICYmIDxkaXY+e2Vycm9yfTwvZGl2Pn1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG5cbiAgICAgICAgICB7IWxvYWRpbmcgJiYgZmlsdGVyZWRSZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiA8cD5ObyByZXN1bHRzIGZvdW5kPC9wPn1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gJ2FsbCcgPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ2FsbCcpfT5BbGw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09ICdhbWF6b24nID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhbWF6b24nKX0+QW1hem9uPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09PSAnd2FsbWFydCcgPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ3dhbG1hcnQnKX0+V2FsbWFydDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBpZD1cInNlYXJjaFJlc3VsdHNcIiBjbGFzc05hbWU9e2ByZXN1bHRzLWxpc3QgJHtpc0Rlc2t0b3AgPyAnZGVza3RvcCcgOiAnbW9iaWxlJ31gfT5cbiAgICAgICAgICAgIHtyZW5kZXJSZXN1bHRzKGZpbHRlcmVkUmVzdWx0cyl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7IWxvYWRpbmcgJiYgaGFzTW9yZSAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoKHByZXZQYWdlKSA9PiBwcmV2UGFnZSArIDEpfT5Mb2FkIE1vcmU8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJvdXRlciIsIkhlYWRlciIsIkZvb3RlciIsInVzZU1lZGlhUXVlcnkiLCJTZWFyY2hQYWdlIiwicm91dGVyIiwicXVlcnkiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJmaWx0ZXJlZFJlc3VsdHMiLCJzZXRGaWx0ZXJlZFJlc3VsdHMiLCJlcnJvciIsInNldEVycm9yIiwicGFnZSIsInNldFBhZ2UiLCJoYXNNb3JlIiwic2V0SGFzTW9yZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImlzRGVza3RvcCIsIm1pbldpZHRoIiwiZmV0Y2hSZXN1bHRzIiwicmVzcG9uc2UiLCJmZXRjaCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcmV2UmVzdWx0cyIsImxlbmd0aCIsIm1lc3NhZ2UiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwicHVzaCIsImZpbHRlckFuZEFsdGVybmF0ZVJlc3VsdHMiLCJhbWF6b25SZXN1bHRzIiwiZmlsdGVyIiwicmVzdWx0IiwibGluayIsImluY2x1ZGVzIiwid2FsbWFydFJlc3VsdHMiLCJhbHRlcm5hdGVkIiwibWF4TGVuZ3RoIiwiTWF0aCIsIm1heCIsImkiLCJyZW5kZXJSZXN1bHRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJwcmljZSIsImltYWdlIiwicmF0aW5nIiwiYnJhbmQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInAiLCJvbkNsaWNrIiwiaWQiLCJwcmV2UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search/[query].js\n"));

/***/ })

});