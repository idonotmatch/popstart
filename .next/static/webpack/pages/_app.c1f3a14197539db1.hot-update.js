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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\n.container {\\n    flex: 1 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    min-height: 100vh; /* Ensure the container takes full viewport height */\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    margin: 0 auto;\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    padding: 10px;\\n    width: 160px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n    /* margin-right: 20px; */\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 2em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n    background-color: #fff;\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); Optional: faint shadow for better visibility */\\n}\\n\\n.column {\\n    flex: 1 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\n.container {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    min-height: 100vh; /* Ensure the container takes full viewport height */\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    margin: 0 auto;\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    padding: 10px;\\n    width: 160px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n    /* margin-right: 20px; */\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 2em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n    background-color: #fff;\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); Optional: faint shadow for better visibility */\\n}\\n\\n.column {\\n    flex: 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw2QkFBNkIsaUJBQWlCLDBDQUEwQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMkNBQTJDLGdCQUFnQixnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGtCQUFrQix5QkFBeUIsNkVBQTZFLCtEQUErRCxtQkFBbUIsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQixrQkFBa0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQix3QkFBd0IsR0FBRyxtQkFBbUIsc0JBQXNCLHlCQUF5QixrQkFBa0IsbUJBQW1CLG1CQUFtQixzQ0FBc0MseUJBQXlCLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsNkJBQTZCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IseUJBQXlCLDZCQUE2QixnQkFBZ0Isb0JBQW9CLHNCQUFzQiw4Q0FBOEMscUNBQXFDLHlCQUF5QixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIscUJBQXFCLG9CQUFvQix5QkFBeUIsaURBQWlELG9EQUFvRCx1QkFBdUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixtQkFBbUIsOEJBQThCLDZCQUE2QixLQUFLLHlCQUF5QixzQkFBc0IsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDREQUE0RCwyRkFBMkYsc0JBQXNCLHVCQUF1QiwwQkFBMEIsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsMEJBQTBCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQiw0QkFBNEIscUJBQXFCLHlCQUF5QixHQUFHLGdDQUFnQyxnQ0FBZ0MsR0FBRywrQkFBK0Isb0JBQW9CLGlDQUFpQyw2QkFBNkIsMkJBQTJCLE9BQU8sMEJBQTBCLHFCQUFxQix1QkFBdUIsT0FBTyx5REFBeUQsc0JBQXNCLE9BQU8sR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw0QkFBNEIsT0FBTyxHQUFHLDhCQUE4QixtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixxQkFBcUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsc0JBQXNCLGdCQUFnQixjQUFjLDZCQUE2QixHQUFHLG1CQUFtQixpQ0FBaUMsa0JBQWtCLHNCQUFzQixtQkFBbUIsR0FBRyxZQUFZLHlCQUF5Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixHQUFHLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLEdBQUcseUJBQXlCLGdDQUFnQyxxQkFBcUIsR0FBRyx3QkFBd0Isb0JBQW9CLHFDQUFxQyxnQkFBZ0Isb0JBQW9CLG1EQUFtRCxrREFBa0QsYUFBYSxnQkFBZ0IsdUJBQXVCLHVCQUF1Qiw0Q0FBNEMseUVBQXlFLG9CQUFvQiwrQ0FBK0MscURBQXFELDBCQUEwQixvQkFBb0IsOEJBQThCLHVCQUF1QixHQUFHLCtCQUErQiwwQkFBMEIsaUNBQWlDLE9BQU8sR0FBRyxTQUFTLDJGQUEyRixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLHdCQUF3Qix5QkFBeUIsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxzQkFBc0IsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsdUJBQXVCLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixhQUFhLFdBQVcsd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sOEdBQThHLDBCQUEwQixPQUFPLDZCQUE2QixpQkFBaUIsMENBQTBDLGdCQUFnQixHQUFHLGdCQUFnQixtQkFBbUIsa0JBQWtCLHdCQUF3QiwyQ0FBMkMsZ0JBQWdCLGNBQWMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGtCQUFrQix5QkFBeUIsNkVBQTZFLCtEQUErRCxtQkFBbUIsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQixrQkFBa0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQix3QkFBd0IsR0FBRyxtQkFBbUIsc0JBQXNCLHlCQUF5QixrQkFBa0IsbUJBQW1CLG1CQUFtQixzQ0FBc0MseUJBQXlCLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsNkJBQTZCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IseUJBQXlCLDZCQUE2QixnQkFBZ0Isb0JBQW9CLHNCQUFzQiw4Q0FBOEMscUNBQXFDLHlCQUF5QixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIscUJBQXFCLG9CQUFvQix5QkFBeUIsaURBQWlELG9EQUFvRCx1QkFBdUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixtQkFBbUIsOEJBQThCLDZCQUE2QixLQUFLLHlCQUF5QixzQkFBc0IsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDREQUE0RCwyRkFBMkYsc0JBQXNCLHVCQUF1QiwwQkFBMEIsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsMEJBQTBCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQiw0QkFBNEIscUJBQXFCLHlCQUF5QixHQUFHLGdDQUFnQyxnQ0FBZ0MsR0FBRywrQkFBK0Isb0JBQW9CLGlDQUFpQyw2QkFBNkIsMkJBQTJCLE9BQU8sMEJBQTBCLHFCQUFxQix1QkFBdUIsT0FBTyx5REFBeUQsc0JBQXNCLE9BQU8sR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw0QkFBNEIsT0FBTyxHQUFHLDhCQUE4QixtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixxQkFBcUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsc0JBQXNCLGdCQUFnQixjQUFjLDZCQUE2QixHQUFHLG1CQUFtQixpQ0FBaUMsa0JBQWtCLHNCQUFzQixtQkFBbUIsR0FBRyxZQUFZLHlCQUF5Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixHQUFHLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLEdBQUcseUJBQXlCLGdDQUFnQyxxQkFBcUIsR0FBRyx3QkFBd0Isb0JBQW9CLHFDQUFxQyxnQkFBZ0Isb0JBQW9CLG1EQUFtRCxrREFBa0QsYUFBYSxjQUFjLHVCQUF1Qix1QkFBdUIsNENBQTRDLHlFQUF5RSxvQkFBb0IsK0NBQStDLHFEQUFxRCwwQkFBMEIsb0JBQW9CLDhCQUE4Qix1QkFBdUIsR0FBRywrQkFBK0IsMEJBQTBCLGlDQUFpQyxPQUFPLEdBQUcscUJBQXFCO0FBQ2hwWDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBtb25vc3BhY2U7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgc2Nyb2xsaW5nIG9mIHRoZSBmdWxsIHBhZ2UgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDEgMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlIHRoZSBjb250YWluZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCB0aGUgY29udGFpbmVyIGZyb20gc2Nyb2xsaW5nICovXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2RkZDtcXG59XFxuXFxuI3NlYXJjaFJlc3VsdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBBbGxvdyBzY3JvbGxpbmcgb2YgdGhlIHNlYXJjaCByZXN1bHRzICovXFxufVxcblxcbi5sb2FkaW5nLFxcbi5lcnJvcixcXG4ubm8tcmVzdWx0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1pbi1oZWlnaHQ6IDJlbTsgLyogRW5zdXJlIHR3byBsaW5lcyBldmVuIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBjb250ZW50ICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuYnJhbmQsXFxuLnJlc3VsdC1pdGVtIC5yYXRpbmcsXFxuLnJlc3VsdC1pdGVtIC5wcmljZSxcXG4ucmVzdWx0LWl0ZW0gLmxpbmsge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yZXN1bHQtaXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIC5kZXRhaWxzLFxcbiAgICAucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgfVxcbn1cXG5cXG4uZ2xvYmFsLWhlYWRlciAubG9nbyBpbWcge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5nbG9iYWwtZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLW5hdiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpOyBPcHRpb25hbDogZmFpbnQgc2hhZG93IGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgZmxleDogMSAxO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEZhaW50IGJvcmRlciBmb3IgaW5kaXZpZHVhbCBzZWFyY2ggY29sdW1ucyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgLyogT3B0aW9uYWw6IGZhaW50IHNoYWRvdyBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cXG59XFxuXFxuLmxvYWQtbW9yZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEdBQThHOztBQUU5RztJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUUsdUNBQXVDO0FBQzdEOztBQUVBO0lBQ0ksU0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2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SSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHNjcm9sbGluZyBvZiB0aGUgZnVsbCBwYWdlICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBFbnN1cmUgdGhlIGNvbnRhaW5lciB0YWtlcyBmdWxsIHZpZXdwb3J0IGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHRoZSBjb250YWluZXIgZnJvbSBzY3JvbGxpbmcgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwMDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG4jc2VhcmNoUmVzdWx0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEFsbG93IHNjcm9sbGluZyBvZiB0aGUgc2VhcmNoIHJlc3VsdHMgKi9cXG59XFxuXFxuLmxvYWRpbmcsXFxuLmVycm9yLFxcbi5uby1yZXN1bHRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXG4gICAgZmxleDogMCAwIGF1dG87XFxufVxcblxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIG1hcmdpbi1yaWdodDogMjBweDsgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWluLWhlaWdodDogMmVtOyAvKiBFbnN1cmUgdHdvIGxpbmVzIGV2ZW4gaWYgdGhlcmUncyBub3QgZW5vdWdoIGNvbnRlbnQgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5icmFuZCxcXG4ucmVzdWx0LWl0ZW0gLnJhdGluZyxcXG4ucmVzdWx0LWl0ZW0gLnByaWNlLFxcbi5yZXN1bHQtaXRlbSAubGluayB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGEge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5saW5rIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnJlc3VsdC1pdGVtIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gLmRldGFpbHMsXFxuICAgIC5yZXN1bHQtaXRlbSAucHJpY2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zZWFyY2gtZm9ybSwgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICB9XFxufVxcblxcbi5nbG9iYWwtaGVhZGVyIC5sb2dvIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmdsb2JhbC1mb290ZXIge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb290ZXItbmF2IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbjpub3QoLmFjdGl2ZSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IE9wdGlvbmFsOiBmYWludCBzaGFkb3cgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXFxufVxcblxcbi5jb2x1bW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEZhaW50IGJvcmRlciBmb3IgaW5kaXZpZHVhbCBzZWFyY2ggY29sdW1ucyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTsgLyogT3B0aW9uYWw6IGZhaW50IHNoYWRvdyBmb3IgYmV0dGVyIHZpc2liaWxpdHkgKi9cXG59XFxuXFxuLmxvYWQtbW9yZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});