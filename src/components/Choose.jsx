import React from 'react';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon3.png';
import Icon4 from '../assets/icon4.png';

export default function Choose() {
  return (
    
    <div className='choose-wrap'>
        <h3>Why Choose Us</h3>
        <div className='hr'></div>
        <div className='choose-bottom'>
            <div className='choose-item'>
            <img src={Icon1} />
            <p>Quality Service</p>
            </div>
            <div className='choose-item'>
            <img src={Icon2} />
            <p>Premium Facilities</p>
            </div>
            <div className='choose-item'>
            <img src={Icon3} />
            <p>Positive Reviews</p>
            </div>
            <div className='choose-item'>
            <img src={Icon4} />
            <p>Excellent Location</p>
            </div>
        </div>
    </div>
  )
}
