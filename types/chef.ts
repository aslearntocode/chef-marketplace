export interface Chef {
  id: number;
  name: string;
  image: string;
  specialty: string;
  location: string;
  description: string;
  rating: number;
  notes?: string[];
  deliveryAreas: string[];
  menu: {
    [category: string]: {
      id: number;
      name: string;
      price: number;
      description: string;
    }[];
  };
} 