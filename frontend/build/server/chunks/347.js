"use strict";
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 3347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IU": () => (/* binding */ signup),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "$8": () => (/* binding */ isAuthenticated),
/* harmony export */   "KS": () => (/* binding */ cookiesAreAuthenticated)
/* harmony export */ });
/* unused harmony exports logout, authenticate */
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