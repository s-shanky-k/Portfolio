import React from 'react';
import './AboutMeSection.css'
function AboutMeSection() {
  return (
        <div className="aboutme-container" id="aboutme">
            <div className="aboutme-title">
                <i className="material-icons-outlined">person</i>
                <h1>About Me</h1>
            </div>
            <div className="aboutme-content">
                <div className="aboutme-img-container">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/pic.jpeg`} alt="Picture" className='aboutme-img' />
                </div>
                <div className="aboutme-text">
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                    <p>This is about me</p>
                </div>
            </div>
        </div>
  );
}

export default AboutMeSection;
