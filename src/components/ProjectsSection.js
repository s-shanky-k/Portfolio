import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css'
import ProjectsSimpleCard from './ProjectsSimpleCard';
import { useState } from "react";

function ProjectsSection() {

    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => setShowMore(!showMore);

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

                {!showMore &&
                    <button className="text-theme-cyan text-xl inline-block animate-bounce" onClick={handleShowMore}>
                        <span className='block'>Other Projects</span>
                        <i className="fas fa-angle-down text-3xl "></i>
                    </button>
                }
                {showMore &&
                <>
                    <div className="w-full h-fit gap-5 flex-wrap flex justify-center items-center">
                        <ProjectsSimpleCard props={{img: "pic1.jpg", link:"https://brittanychiang.com/", title:"Boom1", content:["Boom this is sikhnd fiuhweias hnfasdn cfjan uicna wenc qnc ioqnnc ejo wqnofncq oijeifjhaK LMCMAIJFQEOI WJFIONE"], skills:["Java", "C++"], git:"https://github.com/s-shanky-k"}}/>
                        <ProjectsSimpleCard props={{img: "pic1.jpg", title:"Boom1", content:["Boom this is sikhnd fiuhweias hnfasdn cfjan uicna wenc qnc ioqnnc ejo wqnofncq oijeifjhaK LMCMAIJFQEOI WJFIONE"], skills:["Java", "C++"], git:"https://github.com/s-shanky-k"}}/>
                        <ProjectsSimpleCard props={{img: "pic1.jpg", title:"Boom2", content:["Boom this is sikhndfi uhweiash nfasdn cfjanu icnaw encqnc", "ioqn ncejowq nofn cqoijeifjh aKLMCMAIJFQ EOIWJFIONE",  "ioqnnce jowqnofnc qoijeifjhaKL MCMAIJFQEOI WJFIONE"], skills:["Java", "Python"], git:"https://github.com/s-shanky-k"}}/>
                        <ProjectsSimpleCard props={{img: "pic1.jpg", link:"https://brittanychiang.com/", title:"Boom3", content:["Boom this is sik hndfi uhweiash nfasdncfja nuicnawencqnc", "ioqnnce jowqnof ncqoijeif jhaKLMCMAIJ FQEOIWJF IONE",  "ioqnnc ejowqnofnc qoijeifjh aKLMCMAIJF QEOIWJFIONE"], skills:["Javascript", "Python"], git:"https://github.com/s-shanky-k"}}/>
                        <ProjectsSimpleCard props={{img: "pic1.jpg", title:"Boom2", content:["Boom this is sikhndfi uhweiash nfasdn cfjanu icnaw encqnc", "ioqn ncejowq nofn cqoijeifjh aKLMCMAIJFQ EOIWJFIONE",  "ioqnnce jowqnofnc qoijeifjhaKL MCMAIJFQEOI WJFIONE"], skills:["Java", "Python"], git:"https://github.com/s-shanky-k"}}/>
                        <ProjectsSimpleCard props={{img: "pic1.jpg", link:"https://brittanychiang.com/", title:"Boom3", content:["Boom this is sik hndfi uhweiash nfasdncfja nuicnawencqnc", "ioqnnce jowqnof ncqoijeif jhaKLMCMAIJ FQEOIWJF IONE",  "ioqnnc ejowqnofnc qoijeifjh aKLMCMAIJF QEOIWJFIONE"], skills:["Javascript", "Python"], git:"https://github.com/s-shanky-k"}}/>
                        <ProjectsSimpleCard props={{img: "pic1.jpg", title:"Boom2", content:["Boom this is sikhndfi uhweiash nfasdn cfjanu icnaw encqnc", "ioqn ncejowq nofn cqoijeifjh aKLMCMAIJFQ EOIWJFIONE",  "ioqnnce jowqnofnc qoijeifjhaKL MCMAIJFQEOI WJFIONE"], skills:["Java", "Python"], git:"https://github.com/s-shanky-k"}}/>
                        <ProjectsSimpleCard props={{img: "pic1.jpg", link:"https://brittanychiang.com/", title:"Boom3", content:["Boom this is sik hndfi uhweiash nfasdncfja nuicnawencqnc", "ioqnnce jowqnof ncqoijeif jhaKLMCMAIJ FQEOIWJF IONE",  "ioqnnc ejowqnofnc qoijeifjh aKLMCMAIJF QEOIWJFIONE"], skills:["Javascript", "Python"], git:"https://github.com/s-shanky-k"}}/>
                    </div>
                    <button className="text-theme-cyan text-xl inline-block" onClick={handleShowMore}>
                        <i className="fas fa-angle-up text-3xl "></i>
                        <span className='block'>Show Less</span>
                    </button>
                </>
                }
            </div>
        </div>
    );
}

export default ProjectsSection;
