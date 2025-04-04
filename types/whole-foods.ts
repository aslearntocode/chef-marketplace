export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];  // Optional array of additional images
  category: string;
  tags: string[];  // Add tags array to the interface
}

export interface ProductCategory {
  category: string;
  items: Product[];
} 