"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/TransactionsContent.tsx":
/*!********************************************!*\
  !*** ./components/TransactionsContent.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionsContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _TransactionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionCard */ \"./components/TransactionCard.tsx\");\n/* harmony import */ var _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/transactionEnums */ \"./helpers/transactionEnums.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)();\nvar badTopLevelCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.TRANSFER,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.INCOME,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.GIFTS_AND_DONATIONS, \n];\nvar badCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHARITY,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHECK, \n];\nfunction Content(props) {\n    var _this = this;\n    var validTransactions = props.transactions.filter(function(value) {\n        return !badTopLevelCategories.includes(value.topLevelCategory) && !badCategories.includes(value.category);\n    });\n    console.log(validTransactions);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 33,\n            columnNumber: 12\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                position: \"relative\",\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: validTransactions.length > 0 ? validTransactions.map(function(transaction) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TransactionCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        transaction: transaction,\n                        __source: {\n                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }, transaction.guid);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                })\n            })\n        ]\n    }));\n}\n_c = Content;\nfunction TransactionsContent(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, {\n        transactions: props.transactions,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 48,\n            columnNumber: 12\n        },\n        __self: this\n    }));\n};\n_c1 = TransactionsContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c1, \"TransactionsContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uc0NvbnRlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRWlDO0FBQ1o7QUFDVjtBQUNFO0FBQ1I7QUFDWTtBQUM2QztBQUU1RixHQUFLLENBQUNVLEtBQUssR0FBR1QsaUVBQVc7QUFFekIsR0FBSyxDQUFDVSxxQkFBcUIsR0FBRyxDQUFDO0lBQzNCSCwyRkFBb0M7SUFDcENBLHlGQUFrQztJQUNsQ0Esc0dBQStDO0FBQ25ELENBQUM7QUFFRCxHQUFLLENBQUNPLGFBQWEsR0FBRyxDQUFDO0lBQ25CTixrRkFBMkI7SUFDM0JBLGdGQUF5QjtBQUM3QixDQUFDO1NBTVFTLE9BQU8sQ0FBQ0MsS0FBd0IsRUFBRSxDQUFDOztJQUV4QyxHQUFLLENBQUNDLGlCQUFpQixHQUFHRCxLQUFLLENBQUNFLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUFNLEVBQUxaLHFCQUFxQixDQUFDYSxRQUFRLENBQUNELEtBQUssQ0FBQ0UsZ0JBQWdCLE1BQU1WLGFBQWEsQ0FBQ1MsUUFBUSxDQUFDRCxLQUFLLENBQUNHLFFBQVE7O0lBQzlKQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsaUJBQWlCO0lBRTdCLE1BQU0sdUVBQUVsQiwrREFBYTtRQUFDUSxLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7O2lGQUM3QlAsaUVBQVc7Ozs7Ozs7O2lGQUNYQyw0REFBTTtnQkFBQ3lCLFFBQVEsRUFBQyxDQUFVOzs7Ozs7OytGQUN0QnhCLDZEQUFPOzs7Ozs7Ozs7aUZBR1hDLHlEQUFHOzs7Ozs7OzBCQUNDYyxpQkFBaUIsQ0FBQ1UsTUFBTSxHQUFHLENBQUMsR0FBR1YsaUJBQWlCLENBQUNXLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFdBQVc7a0NBQzlELE1BQU0sd0RBQUx6Qix3REFBZTt3QkFBd0J5QixXQUFXLEVBQUVBLFdBQVc7Ozs7Ozs7dUJBQTFDQSxXQUFXLENBQUNDLElBQUk7Ozs7OztBQUl0RCxDQUFDO0tBakJRZixPQUFPO0FBbUJELFFBQVEsQ0FBQ2dCLG1CQUFtQixDQUFDZixLQUF3QixFQUFFLENBQUM7SUFDbkUsTUFBTSxzRUFBRUQsT0FBTztRQUFDRyxZQUFZLEVBQUVGLEtBQUssQ0FBQ0UsWUFBWTs7Ozs7Ozs7QUFDcEQsQ0FBQztNQUZ1QmEsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25zQ29udGVudC50c3g/N2VmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RyYW5zYWN0aW9ufSBmcm9tIFwiLi4vaGVscGVycy90eXBlc1wiO1xuaW1wb3J0IHtjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlcn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uQ2FyZCBmcm9tIFwiLi9UcmFuc2FjdGlvbkNhcmRcIjtcbmltcG9ydCB7VG9wTGV2ZWxUcmFuc2FjdGlvbkNhdGVnb3J5LCBUcmFuc2FjdGlvbkNhdGVnb3J5fSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zYWN0aW9uRW51bXMnXG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoKTtcblxuY29uc3QgYmFkVG9wTGV2ZWxDYXRlZ29yaWVzID0gW1xuICAgIFRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeS5UUkFOU0ZFUixcbiAgICBUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkuSU5DT01FLFxuICAgIFRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeS5HSUZUU19BTkRfRE9OQVRJT05TLFxuXVxuXG5jb25zdCBiYWRDYXRlZ29yaWVzID0gW1xuICAgIFRyYW5zYWN0aW9uQ2F0ZWdvcnkuQ0hBUklUWSxcbiAgICBUcmFuc2FjdGlvbkNhdGVnb3J5LkNIRUNLLFxuXVxuXG5pbnRlcmZhY2UgVHJhbnNhY3Rpb25zUHJvcHMge1xuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcbn1cblxuZnVuY3Rpb24gQ29udGVudChwcm9wczogVHJhbnNhY3Rpb25zUHJvcHMpIHtcblxuICAgIGNvbnN0IHZhbGlkVHJhbnNhY3Rpb25zID0gcHJvcHMudHJhbnNhY3Rpb25zLmZpbHRlcih2YWx1ZSA9PiAhYmFkVG9wTGV2ZWxDYXRlZ29yaWVzLmluY2x1ZGVzKHZhbHVlLnRvcExldmVsQ2F0ZWdvcnkpICYmICFiYWRDYXRlZ29yaWVzLmluY2x1ZGVzKHZhbHVlLmNhdGVnb3J5KSlcbiAgICBjb25zb2xlLmxvZyh2YWxpZFRyYW5zYWN0aW9ucylcblxuICAgIHJldHVybiA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICB7dmFsaWRUcmFuc2FjdGlvbnMubGVuZ3RoID4gMCA/IHZhbGlkVHJhbnNhY3Rpb25zLm1hcCgodHJhbnNhY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICA8VHJhbnNhY3Rpb25DYXJkIGtleT17dHJhbnNhY3Rpb24uZ3VpZH0gdHJhbnNhY3Rpb249e3RyYW5zYWN0aW9ufSAvPlxuICAgICAgICAgICAgKSkgOiA8PjwvPn1cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9UaGVtZVByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNhY3Rpb25zQ29udGVudChwcm9wczogVHJhbnNhY3Rpb25zUHJvcHMpIHtcbiAgICByZXR1cm4gPENvbnRlbnQgdHJhbnNhY3Rpb25zPXtwcm9wcy50cmFuc2FjdGlvbnN9Lz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIkFwcEJhciIsIlRvb2xiYXIiLCJCb3giLCJUcmFuc2FjdGlvbkNhcmQiLCJUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkiLCJUcmFuc2FjdGlvbkNhdGVnb3J5IiwidGhlbWUiLCJiYWRUb3BMZXZlbENhdGVnb3JpZXMiLCJUUkFOU0ZFUiIsIklOQ09NRSIsIkdJRlRTX0FORF9ET05BVElPTlMiLCJiYWRDYXRlZ29yaWVzIiwiQ0hBUklUWSIsIkNIRUNLIiwiQ29udGVudCIsInByb3BzIiwidmFsaWRUcmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbnMiLCJmaWx0ZXIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwidG9wTGV2ZWxDYXRlZ29yeSIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwibGVuZ3RoIiwibWFwIiwidHJhbnNhY3Rpb24iLCJndWlkIiwiVHJhbnNhY3Rpb25zQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TransactionsContent.tsx\n");

/***/ })

});