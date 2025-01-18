import { Card } from "@/components/ui/card";

interface MiniAppCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

export function MiniAppCard({ name, image }: MiniAppCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full aspect-square overflow-hidden rounded-2xl hover:opacity-90 transition-opacity">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </Card>
      <span className="mt-2 text-sm font-medium text-center">{name}</span>
    </div>
  );
}