import { User } from '../../helpers/types'
import { instanceOf } from 'prop-types';
import { useCookies } from 'react-cookie';
import {GetServerSidePropsContext} from "next";

export const signup = (user: User) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`,{
        method: "POST",
        headers: {
            Accept: 'application/json"',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const login = (user: User) => {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`,{
        method: "POST",
        headers: {
            Accept: 'application/json"',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const logout = (next: () => void) => {
    if(typeof window !== "undefined") localStorage.removeItem("jwt")
    next()
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const isAuthenticated = () => {
    if (typeof window ==="undefined") {
        return false
    }

    const token = localStorage.getItem("jwt")

    if (!token) {
        return false
    } else {
        return JSON.parse(token);
    }
}

export const authenticate = (jwt: string) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt))
    }
}

export const cookiesAreAuthenticated = (context: GetServerSidePropsContext) => {
    return context.req.cookies.jwt != undefined;
}
