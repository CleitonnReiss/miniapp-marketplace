import { MiniAppCard } from "./MiniAppCard";

const FEATURED_APPS = [
  {
    name: "CryptoWallet",
    description: "Secure and easy-to-use wallet for managing your crypto assets on Telegram",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Finance",
  },
  {
    name: "GameHub",
    description: "Play exciting blockchain games and earn rewards with friends",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Gaming",
  },
  {
    name: "NFT Gallery",
    description: "Showcase and trade your NFT collection directly in Telegram",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Art",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Mini Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_APPS.map((app) => (
            <MiniAppCard key={app.name} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
}