import React from 'react';
import MainImage from './MainImage.png';
import Florida from '../home/itineraries/Florida.png'
import Michigan from '../home/itineraries/Michigan.png'
import Northeast from '../home/itineraries/Northeast.png'
import Footer from '../components/footer/Footer'
import './HomePage.scss';
import RouteIcon from "./svg/RouteIcon";
import VanIcon from "./svg/VanIcon";
import ClipboardIcon from "./svg/ClipboardIcon";
import HikingIcon from "./svg/HikingIcon";
import FolderIcon from "./svg/FolderIcon";
import CampgroundIcon from "./svg/CampgroundIcon";

const HomePage = () => {
    return (
        <>
            <div className={'Computer'}>
                <div className={'outer-container'}>
                </div>
                <div className={'image-container'}>
                <div className={'image'}>
                    <img id={'main-img'} alt={'road with dandelions blowing in wind'} src={MainImage}/>
                </div>
                </div>
                <div className={'imageText-row'}>
                    <div className={'imageText-column'}>
                        <h1 className={'item-1'}>You Wish It. <br/> We Plan It.</h1>
                    </div>
                    <div className={'imageText-column'}>
                        <p className={'item-2'}>Dandy Travel Co. is your ultimate RV/camping vacation planner. We
                            provide customized travel plans that supports the needs of your group. You pick the
                            destination, and we will do the rest so you can enjoy a stress free, memory-filled
                            vacation.</p>
                    </div>
                </div>
                <div className={'sub-titles'}>
                    <p className={'sub-titles'}>All Trips Include</p>
                </div>

                <div className={'fa-icons'}>
                    <p className={'icons'}><RouteIcon/> <br/><br/>RV-friendly<br/>routes &<br/>directions</p>
                    <p className={'icons'}><VanIcon/> <br/><br/> RV rental<br/>(if needed)</p>
                    <p className={'icons'}><ClipboardIcon/> <br/><br/> Tips + Tricks</p>
                    <p className={'icons'}><HikingIcon/> <br/><br/> Suggested<br/>Activities</p>
                    <p className={'icons'}><FolderIcon/> <br/><br/> Digital Trip<br/>Documentation</p>
                    <p className={'icons'}><CampgroundIcon/> <br/><br/> Pre-booked<br/>Campground<br/>Reservations</p>
                </div>

                <div className={'sub-titles'}>
                    <p className={'sub-titles'}>Featured Itineraries</p>
                </div>

                <div className={'feature-itineraries'}>
                    <div className={'feature-itineraries-img'}>
                        <img src={Florida} alt={'Florida Beach'}/>
                        <p className={'itin-name'}>Florida (Disney, Keys)<br/> <a className={'itin-btn'}>READ MORE</a>
                        </p>
                    </div>
                    <div className={'feature-itineraries-img'}>
                        <img src={Michigan} alt={'Florida Beach'}/>
                        <p className={'itin-name'}>Michigan (Great Lakes)<br/> <a className={'itin-btn'}>READ MORE</a>
                        </p>
                    </div>
                    <div className={'feature-itineraries-img'}>
                        <img src={Northeast} alt={'Florida Beach'}/>
                        <p className={'itin-name'}>Northeast <br/> <a className={'itin-btn'}>READ MORE</a></p>
                    </div>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
{/**!/*/}
            {/*    This is the end of the computer stuff....*/}
        </>
    );
};

export default HomePage;