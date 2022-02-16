import React, { useState } from "react";
import Fade from "react-reveal/Fade";

function TimelineEducationCard({ props }) {
	const [moreInfo, setMoreInfo] = useState(false);
	const toggleMoreInfo = () => setMoreInfo(!moreInfo);

	return (
		<>
			<div className="w-28 h-12 mb-2">
				<img
					src={`${process.env.PUBLIC_URL}/assets/${props.img}`}
					className="max-w-full max-h-full object-contain object-left"
				></img>
			</div>
			<div className="flex items-baseline">
				<div className="w-fit text-lg font-semibold text-theme-primary-font-color">
					{props.name}
				</div>
			</div>
			<h2 className="flex text-base items-center font-normal text-theme-primary-font-color">
				{props.domain}
			</h2>
			<div className="text-sm font-thin mb-1 text-theme-primary-font-color">
				({props.endDate})
				{!moreInfo && (
					<i
						className="fas fa-info-circle float-right text-base text-theme-medium-pink hover:cursor-pointer"
						onClick={toggleMoreInfo}
					></i>
				)}
				{moreInfo && (
					<i
						className="fas fa-times-circle float-right text-base text-theme-medium-pink hover:cursor-pointer"
						onClick={toggleMoreInfo}
					></i>
				)}
			</div>

			{moreInfo && (
				<Fade top>
					<div className="mb-3 text-sm font-normal text-theme-primary-font-color ">
						{props.achievements.map((item, index) => (
							<div className="mb-1 space-x-2">
								<i className="fas fa-bahai text-xs text-theme-medium-pink"></i>
								<span key={index + 1}>{item}</span>
							</div>
						))}
					</div>
				</Fade>
			)}
		</>
	);
}

export default TimelineEducationCard;
