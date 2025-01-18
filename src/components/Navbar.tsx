import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-telegram-primary">TG MiniStore</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Explore</Button>
          <Button variant="ghost">Submit App</Button>
          <Button className="bg-telegram-primary hover:bg-telegram-secondary">
            Connect Wallet
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
}