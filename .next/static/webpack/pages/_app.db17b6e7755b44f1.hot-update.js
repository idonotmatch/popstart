"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.page-container {\\n    display: flex;\\n    flex-direction: column;\\n    flex: 1 1;\\n    width: 100%;\\n}\\n\\n.container {\\n    flex: 1 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n    flex: 1 1;\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    width: 200px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 1.5em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    background-color: #fff;\\n    margin-top: auto; /* Push the footer to the bottom */\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.column {\\n    flex: 1 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.page-container {\\n    display: flex;\\n    flex-direction: column;\\n    flex: 1;\\n    width: 100%;\\n}\\n\\n.container {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n    flex: 1;\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    width: 200px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 1.5em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    background-color: #fff;\\n    margin-top: auto; /* Push the footer to the bottom */\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.column {\\n    flex: 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw2QkFBNkIsaUJBQWlCLDBDQUEwQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMkNBQTJDLFVBQVUsb0JBQW9CLDZCQUE2QixHQUFHLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdCQUFnQixrQkFBa0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixrQkFBa0Isd0JBQXdCLDZEQUE2RCw2QkFBNkIsR0FBRyxrQkFBa0Isb0JBQW9CLGtCQUFrQix1QkFBdUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixHQUFHLG1CQUFtQixzQkFBc0IseUJBQXlCLGtCQUFrQixtQkFBbUIsbUJBQW1CLHNDQUFzQyx5QkFBeUIsR0FBRyxvQkFBb0Isc0JBQXNCLGlCQUFpQixzQkFBc0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyxvQkFBb0Isa0JBQWtCLG9CQUFvQix5QkFBeUIsNkJBQTZCLGdCQUFnQixvQkFBb0Isc0JBQXNCLDJEQUEyRCxHQUFHLHFDQUFxQyx5QkFBeUIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLHFCQUFxQixvQkFBb0IseUJBQXlCLGlEQUFpRCxvREFBb0QsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixtQkFBbUIsOEJBQThCLEdBQUcseUJBQXlCLHNCQUFzQix1QkFBdUIsd0JBQXdCLDRCQUE0Qix5QkFBeUIsNERBQTRELDJGQUEyRixzQkFBc0IsdUJBQXVCLDBCQUEwQixHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRywwQkFBMEIsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsbUJBQW1CLDRCQUE0QixxQkFBcUIseUJBQXlCLEdBQUcsZ0NBQWdDLGdDQUFnQyxHQUFHLCtCQUErQixvQkFBb0IsaUNBQWlDLDZCQUE2QiwyQkFBMkIsT0FBTywwQkFBMEIscUJBQXFCLHVCQUF1QixPQUFPLHlEQUF5RCxzQkFBc0IsT0FBTyxHQUFHLCtCQUErQixvQ0FBb0MscUJBQXFCLDRCQUE0QixPQUFPLEdBQUcsOEJBQThCLG1CQUFtQixrQkFBa0IsbUJBQW1CLEdBQUcsb0JBQW9CLHFCQUFxQixrQkFBa0Isb0JBQW9CLHlCQUF5Qiw2QkFBNkIsd0JBQXdCLHNDQUFzQyxtQkFBbUIsaUNBQWlDLGtCQUFrQixzQkFBc0IsbUJBQW1CLEdBQUcsWUFBWSx5QkFBeUIseUJBQXlCLHNCQUFzQixtQkFBbUIsR0FBRyxtQkFBbUIsZ0NBQWdDLG1CQUFtQixHQUFHLHlCQUF5QixnQ0FBZ0MscUJBQXFCLEdBQUcsd0JBQXdCLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLG9CQUFvQixHQUFHLGFBQWEsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsNENBQTRDLHlFQUF5RSxvQkFBb0IsK0NBQStDLHFEQUFxRCwwQkFBMEIsb0JBQW9CLDhCQUE4Qix1QkFBdUIsR0FBRywrQkFBK0IsMEJBQTBCLGlDQUFpQyxPQUFPLEdBQUcsU0FBUywyRkFBMkYsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLHdCQUF3QixXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxzQkFBc0IsV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLHlCQUF5QixPQUFPLFFBQVEsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixhQUFhLFdBQVcsd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sOEdBQThHLDBCQUEwQixPQUFPLDZCQUE2QixpQkFBaUIsMENBQTBDLGdCQUFnQixHQUFHLGdCQUFnQixtQkFBbUIsa0JBQWtCLHdCQUF3QiwyQ0FBMkMsVUFBVSxvQkFBb0IsNkJBQTZCLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsY0FBYyxrQkFBa0IsR0FBRyxnQkFBZ0IsY0FBYyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw2REFBNkQsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQixrQkFBa0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQix3QkFBd0IsR0FBRyxtQkFBbUIsc0JBQXNCLHlCQUF5QixrQkFBa0IsbUJBQW1CLG1CQUFtQixzQ0FBc0MseUJBQXlCLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsNkJBQTZCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IseUJBQXlCLDZCQUE2QixnQkFBZ0Isb0JBQW9CLHNCQUFzQix5REFBeUQsR0FBRyxxQ0FBcUMseUJBQXlCLHNCQUFzQixxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2QixxQkFBcUIsb0JBQW9CLHlCQUF5QixpREFBaUQsb0RBQW9ELHVCQUF1Qix1QkFBdUIsR0FBRyxzQkFBc0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIscUJBQXFCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLDhCQUE4QixHQUFHLHlCQUF5QixzQkFBc0IsdUJBQXVCLHdCQUF3Qiw0QkFBNEIseUJBQXlCLDREQUE0RCwyRkFBMkYsc0JBQXNCLHVCQUF1QiwwQkFBMEIsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsMEJBQTBCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQiw0QkFBNEIscUJBQXFCLHlCQUF5QixHQUFHLGdDQUFnQyxnQ0FBZ0MsR0FBRywrQkFBK0Isb0JBQW9CLGlDQUFpQyw2QkFBNkIsMkJBQTJCLE9BQU8sMEJBQTBCLHFCQUFxQix1QkFBdUIsT0FBTyx5REFBeUQsc0JBQXNCLE9BQU8sR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw0QkFBNEIsT0FBTyxHQUFHLDhCQUE4QixtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixxQkFBcUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsNkJBQTZCLHdCQUF3QixzQ0FBc0MsbUJBQW1CLGlDQUFpQyxrQkFBa0Isc0JBQXNCLG1CQUFtQixHQUFHLFlBQVkseUJBQXlCLHlCQUF5QixzQkFBc0IsbUJBQW1CLEdBQUcsbUJBQW1CLGdDQUFnQyxtQkFBbUIsR0FBRyx5QkFBeUIsZ0NBQWdDLHFCQUFxQixHQUFHLHdCQUF3QixvQkFBb0IscUNBQXFDLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLGNBQWMsdUJBQXVCLHVCQUF1Qiw0Q0FBNEMseUVBQXlFLG9CQUFvQiwrQ0FBK0MscURBQXFELDBCQUEwQixvQkFBb0IsOEJBQThCLHVCQUF1QixHQUFHLCtCQUErQiwwQkFBMEIsaUNBQWlDLE9BQU8sR0FBRyxxQkFBcUI7QUFDempYO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCBzY3JvbGxpbmcgb2YgdGhlIGZ1bGwgcGFnZSAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMSAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDEgMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHRoZSBjb250YWluZXIgZnJvbSBzY3JvbGxpbmcgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzAwMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogQWxsb3cgc2Nyb2xsaW5nIG9mIHRoZSBzZWFyY2ggcmVzdWx0cyAqL1xcbiAgICBmbGV4OiAxIDE7XFxufVxcblxcbi5sb2FkaW5nLFxcbi5lcnJvcixcXG4ubm8tcmVzdWx0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBtaW4taGVpZ2h0OiAxLjVlbTsgLyogRW5zdXJlIHR3byBsaW5lcyBldmVuIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBjb250ZW50ICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuYnJhbmQsXFxuLnJlc3VsdC1pdGVtIC5yYXRpbmcsXFxuLnJlc3VsdC1pdGVtIC5wcmljZSxcXG4ucmVzdWx0LWl0ZW0gLmxpbmsge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yZXN1bHQtaXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIC5kZXRhaWxzLFxcbiAgICAucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgfVxcbn1cXG5cXG4uZ2xvYmFsLWhlYWRlciAubG9nbyBpbWcge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5nbG9iYWwtZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87IC8qIFB1c2ggdGhlIGZvb3RlciB0byB0aGUgYm90dG9tICovXFxufVxcblxcbi5mb290ZXItbmF2IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICBmbGV4OiAxIDE7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogRmFpbnQgYm9yZGVyIGZvciBpbmRpdmlkdWFsIHNlYXJjaCBjb2x1bW5zICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyAvKiBPcHRpb25hbDogZmFpbnQgc2hhZG93IGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xcbn1cXG5cXG4ubG9hZC1tb3JlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4R0FBOEc7O0FBRTlHO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0IsRUFBRSx1Q0FBdUM7QUFDN0Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUseUNBQXlDO0lBQzNELFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYixjQUFjLEVBQUUsMENBQTBDO0lBQzFELFNBQU87QUFDWDs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsNkNBQTZDO0lBQzdDLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFFLHdEQUF3RDtBQUMvRTs7QUFFQTs7OztJQUlJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBOztRQUVJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQixFQUFFLGtDQUFrQztBQUN4RDs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixvQ0FBb0MsRUFBRSwrQ0FBK0M7SUFDckYsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1Q0FBdUMsRUFBRSxpREFBaUQ7QUFDOUY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHNjcm9sbGluZyBvZiB0aGUgZnVsbCBwYWdlICovXFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCB0aGUgY29udGFpbmVyIGZyb20gc2Nyb2xsaW5nICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwMDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG4jc2VhcmNoUmVzdWx0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEFsbG93IHNjcm9sbGluZyBvZiB0aGUgc2VhcmNoIHJlc3VsdHMgKi9cXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmxvYWRpbmcsXFxuLmVycm9yLFxcbi5uby1yZXN1bHRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxufVxcblxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEuNWVtOyAvKiBFbnN1cmUgdHdvIGxpbmVzIGV2ZW4gaWYgdGhlcmUncyBub3QgZW5vdWdoIGNvbnRlbnQgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5icmFuZCxcXG4ucmVzdWx0LWl0ZW0gLnJhdGluZyxcXG4ucmVzdWx0LWl0ZW0gLnByaWNlLFxcbi5yZXN1bHQtaXRlbSAubGluayB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnJlc3VsdC1pdGVtIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gLmRldGFpbHMsXFxuICAgIC5yZXN1bHQtaXRlbSAucHJpY2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zZWFyY2gtZm9ybSwgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICB9XFxufVxcblxcbi5nbG9iYWwtaGVhZGVyIC5sb2dvIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmdsb2JhbC1mb290ZXIge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgLyogUHVzaCB0aGUgZm9vdGVyIHRvIHRoZSBib3R0b20gKi9cXG59XFxuXFxuLmZvb3Rlci1uYXYgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogRmFpbnQgYm9yZGVyIGZvciBpbmRpdmlkdWFsIHNlYXJjaCBjb2x1bW5zICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyAvKiBPcHRpb25hbDogZmFpbnQgc2hhZG93IGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xcbn1cXG5cXG4ubG9hZC1tb3JlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});