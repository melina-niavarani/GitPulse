import ProfileSidbar from "./ProfileSidbar/ProfileSidbar"
import ActivitySidbar from "./ActivitySidbar/ActivitySidbar"


function Main() {
    return (
        <div className="container-fluid d-flex flex-column flex-md-row flex-wrap justify-content-center mt-5">
            <ProfileSidbar />
            <ActivitySidbar/>
        </div>
    )
}

export default Main