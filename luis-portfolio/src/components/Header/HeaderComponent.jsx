// Import React and NavLink for navigation
import React from 'react';
import { NavLink } from 'react-router-dom';

// Header component definition
const HeaderComponent = () => {
    return (
        <header className="header-component">
            {/* Developer's Name */}
            <div className="developer-name">Luis Llamas</div>

            {/* Navigation Bar */}
            <nav className="navigation-bar">
                <ul>
                    {/* Navigation Items */}
                    <li><NavLink to="/about-me" activeClassName="active">About Me</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

// Export the HeaderComponent
export default HeaderComponent;
