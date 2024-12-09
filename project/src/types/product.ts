export interface Product {
  id: string;
  name: string;
  price: number;
  summary: string;
  sales: number;
  remainingProducts: number;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}