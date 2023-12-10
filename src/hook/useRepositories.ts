import { useEffect, useState } from "react";
import { requestRepositories, RepositoriesInfo } from "../api/requestApi"


function useRepositories(){
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

    return {
        repositories: repositories,
        isLoading: isLoading,
        hasError: hasError
    }
}

export { useRepositories };