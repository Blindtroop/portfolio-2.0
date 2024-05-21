// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Import the CSS file for styling

function ProjectCard({ image, title, description }) {
    return (
        <div className="project-card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-text">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="view-project">View Project</button>
            </div>
        </div>
    );
}

export default ProjectCard;
