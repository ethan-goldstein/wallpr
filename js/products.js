/* WALLPR catalog.
   To add a wallpaper: drop a preview image in assets/previews/ and add an entry
   to WALLPAPERS. Previews should be downscaled/compressed (~1400px wide max) —
   full-resolution files are uploaded ONLY to the checkout provider, never here.
   buyUrl: paste the hosted-checkout link (Lemon Squeezy / Stripe Managed
   Payments / Payhip). Leave "" to show a disabled "Coming soon" button. */

const CATEGORIES = {
  sports: {
    title: "Sports",
    kicker: "Collection 01",
    tagline: "Fight nights and finish lines, rendered in thick oil strokes.",
    cover: "assets/covers/sports.webp",
    bundle: { label: "The Sports pack", price: 9.99, buyUrl: "" },
  },
  places: {
    title: "Places",
    kicker: "Collection 02",
    tagline: "Cities and coastlines the way a palette knife remembers them.",
    cover: "assets/covers/places.webp",
    bundle: { label: "The Places pack", price: 9.99, buyUrl: "" },
  },
  lifestyle: {
    title: "Lifestyle",
    kicker: "Collection 03",
    tagline: "Machines, style and slow evenings in impasto.",
    cover: "assets/covers/lifestyle.webp",
    bundle: { label: "The Lifestyle pack", price: 9.99, buyUrl: "" },
  },
  animals: {
    title: "Animals",
    kicker: "Collection 04",
    tagline: "Creatures painted in motion, texture you can almost touch.",
    cover: "assets/covers/animals.webp",
    bundle: { label: "The Animals pack", price: 9.99, buyUrl: "" },
  },
};

const WALLPAPERS = [
  {
    id: "sports-01",
    title: "Victory",
    category: "sports",
    preview: "assets/covers/sports.webp",
    sizes: ["Desktop"],
    price: 3.99,
    buyUrl: "",
  },
  {
    id: "places-01",
    title: "Santorini Gold",
    category: "places",
    preview: "assets/covers/places.webp",
    sizes: ["Desktop"],
    price: 3.99,
    buyUrl: "",
  },
  {
    id: "lifestyle-01",
    title: "Golden Gate Run",
    category: "lifestyle",
    preview: "assets/covers/lifestyle.webp",
    sizes: ["Desktop"],
    price: 3.99,
    buyUrl: "",
  },
  {
    id: "animals-01",
    title: "Night Serpent",
    category: "animals",
    preview: "assets/covers/animals.webp",
    sizes: ["Desktop"],
    price: 3.99,
    buyUrl: "",
  },
];
