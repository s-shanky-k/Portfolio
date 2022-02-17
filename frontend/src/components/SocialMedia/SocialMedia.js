import React from "react";
import { ReactComponent as InstagramLogo } from "../../assets/SVG/instagram.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/SVG/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/SVG/github.svg";
import { SocialMediaData } from "../../assets/Data/SocialMediaData";

function SocialMedia() {
	return (
		<div className="flex justify-between items-center w-full h-7">
			<a href={SocialMediaData.instagram}>
				<div className="w-7 relative">
					<InstagramLogo />
				</div>
			</a>
			<a href={SocialMediaData.linkedin}>
				<div className="w-7 relative">
					<LinkedinLogo />
				</div>
			</a>
			<a href={SocialMediaData.github}>
				<div className="w-7 relatve">
					<GithubLogo />
				</div>
			</a>
		</div>
	);
}

export default SocialMedia;
