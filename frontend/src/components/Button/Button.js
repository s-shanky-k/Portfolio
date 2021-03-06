import React from "react";

// Example:
// <Button props={{link:"https://drive.google.com/file/d/17gOv4JDJzLIqjbOUrkTB8YYGUkveVMen/view",
// 		text:"View Resume"}}/>

function Button({ props }) {
	return props.link !== undefined ? (
		<a href={props.link} target="_blank" rel="noreferrer">
			<div className="m-4 p-2 rounded-md text-gray-500 hover:text-theme-medium-pink border-2 border-gray-500 hover:border-theme-dark-pink w-56 hover:cursor-pointer transition ease-in-out duration-300">
				<div className="text-lg font-medium text-center">
					{props.text}
				</div>
			</div>
		</a>
	) : (
		<div className="p-2 rounded-md text-gray-500 hover:text-theme-medium-pink border-2 border-gray-500 hover:border-theme-dark-pink w-56 hover:cursor-pointer transition ease-in-out duration-300">
			<div className="text-lg font-medium text-center">{props.text}</div>
		</div>
	);
}

export default Button;
