import { useRepositories } from "../../../hook/useRepositories";
import RepositoriesList from "./RepositoriesList";

function ActivitySidbar() {
    const { repositories, isLoading, hasError } = useRepositories();

    return (
        <div className="col-8 mt-5">
            <div className="d-flex justify-content-between">
                <span>Popular repositories</span>
                <a className="text-primary text-decoration-none" href="#">customiz your pins</a>
            </div>
            <div className="row mt-3">
                <div className="my-3">
                    <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
                        {repositories.map((repos) => {
                            return(
                                <RepositoriesList
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
            </div>
        </div>
    )
}

export default ActivitySidbar