import React from 'react';
import './LandingSection.css'

function LandingSection() {
  return (
        <div className="landing-container" id="landing">

            <div className="landing-content overflow-hidden">
                <div className="landing-text">
                    <div className='small-heading'>Hey! My name is</div>
                    <div className='big-heading'>Shankar Kumar S</div>
                    <div className='code'>
                        <div><span className='text-blue-600'>const</span> <span>shankar</span>: <span>Array</span>&lt;<span className='text-green-400'>Ingredient</span>&gt; <span className='text-blue-600'>=</span> [</div>
                        <div className='pl-6'><span className='text-red-500'>Developer</span>, <span className='text-red-500'>Researcher</span>, <span className='text-red-500'>Photographer</span>, <span className='text-red-500'>Gamer</span></div>
                        <div className='pl-6'><span className='text-red-500'>Sugar</span>, <span className='text-red-500'>Spice</span>, ...<span className='text-red-500'>everythingNice</span></div>
                        <div>];</div>
                    </div>
                </div>
                {/* <div className="landing-graphic-container"> */}
                <img src={`${process.env.PUBLIC_URL}/assets/images/diamond.svg`} alt="Picture" className='animate-spin-slow h-full -mr-72' />
                {/* </div> */}
            </div>
        </div>
  );
}

export default LandingSection;
