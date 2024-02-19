import { useEffect, useReducer } from "react";
import { requestUserData, UserInfo } from "../api/requestApi";

import { Action, State } from "../app.model";

function reducer(state: State, action: Action){
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
        case "update_user":
            return {
                ...state,
                user: action.payload.user,
            }; 
        default: 
            return state
    }
 
}
  

function useProfile(username: string) {


    const initialState = {
        user: undefined,
        isLoading: true,
        hasError: false,
    };

    const [data, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
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
        requestUserData(username)
            .then((data) => {
                dispatch({
                    type: "update_user",
                    payload: {
                        user: data,
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

    }, []);
    return {
        user: data.user,
        isLoading: data.isLoading,
        hasError: data.hasError,
    }
}

export { useProfile }; 