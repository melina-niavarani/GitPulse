import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Overview from '../views/Overview'


export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Overview />} />
                {/* <Route path="/about"  component={About}/> */}
                {/* <Route  path="/contact"  component={Contact}/> */}
            </Routes>
           
        </Router>
    )
}

