import React from 'react';
// import {Route, Routes} from "react-router";
import {HashRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./main/frontend/src/pages/home";
import Navbar from "./main/frontend/src/pages/components/navBar";
import Pricing from "./main/frontend/src/pages/pricing/Pricing";
import Planning from "./main/frontend/src/pages/planning/Planning";

function App() {
    return (
        <BrowserRouter>
        {/*<Router>*/}
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/Pricing' element={<Pricing/>}/>
                <Route path='/Plan-Your-Trip' element={<Planning/>}/>
                {/*<Route path="/Blog" element={<Blog/>}/>*/}
            </Routes>
        {/*</Router>*/}
        </BrowserRouter>
    );
}

export default App;
