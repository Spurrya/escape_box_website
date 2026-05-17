
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Lead Puzzle Designer",
      description: "Specializes in creating mind-bending reality-warping puzzles that challenge players to think outside the box.",
    },
    {
      name: "John Doe",
      role: "Urban Puzzle Designer",
      description: "Expert in integrating Toronto's iconic landmarks into immersive puzzle experiences.",
    },
    {
      name: "John Doe",
      role: "Mystery Puzzle Designer",
      description: "Creates intricate narrative puzzles that weave through the fabric of the city.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold font-display text-foreground mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground">
            Born from a passion for immersive storytelling and a love for Toronto's vibrant cityscape, 
            Kiwi Kingdom's Escape Box emerged as a unique blend of urban adventure and puzzle-solving. 
            We set out to transform the streets of Toronto into an expansive escape room, where every 
            corner holds a potential clue and every landmark could be part of the next breakthrough moment.
          </p>
        </section>

        {/* The Experience Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold font-display text-foreground mb-6">The Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Beyond Traditional Boundaries</h3>
              <p className="text-muted-foreground">
                Escape Box breaks free from the confines of traditional escape rooms. Armed with our 
                specially designed puzzle boxes and a smartphone, players embark on a journey that 
                weaves through the city's most iconic locations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Toronto's Hidden Secrets</h3>
              <p className="text-muted-foreground">
                Each game transforms familiar Toronto landmarks into pieces of an intricate puzzle. 
                From the historic Distillery District to the bustling streets of Queen West, every 
                location becomes part of your adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section>
          <h2 className="text-4xl font-bold font-display text-foreground mb-6">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
