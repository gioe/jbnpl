import {ChallengeResponse } from "../../helpers/types";
import {isAuthenticated} from "./auth";
import cache from "memory-cache";

const cachedFetch = async (url: any, init: RequestInit) => {
    const cachedResponse = cache.get(url);
    if (cachedResponse) {
        return cachedResponse;
    } else {
        const hours = 1;
        const response = await fetch(url, init);
        const data = await response.json();
        cache.put(url, data, hours * 1000 * 60 * 60);
        return data;
    }
};

export const fetchInstitutionCredentials = (institutionCode: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/mx/institution/credentials/${institutionCode}`,{
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
    return cachedFetch(`${process.env.NEXT_PUBLIC_API_URL}/user/${mxId}/transactions/${page}`,{
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
        method: "POST",
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

export const resumeAggregation = (responses: ChallengeResponse[], memberGuid: string) => {
    const userGuid = isAuthenticated().user.mxId
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userGuid}/members/${memberGuid}/aggregate`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(responses)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getConnectWidget = (userGuid: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/widget/${userGuid}`,{
        method: "POST",
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
