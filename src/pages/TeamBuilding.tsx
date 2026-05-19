import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, MapPin, Clock, CheckCircle, Trophy, Lightbulb, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: "Outdoor & Fresh Air",
    body: "Get your team out of the boardroom and into the city. No screens, no slides - just real-world puzzles in Toronto's streets.",
  },
  {
    icon: Users,
    title: "Groups of Any Size",
    body: "From a 4-person startup to a 50-person all-hands, we can scale. Multiple boxes run simultaneously so large teams race each other.",
  },
  {
    icon: Clock,
    title: "90 Minutes, No Fuss",
    body: "Pick up your box and let your actor-guide lead the way. Everything is taken care of — just show up and immerse yourself.",
  },
  {
    icon: Lightbulb,
    title: "Real Collaboration",
    body: "Puzzles require different skill sets: pattern recognition, creative thinking, navigation. Every teammate has a moment to shine.",
  },
  {
    icon: Trophy,
    title: "Competitive or Casual",
    body: "Race other teams across the same route, or play purely for the experience. Either mode works.",
  },
  {
    icon: MessageSquare,
    title: "Built-In Debrief",
    body: "The route ends near Queen West's restaurants and bars - perfect for a post-game debrief over food and drinks.",
  },
];

const formats = [
  {
    label: "Small Team Outing",
    size: "4-10 people",
    boxes: "1-2 boxes",
    desc: "Ideal for department outings, startup teams, or agency offsites. One box per team; compare finish times.",
  },
  {
    label: "Mid-Size Corporate Group",
    size: "10-30 people",
    boxes: "2-5 boxes",
    desc: "Split into teams and race. A natural competitive energy emerges without anyone having to force it.",
  },
  {
    label: "Large Group Event",
    size: "30-100+ people",
    boxes: "Custom quote",
    desc: "Multiple waves, staggered start times, or simultaneous race - we'll design the format around your headcount and schedule.",
  },
];

const faqItems = [
  {
    q: "Do we need any prior experience?",
    a: "None. Escape Box is designed for all skill levels. The puzzles reward teamwork, not trivia knowledge.",
  },
  {
    q: "How far in advance should we book?",
    a: "For groups over 20, at least two weeks in advance. Smaller teams can often be accommodated in a few days.",
  },
  {
    q: "Can you accommodate remote or hybrid teams?",
    a: "The experience is in-person in Toronto. For hybrid teams, in-person attendees can stream their run live - it makes for a surprisingly engaging watch.",
  },
  {
    q: "Is there a guide?",
    a: "Yes — every experience is led by a live actor-guide who facilitates the adventure from start to finish. They're part of the story, not just a host.",
  },
];

const TeamBuilding = () => {
  useSEO({
    title: "Outdoor Team Building Toronto | Corporate Groups | Escape Box",
    description: "Toronto's best outdoor team building activity. Escape Box puts your team on the streets solving real puzzles - no boardroom, no slides, no cheese. Groups of 4-100+.",
    canonical: "https://www.escapebox.ca/team-building",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest text-kiwi-green uppercase mb-4">
            Corporate &amp; Team Building
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
            Outdoor Team Building in Toronto That Actually Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escape Box gets your team out of the office and into the city - guided by a live actor through real puzzles across downtown Toronto's streets, murals, and alleyways. No trust falls. Just genuine collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-kiwi-green hover:bg-kiwi-green/90 text-white font-semibold px-8" asChild>
              <Link to="/booking">Book for Your Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8" asChild>
              <Link to="/contact">Get a Group Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 text-center">
            Why Teams Choose Escape Box
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Most indoor escape rooms have you done in every sense of the word after the fifth one. Escape Box is different - the city is always new.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                <Icon className="w-8 h-8 text-kiwi-green mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-12 text-center">
            How a Team-Building Session Works
          </h2>
          <ol className="space-y-6">
            {[
              { step: "1", title: "Pick Up Your Box(es)", body: "Your meeting point is provided after booking and varies based on the adventure. Collect one box per team of 4-6." },
              { step: "2", title: "Hit the Streets", body: "Open the box and follow the first clue into downtown Toronto. Puzzles are tied to real locations, murals, and landmarks along the route." },
              { step: "3", title: "Solve, Collaborate, Compete", body: "Work through the puzzle sequence together. If multiple teams are racing, track each other's progress in real time." },
              { step: "4", title: "Finish & Debrief", body: "Return the box and head to one of the nearby Queen West spots for a group debrief. We can suggest spots based on your group size." },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-kiwi-green text-white font-bold flex items-center justify-center text-lg">
                  {step}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{title}</h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Group formats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4 text-center">
            Group Formats
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            From a 4-person team lunch to a 100-person company retreat - we have a format for every size.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map(({ label, size, boxes, desc }) => (
              <div key={label} className="border border-border rounded-xl p-6 flex flex-col gap-3">
                <h3 className="font-bold text-foreground text-xl">{label}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" />{size}</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" />{boxes}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-8">What's Included</h2>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            {[
              "Physical puzzle box with all game materials",
              "Digital clue interface (mobile-optimized)",
              "Unlimited hints - no time penalty",
              "Live actor-guide included — fully facilitated",
              "Flexible scheduling (any day, any time)",
              "Custom group racing format for 10+ players",
              "Post-game venue recommendations nearby",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-kiwi-green flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-foreground mb-8 text-center">
            Team Building FAQ
          </h2>
          <div className="space-y-6">
            {faqItems.map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-6">
                <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-kiwi-green/10 border-t border-kiwi-green/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-4">
            Ready to Book Your Team Outing?
          </h2>
          <p className="text-muted-foreground mb-8">
            Small teams can book directly. For groups over 20, contact us for custom pricing and scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-kiwi-green hover:bg-kiwi-green/90 text-white font-semibold px-8" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="font-semibold px-8" asChild>
              <Link to="/contact">Contact for Large Groups</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamBuilding;
