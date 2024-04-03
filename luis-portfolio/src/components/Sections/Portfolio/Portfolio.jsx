// Import React and the ProjectComponent
import React from 'react';
import ProjectComponent from '../../Project/ProjectComponent';

// Dummy data for the projects. Replace these with actual project details
const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'A brief description of Project 1...',
        imageUrl: '/path/to/image1.jpg',
        projectUrl: 'http://project1-live-url.com',
        repoUrl: 'http://github.com/project1'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'A brief description of Project 2...',
        imageUrl: '/path/to/image2.jpg',
        projectUrl: 'http://project2-live-url.com',
        repoUrl: 'http://github.com/project2'
    },
    // Add more projects as needed
];

// Define the Portfolio component
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

// Export the Portfolio component
export default Portfolio;
