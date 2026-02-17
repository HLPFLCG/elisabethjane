import type { Product, NavLink } from "./types";

export const SITE_NAME = "Elisabeth Jane";
export const SITE_DESCRIPTION =
  "Hand-painted recipe boxes made to be used, loved, and passed down.";
export const SITE_URL = "https://elisabethjane.com";
export const CONTACT_EMAIL = "helloelisabethjane@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/elisabeth.jane.c";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/#shop" },
  { label: "Stockists", href: "/#stockists" },
  { label: "Shipping & Policies", href: "/#policies" },
  { label: "Contact", href: "/#contact" },
];

export const VENMO_URL = "https://venmo.com/u/Emma-Cole-724";

export const PRODUCTS: readonly Product[] = [
  {
    id: "strawberry-large",
    name: "Strawberry Hand-Painted Recipe Box: Large",
    description:
      "The classic and original Elisabeth Jane recipe box. A vintage wooden box hand-painted with strawberries that is perfect for gathering loved ones around the table.",
    price: "$30.00",
    venmoLink: "https://venmo.com/u/Emma-Cole-724",
    tag: "Strawberry",
    dimensions:
      '6.5" x 4.4" x 3.6" (16.5cm x 9.1cm x 11.1cm) exterior; 5.9" x 3.9" x 3" (15cm x 9.9cm x 7.6cm) interior',
    details: [
      "Fits a 4x6 card",
      "Metal Hinges",
      "Magnetic Closure",
      "Sealed with polyurethane",
      "Wrapped and shipped carefully in a small cardboard box",
      "Free local pick up",
    ],
    images: [
      "/images/products/large-box-1.jpg",
      "/images/products/large-box-2.jpg",
      "/images/products/large-box-3.jpg",
      "/images/products/large-box-4.jpg",
    ],
  },
  {
    id: "strawberry-small",
    name: "Strawberry Hand-Painted Recipe Box (Small)",
    description:
      "The classic and original Elisabeth Jane recipe box in a smaller size. This is for those who have smaller recipes to keep. These are limited in stock and will discontinue after they sell out.",
    price: "$20.00",
    venmoLink: "https://venmo.com/u/Emma-Cole-724",
    tag: "Strawberry",
    dimensions: '5 3/4" x 3 3/4" x 3 3/4"',
    details: [
      "Fits a 3x5 card",
      "Sealed with Polyurethane",
      "Wrapped and shipped carefully in a small cardboard box",
      "Free local pick up",
    ],
    images: [
      "/images/products/small-box-1.jpg",
      "/images/products/small-box-2.jpg",
      "/images/products/small-box-3.jpg",
      "/images/products/small-box-4.jpg",
    ],
  },
];