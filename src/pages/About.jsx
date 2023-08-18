import React from 'react'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
        </div>
      </div>

      <div className='about-intro'>
        <h3>About Us</h3>
        <p>
          Welcome to Vintage Medical Center: Your Trusted Healthcare Destination in Abuja <br /><br />

          Located at Plot 3213, F Road Citec Mount Pleasant Estate, Mbora District, Abuja, Vintage Medical Center stands as a beacon of exceptional healthcare services in the region. Our commitment to providing top-notch medical care, coupled with a patient-centric approach, sets us apart as a leading healthcare institution.

          Comprehensive Services for Holistic Care <br /><br />

          Vintage Medical Center offers a wide range of comprehensive healthcare services designed to address the diverse needs of our patients. From general consultations and preventive care to specialized treatments and surgical procedures, our team of experienced physicians and healthcare professionals are dedicated to ensuring your well-being.

          Patient-Centered Approach <br /><br />

          At Vintage Medical Center, we believe that healthcare is not just about treating ailments; it is about forging meaningful connections with our patients. We prioritize building trust through open communication, active listening, and involving patients in their healthcare decisions. Our compassionate and empathetic approach ensures that you feel valued, heard, and supported throughout your healthcare journey.

          State-of-the-Art Facilities and Technology <br /><br />

          To deliver the highest standard of care, Vintage Medical Center boasts state-of-the-art facilities and leverages advanced medical technology. Our modern diagnostic equipment enables accurate assessments, precise diagnoses, and efficient treatment planning. Additionally, our in-house pharmacy ensures convenient access to medications and expert guidance from our knowledgeable pharmacists.

          Visit Vintage Medical Center <br /><br />

          We invite you to experience the exceptional care and personalized attention at Vintage Medical Center. Whether you require routine check-ups, specialized care, or emergency medical services, our dedicated team is here to serve you. Schedule an appointment with us today and let us be your trusted partner on your path to optimal health and well-being.
        </p>
        <div className='about-intro-bottom'>
          {/* Our Mission */}
          <div>
            <h4>Our Mission</h4>
            <p>
              To provide exceptional care, promote healing, and enhance well-being through compassion, innovation, and 
              excellence in healthcare.
            </p>
          </div>

          {/* Our Vision */}
          <div>
            <h4>Our Vision</h4>
            <p>
              To be the leading healthcare institution, committed to exceptional patient care, and fostering a culture 
              of compassion, innovation, and collaboration. Our vision is to promote health, well being, and improve 
              lives within our community and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className='md-profile'>
        <Link to="https://drive.google.com/file/d/1-B7uV5Jjpt2Rf8Gso_kHi1x5GXng12hd/view?usp=drivesdk">View our MD's profile &#10230;</Link>
      </div>

      <Footer />
    </>
  )
}