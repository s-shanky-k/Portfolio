import React from 'react';

function ProjectCard({props}) {
  return (
        // <>
        // <div className="flex items-stretch w-10/12">
        //     <div className="bg-white rounded-lg shadow-lg overflow-hidded p-8 w-3/5 -mr-12 ml-6 z-0">
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

        <>
        {props.type === 'left' &&
        <div className="flex items-stretch w-10/12 justify-center my-12">
            <div className="flex flex-col w-2/4">
                <div className="text-[#e6873f] overflow-hidded p-0 mb-2 mt-6 w-full">
                    <h2 className="text-2xl font-bold">{props.title}</h2>
                </div>
                <div className="bg-[#050505] rounded-md shadow-lg overflow-hidded p-6 w-full !z-0 my-3">
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                </div>    
                <ul className="flex text-[#e6873f] overflow-hidded p-0 my-2 w-full">
                    {props.skills.map((item, index) => 
                        <li key={index + 1} className="mr-3 text-l font-semibold">{item}</li>
                    )}
                </ul>
                <div className="overflow-hidded p-0 mt-2 w-full">
                    <i class="fab fa-github text-[#d52158] text-2xl"></i>
                </div>
            </div>
            <div className="w-2/4 bg-cover bg-center shadow-lg rounded-lg -ml-16">
                <img src={`${process.env.PUBLIC_URL}/assets/images/` + `${props.img}`} alt="" className="w-full h-full rounded-lg" />
            </div>
            
        </div>
        }

        {props.type === 'right' &&
        <div className="flex items-stretch w-10/12 justify-center my-12">
            <div className="w-2/4 bg-cover bg-center shadow-lg rounded-lg -mr-16">
                <img src={`${process.env.PUBLIC_URL}/assets/images/` + `${props.img}`} alt="" className="w-full h-full rounded-lg" />
            </div>
            <div className="flex flex-col w-2/4  text-right">
                <div className="text-[#e6873f] overflow-hidded p-0 mb-2 mt-6 w-full">
                    <h2 className="text-2xl font-bold">{props.title}</h2>
                </div>
                <div className="bg-[#050505] rounded-md shadow-lg overflow-hidded p-6 w-full z-0 my-3">
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                    <p className="mt-1 text-[#ffd68e]">More text.asjfdnasdjknf asjnfjakinfk afnjadnfjkn jnjfna</p>
                </div>    
                <ul className="flex text-[#e6873f] overflow-hidded p-0 my-2 w-full justify-end">
                    {props.skills.map((item, index) => 
                        <li key={index + 1} className="ml-3 text-l font-semibold">{item}</li>
                    )}
                </ul>
                <div className="overflow-hidded p-0 mt-2 w-full">
                    <i class="fab fa-github text-[#d52158] text-2xl"></i>
                </div>
            </div>
        </div>
        }
        </>
  );
}

export default ProjectCard;
