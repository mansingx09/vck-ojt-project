// C:/OJT-project/src/pages/Contact.jsx

import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        // Correctly target the heading by its class 'page-main-heading'
        const heading = document.querySelector('.page-main-heading');
        if (heading) {
            heading.classList.add('animate-on-load');
        }
    }, []);

    const kolhapurCampusVideoId = '69'; // Placeholder ID
    const embedUrl = `https://www.youtube-nocookie.com/embed/${kolhapurCampusVideoId}`;

    return (
        <div className="page-content">
            <div className="info-card">
                {/* Apply the correct class for centered and animated main headings */}
                <h2 className="page-main-heading">Contact Us</h2>
                
                {/* Use a new class for justified text */}
                <p className="justified-text-paragraph">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                
                <h3 className="section-heading-with-line">General Enquiries</h3>
                <p>Vivekanand College Main Campus</p>
                <p>Tarabai Park, Kolhapur, Maharashtra 416003, India</p>
                <p>Phone: +91 12345 67890</p>
                <p>Email: info@vivekanandcollege.edu</p>
                <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
                
                <h3 className="section-heading-with-line">Admissions Office</h3>
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: admissions@vivekanandcollege.edu</p>
                
                <h3 className="section-heading-with-line">Student Support Services</h3>
                <p>For current student support, academic advising, or general assistance:</p>
                <p>Phone: +91 87654 32109</p>
                <p>Email: studentsupport@vivekanandcollege.edu</p>
                
                <h2 className="section-heading-with-line">Find Us on the Map</h2>
                <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                <p style={{marginBottom: '0'}}>
                    <a
                        href="https://www.google.com/maps/search/Vivekanand+College+Kolhapur/@16.7028594,74.2257256,17z/data=!3m1!4b1?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link-text"
                    >
                        View on Google Maps
                    </a>
                </p>

                <h2 className="section-heading-with-line">Send Us a Message</h2>
                <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
            </div>
        </div>
    );
};

export default Contact;