import React from 'react';
import './Header.css'
import myLogo from '../../images/icons/logo.png'
import myImage from '../../images/header.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header-container' style={{ height: '300px', background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${myImage})`, backgroundSize: 'cover' }}>
            <nav className='nav'>
                <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px' }}>
                    <li>
                        <img style={{ filter: ' hue-rotate(100deg) brightness(10000%)' }} width='100px' src={myLogo} alt="" />
                    </li>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/book'>Book</Link>
                    </li>
                </ul>
            </nav>
            <div className='tite-container' >
                <h1 style={{ color: 'yellow' }}>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;