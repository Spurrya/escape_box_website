
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Star, Users } from "lucide-react";
import { episodeData } from "./episodes/episode-data";
import { Link } from "react-router-dom";

const EpisodesPreview = () => {
  // Show first 3 episodes
  const featuredEpisodes = episodeData.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Toronto through immersive puzzle adventures that will challenge your mind and show you the city like never before.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredEpisodes.map((episode) => (
            <Card key={episode.id} className="flex flex-col h-full bg-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={episode.imageSrc}
                  alt={episode.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold font-display text-foreground mb-2">{episode.title}</h3>
                <p className="text-muted-foreground text-sm">{episode.shortDescription}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-icon" />
                    <span>{episode.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-icon" />
                    <span>{episode.players}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-icon" />
                    <span>{episode.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-icon" />
                    <span>{episode.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-kiwi-green">${episode.price}</span>
                  <Button variant="outline" className="gap-2" asChild>
                    <Link to="/episodes">
                      Learn More
                      <ArrowRight className="w-4 h-4 text-icon" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesPreview;
