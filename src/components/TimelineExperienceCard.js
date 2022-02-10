import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

function TimelineExperienceCard({props}) {

  const [moreInfo, setMoreInfo] = useState(false);
  const toggleMoreInfo = () => {
    setMoreInfo(!moreInfo);
    setTimeout(() => {
      
    },1000);
  }

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
        <div className="mb-1 text-sm font-normal text-gray-400 space-x-2">
            <i className="fas fa-map-marker-alt"></i>
            <span>{props.location}</span>
            {!moreInfo &&
              <i className="fas fa-info-circle float-right text-base text-[#d52158] hover:cursor-pointer" onClick={toggleMoreInfo} ></i>
            }
            {moreInfo &&
              <i className="fas fa-times-circle float-right text-base text-[#d52158] hover:cursor-pointer" onClick={toggleMoreInfo}></i>
            }
        </div>

        {moreInfo &&
        <Fade left>
          <div className="mb-3 text-sm font-normal text-white ">
            {props.duties.map((item, index) => 
              <div className='mb-1 space-x-2'>
                <i className="fas fa-bahai text-xs text-[#d52158]"></i>
                <span key = {index + 1}>{item}</span>
              </div>            
            )}
          </div>
        </Fade>
        }
    </>
  );
}

export default TimelineExperienceCard;
