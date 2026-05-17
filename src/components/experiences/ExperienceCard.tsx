
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Star, Users, Key, Paintbrush, Zap } from "lucide-react";
import { Experience } from "./experience-data";
import { Link } from "react-router-dom";

interface ExperienceCardProps {
  experience: Experience;
}

const getDifficultyIcon = (title: string) => {
  if (title === "Return from Unreality") {
    return Zap;
  } else if (title === "Keepers of Unreality") {
    return Key;
  } else if (title === "Bring the Colours Back") {
    return Paintbrush;
  }
  return Star;
};

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const DifficultyIcon = getDifficultyIcon(experience.title);

  return (
    <Card className="flex flex-col h-full bg-primary/5 border-primary/10 hover:border-primary/20 transition-colors">
      {experience.title === "Bring the Colours Back" ? (
        <div className="aspect-[4/3] flex items-center justify-center bg-gray-100 rounded-t-lg">
          <span className="text-xl font-bold text-gray-600">COMING SOON</span>
        </div>
      ) : (
        <div className="overflow-hidden rounded-t-lg aspect-[4/3]">
          <img
            src={experience.imageSrc}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <h3 className="text-2xl font-bold font-display text-foreground">{experience.title}</h3>
        <p className="text-muted-foreground">{experience.shortDescription}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <p className="text-foreground/80">{experience.description}</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <DifficultyIcon className="w-5 h-5 text-icon" />
              <span>Difficulty: {experience.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-icon" />
              <span>{experience.players} Players</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-icon" />
              <span>Duration: {experience.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-icon" />
              <span>{experience.location}</span>
            </div>
          </div>
          {experience.requirements && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {experience.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {experience.publiclyLaunched ? (
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2" asChild>
            <a href={experience.bookingLink}>
              Book Now
              <ArrowRight className="w-4 h-4 text-icon" />
            </a>
          </Button>
        ) : (
          <Button className="w-full bg-gray-400 text-white gap-2 cursor-not-allowed" asChild disabled>
            <a href="#">
              Coming Soon
              <ArrowRight className="w-4 h-4 text-icon" />
            </a>
          </Button>
        )}

        <Button variant="outline" className="w-full gap-2" asChild>
          <Link to={experience.route}>
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
