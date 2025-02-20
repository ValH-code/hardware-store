export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  specifications: Record<string, string>;
}