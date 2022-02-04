import React from 'react';

function ListCard({props}) {
  return (
        <li className="group ml-6 text-white hover:text-[#ed016a]">   
            <a href={props.link} target='_blank'>         
            <span className="flex absolute mt-1 -left-3 justify-center items-center w-5 h-5 transition duration-100 group-hover:translate-x-3">
                <i className="text-base fas fa-chevron-right"></i>
            </span>
            <div className='flex items-center'>
                <div className="w-fit text-lg font-semibold">{props.title}</div>
            </div>
            <div className="flex text-base items-start pb-3 font-thin text-white">{props.content}</div>
            </a>
        </li>
  );
}

export default ListCard;
