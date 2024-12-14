import React from 'react';
import './Project.css';

function Projects() {
    const project = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
        { title: 'Project 3', description: 'Description of project 3' },
    ];

    return (
        <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
            {project.map((project, index) => (
            <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Projects;
