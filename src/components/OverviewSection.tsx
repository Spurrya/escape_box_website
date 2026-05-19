
import { MapPin, Search, Users } from 'lucide-react';

const OverviewSection = () => {
  return (
    <section className="overview-section py-12 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-foreground mb-6">
            TORONTO IS YOUR PLAYGROUND
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step beyond the ordinary and into the unknown.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Join us on an immersive journey through the streets of Toronto, where the city itself becomes your game board and every alley, landmark, and hidden corner holds a secret waiting to be uncovered.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Escape Box fuses the adrenaline of an immersive city adventure with the brain-twisting thrill of escape room puzzles. Each box is packed with cryptic clues, curious objects, and tangible tools to help you navigate a series of puzzles that blur the line between the real and the surreal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <MapPin className="w-10 h-10 text-icon mb-4" />
              <h3 className="text-lg font-semibold mb-2">City Exploration</h3>
              <p className="text-muted-foreground">Discover Toronto's hidden gems and secret locations</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
              <Search className="w-10 h-10 text-icon mb-4" />
              <h3 className="text-lg font-semibold mb-2">Solve Puzzles</h3>
              <p className="text-muted-foreground">Challenge yourself with unique and engaging puzzles</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 col-span-2">
              <Users className="w-10 h-10 text-icon mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Building</h3>
              <p className="text-muted-foreground">Perfect for friends, family, or corporate events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
