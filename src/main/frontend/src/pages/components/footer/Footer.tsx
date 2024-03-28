import React from "react";
import './Footer.scss'
import InstagramIcon from "./svg/InstagramIcon";
import FacebookIcon from "./svg/FacebookIcon";
import TikTokIcon from "./svg/TikTokIcon";

const Footer = () => {
    return (
        <>
            <div className={'footer-container'}>
                <div className={'footer-item'}>
                <a className={'footer-p'} href={'mailto:dandytravelco@gmail.com'}>Contact Us</a>
                </div>

                <div className={'footer-item'}>
                    <p className={'footer-p'}>Newsletter signup</p>
                    


                </div>

                <div className={'footer-item'}>
                    {/*<p>Social Media</p>*/}
                    <div className={'mediaIcon-container'}>

                        <div className={'mediaIcons'}>
                            <a href={'https://www.instagram.com/dandytravelco?igsh=a3N6NDVwMndydm14'} className={'icons2'}><InstagramIcon/></a>
                        </div>
                        <div className={'mediaIcons'}>
                            <a href={'https://www.facebook.com/dandytravelco'} className={'icons2'}><FacebookIcon/></a>
                        </div>
                        <div className={'mediaIcons'}>
                            <a href={'https://www.tiktok.com/@dandytravelco?_t=8kOnlgB9cUd&_r=1'} className={'icons2'}><TikTokIcon/></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export default Footer;