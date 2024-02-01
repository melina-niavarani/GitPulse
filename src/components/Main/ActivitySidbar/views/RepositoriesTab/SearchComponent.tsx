import { useState } from "react";

export default function SearchComponent(props){
    // const [search, setSearch] = useState("");

    return(
        <div className="mb-4">
            <form className="w-100" action={`/${props.username}`}>
                <div className="d-flex flex-column flex-lg-row flex-auto gap-lg-0 gap-2">
                    <div className="col-lg-6 mb-1 mb-md-0 me-md-3 flex-auto">
                        <input  
                            onChange={(e)=>{
                                const searchValue = e.target.value.toLocaleLowerCase()
                                // props.handleCallback(searchValue)
                                props.handleSearch(searchValue)
                                // console.log('from child',search)
                            }}
                            type="search" 
                            className="w-100 border rounded p-2"
                            placeholder="Find a repository..."
                            />
                    </div>
                    <div className="d-flex flex-wrap gap-1">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-light  border dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </button>
                            <div className="dropdown-menu py-0">
                                <h5 className='dropdown-item fs-md fw-bold my-2 d-flex justify-content-between align-items-center'>
                                    <span>Lists</span>
                                    <svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon cursot-pointer">
                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                    </svg>
                                </h5>
                                <hr className='m-0'/>
                                <ul className="list-unstyled">
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">All</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">Sources</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">Forks</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">Archived</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">Can be sponsored</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">Mirrors</a></li>
                                    <li><a className="dropdown-item" href="#">Templates</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-light border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Language
                            </button>
                            <div className="dropdown-menu py-0">
                                <h5 className='dropdown-item fs-md fw-bold my-2 d-flex justify-content-between align-items-center'>
                                    <span>Select language</span>
                                    <svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon cursot-pointer">
                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                    </svg>
                                </h5>
                                <hr className='m-0'/>
                                <ul className="list-unstyled">
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#" onClick={() => props.handleLanguageChange("")}>All</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#" onClick={() => props.handleLanguageChange("TypeScript")}>TypeScript</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#" onClick={() => props.handleLanguageChange("JavaScript")}>JavaScript</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#" onClick={() => props.handleLanguageChange("HTML")}>HTML</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#" onClick={() => props.handleLanguageChange("CSS")}>CSS</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#" onClick={() => props.handleLanguageChange("Java")}>Java</a></li>
                                    <li><a className="dropdown-item" href="#">C</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-light border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort
                            </button>
                            <div className="dropdown-menu py-0">
                                <h5 className='dropdown-item fs-md fw-bold my-2 d-flex justify-content-between align-items-center'>
                                    <span>Select order</span>
                                    <svg aria-label="Close menu" aria-hidden="false" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon cursot-pointer">
                                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                    </svg>
                                </h5>
                                <hr className='m-0'/>
                                <ul className="list-unstyled">
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">Last updated</a></li>
                                    <li className="border border-top-0 border-start-0 border-end-0"><a className="dropdown-item" href="#">Name</a></li>
                                    <li><a className="dropdown-item" href="#">Stars</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
