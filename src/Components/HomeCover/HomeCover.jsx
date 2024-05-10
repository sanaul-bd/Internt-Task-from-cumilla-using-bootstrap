import React from 'react';
import './HomeCover.css'
import rightImg from '../../assets/image/ab31d07e-1036-4b96-81e5-ec50a84557f0.jpg'

const HomeCover = () => {
    return (
        <div className='rootCover'>
            {/* left content */}
            <div className='cover-left'>
                <h2>I'M LUCY DOE</h2>
                <h6>WEB DEVELOPER</h6>
            </div>
            {/* right img content */}
            <div className='cover-right'>
                <img src={rightImg} alt="" />
            </div>
        </div>
    );
};

export default HomeCover;