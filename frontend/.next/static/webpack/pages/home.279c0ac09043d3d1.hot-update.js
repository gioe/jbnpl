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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionsContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _TransactionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionCard */ \"./components/TransactionCard.tsx\");\n/* harmony import */ var _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/transactionEnums */ \"./helpers/transactionEnums.tsx\");\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Accordion */ \"./node_modules/@mui/material/Accordion/index.js\");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/AccordionSummary */ \"./node_modules/@mui/material/AccordionSummary/index.js\");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/AccordionDetails */ \"./node_modules/@mui/material/AccordionDetails/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)();\nvar badTopLevelCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.TRANSFER,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.INCOME,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.GIFTS_AND_DONATIONS, \n];\nvar badCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHARITY,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHECK, \n];\nfunction Content(props) {\n    var _this = this;\n    var categories = [];\n    var validTransactions = props.transactions.filter(function(value) {\n        return !badTopLevelCategories.includes(value.topLevelCategory) && !badCategories.includes(value.category);\n    });\n    validTransactions.forEach(function(transaction) {\n        if (categories.filter(function(value) {\n            return value.name == transaction.category;\n        }).length > 0) {\n            var index = categories.findIndex(function(value) {\n                return value.name == transaction.category;\n            });\n            var transactionCategory = categories[index];\n            var newTransactions = transactionCategory.transactions.concat([\n                transaction\n            ]);\n            transactionCategory.transactions = newTransactions;\n        } else {\n            var category = {\n                name: transaction.category,\n                transactions: [\n                    transaction\n                ]\n            };\n            categories.push(category);\n        }\n    });\n    categories.sort(function(a, b) {\n        return a.name > b.name;\n    });\n    console.log(categories);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 64,\n            columnNumber: 12\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                position: \"relative\",\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: categories.length > 0 ? categories.map(function(transactionCollection) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                expandIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                }),\n                                \"aria-controls\": \"panel1a-content\",\n                                id: \"panel1a-header\",\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    __source: {\n                                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this,\n                                    children: transactionCollection.name\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: transactionCollection.transactions.length > 0 ? transactionCollection.transactions.map(function(transaction) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TransactionCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        transaction: transaction,\n                                        __source: {\n                                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this\n                                    }, transaction.guid);\n                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                })\n                            })\n                        ]\n                    }, transactionCollection.name);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                })\n            })\n        ]\n    }));\n}\n_c = Content;\nfunction TransactionsContent(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, {\n        transactions: props.transactions,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 92,\n            columnNumber: 12\n        },\n        __self: this\n    }));\n};\n_c1 = TransactionsContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c1, \"TransactionsContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBaUI7Z0NBQy9CQyxFQUFFLEVBQUMsQ0FBZ0I7Ozs7Ozs7K0dBRWxCdkMsaUVBQVU7Ozs7Ozs7OENBQUVvQyxxQkFBcUIsQ0FBQ2YsSUFBSTs7O2lHQUUxQ3ZCLHVFQUFnQjs7Ozs7OzswQ0FDWnNDLHFCQUFxQixDQUFDdkIsWUFBWSxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxHQUFHYyxxQkFBcUIsQ0FBQ3ZCLFlBQVksQ0FBQ3NCLEdBQUcsQ0FBQyxRQUFRLENBQVBmLFdBQVc7a0RBQ2hHLE1BQU0sd0RBQUwzQix3REFBZTt3Q0FBd0IyQixXQUFXLEVBQUVBLFdBQVc7Ozs7Ozs7dUNBQTFDQSxXQUFXLENBQUNvQixJQUFJOzs7Ozt1QkFWdENKLHFCQUFxQixDQUFDZixJQUFJOzs7Ozs7QUFpQjFELENBQUM7S0FsRFFaLE9BQU87QUFvREQsUUFBUSxDQUFDZ0MsbUJBQW1CLENBQUMvQixLQUF3QixFQUFFLENBQUM7SUFDbkUsTUFBTSxzRUFBRUQsT0FBTztRQUFDSSxZQUFZLEVBQUVILEtBQUssQ0FBQ0csWUFBWTs7Ozs7Ozs7QUFDcEQsQ0FBQztNQUZ1QjRCLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uc0NvbnRlbnQudHN4PzdlZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUcmFuc2FjdGlvbn0gZnJvbSBcIi4uL2hlbHBlcnMvdHlwZXNcIjtcbmltcG9ydCB7Y3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXJ9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkNhcmQgZnJvbSBcIi4vVHJhbnNhY3Rpb25DYXJkXCI7XG5pbXBvcnQge1RvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeSwgVHJhbnNhY3Rpb25DYXRlZ29yeX0gZnJvbSAnLi4vaGVscGVycy90cmFuc2FjdGlvbkVudW1zJ1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvblN1bW1hcnknO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25EZXRhaWxzJztcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQge0FjY291bnRUeXBlfSBmcm9tIFwiLi4vaGVscGVycy9hY2NvdW50RW51bXNcIjtcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSgpO1xuXG5jb25zdCBiYWRUb3BMZXZlbENhdGVnb3JpZXMgPSBbXG4gICAgVG9wTGV2ZWxUcmFuc2FjdGlvbkNhdGVnb3J5LlRSQU5TRkVSLFxuICAgIFRvcExldmVsVHJhbnNhY3Rpb25DYXRlZ29yeS5JTkNPTUUsXG4gICAgVG9wTGV2ZWxUcmFuc2FjdGlvbkNhdGVnb3J5LkdJRlRTX0FORF9ET05BVElPTlMsXG5dXG5cbmNvbnN0IGJhZENhdGVnb3JpZXMgPSBbXG4gICAgVHJhbnNhY3Rpb25DYXRlZ29yeS5DSEFSSVRZLFxuICAgIFRyYW5zYWN0aW9uQ2F0ZWdvcnkuQ0hFQ0ssXG5dXG5cbmludGVyZmFjZSBUcmFuc2FjdGlvbnNQcm9wcyB7XG4gICAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdO1xufVxuXG50eXBlIFRyYW5zYWN0aW9uQ2F0ZWdvcnlDb2xsZWN0aW9uID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW107XG59XG5cbmZ1bmN0aW9uIENvbnRlbnQocHJvcHM6IFRyYW5zYWN0aW9uc1Byb3BzKSB7XG5cbiAgICBsZXQgY2F0ZWdvcmllczogVHJhbnNhY3Rpb25DYXRlZ29yeUNvbGxlY3Rpb25bXSA9IFtdXG4gICAgY29uc3QgdmFsaWRUcmFuc2FjdGlvbnMgPSBwcm9wcy50cmFuc2FjdGlvbnMuZmlsdGVyKHZhbHVlID0+ICFiYWRUb3BMZXZlbENhdGVnb3JpZXMuaW5jbHVkZXModmFsdWUudG9wTGV2ZWxDYXRlZ29yeSkgJiYgIWJhZENhdGVnb3JpZXMuaW5jbHVkZXModmFsdWUuY2F0ZWdvcnkpKVxuICAgIHZhbGlkVHJhbnNhY3Rpb25zLmZvckVhY2godHJhbnNhY3Rpb24gPT4ge1xuICAgICAgICBpZiAoY2F0ZWdvcmllcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0cmFuc2FjdGlvbi5jYXRlZ29yeSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYXRlZ29yaWVzLmZpbmRJbmRleCh2YWx1ZSA9PiB2YWx1ZS5uYW1lID09IHRyYW5zYWN0aW9uLmNhdGVnb3J5KVxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25DYXRlZ29yeSA9IGNhdGVnb3JpZXNbaW5kZXhdXG4gICAgICAgICAgICBjb25zdCBuZXdUcmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbkNhdGVnb3J5LnRyYW5zYWN0aW9ucy5jb25jYXQoW3RyYW5zYWN0aW9uXSlcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uQ2F0ZWdvcnkudHJhbnNhY3Rpb25zID0gbmV3VHJhbnNhY3Rpb25zXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0cmFuc2FjdGlvbi5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbnM6IFt0cmFuc2FjdGlvbl1cbiAgICAgICAgICAgIH0gYXMgVHJhbnNhY3Rpb25DYXRlZ29yeUNvbGxlY3Rpb25cbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSlcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjYXRlZ29yaWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG5cbiAgICByZXR1cm4gPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGNhdGVnb3JpZXMubWFwKCh0cmFuc2FjdGlvbkNvbGxlY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uIGtleT17dHJhbnNhY3Rpb25Db2xsZWN0aW9uLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWEtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3RyYW5zYWN0aW9uQ29sbGVjdGlvbi5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2FjdGlvbkNvbGxlY3Rpb24udHJhbnNhY3Rpb25zLmxlbmd0aCA+IDAgPyB0cmFuc2FjdGlvbkNvbGxlY3Rpb24udHJhbnNhY3Rpb25zLm1hcCgodHJhbnNhY3Rpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zYWN0aW9uQ2FyZCBrZXk9e3RyYW5zYWN0aW9uLmd1aWR9IHRyYW5zYWN0aW9uPXt0cmFuc2FjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IDw+PC8+IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICApKSA6IDw+PC8+IH1cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9UaGVtZVByb3ZpZGVyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNhY3Rpb25zQ29udGVudChwcm9wczogVHJhbnNhY3Rpb25zUHJvcHMpIHtcbiAgICByZXR1cm4gPENvbnRlbnQgdHJhbnNhY3Rpb25zPXtwcm9wcy50cmFuc2FjdGlvbnN9Lz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIkFwcEJhciIsIlRvb2xiYXIiLCJCb3giLCJUcmFuc2FjdGlvbkNhcmQiLCJUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkiLCJUcmFuc2FjdGlvbkNhdGVnb3J5IiwiQWNjb3JkaW9uIiwiQWNjb3JkaW9uU3VtbWFyeSIsIkFjY29yZGlvbkRldGFpbHMiLCJFeHBhbmRNb3JlSWNvbiIsIlR5cG9ncmFwaHkiLCJ0aGVtZSIsImJhZFRvcExldmVsQ2F0ZWdvcmllcyIsIlRSQU5TRkVSIiwiSU5DT01FIiwiR0lGVFNfQU5EX0RPTkFUSU9OUyIsImJhZENhdGVnb3JpZXMiLCJDSEFSSVRZIiwiQ0hFQ0siLCJDb250ZW50IiwicHJvcHMiLCJjYXRlZ29yaWVzIiwidmFsaWRUcmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbnMiLCJmaWx0ZXIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwidG9wTGV2ZWxDYXRlZ29yeSIsImNhdGVnb3J5IiwiZm9yRWFjaCIsInRyYW5zYWN0aW9uIiwibmFtZSIsImxlbmd0aCIsImluZGV4IiwiZmluZEluZGV4IiwidHJhbnNhY3Rpb25DYXRlZ29yeSIsIm5ld1RyYW5zYWN0aW9ucyIsImNvbmNhdCIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJjb25zb2xlIiwibG9nIiwicG9zaXRpb24iLCJtYXAiLCJ0cmFuc2FjdGlvbkNvbGxlY3Rpb24iLCJleHBhbmRJY29uIiwiYXJpYS1jb250cm9scyIsImlkIiwiZ3VpZCIsIlRyYW5zYWN0aW9uc0NvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TransactionsContent.tsx\n");

/***/ })

});