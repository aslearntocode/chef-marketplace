import type { MenuItem } from './menu';

export interface BaseTiffinService {
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

export type TiffinService = BaseTiffinService;

// If you need to export additional tiffin-specific types, you can add them here
export interface TiffinSubscription {
  type: 'daily' | 'weekly' | 'monthly';
  meals: 'lunch' | 'dinner' | 'both';
  price: number;
} 