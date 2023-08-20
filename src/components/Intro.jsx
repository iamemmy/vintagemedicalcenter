import {React, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='intro'>
      <div className='intro-top'>
        <h4
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="450"
        data-aos-offset="50"
        >Welcome To Vintage Medical Center</h4>
        <h1
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-offset="50"
        >We Provide Premium and Exclusive Healthcare Services.</h1>
        <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="550"
        data-aos-offset="50"
        >
          Welcome to Vintage Medical Center, where excellence meets care. Experience our premium and exclusive healthcare 
          services designed to prioritize your well-being. Our dedicated team of professionals is committed to delivering
          personalized medical attention, advanced treatments, and state-of-the-art facilities. Trust us to provide the 
          highest level of medical expertise and compassion, ensuring your health is in capable hands.
        </p>
      </div>
    </div>
  )
}