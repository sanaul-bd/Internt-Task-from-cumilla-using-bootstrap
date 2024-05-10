import React from 'react';
import './PortFoliosAll.css'
import img1 from '../../assets/PortfolioAll/1.jpg'
import img2 from '../../assets/PortfolioAll/2.jpg'
import img3 from '../../assets/PortfolioAll/3.jpg'
import img4 from '../../assets/PortfolioAll/4.jpg'
import img5 from '../../assets/PortfolioAll/5.jpg'
import img6 from '../../assets/PortfolioAll/6.jpg'

const PortFoliosAll = () => {
    return (
        <div className='p-all'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </div>
    );
};

export default PortFoliosAll;