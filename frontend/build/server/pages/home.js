"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 7635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material/Accordion"
const Accordion_namespaceObject = require("@mui/material/Accordion");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionSummary"
const AccordionSummary_namespaceObject = require("@mui/material/AccordionSummary");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionDetails"
const AccordionDetails_namespaceObject = require("@mui/material/AccordionDetails");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMore"
const ExpandMore_namespaceObject = require("@mui/icons-material/ExpandMore");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
;// CONCATENATED MODULE: ./helpers/accountEnums.tsx
var AccountType1;

(function(AccountType) {
    AccountType["CHECKING"] = "CHECKING";
    AccountType["SAVINGS"] = "SAVINGS";
    AccountType["LOAN"] = "LOAN";
    AccountType["CREDIT_CARD"] = "CREDIT_CARD";
    AccountType["INVESTMENT"] = "INVESTMENT";
    AccountType["LINE_OF_CREDIT"] = "LINE_OF_CREDIT";
    AccountType["MORTGAGE"] = "MORTGAGE";
    AccountType["PROPERTY"] = "PROPERTY";
    AccountType["CASH"] = "CASH";
    AccountType["INSURANCE"] = "INSURANCE";
    AccountType["PREPAID"] = "PREPAID";
})(AccountType1 || (AccountType1 = {
}));
var AccountSubtype1;

