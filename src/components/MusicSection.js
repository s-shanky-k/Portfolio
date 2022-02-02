import React from 'react';
import './MusicSection.css'

function MusicSection() {
  return (
        <div className="music-container" id="music">
            <div className="music-title">
                <i className="material-icons-outlined">audiotrack</i>
                <h1>Music</h1>
            </div>
            <div className="music-content">
                <div className="music-text">
                    This what I am listening to now!
                </div>
                <div className="music-spotify">
                    <iframe src="https://open.spotify.com/embed/playlist/0g7B25IgddhKE8wb0OgO0e?utm_source=generator&theme=0" width="90%" height="100%" frameBorder="0"  style={{borderRadius: "6px"}} allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
  );
}

export default MusicSection;
