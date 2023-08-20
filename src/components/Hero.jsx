import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Bg from '../assets/img1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='hero-container'>
        <img src={Bg} alt="background image" />
        <div className='hero-overlay'></div>
        <div className="hero-content">
            <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="50"
            >Vintage Medical Center</p>
            <h4
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="350"
            data-aos-offset="50"
            >Experience Healthcare at it's Best</h4>
            <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-offset="50"
            className="hero-cta">
                <Link to="/appointment">Appointment</Link>
                <Link to="tel:08098587274">Emergency</Link>
            </div>
        </div>
    </div>
  )
}