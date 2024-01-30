import React from 'react'
import { CompanyAbout, ScholarBot } from '../components'
import CompanyFounder from '../components/CompanyFounder'
import CompanyHero from '../components/CompanyHero'
import Demo from '../components/Demo'

const CompanyPage = () => {
  return (
    <div className='relative z-0'>
      <div >
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
      {/* <div>
        <Demo/>
      </div> */}
    </div>
  )
}

export default CompanyPage
