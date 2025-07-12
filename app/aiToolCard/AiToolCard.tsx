import React from 'react'

import Image from 'next/image'
import { aiToolData } from './aiToolData'

export default function AiToolCard() {
  return (
    <div><section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[76px] gap-6 md:gap-0">
      {aiToolData.map((item,index) => (
        <div
          key={item.id}
          className="w-[345px] h-[312px] border-[0.7px] rounded-lg shadow overflow-hidden mx-auto flex flex-col  border-white md:border-[#D10800]">
        

          <div className={`${index === 0 ? 'pt-0' : 'pt-12'}`}>
            <Image
            src={item.image}
            alt={item.title}
            width={147}
            height={147}
            className=" mx-auto mt-4"
          />
          </div>
          <div className="p-4 text-white flex flex-col justify-between items-center text-center">
            <div className='w-[282px] h-[95px] mb-6'>
              <h2 className="text-[18px] md:text-[23px]  font-bold mb-2">{item.title}</h2>
            <p className="text-[16px] text-[#FFFFFF] mt-2">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section></div>
  )
}
