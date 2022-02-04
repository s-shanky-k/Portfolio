import React from 'react';
import AboutMeSection from '../components/AboutMeSection'
import CertAchSection from '../components/CertAchSection';
import ExpEduSection from '../components/ExpEduSection';
import MusicSection from '../components/MusicSection';
import PhotoSection from '../components/PhotoSection';
import ProjectsSection from '../components/ProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import ResumeSection from '../components/ResumeSection';
import SkillsSection from '../components/SkillsSection';

function Home() {
  return (
    <>
    <AboutMeSection />
    <ExpEduSection />
    <ProjectsSection />
    <PublicationsSection />
    <SkillsSection />
    <CertAchSection />
    <PhotoSection />
    <MusicSection />
    <ResumeSection />
    </>
  );
}

export default Home;
