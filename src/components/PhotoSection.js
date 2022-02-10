import React from 'react';
import PhotoContainer from './PhotoContainer';
import './PhotoSection.css'
import { useState } from 'react';
import Modal from './Modal.js'

// 1024 - 4

function PhotoSection() {
    const [width, setWidth] = useState(window.innerWidth);
    const [openModal, setOpenModal] = useState (false);
    const [img, setImg] = useState ("");

    const handleWindowResize = () => setWidth(window.innerWidth);
    
    window.addEventListener("resize", handleWindowResize);

  return (
        <div className="photos-container" id="photography">
            <div className="photos-title">
                <i className="material-icons-outlined">photo_camera</i>
                <h1>Photography</h1>
            </div>
            <div className="photos-content">
                <div className="photos-text">
                    These are my photos
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-5 pr-5 pl-5">
                    <button onClick={() => {setOpenModal(true); setImg("pic1.jpg")}}><PhotoContainer props={{img:"pic1.jpg"}} /></button>
                    <button onClick={() => {setOpenModal(true); setImg("pic.jpeg")}}><PhotoContainer props={{img:"pic.jpeg"}}/></button>
                    <button onClick={() => {setOpenModal(true); setImg("pic.jpeg")}}><PhotoContainer props={{img:"pic.jpeg"}}/></button>
                    <button onClick={() => {setOpenModal(true); setImg("pic1.jpg")}}><PhotoContainer props={{img:"pic1.jpg"}}/></button>
                    <button onClick={() => {setOpenModal(true); setImg("pic.jpeg")}}><PhotoContainer props={{img:"pic.jpeg"}}/></button>
                    <button onClick={() => {setOpenModal(true); setImg("pic.jpeg")}}><PhotoContainer props={{img:"pic.jpeg"}}/></button>
                    <button onClick={() => {setOpenModal(true); setImg("pic.jpeg")}}><PhotoContainer props={{img:"pic.jpeg"}}/></button>
                    <button onClick={() => {setOpenModal(true); setImg("pic.jprg")}}><PhotoContainer props={{img:"pic.jpeg"}}/></button>
                    
                    { width >= 1024 &&
                        <>
                            <PhotoContainer props={{img:"pic.jpeg"}}/>
                            <PhotoContainer props={{img:"pic.jpeg"}}/>
                        </>
                    }

                    { (width<768 && width>=640) &&
                        <PhotoContainer props={{img:"pic.jpeg"}}/>
                    }
                </div> 
                {openModal && <Modal setOpenModal={setOpenModal} img={img} />}            
            </div>
        </div>
  );
}

export default PhotoSection;
