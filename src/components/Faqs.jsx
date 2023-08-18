import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAccordionItem = (index, title, content) => {
    const isActive = activeIndex === index;
    const accordionClass = isActive ? 'accordion-item active' : 'accordion-item';

    return (
      <div className={accordionClass} key={index}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            onClick={() => handleAccordionClick(index)}
          >
            {title}
          </button>
        </h2>
        {isActive && (
          <div className="accordion-collapse">
            <div className="accordion-body">{content}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='emergency-faqs'>
        <div className='emergency'>
            <div className='emergency-content'>
              <h4>Emergency Hotline</h4>
              <h3>08098587274</h3>
              <p>
                  We provide 24/7 customer support. Please feel free to contact us for emergency case.
              </p>
            </div>
        </div>
        <div className='faqs'>
          <h3>FAQs</h3>
          <div className='hr'></div>
          <div className="accordion" id="accordionExample">
          {renderAccordionItem(0, 'Where is vintage medical located?', 'Vintage Medical is conveniently located at Plot 3213, F Road Citec Mount Pleasant Estate, Mbora District, Abuja.')}
          {renderAccordionItem(1, 'What are the visiting hours at Vintage Medical Center?', 'Vintage Medical Center offers flexible visiting hours to accommodate our patients needs. We are open 24 hours for visiting, and adjustments may be made based on the patients condition.')}
          {renderAccordionItem(2, 'Is Vintage Medical Center HMO accredited?', 'Yes, Vintage Medical Center is accredited by various HMOs, including United Health Care International, DOT HMO, Venus Medicare, Integrated Health Care, GNI Health Care, and more.')}
          {renderAccordionItem(3, 'Can I request a specific doctor for my appointment?', 'Yes, at Vintage Medical Center, you can request a specific doctor for your appointment. Simply book an appointment, and we will accommodate your preference whenever possible.')}
          </div>
        </div>
    </div>
  );
};

export default Faqs;