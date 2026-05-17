
import { Button } from "@/components/ui/button";
import { asset } from '@/lib/asset';
import { Key } from "lucide-react";
import { Link } from "react-router-dom";

interface TitleSectionProps {
  scrollY: number;
}

const TitleSection = ({ scrollY }: TitleSectionProps) => {
  return (
    <div className="text-center mb-8">
      {/* Ornate Key - centered and enlarged */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img 
            src={asset("/lovable-uploads/4a21eb92-b21c-4695-8da5-8c2d4adcaa24.png")} 
            alt="Ornate vintage key" 
            className="w-56 h-auto object-contain"
            style={{
              transform: `translateY(${Math.sin(Date.now() * 0.002) * 5}px) scale(${1 + Math.sin(Date.now() * 0.003) * 0.1}) rotate(90deg)`,
              filter: 'drop-shadow(0 0 25px rgba(220, 38, 38, 0.7)) drop-shadow(0 0 50px rgba(220, 38, 38, 0.4))',
              animation: 'keyFloat 8s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Simplified Title - Made cleaner and more readable */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-display text-foreground relative mb-8">
        <span className="text-red-400 block mb-2">
          KEEPERS
        </span>
        <span className="text-white block">
          OF UNREALITY
        </span>
      </h1>
      
      <p className="text-2xl text-white mb-6 font-medium leading-relaxed drop-shadow-sm">
        The memories stored in Unreality are leaking out!
      </p>

      <p className="text-xl text-gray-400 mb-10 font-medium leading-relaxed drop-shadow-sm">
        We need to train your mind to save the people of Toronto from the effects of Unreality!
      </p>

      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2 shadow-xl shadow-red-600/40 text-lg px-8 py-4" asChild>
           <Link to="https://app.escapeworld.ca/book/ep2">
          <Key className="w-6 h-6" />
          Save Toronto - Book Now
        </Link>
      </Button>

      {/* Simplified keyframes for key animation only */}
      <style>{`
        @keyframes keyFloat {
          0%, 100% {
            transform: translateY(0px) scale(1) rotate(90deg);
            filter: drop-shadow(0 0 25px rgba(220, 38, 38, 0.7)) drop-shadow(0 0 50px rgba(220, 38, 38, 0.4));
          }
          25% {
            transform: translateY(-8px) scale(1.05) rotate(92deg);
            filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.9)) drop-shadow(0 0 60px rgba(220, 38, 38, 0.5));
          }
          50% {
            transform: translateY(-12px) scale(1.1) rotate(90deg);
            filter: drop-shadow(0 0 35px rgba(220, 38, 38, 1)) drop-shadow(0 0 70px rgba(220, 38, 38, 0.6));
          }
          75% {
            transform: translateY(-8px) scale(1.05) rotate(88deg);
            filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.9)) drop-shadow(0 0 60px rgba(220, 38, 38, 0.5));
          }
        }
      `}</style>
    </div>
  );
};

export default TitleSection;
