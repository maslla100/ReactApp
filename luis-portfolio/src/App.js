import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import NavigationComponent from './components/Navigation/NavigationComponent';
import AboutMe from './components/Sections/AboutMe/AboutMe';
import Portfolio from './components/Sections/Portfolio/Portfolio';
import Resume from './components/Sections/Resume/Resume';
import Contact from './components/Sections/Contact/Contact';
// Import CSS styles for components
import './components/Sections/Contact/Contact.css'
import './components/Header/HeaderComponent.css';
import './components/Footer/FooterComponent.css';
import './components/Navigation/NavigationComponent.css';
import './components/Project/ProjectComponent.css';
import './components/Sections/AboutMe/AboutMe.css';
import './components/Sections/Portfolio/Portfolio.css';
import './components/Sections/Resume/Resume.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <NavigationComponent />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
