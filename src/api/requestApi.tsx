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

const personal_token = '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'
const username = "mojtabast"

const octokit = new Octokit({
  auth: personal_token
})

export async function requestUserData(): Promise<UserInfo>{
  const user_info = await octokit.request('GET /users/{username}', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

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

export async function requestRepositories(){
  const user_repos = await octokit.request('GET /users/{username}/repos', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log(user_repos)
  return user_repos.data;
}