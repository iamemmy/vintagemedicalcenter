import {React, useEffect} from 'react';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/icon2.png';
import Icon3 from '../assets/icon13.png';
import Icon4 from '../assets/icon4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Choose() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    
    <div className='choose-wrap'>
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          data-aos-offset="50"
        >Why Choose Us</h3>
        <div 
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="50"
        className='hr'></div>
        <div className='choose-bottom'>
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            className='choose-item'>
              <div className='choose-item-circle'>
                <div>
                  <img src={Icon1} />
                </div>
              </div>
              <p>Quality Service</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            className='choose-item'>
              <div className='choose-item-circle'>
                <div>
                  <img src={Icon2} />
                </div>
              </div>
              <p>Premium Facilities</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            className='choose-item'>
              <div className='choose-item-circle'>
                <div>
                  <img src={Icon3} />
                </div>
              </div>
              <p>Positive Reviews</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            className='choose-item'>
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
