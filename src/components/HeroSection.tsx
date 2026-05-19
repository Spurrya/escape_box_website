
import { Button } from "@/components/ui/button";
import { asset } from '@/lib/asset';
import { Box, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import EscapeGameBackground from "./EscapeGameBackground";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToOverview = () => {
    const overviewSection = document.querySelector('.overview-section');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperiences = () => {
    const experiencesSection = document.querySelector('.experiences-section');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pb-6">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1555487505-8eca3cfb89d6"
        >
          <source src={asset("/game-background.mp4")} type="video/mp4" />
          {/* Fallback background if video fails to load */}
          <img
            src="https://images.unsplash.com/photo-1555487505-8eca3cfb89d6"
            alt="Gaming background"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-15">
        <AnimatedBackground />
      </div>

      {/* Escape Game Background Layer */}
      <div className="absolute inset-0 z-16">
        <EscapeGameBackground />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Darker transparent rectangle behind text */}
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Toronto's <span className="text-kiwi-green-light">Outdoor Escape Room</span> & Immersive City Adventure
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Solve puzzles through downtown Toronto's streets, murals, and hidden landmarks — no room required.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="bg-kiwi-green hover:bg-kiwi-green/90 text-white gap-2" onClick={scrollToExperiences}>
              <Box className="w-5 h-5 text-icon" />
              <Link to="/experiences">
                Book Your Adventure
              </Link>
            </Button>

            {/* Call to action to scroll down */}
            <div
              onClick={scrollToOverview}
              className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group cursor-pointer"
            >
              <span className="text-sm">Scroll to Learn About Our Adventures</span>
              <ChevronDown className="w-5 h-5 animate-bounce group-hover:animate-none text-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
