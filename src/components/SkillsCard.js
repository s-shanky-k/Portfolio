import React from 'react';

// Example:
// <SkillsCard props={{img:'pic-wf.png', title:"Machine Learning", skills:"Scikit/Tensorflow"}}/>


function SkillsCard({props}) {
  return (
    <div className="p-3 rounded-md bg-transparent border-[#800f49] border w-72 hover:border-[#ad365a]">
        <div className="flex w-full h-full items-center">
            <div className='w-8 h-full mr-5'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`} className='w-full h-full object-contain'></img>
            </div>
            <div className='flex-col items-center'>
                <div className="w-fit text-sm font-medium text-white">{props.title}</div>
                <div className="w-fit text-xs font-thin text-white">({props.skills})                </div>
            </div>
        </div>
    </div>
  );
}

export default SkillsCard;
