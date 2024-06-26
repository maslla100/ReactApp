// Import React and any necessary icon packages (e.g., react-icons)
import React from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

// Define the FooterComponent
const FooterComponent = () => {
    return (
        <footer className="footer-component">
            {/* Social Icons and Links */}
            <a href="https://www.linkedin.com/in/luisellamas/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/maslla100" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                <FaGithub className="social-icon" />
            </a>
            <a href="https://github.com/maslla100" target="_blank" rel="noopener noreferrer" title="Stack Overflow Profile">
                <FaStackOverflow className="social-icon" />
            </a>
        </footer>
    );
};

// Export the FooterComponent
export default FooterComponent;
