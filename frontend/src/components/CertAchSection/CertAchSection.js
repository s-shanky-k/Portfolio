import React from "react";
import { AchievementsData } from "../../assets/Data/AchievementsData";
import { CertificationsData } from "../../assets/Data/CertificationsData";
import "./CertAchSection.css";
import ListCard from "./ListCard";

function CertAchSection() {
	return (
		<div className="certach-container">
			<div className="certach-achievements" id="achievements">
				<div className="certach-title">
					<i className="material-icons-outlined">emoji_events</i>
					<h1>Achievements</h1>
				</div>
				<ol className="relative mt-5 ml-7 w-10/12 lg:w-9/12">
					{AchievementsData.map((item, index) => (
						<ListCard key={index + 1} props={item} />
					))}
				</ol>
			</div>

			<div className="certach-certifications" id="certifications">
				<div className="certach-title">
					<i className="material-icons-outlined">verified_user</i>
					<h1>Certifications</h1>
				</div>
				<ol className="relative mt-5 ml-7 w-10/12 lg:w-9/12">
					{CertificationsData.map((item, index) => (
						<ListCard key={index + 1} props={item} />
					))}
				</ol>
			</div>
		</div>
	);
}

export default CertAchSection;
