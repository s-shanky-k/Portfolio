import React from "react";
import Fade from "react-reveal/Fade";

// Example:

// <ProjectsSimpleCard props={{
//     img: "pic1.jpg",
//     link:"https://brittanychiang.com/",
//     title:"Boom3",
//     content:["Boom this is sik hndfi uhweiash nfasdncfja nuicnawencqnc",
//             "ioqnnce jowqnof ncqoijeif jhaKLMCMAIJ FQEOIWJF IONE",
//             "ioqnnc ejowqnofnc qoijeifjh aKLMCMAIJF QEOIWJFIONE"],
//     skills:["Javascript", "Python"],
//     git:"https://github.com/s-shanky-k"
// }}/>

function ProjectsSimpleCard({ props }) {
	return (
		<Fade bottom>
			<div className="w-80 p-2 m-4 bg-theme-secondary-black border-theme-dark-pink border-4 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
				<img
					className="max-h-48 w-fit object-cover rounded-lg aspect-square "
					src={`${process.env.PUBLIC_URL}/assets/${props.img}`}
					alt="Project"
				/>
				<div className="p-2">
					<h2 className="font-bold text-lg mb-2 text-theme-orange">
						{props.title}
					</h2>
					{props.content.map((item, index) => (
						<p
							key={index + 1}
							className="text-sm text-theme-light-orange-yellow"
						>
							{item}
						</p>
					))}
				</div>
				<ul className="flex text-theme-orange my-2 w-full h-fit px-2 space-x-2">
					{props.skills.map((item, index) => (
						<li key={index + 1} className="font-semibold">
							{item}
						</li>
					))}
				</ul>
				<div className="mt-2">
					{props.git !== undefined && (
						<a
							href={props.git}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github text-gray-500 text-2xl px-2 hover:text-theme-medium-pink transition ease-in-out duration-300"></i>
						</a>
					)}
					{props.link !== undefined && (
						<a
							href={props.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fas fa-link text-gray-500 text-2xl px-2 hover:text-theme-medium-pink transition ease-in-out duration-300"></i>
						</a>
					)}
				</div>
			</div>
		</Fade>
	);
}

export default ProjectsSimpleCard;
