import React from 'react'
import Footer from '../components/Footer'

export default function Hmo() {
  return (
    <>
      <div className='hmo-intro'>
        <h3>We are HMO accreditted</h3>
        <p>
          As a testament to our commitment to quality care, we are proud to be HMO accredited, ensuring that our 
          services meet the highest standards of healthcare excellence and patient satisfaction.
        </p>
      </div>

      <div className='hmo-list'>
        <p>United Health Care Int'l</p>
        <p>DOT HMO</p>
        <p>Venus Medicare</p>
        <p>Integrated Health Care</p>
        <p>GNI Health Care </p>
        <p>Zuma Health Care</p>
        <p>Novo Health Care</p>
        <p>HYGEA</p>
      </div>

      <Footer />
    </>
  )
}