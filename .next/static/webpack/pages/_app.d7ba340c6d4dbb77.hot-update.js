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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: flex-start; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 50px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-right: 2px solid #000; /* Visual separation if desired */\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Clear and visible font size */\\n    width: 20%; /* Adjust based on total width of the form */\\n    height: 50px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    align-items: center; /* Vertically center aligns all children */\\n    justify-content: space-between; /* Spreads out items across the horizontal space */\\n    min-height: 20px; /* Minimum height, can adjust based on your design needs */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    width: 100px;  /* Fixed width */\\n    height: 100px; /* Fixed height */\\n    object-fit: cover;\\n    flex: 0 0 auto; /* Do not grow, do not shrink, and auto basis */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Takes the remaining space */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-right: 20px; /* Optional, for spacing between this and price */\\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Margins to space out text inside details */\\n}\\n\\n.result-item .price {\\n    flex: 0 1 auto; /* Do not grow, can shrink, auto basis based on content size */\\n    white-space: nowrap; /* Ensures the text does not wrap */\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column; /* Stack elements vertically on smaller screens */\\n        align-items: start; /* Aligns items to the start of the item block */\\n        min-height: auto; /* Removes fixed height constraint */\\n    }\\n\\n    .result-item img {\\n        width: 100%; /* Full width images on smaller screens */\\n        height: auto; /* Maintain aspect ratio */\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        flex-grow: 1;\\n        width: 100%; /* Full width for details and price */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,8GAA8G;;AAE9G;IACI,sBAAsB,EAAE,qCAAqC;IAC7D,SAAS,EAAE,mCAAmC;IAC9C,UAAU,EAAE,mCAAmC;IAC/C,mCAAmC,EAAE,qCAAqC;AAC9E;;AAEA;IACI,YAAY,UAAU,wCAAwC;IAC9D,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oBAAoB,EAAE,iDAAiD;AAC3E;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB,KAAK,mEAAmE;IAC3F,2BAA2B,EAAE,2CAA2C;IACxE,WAAW,WAAW,+BAA+B;IACrD,iBAAiB,KAAK,+CAA+C;IACrE,cAAc,QAAQ,sBAAsB;IAC5C,aAAa,SAAS,uCAAuC;IAC7D,sBAAsB,EAAE,kDAAkD;AAC9E;;AAEA;IACI,WAAW,EAAE,eAAe;IAC5B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW,YAAY,sDAAsD;IAC7E,gBAAgB,OAAO,2CAA2C;IAClE,aAAa,UAAU,+BAA+B;IACtD,mBAAmB,IAAI,4BAA4B;IACnD,uBAAuB,EAAE,+CAA+C;IACxE,mBAAmB,IAAI,2BAA2B;IAClD,iBAAiB,MAAM,qEAAqE;AAChG;;AAEA;IACI,eAAe,EAAE,yCAAyC;IAC1D,UAAU,EAAE,yDAAyD;IACrE,YAAY,EAAE,gCAAgC;IAC9C,kBAAkB,EAAE,yCAAyC;IAC7D,YAAY;IACZ,4BAA4B,EAAE,iCAAiC;IAC/D,kBAAkB,EAAE,mCAAmC;AAC3D;;AAEA;IACI,eAAe,EAAE,gCAAgC;IACjD,UAAU,EAAE,4CAA4C;IACxD,YAAY,EAAE,6BAA6B;IAC3C,kBAAkB,EAAE,0CAA0C;IAC9D,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,sBAAsB,EAAE,yCAAyC;IACjE,SAAS;IACT,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,mBAAmB,EAAE,uCAAuC;IAC5D,mBAAmB,EAAE,0CAA0C;IAC/D,8BAA8B,EAAE,kDAAkD;IAClF,gBAAgB,EAAE,0DAA0D;IAC5E,aAAa;IACb,kBAAkB;IAClB,oCAAoC;IACpC,gBAAgB;IAChB,gBAAgB,EAAE,yCAAyC;AAC/D;;AAEA;IACI,YAAY,GAAG,gBAAgB;IAC/B,aAAa,EAAE,iBAAiB;IAChC,iBAAiB;IACjB,cAAc,EAAE,+CAA+C;AACnE;;AAEA;IACI,YAAY,EAAE,8BAA8B;IAC5C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB,EAAE,iDAAiD;AACzE;;AAEA;;IAEI,aAAa,EAAE,6CAA6C;AAChE;;AAEA;IACI,cAAc,EAAE,8DAA8D;IAC9E,mBAAmB,EAAE,mCAAmC;AAC5D;;AAEA;IACI;QACI,sBAAsB,EAAE,iDAAiD;QACzE,kBAAkB,EAAE,gDAAgD;QACpE,gBAAgB,EAAE,oCAAoC;IAC1D;;IAEA;QACI,WAAW,EAAE,yCAAyC;QACtD,YAAY,EAAE,0BAA0B;IAC5C;;IAEA;;QAEI,YAAY;QACZ,WAAW,EAAE,qCAAqC;IACtD;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iBAAiB,EAAE,sCAAsC;IAC7D;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: flex-start; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 50px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-right: 2px solid #000; /* Visual separation if desired */\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Clear and visible font size */\\n    width: 20%; /* Adjust based on total width of the form */\\n    height: 50px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    align-items: center; /* Vertically center aligns all children */\\n    justify-content: space-between; /* Spreads out items across the horizontal space */\\n    min-height: 20px; /* Minimum height, can adjust based on your design needs */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    width: 100px;  /* Fixed width */\\n    height: 100px; /* Fixed height */\\n    object-fit: cover;\\n    flex: 0 0 auto; /* Do not grow, do not shrink, and auto basis */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Takes the remaining space */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-right: 20px; /* Optional, for spacing between this and price */\\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Margins to space out text inside details */\\n}\\n\\n.result-item .price {\\n    flex: 0 1 auto; /* Do not grow, can shrink, auto basis based on content size */\\n    white-space: nowrap; /* Ensures the text does not wrap */\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column; /* Stack elements vertically on smaller screens */\\n        align-items: start; /* Aligns items to the start of the item block */\\n        min-height: auto; /* Removes fixed height constraint */\\n    }\\n\\n    .result-item img {\\n        width: 100%; /* Full width images on smaller screens */\\n        height: auto; /* Maintain aspect ratio */\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        flex-grow: 1;\\n        width: 100%; /* Full width for details and price */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHVHQUF1Ryx3RUFBd0UsNERBQTRELDRFQUE0RSxtREFBbUQsc0VBQXNFLHNEQUFzRCxZQUFZLG1CQUFtQix5Q0FBeUMsMEJBQTBCLEdBQUcsa0JBQWtCLDZCQUE2QixvRkFBb0YseUVBQXlFLDZEQUE2RCw0REFBNEQsNkVBQTZFLHlEQUF5RCx5RUFBeUUsbUJBQW1CLHVCQUF1Qiw0REFBNEQsOEVBQThFLDJEQUEyRCw2REFBNkQsb0NBQW9DLDREQUE0RCx1Q0FBdUMsb0JBQW9CLHVCQUF1QixtREFBbUQsaUVBQWlFLHdEQUF3RCx3RUFBd0Usa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwREFBMEQsb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQiwyQkFBMkIsbUVBQW1FLGlGQUFpRiwyRUFBMkUsK0VBQStFLHlCQUF5QiwyQ0FBMkMsdUJBQXVCLHdCQUF3Qiw2Q0FBNkMsc0JBQXNCLHFC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QTRDLDBCQUEwQix1QkFBdUIsa0VBQWtFLGtDQUFrQyx5REFBeUQsdUJBQXVCLHVCQUF1Qiw2Q0FBNkMsR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw2QkFBNkIsOENBQThDLEdBQUcscUJBQXFCLHNCQUFzQixvQkFBb0IsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQ3p1WDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogQXBwbHkgYm94LXNpemluZyB0byBhbGwgZWxlbWVudHMgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiBSZXNldCBtYXJnaW5zIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgcGFkZGluZzogMDsgLyogUmVzZXQgcGFkZGluZyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlOyAvKiBFbnN1cmUgZm9udCBmYW1pbHkgaXMgY29uc2lzdGVudCAqL1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgIC8qIEVuc3VyZSB0aGUgZnVsbCBoZWlnaHQgaXMgYXZhaWxhYmxlICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IC8qIENoYW5nZSBmcm9tIGNlbnRlciB0byBzdHJldGNoIGZvciBmdWxsIHdpZHRoICovXFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBhbGwgY2hpbGQgZWxlbWVudHMgYXJlIGNlbnRlcmVkIGhvcml6b250YWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIEFkanVzdCBiYXNlZCBvbiB5b3VyIGRlc2lnbiBwcmVmZXJlbmNlICovXFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAvKiBGdWxsIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgICAgLyogTWluaW11bSBoZWlnaHQgaXMgdGhlIGZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAgICAgICAvKiBDZW50ZXJzIGNvbnRhaW5lciAqL1xcbiAgICBwYWRkaW5nOiAyMHB4OyAgICAgICAgLyogT3B0aW9uYWwgcGFkZGluZyBmb3IgaW5uZXIgc3BhY2luZyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlcyBwYWRkaW5nIGluIHdpZHRoL2hlaWdodCBjYWxjdWxhdGlvbnMgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgIC8qIEZ1bGwgd2lkdGggdG8gZW5zdXJlIGl0IHRha2VzIHRoZSBjb250YWluZXIgd2lkdGggKi9cXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgICAgICAvKiBMaW1pdHMgdGhlIHdpZHRoIGZvciBiZXR0ZXIgYWVzdGhldGljcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgIC8qIEVuc3VyZXMgdGhlIHVzZSBvZiBGbGV4Ym94ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgLyogQWxpZ24gZWxlbWVudHMgaW4gYSByb3cgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlcnMgaXRlbXMgaG9yaXpvbnRhbGx5IHdpdGhpbiB0aGUgZm9ybSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIC8qIEFsaWduIGl0ZW1zIHZlcnRpY2FsbHkgKi9cXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87ICAgICAvKiBUb3AgYW5kIGJvdHRvbSBtYXJnaW4gZm9yIHNwYWNpbmcsIGF1dG8gZm9yIGhvcml6b250YWwgY2VudGVyaW5nICovXFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE0cHg7IC8qIEFwcHJvcHJpYXRlIGZvbnQgc2l6ZSBmb3IgdmlzaWJpbGl0eSAqL1xcbiAgICB3aWR0aDogNzUlOyAvKiBBZGp1c3QgaWYgbmVjZXNzYXJ5IHRvIGdpdmUgbW9yZSBzcGFjZSB0byB0aGUgYnV0dG9uICovXFxuICAgIGhlaWdodDogNTBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciB1bmlmb3JtaXR5ICovXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgLyogQ29tZm9ydGFibGUgcGFkZGluZyBpbnNpZGUgdGhlIGlucHV0ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDsgLyogVmlzdWFsIHNlcGFyYXRpb24gaWYgZGVzaXJlZCAqL1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW5wdXQgYW5kIGJ1dHRvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgLyogQ2xlYXIgYW5kIHZpc2libGUgZm9udCBzaXplICovXFxuICAgIHdpZHRoOiAyMCU7IC8qIEFkanVzdCBiYXNlZCBvbiB0b3RhbCB3aWR0aCBvZiB0aGUgZm9ybSAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7IC8qIE1hdGNoZXMgdGhlIGlucHV0IGhlaWdodCAqL1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7IC8qIFBhZGRpbmcgZm9yIGEgYmV0dGVyIHRvdWNoIGV4cGVyaWVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogRW5zdXJlcyBpdGVtcyBhcmUgc3RhY2tlZCB2ZXJ0aWNhbGx5ICovXFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQWxpZ25zIGNoaWxkIGVsZW1lbnRzIGhvcml6b250YWxseSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBWZXJ0aWNhbGx5IGNlbnRlciBhbGlnbnMgYWxsIGNoaWxkcmVuICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogU3ByZWFkcyBvdXQgaXRlbXMgYWNyb3NzIHRoZSBob3Jpem9udGFsIHNwYWNlICovXFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7IC8qIE1pbmltdW0gaGVpZ2h0LCBjYW4gYWRqdXN0IGJhc2VkIG9uIHlvdXIgZGVzaWduIG5lZWRzICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBLZWVwcyBhbGwgY29udGVudCB3aXRoaW4gdGhlIGJvcmRlcnMgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAxMDBweDsgIC8qIEZpeGVkIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwcHg7IC8qIEZpeGVkIGhlaWdodCAqL1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgZmxleDogMCAwIGF1dG87IC8qIERvIG5vdCBncm93LCBkbyBub3Qgc2hyaW5rLCBhbmQgYXV0byBiYXNpcyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMge1xcbiAgICBmbGV4LWdyb3c6IDE7IC8qIFRha2VzIHRoZSByZW1haW5pbmcgc3BhY2UgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgLyogT3B0aW9uYWwsIGZvciBzcGFjaW5nIGJldHdlZW4gdGhpcyBhbmQgcHJpY2UgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIGgyLFxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyBwIHtcXG4gICAgbWFyZ2luOiA1cHggMDsgLyogTWFyZ2lucyB0byBzcGFjZSBvdXQgdGV4dCBpbnNpZGUgZGV0YWlscyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgZmxleDogMCAxIGF1dG87IC8qIERvIG5vdCBncm93LCBjYW4gc2hyaW5rLCBhdXRvIGJhc2lzIGJhc2VkIG9uIGNvbnRlbnQgc2l6ZSAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBFbnN1cmVzIHRoZSB0ZXh0IGRvZXMgbm90IHdyYXAgKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yZXN1bHQtaXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBlbGVtZW50cyB2ZXJ0aWNhbGx5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAvKiBBbGlnbnMgaXRlbXMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBpdGVtIGJsb2NrICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyAvKiBSZW1vdmVzIGZpeGVkIGhlaWdodCBjb25zdHJhaW50ICovXFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBpbWFnZXMgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSAuZGV0YWlscyxcXG4gICAgLnJlc3VsdC1pdGVtIC5wcmljZSB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgZGV0YWlscyBhbmQgcHJpY2UgKi9cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnNlYXJjaC1mb3JtLCAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIFJlZHVjZSBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbi5yZXN1bHQtaXRlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4R0FBOEc7O0FBRTlHO0lBQ0ksc0JBQXNCLEVBQUUscUNBQXFDO0lBQzdELFNBQVMsRUFBRSxtQ0FBbUM7SUFDOUMsVUFBVSxFQUFFLG1DQUFtQztJQUMvQyxtQ0FBbUMsRUFBRSxxQ0FBcUM7QUFDOUU7O0FBRUE7SUFDSSxZQUFZLFVBQVUsd0NBQXdDO0lBQzlELFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0IsRUFBRSxpREFBaUQ7QUFDM0U7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUIsS0FBSyxtRUFBbUU7SUFDM0YsMkJBQTJCLEVBQUUsMkNBQTJDO0lBQ3hFLFdBQVcsV0FBVywrQkFBK0I7SUFDckQsaUJBQWlCLEtBQUssK0NBQStDO0lBQ3JFLGNBQWMsUUFBUSxzQkFBc0I7SUFDNUMsYUFBYSxTQUFTLHVDQUF1QztJQUM3RCxzQkFBc0IsRUFBRSxrREFBa0Q7QUFDOUU7O0FBRUE7SUFDSSxXQUFXLEVBQUUsZUFBZTtJQUM1QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVyxZQUFZLHNEQUFzRDtJQUM3RSxnQkFBZ0IsT0FBTywyQ0FBMkM7SUFDbEUsYUFBYSxVQUFVLCtCQUErQjtJQUN0RCxtQkFBbUIsSUFBSSw0QkFBNEI7SUFDbkQsdUJBQXVCLEVBQUUsK0NBQStDO0lBQ3hFLG1CQUFtQixJQUFJLDJCQUEyQjtJQUNsRCxpQkFBaUIsTUFBTSxxRUFBcUU7QUFDaEc7O0FBRUE7SUFDSSxlQUFlLEVBQUUseUNBQXlDO0lBQzFELFVBQVUsRUFBRSx5REFBeUQ7SUFDckUsWUFBWSxFQUFFLGdDQUFnQztJQUM5QyxrQkFBa0IsRUFBRSx5Q0FBeUM7SUFDN0QsWUFBWTtJQUNaLDRCQUE0QixFQUFFLGlDQUFpQztJQUMvRCxrQkFBa0IsRUFBRSxtQ0FBbUM7QUFDM0Q7O0FBRUE7SUFDSSxlQUFlLEVBQUUsZ0NBQWdDO0lBQ2pELFVBQVUsRUFBRSw0Q0FBNEM7SUFDeEQsWUFBWSxFQUFFLDZCQUE2QjtJQUMzQyxrQkFBa0IsRUFBRSwwQ0FBMEM7SUFDOUQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0IsRUFBRSx5Q0FBeUM7SUFDakUsU0FBUztJQUNULGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQixFQUFFLHVDQUF1QztJQUM1RCxtQkFBbUIsRUFBRSwwQ0FBMEM7SUFDL0QsOEJBQThCLEVBQUUsa0RBQWtEO0lBQ2xGLGdCQUFnQixFQUFFLDBEQUEwRDtJQUM1RSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUUseUNBQXlDO0FBQy9EOztBQUVBO0lBQ0ksWUFBWSxHQUFHLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsK0NBQStDO0FBQ25FOztBQUVBO0lBQ0ksWUFBWSxFQUFFLDhCQUE4QjtJQUM1QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0IsRUFBRSxpREFBaUQ7QUFDekU7O0FBRUE7O0lBRUksYUFBYSxFQUFFLDZDQUE2QztBQUNoRTs7QUFFQTtJQUNJLGNBQWMsRUFBRSw4REFBOEQ7SUFDOUUsbUJBQW1CLEVBQUUsbUNBQW1DO0FBQzVEOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0IsRUFBRSxpREFBaUQ7UUFDekUsa0JBQWtCLEVBQUUsZ0RBQWdEO1FBQ3BFLGdCQUFnQixFQUFFLG9DQUFvQztJQUMxRDs7SUFFQTtRQUNJLFdBQVcsRUFBRSx5Q0FBeUM7UUFDdEQsWUFBWSxFQUFFLDBCQUEwQjtJQUM1Qzs7SUFFQTs7UUFFSSxZQUFZO1FBQ1osV0FBVyxFQUFFLHFDQUFxQztJQUN0RDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCLEVBQUUsc0NBQXNDO0lBQzdEO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogQXBwbHkgYm94LXNpemluZyB0byBhbGwgZWxlbWVudHMgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiBSZXNldCBtYXJnaW5zIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgcGFkZGluZzogMDsgLyogUmVzZXQgcGFkZGluZyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlOyAvKiBFbnN1cmUgZm9udCBmYW1pbHkgaXMgY29uc2lzdGVudCAqL1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgIC8qIEVuc3VyZSB0aGUgZnVsbCBoZWlnaHQgaXMgYXZhaWxhYmxlICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IC8qIENoYW5nZSBmcm9tIGNlbnRlciB0byBzdHJldGNoIGZvciBmdWxsIHdpZHRoICovXFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBhbGwgY2hpbGQgZWxlbWVudHMgYXJlIGNlbnRlcmVkIGhvcml6b250YWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIEFkanVzdCBiYXNlZCBvbiB5b3VyIGRlc2lnbiBwcmVmZXJlbmNlICovXFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAvKiBGdWxsIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgICAgLyogTWluaW11bSBoZWlnaHQgaXMgdGhlIGZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAgICAgICAvKiBDZW50ZXJzIGNvbnRhaW5lciAqL1xcbiAgICBwYWRkaW5nOiAyMHB4OyAgICAgICAgLyogT3B0aW9uYWwgcGFkZGluZyBmb3IgaW5uZXIgc3BhY2luZyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlcyBwYWRkaW5nIGluIHdpZHRoL2hlaWdodCBjYWxjdWxhdGlvbnMgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgIC8qIEZ1bGwgd2lkdGggdG8gZW5zdXJlIGl0IHRha2VzIHRoZSBjb250YWluZXIgd2lkdGggKi9cXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgICAgICAvKiBMaW1pdHMgdGhlIHdpZHRoIGZvciBiZXR0ZXIgYWVzdGhldGljcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgIC8qIEVuc3VyZXMgdGhlIHVzZSBvZiBGbGV4Ym94ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgLyogQWxpZ24gZWxlbWVudHMgaW4gYSByb3cgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlcnMgaXRlbXMgaG9yaXpvbnRhbGx5IHdpdGhpbiB0aGUgZm9ybSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIC8qIEFsaWduIGl0ZW1zIHZlcnRpY2FsbHkgKi9cXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87ICAgICAvKiBUb3AgYW5kIGJvdHRvbSBtYXJnaW4gZm9yIHNwYWNpbmcsIGF1dG8gZm9yIGhvcml6b250YWwgY2VudGVyaW5nICovXFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE0cHg7IC8qIEFwcHJvcHJpYXRlIGZvbnQgc2l6ZSBmb3IgdmlzaWJpbGl0eSAqL1xcbiAgICB3aWR0aDogNzUlOyAvKiBBZGp1c3QgaWYgbmVjZXNzYXJ5IHRvIGdpdmUgbW9yZSBzcGFjZSB0byB0aGUgYnV0dG9uICovXFxuICAgIGhlaWdodDogNTBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciB1bmlmb3JtaXR5ICovXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgLyogQ29tZm9ydGFibGUgcGFkZGluZyBpbnNpZGUgdGhlIGlucHV0ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDsgLyogVmlzdWFsIHNlcGFyYXRpb24gaWYgZGVzaXJlZCAqL1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW5wdXQgYW5kIGJ1dHRvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgLyogQ2xlYXIgYW5kIHZpc2libGUgZm9udCBzaXplICovXFxuICAgIHdpZHRoOiAyMCU7IC8qIEFkanVzdCBiYXNlZCBvbiB0b3RhbCB3aWR0aCBvZiB0aGUgZm9ybSAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7IC8qIE1hdGNoZXMgdGhlIGlucHV0IGhlaWdodCAqL1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7IC8qIFBhZGRpbmcgZm9yIGEgYmV0dGVyIHRvdWNoIGV4cGVyaWVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogRW5zdXJlcyBpdGVtcyBhcmUgc3RhY2tlZCB2ZXJ0aWNhbGx5ICovXFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQWxpZ25zIGNoaWxkIGVsZW1lbnRzIGhvcml6b250YWxseSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBWZXJ0aWNhbGx5IGNlbnRlciBhbGlnbnMgYWxsIGNoaWxkcmVuICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogU3ByZWFkcyBvdXQgaXRlbXMgYWNyb3NzIHRoZSBob3Jpem9udGFsIHNwYWNlICovXFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7IC8qIE1pbmltdW0gaGVpZ2h0LCBjYW4gYWRqdXN0IGJhc2VkIG9uIHlvdXIgZGVzaWduIG5lZWRzICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBLZWVwcyBhbGwgY29udGVudCB3aXRoaW4gdGhlIGJvcmRlcnMgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAxMDBweDsgIC8qIEZpeGVkIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwcHg7IC8qIEZpeGVkIGhlaWdodCAqL1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgZmxleDogMCAwIGF1dG87IC8qIERvIG5vdCBncm93LCBkbyBub3Qgc2hyaW5rLCBhbmQgYXV0byBiYXNpcyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMge1xcbiAgICBmbGV4LWdyb3c6IDE7IC8qIFRha2VzIHRoZSByZW1haW5pbmcgc3BhY2UgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgLyogT3B0aW9uYWwsIGZvciBzcGFjaW5nIGJldHdlZW4gdGhpcyBhbmQgcHJpY2UgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIGgyLFxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyBwIHtcXG4gICAgbWFyZ2luOiA1cHggMDsgLyogTWFyZ2lucyB0byBzcGFjZSBvdXQgdGV4dCBpbnNpZGUgZGV0YWlscyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgZmxleDogMCAxIGF1dG87IC8qIERvIG5vdCBncm93LCBjYW4gc2hyaW5rLCBhdXRvIGJhc2lzIGJhc2VkIG9uIGNvbnRlbnQgc2l6ZSAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBFbnN1cmVzIHRoZSB0ZXh0IGRvZXMgbm90IHdyYXAgKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5yZXN1bHQtaXRlbSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFjayBlbGVtZW50cyB2ZXJ0aWNhbGx5IG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAvKiBBbGlnbnMgaXRlbXMgdG8gdGhlIHN0YXJ0IG9mIHRoZSBpdGVtIGJsb2NrICovXFxuICAgICAgICBtaW4taGVpZ2h0OiBhdXRvOyAvKiBSZW1vdmVzIGZpeGVkIGhlaWdodCBjb25zdHJhaW50ICovXFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBpbWFnZXMgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgICAgICBoZWlnaHQ6IGF1dG87IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyAqL1xcbiAgICB9XFxuXFxuICAgIC5yZXN1bHQtaXRlbSAuZGV0YWlscyxcXG4gICAgLnJlc3VsdC1pdGVtIC5wcmljZSB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCBmb3IgZGV0YWlscyBhbmQgcHJpY2UgKi9cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnNlYXJjaC1mb3JtLCAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIFJlZHVjZSBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbi5yZXN1bHQtaXRlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});