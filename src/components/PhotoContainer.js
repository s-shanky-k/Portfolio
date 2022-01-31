import React from 'react';
import './PhotoContainer.css'

function PhotoContainer({props}) {
  return (
    <>
    <div className='bg-[#800f49] p-1 rounded-md'>
        <img className='object-cover rounded-md' src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`}></img>
    </div>
    </>
  );
}

export default PhotoContainer;
