import React from 'react';
import MainImage from './MainImage.png';
import './HomePage.scss';

const HomePage = () => {
    return (
        <>
            <div className={'image'}>
                <img src={MainImage}/>
            </div>
            <div className={'imageText'}>
                <h1>You Wish It. We Plan It.</h1>
                <br/><br/>
                <h4>Custom travel itineraries</h4>
            </div>

            <div className={'container'}>
                <div>
                    <h4>A travel company that does things differently</h4>
                </div>

            </div>
        </>
    );
};

export default HomePage;