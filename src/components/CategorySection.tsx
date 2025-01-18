import { GamepadIcon, WrenchIcon, GlobeIcon, LayoutGridIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "Games",
    icon: GamepadIcon,
    color: "text-pink-500",
  },
  {
    name: "Utilities",
    icon: WrenchIcon,
    color: "text-blue-500",
  },
  {
    name: "Web3",
    icon: GlobeIcon,
    color: "text-purple-500",
  },
  {
    name: "Management",
    icon: LayoutGridIcon,
    color: "text-green-500",
  },
];

export function CategorySection() {
  return (
    <div className="grid grid-cols-4 gap-2 px-4 mt-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className="flex flex-col items-center p-3 rounded-xl bg-black/10 dark:bg-white/5 hover:bg-black/20 dark:hover:bg-white/10 transition-colors"
        >
          <category.icon className={cn("w-6 h-6 mb-1", category.color)} />
          <span className="text-xs font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
}