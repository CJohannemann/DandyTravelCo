import React from "react";
import './Pricing.scss';
import Footer from "../components/footer/Footer";

const Pricing = () => {
    return (
        <>
            <div className={'title-container'}>
                <div className={'title'}>
                    <p className={'title-p'}>Packages & Pricing</p>
                </div>
            </div>
            <div className={'flex-container'}>
                <div className={'inner-item-number'}>
                    <h1 className={'pricing-number'}>1</h1>
                </div>
                <div className={'inner-item-text'}>
                    <h2 className={'pricing-title'}>Just The Basics<br/></h2>
                    <p className={'pricing-text'}>Choose one of our <a href={'#'}>suggested itineraries</a> and we will provide route information, recommended campsites, and suggested activities for your trip. This includes all digital documentation but does not include any booking or customization.
                    <br/>
                    Pricing: $50-$100 total</p>
                </div>
            </div>

            <div className={'flex-container'}>
                <div className={'inner-item-number'}>
                    <h1 className={'pricing-number'}>2</h1>
                </div>
                <div className={'inner-item-text'}>
                    <h2 className={'pricing-title'}>Stress Free Package<br/></h2>
                    <p className={'pricing-text'}>Choose one of our <a href={'#'}>suggested itineraries</a> and we will book the RV (if needed), book all of the campsites, and everything from the basic package. This includes customization based on start/end points.
                        <br/> Planning Fee: $125/night
                    <br/> Trip Fee: Varies</p>
                </div>
            </div>

            <div className={'flex-container'}>
                <div className={'inner-item-number'}>
                    <h1 className={'pricing-number'}>3</h1>
                </div>
                <div className={'inner-item-text'}>
                    <h2 className={'pricing-title'}>Dream Big<br/></h2>
                    <p className={'pricing-text'}>Completely customize your trip including your starting/ending point, number of nights, and we ill plan your trip from scratch. This includes all bookings + everything from basic package.
                    <br/> Planning Fee: $200/night
                    <br/> Trip Fee: Varies</p>
                </div>
            </div>
        </>
    )
}

export default Pricing;