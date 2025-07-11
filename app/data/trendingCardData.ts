// app/data/cardInfoData.ts
import { FaImage } from "react-icons/fa";
import { IconType } from "react-icons";
export type InfoCardType = {
  id: number;
  image: string;
  intro: string;
  badge: string;
  icon: IconType;
  title: string;
  description: string;
};

export const trendingData: InfoCardType[] = [
  {
    id: 1,
    image:"",
    intro: "AI Tool 1",
    badge: "Trending",
    icon: FaImage,
    title: "Details About Tool 1",
    description: "Link ",
  },
  {
    id: 2,
    image: "/example2.png",
    intro: "AI Tool 1",
    badge: "Trending",
    icon: FaImage,
    title: "Details About Tool 1",
    description: "Link ",
  },
  {
    id: 3,
    image: "/example3.png",
    intro: "AI Tool 1",
    badge: "Trending",
    icon: FaImage, 
    title: "Details About Tool 1",
    description: "Link ",
  },
];
