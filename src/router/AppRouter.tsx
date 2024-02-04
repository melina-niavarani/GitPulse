
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
        <Routes >
            <Route path=":username/*">
                <Route index element={<Overview />} />
                <Route path="repositories" element={<Repositories />} />
                <Route path="projects" element={<Project />} />
                <Route path="packages" element={<Packages />} />
                <Route path="stars" element={<Stars />} />
                <Route path=":repository" element={<SpecificRepository />} />
                <Route path=":repository/issues" element={<Issues />} />
            </Route>
        </Routes>
    )
}