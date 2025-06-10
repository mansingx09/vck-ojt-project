// src/pages/Admissions.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect

// ... rest of Contact.jsx
const Admissions = () => {
    // State to control when the animation should start for the main heading
    const [animateAdmissionsHeading, setAnimateAdmissionsHeading] = useState(false);

    // Effect to trigger the animation when the component mounts
    useEffect(() => {
        setAnimateAdmissionsHeading(true);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="page-content">
            <div className="info-card">
                {/* Apply 'animate-on-load' class conditionally based on state */}
                <h2 className="page-main-heading">Admissions at Vivekanand College</h2> {/* MODIFIED HERE */}
                <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
                <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
            </div>

            <div className="info-card">
                <h3 className="section-heading-with-line">Eligibility Criteria for Undergraduate Programs</h3>
                <table>
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
                            <td>UG</td>
                            <td>B.Sc. Computer Science</td>
                            <td>10+2 (or equivalent)</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>UG</td>
                            <td>B.Com. Accounting & Finance</td>
                            <td>10+2 (or equivalent)</td>
                            <td>Commerce Stream</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>UG</td>
                            <td>B.A. English Literature</td>
                            <td>10+2 (or equivalent)</td>
                            <td>Any Stream</td>
                            <td>40%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="info-card">
                <h3 className="section-heading-with-line">Application Process</h3>
                <ol>
                    <li>**Online Application:** Fill out the application form available on our portal.</li>
                    <li>**Document Submission:** Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                    <li>**Entrance Exam (if applicable):** Appear for the college's entrance examination.</li>
                    <li>**Merit List & Interview:** Check the merit list and attend the interview if shortlisted.</li>
                    <li>**Fee Payment:** Complete the admission by paying the required fees.</li>
                </ol>
            </div>

            <div className="info-card">
                <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="/courses" className="nav-link-text">Courses page</a> or <a href="/contact" className="nav-link-text">Contact us</a> directly.</p>
            </div>
        </div>
    );
};

export default Admissions;