(function(AccountSubtype) {
    AccountSubtype["MONEY_MARKET"] = "MONEY_MARKET";
    AccountSubtype["CERTIFICATE_OF_DEPOSIT"] = "CERTIFICATE_OF_DEPOSIT";
    AccountSubtype["AUTO"] = "AUTO";
    AccountSubtype["STUDENT"] = "STUDENT";
    AccountSubtype["SMALL_BUSINESS"] = "SMALL_BUSINESS";
    AccountSubtype["PERSONAL"] = "PERSONAL";
    AccountSubtype["PERSONAL_WITH_COLLATERAL"] = "PERSONAL_WITH_COLLATERAL";
    AccountSubtype["HOME_EQUITY"] = "HOME_EQUITY";
    AccountSubtype["PLAN_401_K"] = "PLAN_401_K";
    AccountSubtype["PLAN_403_B"] = "PLAN_403_B";
    AccountSubtype["PLAN_529"] = "PLAN_529";
    AccountSubtype["IRA"] = "IRA";
    AccountSubtype["ROLLOVER_IRA"] = "ROLLOVER_IRA";
    AccountSubtype["ROTH_IRA"] = "ROTH_IRA";
    AccountSubtype["TAXABLE"] = "TAXABLE";
    AccountSubtype["NON_TAXABLE"] = "NON_TAXABLE";
    AccountSubtype["BROKERAGE"] = "BROKERAGE";
    AccountSubtype["TRUST"] = "TRUST";
    AccountSubtype["UNIFORM_GIFTS_TO_MINORS_ACT"] = "UNIFORM_GIFTS_TO_MINORS_ACT";
    AccountSubtype["PLAN_457"] = "PLAN_457";
    AccountSubtype["PENSION"] = "PENSION";
    AccountSubtype["EMPLOYEE_STOCK_OWNERSHIP_PLAN"] = "EMPLOYEE_STOCK_OWNERSHIP_PLAN";
    AccountSubtype["SIMPLIFIED_EMPLOYEE_PENSION"] = "SIMPLIFIED_EMPLOYEE_PENSION";
    AccountSubtype["SIMPLE_IRA"] = "SIMPLE_IRA";
    AccountSubtype["BOAT"] = "BOAT";
    AccountSubtype["POWERSPORTS"] = "POWERSPORTS";
    AccountSubtype["RV"] = "RV";
    AccountSubtype["HELOC"] = "HELOC";
    AccountSubtype["PLAN_ROTH_401_K"] = "PLAN_ROTH_401_K";
    AccountSubtype["FIXED_ANNUITY"] = "FIXED_ANNUITY";
    AccountSubtype["VARIABLE_ANNUITY"] = "VARIABLE_ANNUITY";
    AccountSubtype["VEHICLE_INSURANCE"] = "VEHICLE_INSURANCE";
    AccountSubtype["DISABILITY"] = "DISABILITY";
    AccountSubtype["HEALTH"] = "HEALTH";
    AccountSubtype["LONG_TERM_CARE"] = "LONG_TERM_CARE";
    AccountSubtype["PROPERTY_AND_CASUALTY"] = "PROPERTY_AND_CASUALTY";
    AccountSubtype["UNIVERSAL_LIFE"] = "UNIVERSAL_LIFE";
    AccountSubtype["TERM_LIFE"] = "TERM_LIFE";
    AccountSubtype["WHOLE_LIFE"] = "WHOLE_LIFE";
    AccountSubtype["ACCIDENTAL_DEATH_AND_DISMEMBERMENT"] = "ACCIDENTAL_DEATH_AND_DISMEMBERMENT";
    AccountSubtype["VARIABLE_UNIVERSAL_LIFE"] = "VARIABLE_UNIVERSAL_LIFE";
    AccountSubtype["HSA"] = "HSA";
    AccountSubtype["TAX_FREE_SAVINGS_ACCOUNT"] = "TAX_FREE_SAVINGS_ACCOUNT";
    AccountSubtype["INDIVIDUAL"] = "INDIVIDUAL";
    AccountSubtype["REGISTERED_RETIREMENT_INCOME_FUND"] = "REGISTERED_RETIREMENT_INCOME_FUND";
    AccountSubtype["CASH_MANAGEMENT_ACCOUNT"] = "CASH_MANAGEMENT_ACCOUNT";
    AccountSubtype["EMPLOYEE_STOCK_PURCHASE_PLAN"] = "EMPLOYEE_STOCK_PURCHASE_PLAN";
    AccountSubtype["REGISTERED_EDUCATION_SAVINGS_PLAN"] = "REGISTERED_EDUCATION_SAVINGS_PLAN";
    AccountSubtype["PROFIT_SHARING_PLAN"] = "PROFIT_SHARING_PLAN";
    AccountSubtype["UNIFORM_TRANSFER_TO_MINORS_ACT"] = "UNIFORM_TRANSFER_TO_MINORS_ACT";
    AccountSubtype["PLAN_401_A"] = "PLAN_401_A";
    AccountSubtype["SARSEP_IRA"] = "SARSEP_IRA";
    AccountSubtype["FIXED_ANNUITY_TRADITIONAL_IRA"] = "FIXED_ANNUITY_TRADITIONAL_IRA";
    AccountSubtype["VARIABLE_ANNUITY_TRADITIONAL_IRA"] = "VARIABLE_ANNUITY_TRADITIONAL_IRA";
    AccountSubtype["SEPP_IRA"] = "SEPP_IRA";
    AccountSubtype["INHERITED_TRADITIONAL_IRA"] = "INHERITED_TRADITIONAL_IRA";
    AccountSubtype["FIXED_ANNUITY_ROTH_IRA"] = "FIXED_ANNUITY_ROTH_IRA";
    AccountSubtype["VARIABLE_ANNUITY_ROTH_IRA"] = "VARIABLE_ANNUITY_ROTH_IRA";
    AccountSubtype["INHERITED_ROTH_IRA"] = "INHERITED_ROTH_IRA";
    AccountSubtype["COVERDELL"] = "COVERDELL";
    AccountSubtype["ADVISORY_ACCOUNT"] = "ADVISORY_ACCOUNT";
    AccountSubtype["BROKERAGE_MARGIN"] = "BROKERAGE_MARGIN";
    AccountSubtype["CHARITABLE_GIFT_ACCOUNT"] = "CHARITABLE_GIFT_ACCOUNT";
    AccountSubtype["CHURCH_ACCOUNT"] = "CHURCH_ACCOUNT";
    AccountSubtype["CONSERVATORSHIP"] = "CONSERVATORSHIP";
    AccountSubtype["CUSTODIAL"] = "CUSTODIAL";
    AccountSubtype["DEFINED_BENEFIT_PLAN"] = "DEFINED_BENEFIT_PLAN";
    AccountSubtype["DEFINED_CONTRIBUTION_PLAN"] = "DEFINED_CONTRIBUTION_PLAN";
    AccountSubtype["EDUCATIONAL"] = "EDUCATIONAL";
    AccountSubtype["ESTATE"] = "ESTATE";
    AccountSubtype["EXECUTOR"] = "EXECUTOR";
    AccountSubtype["GROUP_RETIREMENT_SAVINGS_PLAN"] = "GROUP_RETIREMENT_SAVINGS_PLAN";
    AccountSubtype["GUARANTEED_INVESTMENT_CERTIFICATE"] = "GUARANTEED_INVESTMENT_CERTIFICATE";
    AccountSubtype["HRA"] = "HRA";
    AccountSubtype["INDEXED_ANNUITY"] = "INDEXED_ANNUITY";
    AccountSubtype["INVESTMENT_CLUB"] = "INVESTMENT_CLUB";
    AccountSubtype["IRREVOCABLE_TRUST"] = "IRREVOCABLE_TRUST";
    AccountSubtype["JOINT_TENANTS_BY_ENTIRITY"] = "JOINT_TENANTS_BY_ENTIRITY";
    AccountSubtype["JOINT_TENANTS_COMMUNITY_PROPERTY"] = "JOINT_TENANTS_COMMUNITY_PROPERTY";
    AccountSubtype["JOINT_TENANTS_IN_COMMON"] = "JOINT_TENANTS_IN_COMMON";
    AccountSubtype["JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP"] = "JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP";
    AccountSubtype["KEOUGH_PLAN"] = "KEOUGH_PLAN";
    AccountSubtype["LIFE_INCOME_FUND"] = "LIFE_INCOME_FUND";
    AccountSubtype["LIVING_TRUST"] = "LIVING_TRUST";
    AccountSubtype["LOCKED_IN_RETIREMENT_ACCOUNT"] = "LOCKED_IN_RETIREMENT_ACCOUNT";
    AccountSubtype["LOCKED_IN_RETIREMENT_INVESTMENT_FUND"] = "LOCKED_IN_RETIREMENT_INVESTMENT_FUND";
    AccountSubtype["LOCKED_IN_RETIREMENT_SAVINGS_ACCOUNT"] = "LOCKED_IN_RETIREMENT_SAVINGS_ACCOUNT";
    AccountSubtype["MONEY_PURCHASE_PLAN"] = "MONEY_PURCHASE_PLAN";
    AccountSubtype["PARTNERSHIP"] = "PARTNERSHIP";
    AccountSubtype["PLAN_409_A"] = "PLAN_409_A";
    AccountSubtype["PLAN_ROTH_403_B"] = "PLAN_ROTH_403_B";
    AccountSubtype["REGISTERED_DISABILITY_SAVINGS_PLAN"] = "REGISTERED_DISABILITY_SAVINGS_PLAN";
    AccountSubtype["REGISTERED_LOCKED_IN_SAVINGS_PLAN"] = "REGISTERED_LOCKED_IN_SAVINGS_PLAN";
    AccountSubtype["REGISTERED_PENSION_PLAN"] = "REGISTERED_PENSION_PLAN";
    AccountSubtype["REGISTERED_RETIREMENT_SAVINGS_PLAN"] = "REGISTERED_RETIREMENT_SAVINGS_PLAN";
    AccountSubtype["REVOCABLE_TRUST"] = "REVOCABLE_TRUST";
    AccountSubtype["ROTH_CONVERSION"] = "ROTH_CONVERSION";
    AccountSubtype["SOLE_PROPRIETORSHIP"] = "SOLE_PROPRIETORSHIP";
    AccountSubtype["SPOUSAL_IRA"] = "SPOUSAL_IRA";
    AccountSubtype["SPOUSAL_ROTH_IRA"] = "SPOUSAL_ROTH_IRA";
    AccountSubtype["TESTAMENTARY_TRUST"] = "TESTAMENTARY_TRUST";
    AccountSubtype["THRIFT_SAVINGS_PLAN"] = "THRIFT_SAVINGS_PLAN";
    AccountSubtype["INHERITED_ANNUITY"] = "INHERITED_ANNUITY";
    AccountSubtype["CORPORATE_ACCOUNT"] = "CORPORATE_ACCOUNT";
    AccountSubtype["LIMITED_LIABILITY_ACCOUNT"] = "LIMITED_LIABILITY_ACCOUNT";
})(AccountSubtype1 || (AccountSubtype1 = {
}));

