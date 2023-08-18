import React from 'react';
import Icon1 from '../assets/icon12.png';
import Icon2 from '../assets/icon13.png';

export default function Reviews() {
  return (
    <div className='reviews-wrapper'>
        <h3>Reviews</h3>
        <div className='hr'></div>
        <div className='reviews'>
            <div className='reviews-item'>
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
            <div className='reviews-item'>
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
            <div className='reviews-item'>
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