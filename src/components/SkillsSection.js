import React from "react";
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
				<div className="skills-text">
					This what I am listening to now!
				</div>
				{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 px-2 pt-4"> */}
				<div className="w-full gap-5 flex-wrap flex justify-center items-center px-2 py-4">
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Machine Learning",
							skills: "Scikit/Tensorflow",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Web Development",
							skills: "HTML/CSS/React",
						}}
					/>
					<SkillsCard
						props={{
							img: "java.svg",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "python.svg",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "html.svg",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "javascript.svg",
							title: "Language",
							skills: "Java",
						}}
					/>
					<SkillsCard
						props={{
							img: "pic-wf.png",
							title: "Language",
							skills: "Java",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default SkillsSection;
