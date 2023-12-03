import Navbar from "./Navbar"
import Navigate from "./Navigate"

function Header() {
    return(
        <header className="header-bg">
            <Navbar/>
            <Navigate/>
        </header>
    )
}

export default Header