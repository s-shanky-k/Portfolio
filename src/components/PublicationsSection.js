import React from 'react';
import PublicationsCard from './PublicationsCard';
import './PublicationsSection.css'

function PublicationsSection() {
  return (
        <div className="publications-container" id="publications">
            <div className="publications-title">
                <i className="material-icons-outlined">library_books</i>
                <h1>Publications</h1>
            </div>
            <div className="publications-content">
                <div className="publications-text">
                    This what I am listening to now!
                </div>
                <div className="publications-cards">
                    <PublicationsCard props={{title:"Ensemble and Multi Model approach to Environmental Sound Classification",
                                            content:"This is the content where I will talk about the paper",
                                            img:"paper.png",
                                            publisher:"IEEE",
                                            link:"https://ieeexplore.ieee.org/document/9616775"}}/>
                </div>
            </div>
        </div>
  );
}

export default PublicationsSection;
