import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

function Navbar() {
	const [click, setClick] = useState(false);
	const [offsetVal, setOffsetVal] = useState(-20);
	const [width, setWidth] = useState(window.innerWidth);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
		if (width <= 1024) {
			setOffsetVal(35);
		} else {
			setOffsetVal(-20);
		}
	};

	window.addEventListener("resize", handleWindowResize);
	window.addEventListener("load", handleWindowResize);

	return (
		<>
			<Fade top>
				<nav className="navbar">
					<div className="nav-container">
						<div className="menu-icon" onClick={handleClick}>
							<i
								className={
									click ? "fas fa-times" : "fas fa-bars"
								}
							/>
						</div>
						<ul className={click ? "nav-menu active" : "nav-menu"}>
							<Fade top delay={600}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="aboutme"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											person
										</i>
										<span className="nav-title">
											About Me
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={800}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="experience"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											work
										</i>
										<span className="nav-title">
											Experience
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1000}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="education"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											school
										</i>
										<span className="nav-title">
											Education
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1200}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="projects"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											code
										</i>
										<span className="nav-title">
											Projects
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1400}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="publications"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											library_books
										</i>
										<span className="nav-title">
											Publications
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1600}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="skills"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											engineering
										</i>
										<span className="nav-title">
											Skills
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1600}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="achievements"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											emoji_events
										</i>
										<span className="nav-title">
											Achievements
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1400}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="certifications"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											verified_user
										</i>
										<span className="nav-title">
											Certifications
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1200}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="resume"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											insert_drive_file
										</i>
										<span className="nav-title">
											Resume
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={1000}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="photography"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											photo_camera
										</i>
										<span className="nav-title">
											Photography
										</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={800}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="music"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											audiotrack
										</i>
										<span className="nav-title">Music</span>
									</Link>
								</li>
							</Fade>
							<Fade top delay={600}>
								<li className="nav-item">
									<Link
										className="nav-links"
										to="contact"
										onClick={closeMobileMenu}
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={offsetVal}
										activeClass="active"
									>
										<i className="material-icons-outlined">
											alternate_email
										</i>
										<span className="nav-title">
											Contact
										</span>
									</Link>
								</li>
							</Fade>
						</ul>
					</div>
				</nav>
			</Fade>
		</>
	);
}

export default Navbar;
