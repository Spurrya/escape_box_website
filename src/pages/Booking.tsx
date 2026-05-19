import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/booking/BookingForm';
import { useSEO } from '@/hooks/useSEO';

const Booking = () => {
  useSEO({
    title: 'Book an Outdoor Escape Room in Toronto | Escape Box',
    description: 'Reserve your Escape Box adventure online. Choose your date, group size, and experience. Outdoor escape room in downtown Toronto starting at Queen & Spadina.',
    canonical: 'https://www.escapebox.ca/booking',
  });

  return (
  <div className="min-h-screen flex flex-col bg-[hsl(222.2,84%,4.9%)]">
    <Navbar />
    <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-3">
          Book Your Outdoor Escape Room in Toronto
        </h1>
        <p className="text-white/50 text-lg">
          Reserve your slot in minutes. A confirmation will be sent to your email.
        </p>
      </div>
      <BookingForm />
    </main>
    <Footer />
  </div>
  );
};

export default Booking;
