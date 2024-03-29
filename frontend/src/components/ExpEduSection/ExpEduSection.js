import React from "react";
import "./ExpEduSection.css";
import Timeline from "./Timeline";
import {
	ExperienceData,
	MoreExperienceData,
} from "../../assets/Data/ExperienceData";
import { EducationData } from "../../assets/Data/EducationData";

function ExpEduSection() {
	return (
		<div className="expedu-container">
			<div className="expedu-experience" id="experience">
				<div className="expedu-title">
					<i className="material-icons-outlined">work</i>
					<h1>Experience</h1>
				</div>
				<Timeline
					props={{
						type: "experience",
						experience: ExperienceData,
						moreExperience: MoreExperienceData,
					}}
				/>
			</div>

			<div className="expedu-education" id="education">
				<div className="expedu-title">
					<i className="material-icons-outlined">school</i>
					<h1>Education</h1>
				</div>
				<Timeline
					props={{
						type: "education",
						education: EducationData,
					}}
				/>
			</div>
		</div>
	);
}

export default ExpEduSection;
