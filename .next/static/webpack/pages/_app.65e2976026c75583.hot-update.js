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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: center; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    text-align: center;\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 40px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 12px; /* Clear and visible font size */\\n    width: 15%; /* Adjust based on total width of the form */\\n    height: 40px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    align-items: center; /* Vertically center aligns all children */\\n    justify-content: space-between; /* Spreads out items across the horizontal space */\\n    min-height: 20px; /* Minimum height, can adjust based on your design needs */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    width: 200px;  /* Fixed width */\\n    height: 200px; /* Fixed height */\\n    object-fit: scale-down;\\n    flex: 0 0 auto; /* Do not grow, do not shrink, and auto basis */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Takes the remaining space */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-right: 20px; /* Optional, for spacing between this and price */\\n}\\n\\n.result-item .title {\\n    font-weight: bold;\\n    \\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Margins to space out text inside details */\\n}\\n\\n.result-item .price {\\n    flex: 0 1 auto; /* Do not grow, can shrink, auto basis based on content size */\\n    white-space: nowrap; /* Ensures the text does not wrap */\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column; /* Stack elements vertically on smaller screens */\\n        align-items: start; /* Aligns items to the start of the item block */\\n        min-height: auto; /* Removes fixed height constraint */\\n    }\\n\\n    .result-item img {\\n        width: 100%; /* Full width images on smaller screens */\\n        height: auto; /* Maintain aspect ratio */\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        flex-grow: 1;\\n        width: 100%; /* Full width for details and price */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,8GAA8G;;AAE9G;IACI,sBAAsB,EAAE,qCAAqC;IAC7D,SAAS,EAAE,mCAAmC;IAC9C,UAAU,EAAE,mCAAmC;IAC/C,mCAAmC,EAAE,qCAAqC;AAC9E;;AAEA;IACI,YAAY,UAAU,wCAAwC;IAC9D,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oBAAoB,EAAE,iDAAiD;AAC3E;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB,KAAK,mEAAmE;IAC3F,uBAAuB,EAAE,2CAA2C;IACpE,WAAW,WAAW,+BAA+B;IACrD,iBAAiB,KAAK,+CAA+C;IACrE,cAAc,QAAQ,sBAAsB;IAC5C,aAAa,SAAS,uCAAuC;IAC7D,sBAAsB,EAAE,kDAAkD;AAC9E;;AAEA;IACI,WAAW,EAAE,eAAe;IAC5B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW,YAAY,sDAAsD;IAC7E,gBAAgB,OAAO,2CAA2C;IAClE,aAAa,UAAU,+BAA+B;IACtD,mBAAmB,IAAI,4BAA4B;IACnD,uBAAuB,EAAE,+CAA+C;IACxE,mBAAmB,IAAI,2BAA2B;IAClD,iBAAiB,MAAM,qEAAqE;AAChG;;AAEA;IACI,eAAe,EAAE,yCAAyC;IAC1D,kBAAkB;IAClB,UAAU,EAAE,yDAAyD;IACrE,YAAY,EAAE,gCAAgC;IAC9C,kBAAkB,EAAE,yCAAyC;IAC7D,YAAY;IACZ,+BAA+B;IAC/B,kBAAkB,EAAE,mCAAmC;AAC3D;;AAEA;IACI,eAAe,EAAE,gCAAgC;IACjD,UAAU,EAAE,4CAA4C;IACxD,YAAY,EAAE,6BAA6B;IAC3C,kBAAkB,EAAE,0CAA0C;IAC9D,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,sBAAsB,EAAE,yCAAyC;IACjE,SAAS;IACT,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,mBAAmB,EAAE,uCAAuC;IAC5D,mBAAmB,EAAE,0CAA0C;IAC/D,8BAA8B,EAAE,kDAAkD;IAClF,gBAAgB,EAAE,0DAA0D;IAC5E,aAAa;IACb,kBAAkB;IAClB,oCAAoC;IACpC,gBAAgB;IAChB,gBAAgB,EAAE,yCAAyC;AAC/D;;AAEA;IACI,YAAY,GAAG,gBAAgB;IAC/B,aAAa,EAAE,iBAAiB;IAChC,sBAAsB;IACtB,cAAc,EAAE,+CAA+C;AACnE;;AAEA;IACI,YAAY,EAAE,8BAA8B;IAC5C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB,EAAE,iDAAiD;AACzE;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;;IAEI,aAAa,EAAE,6CAA6C;AAChE;;AAEA;IACI,cAAc,EAAE,8DAA8D;IAC9E,mBAAmB,EAAE,mCAAmC;AAC5D;;AAEA;IACI;QACI,sBAAsB,EAAE,iDAAiD;QACzE,kBAAkB,EAAE,gDAAgD;QACpE,gBAAgB,EAAE,oCAAoC;IAC1D;;IAEA;QACI,WAAW,EAAE,yCAAyC;QACtD,YAAY,EAAE,0BAA0B;IAC5C;;IAEA;;QAEI,YAAY;QACZ,WAAW,EAAE,qCAAqC;IACtD;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iBAAiB,EAAE,sCAAsC;IAC7D;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: center; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    text-align: center;\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 40px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-bottom: 0.5px solid #000;\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 12px; /* Clear and visible font size */\\n    width: 15%; /* Adjust based on total width of the form */\\n    height: 40px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    align-items: center; /* Vertically center aligns all children */\\n    justify-content: space-between; /* Spreads out items across the horizontal space */\\n    min-height: 20px; /* Minimum height, can adjust based on your design needs */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    width: 200px;  /* Fixed width */\\n    height: 200px; /* Fixed height */\\n    object-fit: scale-down;\\n    flex: 0 0 auto; /* Do not grow, do not shrink, and auto basis */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Takes the remaining space */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    margin-right: 20px; /* Optional, for spacing between this and price */\\n}\\n\\n.result-item .title {\\n    font-weight: bold;\\n    \\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Margins to space out text inside details */\\n}\\n\\n.result-item .price {\\n    flex: 0 1 auto; /* Do not grow, can shrink, auto basis based on content size */\\n    white-space: nowrap; /* Ensures the text does not wrap */\\n}\\n\\n@media (max-width: 768px) {\\n    .result-item {\\n        flex-direction: column; /* Stack elements vertically on smaller screens */\\n        align-items: start; /* Aligns items to the start of the item block */\\n        min-height: auto; /* Removes fixed height constraint */\\n    }\\n\\n    .result-item img {\\n        width: 100%; /* Full width images on smaller screens */\\n        height: auto; /* Maintain aspect ratio */\\n    }\\n\\n    .result-item .details,\\n    .result-item .price {\\n        flex-grow: 1;\\n        width: 100%; /* Full width for details and price */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLG1HQUFtRyx3RUFBd0UsNERBQTRELDRFQUE0RSxtREFBbUQsc0VBQXNFLHNEQUFzRCxZQUFZLG1CQUFtQix5Q0FBeUMsMEJBQTBCLEdBQUcsa0JBQWtCLDZCQUE2QixvRkFBb0YseUVBQXlFLDZEQUE2RCw0REFBNEQsNkVBQTZFLHlEQUF5RCx5RUFBeUUsbUJBQW1CLHVCQUF1QixtRUFBbUUsa0JBQWtCLDhFQUE4RSwyREFBMkQsNkRBQTZELHNDQUFzQywwQkFBMEIsdUNBQXVDLG9CQUFvQix1QkFBdUIsbURBQW1ELGlFQUFpRSx3REFBd0Qsd0VBQXdFLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsMERBQTBELG9CQUFvQixHQUFHLG9CQUFvQixvQkFBb0IsMkJBQTJCLG1FQUFtRSxpRkFBaUYsMkVBQTJFLCtFQUErRSx5QkFBeUIsMkNBQTJDLHVCQUF1Qix3QkFBd0IsNkNBQTZDLHNC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QWlELHlCQUF5QixzQkFBc0IsMEZBQTBGLHVDQUF1QywrQkFBK0Isb0JBQW9CLGtDQUFrQyxnRkFBZ0YsNkVBQTZFLDRDQUE0QywwQkFBMEIsdUJBQXVCLGtFQUFrRSxrQ0FBa0MseURBQXlELHVCQUF1Qix1QkFBdUIsNkNBQTZDLEdBQUcsK0JBQStCLG9DQUFvQyxxQkFBcUIsNkJBQTZCLDhDQUE4QyxHQUFHLHFCQUFxQixzQkFBc0Isb0JBQW9CLDBCQUEwQixHQUFHLG1CQUFtQjtBQUMzMlg7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFwcGx5IGJveC1zaXppbmcgdG8gYWxsIGVsZW1lbnRzICovXFxuICAgIG1hcmdpbjogMDsgLyogUmVzZXQgbWFyZ2lucyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIFJlc2V0IHBhZGRpbmcgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTsgLyogRW5zdXJlIGZvbnQgZmFtaWx5IGlzIGNvbnNpc3RlbnQgKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTsgICAgICAgICAvKiBFbnN1cmUgdGhlIGZ1bGwgaGVpZ2h0IGlzIGF2YWlsYWJsZSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBDaGFuZ2UgZnJvbSBjZW50ZXIgdG8gc3RyZXRjaCBmb3IgZnVsbCB3aWR0aCAqL1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgYWxsIGNoaWxkIGVsZW1lbnRzIGFyZSBjZW50ZXJlZCBob3Jpem9udGFsbHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIEFkanVzdCBiYXNlZCBvbiB5b3VyIGRlc2lnbiBwcmVmZXJlbmNlICovXFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAvKiBGdWxsIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgICAgLyogTWluaW11bSBoZWlnaHQgaXMgdGhlIGZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAgICAgICAvKiBDZW50ZXJzIGNvbnRhaW5lciAqL1xcbiAgICBwYWRkaW5nOiAyMHB4OyAgICAgICAgLyogT3B0aW9uYWwgcGFkZGluZyBmb3IgaW5uZXIgc3BhY2luZyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlcyBwYWRkaW5nIGluIHdpZHRoL2hlaWdodCBjYWxjdWxhdGlvbnMgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgIC8qIEZ1bGwgd2lkdGggdG8gZW5zdXJlIGl0IHRha2VzIHRoZSBjb250YWluZXIgd2lkdGggKi9cXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgICAgICAvKiBMaW1pdHMgdGhlIHdpZHRoIGZvciBiZXR0ZXIgYWVzdGhldGljcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgIC8qIEVuc3VyZXMgdGhlIHVzZSBvZiBGbGV4Ym94ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgLyogQWxpZ24gZWxlbWVudHMgaW4gYSByb3cgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlcnMgaXRlbXMgaG9yaXpvbnRhbGx5IHdpdGhpbiB0aGUgZm9ybSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIC8qIEFsaWduIGl0ZW1zIHZlcnRpY2FsbHkgKi9cXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87ICAgICAvKiBUb3AgYW5kIGJvdHRvbSBtYXJnaW4gZm9yIHNwYWNpbmcsIGF1dG8gZm9yIGhvcml6b250YWwgY2VudGVyaW5nICovXFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE0cHg7IC8qIEFwcHJvcHJpYXRlIGZvbnQgc2l6ZSBmb3IgdmlzaWJpbGl0eSAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3NSU7IC8qIEFkanVzdCBpZiBuZWNlc3NhcnkgdG8gZ2l2ZSBtb3JlIHNwYWNlIHRvIHRoZSBidXR0b24gKi9cXG4gICAgaGVpZ2h0OiA0MHB4OyAvKiBGaXhlZCBoZWlnaHQgZm9yIHVuaWZvcm1pdHkgKi9cXG4gICAgcGFkZGluZzogMTBweCAxNXB4OyAvKiBDb21mb3J0YWJsZSBwYWRkaW5nIGluc2lkZSB0aGUgaW5wdXQgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW5wdXQgYW5kIGJ1dHRvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQ2xlYXIgYW5kIHZpc2libGUgZm9udCBzaXplICovXFxuICAgIHdpZHRoOiAxNSU7IC8qIEFkanVzdCBiYXNlZCBvbiB0b3RhbCB3aWR0aCBvZiB0aGUgZm9ybSAqL1xcbiAgICBoZWlnaHQ6IDQwcHg7IC8qIE1hdGNoZXMgdGhlIGlucHV0IGhlaWdodCAqL1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7IC8qIFBhZGRpbmcgZm9yIGEgYmV0dGVyIHRvdWNoIGV4cGVyaWVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogRW5zdXJlcyBpdGVtcyBhcmUgc3RhY2tlZCB2ZXJ0aWNhbGx5ICovXFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQWxpZ25zIGNoaWxkIGVsZW1lbnRzIGhvcml6b250YWxseSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBWZXJ0aWNhbGx5IGNlbnRlciBhbGlnbnMgYWxsIGNoaWxkcmVuICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogU3ByZWFkcyBvdXQgaXRlbXMgYWNyb3NzIHRoZSBob3Jpem9udGFsIHNwYWNlICovXFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7IC8qIE1pbmltdW0gaGVpZ2h0LCBjYW4gYWRqdXN0IGJhc2VkIG9uIHlvdXIgZGVzaWduIG5lZWRzICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBLZWVwcyBhbGwgY29udGVudCB3aXRoaW4gdGhlIGJvcmRlcnMgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAyMDBweDsgIC8qIEZpeGVkIHdpZHRoICovXFxuICAgIGhlaWdodDogMjAwcHg7IC8qIEZpeGVkIGhlaWdodCAqL1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBmbGV4OiAwIDAgYXV0bzsgLyogRG8gbm90IGdyb3csIGRvIG5vdCBzaHJpbmssIGFuZCBhdXRvIGJhc2lzICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgLyogVGFrZXMgdGhlIHJlbWFpbmluZyBzcGFjZSAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAvKiBPcHRpb25hbCwgZm9yIHNwYWNpbmcgYmV0d2VlbiB0aGlzIGFuZCBwcmljZSAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMgaDIsXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIHAge1xcbiAgICBtYXJnaW46IDVweCAwOyAvKiBNYXJnaW5zIHRvIHNwYWNlIG91dCB0ZXh0IGluc2lkZSBkZXRhaWxzICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAucHJpY2Uge1xcbiAgICBmbGV4OiAwIDEgYXV0bzsgLyogRG8gbm90IGdyb3csIGNhbiBzaHJpbmssIGF1dG8gYmFzaXMgYmFzZWQgb24gY29udGVudCBzaXplICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEVuc3VyZXMgdGhlIHRleHQgZG9lcyBub3Qgd3JhcCAqL1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnJlc3VsdC1pdGVtIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGVsZW1lbnRzIHZlcnRpY2FsbHkgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7IC8qIEFsaWducyBpdGVtcyB0byB0aGUgc3RhcnQgb2YgdGhlIGl0ZW0gYmxvY2sgKi9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87IC8qIFJlbW92ZXMgZml4ZWQgaGVpZ2h0IGNvbnN0cmFpbnQgKi9cXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGltYWdlcyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIC5kZXRhaWxzLFxcbiAgICAucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBkZXRhaWxzIGFuZCBwcmljZSAqL1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogUmVkdWNlIG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhHQUE4Rzs7QUFFOUc7SUFDSSxzQkFBc0IsRUFBRSxxQ0FBcUM7SUFDN0QsU0FBUyxFQUFFLG1DQUFtQztJQUM5QyxVQUFVLEVBQUUsbUNBQW1DO0lBQy9DLG1DQUFtQyxFQUFFLHFDQUFxQztBQUM5RTs7QUFFQTtJQUNJLFlBQVksVUFBVSx3Q0FBd0M7SUFDOUQsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFFLGlEQUFpRDtBQUMzRTs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixLQUFLLG1FQUFtRTtJQUMzRix1QkFBdUIsRUFBRSwyQ0FBMkM7SUFDcEUsV0FBVyxXQUFXLCtCQUErQjtJQUNyRCxpQkFBaUIsS0FBSywrQ0FBK0M7SUFDckUsY0FBYyxRQUFRLHNCQUFzQjtJQUM1QyxhQUFhLFNBQVMsdUNBQXVDO0lBQzdELHNCQUFzQixFQUFFLGtEQUFrRDtBQUM5RTs7QUFFQTtJQUNJLFdBQVcsRUFBRSxlQUFlO0lBQzVCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXLFlBQVksc0RBQXNEO0lBQzdFLGdCQUFnQixPQUFPLDJDQUEyQztJQUNsRSxhQUFhLFVBQVUsK0JBQStCO0lBQ3RELG1CQUFtQixJQUFJLDRCQUE0QjtJQUNuRCx1QkFBdUIsRUFBRSwrQ0FBK0M7SUFDeEUsbUJBQW1CLElBQUksMkJBQTJCO0lBQ2xELGlCQUFpQixNQUFNLHFFQUFxRTtBQUNoRzs7QUFFQTtJQUNJLGVBQWUsRUFBRSx5Q0FBeUM7SUFDMUQsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBRSx5REFBeUQ7SUFDckUsWUFBWSxFQUFFLGdDQUFnQztJQUM5QyxrQkFBa0IsRUFBRSx5Q0FBeUM7SUFDN0QsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0IsRUFBRSxtQ0FBbUM7QUFDM0Q7O0FBRUE7SUFDSSxlQUFlLEVBQUUsZ0NBQWdDO0lBQ2pELFVBQVUsRUFBRSw0Q0FBNEM7SUFDeEQsWUFBWSxFQUFFLDZCQUE2QjtJQUMzQyxrQkFBa0IsRUFBRSwwQ0FBMEM7SUFDOUQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0IsRUFBRSx5Q0FBeUM7SUFDakUsU0FBUztJQUNULGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQixFQUFFLHVDQUF1QztJQUM1RCxtQkFBbUIsRUFBRSwwQ0FBMEM7SUFDL0QsOEJBQThCLEVBQUUsa0RBQWtEO0lBQ2xGLGdCQUFnQixFQUFFLDBEQUEwRDtJQUM1RSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUUseUNBQXlDO0FBQy9EOztBQUVBO0lBQ0ksWUFBWSxHQUFHLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsaUJBQWlCO0lBQ2hDLHNCQUFzQjtJQUN0QixjQUFjLEVBQUUsK0NBQStDO0FBQ25FOztBQUVBO0lBQ0ksWUFBWSxFQUFFLDhCQUE4QjtJQUM1QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0IsRUFBRSxpREFBaUQ7QUFDekU7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUVBOztJQUVJLGFBQWEsRUFBRSw2Q0FBNkM7QUFDaEU7O0FBRUE7SUFDSSxjQUFjLEVBQUUsOERBQThEO0lBQzlFLG1CQUFtQixFQUFFLG1DQUFtQztBQUM1RDs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCLEVBQUUsaURBQWlEO1FBQ3pFLGtCQUFrQixFQUFFLGdEQUFnRDtRQUNwRSxnQkFBZ0IsRUFBRSxvQ0FBb0M7SUFDMUQ7O0lBRUE7UUFDSSxXQUFXLEVBQUUseUNBQXlDO1FBQ3RELFlBQVksRUFBRSwwQkFBMEI7SUFDNUM7O0lBRUE7O1FBRUksWUFBWTtRQUNaLFdBQVcsRUFBRSxxQ0FBcUM7SUFDdEQ7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQixFQUFFLHNDQUFzQztJQUM3RDtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFwcGx5IGJveC1zaXppbmcgdG8gYWxsIGVsZW1lbnRzICovXFxuICAgIG1hcmdpbjogMDsgLyogUmVzZXQgbWFyZ2lucyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIFJlc2V0IHBhZGRpbmcgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTsgLyogRW5zdXJlIGZvbnQgZmFtaWx5IGlzIGNvbnNpc3RlbnQgKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTsgICAgICAgICAvKiBFbnN1cmUgdGhlIGZ1bGwgaGVpZ2h0IGlzIGF2YWlsYWJsZSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBDaGFuZ2UgZnJvbSBjZW50ZXIgdG8gc3RyZXRjaCBmb3IgZnVsbCB3aWR0aCAqL1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgYWxsIGNoaWxkIGVsZW1lbnRzIGFyZSBjZW50ZXJlZCBob3Jpem9udGFsbHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIEFkanVzdCBiYXNlZCBvbiB5b3VyIGRlc2lnbiBwcmVmZXJlbmNlICovXFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAvKiBGdWxsIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgICAgLyogTWluaW11bSBoZWlnaHQgaXMgdGhlIGZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAgICAgICAvKiBDZW50ZXJzIGNvbnRhaW5lciAqL1xcbiAgICBwYWRkaW5nOiAyMHB4OyAgICAgICAgLyogT3B0aW9uYWwgcGFkZGluZyBmb3IgaW5uZXIgc3BhY2luZyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlcyBwYWRkaW5nIGluIHdpZHRoL2hlaWdodCBjYWxjdWxhdGlvbnMgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgIC8qIEZ1bGwgd2lkdGggdG8gZW5zdXJlIGl0IHRha2VzIHRoZSBjb250YWluZXIgd2lkdGggKi9cXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgICAgICAvKiBMaW1pdHMgdGhlIHdpZHRoIGZvciBiZXR0ZXIgYWVzdGhldGljcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgIC8qIEVuc3VyZXMgdGhlIHVzZSBvZiBGbGV4Ym94ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgLyogQWxpZ24gZWxlbWVudHMgaW4gYSByb3cgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlcnMgaXRlbXMgaG9yaXpvbnRhbGx5IHdpdGhpbiB0aGUgZm9ybSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIC8qIEFsaWduIGl0ZW1zIHZlcnRpY2FsbHkgKi9cXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87ICAgICAvKiBUb3AgYW5kIGJvdHRvbSBtYXJnaW4gZm9yIHNwYWNpbmcsIGF1dG8gZm9yIGhvcml6b250YWwgY2VudGVyaW5nICovXFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE0cHg7IC8qIEFwcHJvcHJpYXRlIGZvbnQgc2l6ZSBmb3IgdmlzaWJpbGl0eSAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3NSU7IC8qIEFkanVzdCBpZiBuZWNlc3NhcnkgdG8gZ2l2ZSBtb3JlIHNwYWNlIHRvIHRoZSBidXR0b24gKi9cXG4gICAgaGVpZ2h0OiA0MHB4OyAvKiBGaXhlZCBoZWlnaHQgZm9yIHVuaWZvcm1pdHkgKi9cXG4gICAgcGFkZGluZzogMTBweCAxNXB4OyAvKiBDb21mb3J0YWJsZSBwYWRkaW5nIGluc2lkZSB0aGUgaW5wdXQgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMDAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW5wdXQgYW5kIGJ1dHRvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQ2xlYXIgYW5kIHZpc2libGUgZm9udCBzaXplICovXFxuICAgIHdpZHRoOiAxNSU7IC8qIEFkanVzdCBiYXNlZCBvbiB0b3RhbCB3aWR0aCBvZiB0aGUgZm9ybSAqL1xcbiAgICBoZWlnaHQ6IDQwcHg7IC8qIE1hdGNoZXMgdGhlIGlucHV0IGhlaWdodCAqL1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7IC8qIFBhZGRpbmcgZm9yIGEgYmV0dGVyIHRvdWNoIGV4cGVyaWVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogRW5zdXJlcyBpdGVtcyBhcmUgc3RhY2tlZCB2ZXJ0aWNhbGx5ICovXFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQWxpZ25zIGNoaWxkIGVsZW1lbnRzIGhvcml6b250YWxseSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBWZXJ0aWNhbGx5IGNlbnRlciBhbGlnbnMgYWxsIGNoaWxkcmVuICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogU3ByZWFkcyBvdXQgaXRlbXMgYWNyb3NzIHRoZSBob3Jpem9udGFsIHNwYWNlICovXFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7IC8qIE1pbmltdW0gaGVpZ2h0LCBjYW4gYWRqdXN0IGJhc2VkIG9uIHlvdXIgZGVzaWduIG5lZWRzICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBLZWVwcyBhbGwgY29udGVudCB3aXRoaW4gdGhlIGJvcmRlcnMgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgIHdpZHRoOiAyMDBweDsgIC8qIEZpeGVkIHdpZHRoICovXFxuICAgIGhlaWdodDogMjAwcHg7IC8qIEZpeGVkIGhlaWdodCAqL1xcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcbiAgICBmbGV4OiAwIDAgYXV0bzsgLyogRG8gbm90IGdyb3csIGRvIG5vdCBzaHJpbmssIGFuZCBhdXRvIGJhc2lzICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyB7XFxuICAgIGZsZXgtZ3JvdzogMTsgLyogVGFrZXMgdGhlIHJlbWFpbmluZyBzcGFjZSAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAvKiBPcHRpb25hbCwgZm9yIHNwYWNpbmcgYmV0d2VlbiB0aGlzIGFuZCBwcmljZSAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMgaDIsXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIHAge1xcbiAgICBtYXJnaW46IDVweCAwOyAvKiBNYXJnaW5zIHRvIHNwYWNlIG91dCB0ZXh0IGluc2lkZSBkZXRhaWxzICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAucHJpY2Uge1xcbiAgICBmbGV4OiAwIDEgYXV0bzsgLyogRG8gbm90IGdyb3csIGNhbiBzaHJpbmssIGF1dG8gYmFzaXMgYmFzZWQgb24gY29udGVudCBzaXplICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEVuc3VyZXMgdGhlIHRleHQgZG9lcyBub3Qgd3JhcCAqL1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnJlc3VsdC1pdGVtIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGVsZW1lbnRzIHZlcnRpY2FsbHkgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7IC8qIEFsaWducyBpdGVtcyB0byB0aGUgc3RhcnQgb2YgdGhlIGl0ZW0gYmxvY2sgKi9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87IC8qIFJlbW92ZXMgZml4ZWQgaGVpZ2h0IGNvbnN0cmFpbnQgKi9cXG4gICAgfVxcblxcbiAgICAucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGltYWdlcyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgICAgIGhlaWdodDogYXV0bzsgLyogTWFpbnRhaW4gYXNwZWN0IHJhdGlvICovXFxuICAgIH1cXG5cXG4gICAgLnJlc3VsdC1pdGVtIC5kZXRhaWxzLFxcbiAgICAucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIGZvciBkZXRhaWxzIGFuZCBwcmljZSAqL1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogUmVkdWNlIG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});