import React from 'react';

// Example:
// <PublicationsCard props={{title:"Ensemble and Multi Model approach to Environmental Sound Classification",
//                                             content:"This is the content where I will talk about the paper",
//                                             img:"paper.png",
//                                             publisher:"IEEE",
//                                             link:"https://ieeexplore.ieee.org/document/9616775",
//                                             git:"https://ieeexplore.ieee.org/document/9616775"}}/>

function PublicationsCard({props}) {
  return (
    <div className="flex flex-col items-center w-5/6 bg-[#050505] border-[#800f49] border-4 rounded-lg shadow-md md:flex-row">
        <img className="object-cover w-fit mt-4 h-96 rounded-lg md:ml-2 md:my-2 md:h-auto md:w-48 transform transition duration-500 hover:scale-105" src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`} alt="" />
        <div className="flex flex-col justify-between p-4 leadng-normal">
            <div className="font-bold text-xl md:text-2xl mb-2 text-[#e6873f]">{props.title}</div>
            <p className="mb-2 text-sm md:text-base text-[#ffd68e]">{props.content}</p>
            <p className="mb-2 font-semibold text-sm md:text-base text-[#e6873f]">{props.publisher}</p>
            <div className="space-x-4">
                {props.git !== undefined &&
                    <a href={props.git} target="_blank">
                        <i className="fab fa-github text-gray-500 text-2xl hover:text-[#d52158] transition ease-in-out duration-300"></i>
                    </a>
                }
                {props.link !== undefined &&
                    <a href={props.link} target="_blank">
                        <i className="fas fa-link text-gray-500 text-2xl hover:text-[#d52158] transition ease-in-out duration-300"></i>
                    </a>
                }
        </div>
        </div>

    </div>
  );
}

export default PublicationsCard;