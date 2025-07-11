import React from 'react'
import { browseToolsData } from '../data/browseToolsData'
import Image from 'next/image'

export default function BrowseTools() {
  return (
    <div className='bg-black text-white'>
        <div className='w-[290px] pt-5 md:w-[731px] mx-auto md:h-6 text-2xl md:text-[35px] flex justify-center md:pt-[84px] md:mb-[120px]'>
            <h1 className='text-center'>Browse Tools That Are Exploring Right Now</h1>
        </div>

        <div className=" px-4 py-10">
            
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {browseToolsData.map((tool) => (
          <div key={tool.id} className="flex flex-col space-y-3">
            
            <div className="border border-[#D10800] rounded-md p-4 bg-[#0A0A0A] h-[170px] flex items-center justify-center relative">
              
              <div className="absolute top-2 left-2 bg-[#D10800] text-white text-xs px-2 py-1 rounded font-medium">
                {tool.badge}
              </div>
 
              <div className=''>
                
                <Image
                   src={tool.image}
                   alt={tool.name}
                   width={tool.imageWidth}
                   height={tool.imageHeight}
                   className="object-contain"
                 />
             
              </div>
            </div>

            
            <h3 className="text-lg font-semibold">{tool.name}</h3>

            <p className="text-sm text-gray-300">{tool.subheading}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
