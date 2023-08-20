import {React, useEffect} from 'react';
import Icon1 from '../assets/icon12.png';
import Icon2 from '../assets/icon13.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Reviews() {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <div className='reviews-wrapper'>
        <h3
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="50"
        >Reviews</h3>
        <div 
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="50"
        className='hr'></div>
        <div className='reviews'>
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="350"
            data-aos-offset="50"
            className='reviews-item'>
                <h4>Agu Ifeoma</h4>
                <div className='reviews-star'>
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                </div>
                <p>
                    Vintage Medical Center provided exceptional care with a personal touch. Highly recommend their 
                    top-notch expertise and compassionate staff.
                </p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="350"
            data-aos-offset="50"
             className='reviews-item'>
                <h4>Keneth Ocheme</h4>
                <div className='reviews-star'>
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                </div>
                <p>
                    Impressed by Vintage Medical Center's professionalism and attention to detail. Their outstanding 
                    care exceeded my expectations.
                </p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="350"
            data-aos-offset="50"
            className='reviews-item'>
                <h4>Kunle Jenifer</h4>
                <div className='reviews-star'>
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon1} />
                    <img src={Icon2} />
                </div>
                <p>
                    Grateful for Vintage Medical Center's expert care and compassionate staff. Highly recommended for 
                    their exceptional service.
                </p>
            </div>
        </div>
    </div>
  )
}