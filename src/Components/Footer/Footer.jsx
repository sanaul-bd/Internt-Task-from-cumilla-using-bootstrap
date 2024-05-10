import React from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import logo from '../../assets/image/whiteLogo.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='icon'>
                <MdKeyboardArrowUp />
            </div>
            <div className='footer'>
                <div className='left-footer w-50'>
                    <img src={logo} alt="" />
                </div>
                <div className='right-footer w-50'>
                    <div><p><AiOutlineCopyrightCircle/></p></div>
                    <div><p>Rockstar 2023, Made With</p></div>
                    <div><p><GiSelfLove/></p></div>
                    <div><p>By Divigreant Studio</p></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;