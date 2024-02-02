import { useEffect, useReducer } from "react";
import { requestIssues } from "../api/requestApi";
import { Action, issues } from "../app.model";

function reducer(state: issues, action: Action) {
  switch (action.type) {
    case "update_loading":
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case "update_error":
      return {
        ...state, 
        hasError: action.payload.hasError,
      };
    case "update_issues":
      return {
        ...state,
        issues: action.payload.issues,  
      };
    default:
      return state;
  }
}

function useIssues(username: string, repo_name: string) {
  const initialState = {
    issues: [], 
    isLoading: true,
    hasError: false,
  };
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "update_loading",
      payload: {
        isLoading: true,
      },
    });
    dispatch({
      type: "update_error",
      payload: {
        hasError: false,
      },
    });
    requestIssues(username, repo_name)
      .then((data) => {
        const openIssues = data.filter((issue) => issue.state === "open");
        const closedIssues = data.filter((issue) => issue.state === "closed")
        dispatch({
          type: "update_issues",
          payload: {
            issues: data, 
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: "update_error",
          payload: {
            hasError: true,
          },
        });
        console.log({ e });
      })
      .finally(() => {
        dispatch({
          type: "update_loading",
          payload: {
            isLoading: false,
          },
        });
      });
  }, [username, repo_name]);

  return {
    issues: data.issues, 
    isLoading: data.isLoading,
    hasError: data.hasError,
  };
}

export { useIssues };
