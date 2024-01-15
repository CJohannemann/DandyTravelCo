import React from 'react';
import NavThumbnail from './NavThumbnail.png'
import './NavBar.scss'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="topNav navbar navbar-expand-lg navbar-light">
                <img id='thumbnail' src={NavThumbnail} alt='Dandelion blowing in wind' width='100em'/>
            <a href={'./'} id={'title'} className={'navbar-brand mb-0 title'}><strong>Dandy Travel Co</strong></a>
            <div className={'nav-items'}>
            <ul className={'nav'}>
                <Link className={'nav-item'} to={''}>
                    <li className={'link-item'} >RV Road Trips</li>
                </Link>
                <Link className={'nav-item'} to={''}>
                    <li className={'link-item'} >Resources</li>
                </Link>
                <Link className={'nav-item'} to={'./Blogs'}>
                    <li className={'link-item'} >Blogs</li>
                </Link>
                <Link className={'nav-item'} to={''}>
                    <li className={'link-item'} >About</li>
                </Link>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;