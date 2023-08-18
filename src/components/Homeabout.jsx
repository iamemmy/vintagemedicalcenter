import React from 'react';
import Image from '../assets/site1.png';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Homeabout() {
  return (
    <div className='homeabout'>
        <div className='homeabout-top'>
            <h3>Who we are</h3>
            <div className='hr'></div>
            <p>
                Vintage Medical Center: Where compassion and expertise converge. We are a trusted healthcare 
                institution dedicated to providing exceptional medical care. Our renowned team of professionals 
                combines skill, innovation, and a patient-centered approach to deliver comprehensive services. 
                Experience the difference of personalized, quality healthcare that puts your well-being first.
            </p>
            <Link>
                Reach us <FaPhone />
            </Link>
        </div>
        <div className='homeabout-bottom'>
            <img src={Image} />
        </div>
    </div>
  )
}