
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarCheck, CreditCard, Users } from "lucide-react";
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
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  participants: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please select the number of participants",
  }),
});

type EventRegistrationFormProps = {
  selectedEvent: any;
};

const EventRegistrationForm = ({ selectedEvent }: EventRegistrationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      participants: "1",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!selectedEvent) {
      toast.error("Please select an event first");
      return;
    }

    setIsSubmitting(true);
    
    // In a real app, we'd integrate with a payment processor here
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Registration successful! Redirecting to payment...");
      
      // In a real implementation, we would redirect to the payment gateway
      setTimeout(() => {
        window.open("https://eventbrite.com", "_blank");
      }, 1500);
      
      form.reset();
    } catch (error) {
      toast.error("Failed to process registration");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedEvent) {
    return (
      <div className="text-center py-12">
        <CalendarCheck className="mx-auto h-12 w-12 text-muted-foreground/50" />
        <p className="mt-4 text-muted-foreground">
          Please select an event from the calendar to register
        </p>
      </div>
    );
  }

  const totalPrice = selectedEvent.price * (parseInt(form.watch("participants") || "1"));

  return (
    <div>
      <div className="mb-6 pb-6 border-b">
        <h3 className="font-bold text-lg">{selectedEvent.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <CalendarCheck className="h-4 w-4 mr-1" />
          <span>
            {selectedEvent.date.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="mx-2">•</span>
          <span>{selectedEvent.time}</span>
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          <span>{selectedEvent.location}</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
          
          <FormField
            control={form.control}
            name="participants"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Participants</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of people" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[...Array(Math.min(selectedEvent.spotsLeft, 10)).keys()].map((i) => (
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

          <div className="pt-4 mt-6 border-t">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm">
                <div className="font-medium">Price per person</div>
                <div className="text-muted-foreground">${selectedEvent.price.toFixed(2)}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">Total</div>
                <div className="text-lg font-bold text-primary">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Proceed to Payment
                </>
              )}
            </Button>
            
            <div className="mt-4 text-center text-xs text-muted-foreground">
              <p>Secure payment processing via Eventbrite</p>
              <p className="mt-1">Cancellations allowed up to 48 hours before the event</p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EventRegistrationForm;
