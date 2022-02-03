import React from 'react';
import './ExpEduSection.css'
import Timeline from './Timeline';

function ExpEduSection() {
  return (
        <div className="expedu-container">
            <div className="expedu-experience" id="experience">
                <div className="aboutme-title">
                    <i className="material-icons-outlined">work</i>
                    <h1>Experience</h1>
                </div>
                <Timeline props={{type:"experience",
                                    experience:[{name:"Wells Fargo",
                                                 img:"pic-wf.png",
                                                 role:"Software Developer Engineer Intern",
                                                 startDate:"Apr'20", 
                                                 endDate:"Mar'20", 
                                                 location:"Bangalore, India"},

                                                 {name:"Qatar Computing Research Institute",
                                                 img:"pic-qcri.png",
                                                 role:"Research Fellow",
                                                 startDate:"Apr'20", 
                                                 endDate:"Mar'20", 
                                                 location:"Doha, Qatar (Remote)"},

                                                 {name:"Qatar Computing Research Institute",
                                                 img:"pic-qcri.png",
                                                 role:"Summer Research Intern",
                                                 startDate:"Apr'20", 
                                                 endDate:"Mar'20", 
                                                 location:"Doha, Qatar (Remote)"},
                                                 ]}}/>
            </div>

            <div className="expedu-education" id="education">
                <div className="aboutme-title">
                    <i className="material-icons-outlined">school</i>
                    <h1>Education</h1>
                </div>
                <Timeline props={{type:"education",
                                    education:[{name:"College Of Engineering Guindy, Anna Univeristy",
                                                img:"pic-ceg.png",
                                                domain:"BE Computer Science and Engineering", 
                                                startDate:"Apr'20", 
                                                endDate:"Mar'20"},
                                                
                                                {name:"SBOA School & Junior College",
                                                img:"pic-sboa.jfif",
                                                domain:"Higher Secondary School", 
                                                startDate:"Apr'20", 
                                                endDate:"Mar'20"},

                                                {name:"SBOA School & Junior College",
                                                img:"pic-sboa.jfif",
                                                domain:"Secondary School", 
                                                startDate:"Apr'20", 
                                                endDate:"Mar'20"},
                                                ]}}/>
            </div>
        </div>
  );
}

export default ExpEduSection;
