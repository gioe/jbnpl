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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionsContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/transactionEnums */ \"./helpers/transactionEnums.tsx\");\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Accordion */ \"./node_modules/@mui/material/Accordion/index.js\");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/AccordionSummary */ \"./node_modules/@mui/material/AccordionSummary/index.js\");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/AccordionDetails */ \"./node_modules/@mui/material/AccordionDetails/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)();\nvar badTopLevelCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_2__.TopLevelTransactionCategory.TRANSFER,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_2__.TopLevelTransactionCategory.INCOME,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_2__.TopLevelTransactionCategory.GIFTS_AND_DONATIONS, \n];\nvar badCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_2__.TransactionCategory.CHARITY,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_2__.TransactionCategory.CHECK, \n];\nfunction Content(props) {\n    var _this = this;\n    var categories = [];\n    var validTransactions = props.transactions.filter(function(value) {\n        return !badTopLevelCategories.includes(value.topLevelCategory) && !badCategories.includes(value.category);\n    });\n    categories = validTransactions.map(function(transaction) {\n        return {\n            name: transaction.category\n        };\n    });\n    console.log(validTransactions);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        theme: theme,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 51,\n            columnNumber: 12\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                position: \"relative\",\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: categories.length > 0 ? categories.map(function(transactionCollection) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                expandIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                }),\n                                \"aria-controls\": \"panel1a-content\",\n                                id: \"panel1a-header\",\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    __source: {\n                                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this,\n                                    children: transactionCollection.name\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }, transactionCollection.name);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                })\n            })\n        ]\n    }));\n}\n_c = Content;\nfunction TransactionsContent(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, {\n        transactions: props.transactions,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 79,\n            columnNumber: 12\n        },\n        __self: this\n    }));\n};\n_c1 = TransactionsContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c1, \"TransactionsContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uc0NvbnRlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVpQztBQUNaO0FBQ1Y7QUFDRTtBQUNSO0FBRXlEO0FBQzdDO0FBQ2M7QUFDQTtBQUNGO0FBQ1Y7QUFHakQsR0FBSyxDQUFDYyxLQUFLLEdBQUdiLGlFQUFXO0FBRXpCLEdBQUssQ0FBQ2MscUJBQXFCLEdBQUcsQ0FBQztJQUMzQlIsMkZBQW9DO0lBQ3BDQSx5RkFBa0M7SUFDbENBLHNHQUErQztBQUNuRCxDQUFDO0FBRUQsR0FBSyxDQUFDWSxhQUFhLEdBQUcsQ0FBQztJQUNuQlgsa0ZBQTJCO0lBQzNCQSxnRkFBeUI7QUFDN0IsQ0FBQztTQVdRYyxPQUFPLENBQUNDLEtBQXdCLEVBQUUsQ0FBQzs7SUFFeEMsR0FBRyxDQUFDQyxVQUFVLEdBQW9DLENBQUMsQ0FBQztJQUNwRCxHQUFLLENBQUNDLGlCQUFpQixHQUFHRixLQUFLLENBQUNHLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUFNLEVBQUxiLHFCQUFxQixDQUFDYyxRQUFRLENBQUNELEtBQUssQ0FBQ0UsZ0JBQWdCLE1BQU1YLGFBQWEsQ0FBQ1UsUUFBUSxDQUFDRCxLQUFLLENBQUNHLFFBQVE7O0lBQzlKUCxVQUFVLEdBQUdDLGlCQUFpQixDQUFDTyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsV0FBVyxFQUFJLENBQUM7UUFDL0MsTUFBTSxDQUFDLENBQUM7WUFDSkMsSUFBSSxFQUFFRCxXQUFXLENBQUNGLFFBQVE7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFREksT0FBTyxDQUFDQyxHQUFHLENBQUNYLGlCQUFpQjtJQUU3QixNQUFNLHVFQUFFdkIsK0RBQWE7UUFBQ1ksS0FBSyxFQUFFQSxLQUFLOzs7Ozs7OztpRkFDN0JYLGlFQUFXOzs7Ozs7OztpRkFDWEMsNERBQU07Z0JBQUNpQyxRQUFRLEVBQUMsQ0FBVTs7Ozs7OzsrRkFDdEJoQyw2REFBTzs7Ozs7Ozs7O2lGQUdYQyx5REFBRzs7Ozs7OzswQkFDQ2tCLFVBQVUsQ0FBQ2MsTUFBTSxHQUFHLENBQUMsR0FBR2QsVUFBVSxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQTyxxQkFBcUI7a0NBQzFELE1BQU0seURBQUw5QiwrREFBUzs7Ozs7Ozs7aUdBQ0RDLHNFQUFnQjtnQ0FDYjhCLFVBQVUsdUVBQUc1Qix1RUFBYzs7Z0NBQzNCNkIsQ0FBYSxnQkFBQyxDQUFpQjtnQ0FDL0JDLEVBQUUsRUFBQyxDQUFnQjs7Ozs7OzsrR0FFbEI3QixpRUFBVTs7Ozs7Ozs4Q0FBRTBCLHFCQUFxQixDQUFDTCxJQUFJOzs7aUdBRTFDdkIsdUVBQWdCOzs7Ozs7Ozs7dUJBUlQ0QixxQkFBcUIsQ0FBQ0wsSUFBSTs7Ozs7O0FBaUIxRCxDQUFDO0tBckNRWixPQUFPO0FBdUNELFFBQVEsQ0FBQ3FCLG1CQUFtQixDQUFDcEIsS0FBd0IsRUFBRSxDQUFDO0lBQ25FLE1BQU0sc0VBQUVELE9BQU87UUFBQ0ksWUFBWSxFQUFFSCxLQUFLLENBQUNHLFlBQVk7Ozs7Ozs7O0FBQ3BELENBQUM7TUFGdUJpQixtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2FjdGlvbnNDb250ZW50LnRzeD83ZWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VHJhbnNhY3Rpb259IGZyb20gXCIuLi9oZWxwZXJzL3R5cGVzXCI7XG5pbXBvcnQge2NyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25DYXJkIGZyb20gXCIuL1RyYW5zYWN0aW9uQ2FyZFwiO1xuaW1wb3J0IHtUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnksIFRyYW5zYWN0aW9uQ2F0ZWdvcnl9IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNhY3Rpb25FbnVtcydcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb24nO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25TdW1tYXJ5JztcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHtBY2NvdW50VHlwZX0gZnJvbSBcIi4uL2hlbHBlcnMvYWNjb3VudEVudW1zXCI7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoKTtcblxuY29uc3QgYmFkVG9wTGV2ZWxDYXRlZ29yaWVzID0gW1xuICAgIFRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeS5UUkFOU0ZFUixcbiAgICBUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkuSU5DT01FLFxuICAgIFRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeS5HSUZUU19BTkRfRE9OQVRJT05TLFxuXVxuXG5jb25zdCBiYWRDYXRlZ29yaWVzID0gW1xuICAgIFRyYW5zYWN0aW9uQ2F0ZWdvcnkuQ0hBUklUWSxcbiAgICBUcmFuc2FjdGlvbkNhdGVnb3J5LkNIRUNLLFxuXVxuXG5pbnRlcmZhY2UgVHJhbnNhY3Rpb25zUHJvcHMge1xuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcbn1cblxudHlwZSBUcmFuc2FjdGlvbkNhdGVnb3J5Q29sbGVjdGlvbiA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdO1xufVxuXG5mdW5jdGlvbiBDb250ZW50KHByb3BzOiBUcmFuc2FjdGlvbnNQcm9wcykge1xuXG4gICAgbGV0IGNhdGVnb3JpZXM6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlDb2xsZWN0aW9uW10gPSBbXVxuICAgIGNvbnN0IHZhbGlkVHJhbnNhY3Rpb25zID0gcHJvcHMudHJhbnNhY3Rpb25zLmZpbHRlcih2YWx1ZSA9PiAhYmFkVG9wTGV2ZWxDYXRlZ29yaWVzLmluY2x1ZGVzKHZhbHVlLnRvcExldmVsQ2F0ZWdvcnkpICYmICFiYWRDYXRlZ29yaWVzLmluY2x1ZGVzKHZhbHVlLmNhdGVnb3J5KSlcbiAgICBjYXRlZ29yaWVzID0gdmFsaWRUcmFuc2FjdGlvbnMubWFwKHRyYW5zYWN0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRyYW5zYWN0aW9uLmNhdGVnb3J5XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2codmFsaWRUcmFuc2FjdGlvbnMpXG5cbiAgICByZXR1cm4gPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGNhdGVnb3JpZXMubWFwKCh0cmFuc2FjdGlvbkNvbGxlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGtleT17dHJhbnNhY3Rpb25Db2xsZWN0aW9uLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWEtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3RyYW5zYWN0aW9uQ29sbGVjdGlvbi5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKnt0cmFuc2FjdGlvbkNvbGxlY3Rpb24udHJhbnNhY3Rpb25zLmxlbmd0aCA+IDAgPyB0cmFuc2FjdGlvbkNvbGxlY3Rpb24udHJhbnNhY3Rpb25zLm1hcCgodHJhbnNhY3Rpb24pID0+ICgqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgPFRyYW5zYWN0aW9uQ2FyZCBrZXk9e3RyYW5zYWN0aW9uLmd1aWR9IHRyYW5zYWN0aW9uPXt0cmFuc2FjdGlvbn0gLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyopKSA6IDw+PC8+IH0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICApKSA6IDw+PC8+IH1cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9UaGVtZVByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNhY3Rpb25zQ29udGVudChwcm9wczogVHJhbnNhY3Rpb25zUHJvcHMpIHtcbiAgICByZXR1cm4gPENvbnRlbnQgdHJhbnNhY3Rpb25zPXtwcm9wcy50cmFuc2FjdGlvbnN9Lz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIkFwcEJhciIsIlRvb2xiYXIiLCJCb3giLCJUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkiLCJUcmFuc2FjdGlvbkNhdGVnb3J5IiwiQWNjb3JkaW9uIiwiQWNjb3JkaW9uU3VtbWFyeSIsIkFjY29yZGlvbkRldGFpbHMiLCJFeHBhbmRNb3JlSWNvbiIsIlR5cG9ncmFwaHkiLCJ0aGVtZSIsImJhZFRvcExldmVsQ2F0ZWdvcmllcyIsIlRSQU5TRkVSIiwiSU5DT01FIiwiR0lGVFNfQU5EX0RPTkFUSU9OUyIsImJhZENhdGVnb3JpZXMiLCJDSEFSSVRZIiwiQ0hFQ0siLCJDb250ZW50IiwicHJvcHMiLCJjYXRlZ29yaWVzIiwidmFsaWRUcmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbnMiLCJmaWx0ZXIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwidG9wTGV2ZWxDYXRlZ29yeSIsImNhdGVnb3J5IiwibWFwIiwidHJhbnNhY3Rpb24iLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwibGVuZ3RoIiwidHJhbnNhY3Rpb25Db2xsZWN0aW9uIiwiZXhwYW5kSWNvbiIsImFyaWEtY29udHJvbHMiLCJpZCIsIlRyYW5zYWN0aW9uc0NvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TransactionsContent.tsx\n");

/***/ })

});