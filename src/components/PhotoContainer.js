import React from "react";
import Fade from "react-reveal/Fade";

function PhotoContainer({ props }) {
	return (
		<>
			<Fade>
				<div className="w-full h-full">
					<div className="bg-theme-dark-pink w-full aspect-square p-1 rounded-md transform transition duration-500 hover:scale-105 shadow-lg hover:shadow-2xl hover:cursor-pointer">
						<img
							className="object-center object-cover w-full h-full rounded-md"
							src={`${process.env.PUBLIC_URL}/assets/${props.img}`}
						></img>
					</div>
				</div>
			</Fade>
		</>
	);
}

export default PhotoContainer;
