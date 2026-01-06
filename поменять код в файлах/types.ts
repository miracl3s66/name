export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  gender: 'men' | 'women';
  subcategory: string;
  sizes: string[];
  colors: string[];
  description: string;
  brand: string;
  uniqueFilters?: { [key: string]: string[] };
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  language: string;
  country: string;
  paymentMethod: string;
  orders: Order[];
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
}

export type Page = 'home' | 'search' | 'cart' | 'account' | 'favorites';