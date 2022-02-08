import React from 'react';
import TimelineExperienceCard from './TimelineExperienceCard';
import TimelineEducationCard from './TimelineEducationCard';

function Timeline({props}) {
  return (
  <>
    <ol className="relative border-l-4 border-gray-700 my-5 ml-7 w-10/12 lg:w-9/12">     
        {/* <li className="mb-8 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-5 h-5 rounded-full ring-8 ring-[#410825] bg-[#800f49]">
                <i className="text-xs text-[#ed016a] fas fa-circle"></i>
            </span>
            <div className='w-28 h-12 mb-2'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/pic_wf.png`} className='max-w-full max-h-full object-contain object-left'></img>
            </div>
            <div className='flex items-baseline'>
                <div className="w-fit text-lg font-semibold text-white">Wells Fargo</div>
                <div className="ml-2 text-sm font-thin leading-none text-white">(Apr'21 - Mar'22)</div>
            </div>
            <h2 className="flex text-base items-center mb-1 font-normal text-white">SDE</h2>
            <div className="mb-4 text-sm font-normal text-gray-400 space-x-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>Bangalore</span>
            </div>
        </li> */}

        {/* <li className="mb-8 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-5 h-5 rounded-full ring-8 ring-[#410825] bg-[#800f49]">
                <i className="text-xs text-[#ed016a] fas fa-circle"></i>
            </span>
            <TimelineExperienceCard props={{name:"Wells Fargo", img:"pic_wf.png", role:"Software Developer Engineer Intern", startDate:"Apr'20", endDate:"Mar'20", location:"Bangalore"}}/>
        </li>
        <li className="mb-8 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-5 h-5 rounded-full ring-8 ring-[#410825] bg-[#800f49]">
                <i className="text-xs text-[#ed016a] fas fa-circle"></i>
            </span>
            <TimelineEducationCard props={{name:"SBOA School and Junior College", img:"pic_wf.png", domain:"High School", startDate:"Apr'20", endDate:"Mar'20"}}/>
        </li> */}
        {(props.type === 'experience') &&
            props.experience.map((item, index) =>  
                <li className="mb-8 ml-6" key={index+1}>            
                    <span className="flex absolute -left-3 justify-center items-center w-5 h-5 rounded-full ring-8 ring-[#410825] bg-[#800f49]">
                        <i className="text-xs text-[#ed016a] fas fa-circle"></i>
                    </span>
                    <TimelineExperienceCard  props={{name:item.name, img:item.img, role:item.role, startDate:item.startDate, endDate:item.endDate, location:item.location}}/>
                </li>
            )
        }
        
        {(props.type === 'education') && 
            props.education.map((item, index) =>
            <li className="mb-8 ml-6" key={index+1}>            
                <span className="flex absolute -left-3 justify-center items-center w-5 h-5 rounded-full ring-8 ring-[#410825] bg-[#800f49]">
                    <i className="text-xs text-[#ed016a] fas fa-circle"></i>
                </span>
                <TimelineEducationCard props={{name:item.name, img:item.img, domain:item.domain, startDate:item.startDate, endDate:item.endDate}}/>
            </li>
            )
        }

        {/* <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Figma v1.3.0</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 7th, 2021</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
        </li>
        <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </li> */}
    </ol>
  </>
  );
}

export default Timeline;
