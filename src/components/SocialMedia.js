import React from "react";
import { ReactComponent as InstagramLogo } from "./assets/instagram.svg";
import { ReactComponent as LinkedinLogo } from "./assets/linkedin.svg";
import { ReactComponent as GithubLogo } from "./assets/github.svg";

function SocialMedia() {
	return (
		<div className="flex justify-between items-center w-full h-7">
			<a href="https://github.com/s-shanky-k">
				<div className="w-7 relative">
					<InstagramLogo />
				</div>
			</a>
			<a href="https://github.com/s-shanky-k">
				<div className="w-7 relative">
					<LinkedinLogo />
				</div>
			</a>
			<a href="https://github.com/s-shanky-k">
				<div className="w-7 relatve">
					<GithubLogo />
				</div>
			</a>
		</div>
	);
}

export default SocialMedia;
