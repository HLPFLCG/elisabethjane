import type { Product, NavLink } from "./types";

export const SITE_NAME = "Elisabeth Jane";
export const SITE_DESCRIPTION =
  "Hand-painted recipe boxes made to be used, loved, and passed down.";
export const SITE_URL = "https://elisabethjane.com";
export const CONTACT_EMAIL = "helloelisabethjane@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/elisabeth.jane.c";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Shop", href: "/#shop" },
  { label: "Stockists", href: "/#stockists" },
  { label: "Shipping & Policies", href: "/#policies" },
  { label: "Contact", href: "/#contact" },
];


export const PRODUCTS: readonly Product[] = [
  {
    id: "recipe-cards",
    name: "Hand-Illustrated Strawberry Garden Recipe Cards \u2013 Set of 10",
    description:
      "Original strawberry garden vine illustration on heavy-weight, archival-quality cardstock. Each card features dedicated sections for Prep Time, Cook Time, Ingredients, and Instructions.",
    price: "$10.00",
    checkoutLink: "https://buy.stripe.com/aFacN56Sf3vobZ97B39Zm02",
    tag: "Recipe Cards",
    dimensions: '4" x 6" (standard size)',
    details: [
      "Set includes 10 hand-illustrated recipe cards",
      "Heavy-weight, archival-quality cardstock",
      "Original strawberry garden vine design",
      "Sections for Prep Time, Cook Time, Ingredients & Instructions",
      "Designed to fit the large Elisabeth Jane recipe box",
    ],
    images: [
      "/images/products/FullSizeRender_VSCO.jpeg",
      "/images/products/IMG_3302.jpeg",
      "/images/products/IMG_3775_VSCO.jpeg",
      "/images/products/IMG_3771_VSCO.jpeg",
      "/images/products/IMG_3770_VSCO.jpeg",
      "/images/products/IMG_3778_VSCO.jpeg",
    ],
  },
  {
    id: "strawberry-large",
    name: "Strawberry Hand-Painted Recipe Box (Large)",
    description:
      "The classic and original Elisabeth Jane recipe box. A vintage wooden box hand-painted with strawberries that is perfect for gathering loved ones around the table.",
    price: "$30.00",
    checkoutLink: "https://buy.stripe.com/9B614n7Wj7LE0grf3v9Zm00",
    tag: "Strawberry",
    dimensions:
      '6.5" x 4.4" x 3.6" (16.5cm x 11.1cm x 9.1cm)',
    details: [
      "Fits a 4x6 card",
      "Metal Hinges",
      "Magnetic Closure",
      "Sealed with polyurethane",
      "Wrapped and shipped carefully in a small cardboard box",
      "Free local pick up",
    ],
    images: [
      "/images/products/largebox1.jpeg",
      "/images/products/largebox2.jpeg",
      "/images/products/largebox3.jpeg",
    ],
  },
  {
    id: "strawberry-small",
    name: "Strawberry Hand-Painted Recipe Box (Small)",
    description:
      "The classic and original Elisabeth Jane recipe box in a smaller size. This is for those who have smaller recipes to keep. These are limited in stock and will discontinue after they sell out.",
    price: "$20.00",
    checkoutLink: "https://buy.stripe.com/cNi9ATa4rfe6gfpcVn9Zm01",
    tag: "Strawberry",
    dimensions: '5.75" x 3.75" x 3.75" (14.6cm x 9.5cm x 9.5cm)',
    details: [
      "Fits a 3x5 card",
      "Sealed with polyurethane",
      "Wrapped and shipped carefully in a small cardboard box",
      "Free local pick up",
    ],
    images: [
      "/images/products/smallbox4.jpeg",
      "/images/products/smallbox1.jpeg",
      "/images/products/smallbox2.jpeg",
      "/images/products/smallbox3.jpeg",
    ],
  },
];