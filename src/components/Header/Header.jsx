// C:/OJT-project/src/components/Header/Header.jsx

import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Make sure Link is also imported if used for the logo/college name
import './Header.css'; // <-- ENSURE THIS LINE IS CORRECT (using './')

const Header = () => {
  return (
    <header className="header"> {/* Make sure you have a <header> element with class "header" */}
      <div className="logo-container">
        {/* Using Link for the college name to go to the home page */}
        <Link to="/" className="college-logo">
          Vivekanand College
        </Link>
      </div>
      <nav className="nav-links-container"> {/* Make sure you have a <nav> with class "nav-links-container" */}
        <ul className="nav-list"> {/* Make sure you have a <ul> with class "nav-list" */}
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Contact</NavLink>
          </li>
          <li className="nav-item">
            {/* The "Apply Now!" might go to Admissions page */}
            <NavLink to="/admissions" className="nav-link apply-now">Apply Now!</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;