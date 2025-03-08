import type { MenuItem } from './menu';
import type { BaseChef } from './chef';

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

export interface SnackChef extends BaseChef {
  // Add any snack-specific properties here
} 