import React from "react";
import "./AboutMeSection.css";
import Fade from "react-reveal/Fade";
import { AboutMeData } from "../../assets/Data/AboutMeData";

function AboutMeSection() {
	return (
		<div className="aboutme-container" id="aboutme">
			<div className="aboutme-title">
				<i className="material-icons-outlined">person</i>
				<h1>About Me</h1>
			</div>
			<div className="aboutme-content">
				<Fade left>
					<div className="aboutme-img-container">
						<img
							src={`${process.env.PUBLIC_URL}/assets/${AboutMeData.image}`}
							alt=""
							className="aboutme-img"
						/>
					</div>
				</Fade>

				<div className="aboutme-text">
					{AboutMeData.content.map((item, index) => (
						<Fade key={index + 1}>
							<p className="aboutme-text-para" key={index + 1}>
								{item}
							</p>
						</Fade>
					))}
				</div>
			</div>
		</div>
	);
}

export default AboutMeSection;
