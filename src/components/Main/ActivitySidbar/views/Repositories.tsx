import Header from "../../../Header/Header";
import AllRepositories from "../AllRepositories"
import ProfileSidbar from "../../ProfileSidbar/ProfileSidbar";

import { useRepositories } from "../../../../hook/useRepositories"
import { useParams } from "react-router-dom";


export default function Repositories(){
    const username = useParams().username
    const { repository, isLoading, hasError } = useRepositories(username);
    const repositoryList = repository || [];
    return(
        <div>
            <Header/>
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between mt-5">
                <div className="col-md-4">
                    <ProfileSidbar />
                </div>
                {/* Activity Sidebar */}
               <div className="col-md-8 mt-5">
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
            </div>
        </div>
    )
}