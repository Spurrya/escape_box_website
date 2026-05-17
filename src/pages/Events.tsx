
import { useState } from "react";
import Navbar from "@/components/Navbar";
import EventsCalendar from "@/components/events/EventsCalendar";
import EventRegistrationForm from "@/components/events/EventRegistrationForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Events & Registrations</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our immersive escape experiences, workshops, and special events. Book individually or as a group.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Select an event from the calendar to register</CardDescription>
              </CardHeader>
              <CardContent>
                <EventsCalendar onEventSelect={setSelectedEvent} />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Event Registration</CardTitle>
                <CardDescription>
                  {selectedEvent ? 'Complete your registration' : 'Select an event to register'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EventRegistrationForm selectedEvent={selectedEvent} />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold font-display mb-6 text-center">Group & Corporate Bookings</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Private Group Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Looking for a unique team-building experience? Book a private escape room adventure for your group.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Customizable experiences for 5-30 participants</li>
                    <li>• Exclusive venue access</li>
                    <li>• Personalized puzzles and challenges</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Corporate Team Building</h3>
                  <p className="text-muted-foreground mb-4">
                    Enhance team collaboration and problem-solving skills with our specially designed corporate events.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li>• Customized challenges aligned with your goals</li>
                    <li>• Professional facilitation and debriefing</li>
                    <li>• Post-event analysis and team insights</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="mb-4 font-medium">For group bookings and corporate events, please contact our team:</p>
                <a href="mailto:events@kiwikingdom.com" className="text-primary hover:underline font-medium">
                  events@kiwikingdom.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;
