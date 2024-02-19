import Header from "../../../../Header/Header";
import RepositoriesCards from "./RepositoriesCards";
import ProfileSidbar from "../../../ProfileSidbar/ProfileSidbar";

import { useRepositories } from "../../../../../hooks/useRepositories";
import { useParams } from "react-router-dom";

import * as moment from "moment";
import { Hourglass } from 'react-loader-spinner'

import { getContributions } from "../../../../../api/requestApi";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getNumberOfCommits } from "../../../../../api/requestApi";

const REPOSITORIES_COUNT = 6
export default function Overview(){
    const username = useParams().username;
    const { repository, isLoading, hasError } = useRepositories(username);
    const [selectedYear, setSelectedYear] = useState(null);
    const [commitInfo, setCommitInfo] = useState([]);
    const [displayedCommits, setDisplayedCommits] = useState(2);
    const [contribution, setContribution] = useState("")

    const displayedRepositories = repository? repository.slice(0, REPOSITORIES_COUNT) : [];

    const currentMonthAndYear = moment().format("MMMM YYYY");
     
 useEffect(() => {
    getContributions(username)
        .then((data)=>{
            setContribution(data.user.contributionsCollection.contributionCalendar.totalContributions)
            console.log("contri",contribution)
        })
        .catch((error) => {
            console.error("Error fetching contribution:", error);
        });
  }, [username]);

const handleYearSelect = async (year) => {
    setSelectedYear(year);

    const filteredRepositories = repository.filter(repo => {
      const repoYear = new Date(repo.created_at).getFullYear();
      return repoYear === year;
    });

    const commitInfoArray = [];

    for (const repo of filteredRepositories) {
      const commits = await getNumberOfCommits(username, repo.name);
      const commitCount = commits.length;
      commitInfoArray.push({ repoName: repo.name, commitCount });
    }

    setCommitInfo(commitInfoArray);
  };
  

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

    return (
        <div>
            <Header/>
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between mt-5 gap-3">
                <div className="col-md-4">
                    <ProfileSidbar />
                </div>
                {/* Activity Sidebar */}
                <div className="col-md-8 mt-5 pe-2">
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
                    <div className="d-flex justify-content-center justify-content-md-between">
                        <section className="col-12 col-lg-10">
                            <div>
                                <div className="d-flex justify-content-between">
                                    <h5>{contribution} contributions in the last year</h5>
                                    <span className="fs-small text-secondary">
                                        Contribution settings
                                    </span>
                                </div>
                                <div className="border rounded p-2 overflow-hidden w-100">
                                    <div className="overflow-scroll">
                                        <img className="d-block w-sm-100 w-md-70 " src={`https://ghchart.rshah.org/${username}`} alt="Name Your Github chart"/>
                                    </div>
                                    <p className="fs-small text-secondary m-0 mx-4 mt-2 ">Learn how we count contributions</p>
                                </div>
                            </div>
                            <div className="my-3  ">
                                <div className="d-flex justify-content-between">
                                    <h5> Contribution activity</h5>
                                    <div className="btn-group d-lg-none" role="group">
                                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            {selectedYear ? selectedYear : 'Year'}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" onClick={() => handleYearSelect(2024)}>2024</a></li>
                                            <li><a className="dropdown-item" href="#"onClick={() => handleYearSelect(2023)}>2023</a></li>
                                            <li><a className="dropdown-item" onClick={() => handleYearSelect(2022)}>2022</a></li>
                                            <li><a className="dropdown-item" onClick={() => handleYearSelect(2022)}>2022</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className="fs-small border-bottom border-1 lh-mini mt-3"><span className="fw-bold bg-light pe-4 ps-2">{selectedYear ? selectedYear : currentMonthAndYear}</span></h3>
                                {selectedYear && (
                                    <div className="d-flex flex-column ms-3 mt-3 ps-2 py-4 border-start border-1 lh-1">
                                        {commitInfo.slice(0, displayedCommits).map(info => (
                                        <div key={info.repoName} className="d-flex align-items-center gap-2 my-4">
                                            <span data-view-component="true" className="bg-secondary bg-opacity-10 rounded-pill p-2" style={{ marginLeft: '-1.5rem' }} >
                                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon">
                                                    <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z"></path>
                                                </svg>
                                            </span>
                                            <div className="col-11">
                                                <div className="d-flex align-items-center justify-content-between ">
                                                    <div>Created {info.commitCount} commit in 1 repository</div>
                                                    <span>
                                                        <svg aria-label="Collapse" className="octicon octicon-fold" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                                            <path d="M10.896 2H8.75V.75a.75.75 0 0 0-1.5 0V2H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 2ZM8.75 15.25a.75.75 0 0 1-1.5 0V14H5.104a.25.25 0 0 1-.177-.427l2.896-2.896a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25Zm-6.5-6.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="col-8 mt-2">
                                                            <Link to={`/${username}/${info.repoName}`}  className="text-primary pe-3">{username}/{info.repoName}</Link>
                                                            <span className="text-secondary fs-small">{info.commitCount}commits</span>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="border rounded d-flex mt-1 overflow-hidden" style={{height: '8px', outline:'1px solid #0000'}} role="img" aria-label="100% of commits in February were made to melina-niavarani/GitPulse ">
                                                            <span className="w-100 rounded-2 bg-success" style={{outline:'2px solid #0000'}}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                )}
                                <button name="button" type="submit" className=" btn w-100 border rounded fs-md mt-3 py-2 text-primary fw-bold"
                                    onClick={() => setDisplayedCommits(prev => prev + 2)}
                                >
                                    Show more activity
                                </button>
                                <p className="text-muted fs-small mt-4 mb-5">
                                    Seeing something unexpected? Take a look at the
                                      <a className="text-primary text-decoration-underline mx-1" href="https://docs.github.com/categories/setting-up-and-managing-your-github-profile">GitHub profile guide</a>.
                                </p>
                            </div>
                        </section>
                        <ul className="col-2 list-unstyled d-none d-lg-block text-center">
                            <li className="rounded py-1 mb-2 " >
                                <a onClick={() => handleYearSelect(2024)} id="year-link-2024" className="px-3 mb-2 py-2 selected" data-toggle="list" href="#list-2024" role="tab" aria-controls="2024">2024</a>
                            </li>
                            <li className=" rounded py-1 mb-2 ">
                                <a onClick={() => handleYearSelect(2023)} id="year-link-2023" className="px-3 mb-2 py-2 selected" data-toggle="list" href="#list-2023" role="tab" aria-controls="2023">2023</a>
                            </li>
                            <li className=" rounded py-1 mb-2 ">
                                <a onClick={() => handleYearSelect(2022)} id="year-link-2022" className="px-3 mb-2 py-2" data-toggle="list" href="#list-2022" role="tab" aria-controls="2022">2022</a>
                            </li>
                            <li className=" rounded py-1 mb-2 ">
                                <a onClick={() => handleYearSelect(2021)} id="year-link-2021" className="px-3 mb-2 py-2" data-toggle="list" href="#list-2021" role="tab" aria-controls="2021">2021</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
