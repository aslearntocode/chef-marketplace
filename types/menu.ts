export interface MenuItem {
  id: string | number;
  name: string;
  price: number | string;
  description: string;
  category?: string;
}

// Remove CartMenuItem if it's not being used 