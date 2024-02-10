import React from 'react';
import MainImage from './MainImage.png';
import './HomePage.scss';

const HomePage = () => {
    return (
        <>
            <div className={'Computer'}>
                <div className={'outer-container'}>
                    <div className={'mobileImageText'}>
                        <h1>You Wish It. We Plan It.</h1>
                        <br/><br/>
                        <h4>Custom travel itineraries</h4>
                    </div>
                    <div className={'image'}>
                        <img alt={'road with dandelions blowing in wind'} src={MainImage}/>
                    </div>
                    <div className={'imageText'}>
                        <h1 className={'item-1'}>You Wish It. </h1>

                        <h1 className={'item-2'}>We Plan It.</h1>
                    </div>

                    <div className={'container'}>
                        <div>
                            <h4>A travel company that does things differently</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;