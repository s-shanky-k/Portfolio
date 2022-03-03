import React from "react";
import Fade from "react-reveal/Fade";

// Example:
// <ProjectCard props={{
//     img: "pic1.jpg",
//     link:"https://brittanychiang.com/",
//     title:"Boom3",
//     content:["Boom this is sikhndfiuhweiashnfasdncfjanuicnawencqnc",
//             "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE",
//             "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE"],
//     skills:["Javascript",
//             "Python"],
//     type:"left",
//     git:"https://github.com/s-shanky-k"
// }}/>

function ProjectCard({ props }) {
	return (
		<>
			{props.type === "left" && (
				<Fade bottom>
					<div className="flex items-stretch w-5/6 justify-center my-12">
						<div className="flex flex-col w-full md:w-2/4 justify-center">
							<div className="text-theme-orange p-0 mb-2 mt-6 w-full !z-0">
								<h2 className="text-xl md:text-2xl font-bold ">
									{props.title}
								</h2>
							</div>
							<div className="bg-theme-secondary-black rounded-md shadow-lg p-6 w-full !z-0 my-3 transform transition duration-500 hover:scale-105">
								{props.content.map((item, index) => (
									<p
										key={index + 1}
										className="mt-1 text-theme-light-orange-yellow text-sm md:text-base"
									>
										{item}
									</p>
								))}
							</div>
							<ul className="flex text-theme-orange p-0 my-2 w-full !z-0">
								{props.skills.map((item, index) => (
									<li
										key={index + 1}
										className="mr-3 font-semibold text-sm bg-theme-secondary-black rounded-2xl py-1 px-2 md:text-base sm:bg-transparent sm:p-0"
									>
										{item}
									</li>
								))}
							</ul>
							<div className="overflow-hidden p-0 mt-2 w-full space-x-4">
								{props.git !== undefined && (
									<a
										href={props.git}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-github text-gray-500 text-2xl hover:text-theme-medium-pink transition ease-in-out duration-300"></i>
									</a>
								)}
								{props.link !== undefined && (
									<a
										href={props.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fas fa-link text-gray-500 text-2xl hover:text-theme-medium-pink transition ease-in-out duration-300"></i>
									</a>
								)}
							</div>
						</div>
						<div className="w-4/6 md:w-2/4 md:h-[22rem] shadow-lg rounded-lg -ml-52 md:-ml-16">
							<img
								src={
									`${process.env.PUBLIC_URL}/assets/` +
									`${props.img}`
								}
								alt="Project"
								className="w-full h-full object-center object-cover rounded-lg"
							/>
						</div>
					</div>
				</Fade>
			)}

			{props.type === "right" && (
				<Fade bottom>
					<div className="flex items-stretch w-5/6 justify-center my-12">
						<div className="w-4/6 md:w-2/4 md:h-[22rem] shadow-lg rounded-lg -mr-52 md:-mr-16">
							<img
								src={
									`${process.env.PUBLIC_URL}/assets/` +
									`${props.img}`
								}
								alt="Project"
								className="w-full h-full object-center object-cover rounded-lg"
							/>
						</div>
						<div className="flex flex-col w-full md:w-2/4 text-right justify-center">
							<div className="text-theme-orange p-0 mb-2 mt-6 w-full !z-0">
								<h2 className="text-xl md:text-2xl font-bold">
									{props.title}
								</h2>
							</div>
							<div className="bg-theme-secondary-black rounded-md shadow-lg p-6 w-full !z-0 my-3 transform transition duration-500 hover:scale-105">
								{props.content.map((item, index) => (
									<p
										key={index + 1}
										className="mt-1 text-theme-light-orange-yellow text-sm md:text-base"
									>
										{item}
									</p>
								))}
							</div>
							<ul className="flex text-theme-orange p-0 my-2 w-full justify-end !z-0">
								{props.skills.map((item, index) => (
									<li
										key={index + 1}
										className="ml-3 font-semibold bg-theme-secondary-black rounded-2xl py-1 px-2 text-sm md:text-base sm:bg-transparent sm:p-0"
									>
										{item}
									</li>
								))}
							</ul>
							<div className="overflow-hidden p-0 mt-2 w-full space-x-4">
								{props.git !== undefined && (
									<a
										href={props.git}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-github text-gray-500 text-2xl hover:text-theme-medium-pink transition ease-in-out duration-300"></i>
									</a>
								)}
								{props.link !== undefined && (
									<a
										href={props.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fas fa-link text-gray-500 text-2xl hover:text-theme-medium-pink transition ease-in-out duration-300"></i>
									</a>
								)}
							</div>
						</div>
					</div>
				</Fade>
			)}
		</>
	);
}

export default ProjectCard;
