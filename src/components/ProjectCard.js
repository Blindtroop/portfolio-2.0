// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ image, title, description, link }) {
    return (
        <div className="project-card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-text">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} className="view-project">View Project</a>
            </div>
        </div>
    );
}

export default ProjectCard;
