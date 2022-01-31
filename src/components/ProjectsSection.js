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
                <ProjectCard props={{img: "pic1.jpg", title:"Boom1", content:["Boom this is sikhnd fiuhweias hnfasdn cfjan uicna wenc qnc ioqnnc ejo wqnofncq oijeifjhaK LMCMAIJFQEOI WJFIONE"], skills:["Java", "C++"], type:"left", git:"https://github.com/s-shanky-k"}}/>
                <ProjectCard props={{img: "pic1.jpg", title:"Boom2", content:["Boom this is sikhndfi uhweiash nfasdn cfjanu icnaw encqnc", "ioqn ncejowq nofn cqoijeifjh aKLMCMAIJFQ EOIWJFIONE",  "ioqnnce jowqnofnc qoijeifjhaKL MCMAIJFQEOI WJFIONE"], skills:["Java", "Python"], type:"right",  git:"https://github.com/s-shanky-k"}}/>
                <ProjectCard props={{img: "pic1.jpg", link:"https://brittanychiang.com/", title:"Boom3", content:["Boom this is sik hndfi uhweiash nfasdncfja nuicnawencqnc", "ioqnnce jowqnof ncqoijeif jhaKLMCMAIJ FQEOIWJF IONE",  "ioqnnc ejowqnofnc qoijeifjh aKLMCMAIJF QEOIWJFIONE"], skills:["Javascript", "Python"], type:"left",  git:"https://github.com/s-shanky-k"}}/>
            </div>
        </div>
  );
}

export default ProjectsSection;
