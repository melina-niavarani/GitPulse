import { useEffect, useReducer } from "react";
import { requestIssues } from "../api/requestApi"
import { Action, issues } from "../app.model";


function reducer(state: issues, action: Action){
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


function useIssues(username: string, repo_name: string){

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
        requestIssues(username, repo_name)
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

    },[username, repo_name])

    return {
        repository: data.repository,
        isLoading: data.isLoading,
        hasError: data.hasError,
    }
}

export { useIssues };