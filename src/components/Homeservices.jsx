import {React, useEffect} from 'react';
import Image from '../assets/site3.png';
import Icon1 from '../assets/icon5.png';
import Icon2 from '../assets/icon6.png';
import Icon3 from '../assets/icon7.png';
import Icon4 from '../assets/icon8.png';
import Icon5 from '../assets/icon9.png';
import Icon6 from '../assets/icon10.png';
import Icon7 from '../assets/icon11.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Homeservices() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='homeservices'>
      <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
      data-aos-offset="50"
      className='homeservices-img'>
          <img src={Image} />
      </div>
      <div className='homeservices-itemswrap'>
        <h3
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="50"
        >Our Services</h3>
        <div 
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="50"
        className='hr'></div>
        <div className='homeservices-items'>
          <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="350"
          data-aos-offset="50"
          >
            <img src={Icon1} />
            <p>General Consultancy</p>
          </div>
          <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="370"
          data-aos-offset="50"
          >
            <img src={Icon3} />
            <p>Antenatal Care</p>
          </div>
          <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="390"
          data-aos-offset="50"
          >
            <img src={Icon4} />
            <p>Surgery</p>
          </div>
          <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="410"
          data-aos-offset="50"
          >
            <img src={Icon2} />
            <p>Gynacare & Obstetrics</p>
          </div>
          <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="430"
          data-aos-offset="50"
          >
            <img src={Icon5} />
            <p>Laboratory</p>
          </div>
          <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="450"
          data-aos-offset="50"
          >
            <img src={Icon6} />
            <p>Ultrasound Scan</p>
          </div>
          <div
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="470"
          data-aos-offset="50"
          >
            <img src={Icon7} />
            <p>Pharmacy</p>
          </div>
        </div>
      </div>
    </div>
  )
}