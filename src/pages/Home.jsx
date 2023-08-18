import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Homeabout from '../components/Homeabout'
import Choose from '../components/Choose'
import Homeservices from '../components/Homeservices'
import Reviews from '../components/Reviews'
import Appointment from '../components/Homeappointment'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Homeabout />
      <Choose />
      <Homeservices />
      <Reviews />
      <Appointment />
      <Faqs />
      <Footer />
    </div>
  )
}