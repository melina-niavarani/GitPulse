import Header from "../../../../Header/Header";
import AllRepositories from "./AllRepositories"
import ProfileSidbar from "../../../ProfileSidbar/ProfileSidbar";
import SearchComponent from "./SearchComponent";

import { useRepositories } from "../../../../../hook/useRepositories"
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function Repositories(){
    const username = useParams().username;
    const { repository, isLoading, hasError } = useRepositories(username);
    const repositoryList = repository || [];

    const [searchValue, setSearchValue] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState();

    
    const handleSearch = (value) => {
        setSearchValue(value)
    };

    const handleLanguageChange = (language) =>{
        setSelectedLanguage(language);
    }

    const filteredRepositories = repositoryList.filter((repo) => {
        const matchesSearch = repo.name.toLowerCase().includes(searchValue ?? "".toLowerCase());
        const matchesLanguage = !selectedLanguage || repo.language === selectedLanguage;
        return matchesSearch && matchesLanguage;
    });


    return(
        <div>
            <Header/>
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between mt-5 gap-4">
                <div className="col-md-4">
                    <ProfileSidbar  />
                </div>
                {/* Activity Sidebar */}
               <div className="col-md-8 mt-5 pe-2 ">
                    <SearchComponent className="my-2" 
                                    username={username} 
                                    handleSearch={handleSearch}
                                    handleLanguageChange={handleLanguageChange}
                    />
                    <ul className="list-unstyled mb-5">
                    {filteredRepositories.map((repos)=>{
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
