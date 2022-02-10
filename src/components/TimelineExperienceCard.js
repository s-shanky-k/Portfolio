import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

function TimelineExperienceCard({props}) {
  const [moreInfo, setMoreInfo] = useState(false);
  const toggleMoreInfo = () => setMoreInfo(!moreInfo);

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
              <i class="fas fa-times-circle float-right text-base text-[#d52158] hover:cursor-pointer" onClick={toggleMoreInfo}></i>
            }
        </div>

        {moreInfo &&
        <Fade top>
          <div className="mb-3 text-sm font-normal text-white ">
            <div className='mb-1 space-x-2'>
              <i className="fas fa-bahai text-xs"></i>
              <span>Designed and developed an unsupervised machine learning model to identify location-based fraud transactions</span>
            </div>
            <div className='mb-1 space-x-2'>
              <i className="fas fa-bahai text-xs"></i>
              <span>Used Pyspark to perform distributed data processing, model training and prediction.</span>
            </div>
          </div>
        </Fade>
        }
    </>
  );
}

export default TimelineExperienceCard;
