"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction HomePage() {\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchAttempted, setSearchAttempted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Add state to store the fetched data\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        setLoading(true);\n        setError(\"\");\n        setSearchAttempted(true);\n        try {\n            const response = await fetch(\"/api/search\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    searchTerm\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n            const jsonData = await response.json(); // Use jsonData to avoid naming confusion\n            setData(jsonData); // Store the entire response data\n            if (!jsonData.search_results || jsonData.search_results.length === 0) {\n                setError(\"No results found\");\n                setResults([]);\n            } else {\n                setResults(jsonData.search_results); // Store only search results for displaying\n                setError(\"\");\n            }\n        } catch (err) {\n            console.error(\"Fetch error:\", err);\n            setError(\"Failed to fetch results\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSearch,\n                className: \"search-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"search-input\",\n                        value: searchTerm,\n                        onChange: (e)=>setSearchTerm(e.target.value),\n                        placeholder: \"What are we looking for today?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"search-button\",\n                        children: \"Let's Go\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"searchResults\",\n                children: [\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Error: \",\n                            error\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 19\n                    }, this),\n                    results.length > 0 ? results.map((item, index)=>/*#__PURE__*/ {\n                        var _item_price;\n                        var _item_price_raw;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"result-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.image,\n                                    alt: item.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"details\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.brand\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Rating: \",\n                                                item.rating,\n                                                \" (\",\n                                                item.ratings_total,\n                                                \" reviews)\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        item.delivery && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"delivery-tagline\",\n                                            children: item.delivery.tagline\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"price\",\n                                    children: [\n                                        \"Price: \",\n                                        (_item_price_raw = (_item_price = item.price) === null || _item_price === void 0 ? void 0 : _item_price.raw) !== null && _item_price_raw !== void 0 ? _item_price_raw : \"not available\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: item.link,\n                                    target: \"_blank\",\n                                    rel: \"noreferrer\",\n                                    children: \"View Product\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                data && data.shopping_advisors && data.shopping_advisors[index] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"trusted-feedback\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: data.shopping_advisors[index].link,\n                                        target: \"_blank\",\n                                        rel: \"noreferrer\",\n                                        children: data.shopping_advisors[index].article.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, item.asin, true, {\n                            fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this);\n                    }) : searchAttempted && !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No results found. Try another search.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 42\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dangnguyen/popstart/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"dPes8UpGoDt/7gqLz/gC8vNBP5k=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZDtvQ0FBRVgsV0FBVTs7d0NBQVE7d0NBQVFhLENBQUFBLG1CQUFBQSxjQUFBQSxLQUFLYSxLQUFLLGNBQVZiLGtDQUFBQSxZQUFZYyxHQUFHLGNBQWZkLDZCQUFBQSxrQkFBbUI7Ozs7Ozs7OENBQ2hELDhEQUFDZTtvQ0FBRUMsTUFBTWhCLEtBQUtpQixJQUFJO29DQUFFdkIsUUFBTztvQ0FBU3dCLEtBQUk7OENBQWE7Ozs7OztnQ0FDcERyRCxRQUFRQSxLQUFLc0QsaUJBQWlCLElBQUl0RCxLQUFLc0QsaUJBQWlCLENBQUNsQixNQUFNLGtCQUM5RCw4REFBQ2Y7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUM0Qjt3Q0FBRUMsTUFBTW5ELEtBQUtzRCxpQkFBaUIsQ0FBQ2xCLE1BQU0sQ0FBQ2dCLElBQUk7d0NBQUV2QixRQUFPO3dDQUFTd0IsS0FBSTtrREFDOURyRCxLQUFLc0QsaUJBQWlCLENBQUNsQixNQUFNLENBQUNtQixPQUFPLENBQUNkLEtBQUs7Ozs7Ozs7Ozs7OzsyQkFmMUNOLEtBQUtxQixJQUFJOzs7OztvQkFtQmQsS0FHUDFELG1CQUFtQixDQUFDTix5QkFBVyw4REFBQ3lDO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUM7R0F0RlM1QztLQUFBQTtBQXdGVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhcmNoQXR0ZW1wdGVkLCBzZXRTZWFyY2hBdHRlbXB0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTsgIC8vIEFkZCBzdGF0ZSB0byBzdG9yZSB0aGUgZmV0Y2hlZCBkYXRhXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gICAgc2V0U2VhcmNoQXR0ZW1wdGVkKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VhcmNoJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc2VhcmNoVGVybSB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIFVzZSBqc29uRGF0YSB0byBhdm9pZCBuYW1pbmcgY29uZnVzaW9uXG4gICAgICBzZXREYXRhKGpzb25EYXRhKTsgIC8vIFN0b3JlIHRoZSBlbnRpcmUgcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKCFqc29uRGF0YS5zZWFyY2hfcmVzdWx0cyB8fCBqc29uRGF0YS5zZWFyY2hfcmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0RXJyb3IoJ05vIHJlc3VsdHMgZm91bmQnKTtcbiAgICAgICAgc2V0UmVzdWx0cyhbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRSZXN1bHRzKGpzb25EYXRhLnNlYXJjaF9yZXN1bHRzKTsgLy8gU3RvcmUgb25seSBzZWFyY2ggcmVzdWx0cyBmb3IgZGlzcGxheWluZ1xuICAgICAgICBzZXRFcnJvcignJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBlcnJvcjonLCBlcnIpO1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCByZXN1bHRzJyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgd2UgbG9va2luZyBmb3IgdG9kYXk/XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPkxldCdzIEdvPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2IGlkPVwic2VhcmNoUmVzdWx0c1wiPlxuICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAge2Vycm9yICYmIDxwPkVycm9yOiB7ZXJyb3J9PC9wPn1cbiAgICAgICAge3Jlc3VsdHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICByZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmFzaW59IGNsYXNzTmFtZT1cInJlc3VsdC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0udGl0bGV9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxoMj57aXRlbS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPntpdGVtLmJyYW5kfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5SYXRpbmc6IHtpdGVtLnJhdGluZ30gKHtpdGVtLnJhdGluZ3NfdG90YWx9IHJldmlld3MpPC9wPlxuICAgICAgICAgICAgICAgIHtpdGVtLmRlbGl2ZXJ5ICYmIChcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlbGl2ZXJ5LXRhZ2xpbmVcIj57aXRlbS5kZWxpdmVyeS50YWdsaW5lfTwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj5QcmljZToge2l0ZW0ucHJpY2U/LnJhdyA/PyAnbm90IGF2YWlsYWJsZSd9PC9wPlxuICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIj5WaWV3IFByb2R1Y3Q8L2E+XG4gICAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuc2hvcHBpbmdfYWR2aXNvcnMgJiYgZGF0YS5zaG9wcGluZ19hZHZpc29yc1tpbmRleF0gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJ1c3RlZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZGF0YS5zaG9wcGluZ19hZHZpc29yc1tpbmRleF0ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zaG9wcGluZ19hZHZpc29yc1tpbmRleF0uYXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgc2VhcmNoQXR0ZW1wdGVkICYmICFsb2FkaW5nICYmIDxwPk5vIHJlc3VsdHMgZm91bmQuIFRyeSBhbm90aGVyIHNlYXJjaC48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsInNlYXJjaEF0dGVtcHRlZCIsInNldFNlYXJjaEF0dGVtcHRlZCIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uRGF0YSIsImpzb24iLCJzZWFyY2hfcmVzdWx0cyIsImxlbmd0aCIsImVyciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJpZCIsInAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaDIiLCJicmFuZCIsInJhdGluZyIsInJhdGluZ3NfdG90YWwiLCJkZWxpdmVyeSIsInRhZ2xpbmUiLCJwcmljZSIsInJhdyIsImEiLCJocmVmIiwibGluayIsInJlbCIsInNob3BwaW5nX2Fkdmlzb3JzIiwiYXJ0aWNsZSIsImFzaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});