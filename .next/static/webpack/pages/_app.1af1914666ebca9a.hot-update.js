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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: flex-start; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 50px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-right: 2px solid #000; /* Visual separation if desired */\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Clear and visible font size */\\n    width: 20%; /* Adjust based on total width of the form */\\n    height: 50px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    align-items: center; /* Vertically center aligns all children */\\n    justify-content: space-between; /* Spreads out items across the horizontal space */\\n    min-height: 120px; /* Minimum height, can adjust based on your design needs */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    width: 100px; /* Fixed width for images */\\n    height: 100px; /* Fixed height for images */\\n    object-fit: cover; /* Ensures the image covers the allocated space */\\n    margin-right: 20px; /* Space between image and text */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Allows the details section to fill remaining space */\\n    display: flex;\\n    flex-direction: column; /* Stacks details like title, brand vertically */\\n    justify-content: center; /* Centers them vertically */\\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Adds a little space between title and other details */\\n}\\n\\n.result-item .price {\\n    white-space: nowrap; /* Ensures price does not wrap */\\n    padding-left: 20px; /* Space between details and price */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\\n        gap: 10px;\\n    }\\n    .result-item img {\\n        aspect-ratio: 4 / 3; /* Adjusts to a more rectangular shape on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,8GAA8G;;AAE9G;IACI,sBAAsB,EAAE,qCAAqC;IAC7D,SAAS,EAAE,mCAAmC;IAC9C,UAAU,EAAE,mCAAmC;IAC/C,mCAAmC,EAAE,qCAAqC;AAC9E;;AAEA;IACI,YAAY,UAAU,wCAAwC;IAC9D,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,oBAAoB,EAAE,iDAAiD;AAC3E;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB,KAAK,mEAAmE;IAC3F,2BAA2B,EAAE,2CAA2C;IACxE,WAAW,WAAW,+BAA+B;IACrD,iBAAiB,KAAK,+CAA+C;IACrE,cAAc,QAAQ,sBAAsB;IAC5C,aAAa,SAAS,uCAAuC;IAC7D,sBAAsB,EAAE,kDAAkD;AAC9E;;AAEA;IACI,WAAW,EAAE,eAAe;IAC5B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW,YAAY,sDAAsD;IAC7E,gBAAgB,OAAO,2CAA2C;IAClE,aAAa,UAAU,+BAA+B;IACtD,mBAAmB,IAAI,4BAA4B;IACnD,uBAAuB,EAAE,+CAA+C;IACxE,mBAAmB,IAAI,2BAA2B;IAClD,iBAAiB,MAAM,qEAAqE;AAChG;;AAEA;IACI,eAAe,EAAE,yCAAyC;IAC1D,UAAU,EAAE,yDAAyD;IACrE,YAAY,EAAE,gCAAgC;IAC9C,kBAAkB,EAAE,yCAAyC;IAC7D,YAAY;IACZ,4BAA4B,EAAE,iCAAiC;IAC/D,kBAAkB,EAAE,mCAAmC;AAC3D;;AAEA;IACI,eAAe,EAAE,gCAAgC;IACjD,UAAU,EAAE,4CAA4C;IACxD,YAAY,EAAE,6BAA6B;IAC3C,kBAAkB,EAAE,0CAA0C;IAC9D,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,sBAAsB,EAAE,yCAAyC;IACjE,SAAS;IACT,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,mBAAmB,EAAE,uCAAuC;IAC5D,mBAAmB,EAAE,0CAA0C;IAC/D,8BAA8B,EAAE,kDAAkD;IAClF,iBAAiB,EAAE,0DAA0D;IAC7E,aAAa;IACb,kBAAkB;IAClB,oCAAoC;IACpC,gBAAgB;IAChB,gBAAgB,EAAE,yCAAyC;AAC/D;;AAEA;IACI,YAAY,EAAE,2BAA2B;IACzC,aAAa,EAAE,4BAA4B;IAC3C,iBAAiB,EAAE,iDAAiD;IACpE,kBAAkB,EAAE,iCAAiC;AACzD;;AAEA;IACI,YAAY,EAAE,uDAAuD;IACrE,aAAa;IACb,sBAAsB,EAAE,gDAAgD;IACxE,uBAAuB,EAAE,4BAA4B;AACzD;;AAEA;;IAEI,aAAa,EAAE,wDAAwD;AAC3E;;AAEA;IACI,mBAAmB,EAAE,gCAAgC;IACrD,kBAAkB,EAAE,oCAAoC;AAC5D;;AAEA;IACI;QACI,4DAA4D;QAC5D,SAAS;IACb;IACA;QACI,mBAAmB,EAAE,2DAA2D;IACpF;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iBAAiB,EAAE,sCAAsC;IAC7D;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: 100%;         /* Ensure the full height is available */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: stretch; /* Change from center to stretch for full width */\\n}\\n\\n\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    /* This ensures that all child elements are centered horizontally */\\n    justify-content: flex-start; /* Adjust based on your design preference */\\n    width: 100%;          /* Full width of the viewport */\\n    min-height: 100vh;    /* Minimum height is the full viewport height */\\n    margin: 0 auto;       /* Centers container */\\n    padding: 20px;        /* Optional padding for inner spacing */\\n    box-sizing: border-box; /* Includes padding in width/height calculations */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;           /* Full width to ensure it takes the container width */\\n    max-width: 600px;      /* Limits the width for better aesthetics */\\n    display: flex;         /* Ensures the use of Flexbox */\\n    flex-direction: row;   /* Align elements in a row */\\n    justify-content: center; /* Centers items horizontally within the form */\\n    align-items: center;   /* Align items vertically */\\n    margin: 20px auto;     /* Top and bottom margin for spacing, auto for horizontal centering */\\n}\\n\\n.search-input {\\n    font-size: 14px; /* Appropriate font size for visibility */\\n    width: 75%; /* Adjust if necessary to give more space to the button */\\n    height: 50px; /* Fixed height for uniformity */\\n    padding: 10px 15px; /* Comfortable padding inside the input */\\n    border: none;\\n    border-right: 2px solid #000; /* Visual separation if desired */\\n    margin-right: 10px; /* Space between input and button */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Clear and visible font size */\\n    width: 20%; /* Adjust based on total width of the form */\\n    height: 50px; /* Matches the input height */\\n    padding: 12px 20px; /* Padding for a better touch experience */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n\\n#searchResults {\\n    display: flex;\\n    flex-direction: column; /* Ensures items are stacked vertically */\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n\\n.result-item {\\n    display: flex;\\n    flex-direction: row; /* Aligns child elements horizontally */\\n    align-items: center; /* Vertically center aligns all children */\\n    justify-content: space-between; /* Spreads out items across the horizontal space */\\n    min-height: 120px; /* Minimum height, can adjust based on your design needs */\\n    padding: 10px;\\n    border-radius: 8px;\\n    border: 1px solid rgba(0, 0, 0, 0.1);\\n    background: #fff;\\n    overflow: hidden; /* Keeps all content within the borders */\\n}\\n\\n.result-item img {\\n    width: 100px; /* Fixed width for images */\\n    height: 100px; /* Fixed height for images */\\n    object-fit: cover; /* Ensures the image covers the allocated space */\\n    margin-right: 20px; /* Space between image and text */\\n}\\n\\n.result-item .details {\\n    flex-grow: 1; /* Allows the details section to fill remaining space */\\n    display: flex;\\n    flex-direction: column; /* Stacks details like title, brand vertically */\\n    justify-content: center; /* Centers them vertically */\\n}\\n\\n.result-item .details h2,\\n.result-item .details p {\\n    margin: 5px 0; /* Adds a little space between title and other details */\\n}\\n\\n.result-item .price {\\n    white-space: nowrap; /* Ensures price does not wrap */\\n    padding-left: 20px; /* Space between details and price */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\\n        gap: 10px;\\n    }\\n    .result-item img {\\n        aspect-ratio: 4 / 3; /* Adjusts to a more rectangular shape on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIseURBQXlELGlCQUFpQixvQkFBb0IsNkJBQTZCLDRCQUE0QixxREFBcUQsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHVHQUF1Ryx3RUFBd0UsNERBQTRELDRFQUE0RSxtREFBbUQsc0VBQXNFLHNEQUFzRCxZQUFZLG1CQUFtQix5Q0FBeUMsMEJBQTBCLEdBQUcsa0JBQWtCLDZCQUE2QixvRkFBb0YseUVBQXlFLDZEQUE2RCw0REFBNEQsNkVBQTZFLHlEQUF5RCx5RUFBeUUsbUJBQW1CLHVCQUF1Qiw0REFBNEQsOEVBQThFLDJEQUEyRCw2REFBNkQsb0NBQW9DLDREQUE0RCx1Q0FBdUMsb0JBQW9CLHVCQUF1QixtREFBbUQsaUVBQWlFLHdEQUF3RCx3RUFBd0Usa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwREFBMEQsb0JBQW9CLEdBQUcsb0JBQW9CLG9CQUFvQiwyQkFBMkIsbUVBQW1FLGlGQUFpRiw0RUFBNEUsK0VBQStFLHlCQUF5QiwyQ0FBMkMsdUJBQXVCLHdCQUF3Qiw2Q0FBNkMsc0JBQXNCLG9C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QjtBQUNqclc7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFwcGx5IGJveC1zaXppbmcgdG8gYWxsIGVsZW1lbnRzICovXFxuICAgIG1hcmdpbjogMDsgLyogUmVzZXQgbWFyZ2lucyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIFJlc2V0IHBhZGRpbmcgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTsgLyogRW5zdXJlIGZvbnQgZmFtaWx5IGlzIGNvbnNpc3RlbnQgKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTsgICAgICAgICAvKiBFbnN1cmUgdGhlIGZ1bGwgaGVpZ2h0IGlzIGF2YWlsYWJsZSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBDaGFuZ2UgZnJvbSBjZW50ZXIgdG8gc3RyZXRjaCBmb3IgZnVsbCB3aWR0aCAqL1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogVGhpcyBlbnN1cmVzIHRoYXQgYWxsIGNoaWxkIGVsZW1lbnRzIGFyZSBjZW50ZXJlZCBob3Jpem9udGFsbHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBBZGp1c3QgYmFzZWQgb24geW91ciBkZXNpZ24gcHJlZmVyZW5jZSAqL1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgLyogRnVsbCB3aWR0aCBvZiB0aGUgdmlld3BvcnQgKi9cXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICAgIC8qIE1pbmltdW0gaGVpZ2h0IGlzIHRoZSBmdWxsIHZpZXdwb3J0IGhlaWdodCAqL1xcbiAgICBtYXJnaW46IDAgYXV0bzsgICAgICAgLyogQ2VudGVycyBjb250YWluZXIgKi9cXG4gICAgcGFkZGluZzogMjBweDsgICAgICAgIC8qIE9wdGlvbmFsIHBhZGRpbmcgZm9yIGlubmVyIHNwYWNpbmcgKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHVkZXMgcGFkZGluZyBpbiB3aWR0aC9oZWlnaHQgY2FsY3VsYXRpb25zICovXFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAvKiBGdWxsIHdpZHRoIHRvIGVuc3VyZSBpdCB0YWtlcyB0aGUgY29udGFpbmVyIHdpZHRoICovXFxuICAgIG1heC13aWR0aDogNjAwcHg7ICAgICAgLyogTGltaXRzIHRoZSB3aWR0aCBmb3IgYmV0dGVyIGFlc3RoZXRpY3MgKi9cXG4gICAgZGlzcGxheTogZmxleDsgICAgICAgICAvKiBFbnN1cmVzIHRoZSB1c2Ugb2YgRmxleGJveCAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAgIC8qIEFsaWduIGVsZW1lbnRzIGluIGEgcm93ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXJzIGl0ZW1zIGhvcml6b250YWxseSB3aXRoaW4gdGhlIGZvcm0gKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAvKiBBbGlnbiBpdGVtcyB2ZXJ0aWNhbGx5ICovXFxuICAgIG1hcmdpbjogMjBweCBhdXRvOyAgICAgLyogVG9wIGFuZCBib3R0b20gbWFyZ2luIGZvciBzcGFjaW5nLCBhdXRvIGZvciBob3Jpem9udGFsIGNlbnRlcmluZyAqL1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4OyAvKiBBcHByb3ByaWF0ZSBmb250IHNpemUgZm9yIHZpc2liaWxpdHkgKi9cXG4gICAgd2lkdGg6IDc1JTsgLyogQWRqdXN0IGlmIG5lY2Vzc2FyeSB0byBnaXZlIG1vcmUgc3BhY2UgdG8gdGhlIGJ1dHRvbiAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgdW5pZm9ybWl0eSAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIENvbWZvcnRhYmxlIHBhZGRpbmcgaW5zaWRlIHRoZSBpbnB1dCAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMwMDA7IC8qIFZpc3VhbCBzZXBhcmF0aW9uIGlmIGRlc2lyZWQgKi9cXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBTcGFjZSBiZXR3ZWVuIGlucHV0IGFuZCBidXR0b24gKi9cXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEwcHg7IC8qIENsZWFyIGFuZCB2aXNpYmxlIGZvbnQgc2l6ZSAqL1xcbiAgICB3aWR0aDogMjAlOyAvKiBBZGp1c3QgYmFzZWQgb24gdG90YWwgd2lkdGggb2YgdGhlIGZvcm0gKi9cXG4gICAgaGVpZ2h0OiA1MHB4OyAvKiBNYXRjaGVzIHRoZSBpbnB1dCBoZWlnaHQgKi9cXG4gICAgcGFkZGluZzogMTJweCAyMHB4OyAvKiBQYWRkaW5nIGZvciBhIGJldHRlciB0b3VjaCBleHBlcmllbmNlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG5cXG4jc2VhcmNoUmVzdWx0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIEVuc3VyZXMgaXRlbXMgYXJlIHN0YWNrZWQgdmVydGljYWxseSAqL1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcblxcbi5yZXN1bHQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IC8qIEFsaWducyBjaGlsZCBlbGVtZW50cyBob3Jpem9udGFsbHkgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogVmVydGljYWxseSBjZW50ZXIgYWxpZ25zIGFsbCBjaGlsZHJlbiAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwcmVhZHMgb3V0IGl0ZW1zIGFjcm9zcyB0aGUgaG9yaXpvbnRhbCBzcGFjZSAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMjBweDsgLyogTWluaW11bSBoZWlnaHQsIGNhbiBhZGp1c3QgYmFzZWQgb24geW91ciBkZXNpZ24gbmVlZHMgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIEtlZXBzIGFsbCBjb250ZW50IHdpdGhpbiB0aGUgYm9yZGVycyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgd2lkdGg6IDEwMHB4OyAvKiBGaXhlZCB3aWR0aCBmb3IgaW1hZ2VzICovXFxuICAgIGhlaWdodDogMTAwcHg7IC8qIEZpeGVkIGhlaWdodCBmb3IgaW1hZ2VzICovXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFsbG9jYXRlZCBzcGFjZSAqL1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW1hZ2UgYW5kIHRleHQgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIHtcXG4gICAgZmxleC1ncm93OiAxOyAvKiBBbGxvd3MgdGhlIGRldGFpbHMgc2VjdGlvbiB0byBmaWxsIHJlbWFpbmluZyBzcGFjZSAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFja3MgZGV0YWlscyBsaWtlIHRpdGxlLCBicmFuZCB2ZXJ0aWNhbGx5ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXJzIHRoZW0gdmVydGljYWxseSAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMgaDIsXFxuLnJlc3VsdC1pdGVtIC5kZXRhaWxzIHAge1xcbiAgICBtYXJnaW46IDVweCAwOyAvKiBBZGRzIGEgbGl0dGxlIHNwYWNlIGJldHdlZW4gdGl0bGUgYW5kIG90aGVyIGRldGFpbHMgKi9cXG59XFxuXFxuLnJlc3VsdC1pdGVtIC5wcmljZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEVuc3VyZXMgcHJpY2UgZG9lcyBub3Qgd3JhcCAqL1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IC8qIFNwYWNlIGJldHdlZW4gZGV0YWlscyBhbmQgcHJpY2UgKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcbiAgICAucmVzdWx0LWl0ZW0gaW1nIHtcXG4gICAgICAgIGFzcGVjdC1yYXRpbzogNCAvIDM7IC8qIEFkanVzdHMgdG8gYSBtb3JlIHJlY3Rhbmd1bGFyIHNoYXBlIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAuc2VhcmNoLWZvcm0sICNzZWFyY2hSZXN1bHRzIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bzsgLyogUmVkdWNlIG1hcmdpbiBmb3Igc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuLnJlc3VsdC1pdGVtIGgyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzMzMzsgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhHQUE4Rzs7QUFFOUc7SUFDSSxzQkFBc0IsRUFBRSxxQ0FBcUM7SUFDN0QsU0FBUyxFQUFFLG1DQUFtQztJQUM5QyxVQUFVLEVBQUUsbUNBQW1DO0lBQy9DLG1DQUFtQyxFQUFFLHFDQUFxQztBQUM5RTs7QUFFQTtJQUNJLFlBQVksVUFBVSx3Q0FBd0M7SUFDOUQsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQixFQUFFLGlEQUFpRDtBQUMzRTs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQixLQUFLLG1FQUFtRTtJQUMzRiwyQkFBMkIsRUFBRSwyQ0FBMkM7SUFDeEUsV0FBVyxXQUFXLCtCQUErQjtJQUNyRCxpQkFBaUIsS0FBSywrQ0FBK0M7SUFDckUsY0FBYyxRQUFRLHNCQUFzQjtJQUM1QyxhQUFhLFNBQVMsdUNBQXVDO0lBQzdELHNCQUFzQixFQUFFLGtEQUFrRDtBQUM5RTs7QUFFQTtJQUNJLFdBQVcsRUFBRSxlQUFlO0lBQzVCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXLFlBQVksc0RBQXNEO0lBQzdFLGdCQUFnQixPQUFPLDJDQUEyQztJQUNsRSxhQUFhLFVBQVUsK0JBQStCO0lBQ3RELG1CQUFtQixJQUFJLDRCQUE0QjtJQUNuRCx1QkFBdUIsRUFBRSwrQ0FBK0M7SUFDeEUsbUJBQW1CLElBQUksMkJBQTJCO0lBQ2xELGlCQUFpQixNQUFNLHFFQUFxRTtBQUNoRzs7QUFFQTtJQUNJLGVBQWUsRUFBRSx5Q0FBeUM7SUFDMUQsVUFBVSxFQUFFLHlEQUF5RDtJQUNyRSxZQUFZLEVBQUUsZ0NBQWdDO0lBQzlDLGtCQUFrQixFQUFFLHlDQUF5QztJQUM3RCxZQUFZO0lBQ1osNEJBQTRCLEVBQUUsaUNBQWlDO0lBQy9ELGtCQUFrQixFQUFFLG1DQUFtQztBQUMzRDs7QUFFQTtJQUNJLGVBQWUsRUFBRSxnQ0FBZ0M7SUFDakQsVUFBVSxFQUFFLDRDQUE0QztJQUN4RCxZQUFZLEVBQUUsNkJBQTZCO0lBQzNDLGtCQUFrQixFQUFFLDBDQUEwQztJQUM5RCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQixFQUFFLHlDQUF5QztJQUNqRSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVELG1CQUFtQixFQUFFLDBDQUEwQztJQUMvRCw4QkFBOEIsRUFBRSxrREFBa0Q7SUFDbEYsaUJBQWlCLEVBQUUsMERBQTBEO0lBQzdFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBRSx5Q0FBeUM7QUFDL0Q7O0FBRUE7SUFDSSxZQUFZLEVBQUUsMkJBQTJCO0lBQ3pDLGFBQWEsRUFBRSw0QkFBNEI7SUFDM0MsaUJBQWlCLEVBQUUsaURBQWlEO0lBQ3BFLGtCQUFrQixFQUFFLGlDQUFpQztBQUN6RDs7QUFFQTtJQUNJLFlBQVksRUFBRSx1REFBdUQ7SUFDckUsYUFBYTtJQUNiLHNCQUFzQixFQUFFLGdEQUFnRDtJQUN4RSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDekQ7O0FBRUE7O0lBRUksYUFBYSxFQUFFLHdEQUF3RDtBQUMzRTs7QUFFQTtJQUNJLG1CQUFtQixFQUFFLGdDQUFnQztJQUNyRCxrQkFBa0IsRUFBRSxvQ0FBb0M7QUFDNUQ7O0FBRUE7SUFDSTtRQUNJLDREQUE0RDtRQUM1RCxTQUFTO0lBQ2I7SUFDQTtRQUNJLG1CQUFtQixFQUFFLDJEQUEyRDtJQUNwRjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCLEVBQUUsc0NBQXNDO0lBQzdEO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogQXBwbHkgYm94LXNpemluZyB0byBhbGwgZWxlbWVudHMgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiBSZXNldCBtYXJnaW5zIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgcGFkZGluZzogMDsgLyogUmVzZXQgcGFkZGluZyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgbW9ub3NwYWNlOyAvKiBFbnN1cmUgZm9udCBmYW1pbHkgaXMgY29uc2lzdGVudCAqL1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgICAgICAgIC8qIEVuc3VyZSB0aGUgZnVsbCBoZWlnaHQgaXMgYXZhaWxhYmxlICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IC8qIENoYW5nZSBmcm9tIGNlbnRlciB0byBzdHJldGNoIGZvciBmdWxsIHdpZHRoICovXFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAvKiBUaGlzIGVuc3VyZXMgdGhhdCBhbGwgY2hpbGQgZWxlbWVudHMgYXJlIGNlbnRlcmVkIGhvcml6b250YWxseSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIEFkanVzdCBiYXNlZCBvbiB5b3VyIGRlc2lnbiBwcmVmZXJlbmNlICovXFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAvKiBGdWxsIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCAqL1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgICAgLyogTWluaW11bSBoZWlnaHQgaXMgdGhlIGZ1bGwgdmlld3BvcnQgaGVpZ2h0ICovXFxuICAgIG1hcmdpbjogMCBhdXRvOyAgICAgICAvKiBDZW50ZXJzIGNvbnRhaW5lciAqL1xcbiAgICBwYWRkaW5nOiAyMHB4OyAgICAgICAgLyogT3B0aW9uYWwgcGFkZGluZyBmb3IgaW5uZXIgc3BhY2luZyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlcyBwYWRkaW5nIGluIHdpZHRoL2hlaWdodCBjYWxjdWxhdGlvbnMgKi9cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgIC8qIEZ1bGwgd2lkdGggdG8gZW5zdXJlIGl0IHRha2VzIHRoZSBjb250YWluZXIgd2lkdGggKi9cXG4gICAgbWF4LXdpZHRoOiA2MDBweDsgICAgICAvKiBMaW1pdHMgdGhlIHdpZHRoIGZvciBiZXR0ZXIgYWVzdGhldGljcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgIC8qIEVuc3VyZXMgdGhlIHVzZSBvZiBGbGV4Ym94ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgLyogQWxpZ24gZWxlbWVudHMgaW4gYSByb3cgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlcnMgaXRlbXMgaG9yaXpvbnRhbGx5IHdpdGhpbiB0aGUgZm9ybSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgIC8qIEFsaWduIGl0ZW1zIHZlcnRpY2FsbHkgKi9cXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87ICAgICAvKiBUb3AgYW5kIGJvdHRvbSBtYXJnaW4gZm9yIHNwYWNpbmcsIGF1dG8gZm9yIGhvcml6b250YWwgY2VudGVyaW5nICovXFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE0cHg7IC8qIEFwcHJvcHJpYXRlIGZvbnQgc2l6ZSBmb3IgdmlzaWJpbGl0eSAqL1xcbiAgICB3aWR0aDogNzUlOyAvKiBBZGp1c3QgaWYgbmVjZXNzYXJ5IHRvIGdpdmUgbW9yZSBzcGFjZSB0byB0aGUgYnV0dG9uICovXFxuICAgIGhlaWdodDogNTBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciB1bmlmb3JtaXR5ICovXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDsgLyogQ29tZm9ydGFibGUgcGFkZGluZyBpbnNpZGUgdGhlIGlucHV0ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDsgLyogVmlzdWFsIHNlcGFyYXRpb24gaWYgZGVzaXJlZCAqL1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gaW5wdXQgYW5kIGJ1dHRvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgLyogQ2xlYXIgYW5kIHZpc2libGUgZm9udCBzaXplICovXFxuICAgIHdpZHRoOiAyMCU7IC8qIEFkanVzdCBiYXNlZCBvbiB0b3RhbCB3aWR0aCBvZiB0aGUgZm9ybSAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7IC8qIE1hdGNoZXMgdGhlIGlucHV0IGhlaWdodCAqL1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7IC8qIFBhZGRpbmcgZm9yIGEgYmV0dGVyIHRvdWNoIGV4cGVyaWVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNkZGQ7XFxufVxcblxcblxcbiNzZWFyY2hSZXN1bHRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogRW5zdXJlcyBpdGVtcyBhcmUgc3RhY2tlZCB2ZXJ0aWNhbGx5ICovXFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLyogQWxpZ25zIGNoaWxkIGVsZW1lbnRzIGhvcml6b250YWxseSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBWZXJ0aWNhbGx5IGNlbnRlciBhbGlnbnMgYWxsIGNoaWxkcmVuICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogU3ByZWFkcyBvdXQgaXRlbXMgYWNyb3NzIHRoZSBob3Jpem9udGFsIHNwYWNlICovXFxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4OyAvKiBNaW5pbXVtIGhlaWdodCwgY2FuIGFkanVzdCBiYXNlZCBvbiB5b3VyIGRlc2lnbiBuZWVkcyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogS2VlcHMgYWxsIGNvbnRlbnQgd2l0aGluIHRoZSBib3JkZXJzICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogMTAwcHg7IC8qIEZpeGVkIHdpZHRoIGZvciBpbWFnZXMgKi9cXG4gICAgaGVpZ2h0OiAxMDBweDsgLyogRml4ZWQgaGVpZ2h0IGZvciBpbWFnZXMgKi9cXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEVuc3VyZXMgdGhlIGltYWdlIGNvdmVycyB0aGUgYWxsb2NhdGVkIHNwYWNlICovXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBpbWFnZSBhbmQgdGV4dCAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMge1xcbiAgICBmbGV4LWdyb3c6IDE7IC8qIEFsbG93cyB0aGUgZGV0YWlscyBzZWN0aW9uIHRvIGZpbGwgcmVtYWluaW5nIHNwYWNlICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrcyBkZXRhaWxzIGxpa2UgdGl0bGUsIGJyYW5kIHZlcnRpY2FsbHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlcnMgdGhlbSB2ZXJ0aWNhbGx5ICovXFxufVxcblxcbi5yZXN1bHQtaXRlbSAuZGV0YWlscyBoMixcXG4ucmVzdWx0LWl0ZW0gLmRldGFpbHMgcCB7XFxuICAgIG1hcmdpbjogNXB4IDA7IC8qIEFkZHMgYSBsaXR0bGUgc3BhY2UgYmV0d2VlbiB0aXRsZSBhbmQgb3RoZXIgZGV0YWlscyAqL1xcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gLnByaWNlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogRW5zdXJlcyBwcmljZSBkb2VzIG5vdCB3cmFwICovXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBkZXRhaWxzIGFuZCBwcmljZSAqL1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuICAgIC5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICAgICAgYXNwZWN0LXJhdGlvOiA0IC8gMzsgLyogQWRqdXN0cyB0byBhIG1vcmUgcmVjdGFuZ3VsYXIgc2hhcGUgb24gc21hbGxlciBzY3JlZW5zICovXFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC5zZWFyY2gtZm9ybSwgI3NlYXJjaFJlc3VsdHMge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvOyAvKiBSZWR1Y2UgbWFyZ2luIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgfVxcbn1cXG5cXG4ucmVzdWx0LWl0ZW0gaDIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjMzMzOyAgXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});