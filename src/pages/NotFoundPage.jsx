// C:/OJT-project/src/pages/NotFoundPage.jsx

import React from "react";
import { Link } from "react-router-dom";
// CHANGE THIS LINE:
// From: import "../NotFoundPage.css";
// To:
import "./NotFoundPage.css"; // Corrected path (same directory)

const NotFoundPage = () => {
  return (
    <div className="page-content" style={{ textAlign: "center", padding: "50px" }}>
      <div className="info-card">
        <h1>404 - Page Not Found!</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="college-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;