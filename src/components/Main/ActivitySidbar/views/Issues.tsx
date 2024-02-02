import Header from "../../../Header/Header";
import { useIssues } from "../../../../hook/useIssues"
import { useParams } from "react-router-dom";

import { calculateUpdateLabel } from "../../../../Shared/sharedFunctions";

import { Hourglass } from "react-loader-spinner";

export default function Issues(){
    const username =useParams().username;
    const repo_name = useParams().repository;
    const { issues, isLoading, hasError } = useIssues(username, repo_name);
    const issuesList = issues || [];

    if (isLoading) {
        return (
            <div>
                <Header />
                <div className="d-flex justify-content-center align-items-center fs-1 py-5 my-5 gap-2">
                    <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                    />
                    <span>Loading...</span>
                </div>
            </div>
        );
    }

    if (hasError) {
        return (
            <div>
                <Header />
                <p className='d-flex justify-content-center align-items-center fs-1 py-5 my-5 text-danger '>Error loading repositories. Please try again.</p>
            </div>
        );
    }
    
    return(
        <div>
            <Header/>
            <body className="container-fluid">
                <section className="border rounded my-4 py-5 text-center">
                    <h2 className="mb-1 h5 fw-bold mb-2">
                        Label issues and pull requests for new contributors
                    </h2>
                    <p className="mb-1 fs-small">
                        Now, GitHub will help potential first-time contributors 
                        <a className="ms-1 text-primary text-decoration-underline" href="#">
                            discover issues
                        </a> labeled with
                        <a className="mx-1 btn btn-sm btn-info rounded-pill py-0 text-light" href="#">
                            good first issue
                        </a>
                    </p>
                </section>
                <section>
                    <div className="d-flex flex-column-reverse flex-md-row gap-2 gap-md-3 my-2">
                        <div className="d-flex col-md-7">
                            <div className="dropdown">
                                <button className="btn btn-sm btn-outline-secondary dropdown-toggle fw-bold " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filters
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Action</button></li>
                                    <li><button className="dropdown-item" type="button">Another action</button></li>
                                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </div>
                            <form className="w-100 d-flex position-relative" data-pjax="#repo-content-pjax-container"  role="search" method="get">
                                <input type="text" className="w-100 px-3" placeholder="Search all issues" />
                                <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon position-absolute top-50 translate-middle-y">
                                    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                                </svg>
                            </form>
                        </div>
                        <div className="d-flex col-md-5 justify-content-between justify-content-md-start gap-2 ">
                            <nav className="d-flex flex-nowrap" aria-label="Issue">
                                <a className="btn btn-sm btn-light border" data-selected-links="repo_labels /melina-niavarani/Etalon/labels" href="/melina-niavarani/Etalon/labels">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon octicon-tag ">
                                        <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                                    </svg>
                                    <span className="mx-2">Labels</span>
                                    <span title="9" className="Counter d-none d-md-inline">9</span>
                                </a>
                                <a className="btn btn-sm btn-light border" data-selected-links="repo_milestones /melina-niavarani/Etalon/milestones" href="/melina-niavarani/Etalon/milestones">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon octicon-milestone">
                                        <path d="M7.75 0a.75.75 0 0 1 .75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 0 1 0 2.672l-2.07 1.75a1.75 1.75 0 0 1-1.13.414H8.5v5.25a.75.75 0 0 1-1.5 0V10H2.75A1.75 1.75 0 0 1 1 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 0 1 7.75 0Zm4.384 8.5a.25.25 0 0 0 .161-.06l2.07-1.75a.248.248 0 0 0 0-.38l-2.07-1.75a.25.25 0 0 0-.161-.06H2.75a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.384Z"></path>
                                    </svg>
                                    <span className="mx-2">Milestones</span>
                                    <span title="0" className="Counter d-none d-md-inline">0</span>
                                </a>
                            </nav>
                            <button className="btn btn-sm border btn-success">
                                New issue
                            </button>
                        </div>
                    </div>
                </section>
                <section className="border rounded my-4  ">
                    {!issues? 
                        <div className="text-center p-3">
                            <svg height="24" viewBox="0 0 24 24" version="1.1" width="24" className="octicon my-4">
                                <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"></path>
                            </svg>
                            <h3 className="mb-2">Welcome to issues!</h3>
                            <p className="fs-md text-secondary px-5">Issues are used to track todos, bugs, feature requests, and more. As issues are created, they’ll appear here in a searchable and filterable list. To get started, you should 
                                <a className="mx-1 text-primary text-decoration-underline" href="/melina-niavarani/Etalon/issues/new/choose">create an issue</a>.
                            </p>
                        </div>
                        :
                        <section >
                            <div className="d-flex justify-content-between border-bottom p-3">
                                <div className="d-flex align-items-center gap-2">
                                    <a href="#" className="fw-bold">
                                        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" >
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                                        </svg>
                                        <span className="mx-1">{issues?.length}</span>
                                        <span>Open</span>
                                    </a>
                                    <a href="#">
                                        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" className="octicon octicon-check">
                                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                        </svg>
                                        <span className="mx-1">0</span>
                                        <span>Closed</span>
                                    </a>
                                </div>
                                <div></div>
                            </div>
                            <ul className="list-unstyled">
                                {issuesList.map((issue)=>{
                                    return(
                                        <li key={issue.id} className="border-bottom  p-3">
                                            <div className="d-flex align-items-center">
                                                <svg className="octicon  open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                                    <path fill="#3FB950" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    <path fill="#3FB950" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                                                </svg>
                                                <h5 className="px-2 fs-5 m-0">{issue?.title}</h5>
                                            </div>
                                            <div className="text-muted fs-md">
                                                <span>#{issue?.number}</span>
                                                <span>opened {calculateUpdateLabel(issue?.created_at)} by {issue?.user.login} </span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    }       
                </section>
                <div className="mt-3 text-center color-fg-muted mb-5">
                        <svg  height="16" viewBox="0 0 16 16" version="1.1" width="16"  className="octicon octicon-light-bulb color-fg-muted">
                            <path  d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
                        </svg>
                        <strong className="color-fg-default">ProTip!</strong>
                        <span className="text-secondary mx-1">
                            Adding
                            <a className="text-primary mx-1" href="#">no:label</a> will show everything without a label.
                        </span>
                </div>
            </body>
        </div>
    )
}