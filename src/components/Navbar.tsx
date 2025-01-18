import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="w-full pl-9 bg-muted/50 border-none"
          />
        </div>
        <div className="flex gap-4 overflow-x-auto py-4 scrollbar-hide">
          <Button variant="ghost" className="flex items-center gap-2 shrink-0">
            <span className="text-rose-500">🎮</span>
            Games
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 shrink-0">
            <span className="text-blue-500">⚙️</span>
            Utilities
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 shrink-0">
            <span className="text-purple-500">🌐</span>
            Web3
          </Button>
          <Button variant="ghost" className="flex items-center gap-2 shrink-0">
            <span className="text-green-500">💰</span>
            Finance
          </Button>
        </div>
      </div>
    </nav>
  );
}