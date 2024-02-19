import { UserInfo, RepositoriesInfo, RepositoriyDetails, issuessInfo } from "./api/requestApi";

export interface Action {
    type: string;
    payload: any
}

export interface State {
    user: UserInfo; 
    isLoading: boolean;
    hasError: boolean
}
export interface Repo {
    repository: RepositoriesInfo; 
    isLoading: boolean;
    hasError: boolean
}

export interface RepoDetails {
    repository: RepositoriyDetails; 
    isLoading: boolean;
    hasError: boolean
}

export interface issues {
    issues: issuessInfo; 
    isLoading: boolean;
    hasError: boolean
}