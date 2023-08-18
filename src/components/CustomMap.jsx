import React from 'react';

function CustomMap() {
  return (
    <div>
      <iframe
        title="Google Map"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1733479588206!2d7.403394073923755!3d9.047947288694335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75d1ddbacd7b%3A0x106d0b13260e4945!2sVINTAGE%20MEDICAL%20CENTRE%2C%20CITEC%20ESTATE-ABUJA!5e0!3m2!1sen!2sng!4v1688927304891!5m2!1sen!2sng"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default CustomMap;