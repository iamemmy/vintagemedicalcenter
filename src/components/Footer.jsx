import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoBottom from '../assets/vmc.png';
import Icon1 from '../assets/icon14.png';
import Icon2 from '../assets/icon15.png';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div>
                <img src={LogoBottom} alt="Logo" />
            </div>
            <div>
                <h3>Vintage Medical Center</h3>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/appointment">Appointment</Link>
            </div>
            <div>
                <h3>Contact Us</h3>
                <Link href="tel:08098587274">Contact Us</Link>
                <Link to="">Newsletter</Link>
                <Link to="/contact">Feedback</Link>
            </div>
            <div>
                <h3>Information</h3>
                <Link to="">Health & Safety</Link>
                <Link to="/contact">Accessibility</Link>
                <Link to="/">FAQs</Link>
            </div>
        </div>

        <div className='footer-bottom'>
            <div className='footer-bottom-top'>
                <a href="">
                    <img src={Icon1} alt="" />
                </a>
                <a href="mailto:info@vintagemedicalcentre.com">
                    <img src={Icon2} alt="" />
                </a>
            </div>
            <div className='footer-bottom-bottom'>
                <div>
                    <p>&copy; Vintage Medical Center 2023. All Rights Reserved.</p>
                    <small>
                        Designed by
                        <Link to="tel:08080856786"> DHTechnology</Link>
                    </small>
                </div>
                <div>
                    <Link>&#9675; Privacy Policy</Link>
                    <Link to="/appointment">&#9675; Bookings  Appointment</Link>
                    <Link to="/services">&#9675; Services</Link>
                </div>
            </div>
        </div>
    </div>
  )
}