import React from 'react';
// import {Route, Routes} from "react-router";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./main/frontend/src/pages/home";
import Footer from './main/frontend/src/pages/components/footer/Footer';
import Navbar from "./main/frontend/src/pages/components/navBar";
import Pricing from "./main/frontend/src/pages/pricing/Pricing";
import Planning from "./main/frontend/src/pages/planning/Planning";
import SuggestedItineraries from './main/frontend/src/pages/suggestedItineraries/SuggestedItineraries';
import NorthEastItinerary from './main/frontend/src/pages/itineraries/northEast/NorthEastItinerary';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='Pricing' element={<Pricing/>}/>
                <Route path='Plan-Your-Trip' element={<Planning/>}/>
                <Route path='Suggested-Itineraries' element={<SuggestedItineraries/>}/>
                {/*List Of Itineraries:*/}
                <Route path='Suggested-Itineraries-NorthEast' element={<NorthEastItinerary/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
