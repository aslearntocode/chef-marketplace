export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  servingSize?: string;
  parentItem?: string;
  discountedPrice?: number;
  category?: string;
}

// Remove CartMenuItem if it's not being used 