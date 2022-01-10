"use strict";
exports.id = 766;
exports.ids = [766];
exports.modules = {

/***/ 5766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signup": () => (/* binding */ signup),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "isAuthenticated": () => (/* binding */ isAuthenticated),
/* harmony export */   "authenticate": () => (/* binding */ authenticate),
/* harmony export */   "cookiesAreAuthenticated": () => (/* binding */ cookiesAreAuthenticated)
/* harmony export */ });
const signup = (user)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json"',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const login = (user)=>{
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json"',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const logout = (next)=>{
    if (false) {}
    next();
    return fetch(`${"https://jbnpl-server.ue.r.appspot.com"}/logout`, {
        method: "GET"
    }).then((response)=>{
        return response.json();
    }).catch((err)=>console.log(err)
    );
};
const isAuthenticated = ()=>{
    if (true) {
        return false;
    }
    const token = localStorage.getItem("jwt");
    if (!token) {
        return false;
    } else {
        return JSON.parse(token);
    }
};
const authenticate = (jwt)=>{
    if (false) {}
};
const cookiesAreAuthenticated = (context)=>{
    return context.req.cookies.jwt != undefined;
};


/***/ })

};
;