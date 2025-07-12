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
      "Leaderboard resets monthly"
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
