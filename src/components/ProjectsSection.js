import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css'

function ProjectsSection() {
  return (
        <div className="projects-container" id="projects">
            <div className="projects-title">
                <i className="material-icons-outlined">code</i>
                <h1>Projects</h1>
            </div>
            <div className="projects-content">
                <div className="projects-text">
                    This what I am listening to now!
                </div>
                <ProjectCard props={{img: "pic1.jpg", title:"Boom1", skills:["Java", "C++"], type:"left"}}/>
                <ProjectCard props={{img: "pic1.jpg", title:"Boom2", skills:["Java", "Python"], type:"right"}}/>
                <ProjectCard props={{img: "pic1.jpg", title:"Boom3", skills:["Javascript", "Python"], type:"left"}}/>
            </div>
        </div>
  );
}

export default ProjectsSection;
