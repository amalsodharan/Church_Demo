import React from 'react'
import './Footer.css';
import logo from './churchlogo.png';
import log1 from './gmail.png';
import log2 from './phone-call (1).png';
import log3 from './placeholder.png';

function Footer() {
  return (
    <div className='footer-main'>
        <div className="footer-head">
            <center>
            <img src={logo} alt="logo" />
            </center>
        </div>
        <div className="footer-body">
            <div className="footer-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Patron Saint</li>
                    <li>Gallery</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div className="footer-tail">
            <div className="footer-contrast">
                <div className="footer-tail1">
                    <img src={log1} alt="log1" />
                    <img src={log2} alt="log2" />
                    <img src={log3} alt="log3" />
                </div>
                <div className="footer-tail2">
                    <p>Website ©  2024 by Amal S</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
