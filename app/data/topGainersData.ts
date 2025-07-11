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
