// app/data/launchedToolsData.ts

export type ToolType = {
  id: number;
  name: string;
  image: string;
  badge: string;
  subheading: string;
   imageWidth: number;
  imageHeight: number;
};

export const browseToolsData: ToolType[] = [
  {
    id: 1,
    name: "ChatGPT 4",
    image: "/chatGpt4.png",
    badge: "Trending · Launched 1 month ago",
    subheading: "A free-to-use AI system for conversations, insights, and task automation.",
    imageWidth: 175,
    imageHeight: 151,
  },
  {
    id: 2,
    name: "SeaArt.ai",
    image: "/explorer.png",
    badge: "Trending · Launched 1 month ago",
    subheading: "A free-to-use AI system for conversations, insights, and task automation.",
    imageWidth: 147,
    imageHeight: 126,
  },
  {
    id: 3,
    name: "Pixel Cut",
    image: "/pixelCut.png",
    badge: "Trending · Launched 1 month ago",
    subheading: "A free-to-use AI system for conversations, insights, and task automation.",
    imageWidth: 161,
    imageHeight: 139,
  },
  {
    id: 4,
    name: "Pix Verse.ai",
    image: "/videoImage.png",
    badge: "Trending · Launched 1 month ago",
    subheading: "A free-to-use AI system for conversations, insights, and task automation.",
       imageWidth: 81,
    imageHeight: 66,
  },
];
