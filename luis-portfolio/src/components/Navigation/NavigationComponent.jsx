// Import necessary modules from react-router-dom for routing.
import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the NavigationComponent as a functional component.
const NavigationComponent = () => {
    return (
        // This 'nav' element wraps our navigation links.
        <nav className="navigation">
            <ul>
                {/* Each 'li' contains a NavLink component from react-router-dom. */}
                {/* The 'to' prop indicates the path it's linked to. */}
                {/* The 'activeClassName' prop is used to apply styles to the currently active link. */}
                <li><NavLink to="/about-me" activeClassName="active">About Me</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
            </ul>
        </nav>
    );
};

// Export the component for use in other parts of the app.
export default NavigationComponent;
