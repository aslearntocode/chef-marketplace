import type { Chef } from '@/types/chef';

interface Chef {
  id: string;  // Change from number to string
  name: string;
  specialty: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  deliveryAreas: string[];
  menu: {
    // "Savory Snacks": [
    //   { 
    //     id: 101, 
    //     name: "Chakli", 
    //     price: 250, 
    //     description: "Crispy spiral-shaped snack made from rice flour and spices" 
    //   },
    //   { 
    //     id: 102, 
    //     name: "Mixture", 
    //     price: 200, 
    //     description: "Crunchy mix of various fried ingredients and spices" 
    //   }
    // ],
    // "Sweet Snacks": [
    //   { 
    //     id: 103, 
    //     name: "Sweet Chivda", 
    //     price: 300, 
    //     description: "Sweet and crunchy flattened rice mixture" 
    //   }
    // ],
    "Tea Time Snacks": [
      {
        id: 104,
        name: "Moongdal Chakli",
        price: 180,
        description: "Crispy spiral snack made from moong dal (250gms)"
      },
      {
        id: 105,
        name: "Shakarpara",
        price: 180,
        description: "Sweet diamond-shaped crispy snack (250gms)"
      },
      {
        id: 106,
        name: "Methi Puri",
        price: 180,
        description: "Crispy puri flavored with fenugreek (250gms)"
      },
      {
        id: 107,
        name: "Chaat Puri",
        price: 180,
        description: "Spicy and tangy crispy puri (250gms)"
      },
      {
        id: 108,
        name: "Corn Poha",
        price: 180,
        description: "Flattened rice snack with corn (250gms)"
      },
      {
        id: 109,
        name: "Roasted Poha Makhana",
        price: 180,
        description: "Roasted fox nuts with flattened rice (250gms)"
      },
      {
        id: 110,
        name: "Nachni Khakra",
        price: 240,
        description: "Crispy flatbread made with finger millet (250gms)"
      },
      {
        id: 111,
        name: "Jowar Khakra",
        price: 240,
        description: "Crispy flatbread made with sorghum (250gms)"
      },
      {
        id: 112,
        name: "Mix Dal Khakra",
        price: 240,
        description: "Crispy flatbread made with mixed lentils (250gms)"
      },
      {
        id: 113,
        name: "Chorafali Khakra",
        price: 240,
        description: "Special Gujarati style crispy khakra (250gms)"
      },
      {
        id: 114,
        name: "Methi Sambariya Khakra",
        price: 240,
        description: "Fenugreek flavored special khakra (250gms)"
      },
      {
        id: 115,
        name: "Methi Khakra",
        price: 240,
        description: "Fenugreek flavored crispy flatbread (250gms)"
      },
      {
        id: 116,
        name: "Methi Mogra Khakra",
        price: 240,
        description: "Special fenugreek and mogra flavored khakra (250gms)"
      }
    ]
  }
}

export const snacksChefs: Chef[] = [
  {
    id: 'snack_1',
    name: "Chef Ahilya Jaiswal",
    specialty: "Traditional Indian Snacks",
    location: "Worli, Mumbai",
    rating: 4.8,
    image: "/chefs/Chef Ahilya Jaiswal.png",
    description: "Welcome to Chef Ahilya Jaiswal's kitchen! As a homemaker and passionate cook, she delights in serving up delicious, homemade dishes infused with love, care, and timeless traditional flair. Every bite is a taste of warmth and hospitality, just like the surreal mom-made food!",
    deliveryAreas: ["Worli", "Lower Parel", "Prabhadevi"],
    menu: {
      // "Savory Snacks": [
      //   { 
      //     id: 101, 
      //     name: "Chakli", 
      //     price: 250, 
      //     description: "Crispy spiral-shaped snack made from rice flour and spices" 
      //   },
      //   { 
      //     id: 102, 
      //     name: "Mixture", 
      //     price: 200, 
      //     description: "Crunchy mix of various fried ingredients and spices" 
      //   }
      // ],
      // "Sweet Snacks": [
      //   { 
      //     id: 103, 
      //     name: "Sweet Chivda", 
      //     price: 300, 
      //     description: "Sweet and crunchy flattened rice mixture" 
      //   }
      // ],
      "Tea Time Snacks": [
        {
          id: 104,
          name: "Moongdal Chakli",
          price: 180,
          description: "Crispy spiral snack made from moong dal (250gms)"
        },
        {
          id: 105,
          name: "Shakarpara",
          price: 180,
          description: "Sweet diamond-shaped crispy snack (250gms)"
        },
        {
          id: 106,
          name: "Methi Puri",
          price: 180,
          description: "Crispy puri flavored with fenugreek (250gms)"
        },
        {
          id: 107,
          name: "Chaat Puri",
          price: 180,
          description: "Spicy and tangy crispy puri (250gms)"
        },
        {
          id: 108,
          name: "Corn Poha",
          price: 180,
          description: "Flattened rice snack with corn (250gms)"
        },
        {
          id: 109,
          name: "Roasted Poha Makhana",
          price: 180,
          description: "Roasted fox nuts with flattened rice (250gms)"
        },
        {
          id: 110,
          name: "Nachni Khakra",
          price: 240,
          description: "Crispy flatbread made with finger millet (250gms)"
        },
        {
          id: 111,
          name: "Jowar Khakra",
          price: 240,
          description: "Crispy flatbread made with sorghum (250gms)"
        },
        {
          id: 112,
          name: "Mix Dal Khakra",
          price: 240,
          description: "Crispy flatbread made with mixed lentils (250gms)"
        },
        {
          id: 113,
          name: "Chorafali Khakra",
          price: 240,
          description: "Special Gujarati style crispy khakra (250gms)"
        },
        {
          id: 114,
          name: "Methi Sambariya Khakra",
          price: 240,
          description: "Fenugreek flavored special khakra (250gms)"
        },
        {
          id: 115,
          name: "Methi Khakra",
          price: 240,
          description: "Fenugreek flavored crispy flatbread (250gms)"
        },
        {
          id: 116,
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