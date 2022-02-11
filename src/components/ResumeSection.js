import React from "react";
import Link from "react-scroll/modules/components/Link";
import Button from "./Button";
import "./ResumeSection.css";
import Fade from "react-reveal/Fade";

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
							src={`${process.env.PUBLIC_URL}/assets/images/paper.png`}
							alt="Picture"
							className="resume-img "
						/>
					</div>
				</Fade>
				<Fade>
					<div className="resume-text">
						<p>
							To those HRs out there who need a more organized and
							minimal version of my information, you can download
							the trusted PDF version here
						</p>
						<div className="flex-wrap flex w-full justify-center items-center">
							<Button
								props={{
									link: "https://drive.google.com/file/d/17gOv4JDJzLIqjbOUrkTB8YYGUkveVMen/view",
									text: "View Resume",
								}}
							/>
							<Button
								props={{
									link: "https://drive.google.com/uc?id=17gOv4JDJzLIqjbOUrkTB8YYGUkveVMen&export=download",
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
