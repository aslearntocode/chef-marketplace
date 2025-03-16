interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  parentItem?: string;
  discountedPrice?: number;
  category?: string;
}

interface Baker {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  topDishes: string[];
  deliveryAreas: string[];
  menu: Record<string, MenuItem[]>;
  notes?: string[];
}

export const bakers: Baker[] = [
  {
    id: 'baker_2',
    name: "Baker Ruchita Shah",
    specialty: "Healthy Treats",
    location: "Lower Parel, Mumbai",
    rating: 4.8,
    image: "/chefs/Chef Ruchita Shah.png",
    description: "Chef Ruchita Shah's rendezvous with cooking was born out of her own cravings for guilt free indulgence!! Most of her menu is healthier and sugar free with a few options for our diet cheat days as well 😊",
    topDishes: ["Kaju Katli", "Rasmalai Cake", "Motichoor Ladoo"],
    notes: [
      "Turnaround time 3-4 days",
    ],
    deliveryAreas: ["Juhu", "Andheri", "Vile Parle"],
    menu: {
      "Healthy Treats": [
        { 
          id: "rs8-1", 
          name: "Granola - Nuts and Berries", 
          price: 420, 
          description: "Nuts, Seeds, Berries, Oats and Coconut toasted to perfection (150 gms)",
          parentItem: "Granola"
        },
        { 
          id: "rs8-2", 
          name: "Granola - Royal Seed", 
          price: 420, 
          description: "Nuts, Seeds, Berries, Oats and Coconut toasted to perfection (150 gms)",
          parentItem: "Granola"
        },
        { 
          id: "rs9-1", 
          name: "Almond Rocks - Roasted Almond", 
          price: 480, 
          description: "Roasted Almonds coated in rich, dark chocolate (200gms)",
          parentItem: "Almond Rocks/Barks"
        },
        { 
          id: "rs9-2", 
          name: "Almond Rocks - Spicy Chilly", 
          price: 480, 
          description: "Roasted Almonds coated in rich, dark chocolate (200gms)",
          parentItem: "Almond Rocks/Barks"
        },
        { 
          id: "rs10-1", 
          name: "Mini Button Cookies - Cookies & Cream", 
          price: 300, 
          description: "Almost too cute to eat (12 pieces)",
          parentItem: "Mini Button Cookies"
        },
        { 
          id: "rs10-2", 
          name: "Mini Button Cookies - Oats & Jaggery", 
          price: 300, 
          description: "Almost too cute to eat (12 pieces)",
          parentItem: "Mini Button Cookies"
        },
        { 
          id: "rs11", 
          name: "Stroop Waffles", 
          price: 300, 
          description: "Homemade chocolate paste sandwiched between crunchy stroops (10 pieces)"
        },
        { 
          id: "rs12-1", 
          name: "Stuffed Dates - Almond", 
          price: 240, 
          description: "Soft gooey Dates, stuffed with nuts coated in rich dark chocolate (6 pieces)",
          parentItem: "Stuffed Dates"
        },
        { 
          id: "rs12-2", 
          name: "Stuffed Dates - Walnut", 
          price: 240, 
          description: "Soft gooey Dates, stuffed with nuts coated in rich dark chocolate (6 pieces)",
          parentItem: "Stuffed Dates"
        },
        { 
          id: "rs13-1", 
          name: "Vegan Date Fudge - Walnut", 
          price: 480, 
          description: "Goodness of Dates, Almond Butter and nuts packed in one! (200gms)",
          parentItem: "Vegan Date Fudge"
        },
        { 
          id: "rs13-2", 
          name: "Vegan Date Fudge - Almond", 
          price: 480, 
          description: "Goodness of Dates, Almond Butter and nuts packed in one! (200gms)",
          parentItem: "Vegan Date Fudge"
        },
        { 
          id: "rs14-1", 
          name: "Large Cookies - Triple Chocolate Chip", 
          price: 435, 
          description: "One for the cheat day! (6 pieces)",
          parentItem: "Large Cookies"
        },
        { 
          id: "rs14-2", 
          name: "Large Cookies - Dark Chocolate Chunk", 
          price: 435, 
          description: "One for the cheat day! (6 pieces)",
          parentItem: "Large Cookies"
        },
        { 
          id: "rs15", 
          name: "Liquid Jaggery", 
          price: 205, 
          description: "Available only from November to March (200ml)"
        }
      ]
    }
  }
  // {
  //   id: 3,
  //   name: "Aisha Khan",
  //   specialty: "Healthy Desserts",
  //   location: "Powai, Mumbai",
  //   rating: 4.7,
  //   image: "/bakers/aisha.jpg",
  //   description: "Specializing in sugar-free, gluten-free, and vegan dessert options.",
  //   topDishes: ["Sugar-free Brownies", "Keto Cheesecake", "Vegan Cookie Box"],
  //   deliveryAreas: ["Powai", "Chandivali", "Hiranandani"],
  //   menu: {
  //     "Sugar-Free Desserts": [
  //       { id: "ak1", name: "Sugar-free Brownies", price: 450, description: "Rich chocolate brownies sweetened with stevia (box of 6)" },
  //       { id: "ak2", name: "Keto Cheesecake", price: 800, description: "Low-carb cheesecake with berry compote (8 inch)" }
  //     ],
  //     "Vegan Options": [
  //       { id: "ak3", name: "Vegan Cookie Box", price: 400, description: "Assorted vegan cookies (box of 12)" },
  //       { id: "ak4", name: "Vegan Chocolate Cake", price: 700, description: "Eggless and dairy-free chocolate cake (1kg)" }
  //     ],
  //     "Gluten-Free": [
  //       { id: "ak5", name: "Almond Flour Cake", price: 900, description: "Gluten-free almond cake with berries (1kg)" },
  //       { id: "ak6", name: "Quinoa Chocolate Cupcakes", price: 600, description: "Gluten-free cupcakes (box of 6)" }
  //     ],
  //     "Healthy Snack Boxes": [
  //       { id: "ak7", name: "Energy Balls Box", price: 500, description: "Mixed nuts and dates energy balls (box of 12)" }
  //     ]
  //   }
  // }
]; 