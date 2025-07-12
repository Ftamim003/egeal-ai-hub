import React from 'react'

import Image from 'next/image'


export type AiToolType = {
  id: number;
  image: string;
  
  title: string;
  description: string; // ✅ now it's just one paragraph
};

export const aiToolData: AiToolType[] = [
  {
    id: 1,
    image: "/coinImage.png",
    
    title: "Pick a Tool That Pays",
    description: " Browse our Tool Vault and choose ahigh-commission AI tttvvvool that fits niche.",
  },
  {
    id: 2,
    image: "/chain.png",
    
    title: "Copy Your Link & Share",
    description: "  Use our build-in DM bot or TikTok templates to spread your link across social platforms.",
  },
  {
    id: 3,
    image: "/multiCoin.png",
    
    title: "Earn $1.77 + Every Time",
    description: " You get paid whenever someone signs up through your link. it’s that simple.",
  },

];


export default function AiToolCard() {
  return (
    <div><section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[76px] gap-6 md:gap-3">
      {aiToolData.map((item,index) => (
        <div
          key={item.id}
          className=" w-[345px] h-[312px] border-[0.7px] rounded-lg mx-auto flex flex-col  border-white md:border-[#D10800]">
        

          <div className={`${index === 0 ? 'pt-0' : 'pt-12'}`}>
            <Image
            src={item.image}
            alt={item.title}
            width={147}
            height={147}
            className=" mx-auto mt-4"
          />
          </div>
          <div className=" p-4 text-white flex flex-col justify-between items-center text-center">
            <div className='w-[282px] h-[95px] mb-6'>
              <h2 className="text-[18px] md:text-[23px] md:font-semibold mb-2 leading-6">{item.title}</h2>
            <p className="text-[16px] text-[#FFFFFF] mt-2 leading-6">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section></div>
  )
}
