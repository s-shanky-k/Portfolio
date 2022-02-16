import React from "react";
import { SkillsData } from "./assets/Data/SkillsData";
import SkillsCard from "./SkillsCard";
import "./SkillsSection.css";

function SkillsSection() {
	return (
		<div className="skills-container" id="skills">
			<div className="skills-title">
				<i className="material-icons-outlined">engineering</i>
				<h1>Skills</h1>
			</div>
			<div className="skills-content">
				{/* <div className="skills-text">
					This what I am listening to now!
				</div> */}
				<div className="w-full gap-5 flex-wrap flex justify-center items-center px-2 py-4">
					{SkillsData.map((item, index) => (
						<SkillsCard key={index + 1} props={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default SkillsSection;
