import React from "react";
import Fade from "react-reveal/Fade";

// Example:
// <SkillsCard props={{img:'pic-wf.png', title:"Machine Learning", skills:"Scikit/Tensorflow"}}/>

function SkillsCard({ props }) {
	return (
		<Fade>
			<div className="p-3 rounded-md bg-transparent border-theme-dark-pink border w-72 hover:border-theme-medium-pink">
				<div className="flex w-full h-full items-center">
					<div className="w-8 h-full mr-5">
						<img
							src={`${process.env.PUBLIC_URL}/assets/${props.img}`}
							className="w-full h-full object-contain"
							alt="Logo"
						></img>
					</div>
					<div className="flex-col items-center">
						<div className="w-fit text-sm font-medium text-theme-primary-font-color">
							{props.title}
						</div>
						<div className="w-fit text-xs font-thin text-theme-primary-font-color">
							({props.skills})
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default SkillsCard;
