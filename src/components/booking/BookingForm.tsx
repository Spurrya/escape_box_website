import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { episodeData } from "@/components/episodes/episode-data";
import type { BookingFormData, TimeSlot } from "@/types/booking";

const formSchema = z.object({
  experienceId: z.string({ required_error: "Please select an experience" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  participants: z.string().min(1, "Please select number of participants"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

// Mock available time slots
const timeSlots: TimeSlot[] = [
  { id: "1", time: "10:00 AM", available: true },
  { id: "2", time: "12:00 PM", available: true },
  { id: "3", time: "2:00 PM", available: true },
  { id: "4", time: "4:00 PM", available: true },
];

interface BookingFormProps {
  onBookingComplete: (data: BookingFormData) => void;
}

const BookingForm = ({ onBookingComplete }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceId: "",
      time: "",
      participants: "2",
      name: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Convert form data to BookingFormData type
      const bookingData: BookingFormData = {
        experienceId: data.experienceId,
        date: data.date,
        time: data.time,
        participants: parseInt(data.participants),
        name: data.name,
        email: data.email,
        phone: data.phone,
      };
      
      toast.success("Booking confirmed! Check your email for details.");
      onBookingComplete(bookingData);
    } catch (error) {
      toast.error("Failed to process booking. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedExperience = episodeData.find(
    ep => ep.id.toString() === form.watch("experienceId")
  );
  
  const participantsNumber = parseInt(form.watch("participants") || "1");
  const basePrice = selectedExperience?.price || 39.99;
  const totalPrice = basePrice * participantsNumber;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="experienceId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Experience</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose an experience" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {episodeData.map((experience) => (
                              <SelectItem key={experience.id} value={experience.id.toString()}>
                                {experience.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date > new Date(2025, 11, 31)
                              }
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time slot">
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4" />
                                  <span>{field.value || "Choose time"}</span>
                                </div>
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem
                                key={slot.id}
                                value={slot.time}
                                disabled={!slot.available}
                              >
                                {slot.time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="participants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Participants</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select number of people" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[...Array(10)].map((_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                {i + 1} {i === 0 ? "Person" : "People"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {selectedExperience && (
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Experience Details</h3>
                    <p className="text-sm text-muted-foreground mb-2">{selectedExperience.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Duration:</span> {selectedExperience.duration}
                      </div>
                      <div>
                        <span className="font-medium">Difficulty:</span> {selectedExperience.difficulty}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {selectedExperience.location}
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Booking"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
            
            {selectedExperience ? (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{selectedExperience.title}</span>
                </div>
                <div className="mb-4 pb-4 border-b">
                  <div className="text-sm text-muted-foreground">
                    {form.watch("date") && format(form.watch("date"), "PPP")}
                    {form.watch("time") && ` • ${form.watch("time")}`}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {form.watch("participants") && `${form.watch("participants")} participants`}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per person</span>
                    <span>${basePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants</span>
                    <span>×{participantsNumber}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total</span>
                    <span className="text-lg font-bold text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Select an experience to see booking details
              </div>
            )}
            
            <div className="mt-6">
              <Button 
                type="button" 
                className="w-full flex items-center justify-center"
                onClick={() => document.querySelector('form')?.requestSubmit()}
                disabled={!selectedExperience || isSubmitting}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                {isSubmitting ? "Processing..." : "Proceed to Payment"}
              </Button>
              
              <div className="mt-4 text-center text-xs text-muted-foreground">
                <p>Secure payment processing</p>
                <p className="mt-1">Cancellations allowed up to 48 hours before</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingForm;
