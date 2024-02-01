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

const personal_token = "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"


const octokit = new Octokit({
  auth: personal_token
})

// API cal For user info //

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

// API cal For user achievements
export async function userAchievements(username:string){
  const apiUrl = `https://api.github.com/users/${username}/events`;
  try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
      const userAchievements = await response.json();
      console.log("userAchievements",userAchievements)
      return userAchievements;
    } catch (error) {
      console.error('Error fetching repository userAchievements:', error.message);
    }
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

// API cal For Repositories info //

export async function requestRepositories(username:string){
  const user_repos = await octokit.request('GET /users/{username}/repos', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log('Repositories Data',user_repos)
  return user_repos.data;
}

// API cal For Specific Repository details //
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


export async function requestRepositoriesDetails(username: string, repo_name: string){
  const repository_details = octokit.request('GET /repos/{username}/{repo}', {
    username: username,
    repo: repo_name,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log("Repo Details", repository_details)
  return repository_details;
}


// API cal For issues //
export async function requestIssues (username: string, repo_name: string){
  const issues = await octokit.request('GET  /repos/{username}/{repo}/issues', {
    username: username,
    repo: repo_name,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log("requestIssues", issues)
  return issues
}

// API call for SEARCH //
export async function getSearchResult (code: any){
  const searchResult = await octokit.request('GET /search/repositories?{code}', {
    code: code,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return searchResult
}

// API CALL for repositoriy contents //
export async function getRepositoryContent(owner:string, repo:string){
  const contentUrl =`https://api.github.com/repos/${owner}/${repo}/contents`
  try {
    const response = await fetch(contentUrl);
    const data = await response.json();

    // const folderList = data.filter((item: any) => item.type === 'dir');
    // return folderList
    return data

  } catch (error) {
    console.error('Error fetching GitHub repository content:', error);
  }

}




// API call for getting a repository's langueages //
export async function getLanguages(owner:string, repo:string) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/languages`;
  try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
      const languages = await response.json();
      // console.log(languages)
      return languages;
    } catch (error) {
      console.error('Error fetching repository languages:', error.message);
    }
}

// API call for README //
export async function getReadME(owner:string, repo:string) {
  const apiUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`;
  try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
      }
      const readme = await response.text();
      // console.log("readme API",readme)
      return readme;
    } catch (error) {
      console.error('Error fetching repository readme:', error.message);
    }
  }
// API call for number of commits //


export async function getNumberOfCommits(owner:string, repo:string){
  const commitUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

  try {
    const response = await fetch(commitUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
    }
    const commits = await response.json();
    return commits.length;
  } catch (error) {
    console.error('Error fetching repository commits number:', error.message);
  }

}
