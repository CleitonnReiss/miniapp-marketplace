import { MiniAppCard } from "./MiniAppCard";

const FEATURED_APPS = [
  {
    name: "Catap",
    description: "The ultimate play-to-earn game on TON blockchain",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Gaming",
  },
  {
    name: "BIRD",
    description: "Trade and earn rewards with the BIRD ecosystem",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Finance",
  },
  {
    name: "Scroo-G",
    description: "Play exciting blockchain games and earn rewards",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Gaming",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recently Opened</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {FEATURED_APPS.map((app) => (
          <MiniAppCard key={app.name} {...app} />
        ))}
      </div>
    </section>
  );
}