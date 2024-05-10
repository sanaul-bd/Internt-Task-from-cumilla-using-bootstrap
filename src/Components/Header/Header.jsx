import React from 'react';
// import logo from '../../assets/image/logo.jpg'
import logo from '../../assets/image/blackLogo.jpg'
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mainHeader'>
            {/* menu logo heare */}
            <nav className='header'>
                <img src={logo} alt="logo" />
            </nav>
            {/* there is all of */}
            <menu className='menu'>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Portfolios">Portfolios</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/BuyRokstar">Buy Rokstar</Link>
            </menu>
        </div>
    );
};

export default Header;