;// CONCATENATED MODULE: ./components/AccountsContent.tsx












const theme = (0,styles_.createTheme)();
function Content(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                                expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                                }),
                                "aria-controls": "panel1a-content",
                                id: "panel1a-header",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: "Checking"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: props.accounts.length > 0 ? `$${props.accounts.filter((value)=>value.type === AccountType1.CHECKING
                                    )[0].availableBalance}` : "$0"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                                expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                                }),
                                "aria-controls": "panel2a-content",
                                id: "panel2a-header",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: "Savings"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: props.accounts.length > 0 ? `$${props.accounts.filter((value)=>value.type === AccountType1.SAVINGS
                                    )[0].availableBalance}` : "$0"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                                expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                                }),
                                "aria-controls": "panel2a-content",
                                id: "panel2a-header",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: "Total Liquidity"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: props.accounts.length > 0 ? `$${Math.round(props.accounts.reduce((sum, current)=>sum + current.availableBalance
                                    , 0) * 100) / 100}` : "$0"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
function AccountsContent(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Content, {
        accounts: props.accounts
    }));
};

;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Divider"
const Divider_namespaceObject = require("@mui/material/Divider");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ChevronLeft"
const ChevronLeft_namespaceObject = require("@mui/icons-material/ChevronLeft");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Layers"
const Layers_namespaceObject = require("@mui/icons-material/Layers");
var Layers_default = /*#__PURE__*/__webpack_require__.n(Layers_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AccountBalance"
const AccountBalance_namespaceObject = require("@mui/icons-material/AccountBalance");
var AccountBalance_default = /*#__PURE__*/__webpack_require__.n(AccountBalance_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "@mui/material/Card"
const Card_namespaceObject = require("@mui/material/Card");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardContent"
const CardContent_namespaceObject = require("@mui/material/CardContent");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/CardMedia"
const CardMedia_namespaceObject = require("@mui/material/CardMedia");
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@mui/material/CardActions"
const CardActions_namespaceObject = require("@mui/material/CardActions");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_namespaceObject);
;// CONCATENATED MODULE: ./components/InstitutionSearchCard.tsx










function InstitutionSearchCard({ institution , selectInstitution  }) {
    const selectAuthenticate = ()=>{
        selectInstitution(institution);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        item: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
            sx: {
                display: 'flex'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                            sx: {
                                flex: '1 0 auto'
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "div",
                                variant: "h5",
                                children: institution.name
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                display: 'flex',
                                alignItems: 'center'
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                variant: "outlined",
                                onClick: selectAuthenticate,
                                children: "Authenticate"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                    component: "img",
                    sx: {
                        width: 151
                    },
                    image: institution.logoUrlMedium,
                    alt: institution.code
                })
            ]
        })
    }, institution.name));
};

;// CONCATENATED MODULE: external "react-modal"
const external_react_modal_namespaceObject = require("react-modal");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_namespaceObject);
// EXTERNAL MODULE: ./pages/api/auth.ts
var auth = __webpack_require__(3347);
// EXTERNAL MODULE: ./pages/api/mxClient.ts
var mxClient = __webpack_require__(7607);
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
;// CONCATENATED MODULE: external "@mui/lab/LoadingButton"
const LoadingButton_namespaceObject = require("@mui/lab/LoadingButton");
var LoadingButton_default = /*#__PURE__*/__webpack_require__.n(LoadingButton_namespaceObject);
;// CONCATENATED MODULE: ./components/SearchContent.tsx
















