import type { Chef } from '@/types/chef';

export const snacksChefs: Chef[] = [
  {
    id: 1,
    name: "Ahilya Jaiswal",
    specialty: "Traditional Indian Snacks",
    location: "Worli, Mumbai",
    rating: 4.8,
    image: "/images/snacks/ahilya.jpg",
    description: "Specializing in authentic Maharashtra snacks made with traditional recipes.",
    deliveryAreas: ["Worli", "Lower Parel", "Prabhadevi"],
    menu: {
      "Savory Snacks": [
        { 
          id: 101, 
          name: "Chakli", 
          price: 250, 
          description: "Crispy spiral-shaped snack made from rice flour and spices" 
        },
        { 
          id: 102, 
          name: "Mixture", 
          price: 200, 
          description: "Crunchy mix of various fried ingredients and spices" 
        }
      ],
      "Sweet Snacks": [
        { 
          id: 103, 
          name: "Sweet Chivda", 
          price: 300, 
          description: "Sweet and crunchy flattened rice mixture" 
        }
      ]
    }
  },
  {
    id: 2,
    name: "Rajesh Patel",
    specialty: "Gujarati Snacks",
    location: "Vile Parle, Mumbai",
    rating: 4.7,
    image: "/images/chef2.jpg",
    description: "Creating delicious and healthy Gujarati snacks for over 15 years.",
    deliveryAreas: ["Vile Parle", "Santacruz", "Khar"],
    menu: {
      "Traditional Snacks": [
        { 
          id: 201, 
          name: "Khakhra", 
          price: 150, 
          description: "Crispy thin crackers made from whole wheat flour" 
        },
        { 
          id: 202, 
          name: "Gathiya", 
          price: 200, 
          description: "Crunchy gram flour snack" 
        }
      ],
      "Special Items": [
        { 
          id: 203, 
          name: "Fafda", 
          price: 180, 
          description: "Crispy gram flour snack strips" 
        }
      ]
    }
  }
]; 