import Header from "../../../Header/Header";
import ProfileSidbar from "../../ProfileSidbar/ProfileSidbar";
import SearchComponent from "./RepositoriesTab/SearchComponent";

import { getStarredRepo } from "../../../../api/requestApi";
import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";

import { calculateUpdateLabel, getLanguageColorClass } from "../../../../Shared/sharedFunctions";


export default function Stars(){
    const username = useParams().username;
    const [ starredRepo, setStarredRepo ] = useState([])

    useEffect(()=>{
        getStarredRepo(username)
        .then((data) => {
            setStarredRepo(data)
            console.log("starredRepo",starredRepo)
          })
          .catch((error) => {
            console.error("Error fetching Stars:", error);
          });
    }, [username])

    return(
        <div>
            <Header />
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between mt-5">
                <div className="col-md-4">
                    <ProfileSidbar />
                </div>
                <div className="col-md-8 mt-5">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-secondary fw-normal">Lists (0)</h4>
                        <div >
                            <div className="btn-group mx-2">
                                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort
                                </button>
                                <ul className="dropdown-menu">
                                    <li><span className="dropdown-item">Sort by</span></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Name ascending (A-Z)</a></li>
                                    <li><a className="dropdown-item" href="#">Name descending (Z-A)</a></li>
                                    <li><a className="dropdown-item" href="#">Newest</a></li>
                                    <li><a className="dropdown-item" href="#">Oldest</a></li>
                                    <li><a className="dropdown-item" href="#">Last update</a></li>
                                </ul>
                            </div>
                            <button className="btn btn-success">Creat List</button>
                        </div>
                    </div>
                    <div className="border rounded my-3 p-5">
                        <div className="d-flex flex-column justify-content-center align-items-center py-5">
                            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-star blankslate-icon">
                                <path d="M12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.751.751 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.328.668A.75.75 0 0 1 12 .25Zm0 2.445L9.44 7.882a.75.75 0 0 1-.565.41l-5.725.832 4.143 4.038a.748.748 0 0 1 .215.664l-.978 5.702 5.121-2.692a.75.75 0 0 1 .698 0l5.12 2.692-.977-5.702a.748.748 0 0 1 .215-.664l4.143-4.038-5.725-.831a.75.75 0 0 1-.565-.41L12 2.694Z"></path>
                            </svg>
                            <h3 className="my-3">Create your first list</h3>
                            <p>
                                Lists make it easier to organize and curate repositories that you have starred.
                                <a className="text-primary" href="#">Create your first list.</a>
                            </p>
                        </div>
                    </div>
                    <section>
                        <h3>
                            Stars
                        </h3>
                        <SearchComponent/>
                        <ul className="list-unstyled pb-5">
                            {starredRepo.map((repo)=>{
                                return(
                                    <li key={repo.id} className="py-4 border-bottom d-flex justify-content-between">
                                        <div>
                                            <h3 className="text-primary fs-4"><Link to={`/${repo?.owner.login}/${repo?.name}`}>{repo?.name}</Link></h3>
                                            <p className="text-muted">{repo.description}</p>
                                            <div className="d-flex gap-4 align-items-center text-muted fs-md">
                                                <div>
                                                    <span className={`language-color me-2 ${getLanguageColorClass(repo?.language)}`}></span>
                                                    <span>{repo?.language}</span>
                                                </div>
                                                <div >
                                                    <svg className="me-1" aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                                    </svg>
                                                    {repo?.stargazers_count.toLocaleString()}
                                                </div>
                                                <div>
                                                    <svg className="me-1" aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                                    </svg>
                                                    {repo?.forks.toLocaleString()}
                                                </div>
                                                <span>{calculateUpdateLabel(repo?.updated_at)}</span>
                                            </div>
                                        </div>
                                        <div className="btn-group h-50 me-3" role="group">
                                            <button type="button" className="btn btn-light border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg className='me-2' aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" style={{ fill: '#e3b341' }}>
                                                    <path fill="#e3b341" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                                                    <path fill="#e3b341" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                                                </svg>
                                                Starred
                                                <span className='mx-1'></span>
                                            </button>
                                            <div className='dropdown-menu py-0'>
                                                <h5 className='dropdown-item fs-md fw-bold my-2'>Lists</h5>
                                                <hr className='m-0'/>
                                                <ul className="d-flex flex-column align-items-center p-0 my-1">
                                                    <li className="dropdown-item">
                                                        <input type="checkbox" className="me-2" name="list_names[]" value="🔮 Future ideas"/>
                                                        <span data-view-component="true" className="Truncate-text">🔮 Future ideas</span>
                                                    </li>
                                                    <li className="dropdown-item">
                                                        <input type="checkbox" className="me-2" name="list_names[]" value="🚀 My stack"/>
                                                        <span data-view-component="true" className="Truncate-text">🚀 My stack</span></li>
                                                    <li className="dropdown-item">
                                                        <input type="checkbox" className="me-2" name="list_names[]" value="✨ Inspiration"/>
                                                        <span data-view-component="true" className="Truncate-text">✨ Inspiration</span>
                                                    </li>
                                                </ul>
                                                <hr className='m-0' />
                                                <button data-repository-id="714743866" type="button" data-view-component="true" className="btn btn-block text-left fs-md rounded-1 px-2 my-2">    
                                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon me-1">
                                                        <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                                                    </svg>
                                                    Create list
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </div>
            
        </div>
    )
}
