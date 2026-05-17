
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { episodeData } from "@/components/episodes/episode-data";
import type { BookingFormData } from "@/types/booking";

interface BookingConfirmationProps {
  bookingData: BookingFormData;
}

const BookingConfirmation = ({ bookingData }: BookingConfirmationProps) => {
  const navigate = useNavigate();
  const experience = episodeData.find(ep => ep.id.toString() === bookingData.experienceId);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="text-muted-foreground">
            Check your email for detailed instructions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold mb-2">Booking Details</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Experience:</span>
                <span className="font-medium">{experience?.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">
                  {bookingData.date?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span className="font-medium">{bookingData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Participants:</span>
                <span className="font-medium">{bookingData.participants}</span>
              </div>
            </div>
          </div>

          <div className="border-b pb-4">
            <h3 className="font-semibold mb-2">What's Next?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>1. Check your email for the confirmation and QR code</li>
              <li>2. Pick up your Escape Box from our location</li>
              <li>3. Download required apps before your adventure</li>
              <li>4. Arrive at the starting location 15 minutes early</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground">
              If you have any questions or need to modify your booking, please contact us at{" "}
              <a href="mailto:support@kiwikingdom.com" className="text-primary hover:underline">
                support@kiwikingdom.com
              </a>
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <Button onClick={() => navigate("/")}>
              Return to Home
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingConfirmation;
