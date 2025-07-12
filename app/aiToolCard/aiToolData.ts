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