const SearchContent_theme = (0,styles_.createTheme)();
const initialState = {
    credentialRequests: []
};
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
function SearchContent_Content(props) {
    const [credentials1, setCredentials] = external_react_default().useState([]);
    const [showModal, setShowModal] = external_react_default().useState(false);
    const [loading, setLoading] = external_react_default().useState(false);
    const [selectedInstitutionCode, setSelectedInstitutionCode] = external_react_default().useState("");
    const [error, setError] = external_react_default().useState(false);
    const [credentialRequests1, setCredentialRequests] = external_react_default().useState(initialState.credentialRequests);
    const [submitButtonDisabled, setSubmitButtonDisabled] = external_react_default().useState(true);
    const [searchInput, setSearchInput] = external_react_default().useState("");
    const handleChange = (event)=>{
        const id = event.target.id;
        const value = event.target.value;
        const index = credentialRequests1.findIndex((element)=>element.guid == id
        );
        credentialRequests1[index].value = value;
        const credentialsAreMissing = credentialRequests1.filter((credential)=>credential.value.length == 0
        ).length > 0;
        setSubmitButtonDisabled(credentialsAreMissing);
        setCredentialRequests([
            ...credentialRequests1
        ]);
    };
    const selectInstitution = (institution)=>{
        (0,mxClient/* fetchInstitutionCredentials */.ke)(institution).then((data)=>{
            const credentials = data.response.credentials.map((value)=>{
                return {
                    fieldName: value.field_name.charAt(0).toUpperCase() + value.field_name.substring(1),
                    guid: value.guid,
                    label: value.label,
                    displayOrder: value.display_order,
                    fieldType: value.field_type
                };
            });
            const credentialRequests = credentials.map((value)=>{
                return {
                    guid: value.guid,
                    value: ""
                };
            });
            setCredentialRequests([
                ...credentialRequests
            ]);
            setCredentials(credentials);
            setSelectedInstitutionCode(institution.code);
            setShowModal(true);
        });
    };
    const escape = ()=>{
        setShowModal(false);
    };
    const submitCredentials = ()=>{
        setLoading(true);
        const request = {
            userGuid: (0,auth/* isAuthenticated */.$8)().user.mxId,
            institutionCode: selectedInstitutionCode,
            credentials: credentialRequests1
        };
        (0,mxClient/* establishMembership */.LN)(request).then((data)=>{
            if (data.error) {
                setError(true);
                setLoading(false);
            } else {
                const memberships = data.response.map((value)=>{
                    return {
                        guid: value.guid,
                        aggregatedAt: value.aggregated_at,
                        isBeingAggregated: value.is_being_aggregated,
                        successfullyAggregatedAt: value.successfully_aggregated_at,
                        connectionStatus: value.connection_status,
                        isAuthenticated: value.is_authenticated,
                        name: value.name,
                        institutionCode: value.institution_code,
                        userGuid: value.user_guid
                    };
                });
                props.handleFetchedMemberships(memberships);
                setError(false);
                setLoading(false);
                setShowModal(false);
            }
        });
    };
    const BarStyling = {
        width: "20rem",
        background: "#F2F1F9",
        border: "none",
        padding: "0.5rem"
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: SearchContent_theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                sx: {
                    py: 8
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    style: BarStyling,
                    value: searchInput,
                    placeholder: "Search banking institutions",
                    onChange: (e)=>{
                        setSearchInput(e.target.value);
                        props.onSearch(e.target.value);
                    }
                }, "random1")
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                sx: {
                    py: 8
                },
                maxWidth: "md",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_default()), {
                        isOpen: showModal,
                        contentLabel: "",
                        style: customStyles,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                            component: "form",
                            sx: {
                                width: '25ch'
                            },
                            spacing: 2,
                            noValidate: true,
                            autoComplete: "off",
                            children: [
                                credentials1.map((credential)=>{
                                    let fieldType = undefined;
                                    if (credential.fieldType == "PASSWORD") {
                                        fieldType = "password";
                                    }
                                    return(/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                        id: credential.guid,
                                        label: credential.fieldName,
                                        type: fieldType,
                                        error: error,
                                        variant: "outlined",
                                        onChange: handleChange
                                    }, credential.fieldType));
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                                    onClick: submitCredentials,
                                    loading: loading,
                                    loadingIndicator: "Loading...",
                                    variant: "outlined",
                                    disabled: submitButtonDisabled,
                                    children: "Submit"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    variant: "outlined",
                                    onClick: escape,
                                    children: "Cancel"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        container: true,
                        spacing: 4,
                        children: props.searchResults.map((institution)=>/*#__PURE__*/ jsx_runtime_.jsx(InstitutionSearchCard, {
                                institution: institution,
                                selectInstitution: selectInstitution
                            }, institution.name)
                        )
                    })
                ]
            })
        ]
    }));
}
function SearchContent(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(SearchContent_Content, {
        searchResults: props.searchResults,
        onSearch: props.onSearch,
        handleFetchedMemberships: props.handleFetchedMemberships
    }));
};

;// CONCATENATED MODULE: ./components/MembershipCard.tsx










