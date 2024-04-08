import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import LandingSection from "../components/LandingSection/LandingSection";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import CertAchSection from "../components/CertAchSection/CertAchSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ExpEduSection from "../components/ExpEduSection/ExpEduSection";
import MusicSection from "../components/MusicSection/MusicSection";
import PhotoSection from "../components/PhotoSection/PhotoSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import PublicationsSection from "../components/PublicationsSection/PublicationsSection";
import ResumeSection from "../components/ResumeSection/ResumeSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import FooterSection from "../components/FooterSection/FooterSection";

function Home() {
	const [width, setWidth] = useState(window.innerWidth);
	const [animationDelay, setAnimationDelay] = useState();

	const handleAnimationDelay = useCallback(() => {
		setWidth(window.innerWidth);
		if (width <= 1024) {
			setAnimationDelay(700);
		} else {
			setAnimationDelay(1350); //2000
		}
	}, [width]);

	useEffect(() => {
		handleAnimationDelay();
	}, [handleAnimationDelay]);

	window.addEventListener("load", handleAnimationDelay);
	window.addEventListener("resize", handleAnimationDelay);

	return (
		<>
			<LandingSection animationDelay={animationDelay} />
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
