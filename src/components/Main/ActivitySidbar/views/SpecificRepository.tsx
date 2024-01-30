import Header from "../../../Header/Header";
import { useRepositoriesDetails } from "../../../../hook/useRepoDetails"
import { useParams } from "react-router-dom";
import { Line } from "rc-progress";
import { getLanguages } from "../../../../api/requestApi";
import { useEffect, useState } from "react";


export default function SpecificRepository(){
    const username =useParams().username;
    const repo_name = useParams().repository;
    const [languages, setLanguages] = useState([])
    const [percents , setPercents] = useState([])
    const {repository, isLoading, hasError} = useRepositoriesDetails(username, repo_name)

    const repo_details = repository?.data
    const porofile_picture = repo_details?.owner.avatar_url;

    useEffect(() => {
        getLanguages(username,repo_name)
            .then((data) => {
                const percents = Object.values(data)
                const arrayOfLanguages = Object.entries(data)
                setLanguages(arrayOfLanguages)
                setPercents(percents)
            })
            .catch((error) => {
                console.error("Error fetching languages:", error);
            });
    }, [username, repo_name])

    const sumOfValues = percents.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return(
        <div>
            <Header />
            <main className="container-fluid mx-auto px-4 py-3">
                <section className="d-flex justify-content-between">
                    <h3 className="d-flex align-items-center justify-content-center gap-2">
                        <img src={porofile_picture} className="rounded-pill" width="24" height='24' alt="avatar-picture" />
                        <span>{repo_name}</span>
                        <span className="btn btn-outline-secondary btn-sm rounded-pill">{repo_details?.visibility}</span>
                    </h3>
                    <ul className="list-unstyled d-flex gap-2">
                        <li>
                            <button title="Pin this repository to your profile" type="submit" data-view-component="true" className="btn-sm btn btn-outline-secondary">
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-pin me-2">
                                    <path d="m11.294.984 3.722 3.722a1.75 1.75 0 0 1-.504 2.826l-1.327.613a3.089 3.089 0 0 0-1.707 2.084l-.584 2.454c-.317 1.332-1.972 1.8-2.94.832L5.75 11.311 1.78 15.28a.749.749 0 1 1-1.06-1.06l3.969-3.97-2.204-2.204c-.968-.968-.5-2.623.832-2.94l2.454-.584a3.08 3.08 0 0 0 2.084-1.707l.613-1.327a1.75 1.75 0 0 1 2.826-.504ZM6.283 9.723l2.732 2.731a.25.25 0 0 0 .42-.119l.584-2.454a4.586 4.586 0 0 1 2.537-3.098l1.328-.613a.25.25 0 0 0 .072-.404l-3.722-3.722a.25.25 0 0 0-.404.072l-.613 1.328a4.584 4.584 0 0 1-3.098 2.537l-2.454.584a.25.25 0 0 0-.119.42l2.731 2.732Z"></path>
                                </svg>
                                <span className="mx-2">Pin</span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-sm btn btn-outline-secondary">
                                <span data-menu-button="">
                                    <span data-target="notifications-list-subscription-form.unwatchButtonCopy">
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-eye">
                                            <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                                        </svg>
                                        <span className="mx-2">Unwatch</span>
                                    </span>
                                    <span className="visually-hidden" data-target="notifications-list-subscription-form.stopIgnoringButtonCopy">
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-bell-slash">
                                            <path d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"></path>
                                        </svg>
                                        <span className="mx-2">Stop ignoring</span>
                                    </span>
                                    <span  className="visually-hidden" data-target="notifications-list-subscription-form.watchButtonCopy">
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-eye">
                                            <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                                        </svg>
                                       <span className="mx-2">Watch</span> 
                                    </span>
                                    <span id="repo-network-counter" data-pjax-replace="true" data-turbo-replace="true" title="0" data-view-component="true" className="Counter">
                                        {repo_details?.watchers_count}
                                    </span>
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-sm btn btn-outline-secondary" id="fork-button" aria-disabled="true" type="button" data-view-component="true" aria-describedby="tooltip-86634460-2e3d-4102-a907-cc0aa50c2565">      
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked me-2">
                                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                </svg>
                                <span className="mx-2">Fork</span>
                                <span id="repo-network-counter" data-pjax-replace="true" data-turbo-replace="true" title="0" data-view-component="true" className="Counter">
                                    {repo_details?.forks_count}
                                </span>
                            </button>
                        </li>
                        <li>
                            <button className="btn-sm btn btn-outline-secondary" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:644918609,&quot;originating_url&quot;:&quot;https://github.com/melina-niavarani/portfolio&quot;,&quot;user_id&quot;:91658429}}" data-hydro-click-hmac="8422c51b312e1154f0463b236875880deb2bf7c9637b071e7d5b3b5d01b5f57f" data-ga-click="Repository, click star button, action:files#disambiguate; text:Star" aria-label="Star this repository (1)" type="submit" data-view-component="true">    
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star d-inline-block me-2">
                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                </svg>
                                <span  className="mx-2">Star</span>              
                                <span id="repo-stars-counter-star" aria-label="1 user starred this repository" data-singular-suffix="user starred this repository" data-plural-suffix="users starred this repository" data-turbo-replace="true" title="1" data-view-component="true" className="Counter js-social-count">
                                    {repo_details?.stargazers_count}
                                </span>
                            </button>
                        </li>
                    </ul>
                </section>
                <hr/>
                <body className="d-flex">
                    <section className="col-8">
                        <div className="d-flex justify-content-between">
                            <div>
                                <button className="btn btn-outline-secondary">
                                    <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                                    </svg>
                                    <span className="mx-2">main</span>
                                </button>
                                <a className="mx-4" href="#">
                                    <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path>
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-tag" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <button className="btn btn-outline-secondary">Go to file</button>
                                <button className="btn btn-outline-secondary mx-2">
                                    <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-plus" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                                    </svg>
                                </button>
                                <button className="btn btn-success">
                                    <span>
                                        <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-code" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                            <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-2">Code</span>
                                </button>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-header d-flex gap-2 align-items-center justify-content-between  fs-small">
                                <div className="fw-bold">
                                    <img src={porofile_picture} className="rounded-pill" width="24" height='24' alt="avatar-picture" />
                                    <span className="mx-2" >{username}</span>
                                    <span className="text-secondary">{repo_name}</span>
                                </div>
                                <div className="text-secondary d-flex align-items-center gap-2">
                                    <span>
                                        <span>744193f</span>
                                        .
                                        <span className="mx-2">4months ago</span>
                                    </span>
                                    <span data-component="leadingVisual">
                                        <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                            <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                                        </svg>
                                    </span>
                                    <span className="fw-bold">29 commits</span>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item fw-bold fs-sm">
                                    <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-book me-2" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                                        <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                                    </svg>
                                    README
                                </li>
                                <li className="list-group-item d-flex flex-column align-items-center gap-3 py-4">
                                    <svg aria-hidden="true" focusable="false" role="img" className="Octicon-sc-9kayk9-0 gLySGv" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                                        <path d="M0 3.75A.75.75 0 0 1 .75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.495 4.495 0 0 1 15.75 3h7.5a.75.75 0 0 1 .75.75v15.063a.752.752 0 0 1-.755.75l-7.682-.052a3 3 0 0 0-2.142.878l-.89.891a.75.75 0 0 1-1.061 0l-.902-.901a2.996 2.996 0 0 0-2.121-.879H.75a.75.75 0 0 1-.75-.75Zm12.75 15.232a4.503 4.503 0 0 1 2.823-.971l6.927.047V4.5h-6.75a3 3 0 0 0-3 3ZM11.247 7.497a3 3 0 0 0-3-2.997H1.5V18h6.947c1.018 0 2.006.346 2.803.98Z"></path>
                                    </svg>
                                    <div className="fw-bold">Add a README</div>
                                    <p className="fs-small text-secondary">Help people interested in this repository understand your project by adding a README.</p>
                                    <button className="btn btn-success btn-sm">Add a README</button>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="col-4 mx-4">
                        <h5>About</h5>
                        <p className="text-secondary">{repo_details?.description? repo_details?.description: 'No description, website, or topics provided.'}</p>
                        <ul className="list-unstyled">
                            <li>
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-pulse me-2">
                                    <path d="M6 2c.306 0 .582.187.696.471L10 10.731l1.304-3.26A.751.751 0 0 1 12 7h3.25a.75.75 0 0 1 0 1.5h-2.742l-1.812 4.528a.751.751 0 0 1-1.392 0L6 4.77 4.696 8.03A.75.75 0 0 1 4 8.5H.75a.75.75 0 0 1 0-1.5h2.742l1.812-4.529A.751.751 0 0 1 6 2Z"></path>
                                </svg>
                                <span>{}</span>
                                <span className="fs-small fw-bold text-secondary">Activity</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star me-2">
                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                </svg>
                                <span className="me-2 fs-small fw-bold">{repo_details?.stargazers_count}</span>
                                <span className="fs-small fw-bold text-secondary">Stars</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-eye me-2">
                                    <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                                </svg>
                                <span className="me-2 fs-small fw-bold">{repo_details?.watchers_count}</span>
                                <span className="fs-small fw-bold text-secondary">watching</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo-forked me-2">
                                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                </svg>
                                <span className="me-2 fs-small fw-bold">{repo_details?.forks_count}</span>
                                <span className="fs-small fw-bold text-secondary">fork</span>
                            </li>
                        </ul>
                        <hr />
                        <h5>Releases</h5>
                        <p className="fs-small text-secondary m-0">No releases published</p>
                        <a className="fs-small text-primary text-decoration-underline" href="">Create a new release</a>
                        <hr />
                        <h5>Packages</h5>
                        <p className="fs-small text-secondary m-0">No packages published</p>
                        <a className="fs-small text-primary" href="">Publish your first package</a>
                        <hr />
                        <h5>Languages</h5>
                       <div className="progress">
                            {languages.map(([language, percent]) => (
                                <div key={percent}
                                    className={`progress-bar ${getLanguageColorClass(language)}`} 
                                    style={{ width: `${percent}%` }}   
                                    role="progressbar" 
                                    aria-valuenow={Number(percent)} 
                                    aria-valuemin={0}
                                    aria-valuemax={100} >
                                </div>
                            ))}
                        </div>
                        
                        <div className="d-flex flex-wrap align-items-center">
                            {languages.map(([language, percent]) => (
                                <div key={percent} className="fw-bold fs-small col-6 d-flex align-irems-center p-1">
                                    <span className="mx-2 d-flex">{language}</span>
                                    <span className="text-secondary">{(percent * 100 /sumOfValues).toFixed(1)} %</span>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <h5>Suggested workflows</h5>
                        <p className="text-secondary fs-small fw-bold">Based on your tech stack</p>
                        <a className="text-primary fs-small" href="">More workflows</a>
                    </section>
                </body>
            </main>
        </div>
    )
}

function getLanguageColorClass(language) {
    switch (language) {
        case 'Vue':
            return 'bg-success';
        case 'TypeScript':
            return 'bg-primary';
        case 'JavaScript':
            return 'bg-warning';
        case 'CSS':
            return 'bg-purple';
        case 'Jupyter Notebook ':
            return 'bg-orange';
        default : 
            return 'bg-danger'
    }
}


