import React from 'react';

// Example:

// <ProjectsSimpleCard props={{
//     img: "pic1.jpg",
//     link:"https://brittanychiang.com/",
//     title:"Boom3",
//     content:["Boom this is sik hndfi uhweiash nfasdncfja nuicnawencqnc",
//             "ioqnnce jowqnof ncqoijeif jhaKLMCMAIJ FQEOIWJF IONE",
//             "ioqnnc ejowqnofnc qoijeifjh aKLMCMAIJF QEOIWJFIONE"],
//     skills:["Javascript", "Python"],
//     git:"https://github.com/s-shanky-k"
// }}/>



function ProjectsSimpleCard({props}) {
  return (
        <div className="w-80 p-2 m-4 bg-[#050505] border-[#800f49] border-4 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <img className="max-h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <div className="p-2">
                <h2 className="font-bold text-lg mb-2 text-[#e6873f]">{props.title}</h2>
                    {props.content.map((item, index) => 
                        <p key={index + 1} className="text-sm text-[#ffd68e]">{item}</p>
                    )}
            </div>
            <ul className="flex text-[#e6873f] my-2 w-full h-fit px-2 space-x-2">
                    {props.skills.map((item, index) => 
                        <li key={index + 1} className="font-semibold">{item}</li>
                    )}
            </ul>
            <div className="mt-2">
                    {props.git !== undefined &&
                        <a href={props.git} target="_blank">
                            <i class="fab fa-github text-gray-500 text-2xl px-2 hover:text-[#d52158] transition ease-in-out duration-300"></i>
                        </a>
                    }
                    {props.link !== undefined &&
                        <a href={props.link} target="_blank">
                            <i class="fas fa-link text-gray-500 text-2xl px-2 hover:text-[#d52158] transition ease-in-out duration-300"></i>
                        </a>
                    }
            </div>
        </div>
    );
}

export default ProjectsSimpleCard;
