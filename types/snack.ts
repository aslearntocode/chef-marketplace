export interface SnackMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image?: string;
  category?: string;
}

export interface SnackCategory {
  category: string;
  items: SnackMenuItem[];
}

export interface SnackChef {
  id: number;
  name: string;
  image: string;
  rating: number;
  specialty: string;
  location: string;
  notes?: string[];
  menu: SnackCategory[];
} 