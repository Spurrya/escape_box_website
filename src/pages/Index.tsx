
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import ExperiencesPreview from "@/components/ExperiencesPreview";
import InstagramFeed from "@/components/InstagramFeed";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: 'Escape Box - Immersive Games in Toronto',
    description: "Toronto's only outdoor escape room. Solve puzzles, hunt street art, explore downtown. 1.5 hrs. Great for groups, dates & team building. Book online.",
    canonical: 'https://www.escapebox.ca/',
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-grow pb-20">
        <div className="animate-fade-in" style={{ animationDuration: '0.5s' }}>
          <HeroSection />
        </div>
        <div className="animate-fade-in" style={{ animationDuration: '0.5s', animationDelay: '0.2s', animationFillMode: 'both' }}>
          <OverviewSection />
        </div>
        <div className="animate-fade-in" style={{ animationDuration: '0.5s', animationDelay: '0.4s', animationFillMode: 'both' }}>
          <ExperiencesPreview />
        </div>
        <div className="animate-fade-in" style={{ animationDuration: '0.5s', animationDelay: '0.6s', animationFillMode: 'both' }}>
          <InstagramFeed />
        </div>
      </div>
      <Footer />

      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-kiwi-green border-t border-kiwi-green/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Button
            size="lg"
            className="w-full bg-kiwi-green text-white hover:bg-kiwi-green/90 font-semibold gap-2 border-0"
            asChild
          ><Link to="/experiences">
              <Box className="w-5 h-5 text-icon" />
              Book Your Adventure
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
