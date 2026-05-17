export interface Episode {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "indoor" | "outdoor";
  price: number;
  imageSrc: string;
  capacity: {
    min: number;
    max: number;
  };
  players: string;
  location: string;
  bookingLink: string;
  requirements?: string[];
  publiclyLaunched? : boolean;
}

export const episodeData: Episode[] = [
  {
    id: "1",
    title: "The Case of the Missing Maple Syrup",
    shortDescription: "Follow the sticky trail in this sweet mystery adventure",
    description:
      "A renowned maple syrup connoisseur has reported his prized collection missing. Can you follow the sticky trail and solve the case before breakfast?",
    duration: "60-90 minutes",
    difficulty: "Easy",
    category: "indoor",
    price: 25,
    imageSrc: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&auto=format&fit=crop",
    capacity: {
      min: 2,
      max: 6,
    },
    players: "2-6 players",
    location: "Downtown Toronto",
    bookingLink: "https://app.escapeworld.ca/booking",
    requirements: ["Comfortable walking shoes", "Weather-appropriate clothing"]
  },
  {
    id: "2",
    title: "The Master Piece",
    shortDescription: "Explore the AGO and solve puzzles to create a master piece",
    description:
      "Explore the Art Gallery of Ontario and solve puzzles to create a masterpiece in this creative adventure that combines art appreciation with problem-solving.",
    duration: "2 hours",
    difficulty: "Medium",
    category: "indoor",
    price: 30,
    imageSrc: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&auto=format&fit=crop",
    capacity: {
      min: 1,
      max: 16,
    },
    players: "Up to 16 art students",
    location: "Art Gallery of Ontario",
    bookingLink: "https://app.escapeworld.ca/book/ep3",
    requirements: ["AGO admission or membership", "Notebook and pen"],
    publiclyLaunched : false
  },
  {
    id: "3",
    title: "Return to Unreality",
    shortDescription: "Learn about the history of Unreality and explore Grange Park",
    description:
      "Learn about the history of Unreality and explore Grange Park in this immersive experience that bridges past and present.",
    duration: "2 hours",
    difficulty: "Medium",
    category: "outdoor",
    price: 35,
    imageSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&auto=format&fit=crop",
    capacity: {
      min: 1,
      max: 16,
    },
    players: "Up to 16 minds in training",
    location: "Duncan St and Queen St West intersection",
    bookingLink: "https://app.escapeworld.ca/booking",
    requirements: ["Comfortable walking shoes", "Weather-appropriate clothing"]
  },
  {
    id: "4",
    title: "The Lost Artifact of Kensington Market",
    shortDescription: "Navigate eclectic streets to find a hidden treasure",
    description:
      "An ancient artifact has been hidden somewhere in Kensington Market. Navigate the eclectic streets, decipher the clues, and find the artifact before it falls into the wrong hands.",
    duration: "60-90 minutes",
    difficulty: "Medium",
    category: "outdoor",
    price: 28,
    imageSrc: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&auto=format&fit=crop",
    capacity: {
      min: 2,
      max: 4,
    },
    players: "2-4 players",
    location: "Kensington Market",
    bookingLink: "https://app.escapeworld.ca/booking",
    requirements: ["Comfortable walking shoes", "Small backpack"]
  },
  {
    id: "5",
    title: "The Great Escape from the ROM",
    shortDescription: "Escape the museum using clues hidden in exhibits",
    description:
      "You're trapped inside the Royal Ontario Museum after hours! Solve the puzzles hidden within the exhibits and find your way out before dawn.",
    duration: "75-105 minutes",
    difficulty: "Hard",
    category: "indoor",
    price: 32,
    imageSrc: "https://images.unsplash.com/photo-1594736797933-d0401ba04cbc?w=600&h=400&auto=format&fit=crop",
    capacity: {
      min: 3,
      max: 6,
    },
    players: "3-6 players",
    location: "Royal Ontario Museum",
    bookingLink: "https://app.escapeworld.ca/booking",
    requirements: ["ROM membership or admission", "Notebook and pen"]
  },
  {
    id: "6",
    title: "The Secret Society of High Park",
    shortDescription: "Uncover hidden rituals in Toronto's beloved park",
    description:
      "A secret society meets in High Park every year. Uncover their hidden location, learn their rituals, and discover the society's best-kept secret.",
    duration: "90-120 minutes",
    difficulty: "Medium",
    category: "outdoor",
    price: 38,
    imageSrc: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&auto=format&fit=crop",
    capacity: {
      min: 4,
      max: 7,
    },
    players: "4-7 players",
    location: "High Park",
    bookingLink: "https://app.escapeworld.ca/booking",
    requirements: ["Weather-appropriate clothing", "Water bottle", "Comfortable hiking shoes"]
  },
];
