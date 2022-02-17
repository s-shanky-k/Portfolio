import React from "react";
import "./MusicSection.css";
import Fade from "react-reveal";
import { MusicData } from "../../assets/Data/MusicData";

function MusicSection() {
	return (
		<div className="music-container" id="music">
			<div className="music-title">
				<i className="material-icons-outlined">audiotrack</i>
				<h1>Music</h1>
			</div>
			<div className="music-content">
				<div className="music-text">{MusicData.content}</div>
				<Fade bottom>
					<div className="music-spotify">
						<iframe
							title="playlist"
							src={MusicData.playlistLink}
							width="90%"
							height="100%"
							frameBorder="0"
							style={{ borderRadius: "6px" }}
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						></iframe>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default MusicSection;
