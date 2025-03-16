import type { Chef } from '@/types/chef';

export const snacksChefs: Chef[] = [
  {
    id: 'snack_1',
    name: "Chef Ahilya Jaiswal",
    specialty: "Traditional Indian Snacks",
    location: "Worli, Mumbai",
    rating: 4.8,
    image: "/chefs/Chef Ahilya Jaiswal.png",
    description: "Welcome to Chef Ahilya Jaiswal's kitchen! As a homemaker and passionate cook, she delights in serving up delicious, homemade dishes infused with love, care, and timeless traditional flair. Every bite is a taste of warmth and hospitality, just like the surreal mom-made food!",
    notes: [
      "Order before 8 PM for next day delivery"
    ],
    deliveryAreas: ["Worli", "Lower Parel", "Prabhadevi"],
    menu: {
      "Tea Time Snacks": [
        {
          id: "snack_104",
          name: "Moongdal Chakli",
          price: 180,
          description: "Crispy spiral snack made from moong dal (250gms)"
        },
        {
          id: "snack_105",
          name: "Shakarpara",
          price: 180,
          description: "Sweet diamond-shaped crispy snack (250gms)"
        },
        {
          id: "snack_106",
          name: "Methi Puri",
          price: 180,
          description: "Crispy puri flavored with fenugreek (250gms)"
        },
        {
          id: "snack_107",
          name: "Chaat Puri",
          price: 180,
          description: "Spicy and tangy crispy puri (250gms)"
        },
        {
          id: "snack_108",
          name: "Corn Poha",
          price: 180,
          description: "Flattened rice snack with corn (250gms)"
        },
        {
          id: "snack_109",
          name: "Roasted Poha Makhana",
          price: 180,
          description: "Roasted fox nuts with flattened rice (250gms)"
        },
        {
          id: "snack_110",
          name: "Nachni Khakra",
          price: 240,
          description: "Crispy flatbread made with finger millet (250gms)"
        },
        {
          id: "snack_111",
          name: "Jowar Khakra",
          price: 240,
          description: "Crispy flatbread made with sorghum (250gms)"
        },
        {
          id: "snack_112",
          name: "Mix Dal Khakra",
          price: 240,
          description: "Crispy flatbread made with mixed lentils (250gms)"
        },
        {
          id: "snack_113",
          name: "Chorafali Khakra",
          price: 240,
          description: "Special Gujarati style crispy khakra (250gms)"
        },
        {
          id: "snack_114",
          name: "Methi Sambariya Khakra",
          price: 240,
          description: "Fenugreek flavored special khakra (250gms)"
        },
        {
          id: "snack_115",
          name: "Methi Khakra",
          price: 240,
          description: "Fenugreek flavored crispy flatbread (250gms)"
        },
        {
          id: "snack_116",
          name: "Methi Mogra Khakra",
          price: 240,
          description: "Special fenugreek and mogra flavored khakra (250gms)"
        }
      ]
    }
  }
  // {
  //   id: 2,
  //   name: "Rajesh Patel",
  //   specialty: "Gujarati Snacks",
  //   location: "Vile Parle, Mumbai",
  //   rating: 4.7,
  //   image: "/images/chef2.jpg",
  //   description: "Creating delicious and healthy Gujarati snacks for over 15 years.",
  //   deliveryAreas: ["Vile Parle", "Santacruz", "Khar"],
  //   menu: {
  //     "Traditional Snacks": [
  //       { 
  //         id: 201, 
  //         name: "Khakhra", 
  //         price: 150, 
  //         description: "Crispy thin crackers made from whole wheat flour" 
  //       },
  //       { 
  //         id: 202, 
  //         name: "Gathiya", 
  //         price: 200, 
  //         description: "Crunchy gram flour snack" 
  //       }
  //     ],
  //     "Special Items": [
  //       { 
  //         id: 203, 
  //         name: "Fafda", 
  //         price: 180, 
  //         description: "Crispy gram flour snack strips" 
  //       }
  //     ]
  //   }
  // }
]; 