import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
	return (
		<>
			<div className="nav-container">
				<nav>
					<ul>
						<li>
							<Link className="nav-item isActive" to="#">
								<i className="material-icons-outlined">
									person
								</i>
								<span>About Me</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item isActive" to="#">
								<i className="material-icons-outlined">work</i>
								<span>Work</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item isActive" to="#">
								<i className="material-icons-outlined">
									school
								</i>
								<span>Education</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">
									engineering
								</i>
								<span>Skills</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">
									library_books
								</i>
								<span>Publications</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">code</i>
								<span>Projects</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">
									verified_user
								</i>
								<span>Certificates</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">
									photo_camera
								</i>
								<span>Photography</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">
									audiotrack
								</i>
								<span>Music</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">
									insert_drive_file
								</i>
								<span>Resume</span>
							</Link>
						</li>
						<li>
							<Link className="nav-item" to="#">
								<i className="material-icons-outlined">
									alternate_email
								</i>
								<span>Contact</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Navbar;
