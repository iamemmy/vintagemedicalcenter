import React from 'react';
import Footer from '../components/Footer';
import CustomMap from '../components/CustomMap';
import Icon1 from '../assets/call.png';
import Icon2 from '../assets/location.png';

export default function Contact() {
  return (
    <>
      <div className='contact-intro'>
        <p>
          We're here to assist you. Contact Vintage Medical Center for any inquiries, appointment scheduling, or to 
          address your healthcare needs. Our friendly team is ready to provide prompt and helpful assistance.
        </p>
      </div>

      <div>
        {/* Form */}
        <div className='contact-main'>

          <form className='contact-form'>
            <div>
              <input type="text" placeholder="Full name" />
              <input type="number" placeholder="Phone number" />
              <input type="email" placeholder="Email address" />
              <input type="date" />
            </div>
            <textarea name="" id="" cols="30" rows="5" placeholder="Enter other message"></textarea>
            <button>Submit</button>
          </form>

          <div className='contact-map'>
            <CustomMap /> {/* Use the renamed component */}
          </div>

        </div>
      </div>

      <div className='contact-location'>
        <div className='contact-location-1'>
          <img src={Icon1} />
          <p>08098587274</p>
        </div>
        <div className='contact-location-2'>
          <img src={Icon2} />
          <p>Plot 3213, F Road Citec Mount Pleasant Estate, Mbora District, Abuja</p>
        </div>
      </div>

      <Footer />
    </>
  );
}