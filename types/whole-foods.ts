export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];  // Optional array of additional images
  category: string;
  tags: string[];  // Add tags array to the interface
  size?: string;  // Optional size information
  ingredients_benefits?: Record<string, string[]>;  // Optional list of benefits, each corresponding to an ingredient
}

export interface ProductCategory {
  category: string;
  items: Product[];
} 