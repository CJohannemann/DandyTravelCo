import React from "react";
import NavThumbnail from './NavThumbnail.png'
import './NavBar.scss'
import { Navbar } from "react-bootstrap";
// import { Nav } from "reactstrap";
// import { Link } from "react-router-dom";
// import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {
    return (

        <>
            <div >
                <Navbar id={'topNav'} expand="lg" className="bg-body-tertiary nav-fill w-100">
                    <div className={'nav-1'}>
                        <img id='thumbnail' src={NavThumbnail} alt='Dandelion blowing in wind' width='100em' />
                    </div>
                    <div className={'nav-2'}>
                        <Navbar.Brand id={'title'} href={'./'}>Dandy <br /> Travel Co.</Navbar.Brand>
                    </div>
                    <div className={'container'}>
                        <div className="link-container">
                            <a className={'link-item1'} href="/Suggested-Itineraries">Suggested <br /> Itineraries</a>
                            <a className={'link-item2'} href="/Pricing">Pricing</a>
                            <a className={'link-item3'} href="#">Blog</a>
                            <a id={'trip-btn'} href="/Plan-Your-Trip" className="btn">PLAN YOUR <br /> TRIP</a>
                        </div>
                    </div>
                </Navbar>
            </div>
        </>
    );
}
export default NavBar;
