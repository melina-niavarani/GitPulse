import { getStarredRepo } from "../../../api/requestApi"; 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




export default function AchievementComponent() {

    const username = useParams().username;
    const [starredCount, setStarredCount] = useState(0)
    const [completedTasks, setCompletedTask] = useState ([])
   
    useEffect(()=>{
        getStarredRepo(username)
        .then((data) => {
            setStarredCount(data.length)
            console.log('stared',data)
            console.log(achievementTasks[0])
          })
          .catch((error) => {
            console.error("Error fetching Stars:", error);
          });
    }, [username])

    useEffect(() => {
        calculateCompletedTask();
    }, [starredCount]);

    function calculateCompletedTask(){
        if(starredCount > 0 && !completedTasks.includes('task4')) {
            setCompletedTask([...completedTasks, 'task4'])
        }
    }

    const achievementTasks = {
      task1: 'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png',
      task2: 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png',
      task3: 'https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png',
      task4: 'https://github.githubassets.com/assets/starstruck-default-b6610abad518.png'
    };

    return (
      
        <ul className="list-unstyled">
          {completedTasks.map((task) => (
            <li key={task}>
              <img src={achievementTasks[task]} style={{width:'64px',height:'64px'}} alt={`Achievement for ${task}`} />
            </li>
          ))}
        </ul>
 
    );
};

