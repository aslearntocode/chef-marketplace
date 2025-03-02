export interface SnackMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  unit?: string;
  image?: string;
}

export interface SnackCategory {
  category: string;
  items: SnackMenuItem[];
}

export interface SnackChef {
  id: string;
  name: string;
  image: string;
  rating: number;
  specialty: string;
  location: string;
  notes?: string[];
  menu: SnackCategory[];
} 