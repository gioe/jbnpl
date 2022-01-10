"use strict";
(() => {
var exports = {};
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 9886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchInstitutions": () => (/* binding */ searchInstitutions),
/* harmony export */   "fetchInstitutionCredentials": () => (/* binding */ fetchInstitutionCredentials),
/* harmony export */   "establishMembership": () => (/* binding */ establishMembership),
/* harmony export */   "updateMembership": () => (/* binding */ updateMembership),
/* harmony export */   "refreshMemberships": () => (/* binding */ refreshMemberships),
/* harmony export */   "getAccountsForInstitution": () => (/* binding */ getAccountsForInstitution),
/* harmony export */   "getAllAccounts": () => (/* binding */ getAllAccounts),
/* harmony export */   "getAllTransactions": () => (/* binding */ getAllTransactions),
/* harmony export */   "getMemberStatus": () => (/* binding */ getMemberStatus),
/* harmony export */   "aggregateMembership": () => (/* binding */ aggregateMembership)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5766);

const searchInstitutions = (searchTerm)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/mx/institution/${searchTerm}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const fetchInstitutionCredentials = (institution)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/mx/institution/credentials/${institution.code}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const establishMembership = (membershipRequest)=>{
    console.log(membershipRequest);
    const userId = (0,_auth__WEBPACK_IMPORTED_MODULE_0__.isAuthenticated)().user._id;
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/mx/membership/${userId}/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(membershipRequest)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const updateMembership = (membershipRequest)=>{
    const userId = (0,_auth__WEBPACK_IMPORTED_MODULE_0__.isAuthenticated)().user._id;
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}'/user/${userId}/members/${userId}'/`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(membershipRequest)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const refreshMemberships = (mxId)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/memberships/${mxId}/`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const getAccountsForInstitution = ()=>{
    const userId = (0,_auth__WEBPACK_IMPORTED_MODULE_0__.isAuthenticated)().user.mxId;
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/user/${userId}/accounts/`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const getAllAccounts = (mxId)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/user/${mxId}/accounts/`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const getAllTransactions = (mxId, page)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/user/${mxId}/transactions/${page}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const getMemberStatus = (mxId)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/user/${mxId}/members/${mxId}/status`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const aggregateMembership = (userGuid, memberGuid)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/users/${userGuid}/members/${memberGuid}/aggregate`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [766], () => (__webpack_exec__(9886)));
module.exports = __webpack_exports__;

})();