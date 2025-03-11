export interface MenuItem {
  id: string | number;
  name: string;
  description: string;
  price: number | string;
  servingSize?: string;
  parentItem?: string;
  discountedPrice?: number;
  category?: string;
  variants?: Array<{
    name: string;
    price: number;
  }>;
  extras?: Array<{
    name: string;
    price: number;
  }>;
}

// Remove CartMenuItem if it's not being used 