import React from "react";
import TimelineExperienceCard from "./TimelineExperienceCard";
import TimelineEducationCard from "./TimelineEducationCard";
import Fade from "react-reveal/Fade";

// Usage:
// <Timeline props={{
// 		type: "experience",
// 		experience: ExperienceData,
// 		}}

function Timeline({ props }) {
	return (
		<>
			<ol className="relative border-l-4 border-gray-700 my-5 ml-7 w-10/12 lg:w-9/12">
				{props.type === "experience" &&
					props.experience.map((item, index) => (
						<Fade top key={index + 1}>
							<li className="mb-8 ml-6">
								<span className="flex absolute -left-9 justify-center items-center w-5 h-5 rounded-full ring-8 ring-theme-very-dark-pink bg-theme-dark-pink">
									<i className="text-xs text-theme-bright-pink fas fa-circle"></i>
								</span>
								<TimelineExperienceCard
									props={{
										name: item.name,
										img: item.img,
										role: item.role,
										startDate: item.startDate,
										endDate: item.endDate,
										location: item.location,
										duties: item.duties,
									}}
								/>
							</li>
						</Fade>
					))}

				{props.type === "education" &&
					props.education.map((item, index) => (
						<Fade top key={index + 1}>
							<li className="mb-8 ml-6">
								<span className="flex absolute -left-9 justify-center items-center w-5 h-5 rounded-full ring-8 ring-theme-very-dark-pink bg-theme-dark-pink">
									<i className="text-xs text-theme-bright-pink fas fa-circle"></i>
								</span>
								<TimelineEducationCard
									props={{
										name: item.name,
										img: item.img,
										domain: item.domain,
										startDate: item.startDate,
										endDate: item.endDate,
										achievements: item.achievements,
									}}
								/>
							</li>
						</Fade>
					))}
			</ol>
		</>
	);
}

export default Timeline;
