import React from 'react';
import Fade from 'react-reveal/Fade';

// Example:
// <ProjectCard props={{
//     img: "pic1.jpg", 
//     link:"https://brittanychiang.com/", 
//     title:"Boom3", 
//     content:["Boom this is sikhndfiuhweiashnfasdncfjanuicnawencqnc", 
//             "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE",  
//             "ioqnncejowqnofncqoijeifjhaKLMCMAIJFQEOIWJFIONE"], 
//     skills:["Javascript",
//             "Python"], 
//     type:"left",  
//     git:"https://github.com/s-shanky-k"
// }}/>



function ProjectCard({props}) {
  return (
        // <>
        // <div className="flex items-stretch w-10/12">
        //     <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8 w-3/5 -mr-12 ml-6 z-0">
        //         <h2 className="text-2xl font-semibold">Title</h2>
        //         <span className="text-gray-600 font-semibold">This is subset</span>
        //         <p className="mt-4 text-gray-700">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
        //         <p className="mt-4 text-gray-700">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
        //         <p className="mt-4 text-gray-700">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
        //         <p className="mt-4 text-gray-700">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
        //         <p className="mt-4 text-gray-700">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
        //         <p className="mt-4 text-gray-700">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
        //     </div>        
        //     <div className="w-2/5 bg-cover bg-center shadow-lg rounded-lg -my-5" style={{backgroundImage: "url(https://images.immediate.co.uk/production/volatile/sites/4/2013/04/GettyImages-640318118-c83a508.jpg?quality=90&resize=768,574)"}}></div>
        // </div>
        // </>

        // <>
        // {props.type === 'left' &&
        // <div className="flex items-stretch w-5/6 justify-center my-12">
        //     <div className="flex flex-col w-2/4 justify-center">
        //         <div className="text-[#e6873f] p-0 mb-2 mt-6 w-full">
        //             <h2 className="text-2xl font-bold">{props.title}</h2>
        //         </div>
        //         <div className="bg-[#050505] rounded-md shadow-lg  p-6 w-full h-fit !z-0 my-3">
        //             {props.content.map((item, index) => 
        //                 <p key={index + 1} className="mt-1 text-[#ffd68e]">{item}</p>
        //             )}
        //         </div>    
        //         <ul className="flex text-[#e6873f] p-0 my-2 w-full h-fit">
        //             {props.skills.map((item, index) => 
        //                 <li key={index + 1} className="mr-3 font-semibold">{item}</li>
        //             )}
        //         </ul>
        //         <div className="p-0 mt-2 w-full space-x-4">
        //             {props.git !== undefined &&
        //                 <a href={props.git} target="_blank">
        //                     <i className="fab fa-github text-gray-500  text-2xl hover:text-[#d52158] transition ease-in-out duration-300"></i>
        //                 </a>
        //             }
        //             {props.link !== undefined &&
        //                 <a href={props.link} target="_blank">
        //                     <i className="fas fa-link text-gray-500 text-2xl hover:text-[#d52158] transition ease-in-out duration-300"></i>
        //                 </a>
        //             }
        //         </div>
        //     </div>
        //     <div className="w-2/4 bg-cover bg-center shadow-lg rounded-lg -ml-16">
        //         <img src={`${process.env.PUBLIC_URL}/assets/images/` + `${props.img}`} alt="" className="w-full h-full rounded-lg" />
        //     </div>
            
        // </div>
        // }

        // {props.type === 'right' &&
        // <div className="flex items-stretch w-5/6 justify-center my-12">
        //     <div className="w-2/4 bg-cover bg-center shadow-lg rounded-lg -mr-16">
        //         <img src={`${process.env.PUBLIC_URL}/assets/images/` + `${props.img}`} alt="" className="w-full h-full rounded-lg" />
        //     </div>
        //     <div className="flex flex-col w-2/4 text-right justify-center">
        //         <div className="text-[#e6873f] p-0 mb-2 mt-6 w-full">
        //             <h2 className="text-2xl font-bold">{props.title}</h2>
        //         </div>
        //         <div className="bg-[#050505] rounded-md shadow-lg p-6 w-full z-0 my-3">
        //             {props.content.map((item, index) => 
        //                 <p key={index + 1} className="mt-1 text-[#ffd68e]">{item}</p>
        //             )}
        //         </div>    
        //         <ul className="flex text-[#e6873f] p-0 my-2 w-full justify-end">
        //             {props.skills.map((item, index) => 
        //                 <li key={index + 1} className="ml-3 font-semibold">{item}</li>
        //             )}
        //         </ul>
        //         <div className="overflow-hidden p-0 mt-2 w-full space-x-4">
        //             {props.git !== undefined &&
        //                 <a href={props.git} target="_blank">
        //                     <i className="fab fa-github text-gray-500 text-2xl hover:text-[#d52158] transition ease-in-out duration-300"></i>
        //                 </a>
        //             }
        //             {props.link !== undefined &&
        //                 <a href={props.link} target="_blank">
        //                     <i className="fas fa-link text-gray-500 text-2xl hover:text-[#d52158] transition ease-in-out duration-300"></i>
        //                 </a>
        //             }
        //         </div>
        //     </div>
        // </div>
        // }
        // </>
        <>  
        
        {props.type === 'left' &&
        <Fade bottom>
        <div className="flex items-stretch w-5/6 justify-center my-12">
            <div className="flex flex-col w-full md:w-2/4 justify-center">
                <div className="text-[#e6873f] p-0 mb-2 mt-6 w-full !z-0">
                    <h2 className="text-xl md:text-2xl font-bold ">{props.title}</h2>
                </div>
                <div className="bg-[#050505] rounded-md shadow-lg p-6 w-full !z-0 my-3 transform transition duration-500 hover:scale-105">
                    {props.content.map((item, index) => 
                        <p key={index + 1} className="mt-1 text-[#ffd68e] text-sm md:text-base">{item}</p>
                    )}
                </div>    
                <ul className="flex text-[#e6873f] p-0 my-2 w-full !z-0">
                    {props.skills.map((item, index) => 
                        <li key={index + 1} className="mr-3 font-semibold text-sm bg-[#050505] rounded-2xl py-1 px-2 md:text-base sm:bg-transparent sm:p-0">{item}</li>
                    )}
                </ul>
                <div className="overflow-hidden p-0 mt-2 w-full space-x-4">
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
            <div className="w-4/6 md:w-2/4 shadow-lg rounded-lg -ml-52 md:-ml-16">
                <img src={`${process.env.PUBLIC_URL}/assets/images/` + `${props.img}`} alt="" className="w-full h-full object-center object-cover rounded-lg" />
            </div>
            
        </div>
        </Fade>
        }

        {props.type === 'right' &&
        <Fade bottom>
        <div className="flex items-stretch w-5/6 justify-center my-12">
            <div className="w-4/6 md:w-2/4 shadow-lg rounded-lg -mr-52 md:-mr-16">
                <img src={`${process.env.PUBLIC_URL}/assets/images/` + `${props.img}`} alt="" className="w-full h-full object-center object-cover rounded-lg" />
            </div>
            <div className="flex flex-col w-full md:w-2/4 text-right justify-center">
                <div className="text-[#e6873f] p-0 mb-2 mt-6 w-full !z-0">
                    <h2 className="text-xl md:text-2xl font-bold">{props.title}</h2>
                </div>
                <div className="bg-[#050505] rounded-md shadow-lg p-6 w-full !z-0 my-3 transform transition duration-500 hover:scale-105">
                    {props.content.map((item, index) => 
                        <p key={index + 1} className="mt-1 text-[#ffd68e] text-sm md:text-base">{item}</p>
                    )}
                </div>    
                <ul className="flex text-[#e6873f] p-0 my-2 w-full justify-end !z-0">
                    {props.skills.map((item, index) => 
                        <li key={index + 1} className="ml-3 font-semibold bg-[#050505] rounded-2xl py-1 px-2 text-sm md:text-base sm:bg-transparent sm:p-0">{item}</li>
                    )}
                </ul>
                <div className="overflow-hidden p-0 mt-2 w-full space-x-4">
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
        </Fade>
        }
        
        </>
  );
}

export default ProjectCard;
