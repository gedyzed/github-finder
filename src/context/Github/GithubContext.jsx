import { createContext, useReducer, useCallback } from "react";
import GithubReducers from "./GithubReducers";
export const GithubContext = createContext();
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

    const setLoading = useCallback(() => dispatch({ type: 'SET_LOADING' }), [])

    const searchUsers = useCallback(async (query) => {
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
    }, [setLoading])

    const getUser = useCallback(async (login) => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/users/${login}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                },
            },
        )

        if (response.status === 404) {
            window.location = "/notfound"
        }
        else {
            const data = await response.json();
            dispatch({ type: 'GET_USER', payload: data });
        }

    }, [setLoading])
    const getUserRepos = useCallback(async (login) => {
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

        if (response.status === 404) {
            window.location = "/notfound"
        }
        else {

            const data = await response.json();
            dispatch({ type: 'GET_USER_REPO', payload: data });
        }

    }, [setLoading])



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
