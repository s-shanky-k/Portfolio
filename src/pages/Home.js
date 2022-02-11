import React from "react";
import { useEffect, useState } from "react";
import LandingSection from "../components/LandingSection";
import AboutMeSection from "../components/AboutMeSection";
import CertAchSection from "../components/CertAchSection";
import ContactSection from "../components/ContactSection";
import ExpEduSection from "../components/ExpEduSection";
import MusicSection from "../components/MusicSection";
import PhotoSection from "../components/PhotoSection";
import ProjectsSection from "../components/ProjectsSection";
import PublicationsSection from "../components/PublicationsSection";
import ResumeSection from "../components/ResumeSection";
import SkillsSection from "../components/SkillsSection";
import FooterSection from "../components/FooterSection";
import Loader from "../components/Loader";

function Home() {
	const [width, setWidth] = useState(window.innerWidth);
	const [animationDelay, setAnimationDelay] = useState();

	const handleAnimationDelay = () => {
		setWidth(window.innerWidth);
		if (width <= 1024) {
			setAnimationDelay(400);
		} else {
			setAnimationDelay(2000);
		}
	};

	useEffect(() => {
		handleAnimationDelay();
	}, []);

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
