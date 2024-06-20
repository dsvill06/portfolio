import React from 'react'
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Projects,
    Origin,
    Footer
  } from '../components';
import Fiverr from '../components/Fiverr';
import MoreAbout from '../components/MoreAbout';
import Pictures from '../components/Pictures';
import PricingCards from '../components/PricingCards';


const Homepage = () => {
  return (
    <div className="relative z-0">
        <div>
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
          <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>
        </div>
        <div className=''>
          {/* <MoreAbout/> */}
          <PricingCards/>
          <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Origin />
          </div>
        </div>
         

        </div>

        
        {/* <div className="bg-about pb-3">
         <Fiverr/>
        </div> */}
        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
  )
}

export default Homepage
