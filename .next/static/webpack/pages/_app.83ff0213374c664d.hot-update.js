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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\n.container {\\n    flex: 1 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    min-height: 100vh; /* Ensure the container takes full viewport height */\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    margin: 0 auto;\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    padding: 10px;\\n    width: 160px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n    /* margin-right: 20px; */\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 2em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n    background-color: #fff;\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.column {\\n    flex: 1 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    font-family: 'Open Sans', monospace;\\n    margin: 0;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n    width: 100%;\\n    overflow: hidden; /* Prevent scrolling of the full page */\\n}\\n\\n.container {\\n    flex: 1;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100%;\\n    min-height: 100vh; /* Ensure the container takes full viewport height */\\n    overflow: hidden; /* Prevent the container from scrolling */\\n    margin: 0 auto;\\n    padding: 5px;\\n    box-sizing: border-box;\\n}\\n\\n.search-form {\\n    padding: 10px;\\n    width: 100%;\\n    max-width: 600px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 10px auto;\\n}\\n\\n.search-input {\\n    font-size: 14px;\\n    text-align: center;\\n    width: 100%;\\n    height: 30px;\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px;\\n}\\n\\n.search-button {\\n    font-size: 12px;\\n    width: 15%;\\n    min-width: 60px;\\n    height: 40px;\\n    padding: 12px 20px;\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    width: 100%;\\n    display: flex;\\n    text-align: center;\\n    flex-direction: column;\\n    gap: 10px;\\n    padding: 10px;\\n    overflow: auto; /* Allow scrolling of the search results */\\n}\\n\\n.loading,\\n.error,\\n.no-results {\\n    text-align: center;\\n    font-size: 14px;\\n    margin: 20px 0;\\n}\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: column;\\n    margin: 10px 0;\\n    padding: 20px;\\n    border-radius: 4px;\\n    border-top: 0.5px solid rgba(0, 0, 0, 0.1);\\n    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden;\\n}\\n\\n.result-item img {\\n    padding: 10px;\\n    width: 160px;\\n    height: 160px;\\n    object-fit: scale-down;\\n    flex: 0 0 auto;\\n}\\n\\n.result-item .details {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    justify-content: center;\\n    /* margin-right: 20px; */\\n}\\n\\n.result-item .title {\\n    font-size: 14px;\\n    text-align: left;\\n    font-weight: bold;\\n    word-wrap: break-word;\\n    min-height: 2em; /* Ensure two lines even if there's not enough content */\\n}\\n\\n.result-item .brand,\\n.result-item .rating,\\n.result-item .price,\\n.result-item .link {\\n    font-size: 12px;\\n    text-align: left;\\n    white-space: nowrap;\\n}\\n\\n.result-item .link {\\n    margin-top: 10px;\\n}\\n\\n.result-item .link a {\\n    display: inline-block;\\n    padding: 5px 10px;\\n    background-color: #007bff;\\n    color: white;\\n    text-decoration: none;\\n    font-size: 8px;\\n    border-radius: 4px;\\n}\\n\\n.result-item .link a:hover {\\n    background-color: #0056b3;\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column;\\n        align-items: start;\\n        min-height: auto;\\n    }\\n\\n    .result-item img {\\n        width: 80%;\\n        height: auto;\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        width: 100%;\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto;\\n    }\\n}\\n\\n.global-header .logo img {\\n    height: 60px;\\n    width: auto;\\n    margin: 10px;\\n}\\n\\n.global-footer {\\n    font-size: 8px;\\n    width: 100%;\\n    padding: 10px;\\n    text-align: center;\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n    background-color: #fff;\\n}\\n\\n.footer-nav a {\\n    text-decoration: underline;\\n    color: #333;\\n    font-size: 12px;\\n    margin: 10px;\\n}\\n\\nbutton {\\n    margin-right: 10px;\\n    padding: 10px 20px;\\n    cursor: pointer;\\n    border: none;\\n}\\n\\nbutton.active {\\n    background-color: #007bff;\\n    color: white;\\n}\\n\\nbutton:not(.active) {\\n    background-color: #f8f9fa;\\n    color: #007bff;\\n}\\n\\n.results-container {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.column {\\n    flex: 1;\\n    overflow-y: auto;\\n    max-height: 80vh;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Faint border for individual search columns */\\n    border-radius: 8px;\\n    padding: 10px;\\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); /* Optional: faint shadow for better visibility */\\n}\\n\\n.load-more-container {\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 10px;\\n}\\n\\n@media (max-width: 767px) {\\n    .results-container {\\n        flex-direction: column;\\n    }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw2QkFBNkIsaUJBQWlCLDBDQUEwQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMkNBQTJDLGdCQUFnQixnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGtCQUFrQix5QkFBeUIsNkVBQTZFLCtEQUErRCxtQkFBbUIsNkJBQTZCLEdBQUcsa0JBQWtCLG9CQUFvQixrQkFBa0IsdUJBQXVCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDBCQUEwQix3QkFBd0IsR0FBRyxtQkFBbUIsc0JBQXNCLHlCQUF5QixrQkFBa0IsbUJBQW1CLG1CQUFtQixzQ0FBc0MseUJBQXlCLEdBQUcsb0JBQW9CLHNCQUFzQixpQkFBaUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsNkJBQTZCLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IseUJBQXlCLDZCQUE2QixnQkFBZ0Isb0JBQW9CLHNCQUFzQiw4Q0FBOEMscUNBQXFDLHlCQUF5QixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIscUJBQXFCLG9CQUFvQix5QkFBeUIsaURBQWlELG9EQUFvRCx1QkFBdUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsR0FBRywyQkFBMkIsb0JBQW9CLDZCQUE2QixtQkFBbUIsOEJBQThCLDZCQUE2QixLQUFLLHlCQUF5QixzQkFBc0IsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLDREQUE0RCwyRkFBMkYsc0JBQXNCLHVCQUF1QiwwQkFBMEIsR0FBRyx3QkFBd0IsdUJBQXVCLEdBQUcsMEJBQTBCLDRCQUE0Qix3QkFBd0IsZ0NBQWdDLG1CQUFtQiw0QkFBNEIscUJBQXFCLHlCQUF5QixHQUFHLGdDQUFnQyxnQ0FBZ0MsR0FBRywrQkFBK0Isb0JBQW9CLGlDQUFpQyw2QkFBNkIsMkJBQTJCLE9BQU8sMEJBQTBCLHFCQUFxQix1QkFBdUIsT0FBTyx5REFBeUQsc0JBQXNCLE9BQU8sR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw0QkFBNEIsT0FBTyxHQUFHLDhCQUE4QixtQkFBbUIsa0JBQWtCLG1CQUFtQixHQUFHLG9CQUFvQixxQkFBcUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsc0JBQXNCLGdCQUFnQixjQUFjLDZCQUE2QixHQUFHLG1CQUFtQixpQ0FBaUMsa0JBQWtCLHNCQUFzQixtQkFBbUIsR0FBRyxZQUFZLHlCQUF5Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixHQUFHLG1CQUFtQixnQ0FBZ0MsbUJBQW1CLEdBQUcseUJBQXlCLGdDQUFnQyxxQkFBcUIsR0FBRyx3QkFBd0Isb0JBQW9CLHFDQUFxQyxnQkFBZ0Isb0JBQW9CLEdBQUcsYUFBYSxnQkFBZ0IsdUJBQXVCLHVCQUF1Qiw0Q0FBNEMseUVBQXlFLG9CQUFvQiwrQ0FBK0MscURBQXFELDBCQUEwQixvQkFBb0IsOEJBQThCLHVCQUF1QixHQUFHLCtCQUErQiwwQkFBMEIsaUNBQWlDLE9BQU8sR0FBRyxTQUFTLDJGQUEyRixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLHdCQUF3Qix5QkFBeUIsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxzQkFBc0IsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsdUJBQXVCLE9BQU8sUUFBUSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSx5QkFBeUIsYUFBYSxXQUFXLHdCQUF3QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLDhHQUE4RywwQkFBMEIsT0FBTyw2QkFBNkIsaUJBQWlCLDBDQUEwQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMkNBQTJDLGdCQUFnQixjQUFjLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixrQkFBa0IseUJBQXlCLDZFQUE2RSwrREFBK0QsbUJBQW1CLDZCQUE2QixHQUFHLGtCQUFrQixvQkFBb0Isa0JBQWtCLHVCQUF1QixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsd0JBQXdCLEdBQUcsbUJBQW1CLHNCQUFzQix5QkFBeUIsa0JBQWtCLG1CQUFtQixtQkFBbUIsc0NBQXNDLHlCQUF5QixHQUFHLG9CQUFvQixzQkFBc0IsaUJBQWlCLHNCQUFzQixtQkFBbUIseUJBQXlCLDZCQUE2QixrQkFBa0IsbUJBQW1CLHlCQUF5QixzQkFBc0IsR0FBRywwQkFBMEIsNkJBQTZCLGtCQUFrQixHQUFHLG9CQUFvQixrQkFBa0Isb0JBQW9CLHlCQUF5Qiw2QkFBNkIsZ0JBQWdCLG9CQUFvQixzQkFBc0IsOENBQThDLHFDQUFxQyx5QkFBeUIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLHFCQUFxQixvQkFBb0IseUJBQXlCLGlEQUFpRCxvREFBb0QsdUJBQXVCLHVCQUF1QixHQUFHLHNCQUFzQixvQkFBb0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIscUJBQXFCLEdBQUcsMkJBQTJCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLDhCQUE4Qiw2QkFBNkIsS0FBSyx5QkFBeUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsNEJBQTRCLHVCQUF1Qiw0REFBNEQsMkZBQTJGLHNCQUFzQix1QkFBdUIsMEJBQTBCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLDBCQUEwQiw0QkFBNEIsd0JBQXdCLGdDQUFnQyxtQkFBbUIsNEJBQTRCLHFCQUFxQix5QkFBeUIsR0FBRyxnQ0FBZ0MsZ0NBQWdDLEdBQUcsK0JBQStCLG9CQUFvQixpQ0FBaUMsNkJBQTZCLDJCQUEyQixPQUFPLDBCQUEwQixxQkFBcUIsdUJBQXVCLE9BQU8seURBQXlELHNCQUFzQixPQUFPLEdBQUcsK0JBQStCLG9DQUFvQyxxQkFBcUIsNEJBQTRCLE9BQU8sR0FBRyw4QkFBOEIsbUJBQW1CLGtCQUFrQixtQkFBbUIsR0FBRyxvQkFBb0IscUJBQXFCLGtCQUFrQixvQkFBb0IseUJBQXlCLHNCQUFzQixnQkFBZ0IsY0FBYyw2QkFBNkIsR0FBRyxtQkFBbUIsaUNBQWlDLGtCQUFrQixzQkFBc0IsbUJBQW1CLEdBQUcsWUFBWSx5QkFBeUIseUJBQXlCLHNCQUFzQixtQkFBbUIsR0FBRyxtQkFBbUIsZ0NBQWdDLG1CQUFtQixHQUFHLHlCQUF5QixnQ0FBZ0MscUJBQXFCLEdBQUcsd0JBQXdCLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLG9CQUFvQixHQUFHLGFBQWEsY0FBYyx1QkFBdUIsdUJBQXVCLDRDQUE0Qyx5RUFBeUUsb0JBQW9CLCtDQUErQyxxREFBcUQsMEJBQTBCLG9CQUFvQiw4QkFBOEIsdUJBQXVCLEdBQUcsK0JBQStCLDBCQUEwQixpQ0FBaUMsT0FBTyxHQUFHLHFCQUFxQjtBQUNoOFc7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBQcmV2ZW50IHNjcm9sbGluZyBvZiB0aGUgZnVsbCBwYWdlICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBmbGV4OiAxIDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7IC8qIEVuc3VyZSB0aGUgY29udGFpbmVyIHRha2VzIGZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgdGhlIGNvbnRhaW5lciBmcm9tIHNjcm9sbGluZyAqL1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzAwMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogQWxsb3cgc2Nyb2xsaW5nIG9mIHRoZSBzZWFyY2ggcmVzdWx0cyAqL1xcbn1cXG5cXG4ubG9hZGluZyxcXG4uZXJyb3IsXFxuLm5vLXJlc3VsdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBtaW4taGVpZ2h0OiAyZW07IC8qIEVuc3VyZSB0d28gbGluZXMgZXZlbiBpZiB0aGVyZSdzIG5vdCBlbm91Z2ggY29udGVudCAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmJyYW5kLFxcbi5yZXN1bHQtaXRlbSAucmF0aW5nLFxcbi5yZXN1bHQtaXRlbSAucHJpY2UsXFxuLnJlc3VsdC1pdGVtIC5saW5rIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmxpbmsge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmxpbmsgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmxpbmsgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAucmVzdWx0LWl0ZW0ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSAuZGV0YWlscyxcXG4gICAgLnJlc3VsdC1pdGVtIC5wcmljZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnNlYXJjaC1mb3JtLCAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIH1cXG59XFxuXFxuLmdsb2JhbC1oZWFkZXIgLmxvZ28gaW1nIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZ2xvYmFsLWZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvb3Rlci1uYXYgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbn1cXG5cXG4ucmVzdWx0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbHVtbiB7XFxuICAgIGZsZXg6IDEgMTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBGYWludCBib3JkZXIgZm9yIGluZGl2aWR1YWwgc2VhcmNoIGNvbHVtbnMgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IC8qIE9wdGlvbmFsOiBmYWludCBzaGFkb3cgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXFxufVxcblxcbi5sb2FkLW1vcmUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAucmVzdWx0cy1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhHQUE4Rzs7QUFFOUc7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQixFQUFFLHVDQUF1QztBQUM3RDs7QUFFQTtJQUNJLFNBQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQixFQUFFLG9EQUFvRDtJQUN2RSxnQkFBZ0IsRUFBRSx5Q0FBeUM7SUFDM0QsY0FBYztJQUNkLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJ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Y29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCBzY3JvbGxpbmcgb2YgdGhlIGZ1bGwgcGFnZSAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRW5zdXJlIHRoZSBjb250YWluZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogUHJldmVudCB0aGUgY29udGFpbmVyIGZyb20gc2Nyb2xsaW5nICovXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2RkZDtcXG59XFxuXFxuI3NlYXJjaFJlc3VsdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBBbGxvdyBzY3JvbGxpbmcgb2YgdGhlIHNlYXJjaCByZXN1bHRzICovXFxufVxcblxcbi5sb2FkaW5nLFxcbi5lcnJvcixcXG4ubm8tcmVzdWx0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1pbi1oZWlnaHQ6IDJlbTsgLyogRW5zdXJlIHR3byBsaW5lcyBldmVuIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBjb250ZW50ICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuYnJhbmQsXFxuLnJlc3VsdC1pdGVtIC5yYXRpbmcsXFxuLnJlc3VsdC1pdGVtIC5wcmljZSxcXG4ucmVzdWx0LWl0ZW0gLmxpbmsge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayBhIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSAubGluayBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yZXN1bHQtaXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIC5kZXRhaWxzLFxcbiAgICAucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgfVxcbn1cXG5cXG4uZ2xvYmFsLWhlYWRlciAubG9nbyBpbWcge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5nbG9iYWwtZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9vdGVyLW5hdiBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxufVxcblxcbi5yZXN1bHRzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBGYWludCBib3JkZXIgZm9yIGluZGl2aWR1YWwgc2VhcmNoIGNvbHVtbnMgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7IC8qIE9wdGlvbmFsOiBmYWludCBzaGFkb3cgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXFxufVxcblxcbi5sb2FkLW1vcmUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAucmVzdWx0cy1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});