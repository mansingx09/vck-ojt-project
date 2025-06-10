// src/components/MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <div className="close-icon" onClick={toggleMenu}>
        × {/* Close (X) icon */}
      </div>
      <ul>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/admissions" className="apply-now" onClick={toggleMenu}>Apply Now!</Link></li>
      </ul>
    </div>
  );
};

export default MobileMenu;