import React from 'react';
import AboutMeSection from '../components/AboutMeSection'
import ExpEduSection from '../components/ExpEduSection';
import MusicSection from '../components/MusicSection';
import PhotoSection from '../components/PhotoSection';
import ProjectsSection from '../components/ProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import SkillsSection from '../components/SkillsSection';

function Home() {
  return (
    <>
    <AboutMeSection />
    <ExpEduSection />
    <ProjectsSection />
    <PublicationsSection />
    <SkillsSection />
    <PhotoSection />
    <MusicSection />
    </>
  );
}

export default Home;
