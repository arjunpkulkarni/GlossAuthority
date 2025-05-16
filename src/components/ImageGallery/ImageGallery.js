import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  // Replace with actual image paths
  const images = [
    { id: 1, src: '/gallery-img1-placeholder.jpg', alt: 'Detailing Image 1' },
    { id: 2, src: '/gallery-img2-placeholder.jpg', alt: 'Detailing Image 2' },
    { id: 3, src: '/gallery-img3-placeholder.jpg', alt: 'Detailing Image 3' },
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