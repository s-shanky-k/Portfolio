import React, { useState, useLayoutEffect } from 'react';
import './LandingSection.css'
import { ReactComponent as Diamond } from './assets/diamond.svg';
import SocialMedia from './SocialMedia';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';

function LandingSection() {
    // const [width, setWidth] = useState(window.innerWidth);
    const [animationDelay, setAnimationDelay] = useState (2000);

    // const handleAnimationDelay = () => {
    //     setWidth(window.innerWidth);
    //     if(width<=1024){
    //         setAnimationDelay(0);
    //     }
    //     else{
    //         setAnimationDelay(2000);
    //     }
    // }

    // useLayoutEffect(() => {
    //     handleAnimationDelay()
    // },[])

    // window.addEventListener("load", handleAnimationDelay);
    // window.addEventListener("resize", handleAnimationDelay);

  return (
        <div className="landing-container" id="landing">

            <div className="landing-content overflow-hidden">
                
                <div className="landing-text">
                    <div className="heading">
                        <Fade bottom delay={animationDelay+100}>
                        <div className='small-heading'>Hey! My name is</div>
                        </Fade>
                        <Fade bottom delay={animationDelay+200}>
                        <div className='big-heading'>Shankar Kumar S</div>
                        </Fade>
                    </div>
                    <Fade bottom delay={animationDelay+300}>
                    <Typist startDelay={animationDelay+600} avgTypingDelay={25} cursor={{show: false,}}>
                    <div className='code'>
                        <div><span className='text-blue-600'>const</span> <span>shankar</span>: <span>Array</span>&lt;<span className='text-green-400'>Ingredient</span>&gt; <span className='text-blue-600'>=</span> [</div>
                        <div className='pl-6'><span className='text-red-500'>Developer</span>, <span className='text-red-500'>Researcher</span>, <span className='text-red-500'>Photographer</span>, <span className='text-red-500'>Gamer</span></div>
                        <div className='pl-6'><span className='text-red-500'>Sugar</span>, <span className='text-red-500'>Spice</span>, ...<span className='text-red-500'>everythingNice</span></div>
                        <div>];</div>
                    </div>
                    </Typist>
                    </Fade>
                    <Fade bottom delay={animationDelay+4000}>
                    <div className="social-media">
                        <SocialMedia />
                    </div>
                    </Fade>
                </div>
                
                <div className="w-full overflow-hidden absolute lg:invisible">
                    <Diamond className='animate-spin-slow fill-theme-medium-pink opacity-20 mix-blend-screen'/>
                </div>
                <Fade right delay={0}>
                <div className='h-0 w-0 lg:w-full lg:h-full -mr-96'>
                    <Diamond className='animate-spin-vslow h-0 w-0 fill-theme-medium-pink lg:w-full lg:h-full'/>
                </div>
                </Fade>
            </div>
        </div>
  );
}

export default LandingSection;
