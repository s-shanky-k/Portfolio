import React from 'react';
import LandingSection from '../components/LandingSection'
import AboutMeSection from '../components/AboutMeSection'
import CertAchSection from '../components/CertAchSection';
import ContactSection from '../components/ContactSection';
import ExpEduSection from '../components/ExpEduSection';
import MusicSection from '../components/MusicSection';
import PhotoSection from '../components/PhotoSection';
import ProjectsSection from '../components/ProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import ResumeSection from '../components/ResumeSection';
import SkillsSection from '../components/SkillsSection';
import FooterSection from '../components/FooterSection';

function Home() {
  return (
    <>
    <LandingSection />
    <AboutMeSection />
    <ExpEduSection />
    <ProjectsSection />
    <PublicationsSection />
    <SkillsSection />
    <CertAchSection />
    <ResumeSection />
    <PhotoSection />
    <MusicSection />
    <ContactSection />
    <FooterSection />
    </>
  );
}

export default Home;
