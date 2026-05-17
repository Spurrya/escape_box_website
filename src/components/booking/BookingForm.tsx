import { useState, useEffect } from 'react';
import { format, isBefore, startOfToday } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { experienceData, type Experience } from '@/components/experiences/experience-data';
import { toast } from '@/components/ui/sonner';
import { Loader2, Clock, Users, MapPin, CheckCircle2, ChevronLeft, Lock } from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
}

const detailsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  participants: z.coerce
    .number()
    .min(2, 'Minimum 2 participants')
    .max(8, 'Maximum 8 participants'),
});

type DetailsValues = z.infer<typeof detailsSchema>;

// ── Step indicator ─────────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: 1 | 2 | 3 }) {
  const steps = ['Experience', 'Date & Time', 'Your Details'];
  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = step > n;
        const active = step === n;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  done
                    ? 'bg-kiwi-green text-white'
                    : active
                    ? 'bg-kiwi-green text-white'
                    : 'bg-white/10 text-white/40'
                }`}
              >
                {done ? <CheckCircle2 className="w-4 h-4" /> : n}
              </div>
              <span
                className={`mt-1 text-xs font-medium ${
                  active ? 'text-kiwi-green' : done ? 'text-white/60' : 'text-white/30'
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-16 sm:w-24 h-px mb-5 mx-1 transition-colors ${
                  step > n ? 'bg-kiwi-green' : 'bg-white/15'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Step 1: Experience ─────────────────────────────────────────────────────────

function ExperienceStep({
  selected,
  onSelect,
}: {
  selected: Experience | null;
  onSelect: (e: Experience) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-2">Choose your experience</h2>
      <p className="text-white/50 mb-6 text-sm">Select the adventure you'd like to book.</p>
      <div className="grid gap-4">
        {experienceData.map((exp) => {
          const available = exp.publiclyLaunched;
          const isSelected = selected?.id === exp.id;
          return (
            <button
              key={exp.id}
              disabled={!available}
              onClick={() => available && onSelect(exp)}
              className={`relative text-left rounded-xl border p-4 transition-all duration-200 ${
                !available
                  ? 'opacity-40 cursor-not-allowed border-white/10 bg-white/5'
                  : isSelected
                  ? 'border-kiwi-green bg-kiwi-green/10 ring-1 ring-kiwi-green'
                  : 'border-white/15 bg-white/5 hover:border-kiwi-green/60 hover:bg-white/10'
              }`}
            >
              {!available && (
                <span className="absolute top-3 right-3 flex items-center gap-1 text-xs text-white/40">
                  <Lock className="w-3 h-3" /> Coming Soon
                </span>
              )}
              <div className="flex gap-4">
                <img
                  src={exp.imageSrc}
                  alt={exp.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-white text-base leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-white/50 text-xs mt-0.5 line-clamp-2">
                    {exp.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {exp.players}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate max-w-[160px]">{exp.location}</span>
                    </span>
                    <span className="font-semibold text-kiwi-green">{exp.price} / person</span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Step 2: Date & Time ────────────────────────────────────────────────────────

function DateTimeStep({
  date,
  onDateChange,
  slots,
  loadingSlots,
  selectedSlot,
  onSlotSelect,
  onBack,
  onNext,
  canNext,
}: {
  date: Date | undefined;
  onDateChange: (d: Date | undefined) => void;
  slots: TimeSlot[];
  loadingSlots: boolean;
  selectedSlot: string | null;
  onSlotSelect: (t: string) => void;
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
}) {
  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-2">Pick a date & time</h2>
      <p className="text-white/50 mb-6 text-sm">
        Weekdays: 4:00 PM & 6:00 PM &nbsp;·&nbsp; Weekends: 10:00 AM – 4:00 PM
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Calendar */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 self-start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            disabled={(d) => isBefore(d, startOfToday())}
            className="text-white"
            classNames={{
              months: 'flex flex-col',
              month: 'space-y-4',
              caption: 'flex justify-center pt-1 relative items-center text-white',
              caption_label: 'text-sm font-medium text-white',
              nav: 'space-x-1 flex items-center',
              nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white',
              nav_button_previous: 'absolute left-1',
              nav_button_next: 'absolute right-1',
              table: 'w-full border-collapse space-y-1',
              head_row: 'flex',
              head_cell: 'text-white/40 rounded-md w-9 font-normal text-[0.8rem]',
              row: 'flex w-full mt-2',
              cell: 'h-9 w-9 text-center text-sm p-0 relative',
              day: 'h-9 w-9 p-0 font-normal rounded-md text-white hover:bg-kiwi-green/20 transition-colors',
              day_selected: 'bg-kiwi-green text-white hover:bg-kiwi-green',
              day_today: 'bg-white/10 text-white',
              day_outside: 'opacity-20',
              day_disabled: 'opacity-20 cursor-not-allowed hover:bg-transparent',
            }}
          />
        </div>

        {/* Time slots */}
        <div className="flex-1">
          {!date ? (
            <div className="flex items-center justify-center h-32 text-white/30 text-sm">
              Select a date to see available times
            </div>
          ) : loadingSlots ? (
            <div className="flex items-center justify-center h-32 gap-2 text-white/40 text-sm">
              <Loader2 className="w-4 h-4 animate-spin" /> Loading times…
            </div>
          ) : (
            <div>
              <p className="text-white/50 text-xs mb-3 font-medium uppercase tracking-wider">
                {format(date, 'EEEE, MMMM d')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {slots.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    onClick={() => onSlotSelect(slot.time)}
                    className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      !slot.available
                        ? 'border-white/10 bg-white/5 text-white/25 cursor-not-allowed line-through'
                        : selectedSlot === slot.time
                        ? 'border-kiwi-green bg-kiwi-green text-white'
                        : 'border-white/20 bg-white/5 text-white hover:border-kiwi-green/60 hover:bg-kiwi-green/10'
                    }`}
                  >
                    {slot.time}
                    {!slot.available && (
                      <span className="block text-[10px] mt-0.5 text-white/20">Booked</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="ghost" onClick={onBack} className="text-white/60 hover:text-white">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canNext}
          className="bg-kiwi-green hover:bg-kiwi-green/90 text-white"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

// ── Step 3: Details ────────────────────────────────────────────────────────────

function DetailsStep({
  form,
  selectedExperience,
  selectedDate,
  selectedSlot,
  onBack,
  onSubmit,
  submitting,
}: {
  form: ReturnType<typeof useForm<DetailsValues>>;
  selectedExperience: Experience;
  selectedDate: Date;
  selectedSlot: string;
  onBack: () => void;
  onSubmit: (v: DetailsValues) => Promise<void>;
  submitting: boolean;
}) {
  return (
    <div>
      <h2 className="text-2xl font-display font-bold text-white mb-2">Your details</h2>

      {/* Booking summary */}
      <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 text-sm">
        <p className="text-white/40 uppercase text-xs tracking-wider mb-2">Booking summary</p>
        <div className="space-y-1 text-white/80">
          <div className="flex justify-between">
            <span>Experience</span>
            <span className="font-medium text-white">{selectedExperience.title}</span>
          </div>
          <div className="flex justify-between">
            <span>Date</span>
            <span className="font-medium text-white">
              {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Time</span>
            <span className="font-medium text-white">{selectedSlot}</span>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/70">Full Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Jane Smith"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/25 focus:border-kiwi-green"
                  />
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
                <FormLabel className="text-white/70">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="jane@example.com"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/25 focus:border-kiwi-green"
                  />
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
                <FormLabel className="text-white/70">
                  Phone <span className="text-white/30 font-normal">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="+1 (416) 555-0123"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/25 focus:border-kiwi-green"
                  />
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
                <FormLabel className="text-white/70">Number of Participants</FormLabel>
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => field.onChange(Math.max(2, Number(field.value) - 1))}
                    className="w-9 h-9 rounded-lg border border-white/15 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-white font-bold text-lg">
                    {field.value}
                  </span>
                  <button
                    type="button"
                    onClick={() => field.onChange(Math.min(8, Number(field.value) + 1))}
                    className="w-9 h-9 rounded-lg border border-white/15 bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    +
                  </button>
                  <span className="text-white/40 text-sm">
                    × {selectedExperience.price} ={' '}
                    <span className="text-white font-medium">
                      $
                      {(
                        Number(field.value) *
                        parseInt(selectedExperience.price.replace(/[^0-9]/g, ''))
                      ).toFixed(0)}{' '}
                      CAD
                    </span>
                  </span>
                </div>
                <FormMessage />
                <p className="text-white/40 text-xs mt-1">
                  Group larger than 10?{' '}
                  <a
                    href="mailto:escapebox.ca@gmail.com"
                    className="text-kiwi-green underline underline-offset-2 hover:text-kiwi-green/80"
                  >
                    Email us
                  </a>{' '}
                  to coordinate.
                </p>
              </FormItem>
            )}
          />

          <div className="flex justify-between pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={onBack}
              className="text-white/60 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="bg-kiwi-green hover:bg-kiwi-green/90 text-white min-w-[140px]"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Booking…
                </>
              ) : (
                'Confirm Booking'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

// ── Confirmation ───────────────────────────────────────────────────────────────

function ConfirmationScreen({
  bookingId,
  experience,
  date,
  slot,
  participants,
  name,
}: {
  bookingId: string;
  experience: Experience;
  date: Date;
  slot: string;
  participants: number;
  name: string;
}) {
  return (
    <div className="max-w-lg mx-auto text-center py-8">
      <div className="w-16 h-16 rounded-full bg-kiwi-green/15 border border-kiwi-green/30 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-8 h-8 text-kiwi-green" />
      </div>
      <h2 className="text-3xl font-display font-bold text-white mb-2">You're booked!</h2>
      <p className="text-white/50 mb-8">
        A confirmation has been sent to your email.
      </p>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left space-y-3 mb-8">
        <Row label="Name" value={name} />
        <Row label="Experience" value={experience.title} />
        <Row label="Date" value={format(date, 'EEEE, MMMM d, yyyy')} />
        <Row label="Time" value={slot} />
        <Row label="Participants" value={String(participants)} />
        <Row label="Booking ID" value={bookingId.slice(0, 8).toUpperCase()} mono />
      </div>

      <a href="/">
        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Back to home
        </Button>
      </a>
    </div>
  );
}

function Row({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-white/40">{label}</span>
      <span className={`text-white font-medium ${mono ? 'font-mono tracking-widest' : ''}`}>
        {value}
      </span>
    </div>
  );
}

// ── Root export ────────────────────────────────────────────────────────────────

export default function BookingForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [done, setDone] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const form = useForm<DetailsValues>({
    resolver: zodResolver(detailsSchema),
    defaultValues: { name: '', email: '', phone: '', participants: 2 },
  });

  useEffect(() => {
    if (!selectedDate) return;
    setSelectedSlot(null);
    setSlots([]);
    setLoadingSlots(true);
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    fetch(`/api/availability?date=${dateStr}`)
      .then((r) => r.json())
      .then((data) => setSlots(data.slots ?? []))
      .catch(() => toast.error('Failed to load available times'))
      .finally(() => setLoadingSlots(false));
  }, [selectedDate]);

  const handleSubmit = async (values: DetailsValues) => {
    if (!selectedExperience || !selectedDate || !selectedSlot) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          experienceId: selectedExperience.id,
          experienceTitle: selectedExperience.title,
          date: format(selectedDate, 'yyyy-MM-dd'),
          timeSlot: selectedSlot,
          participants: values.participants,
          name: values.name,
          email: values.email,
          phone: values.phone,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Booking failed');
      setBookingId(data.bookingId);
      setDone(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <ConfirmationScreen
        bookingId={bookingId}
        experience={selectedExperience!}
        date={selectedDate!}
        slot={selectedSlot!}
        participants={form.getValues('participants')}
        name={form.getValues('name')}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <StepIndicator step={step} />
      <div className="mt-10">
        {step === 1 && (
          <ExperienceStep
            selected={selectedExperience}
            onSelect={(exp) => {
              setSelectedExperience(exp);
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <DateTimeStep
            date={selectedDate}
            onDateChange={setSelectedDate}
            slots={slots}
            loadingSlots={loadingSlots}
            selectedSlot={selectedSlot}
            onSlotSelect={setSelectedSlot}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
            canNext={!!selectedDate && !!selectedSlot}
          />
        )}
        {step === 3 && (
          <DetailsStep
            form={form}
            selectedExperience={selectedExperience!}
            selectedDate={selectedDate!}
            selectedSlot={selectedSlot!}
            onBack={() => setStep(2)}
            onSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
}
