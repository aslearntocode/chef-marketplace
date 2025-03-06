import { MenuItem } from './menu';

export interface TiffinService {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  notes?: string[];
  deliveryAreas: string[];
  menu: {
    [category: string]: MenuItem[];
  };
}

// If you need to export additional tiffin-specific types, you can add them here
export interface TiffinSubscription {
  type: 'daily' | 'weekly' | 'monthly';
  meals: 'lunch' | 'dinner' | 'both';
  price: number;
} 