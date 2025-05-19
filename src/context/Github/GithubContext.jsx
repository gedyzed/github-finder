import { createContext, useState, useReducer } from "react";
import GithubReducers from "./GithubReducers";
const GithubContext = createContext();
const GITHUB_URL = import.meta.env.VITE_GITHUB_API;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


export const GithubProvider = ({ children }) => {
    const initailState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducers, initailState);

    const searchUsers = async (query) => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/search/users?q=${query}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                },
            },
        )

        const { items } = await response.json();
        dispatch({ type: 'GET_USERS', payload: items });
    } 

    const getUser = async (login) => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/users/${login}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                },
            },
        )

        if (response.status === 404){
            window.location ="/notfound"
        }
        else{
            const data = await response.json();
            dispatch({ type: 'GET_USER', payload: data });
        }

    } 
    const getUserRepos = async (login) => {
        setLoading();

        const params = new URLSearchParams({
            sort: "created", 
            direction: "desc", 
            per_page: 10
        });

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                },
            },
        )

        if (response.status === 404){
            window.location ="/notfound"
        }
        else{

            const data = await response.json();
            dispatch({ type: 'GET_USER_REPO', payload: data });
        }

    } 

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return <GithubContext.Provider
        value={{
            ...state,
            searchUsers,
            dispatch,
            getUser,
            getUserRepos,
        }}
    >
        {children}
    </GithubContext.Provider>
}

export default GithubContext;