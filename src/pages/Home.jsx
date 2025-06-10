// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
const Home = () => {
  const [animatingImageId, setAnimatingImageId] = useState(null);

  const handleImageClick = (imageId) => {
    setAnimatingImageId(imageId);
    setTimeout(() => {
      setAnimatingImageId(null);
    }, 300);
  };

  return (
    <div className="page-content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Vivekanand College, Kolhapur!</h1>
          <h2 className="hero-text-tagline">Your journey to excellence starts here.</h2>
          <Link to="/admissions" className="college-button hero-button">Apply Now!</Link>
        </div>
      </div>

      <div className="info-card">
        <p>Vivekanand College is a premier educational institution committed to academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], our college has consistently served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
      </div>

      <div className="info-card">
        <h2>Why Choose Vivekanand College?</h2>
        <ul>
          <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
          <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
          <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
          <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
          <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
        </ul>
      </div>

      <div className="info-card">
        <h2>Campus Life & Facilities</h2>
        <div className="campus-images-container">
          <img
            src="/images/hero-background.jpeg"
            alt="Vivekanand College Campus View 1"
            className={`campus-feature-image ${animatingImageId === 'image1' ? 'is-animating' : ''}`}
            onClick={() => handleImageClick('image1')}
          />
          <img
            src="/images/background.jpeg"
            alt="Vivekanand College Campus View 2"
            className={`campus-feature-image ${animatingImageId === 'image2' ? 'is-animating' : ''}`}
            onClick={() => handleImageClick('image2')}
          />
        </div>
        <p className="campus-description-text">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        
        <div className="explore-courses-section">
          <p className="explore-courses-text">Ready to explore our courses?</p>
          <Link to="/courses" className="college-button explore-button">Explore Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;