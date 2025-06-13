// C:/OJT-project/src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// --- CORRECT THESE IMPORT PATHS ---
// Change from "./pages/Home/Home" to "./pages/Home" (or "./pages/Home.jsx")
import Home from "./pages/Home"; // Corrected path
import About from "./pages/About"; // Corrected path
import Courses from "./pages/Courses"; // Corrected path
import Contact from "./pages/Contact"; // Corrected path
import Admissions from "./pages/Admissions"; // Corrected path
import NotFoundPage from "./pages/NotFoundPage"; // Corrected path

// Import the main global CSS file from the src/ folder
import './index.css';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';

function App() {
    const [showPopup, setShowPopup] = useState(true);
    const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Mansing Tanaji Shelake"
          studentPhotoUrl="/images/image_01.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ChatbotComponent/>
      <Footer />
    </Router>
    </>


  );
}

export default App;