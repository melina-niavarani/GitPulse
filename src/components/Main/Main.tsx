import ProfileSidbar from "./ProfileSidbar/ProfileSidbar"
import ActivitySidbar from "./ActivitySidbar/ActivitySidbar"
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div className="container-fluid d-flex flex-column flex-md-row justify-content-between mt-5">
            <Outlet />
            <div className="col-md-4"><ProfileSidbar /></div>
            <div className="col-md-8"><ActivitySidbar/></div>
        </div>
    )
}

export default Main