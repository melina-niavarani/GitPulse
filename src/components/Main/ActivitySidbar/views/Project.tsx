export default function Project(){
    return(
        <div>
            <div className="d-flex gap-3">
                <input  className="border rounded px-2 col-9" value='' type="search" placeholder="Search all projects" />
                <button className="btn btn-success btn-sm fw-bold fs-small text-nowrap col-3">New Project</button>
            </div>
            <div className="card mt-4">
                <div className="card-header d-flex align-items-center justify-content-between flex-auto flex-shrink-0">
                    <div>
                        <a href="/users/melina-niavarani/projects?query=is%3Aopen" className="fw-bold fs-small p-0">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-table">
                                <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
                            </svg>
                            1 Open
                        </a>
                        <a href="/users/melina-niavarani/projects?query=is%3Aclosed" className="fw-normal fs-small p-0 ms-3">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-archive">
                                <path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0 1 14.25 6H1.75A1.75 1.75 0 0 1 0 4.25ZM1.75 7a.75.75 0 0 1 .75.75v5.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-5.5a.75.75 0 0 1 1.5 0v5.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25v-5.5A.75.75 0 0 1 1.75 7Zm0-4.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25ZM6.25 8h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z"></path>
                            </svg>
                           0 Closed
                        </a>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="true"  aria-expanded="false">
                            Sort
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item active" href="#">Recently updated</a></li>
                            <li><a className="dropdown-item" href="#">Newest</a></li>
                            <li><a className="dropdown-item" href="#">Oldest</a></li>
                            <li><a className="dropdown-item" href="#">Least recently updated</a></li>
                            <li><a className="dropdown-item" href="#">Name</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                </ul>
            </div>
        </div>
    )
}