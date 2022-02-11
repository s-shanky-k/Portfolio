import React from "react";
import "./CertAchSection.css";
import ListCard from "./ListCard";

function CertAchSection() {
	return (
		<div className="certach-container">
			<div className="certach-achievements" id="achievements">
				<div className="aboutme-title">
					<i className="material-icons-outlined">emoji_events</i>
					<h1>Achievements</h1>
				</div>
				<ol className="relative mt-5 ml-7 w-10/12 lg:w-9/12">
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
				</ol>
			</div>

			<div className="certach-certifications" id="certifications">
				<div className="aboutme-title">
					<i className="material-icons-outlined">verified_user</i>
					<h1>Certifications</h1>
				</div>
				<ol className="relative mt-5 ml-7 w-10/12 lg:w-9/12">
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
					<ListCard
						props={{
							title: "Machine Learning",
							content: "Amazin certificate received",
							link: "https://github.com",
						}}
					/>
				</ol>
			</div>
		</div>
	);
}

export default CertAchSection;
