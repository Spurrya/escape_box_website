
import { useSEO } from "@/hooks/useSEO";
import { ExperienceGrid } from "@/components/experiences/ExperienceGrid";
import { experienceData } from "@/components/experiences/experience-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, TentTree } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Experiences = () => {
  useSEO({
    title: 'Outdoor Escape Game in Downtown Toronto | Escape Box',
    description: 'Escape Box: Return From Unreality — a 1.5-hour outdoor adventure across downtown Toronto. Solve puzzles, find clues, see street art. Book for 2–6 players.',
    canonical: 'https://www.escapebox.ca/experiences',
  });

  const indoorExperiences = experienceData.filter(exp => exp.category === "indoor");
  const outdoorExperiences = experienceData.filter(exp => exp.category === "outdoor");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl sm:text-6xl font-bold font-display text-foreground mb-6 text-center">
            Outdoor Escape Games in Toronto
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Choose your adventure — solve puzzles, hunt street art, and explore downtown Toronto
          </p>

          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Experiences</TabsTrigger>
              <TabsTrigger value="indoor" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Indoor
              </TabsTrigger>
              <TabsTrigger value="outdoor" className="flex items-center gap-2">
                <TentTree className="h-4 w-4" />
                Outdoor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <ExperienceGrid experiences={experienceData} />
            </TabsContent>

            <TabsContent value="indoor" className="mt-6">
              <ExperienceGrid experiences={indoorExperiences} />
            </TabsContent>

            <TabsContent value="outdoor" className="mt-6">
              <ExperienceGrid experiences={outdoorExperiences} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
