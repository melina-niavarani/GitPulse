import { UserInfo, RepositoriesInfo, RepositoriyDetails, issuessInfo } from "./api/requestApi";

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

export class issues {
    issues: issuessInfo; 
    isLoading: boolean;
    hasError: boolean
}