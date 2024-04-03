import React from 'react';
// Import the CSS for styling (ensure you create a corresponding CSS file)
import './ProjectComponent.css';

/**
 * ProjectComponent displays information about a single project.
 * It receives props for the project's title, description, image URL, live project URL, and GitHub repository URL.
 */
const ProjectComponent = ({ title, description, imageUrl, projectUrl, repoUrl }) => {
    return (
        <div className="project-container">
            <h3>{title}</h3>
            {imageUrl && <img src={imageUrl} alt={`Preview of ${title}`} />}
            <p>{description}</p>
            <div className="project-links">
                {projectUrl && (
                    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                    </a>
                )}
                {repoUrl && (
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Repository
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectComponent;
