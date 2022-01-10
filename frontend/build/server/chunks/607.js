"use strict";
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 7607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S1": () => (/* binding */ searchInstitutions),
/* harmony export */   "ke": () => (/* binding */ fetchInstitutionCredentials),
/* harmony export */   "LN": () => (/* binding */ establishMembership),
/* harmony export */   "kD": () => (/* binding */ refreshMemberships),
/* harmony export */   "LT": () => (/* binding */ getAllAccounts),
/* harmony export */   "_v": () => (/* binding */ getAllTransactions),
/* harmony export */   "fF": () => (/* binding */ aggregateMembership)
/* harmony export */ });
/* unused harmony exports updateMembership, getAccountsForInstitution, getMemberStatus */
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3347);

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
    const userId = (0,_auth__WEBPACK_IMPORTED_MODULE_0__/* .isAuthenticated */ .$8)().user._id;
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
    const userId = isAuthenticated().user._id;
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
    const userId = isAuthenticated().user.mxId;
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