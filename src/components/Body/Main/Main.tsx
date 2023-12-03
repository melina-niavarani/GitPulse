import ProfileSidbar from "./ProfileSidbar"
import ActivitySidbar from "./ActivitySidbar"

function Main() {
    return (
        <div className="container-fluid d-flex justify-content-center mt-5">
            <ProfileSidbar />
            <ActivitySidbar/>
        </div>
    )
}

export default Main