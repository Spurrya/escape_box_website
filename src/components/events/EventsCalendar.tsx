
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";

// Mock event data - in a real app this would come from an API
const eventData = [
  {
    id: 1,
    title: "Return from Unreality - Special Edition",
    date: new Date(2025, 4, 28), // May 28, 2025
    time: "7:00 PM - 9:00 PM",
    location: "Graffiti Alley, Toronto",
    price: 49.99,
    capacity: 12,
    spotsLeft: 4,
    description: "A special nighttime edition of our popular Return from Unreality adventure with exclusive puzzles and challenges."
  },
  {
    id: 2,
    title: "Puzzle Design Workshop",
    date: new Date(2025, 5, 5), // June 5, 2025
    time: "2:00 PM - 5:00 PM",
    location: "Kiwi Kingdom HQ",
    price: 35.00,
    capacity: 20,
    spotsLeft: 8,
    description: "Learn the art of puzzle design from our expert game creators. Materials included."
  },
  {
    id: 3,
    title: "Mystery in the Market",
    date: new Date(2025, 5, 12), // June 12, 2025
    time: "11:00 AM - 1:30 PM",
    location: "St. Lawrence Market",
    price: 59.99,
    capacity: 15,
    spotsLeft: 10,
    description: "Our newest adventure takes you through Toronto's historic St. Lawrence Market on a culinary mystery hunt."
  },
  {
    id: 4,
    title: "Escape Room Marathon",
    date: new Date(2025, 5, 26), // June 26, 2025
    time: "9:00 AM - 5:00 PM",
    location: "Multiple Locations",
    price: 129.99,
    capacity: 8,
    spotsLeft: 3,
    description: "Challenge yourself with three back-to-back escape adventures across the city. Lunch and transportation included."
  }
];

// Helper function to get events for a specific date
const getEventsForDate = (date: Date | undefined) => {
  if (!date) return [];
  
  return eventData.filter(event => 
    event.date.getDate() === date.getDate() && 
    event.date.getMonth() === date.getMonth() && 
    event.date.getFullYear() === date.getFullYear()
  );
};

// Function to check if a date has events
const hasEvents = (date: Date) => {
  return getEventsForDate(date).length > 0;
};

type EventsCalendarProps = {
  onEventSelect: (event: any) => void;
};

const EventsCalendar = ({ onEventSelect }: EventsCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  
  const dateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  // Function to highlight dates with events
  const isDayHighlighted = (date: Date) => {
    return hasEvents(date);
  };

  return (
    <div>
      <div className="flex justify-end mb-4 space-x-2">
        <Button 
          variant={viewMode === 'calendar' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => setViewMode('calendar')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          Calendar
        </Button>
        <Button 
          variant={viewMode === 'list' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => setViewMode('list')}
        >
          List
        </Button>
      </div>
      
      {viewMode === 'calendar' ? (
        <div className="space-y-4">
          <Calendar 
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border pointer-events-auto"
            modifiers={{
              highlighted: isDayHighlighted
            }}
            modifiersStyles={{
              highlighted: { 
                backgroundColor: 'rgba(155, 135, 245, 0.1)',
                fontWeight: 'bold',
                border: '1px solid rgba(155, 135, 245, 0.5)'
              }
            }}
          />
          
          {selectedDate && dateEvents.length > 0 ? (
            <div className="mt-6 space-y-4">
              <h3 className="font-medium text-lg">
                Events on {selectedDate.toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </h3>
              {dateEvents.map(event => (
                <Card key={event.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onEventSelect(event)}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.time} • {event.location}</p>
                        <p className="text-sm mt-2">{event.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-primary font-semibold">${event.price.toFixed(2)}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {event.spotsLeft} spots left
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : selectedDate ? (
            <div className="mt-6 text-center py-12 text-muted-foreground">
              No events scheduled for this date
            </div>
          ) : (
            <div className="mt-6 text-center py-12 text-muted-foreground">
              Select a date to see available events
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {eventData.map(event => (
            <Card key={event.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onEventSelect(event)}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {event.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} • {event.time} • {event.location}
                    </p>
                    <p className="text-sm mt-2">{event.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-semibold">${event.price.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {event.spotsLeft} spots left
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;
