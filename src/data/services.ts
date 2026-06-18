import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: 1,
    category: "game",
    slug: "mobile-legends",
    name: "Mobile Legends",
    inputType: "userid-server",
    logo: "https://placehold.co/120x120",
    banner: "https://placehold.co/1200x300",
    description: "Top up Mobile Legends cepat, aman dan otomatis.",
    badges: ["Instan", "Aman", "24 Jam"],
  },

  {
    id: 2,
    category: "game",
    slug: "free-fire",
    name: "Free Fire",
    inputType: "userid",
    logo: "https://placehold.co/120x120",
    banner: "https://placehold.co/1200x300",
    description: "Top up Free Fire cepat dan aman.",
    badges: ["Instan", "Murah", "24 Jam"],
  },

  {
    id: 3,
    category: "pulsa",
    slug: "telkomsel",
    name: "Pulsa Telkomsel",
    inputType: "phone",
    logo: "https://placehold.co/120x120",
    banner: "https://placehold.co/1200x300",
    description: "Isi pulsa Telkomsel otomatis.",
    badges: ["Cepat", "24 Jam"],
  },
];
