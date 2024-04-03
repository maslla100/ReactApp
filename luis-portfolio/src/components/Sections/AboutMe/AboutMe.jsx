// Import React and any necessary styles
import React from 'react';
import './AboutMe.css'; // Assuming a corresponding CSS file for styling

/**
 * AboutMe component displays information about Luis Llamas, including a brief bio, professional highlights, and contact info.
 */
const AboutMe = () => {
    return (
        <div className="about-me">
            {/* Profile Image */}
            <div className="profile-image-container">
                <img src="/path/to/luis-llamas-avatar.jpg" alt="Luis Llamas" className="profile-image" />
            </div>

            {/* Bio Section */}
            <div className="bio">
                <h2>About Me</h2>
                <p>
                    Passionate about transforming ideas into reality, I have spearheaded global IT strategies as a transformational leader. With a diverse skill set in technical and managerial roles, I've boosted operational efficiency, enhanced customer satisfaction, and expanded market share across various industries. My journey in technology has been driven by a relentless pursuit of innovation, collaboration, and continuous learning.
                </p>
            </div>

            {/* Professional Highlights */}
            <div className="professional-highlights">
                <h3>Professional Highlights</h3>
                <ul>
                    <li>Expert in digital transformation, leveraging the latest in cloud computing, AI/ML, and DevOps.</li>
                    <li>Proven track record in leading complex IT projects to success, from conception through to deployment.</li>
                    <li>Strong advocate for Agile methodologies, enhancing team productivity and project deliverability.</li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
                <h3>Contact Me</h3>
                <p>Email: <a href="mailto:luis.llamas@maslla.com">luis.llamas@maslla.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/luisllamas" target="_blank" rel="noopener noreferrer">Luis Llamas</a></p>
                <p>GitHub: <a href="https://github.com/luisllamas" target="_blank" rel="noopener noreferrer">luisllamas</a></p>
            </div>
        </div>
    );
};

export default AboutMe;
