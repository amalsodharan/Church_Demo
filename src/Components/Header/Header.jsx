import React from 'react'
import './Header.css';
import logo from './churchlogo.png';

function Header() {
  return (
    <div className='head-main'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
      <div className="menu">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Patron Saint</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
