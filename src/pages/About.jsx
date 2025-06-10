// src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
    // State to control when the animation should start for the main heading
    const [animateAboutHeading, setAnimateAboutHeading] = useState(false); // Correct state variable

    // Effect to trigger the animation when the component mounts
    useEffect(() => {
        setAnimateAboutHeading(true); // Set the correct state variable to true
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="page-content">
            <div className="info-card"> {/* Only one info-card wrapping ALL content now */}
                {/* Apply 'animate-on-load' class conditionally based on the CORRECT state */}
                <h2 className={`page-main-heading ${animateAboutHeading ? 'animate-on-load' : ''}`}>About Vivekanand College</h2> {/* MODIFIED HERE: Used animateAboutHeading */}
                {/* The main "About Vivekanand College" paragraphs that should be centered */}
                <p className="centered-about-paragraph">Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p>
                <p className="centered-about-paragraph">Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>
                
                <h3 className="section-heading-with-line">Our Mission</h3>
                <p>To provide high-quality, accessible education across various disciplines.</p>
                <ul>
                    <li>To foster research, innovation, and creativity among students and faculty.</li>
                    <li>To cultivate a diverse and inclusive learning environment.</li>
                    <li>To instill strong ethical values and leadership qualities.</li>
                </ul>

                <h3 className="section-heading-with-line">Our Values</h3>
                <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>

                <h3 className="section-heading-with-line">Our History</h3>
                <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
            </div> {/* End of the single info-card */}
        </div>
    );
};

export default About;