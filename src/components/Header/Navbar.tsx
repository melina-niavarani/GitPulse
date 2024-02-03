import { useParams } from "react-router-dom"
import { useProfile } from "../../hook/useProfile";
import { useState } from "react";
import { getSearchinRepositories, getSearchinUsers  } from "../../api/requestApi";
import { Link } from "react-router-dom";

import OffcanvasBody from "./OffcanvasBody"

import { Bars } from 'react-loader-spinner'

function Navbar() {
    const username = useParams().username;

    const {user, isLoading, hasError} = useProfile(username);
    const profile_picture = user?.avatar_url;

    let visibility = false;
    const [searchQuery, setSearchQuery] = useState("");
    const [repositoryResults, setRepositoryResults]= useState([])
    const [usersResults, setUsersResults]= useState([])

   
    const [loadingResults, setLoadingResults] = useState(false);

    const handleSearch = async () => {
        setLoadingResults(true);
        try {
            const searchRepoResult = await getSearchinRepositories (`q=${searchQuery}`) ;
            const searchUsersResult = await getSearchinUsers (searchQuery)
            console.log("users",searchUsersResult)
            setRepositoryResults(searchRepoResult.data.items);
            setUsersResults(searchUsersResult.data.items)
           
        } catch (error) {
            console.error("Error fetching search results", error);
        } finally {
            setLoadingResults(false);
        }
    };


    
    if (hasError) {
        return (
            <div>
                <p className='d-flex justify-content-center align-items-center fs-small text-danger '>Error loading. Please try again.</p>
            </div>
        );
    }

   return (
    <nav className="navbar ">
        <div className="container-fluid d-flex my-3">
            <div className="d-flex align-items-center gap-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                    {isLoading ?
                        (<div>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                            <Bars
                                height="20"
                                width="20"
                                color="#306cce"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            /> 
                            <span className="fs-small fw-bold">Loading...</span>
                            </div>
                        </div>)
                    :  
                    <span className="fw-bold fs-6 fs-md-5">{ username }</span>
                    }

            </div>
            <div  className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <OffcanvasBody/>
            </div>
            <div className="d-flex gap-2 gap-md-4">
                <button type="button" onClick={() => visibility = !visibility}  className=" btn btn-outline-secondary btn-sm d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="true">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                    </svg>
                </button>
                <div className={`container-fluid dropdown-menu ${visibility ? 'search-form-visible' : ''}`}>
                    <form 
                        className="d-flex dropdown-item position-relative" 
                        role="search"
                        onSubmit={(e)=>{
                            e.preventDefault();
                            handleSearch()
                        }}
                    >
                        <span id="query-builder-test-leadingvisual-wrap" className="position-absolute top-50 translate-middle ps-4">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon ">
                                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                            </svg>
                        </span>
                        <input 
                            className="form-control ps-4" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            onChange={(e) => setSearchQuery(e.target.value)}/>
                    </form>
                    {searchQuery.length>0 ? 
                        <div className="px-3 py-2 d-flex justify-content-between align-items-center border-bottom">
                            <p className="m-0">
                                <span id="query-builder-test-leadingvisual-wrap" className="me-2">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon ">
                                        <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                                    </svg>
                                </span>
                                {searchQuery}
                            </p>
                            <span className="text-muted">Search all of GitHub </span>
                        </div>
                        : null
                    }
                    {repositoryResults && repositoryResults.length>0 || usersResults && usersResults.length>0 ? 
                    <div className="px-3">
                        {usersResults.length>0 ?
                            <div className="border-bottom my-4">
                                <h6 className="text-muted">Owners</h6>
                                <ul className="list-unstyled ">
                                    {usersResults.map((user)=>{
                                        return(
                                            <li key={user.id} className="py-1">
                                                <Link to={`/${user.login}`} className="d-flex justify-content-between align-items-center search-result">
                                                    <h6 className="m-0 fs-6 p-2">
                                                        <span id="query-builder-test-result-schweinepriester/github-profile-achievements--leading"  className="me-2">
                                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon">
                                                                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>{user.login}</span>
                                                    </h6>
                                                    <span className="text-muted">Jump to</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div> 
                        : null}
                        {repositoryResults.length>0 ? 
                            <div className="my-4">
                                <h6 className="text-muted">Repositories</h6>
                                <ul className="list-unstyled ">
                                    {repositoryResults.map((repo)=>{
                                        return(
                                            <li key={repo.id} className="py-1">
                                                <Link to={`/${repo.owner.login}/${repo.name}`} className="d-flex justify-content-between align-items-center search-result">
                                                    <h6 className="m-0 fs-6 p-2">
                                                        <span id="query-builder-test-result-schweinepriester/github-profile-achievements--leading"  className="me-2">
                                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon">
                                                                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>{repo.full_name}</span>
                                                    </h6>
                                                    <span className="text-muted">Jump to</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div> 
                        : null}
                    </div>
                    :
                    null
                    }
                </div>
                <div className="d-flex gap-2">
                    <button id="global-create-menu-button" className="btn btn-outline-secondary btn-sm d-none d-md-block">  
                        <span className="d-flex align-items-center">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                                <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                            </svg>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                                <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                            </svg>
                        </span>
                    </button>
                    <a href="/issues" className="btn btn-outline-secondary btn-sm d-none d-md-block d-flex align-items-center">  
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                        </svg>
                    </a>
                    <a href="/pulls" className="btn btn-outline-secondary btn-sm d-none d-md-block d-flex align-items-center">  
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                            <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                        </svg>
                    </a>
                    <a href="/notifications" className="btn btn-outline-secondary btn-sm d-flex align-items-center">  
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                            <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                        </svg>
                    </a>
                    <a href={`/${username}`}>
                        <img src={profile_picture} alt="avatar-photo" sizes="32" height="32" width="32" data-view-component="true" className="d-block mx-auto shadow-sm h-auto rounded-circle width-100 "></img>
                    </a>  
                </div>
            </div>
        </div>
    </nav>
   )
}

export default Navbar

