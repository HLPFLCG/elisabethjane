export interface Product {
  id: string;
  name: string;
  description?: string;
  price: string;
  stripeLink: string;
  tag: string;
  dimensions?: string;
  details?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
}

export interface NavLink {
  label: string;
  href: string;
}
