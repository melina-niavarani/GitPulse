import { useEffect, useState, useReducer } from "react";
import { requestUserData, UserInfo } from "../api/requestApi";

const username = "melina-niavarani"
interface Action {
    type: string;
    payload: any
}

interface State {
    user: UserInfo,
    isLoading: boolean,
    hasError: boolean
}

function reducer(state: State, action: Action){
    if (action.type === "update_loading") {
        const nextLoading = action.payload.isLoading;
        return {
            ...state,
            isLoading: nextLoading,
        }
    }
    if (action.type === "update_error") {
        const nextError = action.payload.hasError;
        return {
            ...state,
            hasError: nextError,
        }
    }
    if (action.type === "update_user") {
        const nextUser = action.payload.user;
        return {
            ...state,
            user: nextUser,
        }
    }
    return state;
}
  

  

function useProfile() {
    // const [user, setUser] = useState<UserInfo | null >({
    //     name: "",
    //     email: "",
    //     blog: "",
    //     login:  "",
    //     avatar_url: "" ,
    //     following: 0,
    //     followers: 0,
    // });
    // const [isLoading, setLoading] = useState(true);
    // const [hasError, setError] = useState(false);


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
        // setLoading(true);
        // setError(false);
        dispatch({
            type: "update_error",
            payload: {
                hasError: false,
            }
        })
        requestUserData(username)
            .then((data) => {
                // setUser(data)
                dispatch({
                    type: "update_user",
                    payload: {
                        user: data,
                    }
                })
            })
            .catch((e) => {
                // setError(true)
                dispatch({
                    type: "update_error",
                    payload: {
                        hasError: true,
                    }
                })
                console.log({ e })
                
            })
            .finally(() => {
                // setLoading(false)
                dispatch({
                    type: "update_loading",
                    payload: {
                        isLoading: false,
                    }
                })
            })

    }, []);

    // return {
    //     user: user,
    //     isLoading: isLoading,
    //     hasError: hasError,
    // }
    return {
        user: data.user,
        isLoading: data.isLoading,
        hasError: data.hasError,
    }
}

export { useProfile }; 