function MembershipCard({ membership  }) {
    const [loading, setLoading] = external_react_default().useState(false);
    const aggregate = ()=>{
        setLoading(true);
        (0,mxClient/* aggregateMembership */.fF)(membership.userGuid, membership.guid).then((data)=>{
            console.log(data);
            setLoading(false);
        });
    };
    const authenticate = ()=>{
    };
    console.log(membership);
    return(/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        item: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
            sx: {
                display: 'flex'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                    sx: {
                        flex: '1 0 auto'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "div",
                            children: membership.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            component: "div",
                            children: [
                                "Connection Status: ",
                                membership.connectionStatus
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            component: "div",
                            children: [
                                "Is Being Aggregated: ",
                                membership.isBeingAggregated ? "Yes" : "No"
                            ]
                        }),
                        !membership.isBeingAggregated ? /*#__PURE__*/ jsx_runtime_.jsx((LoadingButton_default()), {
                            onClick: aggregate,
                            loading: loading,
                            loadingIndicator: "Aggregating...",
                            variant: "outlined",
                            children: "Aggregate"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            component: "div",
                            children: [
                                "Is Authenticated: ",
                                membership.isAuthenticated ? "Yes" : "No"
                            ]
                        }),
                        !membership.isAuthenticated ? /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            variant: "outlined",
                            onClick: authenticate,
                            children: "Authenticate"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            component: "div",
                            children: [
                                "Successfully Aggregated At: ",
                                membership.successfullyAggregatedAt == null ? "Never" : membership.successfullyAggregatedAt
                            ]
                        })
                    ]
                })
            })
        })
    }, membership.name));
};

;// CONCATENATED MODULE: ./components/ConnectionsContent.tsx








const ConnectionsContent_theme = (0,styles_.createTheme)();
const ConnectionsContent_Content = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: ConnectionsContent_theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                children: props.memberships.length > 0 ? props.memberships.map((membership)=>/*#__PURE__*/ jsx_runtime_.jsx(MembershipCard, {
                        membership: membership
                    }, membership.guid)
                ) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                })
            })
        ]
    }));
};
function ConnectionsContent(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ConnectionsContent_Content, {
        memberships: props.memberships
    }));
};

;// CONCATENATED MODULE: external "@mui/icons-material/AttachMoney"
const AttachMoney_namespaceObject = require("@mui/icons-material/AttachMoney");
var AttachMoney_default = /*#__PURE__*/__webpack_require__.n(AttachMoney_namespaceObject);
;// CONCATENATED MODULE: ./components/TransactionCard.tsx







function TransactionCard({ transaction  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
        item: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
            sx: {
                display: 'flex'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                    sx: {
                        flex: '1 0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                            component: "div",
                            children: [
                                "$",
                                transaction.amount
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "div",
                            children: transaction.description
                        })
                    ]
                })
            })
        })
    }, transaction.description));
};

;// CONCATENATED MODULE: ./helpers/transactionEnums.tsx
var TransactionCategory1;

