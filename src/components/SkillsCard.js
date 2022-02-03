import React from 'react';

function SkillsCard({props}) {
  return (
    <div className="p-3 rounded-md bg-transparent border-[#800f49] border w-44 md:w-48 hover:border-[#ad365a]">
        <div className="flex w-full h-full">
            <div className='w-8 h-8 mr-5'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`} className='max-w-full max-h-full object-contain object-left'></img>
            </div>
            <div className='flex items-center'>
                <div className="w-fit text-sm font-medium text-white">{props.name}</div>
            </div>
        </div>
    </div>
  );
}

export default SkillsCard;
