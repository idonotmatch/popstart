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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    margin-top: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start; /* Centers vertically in the container */\\n    align-items: center;    /* Centers horizontally in the container */\\n    height: 100vh;          /* Takes full height of the viewport */\\n    overflow-y: auto;\\n    width: 100%;            /* Takes full width of the viewport */\\n    margin: auto;         /* Ensures it is centered horizontally */\\n    text-align: center;     /* Aligns text in the center */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;            /* Full width to accommodate the input and button */\\n    max-width: 800px;       /* Maximum width of the form */\\n    margin-top: 20px;\\n    display: flex;          /* Enables flexbox */\\n    flex-direction: column; /* Stacks the elements vertically */\\n    justify-content: center;/* Centers the items vertically */\\n    align-items: center;    /* Centers the items horizontally */\\n}\\n\\n\\n.search-input {\\n    font-size: 12px; /* Adjust font size as needed */\\n    text-align: center;\\n    width: 100%; /* Full width */\\n    height: 50px; /* Fixed height */\\n    padding: 10px 15px; /* Padding inside the input box */\\n    border: none;\\n    border-bottom: 2px solid #000; /* Solid bottom border */\\n    margin-bottom: 20px; /* Space below the input field */\\n    box-sizing: border-box; /* Include padding in the height calculation */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Set font size for button */\\n    padding: 10px 20px; /* Padding inside the button */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n    transition: background-color 0.3s, color 0.3s;\\n    width: 55%; /* Width relative to its container */\\n    max-width: 200px; /* Maximum width it can expand to */\\n    box-sizing: border-box; /* Include padding in the width calculation */\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\\n    grid-gap: 20px;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.result-item {\\n    display: grid;\\n    grid-template-columns: 1fr; /* All elements in a single column */\\n    grid-gap: 10px; /* Space between grid items */\\n    padding: 10px;\\n    border-radius: 8px;\\n}\\n\\n.result-item img {\\n    width: 100%;\\n    aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */\\n    object-fit: contain; /* Ensures the image covers the area without being cut off */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\\n        gap: 10px;\\n    }\\n    .result-item img {\\n        aspect-ratio: 4 / 3; /* Adjusts to a more rectangular shape on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,8GAA8G;;AAE9G;IACI,sBAAsB,EAAE,qCAAqC;IAC7D,SAAS,EAAE,mCAAmC;IAC9C,UAAU,EAAE,mCAAmC;IAC/C,mCAAmC,EAAE,qCAAqC;AAC9E;;AAEA;IACI,YAAY,UAAU,wCAAwC;IAC9D,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oBAAoB,EAAE,iDAAiD;AAC3E;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,2BAA2B,EAAE,wCAAwC;IACrE,mBAAmB,KAAK,0CAA0C;IAClE,aAAa,WAAW,sCAAsC;IAC9D,gBAAgB;IAChB,WAAW,aAAa,qCAAqC;IAC7D,YAAY,UAAU,wCAAwC;IAC9D,kBAAkB,MAAM,8BAA8B;AAC1D;;AAEA;IACI,WAAW,EAAE,eAAe;IAC5B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW,aAAa,mDAAmD;IAC3E,gBAAgB,QAAQ,8BAA8B;IACtD,gBAAgB;IAChB,aAAa,WAAW,oBAAoB;IAC5C,sBAAsB,EAAE,mCAAmC;IAC3D,uBAAuB,CAAC,iCAAiC;IACzD,mBAAmB,KAAK,mCAAmC;AAC/D;;;AAGA;IACI,eAAe,EAAE,+BAA+B;IAChD,kBAAkB;IAClB,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,iBAAiB;IAC/B,kBAAkB,EAAE,iCAAiC;IACrD,YAAY;IACZ,6BAA6B,EAAE,wBAAwB;IACvD,mBAAmB,EAAE,gCAAgC;IACrD,sBAAsB,EAAE,8CAA8C;AAC1E;;AAEA;IACI,eAAe,EAAE,6BAA6B;IAC9C,kBAAkB,EAAE,8BAA8B;IAClD,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,6CAA6C;IAC7C,UAAU,EAAE,oCAAoC;IAChD,gBAAgB,EAAE,mCAAmC;IACrD,sBAAsB,EAAE,6CAA6C;AACzE;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,cAAS;IAAT,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0BAA0B,EAAE,oCAAoC;IAChE,cAAc,EAAE,6BAA6B;IAC7C,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,mBAAmB,EAAE,oCAAoC;IACzD,mBAAmB,EAAE,4DAA4D;AACrF;;AAEA;IACI;QACI,4DAA4D;QAC5D,SAAS;IACb;IACA;QACI,mBAAmB,EAAE,2DAA2D;IACpF;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iBAAiB,EAAE,sCAAsC;IAC7D;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    margin-top: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start; /* Centers vertically in the container */\\n    align-items: center;    /* Centers horizontally in the container */\\n    height: 100vh;          /* Takes full height of the viewport */\\n    overflow-y: auto;\\n    width: 100%;            /* Takes full width of the viewport */\\n    margin: auto;         /* Ensures it is centered horizontally */\\n    text-align: center;     /* Aligns text in the center */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;            /* Full width to accommodate the input and button */\\n    max-width: 800px;       /* Maximum width of the form */\\n    margin-top: 20px;\\n    display: flex;          /* Enables flexbox */\\n    flex-direction: column; /* Stacks the elements vertically */\\n    justify-content: center;/* Centers the items vertically */\\n    align-items: center;    /* Centers the items horizontally */\\n}\\n\\n\\n.search-input {\\n    font-size: 12px; /* Adjust font size as needed */\\n    text-align: center;\\n    width: 100%; /* Full width */\\n    height: 50px; /* Fixed height */\\n    padding: 10px 15px; /* Padding inside the input box */\\n    border: none;\\n    border-bottom: 2px solid #000; /* Solid bottom border */\\n    margin-bottom: 20px; /* Space below the input field */\\n    box-sizing: border-box; /* Include padding in the height calculation */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Set font size for button */\\n    padding: 10px 20px; /* Padding inside the button */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n    transition: background-color 0.3s, color 0.3s;\\n    width: 55%; /* Width relative to its container */\\n    max-width: 200px; /* Maximum width it can expand to */\\n    box-sizing: border-box; /* Include padding in the width calculation */\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.result-item {\\n    display: grid;\\n    grid-template-columns: 1fr; /* All elements in a single column */\\n    grid-gap: 10px; /* Space between grid items */\\n    padding: 10px;\\n    border-radius: 8px;\\n}\\n\\n.result-item img {\\n    width: 100%;\\n    aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */\\n    object-fit: contain; /* Ensures the image covers the area without being cut off */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\\n        gap: 10px;\\n    }\\n    .result-item img {\\n        aspect-ratio: 4 / 3; /* Adjusts to a more rectangular shape on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLHVCQUF1QixvQkFBb0IsNkJBQTZCLG1DQUFtQyx1RUFBdUUseUVBQXlFLDhEQUE4RCw4QkFBOEIsa0VBQWtFLHVFQUF1RSxrQ0FBa0MsWUFBWSxtQkFBbUIseUNBQXlDLDBCQUEwQixHQUFHLGtCQUFrQiw4QkFBOEIsa0ZBQWtGLHNEQUFzRCw4QkFBOEIsbURBQW1ELGtFQUFrRSxnRUFBZ0UsdUNBQXVDLHFCQUFxQix1QkFBdUIseURBQXlELG1CQUFtQixvQ0FBb0MsNENBQTRDLHFEQUFxRCxxQ0FBcUMsb0RBQW9ELCtEQUErRCxrREFBa0Qsb0JBQW9CLHVCQUF1Qix3REFBd0QsNERBQTRELGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixvREFBb0Qsa0JBQWtCLDZEQUE2RCxrRUFBa0UsaURBQWlELDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLG9CQUFvQixtRUFBbUUscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxrQkFBa0Isb0JBQW9CLGtDQUFrQywyREFBMkQsa0RBQWtELHlCQUF5QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdFQUFnRSxnRUFBZ0UsK0JBQStCLHNCQUFzQix1RUFBdUUsb0JBQW9CLE9BQU8sd0JBQXdCLCtCQUErQixtRUFBbUUsR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw2QkFBNkIsOENBQThDLEdBQUcscUJBQXFCLHNCQUFzQixvQkFBb0IsMEJBQTBCLEdBQUcsT0FBTywyRkFBMkYsTUFBTSx3QkFBd0IsdUJBQXVCLHVCQUF1Qix5QkFBeUIsT0FBTyxLQUFLLHNCQUFzQixXQUFXLFVBQVUsVUFBVSxZQUFZLHlCQUF5QixRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVkseUJBQXlCLHlCQUF5Qix1QkFBdUIsYUFBYSx1QkFBdUIsdUJBQXVCLHlCQUF5QixPQUFPLEtBQUssb0JBQW9CLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLHlCQUF5QixhQUFhLHVCQUF1Qix5QkFBeUIseUJBQXlCLHlCQUF5QixRQUFRLEtBQUssc0JBQXNCLGFBQWEscUJBQXFCLHVCQUF1Qix5QkFBeUIsV0FBVyx3QkFBd0IseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssc0JBQXNCLHlCQUF5QixhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSx1QkFBdUIseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsd0JBQXdCLHVCQUF1QixXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLHdCQUF3QixNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsd0JBQXdCLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLCtHQUErRywwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLHVCQUF1QixvQkFBb0IsNkJBQTZCLG1DQUFtQyx1RUFBdUUseUVBQXlFLDhEQUE4RCw4QkFBOEIsa0VBQWtFLHVFQUF1RSxrQ0FBa0MsWUFBWSxtQkFBbUIseUNBQXlDLDBCQUEwQixHQUFHLGtCQUFrQiw4QkFBOEIsa0ZBQWtGLHNEQUFzRCw4QkFBOEIsbURBQW1ELGtFQUFrRSxnRUFBZ0UsdUNBQXVDLHFCQUFxQix1QkFBdUIseURBQXlELG1CQUFtQixvQ0FBb0MsNENBQTRDLHFEQUFxRCxxQ0FBcUMsb0RBQW9ELCtEQUErRCxrREFBa0Qsb0JBQW9CLHVCQUF1Qix3REFBd0QsNERBQTRELGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixvREFBb0Qsa0JBQWtCLDZEQUE2RCxrRUFBa0UsaURBQWlELDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLG9CQUFvQixtRUFBbUUsZ0JBQWdCLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0Isa0NBQWtDLDJEQUEyRCxrREFBa0QseUJBQXlCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsZ0VBQWdFLGdFQUFnRSwrQkFBK0Isc0JBQXNCLHVFQUF1RSxvQkFBb0IsT0FBTyx3QkFBd0IsK0JBQStCLG1FQUFtRSxHQUFHLCtCQUErQixvQ0FBb0MscUJBQXFCLDZCQUE2Qiw4Q0FBOEMsR0FBRyxxQkFBcUIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsR0FBRyxtQkFBbUI7QUFDOWpTO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2E2M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBBcHBseSBib3gtc2l6aW5nIHRvIGFsbCBlbGVtZW50cyAqL1xcbiAgICBtYXJnaW46IDA7IC8qIFJlc2V0IG1hcmdpbnMgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiBSZXNldCBwYWRkaW5nIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBtb25vc3BhY2U7IC8qIEVuc3VyZSBmb250IGZhbWlseSBpcyBjb25zaXN0ZW50ICovXFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICAgICAgLyogRW5zdXJlIHRoZSBmdWxsIGhlaWdodCBpcyBhdmFpbGFibGUgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgLyogQ2hhbmdlIGZyb20gY2VudGVyIHRvIHN0cmV0Y2ggZm9yIGZ1bGwgd2lkdGggKi9cXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLyogQ2VudGVycyB2ZXJ0aWNhbGx5IGluIHRoZSBjb250YWluZXIgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogQ2VudGVycyBob3Jpem9udGFsbHkgaW4gdGhlIGNvbnRhaW5lciAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgICAgICAgICAvKiBUYWtlcyBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAgLyogVGFrZXMgZnVsbCB3aWR0aCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gICAgbWFyZ2luOiBhdXRvOyAgICAgICAgIC8qIEVuc3VyZXMgaXQgaXMgY2VudGVyZWQgaG9yaXpvbnRhbGx5ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgIC8qIEFsaWducyB0ZXh0IGluIHRoZSBjZW50ZXIgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAvKiBGdWxsIHdpZHRoIHRvIGFjY29tbW9kYXRlIHRoZSBpbnB1dCBhbmQgYnV0dG9uICovXFxuICAgIG1heC13aWR0aDogODAwcHg7ICAgICAgIC8qIE1heGltdW0gd2lkdGggb2YgdGhlIGZvcm0gKi9cXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDsgICAgICAgICAgLyogRW5hYmxlcyBmbGV4Ym94ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrcyB0aGUgZWxlbWVudHMgdmVydGljYWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsvKiBDZW50ZXJzIHRoZSBpdGVtcyB2ZXJ0aWNhbGx5ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIC8qIENlbnRlcnMgdGhlIGl0ZW1zIGhvcml6b250YWxseSAqL1xcbn1cXG5cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMnB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogNTBweDsgLyogRml4ZWQgaGVpZ2h0ICovXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIGlucHV0IGJveCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwOyAvKiBTb2xpZCBib3R0b20gYm9yZGVyICovXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIFNwYWNlIGJlbG93IHRoZSBpbnB1dCBmaWVsZCAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlIHBhZGRpbmcgaW4gdGhlIGhlaWdodCBjYWxjdWxhdGlvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgLyogU2V0IGZvbnQgc2l6ZSBmb3IgYnV0dG9uICovXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIGJ1dHRvbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xcbiAgICB3aWR0aDogNTUlOyAvKiBXaWR0aCByZWxhdGl2ZSB0byBpdHMgY29udGFpbmVyICovXFxuICAgIG1heC13aWR0aDogMjAwcHg7IC8qIE1heGltdW0gd2lkdGggaXQgY2FuIGV4cGFuZCB0byAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlIHBhZGRpbmcgaW4gdGhlIHdpZHRoIGNhbGN1bGF0aW9uICovXFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xcbiAgICBncmlkLWdhcDogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogQWxsIGVsZW1lbnRzIGluIGEgc2luZ2xlIGNvbHVtbiAqL1xcbiAgICBncmlkLWdhcDogMTBweDsgLyogU3BhY2UgYmV0d2VlbiBncmlkIGl0ZW1zICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAvKiBNYWludGFpbnMgYSBzcXVhcmUgYXNwZWN0IHJhdGlvICovXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IC8qIEVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgYXJlYSB3aXRob3V0IGJlaW5nIGN1dCBvZmYgKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgICAucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgICAgIGFzcGVjdC1yYXRpbzogNCAvIDM7IC8qIEFkanVzdHMgdG8gYSBtb3JlIHJlY3Rhbmd1bGFyIHNoYXBlIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogUmVkdWNlIG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhHQUE4Rzs7QUFFOUc7SUFDSSxzQkFBc0IsRUFBRSxxQ0FBcUM7SUFDN0QsU0FBUyxFQUFFLG1DQUFtQztJQUM5QyxVQUFVLEVBQUUsbUNBQW1DO0lBQy9DLG1DQUFtQyxFQUFFLHFDQUFxQztBQUM5RTs7QUFFQTtJQUNJLFlBQVksVUFBVSx3Q0FBd0M7SUFDOUQsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFFLGlEQUFpRDtBQUMzRTs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBRSx3Q0FBd0M7SUFDckUsbUJBQW1CLEtBQUssMENBQTBDO0lBQ2xFLGFBQWEsV0FBVyxzQ0FBc0M7SUFDOUQsZ0JBQWdCO0lBQ2hCLFdBQVcsYUFBYSxxQ0FBcUM7SUFDN0QsWUFBWSxVQUFVLHdDQUF3QztJQUM5RCxrQkFBa0IsTUFBTSw4QkFBOEI7QUFDMUQ7O0FBRUE7SUFDSSxXQUFXLEVBQUUsZUFBZTtJQUM1QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVyxhQUFhLG1EQUFtRDtJQUMzRSxnQkFBZ0IsUUFBUSw4QkFBOEI7SUFDdEQsZ0JBQWdCO0lBQ2hCLGFBQWEsV0FBVyxvQkFBb0I7SUFDNUMsc0JBQXNCLEVBQUUsbUNBQW1DO0lBQzNELHVCQUF1QixDQUFDLGlDQUFpQztJQUN6RCxtQkFBbUIsS0FBSyxtQ0FBbUM7QUFDL0Q7OztBQUdBO0lBQ0ksZUFBZSxFQUFFLCtCQUErQjtJQUNoRCxrQkFBa0I7SUFDbEIsV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQixrQkFBa0IsRUFBRSxpQ0FBaUM7SUFDckQsWUFBWTtJQUNaLDZCQUE2QixFQUFFLHdCQUF3QjtJQUN2RCxtQkFBbUIsRUFBRSxnQ0FBZ0M7SUFDckQsc0JBQXNCLEVBQUUsOENBQThDO0FBQzFFOztBQUVBO0lBQ0ksZUFBZSxFQUFFLDZCQUE2QjtJQUM5QyxrQkFBa0IsRUFBRSw4QkFBOEI7SUFDbEQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsVUFBVSxFQUFFLG9DQUFvQztJQUNoRCxnQkFBZ0IsRUFBRSxtQ0FBbUM7SUFDckQsc0JBQXNCLEVBQUUsNkNBQTZDO0FBQ3pFOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsY0FBUztJQUFULFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQixFQUFFLG9DQUFvQztJQUNoRSxjQUFjLEVBQUUsNkJBQTZCO0lBQzdDLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUUsb0NBQW9DO0lBQ3pELG1CQUFtQixFQUFFLDREQUE0RDtBQUNyRjs7QUFFQTtJQUNJO1FBQ0ksNERBQTREO1FBQzVELFNBQVM7SUFDYjtJQUNBO1FBQ0ksbUJBQW1CLEVBQUUsMkRBQTJEO0lBQ3BGO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixpQkFBaUIsRUFBRSxzQ0FBc0M7SUFDN0Q7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBBcHBseSBib3gtc2l6aW5nIHRvIGFsbCBlbGVtZW50cyAqL1xcbiAgICBtYXJnaW46IDA7IC8qIFJlc2V0IG1hcmdpbnMgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiBSZXNldCBwYWRkaW5nIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBtb25vc3BhY2U7IC8qIEVuc3VyZSBmb250IGZhbWlseSBpcyBjb25zaXN0ZW50ICovXFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7ICAgICAgICAgLyogRW5zdXJlIHRoZSBmdWxsIGhlaWdodCBpcyBhdmFpbGFibGUgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgLyogQ2hhbmdlIGZyb20gY2VudGVyIHRvIHN0cmV0Y2ggZm9yIGZ1bGwgd2lkdGggKi9cXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLyogQ2VudGVycyB2ZXJ0aWNhbGx5IGluIHRoZSBjb250YWluZXIgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogQ2VudGVycyBob3Jpem9udGFsbHkgaW4gdGhlIGNvbnRhaW5lciAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgICAgICAgICAvKiBUYWtlcyBmdWxsIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAgLyogVGFrZXMgZnVsbCB3aWR0aCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gICAgbWFyZ2luOiBhdXRvOyAgICAgICAgIC8qIEVuc3VyZXMgaXQgaXMgY2VudGVyZWQgaG9yaXpvbnRhbGx5ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgIC8qIEFsaWducyB0ZXh0IGluIHRoZSBjZW50ZXIgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAvKiBGdWxsIHdpZHRoIHRvIGFjY29tbW9kYXRlIHRoZSBpbnB1dCBhbmQgYnV0dG9uICovXFxuICAgIG1heC13aWR0aDogODAwcHg7ICAgICAgIC8qIE1heGltdW0gd2lkdGggb2YgdGhlIGZvcm0gKi9cXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDsgICAgICAgICAgLyogRW5hYmxlcyBmbGV4Ym94ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrcyB0aGUgZWxlbWVudHMgdmVydGljYWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsvKiBDZW50ZXJzIHRoZSBpdGVtcyB2ZXJ0aWNhbGx5ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIC8qIENlbnRlcnMgdGhlIGl0ZW1zIGhvcml6b250YWxseSAqL1xcbn1cXG5cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxMnB4OyAvKiBBZGp1c3QgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogNTBweDsgLyogRml4ZWQgaGVpZ2h0ICovXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIGlucHV0IGJveCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwOyAvKiBTb2xpZCBib3R0b20gYm9yZGVyICovXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIFNwYWNlIGJlbG93IHRoZSBpbnB1dCBmaWVsZCAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlIHBhZGRpbmcgaW4gdGhlIGhlaWdodCBjYWxjdWxhdGlvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgLyogU2V0IGZvbnQgc2l6ZSBmb3IgYnV0dG9uICovXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLyogUGFkZGluZyBpbnNpZGUgdGhlIGJ1dHRvbiAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xcbiAgICB3aWR0aDogNTUlOyAvKiBXaWR0aCByZWxhdGl2ZSB0byBpdHMgY29udGFpbmVyICovXFxuICAgIG1heC13aWR0aDogMjAwcHg7IC8qIE1heGltdW0gd2lkdGggaXQgY2FuIGV4cGFuZCB0byAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlIHBhZGRpbmcgaW4gdGhlIHdpZHRoIGNhbGN1bGF0aW9uICovXFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBBbGwgZWxlbWVudHMgaW4gYSBzaW5nbGUgY29sdW1uICovXFxuICAgIGdyaWQtZ2FwOiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGdyaWQgaXRlbXMgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7IC8qIE1haW50YWlucyBhIHNxdWFyZSBhc3BlY3QgcmF0aW8gKi9cXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjsgLyogRW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBhcmVhIHdpdGhvdXQgYmVpbmcgY3V0IG9mZiAqL1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuICAgIC5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiA0IC8gMzsgLyogQWRqdXN0cyB0byBhIG1vcmUgcmVjdGFuZ3VsYXIgc2hhcGUgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zZWFyY2gtZm9ybSwgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiBSZWR1Y2UgbWFyZ2luIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgfVxcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaDIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjMzMzOyAgXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});