(function(TransactionCategory) {
    TransactionCategory["CASH"] = "Cash";
    TransactionCategory["CHECK"] = "Check";
    TransactionCategory["AIR_TRAVEL"] = "Air Travel";
    TransactionCategory["HOTEL"] = "Hotel";
    TransactionCategory["RENTAL_CAR_AND_TAXI"] = "Rental Car & Taxi";
    TransactionCategory["VACATION"] = "Vacation";
    TransactionCategory["CREDIT_CARD_PAYMENT"] = "Credit Card Payment";
    TransactionCategory["TRANSFER_FOR_CASH_SPENDING"] = "Transfer for Cash Spending";
    TransactionCategory["MORTGAGE_PAYMENT"] = "Mortgage Payment";
    TransactionCategory["FEDERAL_TAX"] = "Federal Tax";
    TransactionCategory["LOCAL_TAX"] = "Local Tax";
    TransactionCategory["PROPERTY_TAX"] = "Property Tax";
    TransactionCategory["SALES_TAX"] = "Sales Tax";
    TransactionCategory["STATE_TAX"] = "State Tax";
    TransactionCategory["BOOKS"] = "Books";
    TransactionCategory["CLOTHING"] = "Clothing";
    TransactionCategory["ELECTRONICS_AND_SOFTWARE"] = "Electronics & Software";
    TransactionCategory["HOBBIES"] = "Hobbies";
    TransactionCategory["SPORTING_GOODS"] = "Sporting Goods";
    TransactionCategory["PET_FOODS_AND_SUPPLIES"] = "Pet Food & Supplies";
    TransactionCategory["PET_GROOMING"] = "Pet Grooming";
    TransactionCategory["VETERINARY"] = "Veterinary";
    TransactionCategory["HAIR"] = "Hair";
    TransactionCategory["LAUNDRY"] = "Laundry";
    TransactionCategory["SPA_AND_MASSAGE"] = "Spa & Massage";
    TransactionCategory["ALLOWANCE"] = "Allowance";
    TransactionCategory["BABY_SUPPLIES"] = "Baby Supplies";
    TransactionCategory["BABYSITTER_AND_DAYCARE"] = "Babysitter & Daycare";
    TransactionCategory["CHILD_SUPPORT"] = "Child Support";
    TransactionCategory["KIDS_ACTIVITIES"] = "Kids Activities";
    TransactionCategory["TOYS"] = "Toys";
    TransactionCategory["BUY"] = "Buy";
    TransactionCategory["DEPOSIT"] = "Deposit";
    TransactionCategory["DIVIDEND_AND_CAP_GAINS"] = "Dividend & Cap Gains";
    TransactionCategory["SELL"] = "Sell";
    TransactionCategory["WITHDRAWAL"] = "Withdrawal";
    TransactionCategory["BONUS"] = "Bonus";
    TransactionCategory["INTEREST_INCOME"] = "Interest Income";
    TransactionCategory["PAYCHECK"] = "Paycheck";
    TransactionCategory["REIMBURSEMENT"] = "Reimbursement";
    TransactionCategory["RENTAL_INCOME"] = "Rental Income";
    TransactionCategory["FURNISHINGS"] = "Furnishings";
    TransactionCategory["HOME_IMPROVEMENT"] = "Home Improvement";
    TransactionCategory["HOME_INSURANCE"] = "Home Insurance";
    TransactionCategory["HOME_SERVICES"] = "Home Services";
    TransactionCategory["HOME_SUPPLIES"] = "Home Supplies";
    TransactionCategory["LAWN_AND_GARDEN"] = "Lawn & Garden";
    TransactionCategory["MORTGAGE_AND_RENT"] = "Mortgage & Rent";
    TransactionCategory["DENTIST"] = "Dentist";
    TransactionCategory["DOCTOR"] = "Doctor";
    TransactionCategory["EYECARE"] = "Eyecare";
    TransactionCategory["GYM"] = "Gym";
    TransactionCategory["HEALTH_INSURANCE"] = "Health Insurance";
    TransactionCategory["PHARMACY"] = "Pharmacy";
    TransactionCategory["SPORTS"] = "Sports";
    TransactionCategory["CHARITY"] = "Charity";
    TransactionCategory["GIFT"] = "Gift";
    TransactionCategory["ALCOHOL_AND_BARS"] = "Alcohol & Bars";
    TransactionCategory["COFFEE_SHOPS"] = "Coffee Shops";
    TransactionCategory["FAST_FOOD"] = "Fast Food";
    TransactionCategory["GROCERIES"] = "Groceries";
    TransactionCategory["RESTAURANTS"] = "Restaurants";
    TransactionCategory["FINANCIAL_ADVISOR"] = "Financial Advisor";
    TransactionCategory["LIFE_INSURANCE"] = "Life Insurance";
    TransactionCategory["ATM_FEE"] = "ATM Fee";
    TransactionCategory["BANKING_FEE"] = "Banking Fee";
    TransactionCategory["FINANCE_CHARGE"] = "Finance Charge";
    TransactionCategory["LATE_FEE"] = "Late Fee";
    TransactionCategory["SERVICE_FEE"] = "Service Fee";
    TransactionCategory["TRADE_COMMISSIONS"] = "Trade Commissions";
    TransactionCategory["AMUSEMENT"] = "Amusement";
    TransactionCategory["ARTS"] = "Arts";
    TransactionCategory["MOVIES_AND_DVDS"] = "Movies & DVDs";
    TransactionCategory["MUSIC"] = "Music";
    TransactionCategory["NEWSPAPERS_AND_MAGAZINES"] = "Newspapers & Magazines";
    TransactionCategory["BOOKS_AND_SUPPLIES"] = "Books & Supplies";
    TransactionCategory["STUDENT_LOAN"] = "Student Loan";
    TransactionCategory["TUITION"] = "Tuition";
    TransactionCategory["ADVERTISING"] = "Advertising";
    TransactionCategory["LEGAL"] = "Legal";
    TransactionCategory["OFFICE_SUPPLIES"] = "Office Supplies";
    TransactionCategory["PRINTING"] = "Printing";
    TransactionCategory["SHIPPING"] = "Shipping";
    TransactionCategory["DOMAIN_NAMES"] = "Domain Names";
    TransactionCategory["FRAUD_PROTECTION"] = "Fraud Protection";
    TransactionCategory["HOME_PHONE"] = "Home Phone";
    TransactionCategory["HOSTING"] = "Hosting";
    TransactionCategory["INTERNET"] = "Internet";
    TransactionCategory["MOBILE_PHONE"] = "Mobile Phone";
    TransactionCategory["TELEVISION"] = "Television";
    TransactionCategory["UTILITIES"] = "Utilities";
    TransactionCategory["AUTO_INSURANCE"] = "Auto Insurance";
    TransactionCategory["AUTO_PAYMENT"] = "Auto Payment";
    TransactionCategory["GAS"] = "Gas";
    TransactionCategory["PARKING"] = "Parking";
    TransactionCategory["PUBLIC_TRANSPORTATION"] = "Public Transportation";
    TransactionCategory["SERVICE_AND_PARTS"] = "Service & Parts";
})(TransactionCategory1 || (TransactionCategory1 = {
}));
var TopLevelTransactionCategory1;

