import React from "react";
import { PublicationsData } from "../../assets/Data/PublicationsData";
import PublicationsCard from "./PublicationsCard";
import "./PublicationsSection.css";

function PublicationsSection() {
	return (
		<div className="publications-container" id="publications">
			<div className="publications-title">
				<i className="material-icons-outlined">library_books</i>
				<h1>Publications</h1>
			</div>
			<div className="publications-content">
				{/* <div className="publications-text">
					This what I am listening to now!
				</div> */}
				<div className="publications-cards">
					{PublicationsData.map((item, index) => (
						<PublicationsCard key={index + 1} props={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default PublicationsSection;
