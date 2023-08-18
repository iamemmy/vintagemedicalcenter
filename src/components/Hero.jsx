import React from 'react';
import { Link } from 'react-router-dom';
import Bg from '../assets/img1.jpg';

export default function Hero() {
  return (
    <div className='hero-container'>
        <img src={Bg} alt="background image" />
        <div className='hero-overlay'></div>
        <div className="hero-content">
            <p>Vintage Medical Center</p>
            <h4>Experience Healthcare at it's Best</h4>
            <div className="hero-cta">
                <Link to="/appointment">Appointment</Link>
                <Link to="tel:08098587274">Emergency</Link>
            </div>
        </div>
    </div>
  )
}