import React from "react";
import Fade from "react-reveal/Fade";

// Usage:
// <ListCard key={index + 1} props={{
// 		title: "Convolutional Neural Networks",
// 		content: "Authorized by deeplearning.ai and offered through Coursera",
// 		link: "https://coursera.org/share/3b099973e2ab2411326c2cff23b8b2d1",
// 	}} />

function ListCard({ props }) {
	return (
		<Fade top>
			<li className="group ml-6 text-theme-primary-font-color hover:text-theme-bright-pink">
				<a href={props.link} target="_blank" rel="noopener noreferrer">
					<span className="flex absolute mt-1 -left-8 justify-center items-center w-5 h-5 transition duration-100 group-hover:translate-x-3">
						<i className="text-base fas fa-chevron-right"></i>
					</span>
					<div className="flex items-center">
						<div className="w-fit text-lg font-semibold">
							{props.title}
						</div>
					</div>
					<div className="flex text-base items-start pb-3 font-thin text-theme-primary-font-color">
						{props.content}
					</div>
				</a>
			</li>
		</Fade>
	);
}

export default ListCard;
