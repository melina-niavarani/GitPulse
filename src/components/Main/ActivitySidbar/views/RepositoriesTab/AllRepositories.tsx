import * as moment from 'moment';
import { Link, useParams } from 'react-router-dom';

import { calculateUpdateLabel, getLanguageColorClass } from "../../../../../Shared/sharedFunctions";

function AllRepositories(props) {
    const languageColorClass = getLanguageColorClass(props?.language);
    const updatedDay = calculateUpdateLabel(props.update)

    const username = useParams().username;
  
    return(
        <li className=" py-4 border  border-start-0 border-end-0 d-flex justify-content-between align-items-center">
            <div>
                <div className="d-flex gap-2 align-items-center">
                    <Link to={`/${username}/${props.title}`} className="fw-bold fs-5 pointer text-primary m-0 text-decoration-none">{props.title}</Link>
                    <span className="rounded-pill px-2 fs-small border border-secondary-subtle">{props.status}</span>
                </div>
                <p className="mt-2 mb-3 w-75 text-secondary ">{props.description}</p>
                <div className="d-flex align-items-center ">
                    <div className="d-flex align-items-center">
                        {props.language?
                            <div className="d-flex align-items-center">
                                <span className={`language-color me-2 ${languageColorClass}`}></span>
                                <span className="text-secondary fs-small me-4">{props.language}</span>
                            </div>
                        : null}
                    </div>
                    <div>
                        {props.fork?
                            <div className="d-flex align-items-center mx-2">
                                <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                </svg>
                                <span className="fs-small">{props.star}</span>
                            </div>
                        : null }
                    </div>
                    <div>
                        {props.star?
                            <div className="d-flex align-items-center mx-2">
                                <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                </svg>
                                <span className="fs-small">{props.fork}</span>
                            </div>
                        : null }
                    </div>
                    <div className="fs-small text-secondary">{updatedDay}</div>
                </div>
            </div>
            <div className="btn-group h-50 me-3" role="group">
                <button type="button" className="btn btn-light border dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg className='me-2 ' aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    star
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

}
export default AllRepositories;