(function(TopLevelTransactionCategory) {
    TopLevelTransactionCategory["AUTO_ANT_TRANSPORT"] = "Auto & Transport";
    TopLevelTransactionCategory["BILLS_AND_UTILITIES"] = "Bills & Utilities";
    TopLevelTransactionCategory["BUSINESS_SERVICE"] = "Business Services";
    TopLevelTransactionCategory["EDUCATION"] = "Education";
    TopLevelTransactionCategory["ENTERTAINMENT"] = "Entertainment";
    TopLevelTransactionCategory["FEES_AND_CHARGES"] = "Fees & Charges";
    TopLevelTransactionCategory["FOOD_AND_DINING"] = "Food & Dining";
    TopLevelTransactionCategory["GIFTS_AND_DONATIONS"] = "Gifts & Donations";
    TopLevelTransactionCategory["HEALTH_AND_FITNESS"] = "Health & Fitness";
    TopLevelTransactionCategory["HOME"] = "Home";
    TopLevelTransactionCategory["INCOME"] = "Income";
    TopLevelTransactionCategory["INVESTMENTS"] = "Investments";
    TopLevelTransactionCategory["KIDS"] = "Kids";
    TopLevelTransactionCategory["PERSONAL_CARE"] = "Personal Care";
    TopLevelTransactionCategory["PETS"] = "Pets";
    TopLevelTransactionCategory["SHOPPING"] = "Shopping";
    TopLevelTransactionCategory["TAXES"] = "Taxes";
    TopLevelTransactionCategory["TRANSFER"] = "Transfer";
    TopLevelTransactionCategory["TRAVEL"] = "Travel";
    TopLevelTransactionCategory["UNCATEGORIZED"] = "Uncategorized";
})(TopLevelTransactionCategory1 || (TopLevelTransactionCategory1 = {
}));

;// CONCATENATED MODULE: ./components/TransactionsContent.tsx














const TransactionsContent_theme = (0,styles_.createTheme)();
const badTopLevelCategories = [
    TopLevelTransactionCategory1.TRANSFER,
    TopLevelTransactionCategory1.INCOME,
    TopLevelTransactionCategory1.GIFTS_AND_DONATIONS, 
];
const badCategories = [
    TransactionCategory1.CHARITY,
    TransactionCategory1.CHECK, 
];
function TransactionsContent_Content(props) {
    let categories = [];
    const validTransactions = props.transactions.filter((value)=>!badTopLevelCategories.includes(value.topLevelCategory) && !badCategories.includes(value.category)
    );
    validTransactions.forEach((transaction)=>{
        if (categories.filter((value)=>value.name == transaction.category
        ).length > 0) {
            const index = categories.findIndex((value)=>value.name == transaction.category
            );
            const transactionCategory = categories[index];
            const newTransactions = transactionCategory.transactions.concat([
                transaction
            ]);
            transactionCategory.transactions = newTransactions;
        } else {
            const category = {
                name: transaction.category,
                transactions: [
                    transaction
                ]
            };
            categories.push(category);
        }
    });
    categories.sort((a, b)=>{
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: TransactionsContent_theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                children: categories.length > 0 ? categories.map((transactionCollection)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Accordion_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionSummary_default()), {
                                expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {
                                }),
                                "aria-controls": "panel1a-content",
                                id: "panel1a-header",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    children: transactionCollection.name
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((AccordionDetails_default()), {
                                children: transactionCollection.transactions.length > 0 ? transactionCollection.transactions.map((transaction)=>/*#__PURE__*/ jsx_runtime_.jsx(TransactionCard, {
                                        transaction: transaction
                                    }, transaction.guid)
                                ) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                })
                            })
                        ]
                    }, transactionCollection.name)
                ) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                })
            })
        ]
    }));
}
function TransactionsContent(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(TransactionsContent_Content, {
        transactions: props.transactions
    }));
};

;// CONCATENATED MODULE: ./helpers/modelParsers.tsx
const parseMemberships = (fetchedMemberships)=>{
    return fetchedMemberships.response.map((value)=>{
        return {
            guid: value.guid,
            aggregatedAt: value.aggregated_at,
            isBeingAggregated: value.is_being_aggregated,
            successfullyAggregatedAt: value.successfully_aggregated_at,
            connectionStatus: value.connection_status,
            isAuthenticated: value.is_authenticated,
            name: value.name,
            institutionCode: value.institution_code,
            userGuid: value.user_guid
        };
    });
};
const parseAccounts = (fetchedAccounts)=>{
    return fetchedAccounts.map((value)=>{
        return {
            guid: value.guid,
            id: value.id,
            memberGuid: value.member_guid,
            userGuid: value.user_guid,
            accountNumber: value.account_number,
            availableBalance: value.available_balance,
            balance: value.balance,
            currencyCode: value.currency_code,
            institutionCode: value.institution_code,
            name: value.name,
            type: value.type,
            subType: value.subtype
        };
    });
};
const parseTransactions = (fetchedTransactions)=>{
    return fetchedTransactions.map((value)=>{
        return {
            category: value.category,
            createdAt: value.created_at,
            date: value.date,
            postedAt: value.posted_at,
            topLevelCategory: value.top_level_category,
            transactedAt: value.transacted_at,
            type: value.type,
            accountGuid: value.account_guid,
            amount: value.amount,
            description: value.description,
            guid: value.guid,
            isExpense: value.is_expense,
            isBillPay: value.is_bill_pay,
            isDirectDeposit: value.is_direct_deposit,
            isFee: value.is_fee,
            isIncome: value.is_income,
            isOverdraftFee: value.is_overdraft_fee,
            isSubscription: value.is_subscription,
            memberGuid: value.member_guid,
            merchantGuid: value.merchant_guid,
            originalDescription: value.original_description,
            userGuid: value.user_guid
        };
    });
};

;// CONCATENATED MODULE: ./pages/home.tsx


























