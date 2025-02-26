export interface Baker {
  id: number;
  name: string;
  image: string;
  specialty: string;
  location: string;
  description: string;
  rating: number;
  deliveryAreas: string[];
  menu: {
    [category: string]: {
      id: string;
      name: string;
      price: number;
      description: string;
    }[];
  };
} 