import React from 'react';

function TimelineEducationCard({props}) {
  return (
    <>
        <div className='w-28 h-12 mb-2'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`} className='max-w-full max-h-full object-contain object-left'></img>
        </div>
        <div className='flex items-baseline'>
            <div className="w-fit text-lg font-semibold text-white">{props.name}</div>
        </div>
        <h2 className="flex text-base items-center mb-1 font-normal text-white">{props.domain}</h2>
        <div className="text-sm font-thin leading-none text-white">({props.startDate} - {props.endDate})</div>
    </>
  );
}

export default TimelineEducationCard;
