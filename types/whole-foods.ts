export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  size: string;
  stock: number;
  image: string;
  images: string[];
}

export interface Size {
  name: string;
  value: string;
  price: number;
}

export interface Flavor {
  name: string;
  value: string;
  description: string;
}

export interface ProductVariants {
  sizes?: Size[];
  flavors?: Flavor[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  tags: string[];
  size?: string;
  variants?: ProductVariants;
  ingredients_benefits?: {
    [key: string]: string[];
  };
}

export interface ProductCategory {
  category: string;
  items: Product[];
} 