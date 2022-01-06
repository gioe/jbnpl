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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TransactionsContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _TransactionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionCard */ \"./components/TransactionCard.tsx\");\n/* harmony import */ var _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/transactionEnums */ \"./helpers/transactionEnums.tsx\");\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Accordion */ \"./node_modules/@mui/material/Accordion/index.js\");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/AccordionSummary */ \"./node_modules/@mui/material/AccordionSummary/index.js\");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/AccordionDetails */ \"./node_modules/@mui/material/AccordionDetails/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)();\nvar badTopLevelCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.TRANSFER,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.INCOME,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TopLevelTransactionCategory.GIFTS_AND_DONATIONS, \n];\nvar badCategories = [\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHARITY,\n    _helpers_transactionEnums__WEBPACK_IMPORTED_MODULE_3__.TransactionCategory.CHECK, \n];\n// console.log(\"FOUND MATCHING CATEGORY\")\n// const index = temporaryArray.findIndex(value => value.name == transaction.category)\n// const transactionCategory = temporaryArray[index]\n// const newTransactions = transactionCategory.transactions.concat([transaction])\n// transactionCategory.transactions = newTransactions\nfunction Content(props) {\n    var _this = this;\n    var categories = [];\n    var validTransactions = props.transactions.filter(function(value) {\n        return !badTopLevelCategories.includes(value.topLevelCategory) && !badCategories.includes(value.category);\n    });\n    categories = validTransactions.map(function(transaction) {\n        return {\n            name: transaction.category,\n            transactions: [\n                transaction\n            ]\n        };\n    });\n    console.log(categories);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n        theme: theme,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 58,\n            columnNumber: 12\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                position: \"relative\",\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    },\n                    __self: this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: categories.length > 0 ? categories.map(function(transactionCollection) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                expandIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                }),\n                                \"aria-controls\": \"panel1a-content\",\n                                id: \"panel1a-header\",\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    __source: {\n                                        fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 29\n                                    },\n                                    __self: _this,\n                                    children: transactionCollection.name\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                __source: {\n                                    fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: transactionCollection.transactions.length > 0 ? transactionCollection.transactions.map(function(transaction) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TransactionCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        transaction: transaction,\n                                        __source: {\n                                            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this\n                                    }, transaction.guid);\n                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                })\n                            })\n                        ]\n                    }, transactionCollection.name);\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                })\n            })\n        ]\n    }));\n}\n_c = Content;\nfunction TransactionsContent(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, {\n        transactions: props.transactions,\n        __source: {\n            fileName: \"/Users/mgioe/Desktop/bnpl/frontend/components/TransactionsContent.tsx\",\n            lineNumber: 86,\n            columnNumber: 12\n        },\n        __self: this\n    }));\n};\n_c1 = TransactionsContent;\nvar _c, _c1;\n$RefreshReg$(_c, \"Content\");\n$RefreshReg$(_c1, \"TransactionsContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uc0NvbnRlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFFaUM7QUFDWjtBQUNWO0FBQ0U7QUFDUjtBQUNZO0FBQzZDO0FBQzdDO0FBQ2M7QUFDQTtBQUNGO0FBQ1Y7QUFHakQsR0FBSyxDQUFDZSxLQUFLLEdBQUdkLGlFQUFXO0FBRXpCLEdBQUssQ0FBQ2UscUJBQXFCLEdBQUcsQ0FBQztJQUMzQlIsMkZBQW9DO0lBQ3BDQSx5RkFBa0M7SUFDbENBLHNHQUErQztBQUNuRCxDQUFDO0FBRUQsR0FBSyxDQUFDWSxhQUFhLEdBQUcsQ0FBQztJQUNuQlgsa0ZBQTJCO0lBQzNCQSxnRkFBeUI7QUFDN0IsQ0FBQztBQVdELEVBQXlDO0FBQ3pDLEVBQXNGO0FBQ3RGLEVBQW9EO0FBQ3BELEVBQWlGO0FBQ2pGLEVBQXFEO1NBRTVDYyxPQUFPLENBQUNDLEtBQXdCLEVBQUUsQ0FBQzs7SUFFeEMsR0FBRyxDQUFDQyxVQUFVLEdBQW9DLENBQUMsQ0FBQztJQUNwRCxHQUFLLENBQUNDLGlCQUFpQixHQUFHRixLQUFLLENBQUNHLFlBQVksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQVJBLEtBQUs7UUFBSSxNQUFNLEVBQUxiLHFCQUFxQixDQUFDYyxRQUFRLENBQUNELEtBQUssQ0FBQ0UsZ0JBQWdCLE1BQU1YLGFBQWEsQ0FBQ1UsUUFBUSxDQUFDRCxLQUFLLENBQUNHLFFBQVE7O0lBQzlKUCxVQUFVLEdBQUdDLGlCQUFpQixDQUFDTyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsV0FBVyxFQUFJLENBQUM7UUFDL0MsTUFBTSxDQUFFLENBQUM7WUFDTEMsSUFBSSxFQUFFRCxXQUFXLENBQUNGLFFBQVE7WUFDMUJMLFlBQVksRUFBRSxDQUFDTztnQkFBQUEsV0FBVztZQUFBLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUNaLFVBQVU7SUFFdEIsTUFBTSx1RUFBRXZCLCtEQUFhO1FBQUNhLEtBQUssRUFBRUEsS0FBSzs7Ozs7Ozs7aUZBQzdCWixpRUFBVzs7Ozs7Ozs7aUZBQ1hDLDREQUFNO2dCQUFDa0MsUUFBUSxFQUFDLENBQVU7Ozs7Ozs7K0ZBQ3RCakMsNkRBQU87Ozs7Ozs7OztpRkFHWEMseURBQUc7Ozs7Ozs7MEJBQ0NtQixVQUFVLENBQUNjLE1BQU0sR0FBRyxDQUFDLEdBQUdkLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLFFBQVEsQ0FBUE8scUJBQXFCO2tDQUMxRCxNQUFNLHlEQUFMOUIsK0RBQVM7Ozs7Ozs7O2lHQUNEQyx1RUFBZ0I7Z0NBQ2I4QixVQUFVLHVFQUFHNUIsdUVBQWM7O2dDQUMzQjZCLENBQWEsZ0JBQUMsQ0FBaUI7Z0NBQy9CQyxFQUFFLEVBQUMsQ0FBZ0I7Ozs7Ozs7K0dBRWxCN0IsaUVBQVU7Ozs7Ozs7OENBQUUwQixxQkFBcUIsQ0FBQ0wsSUFBSTs7O2lHQUUxQ3ZCLHVFQUFnQjs7Ozs7OzswQ0FDWjRCLHFCQUFxQixDQUFDYixZQUFZLENBQUNZLE1BQU0sR0FBRyxDQUFDLEdBQUdDLHFCQUFxQixDQUFDYixZQUFZLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFdBQVc7a0RBQ2hHLE1BQU0sd0RBQUwzQix3REFBZTt3Q0FBd0IyQixXQUFXLEVBQUVBLFdBQVc7Ozs7Ozs7dUNBQTFDQSxXQUFXLENBQUNVLElBQUk7Ozs7O3VCQVZ0Q0oscUJBQXFCLENBQUNMLElBQUk7Ozs7OztBQWlCMUQsQ0FBQztLQXRDUVosT0FBTztBQXdDRCxRQUFRLENBQUNzQixtQkFBbUIsQ0FBQ3JCLEtBQXdCLEVBQUUsQ0FBQztJQUNuRSxNQUFNLHNFQUFFRCxPQUFPO1FBQUNJLFlBQVksRUFBRUgsS0FBSyxDQUFDRyxZQUFZOzs7Ozs7OztBQUNwRCxDQUFDO01BRnVCa0IsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25zQ29udGVudC50c3g/N2VmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RyYW5zYWN0aW9ufSBmcm9tIFwiLi4vaGVscGVycy90eXBlc1wiO1xuaW1wb3J0IHtjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlcn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFRyYW5zYWN0aW9uQ2FyZCBmcm9tIFwiLi9UcmFuc2FjdGlvbkNhcmRcIjtcbmltcG9ydCB7VG9wTGV2ZWxUcmFuc2FjdGlvbkNhdGVnb3J5LCBUcmFuc2FjdGlvbkNhdGVnb3J5fSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zYWN0aW9uRW51bXMnXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uJztcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWNjb3JkaW9uU3VtbWFyeSc7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbkRldGFpbHMnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCB7QWNjb3VudFR5cGV9IGZyb20gXCIuLi9oZWxwZXJzL2FjY291bnRFbnVtc1wiO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKCk7XG5cbmNvbnN0IGJhZFRvcExldmVsQ2F0ZWdvcmllcyA9IFtcbiAgICBUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkuVFJBTlNGRVIsXG4gICAgVG9wTGV2ZWxUcmFuc2FjdGlvbkNhdGVnb3J5LklOQ09NRSxcbiAgICBUb3BMZXZlbFRyYW5zYWN0aW9uQ2F0ZWdvcnkuR0lGVFNfQU5EX0RPTkFUSU9OUyxcbl1cblxuY29uc3QgYmFkQ2F0ZWdvcmllcyA9IFtcbiAgICBUcmFuc2FjdGlvbkNhdGVnb3J5LkNIQVJJVFksXG4gICAgVHJhbnNhY3Rpb25DYXRlZ29yeS5DSEVDSyxcbl1cblxuaW50ZXJmYWNlIFRyYW5zYWN0aW9uc1Byb3BzIHtcbiAgICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW107XG59XG5cbnR5cGUgVHJhbnNhY3Rpb25DYXRlZ29yeUNvbGxlY3Rpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcbn1cblxuLy8gY29uc29sZS5sb2coXCJGT1VORCBNQVRDSElORyBDQVRFR09SWVwiKVxuLy8gY29uc3QgaW5kZXggPSB0ZW1wb3JhcnlBcnJheS5maW5kSW5kZXgodmFsdWUgPT4gdmFsdWUubmFtZSA9PSB0cmFuc2FjdGlvbi5jYXRlZ29yeSlcbi8vIGNvbnN0IHRyYW5zYWN0aW9uQ2F0ZWdvcnkgPSB0ZW1wb3JhcnlBcnJheVtpbmRleF1cbi8vIGNvbnN0IG5ld1RyYW5zYWN0aW9ucyA9IHRyYW5zYWN0aW9uQ2F0ZWdvcnkudHJhbnNhY3Rpb25zLmNvbmNhdChbdHJhbnNhY3Rpb25dKVxuLy8gdHJhbnNhY3Rpb25DYXRlZ29yeS50cmFuc2FjdGlvbnMgPSBuZXdUcmFuc2FjdGlvbnNcblxuZnVuY3Rpb24gQ29udGVudChwcm9wczogVHJhbnNhY3Rpb25zUHJvcHMpIHtcblxuICAgIGxldCBjYXRlZ29yaWVzOiBUcmFuc2FjdGlvbkNhdGVnb3J5Q29sbGVjdGlvbltdID0gW11cbiAgICBjb25zdCB2YWxpZFRyYW5zYWN0aW9ucyA9IHByb3BzLnRyYW5zYWN0aW9ucy5maWx0ZXIodmFsdWUgPT4gIWJhZFRvcExldmVsQ2F0ZWdvcmllcy5pbmNsdWRlcyh2YWx1ZS50b3BMZXZlbENhdGVnb3J5KSAmJiAhYmFkQ2F0ZWdvcmllcy5pbmNsdWRlcyh2YWx1ZS5jYXRlZ29yeSkpXG4gICAgY2F0ZWdvcmllcyA9IHZhbGlkVHJhbnNhY3Rpb25zLm1hcCh0cmFuc2FjdGlvbiA9PiB7XG4gICAgICAgIHJldHVybiAge1xuICAgICAgICAgICAgbmFtZTogdHJhbnNhY3Rpb24uY2F0ZWdvcnksXG4gICAgICAgICAgICB0cmFuc2FjdGlvbnM6IFt0cmFuc2FjdGlvbl1cbiAgICAgICAgfSBhcyBUcmFuc2FjdGlvbkNhdGVnb3J5Q29sbGVjdGlvblxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuXG4gICAgcmV0dXJuIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBjYXRlZ29yaWVzLm1hcCgodHJhbnNhY3Rpb25Db2xsZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbiBrZXk9e3RyYW5zYWN0aW9uQ29sbGVjdGlvbi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwxYS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pnt0cmFuc2FjdGlvbkNvbGxlY3Rpb24ubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNhY3Rpb25Db2xsZWN0aW9uLnRyYW5zYWN0aW9ucy5sZW5ndGggPiAwID8gdHJhbnNhY3Rpb25Db2xsZWN0aW9uLnRyYW5zYWN0aW9ucy5tYXAoKHRyYW5zYWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2FjdGlvbkNhcmQga2V5PXt0cmFuc2FjdGlvbi5ndWlkfSB0cmFuc2FjdGlvbj17dHJhbnNhY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiA8PjwvPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgKSkgOiA8PjwvPiB9XG4gICAgICAgIDwvQm94PlxuICAgIDwvVGhlbWVQcm92aWRlcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zYWN0aW9uc0NvbnRlbnQocHJvcHM6IFRyYW5zYWN0aW9uc1Byb3BzKSB7XG4gICAgcmV0dXJuIDxDb250ZW50IHRyYW5zYWN0aW9ucz17cHJvcHMudHJhbnNhY3Rpb25zfS8+O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJBcHBCYXIiLCJUb29sYmFyIiwiQm94IiwiVHJhbnNhY3Rpb25DYXJkIiwiVG9wTGV2ZWxUcmFuc2FjdGlvbkNhdGVnb3J5IiwiVHJhbnNhY3Rpb25DYXRlZ29yeSIsIkFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwiRXhwYW5kTW9yZUljb24iLCJUeXBvZ3JhcGh5IiwidGhlbWUiLCJiYWRUb3BMZXZlbENhdGVnb3JpZXMiLCJUUkFOU0ZFUiIsIklOQ09NRSIsIkdJRlRTX0FORF9ET05BVElPTlMiLCJiYWRDYXRlZ29yaWVzIiwiQ0hBUklUWSIsIkNIRUNLIiwiQ29udGVudCIsInByb3BzIiwiY2F0ZWdvcmllcyIsInZhbGlkVHJhbnNhY3Rpb25zIiwidHJhbnNhY3Rpb25zIiwiZmlsdGVyIiwidmFsdWUiLCJpbmNsdWRlcyIsInRvcExldmVsQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIm1hcCIsInRyYW5zYWN0aW9uIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsImxlbmd0aCIsInRyYW5zYWN0aW9uQ29sbGVjdGlvbiIsImV4cGFuZEljb24iLCJhcmlhLWNvbnRyb2xzIiwiaWQiLCJndWlkIiwiVHJhbnNhY3Rpb25zQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TransactionsContent.tsx\n");

/***/ })

});