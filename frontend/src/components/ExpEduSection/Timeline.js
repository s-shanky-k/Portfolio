import React from "react";
import TimelineExperienceCard from "./TimelineExperienceCard";
import TimelineEducationCard from "./TimelineEducationCard";
import Fade from "react-reveal/Fade";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

// Usage:
// <Timeline props={{
// 		type: "experience",
// 		experience: ExperienceData,
// 		}}

function Timeline({ props }) {
	const [showMore, setShowMore] = useState(false);
	const handleShowMore = () => setShowMore(!showMore);

	return (
		<>
			<ol className="relative border-l-4 border-gray-700 my-5 ml-7 w-10/12 lg:w-9/12">
				{props.type === "experience" && (
					<>
						{props.experience.map((item, index) => (
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
						{!showMore && (
							<Tooltip title="Show More" placement="right">
								<button
									className="ml-6 text-gray-500 text-2xl hover:text-theme-medium-pink transition ease-in-out duration-300"
									onClick={handleShowMore}
								>
									<i className="fa fa-ellipsis-h "></i>
								</button>
							</Tooltip>
						)}
						{showMore && (
							<>
								{props.moreExperience.map((item, index) => (
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
							</>
						)}
					</>
				)}
				{/* <div className="rounded-md w-8 h-4 flex items-center justify-center bg-gray-500"> */}
				{/* <i className="fa fa-ellipsis-h text-gray-500 text-2xl hover:text-theme-medium-pink transition ease-in-out duration-300"></i> */}
				{/* </div> */}

				{props.type === "education" && (
					<>
						{props.education.map((item, index) => (
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
						{/* {!showMore && (
							<button
								className="ml-6 text-gray-500 text-2xl hover:text-theme-medium-pink transition ease-in-out duration-300"
								onClick={handleShowMore}
							>
								<i className="fa fa-ellipsis-h "></i>
							</button>
						)} */}
					</>
				)}
			</ol>
		</>
	);
}

export default Timeline;
