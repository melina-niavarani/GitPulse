function ProfileSidbar() {
    return(
        <div className="col-4 px-2">
            <img alt="avatar-photo" src="https://avatars.githubusercontent.com/u/91658429?v=4" width="260" height="260" className="d-block mx-auto shadow-sm h-auto rounded-circle width-100 border"></img>
            <h1>
                <span className="d-block overflow-hidden fw-bolder fs-5 my-1">melina</span>
                <span className="d-block text-secondary fs-6 ">username</span>
            </h1>
            <div className="my-3 d-grid">
                <button name="button" type="button" className="btn btn-light border">Edit profile</button>
            </div>
            <div className="flex mt-2 mt-md-0">
                    <div className="mb-3 d-flex gap-1">
                        <a className=" text-decoration-none no-wrap d-flex gap-1 align-items-center" href="https://github.com/melina-niavarani?tab=followers">
                            <svg  aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                            </svg>
                            <span className="text-bold">4</span>
                            <span className="fw-lighter text-secondary">followers</span>
                        </a>   
                         ·
                        <a className="text-decoration-none no-wrap d-flex gap-2 align-items-center" href="https://github.com/melina-niavarani?tab=following">
                            <span className="text-bold ">8</span>
                            <span className="fw-lighter text-secondary">following</span>
                        </a>        
                    </div>
            </div>
            <ul className="list-unstyled">
                <li className="pt-1">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                     <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
                    </svg>
                    <a rel="nofollow me" className="link-dark text-decoration-none px-2" href="http://www.melinaniavarani.com">www.melinaniavarani.com</a>
                </li>                        
            </ul>
        </div>
    )
}

export default ProfileSidbar