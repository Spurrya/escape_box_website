
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Star, Users } from "lucide-react";
import { Episode } from "./episode-data";

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <Card className="flex flex-col h-full bg-primary/5 border-primary/10 hover:border-primary/20 transition-colors">
      <CardHeader>
        <h3 className="text-2xl font-bold font-display text-foreground">{episode.title}</h3>
        <p className="text-muted-foreground">{episode.shortDescription}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <p className="text-foreground/80">{episode.description}</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-icon" />
              <span>Difficulty: {episode.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-icon" />
              <span>{episode.players} Players</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-icon" />
              <span>Duration: {episode.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-icon" />
              <span>{episode.location}</span>
            </div>
          </div>
          {episode.requirements && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {episode.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2" asChild>
          <a href={episode.bookingLink}>
            Book Now
            <ArrowRight className="w-4 h-4 text-icon" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
