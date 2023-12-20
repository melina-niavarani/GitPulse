
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import { username } from "../api/requestApi"

import Overview from '../views/Overview'
import Repositories from '../views/Repositories' 


export default function AppRouter(){
    return (
        <Routes>
            <Route path="/" >
                <Route index path={`${username}`} element={<Overview />} />
                <Route path={`${username}/repositories`} element={<Repositories />} />
                <Route  path={`${username}/projects`}  element={<Overview />}/>
                <Route  path={`${username}/packages`}  element={<Overview />}/>
            </Route>
        </Routes>
    )
}

