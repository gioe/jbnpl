import {Institution, MembershipRequest} from "../../helpers/types";
import {isAuthenticated} from "./auth";

export const searchInstitutions = (searchTerm: string) => {
    return fetch(`${process.env.API_URL}/mx/institution/${searchTerm}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const fetchInstitutionCredentials = (institution: Institution) => {
    return fetch(`${process.env.API_URL}/mx/institution/credentials/${institution.code}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const establishMembership = (membershipRequest: MembershipRequest) => {
    const userId = isAuthenticated().user._id
    return fetch(`${process.env.API_URL}/mx/membership/${userId}/`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(membershipRequest)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getAllMemberships = () => {
    return fetch(`${process.env.API_URL}/memberships/`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getAccountsForInstitution = () => {
    const userId = isAuthenticated().user.mxId
    return fetch(`${process.env.API_URL}/user/${userId}/accounts/`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getAllAccounts = (mxId: string) => {
    return fetch(`${process.env.API_URL}/user/${mxId}/accounts/`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getAllTransactions = (mxId: string, page: number) => {

    return fetch(`${process.env.API_URL}/user/${mxId}/transactions/${page}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}


