// import { useParams } from "react-router-dom";
import { useRepositories } from "../../../../hook/useRepositories"
import { username } from "../../../../api/requestApi";
import AllRepositories from "../AllRepositories"


export default function Repositories(){
    // const username = useParams().username
    const { repository, isLoading, hasError } = useRepositories(username);
    const repositoryList = repository || [];
    return(
        <div>
            
           <ul className="list-unstyled mb-5">
            {repositoryList.map((repos)=>{
                return (
                    <AllRepositories 
                        key={repos.id}
                        title={repos.name}
                        description={repos.description}
                        status={repos.visibility}
                        language={repos.language}
                        fork={repos.forks_count}
                        star={repos.stargazers_count}
                        update={repos.updated_at}
                    />
                )
            })}
           </ul>
        </div>
    )
}