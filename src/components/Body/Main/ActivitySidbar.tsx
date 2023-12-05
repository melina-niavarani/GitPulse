import { useEffect, useState } from "react";
import { requestRepositories, RepositoriesInfo } from "../../../api/requestApi"
import RepositoriesList from "./RepositoriesList";

function ActivitySidbar() {
    const [repositories, setRepositories ] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false)

    useEffect(()=>{
        setLoading(true);
        setError(false);
        requestRepositories()
        .then((data) => {
            setRepositories(data)
        })
        .catch((e) => {
            setError(true)
            console.log({ e })
        })
        .finally(() => {
            setLoading(false)
        })
    },[])

    return (
        <div className="col-8 mt-5">
            <div className="d-flex justify-content-between">
                <span>Popular repositories</span>
                <a className="text-primary text-decoration-none" href="#">customiz your pins</a>
            </div>
            <div className="row mt-3">
                <div className="my-3">
                    <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap ">
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