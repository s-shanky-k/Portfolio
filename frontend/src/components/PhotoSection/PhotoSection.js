import React, { useState } from "react";
import PhotoContainer from "./PhotoContainer";
import "./PhotoSection.css";
import Modal from "./Modal.js";
import { PhotosData } from "../../assets/Data/PhotosData";

// 1024 - 4

function PhotoSection() {
	const [width, setWidth] = useState(window.innerWidth);
	const [openModal, setOpenModal] = useState(false);
	const [img, setImg] = useState("");

	const handleWindowResize = () => setWidth(window.innerWidth);

	window.addEventListener("resize", handleWindowResize);

	return (
		<div className="photos-container" id="photography">
			<div className="photos-title">
				<i className="material-icons-outlined">photo_camera</i>
				<h1>Photography</h1>
			</div>
			<div className="photos-content">
				{/* <div className="photos-text">{PhotosData.content}</div> */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-5 pr-5 pl-5">
					{PhotosData.slice(0, 8).map((item, index) => (
						<button
							key={index + 1}
							onClick={() => {
								setOpenModal(true);
								setImg(item.img);
							}}
						>
							<PhotoContainer props={item} />
						</button>
					))}

					{width >= 1024 && (
						<>
							{PhotosData.slice(-2).map((item, index) => (
								<button
									key={index + 1}
									onClick={() => {
										setOpenModal(true);
										setImg(item.img);
									}}
								>
									<PhotoContainer props={item} />
								</button>
							))}
						</>
					)}

					{width < 768 && width >= 640 && (
						<>
							{PhotosData.slice(-1).map((item, index) => (
								<button
									key={index + 1}
									onClick={() => {
										setOpenModal(true);
										setImg(item.img);
									}}
								>
									<PhotoContainer props={item} />
								</button>
							))}
						</>
					)}
				</div>
				{openModal && <Modal setOpenModal={setOpenModal} img={img} />}
			</div>
		</div>
	);
}

export default PhotoSection;
