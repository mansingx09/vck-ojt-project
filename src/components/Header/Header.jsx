// // src/components/Header.jsx
// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// // You'll need to install react-icons if you don't have it: npm install react-icons
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="header">
//       {/* College Name on the Left */}
//       <Link to="/" className="college-name">
//         Vivekanand College
//       </Link>

//       {/* Hamburger menu for mobile (hidden on desktop) */}
//       <div className="hamburger-menu" onClick={toggleMobileMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       {/* Navigation Links and Apply Now Button on the Right */}
//       {/* The 'open' class will be added/removed based on mobile menu state */}
//       <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
//         <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
//         <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
//         <NavLink to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</NavLink>
//         <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
//         {/* The 'Apply Now!' button is also part of the right-aligned group */}
//         <Link to="/admissions" className="apply-now-btn" onClick={() => setIsMobileMenuOpen(false)}>Apply Now!</Link>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
//           <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
//             <FaTimes className="close-btn" onClick={toggleMobileMenu} />
//             <nav className="nav-links-mobile">
//               <Link to="/" onClick={toggleMobileMenu}>Home</Link>
//               <Link to="/about" onClick={toggleMobileMenu}>About</Link>
//               <Link to="/courses" onClick={toggleMobileMenu}>Courses</Link>
//               <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
//               <Link to="/admissions" className="apply-now-btn" onClick={toggleMobileMenu}>Apply Now!</Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

// / src/components/Header/Header.jsx
import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <header className="main-header">
      {" "}
      {/* Add a wrapper for header content */}
      <div className="college-name">
        <Link to="/">Vivekanand College</Link>{" "}
        {/* College Name/Logo for desktop & mobile */}
      </div>
      {/* Desktop Navigation */}
      <nav className="navbar desktop-nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/courses" className="nav-item">
          Courses
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/admissions" className="nav-item btn primary-btn">
          Apply Now!
        </Link>{" "}
        {/* Apply Now button */}
      </nav>
      {/* Mobile Hamburger Button */}
      <button className="hamburger-menu" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      {/* Mobile Drawer Navigation */}
      <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
        <button className="close-drawer-btn" onClick={toggleDrawer}>
          ✕
        </button>
        <Link to="/" className="nav-item" onClick={closeDrawer}>
          Home
        </Link>
        <Link to="/about" className="nav-item" onClick={closeDrawer}>
          About
        </Link>
        <Link to="/courses" className="nav-item" onClick={closeDrawer}>
          Courses
        </Link>
        <Link to="/contact" className="nav-item" onClick={closeDrawer}>
          Contact
        </Link>
        <Link
          to="/admissions"
          className="nav-item btn primary-btn"
          onClick={closeDrawer}
        >
          Apply Now!
        </Link>
      </nav>
      {/* Overlay when drawer is open */}
      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
    </header>
  );
}
export default Header;
