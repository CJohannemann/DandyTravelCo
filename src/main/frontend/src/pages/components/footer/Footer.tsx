import React from "react";
import './Footer.scss'
import InstagramIcon from "./svg/InstagramIcon";
import FacebookIcon from "./svg/FacebookIcon";

const Footer = () => {
    return (
        <>
            <div className={'footer-container'}>
                <div className={'footer-item'}>
                    <p className={'footer-p'}>Photo Creds</p>
                </div>

                <div className={'footer-item'}>
                    <p className={'footer-p'}>Newsletter signup</p>
                    <a href={'mailto:dandytravelco@gmail.com'}>dandytravelco@gmail.com</a>


                </div>

                <div className={'footer-item'}>
                    {/*<p>Social Media</p>*/}
                    <div className={'mediaIcon-container'}>

                        <div className={'mediaIcons'}>
                            <a href={''} className={'icons2'}><InstagramIcon/></a>
                        </div>
                        <div className={'mediaIcons'}>
                            <a href={''} className={'icons2'}><FacebookIcon/></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export default Footer;