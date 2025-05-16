import React from 'react';
import './ImageGallery.css';
import image1 from "../ImageGallery/image1.png"
import image2 from "../ImageGallery/image2.png"
import image3 from "../ImageGallery/image3.png"

const ImageGallery = () => {
  // Replace with actual image paths
  const images = [
    { id: 1, src: image1, alt: 'Detailing Image 1' },
    { id: 2, src: image2, alt: 'Detailing Image 2' },
    { id: 3, src: image3, alt: 'Detailing Image 3' },
  ];

  return (
    <section className="image-gallery-section">
      {images.map(image => (
        <div key={image.id} className="gallery-image-container">
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </div>
      ))}
    </section>
  );
};

export default ImageGallery; 