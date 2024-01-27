import { Octokit } from "octokit";

export interface UserInfo {
  login: string;
  name: string;
  followers: number;
  following: number;
  avatar_url: string;
  email: string;
  blog: string;
}
// get new Token:  https://github.com/settings/tokens/new?scopes=repo

const personal_token = "Your Token"

// const username = "melina-niavarani"
// export { username }

const octokit = new Octokit({
  auth: personal_token
})

export async function requestUserData(username:string){
  const user_info = await octokit.request('GET /users/{username}', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log('userinfo', user_info)
  return user_info.data;
}


export interface RepositoriesInfo {
  id: number;
  name: string;
  private: boolean;
  description: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
}

export async function requestRepositories(username:string){
  const user_repos = await octokit.request('GET /users/{username}/repos', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log(user_repos)
  return user_repos.data;
}

export interface RepositoriyDetails {
  id: number;
  name: string;
  private: boolean;
  description: string;
  language: string;
  fork: boolean;
  forks_count: number;
  stargazers_count: number;
}

// const repository = 'Calendar'
export async function requestRepositoriesDetails(username: string, repo_name: string){
  const repository_details = octokit.request('GET /repos/{username}/{repo}', {
    username: username,
    repo: repo_name,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return repository_details;
}

