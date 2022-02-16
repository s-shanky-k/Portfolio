import React from "react";
import Link from "react-scroll/modules/components/Link";
import Button from "./Button";
import "./ResumeSection.css";
import Fade from "react-reveal/Fade";
import { ResumeData } from "./assets/Data/ResumeData";

function ResumeSection() {
	return (
		<div className="resume-container" id="resume">
			<div className="resume-title">
				<i className="material-icons-outlined">insert_drive_file</i>
				<h1>Resume</h1>
			</div>
			<div className="resume-content">
				<Fade left>
					<div className="resume-img-container">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/${ResumeData.img}`}
							alt="Picture"
							className="resume-img "
						/>
					</div>
				</Fade>
				<Fade>
					<div className="resume-text">
						<p>{ResumeData.content}</p>
						<div className="flex-wrap flex w-full justify-center items-center">
							<Button
								props={{
									link: ResumeData.viewLink,
									text: "View Resume",
								}}
							/>
							<Button
								props={{
									link: ResumeData.downloadLink,
									text: "Download Resume",
								}}
							/>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default ResumeSection;
