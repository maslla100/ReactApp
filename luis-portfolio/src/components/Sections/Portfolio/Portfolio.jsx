import React from 'react';
import ProjectComponent from '../../Project/ProjectComponent';


const projects = [
    {
        id: 1,
        title: 'customTextEditor',
        description: 'This text editor is a sophisticated, browser-based application designed to offer a seamless and efficient editing experience, even offline.',
        imageUrl: process.env.PUBLIC_URL + './texteditor.png',
        projectUrl: 'https://customtexteditor.onrender.com/',
        repoUrl: 'https://github.com/maslla100/customTextEditor'
    },
    {
        id: 2,
        title: 'Booking Management',
        description: 'BookMeLocal is a comprehensive booking management application designed to cater to customers, business owners, and administrators. ',
        imageUrl: process.env.PUBLIC_URL + './calendar.png',
        projectUrl: 'https://newbookmelocal-24f026229860.herokuapp.com/',
        repoUrl: 'https://github.com/maslla100/BookMeLocal'
    },
    {
        id: 3,
        title: 'Social Network API',
        description: 'This project is a backend API for a social network web application where users can share thoughts, react to friends thoughts, and manage a friend list. It utilizes Express.js for routing, MongoDB as the database, and Mongoose as the ODM. This application demonstrates the use of a NoSQL database to handle large amounts of unstructured data efficiently, providing a flexible schema for a social networking platform. ',
        imageUrl: process.env.PUBLIC_URL + './api.png',
        projectUrl: 'https://github.com/maslla100/socialNetworkAPI',
        repoUrl: 'https://github.com/maslla100/socialNetworkAPI'
    },
    {
        id: 4,
        title: 'TechBlog',
        description: 'TechBlog is a CMS-style blog platform where developers can publish their thoughts, tutorials, and share insights with the community. This application follows the MVC (Model-View-Controller) architecture, utilizing Express.js for the server, Sequelize as the ORM, and Handlebars.js for templating. It features user authentication, role-based access control, and CRUD operations for blog posts and comments. ',
        imageUrl: process.env.PUBLIC_URL + './api.png',
        projectUrl: 'https://myowntechblog-549706287a14.herokuapp.com/',
        repoUrl: 'https://github.com/maslla100/TechBlog'
    },
    {
        id: 5,
        title: 'e-commerce',
        description: 'This project serves as the back-end for an e-commerce website, designed to manage the complexities of online retail operations through a robust API. Built with Express.js and leveraging Sequelize as an ORM (Object-Relational Mapping) tool, it facilitates seamless interactions with a MySQL database, enabling efficient CRUD (Create, Read, Update, Delete) operations on essential entities such as products, categories, and tags. ',
        imageUrl: process.env.PUBLIC_URL + './api.png',
        projectUrl: 'https://myowntechblog-549706287a14.herokuapp.com/',
        repoUrl: 'https://github.com/maslla100/e-commerce'
    },
    {
        id: 6,
        title: 'Employee-Tracker',
        description: 'BookMeLocal is a comprehensive booking management application designed to cater to customers, business owners, and administrators. ',
        imageUrl: process.env.PUBLIC_URL + './employee.jpeg',
        projectUrl: 'https://www.loom.com/share/3a02d4f9c6d24f819f3cf35af434248c?src=composer',
        repoUrl: 'https://github.com/maslla100/Employee-Tracker'
    },
    {
        id: 7,
        title: 'Note-Taker',
        description: 'The Note Taker is a Node.js command-line application that allows users to utilize the Note Taker application and be presented with a landing page with a link to a notes page. ',
        imageUrl: process.env.PUBLIC_URL + './note.png',
        projectUrl: 'https://note-taker-llamas-bd8d16355482.herokuapp.com/',
        repoUrl: 'https://github.com/maslla100/Note-Taker'
    },
    {
        id: 8,
        title: 'SVG-Logo-Maker',
        description: 'The SVG Logo Maker is a Node.js command-line application that allows users to generate custom SVG logos. Users can select a color and shape, provide text for the logo, and save the generated SVG to a file. The application offers a choice of shapes including circles, triangles, and squares, and supports both color keywords and hexadecimal values for colors. ',
        imageUrl: process.env.PUBLIC_URL + './api.png',
        projectUrl: 'https://www.loom.com/share/ad37a47820e44aae98ed15c9840ada86?sid=f9b988bd-5cdc-43bb-95ae-2a6c84361eed',
        repoUrl: 'https://github.com/maslla100/SVG-Logo-Maker'
    },
    // Add more projects as needed
];

const Portfolio = () => {
    return (
        <div className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <ProjectComponent
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                        repoUrl={project.repoUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
