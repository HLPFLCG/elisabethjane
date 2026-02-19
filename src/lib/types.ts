export interface Product {
  id: string;
  name: string;
  description?: string;
  price: string;
  checkoutLink: string;
  tag: string;
  dimensions?: string;
  details?: string[];
  images?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
