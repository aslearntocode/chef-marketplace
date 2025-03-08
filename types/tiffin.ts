import type { BaseChef } from './chef';
import { MenuItem } from './menu';

export interface TiffinService extends BaseChef {
  // Remove duplicate properties since they're inherited from BaseChef
}

// If you need to export additional tiffin-specific types, you can add them here
export interface TiffinSubscription {
  type: 'daily' | 'weekly' | 'monthly';
  meals: 'lunch' | 'dinner' | 'both';
  price: number;
} 