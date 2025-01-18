import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-telegram-primary/10 to-transparent">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-telegram-primary to-ton-primary">
            Discover Amazing Telegram Mini Apps
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore a world of innovative applications built for the Telegram ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-telegram-primary hover:bg-telegram-secondary">
              Explore Apps
            </Button>
            <Button size="lg" variant="outline">
              Submit Your App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}