
import { Card, CardContent } from "@/components/ui/card";

interface TrainingScheduleProps {
  scrollY: number;
}

const TrainingSchedule = ({ scrollY }: TrainingScheduleProps) => {
  const scheduleSteps = [
    {
      number: "1",
      title: "Training Begins",
      symbol: "⟨ ∀ ⟩",
      subtitle: "Welcome, Seeker.",
      description: "Meet your NPC guide — a Reveal Agent assigned to help you train your mind. Memories are leaking from Unreality, and reality itself is beginning to fracture. It's up to you to restore the balance. Are you ready?"
    },
    {
      number: "2",
      title: "Mirrors",
      symbol: "◊ ∞ ◊",
      subtitle: "Mirrors are more than reflections — they are gateways.",
      description: "Learn how to use them as tools to see beyond the surface, to peer into the folds of Unreality and open the doors of your mind."
    },
    {
      number: "3",
      title: "Clan Symbols",
      symbol: "∆ ◈ Ψ",
      subtitle: "Unravel the mystery of the ancient symbols.",
      description: "These sigils hold the key to unlocking the origins of Unreality. Discover the hidden history, long-lost memories, and the moment everything fell apart."
    },
    {
      number: "4",
      title: "The Baptist Church",
      symbol: "⛪ ✚ ⛪",
      subtitle: "Step inside a forgotten place of worship.",
      description: "This sacred architecture hides the identity of the Keeper — the one who once held Unreality together. What secrets lie beneath its stained glass and stone?"
    },
    {
      number: "5",
      title: "2 Forms",
      symbol: "◯ ◈ ◯",
      subtitle: "Shapes speak. Lenses remember.",
      description: "Explore how geometric forms and optical tools are tied to memory itself. What did they see? What will you uncover?"
    },
    {
      number: "6",
      title: "Van Gogh",
      symbol: "☾ ✧ ☽",
      subtitle: "He painted what others could not see.",
      description: "Van Gogh — like many artists — had a glimpse into Unreality. His visions weren't madness, but messages. Can you learn to see as he did?"
    },
    {
      number: "7",
      title: "The Monster",
      symbol: "◥ ⚡ ◤",
      subtitle: "Something is coming through.",
      description: "The cracks are widening. Memories are escaping — twisted, hungry. Seal the breach. Face what should never have returned."
    },
    {
      number: "8",
      title: "The Facade",
      symbol: "◇ ∴ ◇",
      subtitle: "The last illusion must fall.",
      description: "Unreality's final mask is crumbling. All that remains is the truth — and your choice. Will you step forward and become its new Keeper?"
    }
  ];

  return (
    <div className="mt-20 mb-16 relative">
      <div 
        className="absolute -inset-6 bg-gradient-to-r from-black/30 via-red-600/15 to-black/30 rounded-3xl blur-2xl"
        style={{ opacity: Math.min(1, scrollY * 0.002) }}
      />
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Training Schedule</h2>
        <p className="text-xl text-white font-medium leading-relaxed">We need to train your mind to save the people of Toronto from the effects of Unreality!</p>
      </div>
      <div className="grid gap-8 relative z-10">
        {scheduleSteps.map((step, index) => (
          <Card key={index} className="bg-black/80 border-white/20 relative overflow-hidden group hover:shadow-xl hover:shadow-red-600/25 transition-all duration-500 shadow-lg">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ transform: `translateX(${scrollY * 0.03 * (index + 1)}px)` }}
            />
            <CardContent className="p-8 relative z-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-xl shadow-red-600/40">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm group-hover:opacity-0 transition-opacity duration-300">{step.title}</h3>
                    <div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xl font-bold text-red-500 drop-shadow-sm tracking-wider">{step.symbol}</span>
                    </div>
                  </div>
                  <p className="text-base font-medium text-red-500 mb-3 drop-shadow-sm">{step.subtitle}</p>
                  <p className="text-white/80 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrainingSchedule;
