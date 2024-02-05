
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




export default function AchievementComponent() {

  const username = useParams().username;
  const [completedTasks, setCompletedTask] = useState ([])


  useEffect(() => {
    const fetchMostStarredRepo = () => {
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repositories => {
          const mostStarredRepo = repositories.reduce((maxStarsRepo, repo) => (repo.stargazers_count > maxStarsRepo.stargazers_count ? repo : maxStarsRepo), repositories[0]);
          if (mostStarredRepo.stargazers_count > 0 && !completedTasks.includes('task4')) {
            console.log(mostStarredRepo.stargazers_count)
            setCompletedTask([...completedTasks, 'task4']);
          }
        })
        .catch(error => console.error("Error fetching mostStarredRepo:", error));
    };

    const fetchMergedWithoutReview = () => {
      fetch(`https://api.github.com/search/issues?q=is:pr+is:merged+author:${username}+review:none`)
        .then(response => response.json())
        .then(mergedWithoutReview => {
          if (mergedWithoutReview.total_count > 0 && !completedTasks.includes('task1')) {
            console.log(mergedWithoutReview.total_count)
            setCompletedTask([...completedTasks, 'task1']);
          }
        })
        .catch(error => console.error("Error fetching merged pull requests without a review:", error));
    };

    const fetchMergedPullRequests = () => {
      fetch(`https://api.github.com/search/issues?q=is:pr+is:merged+author:${username}`)
        .then(response => response.json())
        .then(mergedPullRequests => {
          if (mergedPullRequests.total_count > 0 && !completedTasks.includes('task2')) {
            console.log(mergedPullRequests.total_count)
            setCompletedTask([...completedTasks, 'task2']);
          }
        })
        .catch(error => console.error("Error fetching merged pull requests:", error));
    };
    fetchMostStarredRepo();
    fetchMergedWithoutReview();
    fetchMergedPullRequests();
  }, [username]);
  

  const achievementTasks = {
    task1: 'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png',  /*merge */
    task2: 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png',  /*pull */
    task3: 'https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png', /*contributed */
    task4: 'https://github.githubassets.com/assets/starstruck-default-b6610abad518.png'  /*created a repository that has many stars.*/
  };

  return (
    
      <ul className="list-unstyled d-flex">
        {completedTasks.map((task) => (
          <li key={task}>
            <img src={achievementTasks[task]} style={{width:'64px',height:'64px'}} alt={`Achievement for ${task}`} />
          </li>
        ))}
      </ul>

  );
};

