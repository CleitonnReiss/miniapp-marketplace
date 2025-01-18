import { ArrowLeft, MoreVertical, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#1A1F2C]/80 backdrop-blur-md z-50 px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="dark:hover:bg-white/10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-1">
          <h1 className="text-lg font-semibold">Telegram Apps Center</h1>
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
            <ChevronDown className="h-3 w-3" />
          </Badge>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="dark:hover:bg-white/10">
        <MoreVertical className="h-5 w-5" />
      </Button>
    </nav>
  );
}