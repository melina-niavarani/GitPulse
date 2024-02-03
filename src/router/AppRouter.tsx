
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Overview from '../components/Main/ActivitySidbar/views/OverviewTab/Overview'
import Repositories from '../components/Main/ActivitySidbar/views/RepositoriesTab/Repositories' 
import Project from '../components/Main/ActivitySidbar/views/Project' 
import Packages from "../components/Main/ActivitySidbar/views/Packages";
import Stars from "../components/Main/ActivitySidbar/views/Stars";
import SpecificRepository from "../components/Main/ActivitySidbar/views/SpecificComponent/SpecificRepository";
import Issues from "../components/Main/ActivitySidbar/views/Issues";

export default function AppRouter(){
    return (
        <Routes>
            <Route path="/" >
                <Route index path={`:username`} element={<Overview />} />
                <Route path={`:username/repositories`} element={<Repositories />} />
                <Route  path={`:username/projects`}  element={<Project />}/>
                <Route  path={`:username/packages`}  element={<Packages />}/>
                <Route  path={`:username/Stars`}  element={<Stars />}/>
                <Route  path={`:username/:repository`}  element={<SpecificRepository/>}/>
                <Route  path={`:username/:repository/issues`}  element={<Issues/>}/>
            </Route>   
        </Routes>
    )
}