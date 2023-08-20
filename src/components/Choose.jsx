import React from 'react';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon13.png';
import Icon4 from '../assets/icon4.png';

export default function Choose() {
  return (
    
    <div className='choose-wrap'>
        <h3>Why Choose Us</h3>
        <div className='hr'></div>
        <div className='choose-bottom'>
            <div className='choose-item'>
              <div className='choose-item-circle'>
                <div>
                  <img src={Icon1} />
                </div>
              </div>
              <p>Quality Service</p>
            </div>
            <div className='choose-item'>
              <div className='choose-item-circle'>
                <div>
                  <img src={Icon2} />
                </div>
              </div>
              <p>Premium Facilities</p>
            </div>
            <div className='choose-item'>
              <div className='choose-item-circle'>
                <div>
                  <img src={Icon3} />
                </div>
              </div>
              <p>Positive Reviews</p>
            </div>
            <div className='choose-item'>
              <div className='choose-item-circle'>
                <div>
                  <img src={Icon4} />
                </div>
              </div>
              <p>Excellent Location</p>
            </div>
        </div>
    </div>
  )
}
