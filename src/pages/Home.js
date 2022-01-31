import React from 'react';
import AboutMeSection from '../components/AboutMeSection'
import MusicSection from '../components/MusicSection';
import PhotoSection from '../components/PhotoSection';
import ProjectsSection from '../components/ProjectsSection';

function Home() {
  return (
    <>
    <AboutMeSection />
    <ProjectsSection />
    <PhotoSection />
    <MusicSection />
    </>
  );
}

export default Home;
