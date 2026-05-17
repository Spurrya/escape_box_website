
export interface BookingFormData {
  experienceId: string;
  date: Date | undefined;
  time: string;
  participants: number;
  name: string;
  email: string;
  phone: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface ExperienceDataExtended {
  id: number;
  title: string;
  description: string;
  image: string;
  difficulty: string;
  duration: string;
  location: string;
  price: number;
}
