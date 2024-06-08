// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Import the CSS file for the section styling
import ProjectCard from './ProjectCard'; // Import the reusable card component

import image1 from './assets/image1.png'; // Adjust the path as needed
import image2 from './assets/image2.png'; // Adjust the path as needed
import image3 from './assets/image3.png'; // Adjust the path as needed

function Projects() {
    return (
        <section className="projects-section" id='projects'>
            <h2>My Projects</h2>
            <div className="projects-cards-container">
                <ProjectCard
                    image={image1}
                    title="Gamespot"
                    description="Trial project for a modern gaming website"
                    link="https://gamespot-kaluhi.vercel.app/"
                />
                <ProjectCard
                    image={image2}
                    title="Lance Jersey Store"
                    description="One Stop Shop for all your Jersey needs"
                    link="https://jersey-store-react.vercel.app/"
                />
                <ProjectCard
                    image={image3}
                    title="Share My Space"
                    description="Online Room finding and sharing platform"
                    link="https://sharemyspace.000webhostapp.com/"
                />
            </div>
        </section>
    );
}

export default Projects;
