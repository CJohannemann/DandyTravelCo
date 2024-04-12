import React from "react";
import NavThumbnail from './NavThumbnail.png'
import './NavBar.scss'
import { Navbar } from "react-bootstrap";
import { useState } from "react";
import  MenubarIcon from "./MenuBarIcon";



function NavBar() {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div >
                <Navbar id={'topNav'} expand="sm" className="bg-body-tertiary nav-fill w-100">
                    <div className={'nav-1'}>
                        <img id='thumbnail' src={NavThumbnail} alt='Dandelion blowing in wind' width='100em' />
                    </div>
                    <div className={'nav-2'}>
                        <Navbar.Brand id={'title'} href={'./'}>Dandy <br /> Travel Co.</Navbar.Brand>
                    </div>
                    <div id="mobile-menu-container">
                        <button onClick={toggleMenu}><MenubarIcon /></button>
                        {isMenuOpen && (
                        <ul>
                            <li>Suggested <br /> Itineraries</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>PLAN YOUR <br /> TRIP</li>
                        </ul>
                        )}
                    </div>
                    <div id="abc" className={'container'}>
                        <div className="link-container">
                            <a className={'link-item1'} href="./Suggested-Itineraries">Suggested <br /> Itineraries</a>
                            <a className={'link-item2'} href="./Pricing">Pricing</a>
                            <a className={'link-item3'} href="#">Blog</a>
                            <a id={'trip-btn'} href="./Plan-Your-Trip" className="btn">PLAN YOUR <br /> TRIP</a>
                        </div>
                    </div>
                </Navbar>
            </div>
        </>
    );
}
export default NavBar;
