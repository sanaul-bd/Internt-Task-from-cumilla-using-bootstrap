import React from 'react';
import HomeCover from '../HomeCover/HomeCover';
import About from '../About/About';
import Footer from '../Footer/Footer';
import GetInTouch from '../Get In Touch/GetInTouch';
import Portfolios from '../Portfolios/Portfolios';

const Home = () => {
    return (
        <>
            <HomeCover></HomeCover>
            <About></About>
            <Portfolios></Portfolios>
            <GetInTouch></GetInTouch>
            <Footer></Footer>
        </>
    );
};

export default Home;