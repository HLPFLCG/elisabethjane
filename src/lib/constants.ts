import type { Product, BlogPost, NavLink } from "./types";

export const SITE_NAME = "Elisabeth Jane";
export const SITE_DESCRIPTION =
  "Hand-painted recipe boxes — whimsical, nostalgic, and made to become a timeless heirloom in your home.";
export const SITE_URL = "https://elisabethjane.com";
export const CONTACT_EMAIL = "hello@elisabethjane.com";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Shop", href: "/#shop" },
  { label: "Blog", href: "/blog" },
  { label: "Guide", href: "/guide" },
];

// Replace these with your actual Stripe Payment Links
export const PRODUCTS: readonly Product[] = [
  {
    id: "classic-floral",
    name: "Classic Floral Recipe Box",
    description:
      "A timeless floral design featuring hand-painted wildflowers in soft, muted tones. Perfect for storing your most treasured family recipes.",
    price: "$85.00",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE",
    tag: "Hand-Painted Floral",
  },
  {
    id: "garden-botanicals",
    name: "Garden Botanicals Recipe Box",
    description:
      "Inspired by cottage garden botanicals, this box features delicate hand-painted herbs and greenery with a nostalgic, homestead feel.",
    price: "$85.00",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE",
    tag: "Garden Botanicals",
  },
  {
    id: "heirloom-rose",
    name: "Heirloom Rose Recipe Box",
    description:
      "Featuring hand-painted heritage roses in warm, earthy tones. A beautiful keepsake designed to be passed down through generations.",
    price: "$90.00",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE",
    tag: "Heirloom Rose",
  },
];

export const EXTRAS: readonly Product[] = [
  {
    id: "recipe-cards",
    name: "Hand-Painted Recipe Card Set",
    price: "$24.00",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE",
    tag: "Recipe Cards",
  },
  {
    id: "gift-set",
    name: "Recipe Box Gift Set",
    price: "$110.00",
    stripeLink: "https://buy.stripe.com/YOUR_LINK_HERE",
    tag: "Gift Set",
  },
];

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "the-art-of-hand-painting",
    title: "The Art of Hand-Painting: Why Every Box Is Unique",
    excerpt:
      "Each Elisabeth Jane recipe box is painted by hand, one brushstroke at a time. Discover why embracing imperfection is what makes hand-painted art so special.",
    date: "2026-02-10",
    category: "Behind the Scenes",
    content: `
Each Elisabeth Jane recipe box is painted by hand, one brushstroke at a time. There are no stamps, no stencils, no shortcuts. And that's exactly the point.

## Why Hand-Painted?

In a world of mass production, there's something deeply meaningful about owning something made entirely by hand. When you hold an Elisabeth Jane recipe box, you're holding hours of careful, intentional work — every petal, every leaf, every delicate line placed with purpose.

## Embracing the Imperfect

No two boxes will ever look exactly the same. The florals on your box might bloom a little differently than the ones on your best friend's. A leaf might curve a slightly different way. The green might be a shade deeper or softer.

This isn't a flaw — it's the beauty of handmade art. These small variations are what make your box *yours*. They're the fingerprint of the artist, the proof that a real person sat down and created something beautiful just for you.

## The Process

Each box begins with a sketch — a loose, organic layout of where the florals and botanicals will live. From there, the base colors are layered in, building depth and warmth. Details come last: the fine lines, the tiny buds, the subtle shadows that bring each flower to life.

The entire process takes several hours per box, and every single one is a labor of love.

## A Piece of Art for Your Kitchen

We believe your kitchen deserves beautiful things. Not just functional things — but things that make you pause, smile, and feel connected to something slower and more intentional. That's what an Elisabeth Jane recipe box is all about.
    `,
  },
  {
    slug: "building-a-family-recipe-collection",
    title: "Building a Family Recipe Collection: Where to Start",
    excerpt:
      "Starting a family recipe collection can feel overwhelming. Here's a simple, heartfelt approach to gathering and preserving the recipes that matter most.",
    date: "2026-02-03",
    category: "Recipes & Traditions",
    content: `
Starting a family recipe collection can feel overwhelming. Where do you begin? What counts as a "family recipe"? Here's our heartfelt guide to gathering and preserving the recipes that matter most.

## Start with the Ones You Remember

Close your eyes and think about the meals that shaped your childhood. Your grandmother's Sunday roast. Your dad's scrambled eggs. The birthday cake that appeared every single year without fail. Those are your starting points.

You don't need a hundred recipes to start a meaningful collection. You just need the ones that carry a story.

## Ask the Family

Pick up the phone. Visit in person if you can. Ask your parents, grandparents, aunts, and uncles about the dishes they grew up eating. You'll be surprised how many recipes live only in someone's memory — never written down, passed along by watching and doing.

Write them down now, while you still can. Include the measurements (even if it's "a handful" or "until it looks right"), the techniques, and most importantly, the stories behind them.

## Don't Forget the Simple Ones

Not every recipe in your collection needs to be elaborate. Some of the most treasured family recipes are the simplest: a perfect pot of rice, a vinaigrette that goes on everything, the way someone always made toast.

Simple recipes carry just as much love as complex ones.

## Give Them a Beautiful Home

Once you've gathered your recipes, they deserve a home that honors them. An Elisabeth Jane recipe box is designed to be exactly that — a beautiful, hand-painted vessel for your family's most important food memories.

Write your recipes on cards, tuck them into your box, and know that you've created something your children and grandchildren will treasure.
    `,
  },
  {
    slug: "cottagecore-kitchen-essentials",
    title: "Cottagecore Kitchen Essentials: Creating a Space You Love",
    excerpt:
      "Transform your kitchen into a warm, whimsical cottagecore haven with these simple, intentional touches that bring beauty to everyday cooking.",
    date: "2026-01-20",
    category: "Lifestyle",
    content: `
The cottagecore aesthetic is more than a trend — it's a way of living that celebrates slowness, beauty, and the art of homemaking. Here's how to bring that warmth into your kitchen.

## Natural Materials

Start by swapping out plastic and synthetic items for natural alternatives. Wooden cutting boards, ceramic bowls, linen dish towels, and woven baskets instantly warm up a space. These materials age beautifully and develop character over time.

## Fresh Herbs & Florals

Nothing says cottagecore quite like a windowsill lined with fresh herbs or a jar of wildflowers on the counter. Rosemary, thyme, and lavender are beautiful *and* functional. Snip them straight into your cooking.

## Open Shelving

If you have the space, consider replacing a cabinet or two with open shelving. Display your prettiest dishes, your collection of vintage cookbooks, and of course, your hand-painted Elisabeth Jane recipe box.

## Warm Lighting

Swap harsh overhead lights for warm, soft lighting. A pendant light with a warm bulb, a few candles, or even string lights can completely change the atmosphere of a kitchen.

## Handmade Touches

The heart of cottagecore is the handmade. A hand-painted recipe box, a hand-thrown mug, a hand-embroidered tea towel — these small touches tell a story and make your kitchen feel uniquely yours.

## Slow Down

The most important cottagecore kitchen essential isn't something you buy — it's a mindset. Take your time. Enjoy the process of cooking. Put on music. Pour yourself a cup of tea while dinner simmers. Your kitchen is meant to be lived in, not rushed through.
    `,
  },
];
