import { useLocation, useParams } from "react-router-dom"
import Navbar from "./Navbar"
import Toolbar from "./Toolbar"
import Navigate from "./Navigate"

function Header() {
    const username = useParams().username;
    const repository = useParams().repository;
    const location = useLocation()
    const isSpecificRepositoryRoute = location.pathname === `/${username}/${repository}`;
    const issuesRoute = location.pathname === `/${username}/${repository}/issues`
    return(
        <header className="header-bg">
            <Navbar/>
            {isSpecificRepositoryRoute || issuesRoute ?
               <Toolbar /> : <Navigate/> 
            }
            {/* <Navigate/>  */}
        </header>
    )
}

export default Header