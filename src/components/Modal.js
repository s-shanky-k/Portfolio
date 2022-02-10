import React from 'react'
import Zoom from 'react-reveal/Zoom'

function Modal({setOpenModal, img}) {
  return (
    <Zoom duration={400}>
    <div className='flex h-full md:h-fit bg-transparent justify-center items-center absolute mt-2'>
        <div className='flex-col p-2 bg-[#800f49] rounded-xl'>
            <div className='w-fit relative'>
                    <div className="top-1 right-2 absolute hover:cursor-pointer" onClick={() => {setOpenModal(false);}}>
                        <i className='fas fa-times text-[#800f49] text-2xl'/>
                </div>
                <img className='object-cover max-h-[21rem] w-full max-w-sm md:max-h-[25.5rem] md:max-w-2xl lg:max-h-[34rem] lg:max-w-4xl rounded-lg' src={`${process.env.PUBLIC_URL}/assets/images/${img}`} alt="" />
            </div>
        </div>
    </div>
    </Zoom>
  )
}

export default Modal