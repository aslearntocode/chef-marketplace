export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  servingSize?: string;
  variants?: Array<{
    name: string;
    price: number;
  }>;
  extras?: Array<{
    name: string;
    price: number;
  }>;
  parentItem?: string;
  discountedPrice?: number;
  category?: string;
}

// Remove CartMenuItem if it's not being used 