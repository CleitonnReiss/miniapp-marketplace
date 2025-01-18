import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MiniAppCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

export function MiniAppCard({ name, description, image, category }: MiniAppCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            <Badge variant="secondary">{category}</Badge>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-telegram-primary hover:bg-telegram-secondary text-white">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

import { Button } from "./ui/button";