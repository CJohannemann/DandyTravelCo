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
import MichiganItinerary from './main/frontend/src/pages/itineraries/michigan/MichiganItinerary';
import FloridaItinerary from './main/frontend/src/pages/itineraries/florida/FloridaItinerary';
import ArkansasStlmoItinerary from './main/frontend/src/pages/itineraries/arkansasStLouis/ArkansasStlmoItinerary';
import BlueRidgeItinerary from './main/frontend/src/pages/itineraries/blueRidgeParkway/BlueRidgeItinerary';
import CharlestonItinerary from './main/frontend/src/pages/itineraries/charleston/CharlestonItinerary';

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='' element={<HomePage/>}/>
                <Route path='/Pricing' element={<Pricing/>}/>
                <Route path='/Plan-Your-Trip' element={<Planning/>}/>
                <Route path='/Suggested-Itineraries' element={<SuggestedItineraries/>}/>
                {/*List Of Itineraries:*/}
                <Route path='/Suggested-Itineraries-NorthEast' element={<NorthEastItinerary/>}/>
                <Route path='/Suggested-Itineraries-Michigan' element={<MichiganItinerary/>}/>
                <Route path='/Suggested-Itineraries-Florida' element={<FloridaItinerary/>}/>
                <Route path='/Suggested-Itineraries-Blue-Ridge-Parkway' element={<BlueRidgeItinerary/>}/>
                <Route path='/Suggested-Itineraries-Ark-STLMO' element={<ArkansasStlmoItinerary/>}/>
                <Route path='/Suggested-Itineraries-Charleston' element={<CharlestonItinerary/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
