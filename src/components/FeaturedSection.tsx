import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FeaturedSection() {
  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Trending This Week</h2>
          <Button variant="link" className="text-telegram-primary">
            See All
          </Button>
        </div>

        <div className="space-y-4">
          {trendingApps.map((app) => (
            <div key={app.name} className="flex items-center gap-4">
              <img
                src={app.icon}
                alt={app.name}
                className="w-12 h-12 rounded-xl"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{app.name}</h3>
                <p className="text-sm text-muted-foreground truncate">
                  {app.description}
                </p>
              </div>
              <Button variant="outline" size="sm">
                OPEN
              </Button>
            </div>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-blue-600 text-white rounded-3xl">
          <p className="text-sm font-medium mb-2">NEW ON TON</p>
          <h3 className="text-2xl font-bold mb-2">
            Enter OneTON – where farming meets fun
          </h3>
          <p className="text-blue-200 mb-4">
            Invite friends, upgrade, and grow your rewards today!
          </p>
          <Button variant="secondary" className="w-full">
            OPEN
          </Button>
        </Card>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">New</h2>
            <Button variant="link" className="text-telegram-primary">
              See All
            </Button>
          </div>

          <div className="space-y-4">
            {newApps.map((app) => (
              <div key={app.name} className="flex items-center gap-4">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-12 h-12 rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{app.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {app.description}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  OPEN
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const trendingApps = [
  {
    name: "Battles",
    description: "Epic Battles on your smartphone",
    icon: "https://placehold.co/48x48/3B82F6/ffffff?text=B",
  },
  {
    name: "PlayDeck",
    description: "PlayDeck is the ultimate gaming platform",
    icon: "https://placehold.co/48x48/10B981/ffffff?text=P",
  },
  {
    name: "ERAX",
    description: "Earn effortlessly as you dive into the game",
    icon: "https://placehold.co/48x48/6366F1/ffffff?text=E",
  },
];

const newApps = [
  {
    name: "TON Battleground",
    description: "TON-based multi-player strategy game",
    icon: "https://placehold.co/48x48/F59E0B/ffffff?text=T",
  },
  {
    name: "Sweet Garden",
    description: "Cozy mini farm — plant, grow, and earn",
    icon: "https://placehold.co/48x48/EC4899/ffffff?text=S",
  },
  {
    name: "Clockie Chaos",
    description: "The ultimate time-bending experience",
    icon: "https://placehold.co/48x48/8B5CF6/ffffff?text=C",
  },
];