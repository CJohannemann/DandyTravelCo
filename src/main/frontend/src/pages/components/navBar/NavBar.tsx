import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import NavThumbnail from './NavThumbnail.png'
import PlanYourTrip from './PlanYourTrip';

function Navbar() {
    return (
        <nav className="navbar sticky-nav">
            <div className="menu-icon">
                <img id='aa' src={NavThumbnail} />
                <NavLink id='bb' to="/" className="active">
                    Dandy Travel Co.
                </NavLink>
            </div>

            <ul className="nav-links">

                <li>
                    <NavLink to="/Suggested-Itineraries" className="active">
                        Suggested <br /> Itineraries
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Pricing" className="active">
                        Pricing
                    </NavLink>
                </li>
                <li id='blog'>
                    <NavLink to="/Blog" className="active">
                        Blog
                    </NavLink>
                </li>
                <li id='tripPlanner'>

                    <PlanYourTrip />

                </li>
            </ul>
        </nav>
    );
}
export default Navbar;