import React from 'react';
import SkillsCard from './SkillsCard';
import './SkillsSection.css'

function SkillsSection() {
  return (
        <div className="skills-container" id="skills">
            <div className="skills-title">
                <i className="material-icons-outlined">engineering</i>
                <h1>Skills</h1>
            </div>
            <div className="skills-content">
                <div className="skills-text">
                    This what I am listening to now!
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 px-2 pt-2">
                    <SkillsCard props={{img:'pic-wf.png', name:"Java"}}/>
                    <SkillsCard props={{img:'pic-sboa.jfif', name:"Javascript"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Temsorflow"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"React"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"C++"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Python"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Java"}}/>
                    <SkillsCard props={{img:'pic-sboa.jfif', name:"Javascript"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Temsorflow"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"React"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"C++"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Python"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Java"}}/>
                    <SkillsCard props={{img:'pic-sboa.jfif', name:"Javascript"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Temsorflow"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"React"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"C++"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Python"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Java"}}/>
                    <SkillsCard props={{img:'pic-sboa.jfif', name:"Javascript"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Temsorflow"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"React"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"C++"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Python"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Java"}}/>
                    <SkillsCard props={{img:'pic-sboa.jfif', name:"Javascript"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"Temsorflow"}}/>
                    <SkillsCard props={{img:'pic-wf.png', name:"React"}}/>
                </div>
            </div>
        </div>
  );
}

export default SkillsSection;
