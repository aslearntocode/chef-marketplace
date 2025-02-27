export interface MenuItem {
  id: string | number;
  name: string;
  price: number | string;
  description: string;
  category?: string;
}

export interface CartMenuItem extends MenuItem {
  chefId?: number;
  bakerId?: number;
  chefName?: string;
  bakerName?: string;
} 