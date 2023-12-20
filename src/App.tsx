

import Header from "./components/Header/Header"
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ProfileSidbar from "./components/Main/ProfileSidbar/ProfileSidbar";
import AppRouter from "./router/AppRouter";


export function App() {

    return (
        <div>
            <Header/>
            <Main />
            <Footer />
        </div>
    )
}

