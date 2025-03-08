export interface MenuItem {
  id: string | number;
  name: string;
  price: number;
  description: string;
  category?: string;
  discountedPrice?: number;
  parentItem?: string;
}

// Remove CartMenuItem if it's not being used 