import { UserInfo, RepositoriesInfo, RepositoriyDetails } from "./api/requestApi";

export class Action {
    type: string;
    payload: any
}

export class State {
    user: UserInfo; 
    isLoading: boolean;
    hasError: boolean
}
export class Repo {
    repository: RepositoriesInfo; 
    isLoading: boolean;
    hasError: boolean
}

export class RepoDetails {
    repository: RepositoriyDetails; 
    isLoading: boolean;
    hasError: boolean
}