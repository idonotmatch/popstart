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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: auto;         /* Changed from 100% to auto to ensure natural page flow */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    overflow-x: hidden;   /* Prevent horizontal overflow */\\n    overflow-y: hidden;  /* Allow vertical overflow */\\n}\\n\\n.container {\\n    margin-top: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start; /* Centers vertically in the container */\\n    align-items: center;    /* Centers horizontally in the container */\\n    height: 100vh;          /* Takes full height of the viewport */\\n    overflow-y: auto;\\n    width: 100%;            /* Takes full width of the viewport */\\n    margin: auto;         /* Ensures it is centered horizontally */\\n    text-align: center;     /* Aligns text in the center */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;            /* Full width to accommodate the input and button */\\n    max-width: 800px;       /* Maximum width of the form */\\n    margin-top: 20px;\\n    display: flex;          /* Enables flexbox */\\n    flex-direction: column; /* Stacks the elements vertically */\\n    justify-content: center;/* Centers the items vertically */\\n    align-items: center;    /* Centers the items horizontally */\\n}\\n\\n\\n.search-input {\\n    font-size: 12px; /* Adjust font size as needed */\\n    text-align: center;\\n    width: 100%; /* Full width */\\n    height: 50px; /* Fixed height */\\n    padding: 10px 15px; /* Padding inside the input box */\\n    border: none;\\n    border-bottom: 2px solid #000; /* Solid bottom border */\\n    margin-bottom: 20px; /* Space below the input field */\\n    box-sizing: border-box; /* Include padding in the height calculation */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Set font size for button */\\n    padding: 10px 20px; /* Padding inside the button */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n    transition: background-color 0.3s, color 0.3s;\\n    width: 55%; /* Width relative to its container */\\n    max-width: 200px; /* Maximum width it can expand to */\\n    box-sizing: border-box; /* Include padding in the width calculation */\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\\n    grid-gap: 20px;\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.result-item {\\n    display: grid;\\n    grid-template-columns: 1fr; /* All elements in a single column */\\n    grid-gap: 10px; /* Space between grid items */\\n    padding: 10px;\\n    border-radius: 8px;\\n}\\n\\n.result-item img {\\n    width: 100%;\\n    aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */\\n    object-fit: contain; /* Ensures the image covers the area without being cut off */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\\n        gap: 10px;\\n    }\\n    .result-item img {\\n        aspect-ratio: 4 / 3; /* Adjusts to a more rectangular shape on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,8GAA8G;;AAE9G;IACI,sBAAsB,EAAE,qCAAqC;IAC7D,SAAS,EAAE,mCAAmC;IAC9C,UAAU,EAAE,mCAAmC;IAC/C,mCAAmC,EAAE,qCAAqC;AAC9E;;AAEA;IACI,YAAY,UAAU,0DAA0D;IAChF,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB,IAAI,gCAAgC;IACtD,kBAAkB,GAAG,4BAA4B;AACrD;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,2BAA2B,EAAE,wCAAwC;IACrE,mBAAmB,KAAK,0CAA0C;IAClE,aAAa,WAAW,sCAAsC;IAC9D,gBAAgB;IAChB,WAAW,aAAa,qCAAqC;IAC7D,YAAY,UAAU,wCAAwC;IAC9D,kBAAkB,MAAM,8BAA8B;AAC1D;;AAEA;IACI,WAAW,EAAE,eAAe;IAC5B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW,aAAa,mDAAmD;IAC3E,gBAAgB,QAAQ,8BAA8B;IACtD,gBAAgB;IAChB,aAAa,WAAW,oBAAoB;IAC5C,sBAAsB,EAAE,mCAAmC;IAC3D,uBAAuB,CAAC,iCAAiC;IACzD,mBAAmB,KAAK,mCAAmC;AAC/D;;;AAGA;IACI,eAAe,EAAE,+BAA+B;IAChD,kBAAkB;IAClB,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,iBAAiB;IAC/B,kBAAkB,EAAE,iCAAiC;IACrD,YAAY;IACZ,6BAA6B,EAAE,wBAAwB;IACvD,mBAAmB,EAAE,gCAAgC;IACrD,sBAAsB,EAAE,8CAA8C;AAC1E;;AAEA;IACI,eAAe,EAAE,6BAA6B;IAC9C,kBAAkB,EAAE,8BAA8B;IAClD,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,6CAA6C;IAC7C,UAAU,EAAE,oCAAoC;IAChD,gBAAgB,EAAE,mCAAmC;IACrD,sBAAsB,EAAE,6CAA6C;AACzE;;AAEA;IACI,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,cAAS;IAAT,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0BAA0B,EAAE,oCAAoC;IAChE,cAAc,EAAE,6BAA6B;IAC7C,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,mBAAmB,EAAE,oCAAoC;IACzD,mBAAmB,EAAE,4DAA4D;AACrF;;AAEA;IACI;QACI,4DAA4D;QAC5D,SAAS;IACb;IACA;QACI,mBAAmB,EAAE,2DAA2D;IACpF;AACJ;;AAEA;IACI;QACI,UAAU;QACV,iBAAiB,EAAE,sCAAsC;IAC7D;AACJ;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\\n\\n* {\\n    box-sizing: border-box; /* Apply box-sizing to all elements */\\n    margin: 0; /* Reset margins for all elements */\\n    padding: 0; /* Reset padding for all elements */\\n    font-family: 'Open Sans', monospace; /* Ensure font family is consistent */\\n}\\n\\nhtml, body {\\n    height: auto;         /* Changed from 100% to auto to ensure natural page flow */\\n    margin: 0;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    overflow-x: hidden;   /* Prevent horizontal overflow */\\n    overflow-y: hidden;  /* Allow vertical overflow */\\n}\\n\\n.container {\\n    margin-top: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start; /* Centers vertically in the container */\\n    align-items: center;    /* Centers horizontally in the container */\\n    height: 100vh;          /* Takes full height of the viewport */\\n    overflow-y: auto;\\n    width: 100%;            /* Takes full width of the viewport */\\n    margin: auto;         /* Ensures it is centered horizontally */\\n    text-align: center;     /* Aligns text in the center */\\n}\\n\\nheader {\\n    width: 100%; /* Full width */\\n    text-align: center;\\n    margin-bottom: 20px;\\n}\\n\\n.search-form {\\n    width: 100%;            /* Full width to accommodate the input and button */\\n    max-width: 800px;       /* Maximum width of the form */\\n    margin-top: 20px;\\n    display: flex;          /* Enables flexbox */\\n    flex-direction: column; /* Stacks the elements vertically */\\n    justify-content: center;/* Centers the items vertically */\\n    align-items: center;    /* Centers the items horizontally */\\n}\\n\\n\\n.search-input {\\n    font-size: 12px; /* Adjust font size as needed */\\n    text-align: center;\\n    width: 100%; /* Full width */\\n    height: 50px; /* Fixed height */\\n    padding: 10px 15px; /* Padding inside the input box */\\n    border: none;\\n    border-bottom: 2px solid #000; /* Solid bottom border */\\n    margin-bottom: 20px; /* Space below the input field */\\n    box-sizing: border-box; /* Include padding in the height calculation */\\n}\\n\\n.search-button {\\n    font-size: 10px; /* Set font size for button */\\n    padding: 10px 20px; /* Padding inside the button */\\n    background-color: #000;\\n    color: #fff;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n    transition: background-color 0.3s, color 0.3s;\\n    width: 55%; /* Width relative to its container */\\n    max-width: 200px; /* Maximum width it can expand to */\\n    box-sizing: border-box; /* Include padding in the width calculation */\\n}\\n\\n.search-button:hover {\\n    background-color: #333;\\n    color: #ddd;\\n}\\n\\n#searchResults {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\\n    gap: 20px;\\n    padding: 10px;\\n}\\n\\n.result-item {\\n    display: grid;\\n    grid-template-columns: 1fr; /* All elements in a single column */\\n    grid-gap: 10px; /* Space between grid items */\\n    padding: 10px;\\n    border-radius: 8px;\\n}\\n\\n.result-item img {\\n    width: 100%;\\n    aspect-ratio: 1 / 1; /* Maintains a square aspect ratio */\\n    object-fit: contain; /* Ensures the image covers the area without being cut off */\\n}\\n\\n@media (max-width: 768px) {\\n    #searchResults {\\n        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\\n        gap: 10px;\\n    }\\n    .result-item img {\\n        aspect-ratio: 4 / 3; /* Adjusts to a more rectangular shape on smaller screens */\\n    }\\n}\\n\\n@media (max-width: 600px) {\\n    .search-form, #searchResults {\\n        width: 95%;\\n        margin: 10px auto; /* Reduce margin for smaller screens */\\n    }\\n}\\n\\n.result-item h2 {\\n    font-size: 16px;\\n    color: #333;  \\n    margin-bottom: 5px; \\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLCtIQUErSCwwQkFBMEIsT0FBTyw4QkFBOEIsdURBQXVELHNEQUFzRCwrRUFBK0UseUNBQXlDLGdCQUFnQiw0QkFBNEIsMkVBQTJFLGlCQUFpQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsNEJBQTRCLDREQUE0RCxnQ0FBZ0MsZ0JBQWdCLHVCQUF1QixvQkFBb0IsNkJBQTZCLG1DQUFtQyx1RUFBdUUseUVBQXlFLDhEQUE4RCw4QkFBOEIsa0VBQWtFLHVFQUF1RSxrQ0FBa0MsWUFBWSxtQkFBbUIseUNBQXlDLDBCQUEwQixHQUFHLGtCQUFrQiw4QkFBOEIsa0ZBQWtGLHNEQUFzRCw4QkFBOEIsbURBQW1ELGtFQUFrRSxnRUFBZ0UsdUNBQXVDLHFCQUFxQix1QkFBdUIseURBQXlELG1CQUFtQixvQ0FBb0MsNENBQTRDLHFEQUFxRCxxQ0FBcUMsb0RBQW9ELCtEQUErRCxrREFBa0Qsb0JBQW9CLHVCQUF1Qix3REFBd0QsNERBQTRELGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixvREFBb0Qsa0JBQWtCLDZEQUE2RCxrRUFBa0UsaURBQWlELDBCQUEwQiw2QkFBNkIsa0JBQWtCLEdBQUcsb0JBQW9CLG9CQUFvQixtRUFBbUUscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxrQkFBa0Isb0JBQW9CLGtDQUFrQywyREFBMkQsa0RBQWtELHlCQUF5QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLGdFQUFnRSxnRUFBZ0UsK0JBQStCLHNCQUFzQix1RUFBdUUsb0JBQW9CLE9BQU8sd0JBQXdCLCtCQUErQixtRUFBbUUsR0FBRywrQkFBK0Isb0NBQW9DLHFCQUFxQiw2QkFBNkIsOENBQThDLEdBQUcscUJBQXFCLHNCQUFzQixvQkFBb0IsMEJBQTBCLEdBQUcsT0FBTywyRkFBMkYsTUFBTSx3QkFBd0IsdUJBQXVCLHVCQUF1Qix5QkFBeUIsT0FBTyxLQUFLLHNCQUFzQixXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSx5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSx5QkFBeUIseUJBQXlCLHVCQUF1QixhQUFhLHVCQUF1Qix1QkFBdUIseUJBQXlCLE9BQU8sS0FBSyxvQkFBb0IsYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IseUJBQXlCLGFBQWEsdUJBQXVCLHlCQUF5Qix5QkFBeUIseUJBQXlCLFFBQVEsS0FBSyxzQkFBc0IsYUFBYSxxQkFBcUIsdUJBQXVCLHlCQUF5QixXQUFXLHdCQUF3Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxzQkFBc0IseUJBQXlCLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLHVCQUF1Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSx3QkFBd0IsdUJBQXVCLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSx3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssd0JBQXdCLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSx3QkFBd0IsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksK0dBQStHLDBCQUEwQixPQUFPLDhCQUE4Qix1REFBdUQsc0RBQXNELCtFQUErRSx5Q0FBeUMsZ0JBQWdCLDRCQUE0QiwyRUFBMkUsaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsNERBQTRELGdDQUFnQyxnQkFBZ0IsdUJBQXVCLG9CQUFvQiw2QkFBNkIsbUNBQW1DLHVFQUF1RSx5RUFBeUUsOERBQThELDhCQUE4QixrRUFBa0UsdUVBQXVFLGtDQUFrQyxZQUFZLG1CQUFtQix5Q0FBeUMsMEJBQTBCLEdBQUcsa0JBQWtCLDhCQUE4QixrRkFBa0Ysc0RBQXNELDhCQUE4QixtREFBbUQsa0VBQWtFLGdFQUFnRSx1Q0FBdUMscUJBQXFCLHVCQUF1Qix5REFBeUQsbUJBQW1CLG9DQUFvQyw0Q0FBNEMscURBQXFELHFDQUFxQyxvREFBb0QsK0RBQStELGtEQUFrRCxvQkFBb0IsdUJBQXVCLHdEQUF3RCw0REFBNEQsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLG9EQUFvRCxrQkFBa0IsNkRBQTZELGtFQUFrRSxpREFBaUQsMEJBQTBCLDZCQUE2QixrQkFBa0IsR0FBRyxvQkFBb0Isb0JBQW9CLG1FQUFtRSxnQkFBZ0Isb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQixrQ0FBa0MsMkRBQTJELGtEQUFrRCx5QkFBeUIsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixnRUFBZ0UsZ0VBQWdFLCtCQUErQixzQkFBc0IsdUVBQXVFLG9CQUFvQixPQUFPLHdCQUF3QiwrQkFBK0IsbUVBQW1FLEdBQUcsK0JBQStCLG9DQUFvQyxxQkFBcUIsNkJBQTZCLDhDQUE4QyxHQUFHLHFCQUFxQixzQkFBc0Isb0JBQW9CLDBCQUEwQixHQUFHLG1CQUFtQjtBQUM5MFM7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEFwcGx5IGJveC1zaXppbmcgdG8gYWxsIGVsZW1lbnRzICovXFxuICAgIG1hcmdpbjogMDsgLyogUmVzZXQgbWFyZ2lucyBmb3IgYWxsIGVsZW1lbnRzICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIFJlc2V0IHBhZGRpbmcgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIG1vbm9zcGFjZTsgLyogRW5zdXJlIGZvbnQgZmFtaWx5IGlzIGNvbnNpc3RlbnQgKi9cXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogYXV0bzsgICAgICAgICAvKiBDaGFuZ2VkIGZyb20gMTAwJSB0byBhdXRvIHRvIGVuc3VyZSBuYXR1cmFsIHBhZ2UgZmxvdyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47ICAgLyogUHJldmVudCBob3Jpem9udGFsIG92ZXJmbG93ICovXFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgIC8qIEFsbG93IHZlcnRpY2FsIG92ZXJmbG93ICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIENlbnRlcnMgdmVydGljYWxseSBpbiB0aGUgY29udGFpbmVyICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIC8qIENlbnRlcnMgaG9yaXpvbnRhbGx5IGluIHRoZSBjb250YWluZXIgKi9cXG4gICAgaGVpZ2h0OiAxMDB2aDsgICAgICAgICAgLyogVGFrZXMgZnVsbCBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0ICovXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgIC8qIFRha2VzIGZ1bGwgd2lkdGggb2YgdGhlIHZpZXdwb3J0ICovXFxuICAgIG1hcmdpbjogYXV0bzsgICAgICAgICAvKiBFbnN1cmVzIGl0IGlzIGNlbnRlcmVkIGhvcml6b250YWxseSAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAvKiBBbGlnbnMgdGV4dCBpbiB0aGUgY2VudGVyICovXFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgICAgLyogRnVsbCB3aWR0aCB0byBhY2NvbW1vZGF0ZSB0aGUgaW5wdXQgYW5kIGJ1dHRvbiAqL1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4OyAgICAgICAvKiBNYXhpbXVtIHdpZHRoIG9mIHRoZSBmb3JtICovXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgICAgIC8qIEVuYWJsZXMgZmxleGJveCAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTdGFja3MgdGhlIGVsZW1lbnRzIHZlcnRpY2FsbHkgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7LyogQ2VudGVycyB0aGUgaXRlbXMgdmVydGljYWxseSAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAvKiBDZW50ZXJzIHRoZSBpdGVtcyBob3Jpem9udGFsbHkgKi9cXG59XFxuXFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQWRqdXN0IGZvbnQgc2l6ZSBhcyBuZWVkZWQgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7IC8qIEZpeGVkIGhlaWdodCAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7IC8qIFBhZGRpbmcgaW5zaWRlIHRoZSBpbnB1dCBib3ggKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDsgLyogU29saWQgYm90dG9tIGJvcmRlciAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBTcGFjZSBiZWxvdyB0aGUgaW5wdXQgZmllbGQgKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHVkZSBwYWRkaW5nIGluIHRoZSBoZWlnaHQgY2FsY3VsYXRpb24gKi9cXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEwcHg7IC8qIFNldCBmb250IHNpemUgZm9yIGJ1dHRvbiAqL1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIFBhZGRpbmcgaW5zaWRlIHRoZSBidXR0b24gKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcztcXG4gICAgd2lkdGg6IDU1JTsgLyogV2lkdGggcmVsYXRpdmUgdG8gaXRzIGNvbnRhaW5lciAqL1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4OyAvKiBNYXhpbXVtIHdpZHRoIGl0IGNhbiBleHBhbmQgdG8gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHVkZSBwYWRkaW5nIGluIHRoZSB3aWR0aCBjYWxjdWxhdGlvbiAqL1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZGRkO1xcbn1cXG5cXG4jc2VhcmNoUmVzdWx0cyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8qIEFsbCBlbGVtZW50cyBpbiBhIHNpbmdsZSBjb2x1bW4gKi9cXG4gICAgZ3JpZC1nYXA6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gZ3JpZCBpdGVtcyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgLyogTWFpbnRhaW5zIGEgc3F1YXJlIGFzcGVjdCByYXRpbyAqL1xcbiAgICBvYmplY3QtZml0OiBjb250YWluOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFyZWEgd2l0aG91dCBiZWluZyBjdXQgb2ZmICovXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gICAgLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQgLyAzOyAvKiBBZGp1c3RzIHRvIGEgbW9yZSByZWN0YW5ndWxhciBzaGFwZSBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnNlYXJjaC1mb3JtLCAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIFJlZHVjZSBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbi5yZXN1bHQtaXRlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4R0FBOEc7O0FBRTlHO0lBQ0ksc0JBQXNCLEVBQUUscUNBQXFDO0lBQzdELFNBQVMsRUFBRSxtQ0FBbUM7SUFDOUMsVUFBVSxFQUFFLG1DQUFtQztJQUMvQyxtQ0FBbUMsRUFBRSxxQ0FBcUM7QUFDOUU7O0FBRUE7SUFDSSxZQUFZLFVBQVUsMERBQTBEO0lBQ2hGLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQixJQUFJLGdDQUFnQztJQUN0RCxrQkFBa0IsR0FBRyw0QkFBNEI7QUFDckQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBRSx3Q0FBd0M7SUFDckUsbUJBQW1CLEtBQUssMENBQTBDO0lBQ2xFLGFBQWEsV0FBVyxzQ0FBc0M7SUFDOUQsZ0JBQWdCO0lBQ2hCLFdBQVcsYUFBYSxxQ0FBcUM7SUFDN0QsWUFBWSxVQUFVLHdDQUF3QztJQUM5RCxrQkFBa0IsTUFBTSw4QkFBOEI7QUFDMUQ7O0FBRUE7SUFDSSxXQUFXLEVBQUUsZUFBZTtJQUM1QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVyxhQUFhLG1EQUFtRDtJQUMzRSxnQkFBZ0IsUUFBUSw4QkFBOEI7SUFDdEQsZ0JBQWdCO0lBQ2hCLGFBQWEsV0FBVyxvQkFBb0I7SUFDNUMsc0JBQXNCLEVBQUUsbUNBQW1DO0lBQzNELHVCQUF1QixDQUFDLGlDQUFpQztJQUN6RCxtQkFBbUIsS0FBSyxtQ0FBbUM7QUFDL0Q7OztBQUdBO0lBQ0ksZUFBZSxFQUFFLCtCQUErQjtJQUNoRCxrQkFBa0I7SUFDbEIsV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGlCQUFpQjtJQUMvQixrQkFBa0IsRUFBRSxpQ0FBaUM7SUFDckQsWUFBWTtJQUNaLDZCQUE2QixFQUFFLHdCQUF3QjtJQUN2RCxtQkFBbUIsRUFBRSxnQ0FBZ0M7SUFDckQsc0JBQXNCLEVBQUUsOENBQThDO0FBQzFFOztBQUVBO0lBQ0ksZUFBZSxFQUFFLDZCQUE2QjtJQUM5QyxrQkFBa0IsRUFBRSw4QkFBOEI7SUFDbEQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsVUFBVSxFQUFFLG9DQUFvQztJQUNoRCxnQkFBZ0IsRUFBRSxtQ0FBbUM7SUFDckQsc0JBQXNCLEVBQUUsNkNBQTZDO0FBQ3pFOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsY0FBUztJQUFULFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQixFQUFFLG9DQUFvQztJQUNoRSxjQUFjLEVBQUUsNkJBQTZCO0lBQzdDLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUUsb0NBQW9DO0lBQ3pELG1CQUFtQixFQUFFLDREQUE0RDtBQUNyRjs7QUFFQTtJQUNJO1FBQ0ksNERBQTREO1FBQzVELFNBQVM7SUFDYjtJQUNBO1FBQ0ksbUJBQW1CLEVBQUUsMkRBQTJEO0lBQ3BGO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixpQkFBaUIsRUFBRSxzQ0FBc0M7SUFDN0Q7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDAuLjgwMDsxLDMwMC4uODAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBBcHBseSBib3gtc2l6aW5nIHRvIGFsbCBlbGVtZW50cyAqL1xcbiAgICBtYXJnaW46IDA7IC8qIFJlc2V0IG1hcmdpbnMgZm9yIGFsbCBlbGVtZW50cyAqL1xcbiAgICBwYWRkaW5nOiAwOyAvKiBSZXNldCBwYWRkaW5nIGZvciBhbGwgZWxlbWVudHMgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBtb25vc3BhY2U7IC8qIEVuc3VyZSBmb250IGZhbWlseSBpcyBjb25zaXN0ZW50ICovXFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87ICAgICAgICAgLyogQ2hhbmdlZCBmcm9tIDEwMCUgdG8gYXV0byB0byBlbnN1cmUgbmF0dXJhbCBwYWdlIGZsb3cgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAgIC8qIFByZXZlbnQgaG9yaXpvbnRhbCBvdmVyZmxvdyAqL1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47ICAvKiBBbGxvdyB2ZXJ0aWNhbCBvdmVyZmxvdyAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBDZW50ZXJzIHZlcnRpY2FsbHkgaW4gdGhlIGNvbnRhaW5lciAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAvKiBDZW50ZXJzIGhvcml6b250YWxseSBpbiB0aGUgY29udGFpbmVyICovXFxuICAgIGhlaWdodDogMTAwdmg7ICAgICAgICAgIC8qIFRha2VzIGZ1bGwgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAqL1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTsgICAgICAgICAgICAvKiBUYWtlcyBmdWxsIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCAqL1xcbiAgICBtYXJnaW46IGF1dG87ICAgICAgICAgLyogRW5zdXJlcyBpdCBpcyBjZW50ZXJlZCBob3Jpem9udGFsbHkgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgLyogQWxpZ25zIHRleHQgaW4gdGhlIGNlbnRlciAqL1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgIC8qIEZ1bGwgd2lkdGggdG8gYWNjb21tb2RhdGUgdGhlIGlucHV0IGFuZCBidXR0b24gKi9cXG4gICAgbWF4LXdpZHRoOiA4MDBweDsgICAgICAgLyogTWF4aW11bSB3aWR0aCBvZiB0aGUgZm9ybSAqL1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgICAvKiBFbmFibGVzIGZsZXhib3ggKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2tzIHRoZSBlbGVtZW50cyB2ZXJ0aWNhbGx5ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOy8qIENlbnRlcnMgdGhlIGl0ZW1zIHZlcnRpY2FsbHkgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgLyogQ2VudGVycyB0aGUgaXRlbXMgaG9yaXpvbnRhbGx5ICovXFxufVxcblxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEycHg7IC8qIEFkanVzdCBmb250IHNpemUgYXMgbmVlZGVkICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiA1MHB4OyAvKiBGaXhlZCBoZWlnaHQgKi9cXG4gICAgcGFkZGluZzogMTBweCAxNXB4OyAvKiBQYWRkaW5nIGluc2lkZSB0aGUgaW5wdXQgYm94ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7IC8qIFNvbGlkIGJvdHRvbSBib3JkZXIgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogU3BhY2UgYmVsb3cgdGhlIGlucHV0IGZpZWxkICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBpbiB0aGUgaGVpZ2h0IGNhbGN1bGF0aW9uICovXFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxMHB4OyAvKiBTZXQgZm9udCBzaXplIGZvciBidXR0b24gKi9cXG4gICAgcGFkZGluZzogMTBweCAyMHB4OyAvKiBQYWRkaW5nIGluc2lkZSB0aGUgYnV0dG9uICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XFxuICAgIHdpZHRoOiA1NSU7IC8qIFdpZHRoIHJlbGF0aXZlIHRvIGl0cyBjb250YWluZXIgKi9cXG4gICAgbWF4LXdpZHRoOiAyMDBweDsgLyogTWF4aW11bSB3aWR0aCBpdCBjYW4gZXhwYW5kIHRvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBpbiB0aGUgd2lkdGggY2FsY3VsYXRpb24gKi9cXG59XFxuXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2RkZDtcXG59XFxuXFxuI3NlYXJjaFJlc3VsdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnJlc3VsdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IC8qIEFsbCBlbGVtZW50cyBpbiBhIHNpbmdsZSBjb2x1bW4gKi9cXG4gICAgZ3JpZC1nYXA6IDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gZ3JpZCBpdGVtcyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5yZXN1bHQtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgLyogTWFpbnRhaW5zIGEgc3F1YXJlIGFzcGVjdCByYXRpbyAqL1xcbiAgICBvYmplY3QtZml0OiBjb250YWluOyAvKiBFbnN1cmVzIHRoZSBpbWFnZSBjb3ZlcnMgdGhlIGFyZWEgd2l0aG91dCBiZWluZyBjdXQgb2ZmICovXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG4gICAgLnJlc3VsdC1pdGVtIGltZyB7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDQgLyAzOyAvKiBBZGp1c3RzIHRvIGEgbW9yZSByZWN0YW5ndWxhciBzaGFwZSBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnNlYXJjaC1mb3JtLCAjc2VhcmNoUmVzdWx0cyB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87IC8qIFJlZHVjZSBtYXJnaW4gZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xcbiAgICB9XFxufVxcblxcbi5yZXN1bHQtaXRlbSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICMzMzM7ICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});