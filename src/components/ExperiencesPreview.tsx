
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, MapPin, Star, Users, Key, Paintbrush, Zap } from "lucide-react";
import { experienceData } from "./experiences/experience-data";
import { Link } from "react-router-dom";

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

const getExperienceLink = (index: number) => {
  return `/experience${index + 1}`;
};

const ExperiencesPreview = () => {
  // Show first 3 experiences
  const featuredExperiences = experienceData.slice(0, 3);

  return (
    <section id="experiences-section" className="py-12 bg-background">
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
          {featuredExperiences.map((experience, index) => {
            const DifficultyIcon = getDifficultyIcon(experience.title);

            return (
              <Card key={experience.id} className="flex flex-col h-full bg-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                {experience.title === "Bring the Colours Back" ? (
                  <div className="aspect-[4/3] flex items-center justify-center bg-gray-100 rounded-t-lg">
                    <span className="text-lg font-bold text-gray-600">COMING SOON</span>
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-t-lg aspect-[4/3]">
                    <img
                      src={experience.imageSrc}
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold font-display text-foreground mb-2 min-h-[3.5rem] flex items-start">{experience.title}</h3>
                  <p className="text-muted-foreground text-sm min-h-[2.5rem] flex items-start">{experience.shortDescription}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="space-y-3 text-sm text-muted-foreground flex-grow">
                    <div className="flex items-center gap-2">
                      <DifficultyIcon className="w-4 h-4 text-icon flex-shrink-0" />
                      <span>{experience.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-icon flex-shrink-0" />
                      <span>{experience.players}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-icon flex-shrink-0" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-icon flex-shrink-0" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4">
                    <span className="text-2xl font-bold text-icon">{experience.price}</span>
                    <Button variant="outline" className="gap-2" asChild>
                      <Link to={getExperienceLink(index)}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>


                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2">
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
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesPreview;
