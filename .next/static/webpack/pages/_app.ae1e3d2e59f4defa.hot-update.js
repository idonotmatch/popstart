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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: center; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    text-align: center;\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 40px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 12px; /* Clear and visible font size */\\n    width: 15%; /* Adjust based on total width of the form */\\n    height: 40px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    /* align-items: center;  */\\n    justify-content: space-between;\\n    /* min-height: 20px;  */\\n    padding: 20px;\\n    border-radius: 8px;\\n    border: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    padding: 10px;\\n    width: 200px;  /* Fixed width */\\n    height: 200px; /* Fixed height */\\n    object-fit: scale-down;\\n    flex: 0 0 auto; /* Do not grow, do not shrink, and auto basis */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Takes the remaining space */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-right: 20px; /* Optional, for spacing between this and price */\\n}\\n\\n.result-item .title {\\n    font-weight: bold;\\n    font-size: 18px;\\n    margin: 0 0 25px 0;\\n}\\n\\n.result-item .brand, .result-item .rating {\\n    font-size: 12px;\\n\\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Margins to space out text inside details */\\n}\\n\\n.result-item .price {\\n    flex: 0 1 auto; /* Do not grow, can shrink, auto basis based on content size */\\n    white-space: nowrap; /* Ensures the text does not wrap */\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column; /* Stack elements vertically on smaller screens */\\n        align-items: start; /* Aligns items to the start of the item block */\\n        min-height: auto; /* Removes fixed height constraint */\\n    }\\n\\n    .result-item img {\\n        width: 100%; /* Full width images on smaller screens */\\n        height: auto; /* Maintain aspect ratio */\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        flex-grow: 1;\\n        width: 100%; /* Full width for details and price */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,8GAA8G;;AAE9G;IACI,sBAAsB,EAAE,qCAAqC;IAC7D,SAAS,EAAE,mCAAmC;IAC9C,UAAU,EAAE,mCAAmC;IAC/C,mCAAmC,EAAE,qCAAqC;AAC9E;;AAEA;IACI,YAAY,UAAU,wCAAwC;IAC9D,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oBAAoB,EAAE,iDAAiD;AAC3E;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB,KAAK,mEAAmE;IAC3F,uBAAuB,EAAE,2CAA2C;IACpE,WAAW,WAAW,+BAA+B;IACrD,iBAAiB,KAAK,+CAA+C;IACrE,cAAc,QAAQ,sBAAsB;IAC5C,aAAa,SAAS,uCAAuC;IAC7D,sBAAsB,EAAE,kDAAkD;AAC9E;;AAEA;IACI,WAAW,EAAE,eAAe;IAC5B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW,YAAY,sDAAsD;IAC7E,gBAAgB,OAAO,2CAA2C;IAClE,aAAa,UAAU,+BAA+B;IACtD,mBAAmB,IAAI,4BAA4B;IACnD,uBAAuB,EAAE,+CAA+C;IACxE,mBAAmB,IAAI,2BAA2B;IAClD,iBAAiB,MAAM,qEAAqE;AAChG;;AAEA;IACI,eAAe,EAAE,yCAAyC;IAC1D,kBAAkB;IAClB,UAAU,EAAE,yDAAyD;IACrE,YAAY,EAAE,gCAAgC;IAC9C,kBAAkB,EAAE,yCAAyC;IAC7D,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB,EAAE,mCAAmC;AAC3D;;AAEA;IACI,eAAe,EAAE,gCAAgC;IACjD,UAAU,EAAE,4CAA4C;IACxD,YAAY,EAAE,6BAA6B;IAC3C,kBAAkB,EAAE,0CAA0C;IAC9D,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,sBAAsB,EAAE,yCAAyC;IACjE,SAAS;IACT,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,mBAAmB,EAAE,uCAAuC;IAC5D,0BAA0B;IAC1B,8BAA8B;IAC9B,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,gBAAgB;IAChB,gBAAgB,EAAE,yCAAyC;AAC/D;;AAEA;IACI,aAAa;IACb,YAAY,GAAG,gBAAgB;IAC/B,aAAa,EAAE,iBAAiB;IAChC,sBAAsB;IACtB,cAAc,EAAE,+CAA+C;AACnE;;AAEA;IACI,YAAY,EAAE,8BAA8B;IAC5C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB,EAAE,iDAAiD;AACzE;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;;AAEnB;;AAEA;;IAEI,aAAa,EAAE,6CAA6C;AAChE;;AAEA;IACI,cAAc,EAAE,8DAA8D;IAC9E,mBAAmB,EAAE,mCAAmC;AAC5D;;AAEA;IACI;QACI,sBAAsB,EAAE,iDAAiD;QACzE,kBAAkB,EAAE,gDAAgD;QACpE,gBAAgB,EAAE,oCAAoC;IAC1D;;IAEA;QACI,WAAW,EAAE,yCAAyC;QACtD,YAAY,EAAE,0BAA0B;IAC5C;;IAEA;;QAEI,YAAY;QACZ,WAAW,EAAE,qCAAqC;IACtD;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iBAAiB,EAAE,sCAAsC;IAC7D;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: center; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    text-align: center;\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 40px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 12px; /* Clear and visible font size */\\n    width: 15%; /* Adjust based on total width of the form */\\n    height: 40px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    /* align-items: center;  */\\n    justify-content: space-between;\\n    /* min-height: 20px;  */\\n    padding: 20px;\\n    border-radius: 8px;\\n    border: 0.5px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    padding: 10px;\\n    width: 200px;  /* Fixed width */\\n    height: 200px; /* Fixed height */\\n    object-fit: scale-down;\\n    flex: 0 0 auto; /* Do not grow, do not shrink, and auto basis */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Takes the remaining space */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-right: 20px; /* Optional, for spacing between this and price */\\n}\\n\\n.result-item .title {\\n    font-weight: bold;\\n    font-size: 18px;\\n    margin: 0 0 25px 0;\\n}\\n\\n.result-item .brand, .result-item .rating {\\n    font-size: 12px;\\n\\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Margins to space out text inside details */\\n}\\n\\n.result-item .price {\\n    flex: 0 1 auto; /* Do not grow, can shrink, auto basis based on content size */\\n    white-space: nowrap; /* Ensures the text does not wrap */\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column; /* Stack elements vertically on smaller screens */\\n        align-items: start; /* Aligns items to the start of the item block */\\n        min-height: auto; /* Removes fixed height constraint */\\n    }\\n\\n    .result-item img {\\n        width: 100%; /* Full width images on smaller screens */\\n        height: auto; /* Maintain aspect ratio */\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        flex-grow: 1;\\n        width: 100%; /* Full width for details and price */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLG1HQUFtRyx3RUFBd0UsNERBQTRELDRFQUE0RSxtREFBbUQsc0VBQXNFLHNEQUFzRCxZQUFZLG1CQUFtQix5Q0FBeUMsMEJBQTBCLEdBQUcsa0JBQWtCLDZCQUE2QixvRkFBb0YseUVBQXlFLDZEQUE2RCw0REFBNEQsNkVBQTZFLHlEQUF5RCx5RUFBeUUsbUJBQW1CLHVCQUF1QixtRUFBbUUsa0JBQWtCLDhFQUE4RSwyREFBMkQsNkRBQTZELHNDQUFzQywwQkFBMEIsdUNBQXVDLG9CQUFvQix1QkFBdUIsbURBQW1ELGlFQUFpRSx3REFBd0Qsd0VBQXdFLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsMERBQTBELG9CQUFvQixHQUFHLG9CQUFvQixvQkFBb0IsMkJBQTJCLHVFQUF1RSx1Q0FBdUMsNEJBQTRCLHNCQUFzQix5QkFBeUIsNkNBQTZDLHVCQUF1Qix3QkFBd0IsNkNBQTZDLHNC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bURBQW1ELDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHFEQUFxRCx5QkFBeUIsd0JBQXdCLHNCQUFzQix5QkFBeUIsR0FBRywrQ0FBK0Msc0JBQXNCLEtBQUssd0RBQXdELHFCQUFxQixpREFBaUQseUJBQXlCLHNCQUFzQiwwRkFBMEYsdUNBQXVDLCtCQUErQixvQkFBb0Isa0NBQWtDLGdGQUFnRiw2RUFBNkUsNENBQTRDLDBCQUEwQix1QkFBdUIsa0VBQWtFLGtDQUFrQyx5REFBeUQsdUJBQXVCLHVCQUF1Qiw2Q0FBNkMsR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw2QkFBNkIsOENBQThDLEdBQUcscUJBQXFCLHNCQUFzQixvQkFBb0IsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQ3AzWDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogQXBwbHkgYm94LXNpemluZyB0byBhbGwgZWxlbWVudHMgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiBSZXNldCBtYXJnaW5zIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgcGFkZGluZzogMDsgLyogUmVzZXQgcGFkZGluZyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlOyAvKiBFbnN1cmUgZm9udCBmYW1pbHkgaXMgY29uc2lzdGVudCAqL1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgIC8qIEVuc3VyZSB0aGUgZnVsbCBoZWlnaHQgaXMgYXZhaWxhYmxlICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IC8qIENoYW5nZSBmcm9tIGNlbnRlciB0byBzdHJldGNoIGZvciBmdWxsIHdpZHRoICovXFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBhbGwgY2hpbGQgZWxlbWVudHMgYXJlIGNlbnRlcmVkIGhvcml6b250YWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWRqdXN0IGJhc2VkIG9uIHlvdXIgZGVzaWduIHByZWZlcmVuY2UgKi9cXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgIC8qIEZ1bGwgd2lkdGggb2YgdGhlIHZpZXdwb3J0ICovXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAgICAvKiBNaW5pbXVtIGhlaWdodCBpcyB0aGUgZnVsbCB2aWV3cG9ydCBoZWlnaHQgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87ICAgICAgIC8qIENlbnRlcnMgY29udGFpbmVyICovXFxuICAgIHBhZGRpbmc6IDIwcHg7ICAgICAgICAvKiBPcHRpb25hbCBwYWRkaW5nIGZvciBpbm5lciBzcGFjaW5nICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGVzIHBhZGRpbmcgaW4gd2lkdGgvaGVpZ2h0IGNhbGN1bGF0aW9ucyAqL1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgLyogRnVsbCB3aWR0aCB0byBlbnN1cmUgaXQgdGFrZXMgdGhlIGNvbnRhaW5lciB3aWR0aCAqL1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4OyAgICAgIC8qIExpbWl0cyB0aGUgd2lkdGggZm9yIGJldHRlciBhZXN0aGV0aWNzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgICAgLyogRW5zdXJlcyB0aGUgdXNlIG9mIEZsZXhib3ggKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAvKiBBbGlnbiBlbGVtZW50cyBpbiBhIHJvdyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVycyBpdGVtcyBob3Jpem9udGFsbHkgd2l0aGluIHRoZSBmb3JtICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgLyogQWxpZ24gaXRlbXMgdmVydGljYWxseSAqL1xcbiAgICBtYXJnaW46IDIwcHggYXV0bzsgICAgIC8qIFRvcCBhbmQgYm90dG9tIG1hcmdpbiBmb3Igc3BhY2luZywgYXV0byBmb3IgaG9yaXpvbnRhbCBjZW50ZXJpbmcgKi9cXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgLyogQXBwcm9wcmlhdGUgZm9udCBzaXplIGZvciB2aXNpYmlsaXR5ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDc1JTsgLyogQWRqdXN0IGlmIG5lY2Vzc2FyeSB0byBnaXZlIG1vcmUgc3BhY2UgdG8gdGhlIGJ1dHRvbiAqL1xcbiAgICBoZWlnaHQ6IDQwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgdW5pZm9ybWl0eSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIENvbWZvcnRhYmxlIHBhZGRpbmcgaW5zaWRlIHRoZSBpbnB1dCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwMDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgLyogU3BhY2UgYmV0d2VlbiBpbnB1dCBhbmQgYnV0dG9uICovXFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMnB4OyAvKiBDbGVhciBhbmQgdmlzaWJsZSBmb250IHNpemUgKi9cXG4gICAgd2lkdGg6IDE1JTsgLyogQWRqdXN0IGJhc2VkIG9uIHRvdGFsIHdpZHRoIG9mIHRoZSBmb3JtICovXFxuICAgIGhlaWdodDogNDBweDsgLyogTWF0Y2hlcyB0aGUgaW5wdXQgaGVpZ2h0ICovXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDsgLyogUGFkZGluZyBmb3IgYSBiZXR0ZXIgdG91Y2ggZXhwZXJpZW5jZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2RkZDtcXG59XFxuXFxuXFxuI3NlYXJjaFJlc3VsdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBFbnN1cmVzIGl0ZW1zIGFyZSBzdGFja2VkIHZlcnRpY2FsbHkgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAvKiBBbGlnbnMgY2hpbGQgZWxlbWVudHMgaG9yaXpvbnRhbGx5ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDIwcHg7ICAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBLZWVwcyBhbGwgY29udGVudCB3aXRoaW4gdGhlIGJvcmRlcnMgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDsgIC8qIEZpeGVkIHdpZHRoICovXFxuICAgIGhlaWdodDogMjAwcHg7IC8qIEZpeGVkIGhlaWdodCAqL1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBmbGV4OiAwIDAgYXV0bzsgLyogRG8gbm90IGdyb3csIGRvIG5vdCBzaHJpbmssIGFuZCBhdXRvIGJhc2lzICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgLyogVGFrZXMgdGhlIHJlbWFpbmluZyBzcGFjZSAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAvKiBPcHRpb25hbCwgZm9yIHNwYWNpbmcgYmV0d2VlbiB0aGlzIGFuZCBwcmljZSAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmJyYW5kLCAucmVzdWx0LWl0ZW0gLnJhdGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIGgyLFxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyBwIHtcXG4gICAgbWFyZ2luOiA1cHggMDsgLyogTWFyZ2lucyB0byBzcGFjZSBvdXQgdGV4dCBpbnNpZGUgZGV0YWlscyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgZmxleDogMCAxIGF1dG87IC8qIERvIG5vdCBncm93LCBjYW4gc2hyaW5rLCBhdXRvIGJhc2lzIGJhc2VkIG9uIGNvbnRlbnQgc2l6ZSAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBFbnN1cmVzIHRoZSB0ZXh0IGRvZXMgbm90IHdyYXAgKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yZXN1bHQtaXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBlbGVtZW50cyB2ZXJ0aWNhbGx5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAvKiBBbGlnbnMgaXRlbXMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBpdGVtIGJsb2NrICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyAvKiBSZW1vdmVzIGZpeGVkIGhlaWdodCBjb25zdHJhaW50ICovXFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBpbWFnZXMgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSAuZGV0YWlscyxcXG4gICAgLnJlc3VsdC1pdGVtIC5wcmljZSB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgZGV0YWlscyBhbmQgcHJpY2UgKi9cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnNlYXJjaC1mb3JtLCAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIFJlZHVjZSBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbi5yZXN1bHQtaXRlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4R0FBOEc7O0FBRTlHO0lBQ0ksc0JBQXNCLEVBQUUscUNBQXFDO0lBQzdELFNBQVMsRUFBRSxtQ0FBbUM7SUFDOUMsVUFBVSxFQUFFLG1DQUFtQztJQUMvQyxtQ0FBbUMsRUFBRSxxQ0FBcUM7QUFDOUU7O0FBRUE7SUFDSSxZQUFZLFVBQVUsd0NBQXdDO0lBQzlELFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0IsRUFBRSxpREFBaUQ7QUFDM0U7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUIsS0FBSyxtRUFBbUU7SUFDM0YsdUJBQXVCLEVBQUUsMkNBQTJDO0lBQ3BFLFdBQVcsV0FBVywrQkFBK0I7SUFDckQsaUJBQWlCLEtBQUssK0NBQStDO0lBQ3JFLGNBQWMsUUFBUSxzQkFBc0I7SUFDNUMsYUFBYSxTQUFTLHVDQUF1QztJQUM3RCxzQkFBc0IsRUFBRSxrREFBa0Q7QUFDOUU7O0FBRUE7SUFDSSxXQUFXLEVBQUUsZUFBZTtJQUM1QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVyxZQUFZLHNEQUFzRDtJQUM3RSxnQkFBZ0IsT0FBTywyQ0FBMkM7SUFDbEUsYUFBYSxVQUFVLCtCQUErQjtJQUN0RCxtQkFBbUIsSUFBSSw0QkFBNEI7SUFDbkQsdUJBQXVCLEVBQUUsK0NBQStDO0lBQ3hFLG1CQUFtQixJQUFJLDJCQUEyQjtJQUNsRCxpQkFBaUIsTUFBTSxxRUFBcUU7QUFDaEc7O0FBRUE7SUFDSSxlQUFlLEVBQUUseUNBQXlDO0lBQzFELGtCQUFrQjtJQUNsQixVQUFVLEVBQUUseURBQXlEO0lBQ3JFLFlBQVksRUFBRSxnQ0FBZ0M7SUFDOUMsa0JBQWtCLEVBQUUseUNBQXlDO0lBQzdELFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isa0JBQWtCLEVBQUUsbUNBQW1DO0FBQzNEOztBQUVBO0lBQ0ksZUFBZSxFQUFFLGdDQUFnQztJQUNqRCxVQUFVLEVBQUUsNENBQTRDO0lBQ3hELFlBQVksRUFBRSw2QkFBNkI7SUFDM0Msa0JBQWtCLEVBQUUsMENBQTBDO0lBQzlELHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUUseUNBQXlDO0lBQ2pFLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUIsRUFBRSx1Q0FBdUM7SUFDNUQsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFFLHlDQUF5QztBQUMvRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZLEdBQUcsZ0JBQWdCO0lBQy9CLGFBQWEsRUFBRSxpQkFBaUI7SUFDaEMsc0JBQXNCO0lBQ3RCLGNBQWMsRUFBRSwrQ0FBK0M7QUFDbkU7O0FBRUE7SUFDSSxZQUFZLEVBQUUsOEJBQThCO0lBQzVDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQixFQUFFLGlEQUFpRDtBQUN6RTs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7O0lBRUksYUFBYSxFQUFFLDZDQUE2QztBQUNoRTs7QUFFQTtJQUNJLGNBQWMsRUFBRSw4REFBOEQ7SUFDOUUsbUJBQW1CLEVBQUUsbUNBQW1DO0FBQzVEOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0IsRUFBRSxpREFBaUQ7UUFDekUsa0JBQWtCLEVBQUUsZ0RBQWdEO1FBQ3BFLGdCQUFnQixFQUFFLG9DQUFvQztJQUMxRDs7SUFFQTtRQUNJLFdBQVcsRUFBRSx5Q0FBeUM7UUFDdEQsWUFBWSxFQUFFLDBCQUEwQjtJQUM1Qzs7SUFFQTs7UUFFSSxZQUFZO1FBQ1osV0FBVyxFQUFFLHFDQUFxQztJQUN0RDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCLEVBQUUsc0NBQXNDO0lBQzdEO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogQXBwbHkgYm94LXNpemluZyB0byBhbGwgZWxlbWVudHMgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiBSZXNldCBtYXJnaW5zIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgcGFkZGluZzogMDsgLyogUmVzZXQgcGFkZGluZyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlOyAvKiBFbnN1cmUgZm9udCBmYW1pbHkgaXMgY29uc2lzdGVudCAqL1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgIC8qIEVuc3VyZSB0aGUgZnVsbCBoZWlnaHQgaXMgYXZhaWxhYmxlICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IC8qIENoYW5nZSBmcm9tIGNlbnRlciB0byBzdHJldGNoIGZvciBmdWxsIHdpZHRoICovXFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBhbGwgY2hpbGQgZWxlbWVudHMgYXJlIGNlbnRlcmVkIGhvcml6b250YWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWRqdXN0IGJhc2VkIG9uIHlvdXIgZGVzaWduIHByZWZlcmVuY2UgKi9cXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgIC8qIEZ1bGwgd2lkdGggb2YgdGhlIHZpZXdwb3J0ICovXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyAgICAvKiBNaW5pbXVtIGhlaWdodCBpcyB0aGUgZnVsbCB2aWV3cG9ydCBoZWlnaHQgKi9cXG4gICAgbWFyZ2luOiAwIGF1dG87ICAgICAgIC8qIENlbnRlcnMgY29udGFpbmVyICovXFxuICAgIHBhZGRpbmc6IDIwcHg7ICAgICAgICAvKiBPcHRpb25hbCBwYWRkaW5nIGZvciBpbm5lciBzcGFjaW5nICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGVzIHBhZGRpbmcgaW4gd2lkdGgvaGVpZ2h0IGNhbGN1bGF0aW9ucyAqL1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgLyogRnVsbCB3aWR0aCB0byBlbnN1cmUgaXQgdGFrZXMgdGhlIGNvbnRhaW5lciB3aWR0aCAqL1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4OyAgICAgIC8qIExpbWl0cyB0aGUgd2lkdGggZm9yIGJldHRlciBhZXN0aGV0aWNzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgICAgLyogRW5zdXJlcyB0aGUgdXNlIG9mIEZsZXhib3ggKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAvKiBBbGlnbiBlbGVtZW50cyBpbiBhIHJvdyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVycyBpdGVtcyBob3Jpem9udGFsbHkgd2l0aGluIHRoZSBmb3JtICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgLyogQWxpZ24gaXRlbXMgdmVydGljYWxseSAqL1xcbiAgICBtYXJnaW46IDIwcHggYXV0bzsgICAgIC8qIFRvcCBhbmQgYm90dG9tIG1hcmdpbiBmb3Igc3BhY2luZywgYXV0byBmb3IgaG9yaXpvbnRhbCBjZW50ZXJpbmcgKi9cXG59XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgLyogQXBwcm9wcmlhdGUgZm9udCBzaXplIGZvciB2aXNpYmlsaXR5ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDc1JTsgLyogQWRqdXN0IGlmIG5lY2Vzc2FyeSB0byBnaXZlIG1vcmUgc3BhY2UgdG8gdGhlIGJ1dHRvbiAqL1xcbiAgICBoZWlnaHQ6IDQwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgdW5pZm9ybWl0eSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIENvbWZvcnRhYmxlIHBhZGRpbmcgaW5zaWRlIHRoZSBpbnB1dCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwMDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgLyogU3BhY2UgYmV0d2VlbiBpbnB1dCBhbmQgYnV0dG9uICovXFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMnB4OyAvKiBDbGVhciBhbmQgdmlzaWJsZSBmb250IHNpemUgKi9cXG4gICAgd2lkdGg6IDE1JTsgLyogQWRqdXN0IGJhc2VkIG9uIHRvdGFsIHdpZHRoIG9mIHRoZSBmb3JtICovXFxuICAgIGhlaWdodDogNDBweDsgLyogTWF0Y2hlcyB0aGUgaW5wdXQgaGVpZ2h0ICovXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDsgLyogUGFkZGluZyBmb3IgYSBiZXR0ZXIgdG91Y2ggZXhwZXJpZW5jZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2RkZDtcXG59XFxuXFxuXFxuI3NlYXJjaFJlc3VsdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBFbnN1cmVzIGl0ZW1zIGFyZSBzdGFja2VkIHZlcnRpY2FsbHkgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAvKiBBbGlnbnMgY2hpbGQgZWxlbWVudHMgaG9yaXpvbnRhbGx5ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIG1pbi1oZWlnaHQ6IDIwcHg7ICAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBLZWVwcyBhbGwgY29udGVudCB3aXRoaW4gdGhlIGJvcmRlcnMgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDsgIC8qIEZpeGVkIHdpZHRoICovXFxuICAgIGhlaWdodDogMjAwcHg7IC8qIEZpeGVkIGhlaWdodCAqL1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBmbGV4OiAwIDAgYXV0bzsgLyogRG8gbm90IGdyb3csIGRvIG5vdCBzaHJpbmssIGFuZCBhdXRvIGJhc2lzICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgLyogVGFrZXMgdGhlIHJlbWFpbmluZyBzcGFjZSAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAvKiBPcHRpb25hbCwgZm9yIHNwYWNpbmcgYmV0d2VlbiB0aGlzIGFuZCBwcmljZSAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiAwIDAgMjVweCAwO1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmJyYW5kLCAucmVzdWx0LWl0ZW0gLnJhdGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIGgyLFxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyBwIHtcXG4gICAgbWFyZ2luOiA1cHggMDsgLyogTWFyZ2lucyB0byBzcGFjZSBvdXQgdGV4dCBpbnNpZGUgZGV0YWlscyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgZmxleDogMCAxIGF1dG87IC8qIERvIG5vdCBncm93LCBjYW4gc2hyaW5rLCBhdXRvIGJhc2lzIGJhc2VkIG9uIGNvbnRlbnQgc2l6ZSAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBFbnN1cmVzIHRoZSB0ZXh0IGRvZXMgbm90IHdyYXAgKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yZXN1bHQtaXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBlbGVtZW50cyB2ZXJ0aWNhbGx5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAvKiBBbGlnbnMgaXRlbXMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBpdGVtIGJsb2NrICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyAvKiBSZW1vdmVzIGZpeGVkIGhlaWdodCBjb25zdHJhaW50ICovXFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBpbWFnZXMgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSAuZGV0YWlscyxcXG4gICAgLnJlc3VsdC1pdGVtIC5wcmljZSB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgZGV0YWlscyBhbmQgcHJpY2UgKi9cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnNlYXJjaC1mb3JtLCAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIFJlZHVjZSBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbi5yZXN1bHQtaXRlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});