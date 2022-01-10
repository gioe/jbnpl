import {Institution, MembershipRequest} from "../../helpers/types";
import {isAuthenticated} from "./auth";

export const searchInstitutions = (searchTerm: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/mx/institution/${searchTerm}`,{
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
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/mx/institution/credentials/${institution.code}`,{
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
    console.log(membershipRequest)
    const userId = isAuthenticated().user._id
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/mx/membership/${userId}/`,{
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

export const updateMembership = (membershipRequest: MembershipRequest) => {
    const userId = isAuthenticated().user._id

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}'/user/${userId}/members/${userId}'/`,{
        method: "PUT",
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

export const refreshMemberships = (mxId: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/memberships/${mxId}/`,{
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
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${userId}/accounts/`,{
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
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${mxId}/accounts/`,{
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

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${mxId}/transactions/${page}`,{
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

export const getMemberStatus = (mxId: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${mxId}/members/${mxId}/status`,{
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

export const aggregateMembership = (userGuid: string, memberGuid: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userGuid}/members/${memberGuid}/aggregate`,{
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


