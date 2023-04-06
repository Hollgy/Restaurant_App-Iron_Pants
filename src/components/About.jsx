import React from 'react';
import image from '/public/images/about_backdrop.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about">
      <img src={image} alt="about us" />
      <p>Our company was founded in 2005 with a mission to provide high-quality products to our customers. We pride ourselves on our commitment to excellence and customer satisfaction.</p>
    </div>
  );
}

export default AboutUs;