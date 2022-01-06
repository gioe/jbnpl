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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionsContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _TransactionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionCard */ \"./components/TransactionCard.tsx\");\n/* harmony import */ var _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/transactionEnums */ \"./helpers/transactionEnums.tsx\");\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Accordion */ \"./node_modules/@mui/material/Accordion/index.js\");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/AccordionSummary */ \"./node_modules/@mui/material/AccordionSummary/index.js\");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/AccordionDetails */ \"./node_modules/@mui/material/AccordionDetails/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)();\nvar badTopLevelCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.TRANSFER,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.INCOME,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.GIFTS_AND_DONATIONS, \n];\nvar badCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHARITY,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHECK, \n];\nfunction Content(props) {\n    var _this = this;\n    var categories = [];\n    var validTransactions = props.transactions.filter(function(value) {\n        return !badTopLevelCategories.includes(value.topLevelCategory) && !badCategories.includes(value.category);\n    });\n    validTransactions.forEach(function(transaction) {\n        if (categories.filter(function(value) {\n            return value.name == transaction.category;\n        }).length > 0) {\n            var index = categories.findIndex(function(value) {\n                return value.name == transaction.category;\n            });\n            var transactionCategory = categories[index];\n            var newTransactions = transactionCategory.transactions.concat([\n                transaction\n            ]);\n            transactionCategory.transactions = newTransactions;\n        } else {\n            var category = {\n                name: transaction.category,\n                transactions: [\n                    transaction\n                ]\n            };\n            categories.push(category);\n        }\n    });\n    console.log(categories);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                position: \"relative\",\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: categories.length > 0 ? categories.map(function(transactionCollection) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                expandIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                }),\n                                \"aria-controls\": \"panel1a-content\",\n                                id: \"panel1a-header\",\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    __source: {\n                                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this,\n                                    children: transactionCollection.name\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: transactionCollection.transactions.length > 0 ? transactionCollection.transactions.map(function(transaction) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TransactionCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        transaction: transaction,\n                                        __source: {\n                                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this\n                                    }, transaction.guid);\n                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                })\n                            })\n                        ]\n                    }, transactionCollection.name);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                })\n            })\n        ]\n    }));\n}\n_c = Content;\nfunction TransactionsContent(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, {\n        transactions: props.transactions,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 88,\n            columnNumber: 12\n        },\n        __self: this\n    }));\n};\n_c1 = TransactionsContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c1, \"TransactionsContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQ1MsTUFBTSxHQUFHLENBQUMsR0FBR1cscUJBQXFCLENBQUNwQixZQUFZLENBQUNtQixHQUFHLENBQUMsUUFBUSxDQUFQWixXQUFXO2tEQUNoRyxNQUFNLHdEQUFMM0Isd0RBQWU7d0NBQXdCMkIsV0FBVyxFQUFFQSxXQUFXOzs7Ozs7O3VDQUExQ0EsV0FBVyxDQUFDaUIsSUFBSTs7Ozs7dUJBVnRDSixxQkFBcUIsQ0FBQ1osSUFBSTs7Ozs7O0FBaUIxRCxDQUFDO0tBOUNRWixPQUFPO0FBZ0RELFFBQVEsQ0FBQzZCLG1CQUFtQixDQUFDNUIsS0FBd0IsRUFBRSxDQUFDO0lBQ25FLE1BQU0sc0VBQUVELE9BQU87UUFBQ0ksWUFBWSxFQUFFSCxLQUFLLENBQUNHLFlBQVk7Ozs7Ozs7O0FBQ3BELENBQUM7TUFGdUJ5QixtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmFuc2FjdGlvbnNDb250ZW50LnRzeD83ZWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VHJhbnNhY3Rpb259IGZyb20gXCIuLi9oZWxwZXJzL3R5cGVzXCI7XG5pbXBvcnQge2NyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25DYXJkIGZyb20gXCIuL1RyYW5zYWN0aW9uQ2FyZFwiO1xuaW1wb3J0IHtUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnksIFRyYW5zYWN0aW9uQ2F0ZWdvcnl9IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNhY3Rpb25FbnVtcydcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb24nO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25TdW1tYXJ5JztcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uRGV0YWlscyc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHtBY2NvdW50VHlwZX0gZnJvbSBcIi4uL2hlbHBlcnMvYWNjb3VudEVudW1zXCI7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoKTtcblxuY29uc3QgYmFkVG9wTGV2ZWxDYXRlZ29yaWVzID0gW1xuICAgIFRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeS5UUkFOU0ZFUixcbiAgICBUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkuSU5DT01FLFxuICAgIFRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeS5HSUZUU19BTkRfRE9OQVRJT05TLFxuXVxuXG5jb25zdCBiYWRDYXRlZ29yaWVzID0gW1xuICAgIFRyYW5zYWN0aW9uQ2F0ZWdvcnkuQ0hBUklUWSxcbiAgICBUcmFuc2FjdGlvbkNhdGVnb3J5LkNIRUNLLFxuXVxuXG5pbnRlcmZhY2UgVHJhbnNhY3Rpb25zUHJvcHMge1xuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcbn1cblxudHlwZSBUcmFuc2FjdGlvbkNhdGVnb3J5Q29sbGVjdGlvbiA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdO1xufVxuXG5mdW5jdGlvbiBDb250ZW50KHByb3BzOiBUcmFuc2FjdGlvbnNQcm9wcykge1xuXG4gICAgbGV0IGNhdGVnb3JpZXM6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlDb2xsZWN0aW9uW10gPSBbXVxuICAgIGNvbnN0IHZhbGlkVHJhbnNhY3Rpb25zID0gcHJvcHMudHJhbnNhY3Rpb25zLmZpbHRlcih2YWx1ZSA9PiAhYmFkVG9wTGV2ZWxDYXRlZ29yaWVzLmluY2x1ZGVzKHZhbHVlLnRvcExldmVsQ2F0ZWdvcnkpICYmICFiYWRDYXRlZ29yaWVzLmluY2x1ZGVzKHZhbHVlLmNhdGVnb3J5KSlcbiAgICB2YWxpZFRyYW5zYWN0aW9ucy5mb3JFYWNoKHRyYW5zYWN0aW9uID0+IHtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlLm5hbWUgPT0gdHJhbnNhY3Rpb24uY2F0ZWdvcnkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2F0ZWdvcmllcy5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0cmFuc2FjdGlvbi5jYXRlZ29yeSlcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uQ2F0ZWdvcnkgPSBjYXRlZ29yaWVzW2luZGV4XVxuICAgICAgICAgICAgY29uc3QgbmV3VHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25DYXRlZ29yeS50cmFuc2FjdGlvbnMuY29uY2F0KFt0cmFuc2FjdGlvbl0pXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkNhdGVnb3J5LnRyYW5zYWN0aW9ucyA9IG5ld1RyYW5zYWN0aW9uc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogdHJhbnNhY3Rpb24uY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25zOiBbdHJhbnNhY3Rpb25dXG4gICAgICAgICAgICB9IGFzIFRyYW5zYWN0aW9uQ2F0ZWdvcnlDb2xsZWN0aW9uXG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcblxuICAgIHJldHVybiA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPiAwID8gY2F0ZWdvcmllcy5tYXAoKHRyYW5zYWN0aW9uQ29sbGVjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24ga2V5PXt0cmFuc2FjdGlvbkNvbGxlY3Rpb24ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57dHJhbnNhY3Rpb25Db2xsZWN0aW9uLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zYWN0aW9uQ29sbGVjdGlvbi50cmFuc2FjdGlvbnMubGVuZ3RoID4gMCA/IHRyYW5zYWN0aW9uQ29sbGVjdGlvbi50cmFuc2FjdGlvbnMubWFwKCh0cmFuc2FjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNhY3Rpb25DYXJkIGtleT17dHJhbnNhY3Rpb24uZ3VpZH0gdHJhbnNhY3Rpb249e3RyYW5zYWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpIDogPD48Lz4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICkpIDogPD48Lz4gfVxuICAgICAgICA8L0JveD5cbiAgICA8L1RoZW1lUHJvdmlkZXI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2FjdGlvbnNDb250ZW50KHByb3BzOiBUcmFuc2FjdGlvbnNQcm9wcykge1xuICAgIHJldHVybiA8Q29udGVudCB0cmFuc2FjdGlvbnM9e3Byb3BzLnRyYW5zYWN0aW9uc30vPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiQXBwQmFyIiwiVG9vbGJhciIsIkJveCIsIlRyYW5zYWN0aW9uQ2FyZCIsIlRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeSIsIlRyYW5zYWN0aW9uQ2F0ZWdvcnkiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uRGV0YWlscyIsIkV4cGFuZE1vcmVJY29uIiwiVHlwb2dyYXBoeSIsInRoZW1lIiwiYmFkVG9wTGV2ZWxDYXRlZ29yaWVzIiwiVFJBTlNGRVIiLCJJTkNPTUUiLCJHSUZUU19BTkRfRE9OQVRJT05TIiwiYmFkQ2F0ZWdvcmllcyIsIkNIQVJJVFkiLCJDSEVDSyIsIkNvbnRlbnQiLCJwcm9wcyIsImNhdGVnb3JpZXMiLCJ2YWxpZFRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9ucyIsImZpbHRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJ0b3BMZXZlbENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJmb3JFYWNoIiwidHJhbnNhY3Rpb24iLCJuYW1lIiwibGVuZ3RoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ0cmFuc2FjdGlvbkNhdGVnb3J5IiwibmV3VHJhbnNhY3Rpb25zIiwiY29uY2F0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsIm1hcCIsInRyYW5zYWN0aW9uQ29sbGVjdGlvbiIsImV4cGFuZEljb24iLCJhcmlhLWNvbnRyb2xzIiwiaWQiLCJndWlkIiwiVHJhbnNhY3Rpb25zQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TransactionsContent.tsx\n");

/***/ })

});