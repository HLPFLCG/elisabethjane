export interface Product {
  id: string;
  name: string;
  description?: string;
  price: string;
  stripeLink: string;
  tag: string;
  dimensions?: string;
  details?: string[];
  images?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
