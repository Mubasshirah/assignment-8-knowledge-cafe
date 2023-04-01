import React from 'react';
import './Header.css'
import logo from '../../images/logo.avif'
const Header = () => {
    return (
        <div className='header'>
          <h2>Knowledge <span>HUB</span></h2>  
          <img src={logo} alt="" />
        </div>
    );
};

export default Header;