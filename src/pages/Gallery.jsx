import React, { useState } from 'react';
import Footer from '../components/Footer';
import Img1 from '../assets/site1.png';
import Img2 from '../assets/site2.png';
import Img3 from '../assets/site3.png';
import Img4 from '../assets/site4.png';
import Img5 from '../assets/lab.png';
import Img6 from '../assets/site6.png';
import Img7 from '../assets/site11.png';
import Img8 from '../assets/site12.png';
import Img9 from '../assets/site13.png';
import Img10 from '../assets/theatre.png';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { url: Img1, alt: 'Image 1' },
    { url: Img2, alt: 'Image 2' },
    { url: Img3, alt: 'Image 3' },
    // { url: Img4, alt: 'Image 4' },
    // { url: Img5, alt: 'Image 5' },
    { url: Img6, alt: 'Image 6' },
    { url: Img7, alt: 'Image 7' },
    { url: Img8, alt: 'Image 8' },
    { url: Img9, alt: 'Image 9' },
    { url: Img10, alt: 'Image 10' },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleImageClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
        <div className='gallery-title'>
            <h3>Gallery</h3>
        </div>
        <div className="gallery">
            {images.map((image, index) => (
                <div
                key={index}
                className={`gallery__item ${selectedImageIndex === index ? 'gallery__item--selected' : ''}`}
                onClick={() => handleImageClick(index)}
                >
                <img src={image.url} alt={image.alt} />
                </div>
            ))}

            {selectedImageIndex !== null && (
                <div className="gallery__overlay">
                <span className="gallery__close" onClick={handleImageClose}>
                    &times;
                </span>
                <img src={images[selectedImageIndex].url} alt={images[selectedImageIndex].alt} />
                </div>
            )}
        </div>
        <Footer />
    </>
  );
};

export default Gallery;