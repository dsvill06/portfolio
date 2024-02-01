import React from 'react'
import { CompanyAbout, ScholarBot } from '../components'
import CompanyFounder from '../components/CompanyFounder'
import CompanyHero from '../components/CompanyHero'
import Demo from '../components/Demo'
import Testimonials from '../components/Testimonials'

const CompanyPage = () => {
  return (
    <div className='relative z-0 bg-black'>
      <div className='bg-black'>
        <CompanyHero/>
      </div>
      <div className=' bg-flashWhite'>
        <CompanyFounder/>
      </div>
      <div className='bg-flashWhite'>
        <CompanyAbout/>
      </div>
     
      <div className=' relative'>
        <ScholarBot/>
      </div>
      
      <div className='bg-black'>
        <Demo/>
      </div>
      <div>
        <Testimonials/>
      </div>
    </div>
  )
}

export default CompanyPage
