import React from "react";
import Zoom from "react-reveal/Zoom";

// Usage:
// <Modal props={{ img: "images/photography/photo1.jpeg" }} />;

function Modal({ setOpenModal, img }) {
	return (
		<Zoom duration={400}>
			<div className="flex h-full sm:h-fit sm:mt-20 md:mt-2 bg-transparent justify-center items-center absolute mt-2">
				<div className="flex-col p-2 bg-theme-dark-pink rounded-xl">
					<div className="w-fit relative">
						<div
							className="top-1 right-2 absolute hover:cursor-pointer"
							onClick={() => {
								setOpenModal(false);
							}}
						>
							<i className="fas fa-times text-theme-dark-pink text-2xl" />
						</div>
						<img
							className="object-cover max-h-[30rem] w-full max-w-sm sm:max-w-full sm:max-h-[36rem] md:max-h-[25.5rem] md:max-w-2xl lg:max-h-[34rem] lg:max-w-4xl rounded-lg"
							src={`${process.env.PUBLIC_URL}/assets/${img}`}
							alt=""
						/>
					</div>
				</div>
			</div>
		</Zoom>
	);
}

export default Modal;
