// C:/OJT-project/src/App.jsx

import React from 'react';
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

function App() {
  return (
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
      <Footer />
    </Router>
  );
}

export default App;