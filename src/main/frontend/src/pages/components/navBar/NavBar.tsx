import React from "react";
import NavThumbnail from './NavThumbnail.png'
import './NavBar.scss'
import { Navbar } from "react-bootstrap";
import {Nav} from "reactstrap";
import {Link} from "react-router-dom";
function NavBar() {
    return (

        <>
            <div className={"Computer"}>
                <div >
                <Navbar id={'topNav'} expand="lg" className="bg-body-tertiary nav-fill w-100">
                    <div className={'nav-1'}>
                        <img id='thumbnail' src={NavThumbnail} alt='Dandelion blowing in wind' width='100em'/>
                    </div>
                    <div className={'nav-2'}>
                        <Navbar.Brand id={'title'} href={'./'}>Dandy <br/> Travel Co.</Navbar.Brand>
                    </div>
                    <div className={'container'}>
                        <div className="link-container">
                            <a className={'link-item1'} href="#">Suggested <br/> Itineraries</a>
                            <a className={'link-item2'} href="/Pricing">Pricing</a>
                            <a className={'link-item3'} href="#">Blog</a>
                            <a id={'trip-btn'} href="/Plan-Your-Trip" className="btn">PLAN YOUR <br/> TRIP</a>
                        </div>
                    </div>
                </Navbar>
                </div>
            </div>

            <div className={"Mobile"}>

            </div>

                    {/*    <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
                    {/*    <Navbar.Collapse id="basic-navbar-nav">*/}
                    {/*<div className={'nav-3'}>*/}
                    {/*    <Nav className="links">*/}
                    {/*        /!*<Nav.Link as={Link} to={'./Blog'}>Blog</Nav.Link>*!/*/}
                    {/*        <div className={'abc'} >*/}
                    {/*        <Link id={'itineraries'} to={"#link"}>Suggested Itineraries</Link>*/}
                    {/*        </div>*/}
                    {/*            <div className={'abc'} >*/}
                    {/*                <Link to="#link">Pricing</Link>*/}
                    {/*            </div>*/}
                    {/*        <Link to="#link">Blog</Link>*/}
                    {/*        <div className={'abc my-2 my-lg-0'} >*/}
                    {/*        <Link className={'btn btn-outline-success my-2 my-sm-0 ms-auto text-end'} to="#link">PLAN YOUR TRIP</Link>*/}
                    {/*        </div>*/}
                    {/*    </Nav>*/}
                    {/*</div>*/}
                    {/*</Navbar.Collapse>*/}
        </>
    );
}
    export default NavBar;
