import React from 'react'
import { david } from '../assets'
import { SectionWrapper } from '../hoc'
import { zoomIn } from '../utils/motion'
import { motion } from 'framer-motion'

const CompanyFounder = () => {
  return (
    <div class="container py-20 mx-auto md:px-6 font-poppins ">
  <section class=" rounded-xl">
    <div class="container mx-auto text-center lg:text-left ">
      <div class="flex grid items-center lg:grid-cols-2">
        <div class="mb-12 lg:mb-0 shadow-card rounded-3xl" >
          <div
            class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-night  dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 class="mb-8 text-3xl font-bold text-[#0369b3]">Meet our Founder</h2>
            <p class="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
             David Villavicencio is the founder and CEO of {"<DivTech> Solutions"}, he was born on June 18th, 2004 and is originally from Ecuador.
            </p>

            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Diversity
              </p>

              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Equity
              </p>

              <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Inclusion
              </p>
            </div>

            <p class="mb-0 text-neutral-500 dark:text-neutral-300">
              David Villavicencio studies Computer Science, Entrepreneurship, and Engineering at the University of North Carolina at Chapel Hill. Growing up as a first generation immigrant he saw the struggles that came with being a minority in the United States and sought out to make a change to the system. He envisions DivTech Solutions to be that change, a company that leverages technology specifically to fight for social equity and diversity. 
            </p>
          </div>
        </div>

        <div className='shadow-card'>
          <a href="https://www.youtube.com/watch?v=kY6x85RSQ6A&feature=youtu.be" target="_blank" rel="noopener noreferrer" >
            <motion.img whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }} src={david}
              class="w-full h-1/2 rounded-lg dark:shadow-black/20 shadow-card" alt="image" />
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default CompanyFounder
