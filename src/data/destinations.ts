import santorini from "@/assets/dest-santorini.jpg";
import kyoto from "@/assets/dest-kyoto.jpg";
import alps from "@/assets/dest-alps.jpg";
import marrakech from "@/assets/dest-marrakech.jpg";
import bali from "@/assets/dest-bali.jpg";
import iceland from "@/assets/dest-iceland.jpg";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  image: string;
  rating: number;
  priceFrom: number;
  tags: string[];
};

export const destinations: Destination[] = [
  {
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    tagline: "Cliffside sunsets & whitewashed dreams",
    image: santorini,
    rating: 4.9,
    priceFrom: 1280,
    tags: ["Romantic", "Beach", "Culture"],
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    tagline: "Bamboo forests & timeless temples",
    image: kyoto,
    rating: 4.8,
    priceFrom: 1640,
    tags: ["Culture", "Nature", "Food"],
  },
  {
    slug: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    tagline: "Snow-dusted villages above the clouds",
    image: alps,
    rating: 4.9,
    priceFrom: 2100,
    tags: ["Adventure", "Mountain", "Luxury"],
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    country: "Morocco",
    tagline: "Spice-scented souks & lantern light",
    image: marrakech,
    rating: 4.7,
    priceFrom: 890,
    tags: ["Culture", "Shopping", "Food"],
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    tagline: "Emerald terraces & tropical calm",
    image: bali,
    rating: 4.8,
    priceFrom: 1100,
    tags: ["Nature", "Wellness", "Beach"],
  },
  {
    slug: "iceland",
    name: "Iceland",
    country: "Nordics",
    tagline: "Aurora skies & roaring waterfalls",
    image: iceland,
    rating: 4.9,
    priceFrom: 1980,
    tags: ["Adventure", "Nature", "Unique"],
  },
];
