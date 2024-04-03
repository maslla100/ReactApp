// Import React and any necessary styles
import React from 'react';
import './Resume.css'; // Make sure to create a corresponding CSS file for styling

/**
 * Resume component showcases the professional experience, education, certifications,
 * and downloadable resume of Luis Llamas.
 */
const Resume = () => {
    return (
        <div className="resume-section">
            <h2>Resume</h2>

            {/* Professional Experience */}
            <div className="experience">
                <h3>Professional Experience</h3>
                <ul>
                    {/* List each position held, along with company, timeframe, and key accomplishments */}
                    <li>
                        <strong>Board Director – VP of Technology, Arbitrage Trade Analytics</strong> <em>(10/2022 - Present)</em>
                        <p>Innovated comprehensive IT roadmaps, optimized CI/CD pipelines, and led AI/ML product development strategies.</p>
                    </li>
                    <li>
                        <strong>Senior Cloud Solutions Architect, IBM</strong> <em>(10/2014 - 10/2022)</em>
                        <p>Directed cloud migration initiatives, architected solutions across diverse sectors, and spearheaded digital transformation efforts.</p>
                    </li>
                    {/* Additional experiences */}
                </ul>
            </div>

            {/* Education */}
            <div className="education">
                <h3>Education</h3>
                <ul>
                    {/* List educational background */}
                    <li>
                        <strong>Saint Edwards University</strong> - Computer Systems Management
                    </li>
                    <li>
                        <strong>University of Texas</strong> - 24-week Full Stack Developer Bootcamp
                    </li>
                </ul>
            </div>

            {/* Certifications */}
            <div className="certifications">
                <h3>Certifications</h3>
                <ul>
                    {/* List certifications */}
                    <li>VMware Certified Professional</li>
                    <li>AWS Certified Solutions Architect</li>
                    <li>Cisco CCNA</li>
                    {/* Additional certifications */}
                </ul>
            </div>

            {/* Downloadable Resume */}
            <div className="download-resume">
                <h3>Download My Resume</h3>
                <p><a href="/path/to/downloadable/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a></p>
            </div>
        </div>
    );
};

export default Resume;
