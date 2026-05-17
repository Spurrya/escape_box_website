import { asset } from '@/lib/asset';

export interface Experience {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  image: string;
  imageSrc: string;
  duration: string;
  difficulty: string;
  teamSize: string;
  players: string;
  location: string;
  price: string;
  features: string[];
  requirements?: string[];
  route: string;
  category?: string;
  bookingLink: string;
  publiclyLaunched: boolean;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Escape From Unreality",
    subtitle: "A mind-bending adventure through Toronto's Queen West",
    description: "Step into Toronto's most immersive adventure where reality bends and the city becomes your playground. Navigate Queen Street West as you help Luna escape from unreality.",
    shortDescription: "A mind-bending adventure through Toronto's Queen West",
    image: asset("/lovable-uploads/ace44005-a0b2-49ac-a7f7-c29071515846.png"),
    imageSrc: asset("/lovable-uploads/ace44005-a0b2-49ac-a7f7-c29071515846.png"),
    duration: "2 hours",
    difficulty: "Medium",
    location: "From Portland Street/Graffiti Alley to the intersection of Queen Street West and Duncan Street",
    price: "$36 CAD",
    features: [
      "Professional improv actors as your NPC guides",
      "Interactive street puzzles",
      "Authentic Toronto locations",
      "Immersive storytelling"
    ],
    route: "/experience1",
    bookingLink: "https://app.escapeworld.ca/book/ep1",
    category: "outdoor",
    teamSize: "2 to 10 Agents",
    players: "2 to 10 Agents",
    publiclyLaunched: true
  },
  {
    id: 2,
    title: "Keepers of Unreality",
    subtitle: "Learn about the history of Unreality and explore Grange Park",
    description: "Learn about the history of Unreality and explore Grange Park in this immersive experience that bridges past and present.",
    shortDescription: "Learn about the history of Unreality and explore Grange Park",
    image: asset("/lovable-uploads/44babdd8-2065-4520-9b3f-fcbf7534dfd1.png"),
    imageSrc: asset("/lovable-uploads/44babdd8-2065-4520-9b3f-fcbf7534dfd1.png"),
    duration: "2 hours",
    difficulty: "Medium",
    location: "Grange Park",
    price: "$36 CAD",
    features: [
      "Historical exploration",
      "Park-based adventure",
      "Immersive storytelling",
      "Outdoor experience"
    ],
    route: "/experience2",
    bookingLink: "https://app.escapeworld.ca/book/ep2",
    category: "outdoor",
    teamSize: "2 to 10 Agents",
    players: "2 to 10 Agents",
    publiclyLaunched: false
  },
  {
    id: 3,
    title: "The Master Piece",
    subtitle: "Explore the AGO and solve puzzles to create a master piece",
    description: "Explore the Art Gallery of Ontario and solve puzzles to create a masterpiece in this creative adventure that combines art appreciation with problem-solving.",
    shortDescription: "Explore the AGO and solve puzzles to create a master piece",
    image: asset("/lovable-uploads/a5ceb9a2-b720-4ea4-a47f-3f2f02c3b12b.png"),
    imageSrc: asset("/lovable-uploads/a5ceb9a2-b720-4ea4-a47f-3f2f02c3b12b.png"),
    duration: "2 hours",
    difficulty: "Medium",
    location: "Art Gallery of Ontario",
    price: "$36 CAD",
    features: [
      "AGO gallery integration",
      "Creative puzzles",
      "Art appreciation",
      "Educational experience"
    ],
    route: "/experience3",
    bookingLink: "https://app.escapeworld.ca/book/ep3",
    category: "indoor",
    teamSize: "2 to 10 Art Students",
    players: "2 to 10 Art Students",
    publiclyLaunched: false
  }
];

// Keep backward compatibility
export const experiences = experienceData;
