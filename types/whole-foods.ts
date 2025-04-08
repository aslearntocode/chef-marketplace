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
  ingredients?: string[];  // Optional list of ingredients
  benefits?: string[];  // Optional list of benefits
  storage_info?: string;  // Optional storage and shelf-life information
}

export interface ProductCategory {
  category: string;
  items: Product[];
} 