
import React from 'react'
import { trendingData } from '../data/trendingCardData'

export default function TrendingAi() {
    
  return (
  <div>
    <div className="bg-[#010101] text-white py-20 px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {trendingData.map((card) => {
          const Icon = card.icon;  

          return (
            <div
              key={card.id}
              className="border border-[#D10800] rounded-md bg-[#0A0A0A] overflow-hidden relative md:max-w-[360px] "
            >
              <div className="relative  h-[255px] flex justify-center items-center ">
                <span className="absolute w-[77px] h-[26px] top-2 left-2 bg-[#D10800] text-center text-white text-xs font-medium px-2 py-1 rounded-md">
                  {card.badge}
                </span>

                <div className='flex justify-center'>
                    <Icon size={96} className="w-[50px] h-[50px] " />
                </div>

                <div className="absolute bottom-0 left-0 w-[500px] h-[1px] bg-[#D10800]" />
              </div>

              <div className="px-4 pt-5 text-start space-y-2 h-[104px]">
                <p className="text-sm leading-4 text-[#CCCCCC]">{card.intro}</p>
                <h3 className="text-xl leading-3.5 font-semibold">{card.title}</h3>
                <p className="text-sm leading-4 text-[#AAAAAA]">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

   
}
