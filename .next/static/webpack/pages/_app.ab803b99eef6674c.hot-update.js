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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.page-container {\\n    display: flex;\\n    flex-direction: column;\\n    flex: 1 1;\\n    width: 100%;\\n}\\n\\n.container {\\n    flex: 1 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n    flex: 1 1;\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    width: 200px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 3em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    background-color: #fff;\\n    margin-top: auto; /* Push the footer to the bottom */\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n    border-radius: 8px;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.column {\\n    flex: 1 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.page-container {\\n    display: flex;\\n    flex-direction: column;\\n    flex: 1;\\n    width: 100%;\\n}\\n\\n.container {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n    flex: 1;\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    width: 200px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 3em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    background-color: #fff;\\n    margin-top: auto; /* Push the footer to the bottom */\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n    border-radius: 8px;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.column {\\n    flex: 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw2QkFBNkIsaUJBQWlCLDBDQUEwQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMkNBQTJDLFVBQVUsb0JBQW9CLDZCQUE2QixHQUFHLHFCQUFxQixvQkFBb0IsNkJBQTZCLGdCQUFnQixrQkFBa0IsR0FBRyxnQkFBZ0IsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixrQkFBa0Isd0JBQXdCLDZEQUE2RCw2QkFBNkIsR0FBRyxrQkFBa0Isb0JBQW9CLGtCQUFrQix1QkFBdUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixHQUFHLG1CQUFtQixzQkFBc0IseUJBQXlCLGtCQUFrQixtQkFBbUIsbUJBQW1CLHNDQUFzQyx5QkFBeUIsR0FBRyxvQkFBb0Isc0JBQXNCLGlCQUFpQixzQkFBc0IsbUJBQW1CLHlCQUF5Qiw2QkFBNkIsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyxvQkFBb0Isa0JBQWtCLG9CQUFvQix5QkFBeUIsNkJBQTZCLGdCQUFnQixvQkFBb0Isc0JBQXNCLDJEQUEyRCxHQUFHLHFDQUFxQyx5QkFBeUIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLHFCQUFxQixvQkFBb0IseUJBQXlCLGlEQUFpRCxvREFBb0QsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixtQkFBbUIsOEJBQThCLEdBQUcseUJBQXlCLHNCQUFzQix1QkFBdUIsd0JBQXdCLDRCQUE0Qix1QkFBdUIsNERBQTRELDJGQUEyRixzQkFBc0IsdUJBQXVCLDBCQUEwQixHQUFHLHdCQUF3Qix1QkFBdUIsR0FBRywwQkFBMEIsNEJBQTRCLHdCQUF3QixnQ0FBZ0MsbUJBQW1CLDRCQUE0QixxQkFBcUIseUJBQXlCLEdBQUcsZ0NBQWdDLGdDQUFnQyxHQUFHLCtCQUErQixvQkFBb0IsaUNBQWlDLDZCQUE2QiwyQkFBMkIsT0FBTywwQkFBMEIscUJBQXFCLHVCQUF1QixPQUFPLHlEQUF5RCxzQkFBc0IsT0FBTyxHQUFHLCtCQUErQixvQ0FBb0MscUJBQXFCLDRCQUE0QixPQUFPLEdBQUcsOEJBQThCLG1CQUFtQixrQkFBa0IsbUJBQW1CLEdBQUcsb0JBQW9CLHFCQUFxQixrQkFBa0Isb0JBQW9CLHlCQUF5Qiw2QkFBNkIsd0JBQXdCLHNDQUFzQyxtQkFBbUIsaUNBQWlDLGtCQUFrQixzQkFBc0IsbUJBQW1CLEdBQUcsWUFBWSx5QkFBeUIseUJBQXlCLHNCQUFzQixtQkFBbUIseUJBQXlCLEdBQUcsbUJBQW1CLGdDQUFnQyxtQkFBbUIsR0FBRyx5QkFBeUIsZ0NBQWdDLHFCQUFxQixHQUFHLHdCQUF3QixvQkFBb0IscUNBQXFDLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLGdCQUFnQix1QkFBdUIsdUJBQXVCLDRDQUE0Qyx5RUFBeUUsb0JBQW9CLCtDQUErQyxxREFBcUQsMEJBQTBCLG9CQUFvQiw4QkFBOEIsdUJBQXVCLEdBQUcsK0JBQStCLDBCQUEwQixpQ0FBaUMsT0FBTyxHQUFHLFNBQVMsMkZBQTJGLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLHdCQUF3QixPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyx3QkFBd0IsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsc0JBQXNCLFdBQVcsTUFBTSxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsT0FBTyxRQUFRLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixhQUFhLFdBQVcsd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sOEdBQThHLDBCQUEwQixPQUFPLDZCQUE2QixpQkFBaUIsMENBQTBDLGdCQUFnQixHQUFHLGdCQUFnQixtQkFBbUIsa0JBQWtCLHdCQUF3QiwyQ0FBMkMsVUFBVSxvQkFBb0IsNkJBQTZCLEdBQUcscUJBQXFCLG9CQUFvQiw2QkFBNkIsY0FBYyxrQkFBa0IsR0FBRyxnQkFBZ0IsY0FBYyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHdCQUF3Qiw2REFBNkQsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQixrQkFBa0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQix3QkFBd0IsR0FBRyxtQkFBbUIsc0JBQXNCLHlCQUF5QixrQkFBa0IsbUJBQW1CLG1CQUFtQixzQ0FBc0MseUJBQXlCLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsNkJBQTZCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IseUJBQXlCLDZCQUE2QixnQkFBZ0Isb0JBQW9CLHNCQUFzQix5REFBeUQsR0FBRyxxQ0FBcUMseUJBQXlCLHNCQUFzQixxQkFBcUIsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2QixxQkFBcUIsb0JBQW9CLHlCQUF5QixpREFBaUQsb0RBQW9ELHVCQUF1Qix1QkFBdUIsR0FBRyxzQkFBc0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIscUJBQXFCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLDhCQUE4QixHQUFHLHlCQUF5QixzQkFBc0IsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDREQUE0RCwyRkFBMkYsc0JBQXNCLHVCQUF1QiwwQkFBMEIsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsMEJBQTBCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQiw0QkFBNEIscUJBQXFCLHlCQUF5QixHQUFHLGdDQUFnQyxnQ0FBZ0MsR0FBRywrQkFBK0Isb0JBQW9CLGlDQUFpQyw2QkFBNkIsMkJBQTJCLE9BQU8sMEJBQTBCLHFCQUFxQix1QkFBdUIsT0FBTyx5REFBeUQsc0JBQXNCLE9BQU8sR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw0QkFBNEIsT0FBTyxHQUFHLDhCQUE4QixtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixxQkFBcUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsNkJBQTZCLHdCQUF3QixzQ0FBc0MsbUJBQW1CLGlDQUFpQyxrQkFBa0Isc0JBQXNCLG1CQUFtQixHQUFHLFlBQVkseUJBQXlCLHlCQUF5QixzQkFBc0IsbUJBQW1CLHlCQUF5QixHQUFHLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLEdBQUcseUJBQXlCLGdDQUFnQyxxQkFBcUIsR0FBRyx3QkFBd0Isb0JBQW9CLHFDQUFxQyxnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSxjQUFjLHVCQUF1Qix1QkFBdUIsNENBQTRDLHlFQUF5RSxvQkFBb0IsK0NBQStDLHFEQUFxRCwwQkFBMEIsb0JBQW9CLDhCQUE4Qix1QkFBdUIsR0FBRywrQkFBK0IsMEJBQTBCLGlDQUFpQyxPQUFPLEdBQUcscUJBQXFCO0FBQ2puWDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgc2Nyb2xsaW5nIG9mIHRoZSBmdWxsIHBhZ2UgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBmbGV4OiAxIDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCB0aGUgY29udGFpbmVyIGZyb20gc2Nyb2xsaW5nICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwMDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG4jc2VhcmNoUmVzdWx0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEFsbG93IHNjcm9sbGluZyBvZiB0aGUgc2VhcmNoIHJlc3VsdHMgKi9cXG4gICAgZmxleDogMSAxO1xcbn1cXG5cXG4ubG9hZGluZyxcXG4uZXJyb3IsXFxuLm5vLXJlc3VsdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWluLWhlaWdodDogM2VtOyAvKiBFbnN1cmUgdHdvIGxpbmVzIGV2ZW4gaWYgdGhlcmUncyBub3QgZW5vdWdoIGNvbnRlbnQgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5icmFuZCxcXG4ucmVzdWx0LWl0ZW0gLnJhdGluZyxcXG4ucmVzdWx0LWl0ZW0gLnByaWNlLFxcbi5yZXN1bHQtaXRlbSAubGluayB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnJlc3VsdC1pdGVtIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gLmRldGFpbHMsXFxuICAgIC5yZXN1bHQtaXRlbSAucHJpY2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zZWFyY2gtZm9ybSwgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICB9XFxufVxcblxcbi5nbG9iYWwtaGVhZGVyIC5sb2dvIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmdsb2JhbC1mb290ZXIge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgLyogUHVzaCB0aGUgZm9vdGVyIHRvIHRoZSBib3R0b20gKi9cXG59XFxuXFxuLmZvb3Rlci1uYXYgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5idXR0b24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgZmxleDogMSAxO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEZhaW50IGJvcmRlciBmb3IgaW5kaXZpZHVhbCBzZWFyY2ggY29sdW1ucyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgLyogT3B0aW9uYWw6IGZhaW50IHNoYWRvdyBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cXG59XFxuXFxuLmxvYWQtbW9yZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEdBQThHOztBQUU5RztJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsdUNBQXVDO0FBQzdEOztBQUVBO0lBQ0ks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QWdCO0lBQ2hCLG9DQUFvQyxFQUFFLCtDQUErQztJQUNyRixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVDQUF1QyxFQUFFLGlEQUFpRDtBQUM5Rjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgc2Nyb2xsaW5nIG9mIHRoZSBmdWxsIHBhZ2UgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHRoZSBjb250YWluZXIgZnJvbSBzY3JvbGxpbmcgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzAwMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogQWxsb3cgc2Nyb2xsaW5nIG9mIHRoZSBzZWFyY2ggcmVzdWx0cyAqL1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubG9hZGluZyxcXG4uZXJyb3IsXFxuLm5vLXJlc3VsdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWluLWhlaWdodDogM2VtOyAvKiBFbnN1cmUgdHdvIGxpbmVzIGV2ZW4gaWYgdGhlcmUncyBub3QgZW5vdWdoIGNvbnRlbnQgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5icmFuZCxcXG4ucmVzdWx0LWl0ZW0gLnJhdGluZyxcXG4ucmVzdWx0LWl0ZW0gLnByaWNlLFxcbi5yZXN1bHQtaXRlbSAubGluayB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnJlc3VsdC1pdGVtIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gLmRldGFpbHMsXFxuICAgIC5yZXN1bHQtaXRlbSAucHJpY2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zZWFyY2gtZm9ybSwgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICB9XFxufVxcblxcbi5nbG9iYWwtaGVhZGVyIC5sb2dvIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmdsb2JhbC1mb290ZXIge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bzsgLyogUHVzaCB0aGUgZm9vdGVyIHRvIHRoZSBib3R0b20gKi9cXG59XFxuXFxuLmZvb3Rlci1uYXYgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5idXR0b24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBGYWludCBib3JkZXIgZm9yIGluZGl2aWR1YWwgc2VhcmNoIGNvbHVtbnMgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IC8qIE9wdGlvbmFsOiBmYWludCBzaGFkb3cgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXFxufVxcblxcbi5sb2FkLW1vcmUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAucmVzdWx0cy1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});