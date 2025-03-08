import type { MenuItem } from './menu';

export interface BaseSnackChef {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  notes?: string[];
  deliveryAreas: string[];
  menu: {
    [key: string]: MenuItem[];
  };
}

export type SnackChef = BaseSnackChef;

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