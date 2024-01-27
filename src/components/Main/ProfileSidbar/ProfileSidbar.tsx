import { useParams } from "react-router-dom";
import { useProfile } from "../../../hook/useProfile"


export default function ProfileSidbar() {
    const username = useParams().username
    const {user, isLoading, hasError} = useProfile(username)

    const profile_picture = user?.avatar_url;

    const hasData = !hasError && !isLoading && user

    return(
        <div className="px-2">
            {hasError? "An error has been occured": 
                <div>
                    <div className="d-flex flex-row flex-md-column align-items-center align-items-md-start">
                        <img alt="avatar-photo" src={profile_picture} width="260" height="260" className="d-block mx-auto shadow-sm h-auto rounded-circle border"></img>
                        <h1 >
                            <span className="d-block overflow-hidden fw-bolder fs-5 my-1">{ user?.name }</span>
                            <span className="d-block text-secondary fs-6 "> { user?.login } </span>
                        </h1>
                    </div>
                    <div className="my-3 d-grid">
                        <button name="button" type="button" className="btn btn-light border">Edit profile</button>
                    </div>
                    <div className="flex mt-2 mt-md-0">
                            <div className="mb-3 d-flex gap-1">
                                <a className=" text-decoration-none no-wrap d-flex gap-1 align-items-center" href="https://github.com/melina-niavarani?tab=followers">
                                    <svg  aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                                        <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                                    </svg>
                                    <span className="text-bold">{ user?.followers }</span>
                                    <span className="fw-lighter text-secondary">followers</span>
                                </a>
                                ·
                                <a className="text-decoration-none no-wrap d-flex gap-2 align-items-center" href="https://github.com/melina-niavarani?tab=following">
                                    <span className="text-bold ">{ user?.following }</span>
                                    <span className="fw-lighter text-secondary">following</span>
                                </a>
                            </div>
                    </div>
                    <ul className="list-unstyled">
                        <li  aria-label="Email: madler@alumni.caltech.edu" className="pt-1">
                            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
                            </svg>
                            <a className="link-dark text-decoration-none px-2" href={user?.email} >{user?.email}</a>
                        </li>
                        <li className="pt-1">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                            </svg>
                            <a rel="nofollow me" className="link-dark text-decoration-none px-2" href={user?.blog} > {user?.blog} </a>
                        </li>
                    </ul>
                    <hr></hr>
                    <h2 className="mb-2 fs-5 fw-bold">
                        <a className="text-decoration-none" href="">Achevements</a>
                    </h2>
                    <div className="d-flex flex-wrap">
                        <a href="/madler?achievement=starstruck&amp;tab=achievements" className="position-relative">
                            <img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png"  width="64" alt="Achievement: Starstruck" className="shadow-sm"/>
                            <span data-view-component="true" className="number px-2 py-0 bg-warning rounded-pill position-absolute end-0 bottom-0">x4</span>
                        </a>
                    </div>
                </div>
            }

        </div>
    )
}
