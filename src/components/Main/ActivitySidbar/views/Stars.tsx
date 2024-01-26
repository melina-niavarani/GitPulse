export default function Stars(){
    return(
        <div>
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
        </div>
    )
}