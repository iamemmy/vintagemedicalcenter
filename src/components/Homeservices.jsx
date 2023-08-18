import React from 'react';
import Image from '../assets/site3.png';
import Icon1 from '../assets/icon5.png';
import Icon2 from '../assets/icon6.png';
import Icon3 from '../assets/icon7.png';
import Icon4 from '../assets/icon8.png';
import Icon5 from '../assets/icon9.png';
import Icon6 from '../assets/icon10.png';
import Icon7 from '../assets/icon11.png';

export default function Homeservices() {
  return (
    <div className='homeservices'>
      <div className='homeservices-img'>
          <img src={Image} />
      </div>
      <div className='homeservices-itemswrap'>
        <h3>Our Services</h3>
        <div className='hr'></div>
        <div className='homeservices-items'>
          <div>
            <img src={Icon1} />
            <p>General Consultancy</p>
          </div>
          <div>
            <img src={Icon3} />
            <p>Antenatal Care</p>
          </div>
          <div>
            <img src={Icon4} />
            <p>Surgery</p>
          </div>
          <div>
            <img src={Icon2} />
            <p>Gynacare & Obstetrics</p>
          </div>
          <div>
            <img src={Icon5} />
            <p>Laboratory</p>
          </div>
          <div>
            <img src={Icon6} />
            <p>Ultrasound Scan</p>
          </div>
          <div>
            <img src={Icon7} />
            <p>Pharmacy</p>
          </div>
        </div>
      </div>
    </div>
  )
}