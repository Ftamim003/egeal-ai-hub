import React from 'react'
import { featureData } from '../data/featureData'
import Image from 'next/image'

export default function FeatureCard() {
  return (
    <div className=''>
         
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
  {featureData.map((item) => (
    <div
  key={item.id}
  className="w-[345px] h-[312px] flex flex-col justify-center shadow rounded-lg overflow-hidden mx-auto border-[0.7px]"
  style={{ borderColor: '#D10800' }}
>
  <Image
    src={item.image}
    alt={item.title}
    width={92}
    height={92}
    className="w-[92px] h-[92px] object-cover mx-auto mt-4"
  />

  <div className="p-4 text-white flex flex-col  items-center">
    <h2 className="text-xl font-bold mb-2">{item.title}</h2>

    <ul className="text-[16px] mt-2 text-[#FFFFFF]  space-y-1">
      {item.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
</div>
  ))}
</section>

    </div>
    
  )
}


