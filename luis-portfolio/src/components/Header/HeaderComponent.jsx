import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header className="header-component">
            <div className="developer-name">Luis Llamas</div>
            <nav className="navigation-bar">
                <ul>
                    <li>
                        <NavLink
                            to="/about-me"
                            className={({ isActive }) => (isActive ? 'active' : undefined)}
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) => (isActive ? 'active' : undefined)}
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'active' : undefined)}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) => (isActive ? 'active' : undefined)}
                        >
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
