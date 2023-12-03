import { Octokit } from "octokit";

const personal_token = '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'

export async function requestApi(){

  const octokit = new Octokit({ 
    auth: personal_token,
  });
  
  const user_data = await octokit.request('GET /users/{username}', {
    username: 'USERNAME',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
  });

  return user_data;
}