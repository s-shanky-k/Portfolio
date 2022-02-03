import React from 'react';

function TimelineExperienceCard({props}) {
  return (
    <>
        <div className='w-28 h-12 mb-2'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`} className='max-w-full max-h-full object-contain object-left'></img>
        </div>
        <div className='flex items-baseline'>
            <div className="w-fit text-lg font-semibold text-white">{props.name}</div>
            <div className="ml-2 text-sm font-thin leading-none text-white">({props.startDate} - {props.endDate})</div>
        </div>
        <div className="flex text-base items-center mb-1 font-normal text-white">{props.role}</div>
        <div className="mb-4 text-sm font-normal text-gray-400 space-x-2">
            <i class="fas fa-map-marker-alt"></i>
            <span>{props.location}</span>
        </div>
    </>
  );
}

export default TimelineExperienceCard;
