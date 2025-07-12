import Image from 'next/image'
import React from 'react'


// app/data/topGainersData.ts

export type GainerType = {
  id: number;
  name: string;
  image:string;
  icon: string; // image path (e.g., from public/)
  stats: string;
};

export const topGainersData: GainerType[] = [
  {
    id: 1,
    name: "Claude 6",
    image:'/medal1.png',
    icon: "/claudeImage.png",
    stats: "191K+ · 20K Users",
  },
  {
    id: 2,
    name: "Deep Seek",
    image:'/medal2.png',
    icon: "/deepSeekImage.png",
    stats: "191K+ · 20K Users",
  },
  {
    id: 3,
    name: "Gemini",
    image:"/medal3.png",
    icon: "/geminiImage.png",
    stats: "191K+ · 20K Users",
  },
];


export default function TopGainers() {
  return (
    <div className='bg-[#100A12] max-w-[1140px] mx-auto pb-[52px]'>
           <div className='text-[#FFFFFF] flex flex-col items-center pt-12 '> 
               <h1 className='w-[150px] md:w-[203] h-9 md:h-6 text-center text-2xl md:text-4xl mb-6'> Top Gainers</h1>
               <p className='w-[453px] h-5 text-center pb-16'>Tools with the highest recent growth this week</p>
           </div>
           
      <div className="space-y-4 max-w-7xl mx-auto px-10 md:px-20 ">
        {topGainersData.map((item) => (
          <div
            key={item.id}
            className="border md:border-[#D10800] rounded-md px-4 py-3 flex items-center gap-4 bg-transparent"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain rounded-xl"
            />
            <Image 
             src={item.image}
              alt={item.name}
              width={16}
              height={16}
              className="-mt-3 object-contain" ></Image>
            <div>
              <h2 className="text-white text-base font-medium">{item.name}</h2>
              <p className="text-sm text-[#BBBBBB]">{item.stats}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}
