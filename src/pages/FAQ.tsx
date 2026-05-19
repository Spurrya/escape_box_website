import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: "What is Escape Box?",
    a: "Escape Box is Toronto's only outdoor escape room experience. Instead of a locked room, the city is your game board. You pick up a physical box of clues, then solve a series of puzzles that take you through downtown Toronto's streets, murals, and landmarks over about 1.5 hours.",
  },
  {
    q: "Where does the experience take place?",
    a: "Your meeting point is provided after booking and varies based on the adventure you choose. From there you explore the surrounding streets, alleyways, and street-art corridors on foot.",
  },
  {
    q: "How long does Escape Box take?",
    a: "Most groups finish in 60-90 minutes. The route is self-paced, so you can linger at your favourite murals or sprint through the puzzles - there's no timer pressure.",
  },
  {
    q: "How many people can play?",
    a: "Escape Box is designed for groups of 2-6 players. Larger groups (7-20+) can book multiple boxes and race each other - contact us for corporate and team-building pricing.",
  },
  {
    q: "Is Escape Box kid-friendly?",
    a: "Yes! The puzzles suit ages 10 and up. Younger children can participate with adult help. The route is entirely street-level and does not require any physical challenges beyond a comfortable 1-2 km walk.",
  },
  {
    q: "What should I wear or bring?",
    a: "Wear comfortable walking shoes and dress for the weather - the experience is fully outdoors. Your actor-guide will have everything you need. Just bring yourself and your curiosity.",
  },
  {
    q: "What happens if it rains?",
    a: "The experience runs rain or shine. The box contents are water-resistant. If severe weather is forecast, we'll work with you to reschedule at no extra charge.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Yes - boxes must be reserved online in advance. Walk-ins are subject to availability. Booking online takes less than two minutes and you'll receive a confirmation email instantly.",
  },
  {
    q: "How much does Escape Box cost?",
    a: "Pricing is per box (not per person), so the more people in your group, the better the value. Check the booking page for current rates and any seasonal promotions.",
  },
  {
    q: "Is Escape Box accessible for people with mobility needs?",
    a: "The route follows public sidewalks and is wheelchair accessible. If you have specific accessibility questions, please contact us before booking so we can confirm the current route conditions.",
  },
  {
    q: "Can I do Escape Box as a date night?",
    a: "Absolutely - it's one of our most popular uses. The 2-player format is perfect for a date, and the route ends near Queen West's restaurants and bars for an easy dinner after.",
  },
  {
    q: "Do you offer corporate or team-building packages?",
    a: "Yes. Escape Box is an ideal outdoor team-building activity for corporate groups. We offer multi-box group packages with custom debrief options. Visit our Team Building page or contact us for a quote.",
  },
  {
    q: "Is this the same as a regular escape room?",
    a: "Not at all. Traditional escape rooms lock you in one room for 60 minutes. Escape Box takes you outside - the puzzles are woven into Toronto's real streets, murals, and public spaces. Think of it as an immersive city adventure built around escape room mechanics.",
  },
  {
    q: "What happens if we get stuck?",
    a: "Your actor-guide is there with you the whole time and will nudge you in the right direction if you're stuck. The goal is to have fun, not to frustrate.",
  },
  {
    q: "Can I book a private event or bachelorette party?",
    a: "Yes! Private group bookings for bachelorettes, birthdays, and corporate outings are welcome. Multi-box packages let groups race each other across the same route. Contact us to arrange a custom group booking.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 24-48 hours ahead to guarantee your preferred date. Weekend slots fill up quickly, especially in summer.",
  },
  {
    q: "Is Escape Box available year-round?",
    a: "Yes, we operate year-round. Winter sessions are popular - the city looks stunning in the snow and the puzzle route keeps you moving. Just bundle up!",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const FAQ = () => {
  useSEO({
    title: "FAQ - Outdoor Escape Room Toronto | Escape Box",
    description: "Answers to common questions about Escape Box Toronto - how long it takes, group sizes, pricing, weather policy, team building packages, and more.",
    canonical: "https://www.escapebox.ca/faq",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.getElementById("faq-schema")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Everything you need to know about Toronto's outdoor escape room experience.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-kiwi-green">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-kiwi-green/10 border border-kiwi-green/30 rounded-xl text-center">
            <p className="text-foreground font-semibold mb-2">Still have questions?</p>
            <p className="text-muted-foreground mb-4">We're happy to help before you book.</p>
            <a
              href="/contact"
              className="inline-block bg-kiwi-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-kiwi-green/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