const menuItems = [
    {
        text: "Search",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
        })
    },
    {
        text: "Transactions",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((AttachMoney_default()), {
        })
    },
    {
        text: "Accounts",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((AccountBalance_default()), {
        })
    },
    {
        text: "Connections",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((Layers_default()), {
        })
    }, 
];
const drawerWidth = 240;
const home_initialState = {
    institutions: []
};
const AppBar = (0,styles_.styled)((AppBar_default()), {
    shouldForwardProp: (prop)=>prop !== 'open'
})(({ theme , open  })=>({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create([
            'width',
            'margin'
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create([
                'width',
                'margin'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    })
);
const Drawer = (0,styles_.styled)((Drawer_default()), {
    shouldForwardProp: (prop)=>prop !== 'open'
})(({ theme , open  })=>({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            boxSizing: 'border-box',
            ...!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9)
                }
            }
        }
    })
);
const mdTheme = (0,styles_.createTheme)();
function home_Content(props) {
    const [institutions, setInstitutions] = external_react_default().useState(home_initialState.institutions);
    const [error, setErrorMessage] = external_react_default().useState('');
    const handleSearch = (searchTerm)=>{
        if (searchTerm == '') {
            setInstitutions([]);
        } else {
            (0,mxClient/* searchInstitutions */.S1)(searchTerm).then((data)=>{
                if (data.error) {
                    setErrorMessage(data.error);
                } else {
                    const membershipKeys = props.memberships.map((membership)=>{
                        return membership.name;
                    });
                    const searchResults = data.results.institutions.map((value)=>{
                        return {
                            code: value.code,
                            name: value.name,
                            logoUrlSmall: value.small_logo_url,
                            logoUrlMedium: value.medium_logo_url,
                            url: value.url,
                            supportsAccountIdentification: value.supports_account_identification,
                            supportsAccountStatement: value.supports_account_statement,
                            supportsAccountVerification: value.supports_account_verification,
                            supportsOauth: value.supports_oauth,
                            supportsTransactionHistory: value.supports_transaction_history
                        };
                    }).filter((value)=>{
                        return !membershipKeys.includes(value.name);
                    });
                    setInstitutions([
                        ...searchResults
                    ]);
                }
            });
        }
    };
    switch(props.contentType){
        case "Connections":
            return(/*#__PURE__*/ jsx_runtime_.jsx(ConnectionsContent, {
                memberships: props.memberships
            }));
        case "Search":
            return(/*#__PURE__*/ jsx_runtime_.jsx(SearchContent, {
                searchResults: institutions,
                onSearch: handleSearch,
                handleFetchedMemberships: props.handleFetchedMemberships
            }));
        case "Accounts":
            return(/*#__PURE__*/ jsx_runtime_.jsx(AccountsContent, {
                accounts: props.accounts
            }));
        case "Transactions":
            return(/*#__PURE__*/ jsx_runtime_.jsx(TransactionsContent, {
                transactions: props.transactions
            }));
        default:
            return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: " "
            }));
    }
}
const Home = (props)=>{
    const [open, setOpen] = external_react_default().useState(true);
    const [contentType, setContentType] = external_react_default().useState("Transactions");
    const [memberships1, setMemberships] = external_react_default().useState(props.memberships);
    const [accounts, setAccounts] = external_react_default().useState(props.accounts);
    const [transactions, setTransactions] = external_react_default().useState(props.transactions);
    const toggleDrawer = ()=>{
        setOpen(!open);
    };
    const handleFetchedMemberships = (memberships)=>{
        setContentType("Integrations");
        setMemberships([
            ...memberships
        ]);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
        theme: mdTheme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                display: 'flex'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AppBar, {
                    position: "absolute",
                    open: open,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        sx: {
                            pr: '24px'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                edge: "start",
                                color: "inherit",
                                "aria-label": "open drawer",
                                onClick: toggleDrawer,
                                sx: {
                                    marginRight: '36px',
                                    ...open && {
                                        display: 'none'
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "h1",
                                variant: "h6",
                                color: "inherit",
                                noWrap: true,
                                sx: {
                                    flexGrow: 1
                                },
                                children: contentType
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Drawer, {
                    variant: "permanent",
                    open: open,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                            sx: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [
                                    1
                                ]
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                onClick: toggleDrawer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ChevronLeft_default()), {
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                            children: menuItems.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_namespaceObject.ListItem, {
                                    button: true,
                                    onClick: ()=>{
                                        setContentType(item.text);
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.ListItemIcon, {
                                            children: item.icon
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.ListItemText, {
                                            primary: item.text
                                        })
                                    ]
                                }, item.text)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(home_Content, {
                        contentType: contentType,
                        memberships: memberships1,
                        accounts: accounts,
                        transactions: transactions,
                        handleFetchedMemberships: handleFetchedMemberships
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const home = (Home);
const getServerSideProps = async (context)=>{
    const authenticated = (0,auth/* cookiesAreAuthenticated */.KS)(context);
    if (!authenticated) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            },
            props: {
            }
        };
    }
    const mxId = JSON.parse(context.req.cookies.jwt).user.mxId;
    const fetchedMemberships = await (0,mxClient/* refreshMemberships */.kD)(mxId);
    const fetchedAccounts = await (0,mxClient/* getAllAccounts */.LT)(mxId);
    const fetchedTransactions = await (0,mxClient/* getAllTransactions */._v)(mxId, 1);
    return {
        props: {
            memberships: parseMemberships(fetchedMemberships),
            accounts: parseAccounts(fetchedAccounts.response),
            transactions: parseTransactions(fetchedTransactions.response)
        }
    };
};


/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [347,607], () => (__webpack_exec__(7635)));
module.exports = __webpack_exports__;

})();