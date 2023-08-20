import {React, useEffect} from 'react';
import Image from '../assets/site1.png';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Homeabout() {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <div className='homeabout'>
        <div className='homeabout-top'>
            <h3
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            >Who we are</h3>
            <div 
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            className='hr'></div>
            <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="350"
            data-aos-offset="50"
            >
                Vintage Medical Center: Where compassion and expertise converge. We are a trusted healthcare 
                institution dedicated to providing exceptional medical care. Our renowned team of professionals 
                combines skill, innovation, and a patient-centered approach to deliver comprehensive services. 
                Experience the difference of personalized, quality healthcare that puts your well-being first.
            </p>
            <Link
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos-offset="50"
            >
                Reach us <FaPhone />
            </Link>
        </div>
        <div className='homeabout-bottom'>
            <img src={Image} />
        </div>
    </div>
  )
}