import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Tooltip from "@mui/material/Tooltip";

// Usage:
// <TimelineExperienceCard props={{
// 	name: "Wells Fargo",
// 	img: "logos/experience/wellsfargo.png",
// 	role: "Software Developer Engineer Intern",
// 	startDate: "Apr'21",
// 	endDate: "Jul'21",
// 	location: "Bangalore, India",
// 	duties: [
// 		"Designed and developed an unsupervised machine learning model to identify location-based fraud transactions.",
// 		"Used Pyspark to perform distributed data processing, model training and prediction.",
// 		"Developed real-time streaming data pipelines using Kafka.",
// 	],
// }}

function TimelineExperienceCard({ props }) {
	const [moreInfo, setMoreInfo] = useState(false);
	const toggleMoreInfo = () => {
		setMoreInfo(!moreInfo);
		setTimeout(() => {}, 1000);
	};

	return (
		<>
			<div className="w-28 h-12 mb-2">
				<img
					src={`${process.env.PUBLIC_URL}/assets/${props.img}`}
					className="max-w-full max-h-full object-contain object-left"
					alt="Logo"
				></img>
			</div>
			<div className="flex items-baseline">
				<div className="w-fit text-lg font-semibold text-theme-primary-font-color">
					{props.name}
				</div>
				<div className="ml-2 text-sm font-thin leading-none text-theme-primary-font-color">
					({props.startDate} - {props.endDate})
				</div>
			</div>
			<div className="flex text-base items-center mb-1 font-normal text-theme-primary-font-color">
				{props.role}
			</div>
			<div className="mb-1 text-sm font-normal text-gray-400 space-x-2">
				<i className="fas fa-map-marker-alt"></i>
				<span>{props.location}</span>
				{!moreInfo && (
					<Tooltip title="More Info" placement="right">
						<i
							className="fas fa-info-circle float-right text-base text-theme-medium-pink hover:cursor-pointer"
							onClick={toggleMoreInfo}
						></i>
					</Tooltip>
				)}
				{moreInfo && (
					<Tooltip title="Less Info" placement="right">
						<i
							className="fas fa-times-circle float-right text-base text-theme-medium-pink hover:cursor-pointer"
							onClick={toggleMoreInfo}
						></i>
					</Tooltip>
				)}
			</div>

			{moreInfo && (
				<Fade>
					<div className="mb-3 text-sm font-normal text-theme-primary-font-color ">
						{props.duties.map((item, index) => (
							<div key={index + 1} className="mb-1 space-x-2">
								<i className="fas fa-bahai text-xs text-theme-medium-pink"></i>
								<span>{item}</span>
							</div>
						))}
					</div>
				</Fade>
			)}
		</>
	);
}

export default TimelineExperienceCard;
