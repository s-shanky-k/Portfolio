import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";
import ProjectsSimpleCard from "./ProjectsSimpleCard";
import { useState } from "react";
import { ProjectsData } from "../../assets/Data/ProjectsData";
import { OtherProjectsData } from "../../assets/Data/OtherProjectsData";

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
				{/* <div className="projects-text">
					This what I am listening to now!
				</div> */}
				{window.innerWidth > 768 ? (
					ProjectsData.map((item, index) => (
						<ProjectCard key={index + 1} props={item} />
					))
				) : (
					<>
						<div className="w-full h-fit gap-5 flex-wrap flex justify-center items-center">
							{ProjectsData.map((item, index) => (
								<ProjectsSimpleCard
									key={index + 1}
									props={item}
								/>
							))}
						</div>
					</>
				)}
				{!showMore && (
					<button
						className="text-theme-cyan text-xl inline-block animate-bounce hover:text-theme-bright-pink transition ease-in-out duration-300"
						onClick={handleShowMore}
					>
						<span className="block">Other Projects</span>
						<i className="fas fa-angle-down text-3xl "></i>
					</button>
				)}
				{showMore && (
					<>
						<div className="w-full h-fit gap-5 flex-wrap flex justify-center items-center">
							{OtherProjectsData.map((item, index) => (
								<ProjectsSimpleCard
									key={index + 1}
									props={item}
								/>
							))}
						</div>
						<button
							className="text-theme-cyan text-xl inline-block hover:text-theme-bright-pink transition ease-in-out duration-300"
							onClick={handleShowMore}
						>
							<i className="fas fa-angle-up text-3xl "></i>
							<span className="block">Show Less</span>
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default ProjectsSection;
