import type { MenuItem } from './menu';

export interface BaseChef {
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

export type Chef = BaseChef; 