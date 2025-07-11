import React from 'react'
import FeatureCard from './FeatureCard'

export default function page() {
  return (
    <div className='bg-[#07040B] w-full h-full'>
        <div className=' flex justify-center items-center'>
            <h1 className='w-[155px] h-[42px] text-2xl text-white text-[35px] pt-5 mb-5'>Features</h1>
        </div>
        <FeatureCard></FeatureCard>
    </div>
  )
}
