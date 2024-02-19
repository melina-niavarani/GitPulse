import { useEffect, useState, useReducer } from "react";
import { requestRepositories } from "../api/requestApi"
import { Action, Repo } from "../app.model";


function reducer(state: Repo, action: Action){
    switch(action.type) {
        case "update_loading":
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case "update_error":
            return {
                ...state,
                hasError: action.payload.hasError,
            };
        case "update_repository":
            return {
                ...state,
                repository: action.payload.repository,
            }; 
        default: 
            return state
    }
 
}


function useRepositories(username: string){
    // const [repositories, setRepositories ] = useState([])
    // const [isLoading, setLoading] = useState(true);
    // const [hasError, setError] = useState(false)

    const initialState = {
        repository : '' ,
        isLoading: true,
        hasError: false,
    }
    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        dispatch({
            type: "update_loading",
            payload: {
                isLoading: true,
            }
        })
        dispatch({
            type: "update_error",
            payload: {
                hasError: false,
            }
        })
        requestRepositories(username)
            .then((data) => {
                dispatch({
                    type: "update_repository",
                    payload: {
                        repository: data,
                    }
                })
            })
            .catch((e) => {
                dispatch({
                    type: "update_error",
                    payload: {
                        hasError: true,
                    }
                })
                console.log({ e })
                
            })
            .finally(() => {
                dispatch({
                    type: "update_loading",
                    payload: {
                        isLoading: false,
                    }
                })
        })
        // setLoading(true);
        // setError(false);
        // requestRepositories()
        // .then((data) => {
        //     setRepositories(data)
        // })
        // .catch((e) => {
        //     setError(true)
        //     console.log({ e })
        // })
        // .finally(() => {
        //     setLoading(false)
        // })
    },[])

    // return {
    //     repositories: repositories,
    //     isLoading: isLoading,
    //     hasError: hasError
    // }
    return {
        repository: data.repository,
        isLoading: data.isLoading,
        hasError: data.hasError,
    }
}

export { useRepositories };