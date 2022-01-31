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
                <ProjectCard props={{img: "pic1.jpg", title:"Boom1", content:["Boom this is sikhndfiuhweiashnfasdncfjanuicnawencqnc ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE"], skills:["Java", "C++"], type:"left", git:"https://github.com/s-shanky-k"}}/>
                <ProjectCard props={{img: "pic1.jpg", title:"Boom2", content:["Boom this is sikhndfiuhweiashnfasdncfjanuicnawencqnc", "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE",  "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE"], skills:["Java", "Python"], type:"right",  git:"https://github.com/s-shanky-k"}}/>
                <ProjectCard props={{img: "pic1.jpg", link:"https://brittanychiang.com/", title:"Boom3", content:["Boom this is sikhndfiuhweiashnfasdncfjanuicnawencqnc", "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE",  "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE"], skills:["Javascript", "Python"], type:"left",  git:"https://github.com/s-shanky-k"}}/>
            </div>
        </div>
  );
}

export default ProjectsSection;
