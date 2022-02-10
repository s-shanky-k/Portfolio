import React from 'react';
import Fade from 'react-reveal';

function PhotoContainer({props}) {
  return (
    <>
    <Fade >
      <div className='w-full h-full'>
        <div className='bg-[#800f49] w-full h-full p-1 rounded-md transform transition duration-500 hover:scale-105 shadow-lg hover:shadow-2xl hover:cursor-pointer'>
            <img className='object-cover !w-full !h-full rounded-md' src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`}></img>
        </div>
      </div>
    </Fade>
    </>
  );
}

export default PhotoContainer;
