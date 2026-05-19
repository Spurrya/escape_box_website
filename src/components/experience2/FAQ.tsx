
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground drop-shadow-lg">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">Is this suitable for tourists who don't know Toronto?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            Absolutely! This experience is designed to showcase Toronto's authentic culture and hidden gems. 
            Our guides will help you navigate while you solve puzzles and explore the city's most vibrant neighborhoods.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-1a" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">Is it suitable for locals?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            Yes! Locals will enjoy not only rediscovering the city but also the theatrics and game play provided from this experience.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">What if it rains during our adventure?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            Rain adds to the atmosphere! We provide weather contingencies and some locations offer shelter. 
            Just dress appropriately and embrace the Toronto experience in any weather. If a weather emergency occurs Escape Box will organize another time with you to play and enjoy the experience when it is safe to do so.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">How physically demanding is this experience?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            This involves moderate walking through Grange Park over 90 minutes. Most participants find it 
            comfortable, but please wear good walking shoes as you'll be exploring various park locations.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">Can I take photos during the experience?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            Yes! We encourage photos of the amazing park scenery and locations you'll discover. 
            Just be mindful during puzzle-solving moments to stay immersed in the story.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">What happens if I can't solve a puzzle?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            Don't worry! Our guides are there to help keep the story moving. The focus is on having fun 
            and exploring Toronto, not getting stuck. We want everyone to enjoy the full experience.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">Is this experience family-friendly?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            Yes! This experience is suitable for all ages and children 14 and under must be accompanied by an adult. 
            The puzzles are engaging for all ages, and it's a great way to explore Toronto together while having fun.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-primary/20">
          <AccordionTrigger className="text-foreground hover:text-red-500 text-left text-lg font-medium">What is the cancellation policy?</AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
            Players can cancel an experience with 48 hours notice for a full refund.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
