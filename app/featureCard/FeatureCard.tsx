import React from "react";

import Image from "next/image";

export type FeatureType = {
  id: number;
  title: string;
  description: string[]; // ✅ Now it's an array
  image: string;
};

export const featureData: FeatureType[] = [
  {
    id: 1,
    title: "Smart Contract Logic",
    description: [
      "Founder & influencers agree to Revenue share (e.g. 70/30/10)",
      "Contract duration (e.g. month)",
      "Auto-Payout rules",
    ],
    image: "/coinImage.png",
  },
  {
    id: 2,
    title: "Gamified Points System",
    description: [
      "Users earn XP: +5 points",
      "Make a sale: +20 points",
      "Win giveaway: +50 point",
      "Leaderboard resets monthly",
    ],
    image: "/coinImage.png",
  },
  {
    id: 3,
    title: "AI Recommendation Engine (Future)",
    description: [
      "Optimized for mobile, tablet, and desktop",
      "Flexible layout components",
    ],
    image: "/coinImage.png",
  },
  {
    id: 4,
    title: "Multi Language Support",
    description: [
      "Add Swedish, Arabic, Spanish",
      "Based on Location or Button",
    ],
    image: "/coinImage.png",
  },
  {
    id: 5,
    title: "2FA / Verification (Optional)",
    description: [
      "Optional Two-Factor Authentication",
      "Secure login and account protection",
    ],
    image: "/coinImage.png",
  },
];

export default function FeatureCard() {
  return (
    <div className="">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {featureData.map((item) => (
          <div
            key={item.id}
            className=" md:max-w-[345px] min-h-[312px] rounded  border-[0.7px]"
            style={{ borderColor: "#D10800" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={92}
              height={92}
              className="  mx-auto mt-4"
            />

            <div className="p-4 text-white flex flex-col justify-center ">
              <h2 className="text-[23px] leading-[1.21] text-center font-semibold mb-2 ">
                {item.title}
              </h2>

              <ul className="ml-5 text-start text-[16px] mt-2 text-[#FFFFFF]  space-y-1">
                {item.description.map((point, index) => (
                  <li className="leading-[25px]" key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
