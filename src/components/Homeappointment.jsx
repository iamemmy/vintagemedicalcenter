import {React, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Homeappointment() {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <div className='appointment-wrapper'>
        <div className='appointment-text'>
            <h3
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            >Book Appointment </h3>
            <div 
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-offset="50"
            className='hr'></div>
            <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="350"
            data-aos-offset="50"
            >
                Take control of your health journey. Book an appointment with Vintage Medical Center today and 
                experience prompt, professional, and personalized care tailored to your specific needs. Your well-being 
                is our priority. Kindly, fill the form to get started.
            </p>
        </div>
        <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-offset="50"
        className='appointment-form-wrap'>
            <form className='appointment-form'>
                <div>
                    <input type="text" placeholder="Full name" />
                    <input type="number" placeholder="Phone number" />
                    <select id="professional" name="professional">
                        <option value="general_practitioner">General Practitioner</option>
                        <option value="gynaecologist">Gynaecologist</option>
                        <option value="cardiologist">Cardiologist</option>
                        <option value="endocrinologist">Endocrinologist</option>
                        <option value="neurologist">Neurologist</option>
                        <option value="surgeon">Surgeon</option>
                    </select>
                    <input type="date" />
                </div>
                <textarea name="" id="" cols="30" rows="5" placeholder="Enter other message"></textarea>
                <button>Appointment Now</button>
            </form>
        </div>
    </div>
  )
}