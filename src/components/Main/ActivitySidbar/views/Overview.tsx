import Header from "../../../Header/Header";
import RepositoriesCards from "../RepositoriesCards";
import ProfileSidbar from "../../ProfileSidbar/ProfileSidbar";

import { useRepositories } from "../../../../hook/useRepositories";
import { useParams } from "react-router-dom";

export default function Overview(){
    const username = useParams().username;
    const { repository, isLoading, hasError } = useRepositories(username);

    const displayedRepositories = repository? repository.slice(0, 6) : [];

    return (
        <div>
            <Header/>
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between mt-5">
                <div className="col-md-4">
                    <ProfileSidbar />
                </div>
                {/* Activity Sidebar */}
                <div className="col-md-8 mt-5">
                    <div className="d-flex justify-content-between">
                        <span>Popular repositories</span>
                        <a className="text-primary text-decoration-none" href="#">customiz your pins</a>
                    </div>
                    <div className="my-3">
                        <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                            {displayedRepositories.map((repos) => {
                                return(
                                    <RepositoriesCards
                                        key={repos.id}
                                        title={repos.name}
                                        description={repos.description}
                                        status={repos.private}
                                        language={repos.language}
                                        fork={repos.forks_count}
                                        star={repos.stargazers_count}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5> contributions in the last year</h5>
                        <span>
                            Contribution settings
                        </span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5> Contribution activity</h5>
                        <span>
                            Contribution settings
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
