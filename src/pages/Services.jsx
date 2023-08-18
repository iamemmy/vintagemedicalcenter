import React from 'react';
import Footer from '../components/Footer';
import Img1 from '../assets/site10.jpg';
import Img2 from '../assets/site9.jpg';
import Img3 from '../assets/theatre.png';
import Img4 from '../assets/site6.png';
import Img5 from '../assets/lab.png';
import Img6 from '../assets/site8.jpg';
import Img7 from '../assets/site7.jpg';

export default function Services() {
  return (
    <>
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Services</h1>
        </div>
      </div>

      <div className='services-intro'>
        <h3>Our Services</h3>
        <p>
          Welcome to Vintage Medical Center, where we are dedicated to your well-being. Experience our comprehensive 
          services, including advanced diagnostics, personalized treatments, preventive care, and specialized surgical 
          procedures. Trust our expertise in cardiology, orthopedics, women's health, and emergency medicine for your 
          healthcare needs.
        </p>
      </div>

      <div className='services-main'>

        <div className='service'>
          <div className='service-img'>
            <img src={Img1} />
          </div>
          <div className='service-info'>
            <h4>General Consultancy</h4>
            <p>
              Our General Consultancy service at Vintage Medical Center provides expert medical advice, thorough 
              evaluations, and personalized treatment plans to address a wide range of health concerns. Trust our 
              experienced doctors for comprehensive care and guidance.
            </p>
          </div>
        </div>
        
        <div className='service'>
          <div className='service-img'>
            <img src={Img2} />
          </div>
          <div className='service-info'>
            <h4>Ante-natal Care</h4>
            <p>
              Experience comprehensive antenatal care at Vintage Medical Center. Our dedicated team provides expert 
              monitoring, prenatal assessments, and guidance to ensure a healthy and successful pregnancy for you and
               your baby.
            </p>
          </div>
        </div>

        <div className='service'>
          <div className='service-img'>
            <img src={Img3} />
          </div>
          <div className='service-info'>
            <h4>Surgery</h4>
            <p>
              Trust Vintage Medical Center for your surgical needs. Our skilled surgeons perform a wide range of 
              procedures, utilizing advanced techniques to ensure safe and successful surgeries with a focus on 
              patient well-being.
            </p>
          </div>
        </div>

        <div className='service'>
          <div className='service-img'>
            <img src={Img4} />
          </div>
          <div className='service-info'>
            <h4>Gynacare & Obstetrics</h4>
            <p>
              Vintage Medical Center excels in Gynecology and Obstetrics, providing personalized care for women's 
              health. From prenatal care to gynecological examinations, trust our experienced team for comprehensive 
              and compassionate services.
            </p>
          </div>
        </div>

        <div className='service'>
          <div className='service-img'>
            <img src={Img5} />
          </div>
          <div className='service-info'>
            <h4>Laboratory</h4>
            <p>
              At Vintage Medical Center, our state-of-the-art laboratory is equipped with cutting-edge technology to 
              deliver accurate and timely diagnostic results. Our skilled technicians perform a wide range of tests, 
              ensuring reliable and precise analysis for effective treatment and care.
            </p>
          </div>
        </div>

        <div className='service'>
          <div className='service-img'>
            <img src={Img6} />
          </div>
          <div className='service-info'>
            <h4>Ultrasound Scan</h4>
            <p>
              Experience precise and comprehensive ultrasound scans at Vintage Medical Center. Our skilled sonographers 
              utilize advanced equipment to provide accurate diagnoses and monitoring of medical conditions, ensuring 
              exceptional care for our patients.
            </p>
          </div>
        </div>

        <div className='service'>
          <div className='service-img'>
            <img src={Img7} />
          </div>
          <div className='service-info'>
            <h4>Pharmacy</h4>
            <p>
              Conveniently access a wide range of medications and expert guidance at Vintage Medical Center's pharmacy. 
              Our knowledgeable pharmacists ensure safe dispensing, promoting optimal health outcomes for our patients.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}