'use client'
import Image from "next/image";
import { FaRegImages } from "react-icons/fa";

type Giveaway = {
  id: number;
  title: string;
  details: string[];
};

const giveaways: Giveaway[] = [
  {
    id: 1,
    title: "Giveaway 1",
    details: [
      "Details lorem ipsum lorem ipsum lorem ipsum",
      "Details lorem ipsum lorem ipsum lorem ipsum",
    ],
  },
  {
    id: 2,
    title: "Giveaway 2",
    details: [
      "Details lorem ipsum lorem ipsum lorem ipsum",
    ],
  },
  {
    id: 3,
    title: "Giveaway 3",
    details: [
      "Details lorem ipsum lorem ipsum lorem ipsum",
    ],
  },
  {
    id: 4,
    title: "Giveaway 4",
    details: [
      "Details lorem ipsum lorem ipsum lorem ipsum",
    ],
  },
];

export default function GiveAways() {
  return (
    <div className=" bg-black text-white flex justify-around">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-38 mt-8 mb-8 ">
        {giveaways.map(({ id, title, details }) => (
          <div key={id} className="bg-[#0D0D0D] p-6 flex md:flex-col">
            <div className="rounded-lg ">
              <FaRegImages className="text-black p-4 rounded-lg bg-white w-16" size={64} />
            </div>
            <div className="ml-3 md:ml-0">
              <h3 className="text-lg md:text-xl font-semibold  mt-3.5 md:mb-3.5 leading-6">{title}</h3>
              {details.map((detail, index) => (
                <p key={index} className="text-sm leading-6 text-gray-300">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
