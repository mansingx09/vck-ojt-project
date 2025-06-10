import React, { useState, useEffect } from 'react'; // <--- IMPORT useState and useEffect
import { useNavigate } from 'react-router-dom';

function ApplyNow() {
  const navigate = useNavigate();

  // 1. Add state to control the animation
  const [animateHeading, setAnimateHeading] = useState(false);

  // 2. Add useEffect to trigger the animation on component mount
  useEffect(() => {
    setAnimateHeading(true);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="page-content">
      <div className="info-card">
        {/* The conditional class application is already correct for the state variable */}
        <h1 className={`page-main-heading ${animateHeading ? 'animate-on-load' : ''}`} >Admissions at Vivekanand College</h1>
        <p>
          Welcome to the Admissions page of Vivekanand College! We are delighted you're
          considering joining our vibrant academic community. Our admission process is
          designed to be straightforward and accessible.
        </p>
        <p>
          Please review the eligibility criteria and key dates below for the upcoming academic year.
          For any queries, feel free to contact our admissions office.
        </p>
      </div>

      <div className="info-card">
        <h2>Eligibility Criteria for Undergraduate Programs</h2>
        <div className="table-container">
          <table className="program-table">
            <thead>
              <tr>
                <th>Program</th>
                <th>Minimum Qualification</th>
                <th>Required Subjects</th>
                <th>Minimum Marks (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.Sc. Computer Science</td>
                <td>10+2 (or equivalent)</td>
                <td>Physics, Chemistry, Maths</td>
                <td>50</td>
              </tr>
              <tr>
                <td>B.Com. Accounting & Finance</td>
                <td>10+2 (or equivalent)</td>
                <td>Commerce Stream</td>
                <td>45</td>
              </tr>
              <tr>
                <td>B.A. English Literature</td>
                <td>10+2 (or equivalent)</td>
                <td>Any Stream</td>
                <td>40</td>
              </tr>
              {/* Add more as needed */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="info-card apply-process">
        <h2>Application Process</h2>
        <ol>
          <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li>
          <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
          <li><strong>Entrance Exam (if applicable):</strong> Appear for the college's entrance examination.</li>
          <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
          <li><strong>Fee Payment:</strong> Complete the admission by paying the required fees.</li>
        </ol>
        <p>
          For detailed information on postgraduate program admissions, specific program
          syllabi, and fee structures, please visit our{' '}
          <span className="nav-link-text" onClick={() => navigate('/courses')}>Courses page</span> or{' '}
          <span className="nav-link-text" onClick={() => navigate('/contact')}>Contact us</span> directly.
        </p>
      </div>
    </div>
  );
}

export default ApplyNow;