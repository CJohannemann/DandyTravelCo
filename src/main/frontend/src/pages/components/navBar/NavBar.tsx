import React from "react";
import NavThumbnail from './NavThumbnail.png'
import './NavBar.scss'

const Navbar = () => {
    return (
        <nav className="topNav navbar navbar-expand-lg navbar-light">
                <img id='thumbnail' src={NavThumbnail} alt='Dandelion blowing in wind' width='100em'/>
            <span id={'title'} className={'navbar-brand mb-0 title'}><strong>Dandy Travel Co</strong></span>
            <div className={'nav-items'}>
            <ul className={'nav'}>
                <li className={'nav-item'}>
                    <a className={'link-item'} href={'#RvRoadTrip'}>RV Road Trips</a>
                </li>
                <li className={'nav-item'}>
                    <a className={'link-item'} href={'#Resources'}>Resources</a>
                </li>
                <li className={'nav-item'}>
                    <a className={'link-item'} href={'#Blogs'}>Blog</a>
                </li>
                <li className={'nav-item'}>
                    <a className={'link-item'} href={'#About'}>About</a>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;