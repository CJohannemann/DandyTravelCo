import React from 'react';
// import {Route, Routes} from "react-router";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./main/frontend/src/pages/home";
import Navbar from "./main/frontend/src/pages/components/navBar";
import Pricing from "./main/frontend/src/pages/pricing/Pricing";
import Planning from "./main/frontend/src/pages/planning/Planning";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/plan-your-trip' element={<Planning/>}/>
                {/*<Route path="/Blog" element={<Blog/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
