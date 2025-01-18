import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Share2, ExternalLink } from "lucide-react";

interface MiniAppCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
  screenshots: string[];
  details: {
    developer: string;
    version: string;
    size: string;
    lastUpdate: string;
  };
}

export function MiniAppCard({
  name,
  description,
  image,
  category,
  screenshots,
  details,
}: MiniAppCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-background/80 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="p-4 flex items-start gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <Badge variant="secondary" className="mt-1">
                  {category}
                </Badge>
              </div>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            <Button className="mt-2 w-24 bg-telegram-primary hover:bg-telegram-secondary text-white">
              OPEN
            </Button>
          </div>
        </div>

        {/* Screenshots Section */}
        <ScrollArea className="w-full whitespace-nowrap p-4">
          <div className="flex space-x-4">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-lg overflow-hidden w-48 h-96 relative group"
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Description Section */}
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          {/* App Details */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Developer</span>
                <p>{details.developer}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Version</span>
                <p>{details.version}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Size</span>
                <p>{details.size}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Last Update</span>
                <p>{details.lastUpdate}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 border-t">
        <Button className="w-full bg-telegram-primary hover:bg-telegram-secondary text-white">
          <ExternalLink className="w-4 h-4 mr-2" />
          Open in Telegram
        </Button>
      </CardFooter>
    </Card>
  );
}