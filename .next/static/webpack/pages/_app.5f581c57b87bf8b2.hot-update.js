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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: flex-start; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 50px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-right: 2px solid #000; /* Visual separation if desired */\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Clear and visible font size */\\n    width: 20%; /* Adjust based on total width of the form */\\n    height: 50px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: grid;\\n    grid-template-columns: 1fr; /* Sets one column that takes full width */\\n    grid-gap: 20px;\\n    gap: 20px; /* Maintains the gap between grid items */\\n    padding: 10px;\\n}\\n\\n.result-item {\\n    display: grid;\\n    grid-template-columns: 1fr; /* All elements in a single column */\\n    grid-gap: 10px; /* Space between grid items */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Very faint black border with 10% opacity */\\n    padding: 10px;\\n    border-radius: 8px;\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n    margin-bottom: 20px;\\n    background: #fff; \\n}\\n\\n.result-item img {\\n    width: 100%;\\n    aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */\\n    object-fit: contain; /* Ensures the image covers the area without being cut off */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: 1fr; /* Continues to use one column on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,8GAA8G;;AAE9G;IACI,sBAAsB,EAAE,qCAAqC;IAC7D,SAAS,EAAE,mCAAmC;IAC9C,UAAU,EAAE,mCAAmC;IAC/C,mCAAmC,EAAE,qCAAqC;AAC9E;;AAEA;IACI,YAAY,UAAU,wCAAwC;IAC9D,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oBAAoB,EAAE,iDAAiD;AAC3E;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB,KAAK,mEAAmE;IAC3F,2BAA2B,EAAE,2CAA2C;IACxE,WAAW,WAAW,+BAA+B;IACrD,iBAAiB,KAAK,+CAA+C;IACrE,cAAc,QAAQ,sBAAsB;IAC5C,aAAa,SAAS,uCAAuC;IAC7D,sBAAsB,EAAE,kDAAkD;AAC9E;;AAEA;IACI,WAAW,EAAE,eAAe;IAC5B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW,YAAY,sDAAsD;IAC7E,gBAAgB,OAAO,2CAA2C;IAClE,aAAa,UAAU,+BAA+B;IACtD,mBAAmB,IAAI,4BAA4B;IACnD,uBAAuB,EAAE,+CAA+C;IACxE,mBAAmB,IAAI,2BAA2B;IAClD,iBAAiB,MAAM,qEAAqE;AAChG;;AAEA;IACI,eAAe,EAAE,yCAAyC;IAC1D,UAAU,EAAE,yDAAyD;IACrE,YAAY,EAAE,gCAAgC;IAC9C,kBAAkB,EAAE,yCAAyC;IAC7D,YAAY;IACZ,4BAA4B,EAAE,iCAAiC;IAC/D,kBAAkB,EAAE,mCAAmC;AAC3D;;AAEA;IACI,eAAe,EAAE,gCAAgC;IACjD,UAAU,EAAE,4CAA4C;IACxD,YAAY,EAAE,6BAA6B;IAC3C,kBAAkB,EAAE,0CAA0C;IAC9D,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,0BAA0B,EAAE,0CAA0C;IACtE,cAAS;IAAT,SAAS,EAAE,yCAAyC;IACpD,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0BAA0B,EAAE,oCAAoC;IAChE,cAAc,EAAE,6BAA6B;IAC7C,aAAa;IACb,kBAAkB;IAClB,oCAAoC,EAAE,6CAA6C;IACnF,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,mBAAmB,EAAE,oCAAoC;IACzD,mBAAmB,EAAE,4DAA4D;AACrF;;AAEA;IACI;QACI,0BAA0B,EAAE,mDAAmD;IACnF;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iBAAiB,EAAE,sCAAsC;IAC7D;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: flex-start; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 50px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-right: 2px solid #000; /* Visual separation if desired */\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Clear and visible font size */\\n    width: 20%; /* Adjust based on total width of the form */\\n    height: 50px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: grid;\\n    grid-template-columns: 1fr; /* Sets one column that takes full width */\\n    gap: 20px; /* Maintains the gap between grid items */\\n    padding: 10px;\\n}\\n\\n.result-item {\\n    display: grid;\\n    grid-template-columns: 1fr; /* All elements in a single column */\\n    grid-gap: 10px; /* Space between grid items */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1); /* Very faint black border with 10% opacity */\\n    padding: 10px;\\n    border-radius: 8px;\\n    overflow: hidden;\\n    display: flex;\\n    flex-direction: column;\\n    margin-bottom: 20px;\\n    background: #fff; \\n}\\n\\n.result-item img {\\n    width: 100%;\\n    aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */\\n    object-fit: contain; /* Ensures the image covers the area without being cut off */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: 1fr; /* Continues to use one column on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHVHQUF1Ryx3RUFBd0UsNERBQTRELDRFQUE0RSxtREFBbUQsc0VBQXNFLHNEQUFzRCxZQUFZLG1CQUFtQix5Q0FBeUMsMEJBQTBCLEdBQUcsa0JBQWtCLDZCQUE2QixvRkFBb0YseUVBQXlFLDZEQUE2RCw0REFBNEQsNkVBQTZFLHlEQUF5RCx5RUFBeUUsbUJBQW1CLHVCQUF1Qiw0REFBNEQsOEVBQThFLDJEQUEyRCw2REFBNkQsb0NBQW9DLDREQUE0RCx1Q0FBdUMsb0JBQW9CLHVCQUF1QixtREFBbUQsaUVBQWlFLHdEQUF3RCx3RUFBd0Usa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLGtDQUFrQyxnRUFBZ0UsaUJBQWlCLDhEQUE4RCxHQUFHLGtCQUFrQixvQkFBb0Isa0NBQWtDLDJEQUEyRCxrREFBa0QseUJBQXlCLDRDQUE0QyxrRUFBa0UseUJBQXlCLHVCQUF1QixvQkFBb0IsNkJBQTZCLDBCQUEwQix3QkFBd0IsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixnRUFBZ0UsZ0VBQWdFLCtCQUErQixzQkFBc0Isc0NBQXNDLDJEQUEyRCxHQUFHLCtCQUErQixvQ0FBb0MscUJBQXFCLDZCQUE2Qiw4Q0FBOEMsR0FBRyxxQkFBcUIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsR0FBRyxPQUFPLDJGQUEyRixNQUFNLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHlCQUF5QixPQUFPLEtBQUssc0JBQXNCLFdBQVcsVUFBVSxVQUFVLFlBQVkseUJBQXlCLFFBQVEsS0FBSyxVQUFVLFlBQVkseUJBQXlCLHlCQUF5Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix1QkFBdUIseUJBQXlCLE9BQU8sS0FBSyxvQkFBb0IsYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IseUJBQXlCLHVCQUF1Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHlCQUF5QixXQUFXLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHlCQUF5QixhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSx3QkFBd0IsV0FBVyxzQkFBc0IsV0FBVyxPQUFPLEtBQUssVUFBVSx3QkFBd0IsdUJBQXVCLFdBQVcsWUFBWSx5QkFBeUIsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSx3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyxLQUFLLHdCQUF3QixNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsd0JBQXdCLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLCtHQUErRywwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHVHQUF1Ryx3RUFBd0UsNERBQTRELDRFQUE0RSxtREFBbUQsc0VBQXNFLHNEQUFzRCxZQUFZLG1CQUFtQix5Q0FBeUMsMEJBQTBCLEdBQUcsa0JBQWtCLDZCQUE2QixvRkFBb0YseUVBQXlFLDZEQUE2RCw0REFBNEQsNkVBQTZFLHlEQUF5RCx5RUFBeUUsbUJBQW1CLHVCQUF1Qiw0REFBNEQsOEVBQThFLDJEQUEyRCw2REFBNkQsb0NBQW9DLDREQUE0RCx1Q0FBdUMsb0JBQW9CLHVCQUF1QixtREFBbUQsaUVBQWlFLHdEQUF3RCx3RUFBd0Usa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLGtDQUFrQyw0REFBNEQsOERBQThELEdBQUcsa0JBQWtCLG9CQUFvQixrQ0FBa0MsMkRBQTJELGtEQUFrRCx5QkFBeUIsNENBQTRDLGtFQUFrRSx5QkFBeUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHdCQUF3QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdFQUFnRSxnRUFBZ0UsK0JBQStCLHNCQUFzQixzQ0FBc0MsMkRBQTJELEdBQUcsK0JBQStCLG9DQUFvQyxxQkFBcUIsNkJBQTZCLDhDQUE4QyxHQUFHLHFCQUFxQixzQkFBc0Isb0JBQW9CLDBCQUEwQixHQUFHLG1CQUFtQjtBQUMxL1M7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFwcGx5IGJveC1zaXppbmcgdG8gYWxsIGVsZW1lbnRzICovXFxuICAgIG1hcmdpbjogMDsgLyogUmVzZXQgbWFyZ2lucyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIFJlc2V0IHBhZGRpbmcgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTsgLyogRW5zdXJlIGZvbnQgZmFtaWx5IGlzIGNvbnNpc3RlbnQgKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTsgICAgICAgICAvKiBFbnN1cmUgdGhlIGZ1bGwgaGVpZ2h0IGlzIGF2YWlsYWJsZSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBDaGFuZ2UgZnJvbSBjZW50ZXIgdG8gc3RyZXRjaCBmb3IgZnVsbCB3aWR0aCAqL1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgYWxsIGNoaWxkIGVsZW1lbnRzIGFyZSBjZW50ZXJlZCBob3Jpem9udGFsbHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBBZGp1c3QgYmFzZWQgb24geW91ciBkZXNpZ24gcHJlZmVyZW5jZSAqL1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgLyogRnVsbCB3aWR0aCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICAgIC8qIE1pbmltdW0gaGVpZ2h0IGlzIHRoZSBmdWxsIHZpZXdwb3J0IGhlaWdodCAqL1xcbiAgICBtYXJnaW46IDAgYXV0bzsgICAgICAgLyogQ2VudGVycyBjb250YWluZXIgKi9cXG4gICAgcGFkZGluZzogMjBweDsgICAgICAgIC8qIE9wdGlvbmFsIHBhZGRpbmcgZm9yIGlubmVyIHNwYWNpbmcgKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHVkZXMgcGFkZGluZyBpbiB3aWR0aC9oZWlnaHQgY2FsY3VsYXRpb25zICovXFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAvKiBGdWxsIHdpZHRoIHRvIGVuc3VyZSBpdCB0YWtlcyB0aGUgY29udGFpbmVyIHdpZHRoICovXFxuICAgIG1heC13aWR0aDogNjAwcHg7ICAgICAgLyogTGltaXRzIHRoZSB3aWR0aCBmb3IgYmV0dGVyIGFlc3RoZXRpY3MgKi9cXG4gICAgZGlzcGxheTogZmxleDsgICAgICAgICAvKiBFbnN1cmVzIHRoZSB1c2Ugb2YgRmxleGJveCAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAgIC8qIEFsaWduIGVsZW1lbnRzIGluIGEgcm93ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXJzIGl0ZW1zIGhvcml6b250YWxseSB3aXRoaW4gdGhlIGZvcm0gKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAvKiBBbGlnbiBpdGVtcyB2ZXJ0aWNhbGx5ICovXFxuICAgIG1hcmdpbjogMjBweCBhdXRvOyAgICAgLyogVG9wIGFuZCBib3R0b20gbWFyZ2luIGZvciBzcGFjaW5nLCBhdXRvIGZvciBob3Jpem9udGFsIGNlbnRlcmluZyAqL1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4OyAvKiBBcHByb3ByaWF0ZSBmb250IHNpemUgZm9yIHZpc2liaWxpdHkgKi9cXG4gICAgd2lkdGg6IDc1JTsgLyogQWRqdXN0IGlmIG5lY2Vzc2FyeSB0byBnaXZlIG1vcmUgc3BhY2UgdG8gdGhlIGJ1dHRvbiAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgdW5pZm9ybWl0eSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIENvbWZvcnRhYmxlIHBhZGRpbmcgaW5zaWRlIHRoZSBpbnB1dCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7IC8qIFZpc3VhbCBzZXBhcmF0aW9uIGlmIGRlc2lyZWQgKi9cXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGlucHV0IGFuZCBidXR0b24gKi9cXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEwcHg7IC8qIENsZWFyIGFuZCB2aXNpYmxlIGZvbnQgc2l6ZSAqL1xcbiAgICB3aWR0aDogMjAlOyAvKiBBZGp1c3QgYmFzZWQgb24gdG90YWwgd2lkdGggb2YgdGhlIGZvcm0gKi9cXG4gICAgaGVpZ2h0OiA1MHB4OyAvKiBNYXRjaGVzIHRoZSBpbnB1dCBoZWlnaHQgKi9cXG4gICAgcGFkZGluZzogMTJweCAyMHB4OyAvKiBQYWRkaW5nIGZvciBhIGJldHRlciB0b3VjaCBleHBlcmllbmNlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG5cXG4jc2VhcmNoUmVzdWx0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBTZXRzIG9uZSBjb2x1bW4gdGhhdCB0YWtlcyBmdWxsIHdpZHRoICovXFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7IC8qIE1haW50YWlucyB0aGUgZ2FwIGJldHdlZW4gZ3JpZCBpdGVtcyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogQWxsIGVsZW1lbnRzIGluIGEgc2luZ2xlIGNvbHVtbiAqL1xcbiAgICBncmlkLWdhcDogMTBweDsgLyogU3BhY2UgYmV0d2VlbiBncmlkIGl0ZW1zICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBWZXJ5IGZhaW50IGJsYWNrIGJvcmRlciB3aXRoIDEwJSBvcGFjaXR5ICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjsgXFxufVxcblxcbi5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgLyogTWFpbnRhaW5zIGEgc3F1YXJlIGFzcGVjdCByYXRpbyAqL1xcbiAgICBvYmplY3QtZml0OiBjb250YWluOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFyZWEgd2l0aG91dCBiZWluZyBjdXQgb2ZmICovXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogQ29udGludWVzIHRvIHVzZSBvbmUgY29sdW1uIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogUmVkdWNlIG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhHQUE4Rzs7QUFFOUc7SUFDSSxzQkFBc0IsRUFBRSxxQ0FBcUM7SUFDN0QsU0FBUyxFQUFFLG1DQUFtQztJQUM5QyxVQUFVLEVBQUUsbUNBQW1DO0lBQy9DLG1DQUFtQyxFQUFFLHFDQUFxQztBQUM5RTs7QUFFQTtJQUNJLFlBQVksVUFBVSx3Q0FBd0M7SUFDOUQsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFFLGlEQUFpRDtBQUMzRTs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixLQUFLLG1FQUFtRTtJQUMzRiwyQkFBMkIsRUFBRSwyQ0FBMkM7SUFDeEUsV0FBVyxXQUFXLCtCQUErQjtJQUNyRCxpQkFBaUIsS0FBSywrQ0FBK0M7SUFDckUsY0FBYyxRQUFRLHNCQUFzQjtJQUM1QyxhQUFhLFNBQVMsdUNBQXVDO0lBQzdELHNCQUFzQixFQUFFLGtEQUFrRDtBQUM5RTs7QUFFQTtJQUNJLFdBQVcsRUFBRSxlQUFlO0lBQzVCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXLFlBQVksc0RBQXNEO0lBQzdFLGdCQUFnQixPQUFPLDJDQUEyQztJQUNsRSxhQUFhLFVBQVUsK0JBQStCO0lBQ3RELG1CQUFtQixJQUFJLDRCQUE0QjtJQUNuRCx1QkFBdUIsRUFBRSwrQ0FBK0M7SUFDeEUsbUJBQW1CLElBQUksMkJBQTJCO0lBQ2xELGlCQUFpQixNQUFNLHFFQUFxRTtBQUNoRzs7QUFFQTtJQUNJLGVBQWUsRUFBRSx5Q0FBeUM7SUFDMUQsVUFBVSxFQUFFLHlEQUF5RDtJQUNyRSxZQUFZLEVBQUUsZ0NBQWdDO0lBQzlDLGtCQUFrQixFQUFFLHlDQUF5QztJQUM3RCxZQUFZO0lBQ1osNEJBQTRCLEVBQUUsaUNBQWlDO0lBQy9ELGtCQUFrQixFQUFFLG1DQUFtQztBQUMzRDs7QUFFQTtJQUNJLGVBQWUsRUFBRSxnQ0FBZ0M7SUFDakQsVUFBVSxFQUFFLDRDQUE0QztJQUN4RCxZQUFZLEVBQUUsNkJBQTZCO0lBQzNDLGtCQUFrQixFQUFFLDBDQUEwQztJQUM5RCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQixFQUFFLDBDQUEwQztJQUN0RSxjQUFTO0lBQVQsU0FBUyxFQUFFLHlDQUF5QztJQUNwRCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQixFQUFFLG9DQUFvQztJQUNoRSxjQUFjLEVBQUUsNkJBQTZCO0lBQzdDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0NBQW9DLEVBQUUsNkNBQTZDO0lBQ25GLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUIsRUFBRSxvQ0FBb0M7SUFDekQsbUJBQW1CLEVBQUUsNERBQTREO0FBQ3JGOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEIsRUFBRSxtREFBbUQ7SUFDbkY7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQixFQUFFLHNDQUFzQztJQUM3RDtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFwcGx5IGJveC1zaXppbmcgdG8gYWxsIGVsZW1lbnRzICovXFxuICAgIG1hcmdpbjogMDsgLyogUmVzZXQgbWFyZ2lucyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIFJlc2V0IHBhZGRpbmcgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTsgLyogRW5zdXJlIGZvbnQgZmFtaWx5IGlzIGNvbnNpc3RlbnQgKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTsgICAgICAgICAvKiBFbnN1cmUgdGhlIGZ1bGwgaGVpZ2h0IGlzIGF2YWlsYWJsZSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBDaGFuZ2UgZnJvbSBjZW50ZXIgdG8gc3RyZXRjaCBmb3IgZnVsbCB3aWR0aCAqL1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgYWxsIGNoaWxkIGVsZW1lbnRzIGFyZSBjZW50ZXJlZCBob3Jpem9udGFsbHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBBZGp1c3QgYmFzZWQgb24geW91ciBkZXNpZ24gcHJlZmVyZW5jZSAqL1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgLyogRnVsbCB3aWR0aCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICAgIC8qIE1pbmltdW0gaGVpZ2h0IGlzIHRoZSBmdWxsIHZpZXdwb3J0IGhlaWdodCAqL1xcbiAgICBtYXJnaW46IDAgYXV0bzsgICAgICAgLyogQ2VudGVycyBjb250YWluZXIgKi9cXG4gICAgcGFkZGluZzogMjBweDsgICAgICAgIC8qIE9wdGlvbmFsIHBhZGRpbmcgZm9yIGlubmVyIHNwYWNpbmcgKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHVkZXMgcGFkZGluZyBpbiB3aWR0aC9oZWlnaHQgY2FsY3VsYXRpb25zICovXFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAvKiBGdWxsIHdpZHRoIHRvIGVuc3VyZSBpdCB0YWtlcyB0aGUgY29udGFpbmVyIHdpZHRoICovXFxuICAgIG1heC13aWR0aDogNjAwcHg7ICAgICAgLyogTGltaXRzIHRoZSB3aWR0aCBmb3IgYmV0dGVyIGFlc3RoZXRpY3MgKi9cXG4gICAgZGlzcGxheTogZmxleDsgICAgICAgICAvKiBFbnN1cmVzIHRoZSB1c2Ugb2YgRmxleGJveCAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAgIC8qIEFsaWduIGVsZW1lbnRzIGluIGEgcm93ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXJzIGl0ZW1zIGhvcml6b250YWxseSB3aXRoaW4gdGhlIGZvcm0gKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAvKiBBbGlnbiBpdGVtcyB2ZXJ0aWNhbGx5ICovXFxuICAgIG1hcmdpbjogMjBweCBhdXRvOyAgICAgLyogVG9wIGFuZCBib3R0b20gbWFyZ2luIGZvciBzcGFjaW5nLCBhdXRvIGZvciBob3Jpem9udGFsIGNlbnRlcmluZyAqL1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4OyAvKiBBcHByb3ByaWF0ZSBmb250IHNpemUgZm9yIHZpc2liaWxpdHkgKi9cXG4gICAgd2lkdGg6IDc1JTsgLyogQWRqdXN0IGlmIG5lY2Vzc2FyeSB0byBnaXZlIG1vcmUgc3BhY2UgdG8gdGhlIGJ1dHRvbiAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgdW5pZm9ybWl0eSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIENvbWZvcnRhYmxlIHBhZGRpbmcgaW5zaWRlIHRoZSBpbnB1dCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7IC8qIFZpc3VhbCBzZXBhcmF0aW9uIGlmIGRlc2lyZWQgKi9cXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGlucHV0IGFuZCBidXR0b24gKi9cXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEwcHg7IC8qIENsZWFyIGFuZCB2aXNpYmxlIGZvbnQgc2l6ZSAqL1xcbiAgICB3aWR0aDogMjAlOyAvKiBBZGp1c3QgYmFzZWQgb24gdG90YWwgd2lkdGggb2YgdGhlIGZvcm0gKi9cXG4gICAgaGVpZ2h0OiA1MHB4OyAvKiBNYXRjaGVzIHRoZSBpbnB1dCBoZWlnaHQgKi9cXG4gICAgcGFkZGluZzogMTJweCAyMHB4OyAvKiBQYWRkaW5nIGZvciBhIGJldHRlciB0b3VjaCBleHBlcmllbmNlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG5cXG4jc2VhcmNoUmVzdWx0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBTZXRzIG9uZSBjb2x1bW4gdGhhdCB0YWtlcyBmdWxsIHdpZHRoICovXFxuICAgIGdhcDogMjBweDsgLyogTWFpbnRhaW5zIHRoZSBnYXAgYmV0d2VlbiBncmlkIGl0ZW1zICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBBbGwgZWxlbWVudHMgaW4gYSBzaW5nbGUgY29sdW1uICovXFxuICAgIGdyaWQtZ2FwOiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGdyaWQgaXRlbXMgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIFZlcnkgZmFpbnQgYmxhY2sgYm9yZGVyIHdpdGggMTAlIG9wYWNpdHkgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyBcXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAvKiBNYWludGFpbnMgYSBzcXVhcmUgYXNwZWN0IHJhdGlvICovXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47IC8qIEVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgYXJlYSB3aXRob3V0IGJlaW5nIGN1dCBvZmYgKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBDb250aW51ZXMgdG8gdXNlIG9uZSBjb2x1bW4gb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zZWFyY2gtZm9ybSwgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiBSZWR1Y2UgbWFyZ2luIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgfVxcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaDIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjMzMzOyAgXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});