import type { TiffinService } from '@/types/tiffin';

export const tiffinServices: TiffinService[] = [
  {
    id: 1,
    name: "Payal Agarwal Tiffin Service",
    specialty: "Home-style North Indian Meals",
    location: "Sewri, Mumbai",
    rating: 4.7,
    image: "/chefs/Chef Payal Agarwal.png",
    description: "With over 15 years of experience in providing wholesome home-cooked meals, we ensure that working professionals and students get nutritious food that reminds them of home. Our meals are prepared with pure ghee and high-quality ingredients.",
    notes: [
      "* Monthly and weekly subscription available",
      "* Order before 8 PM for next day delivery",
      "* Special diet requirements accommodated",
      "* Jain options available"
    ],
    deliveryAreas: ["Andheri", "Juhu", "Vile Parle", "Santacruz"],
    menu: {
      "Thalis": [
        {
          id: "dt1",
          name: "Budget Thali",
          price: 220,
          description: "Dal/Kadhi, 2 Sabzis, Rotis(2), Rice, Papad"
        },
        {
          id: "dt2",
          name: "Gluten Free Thali",
          price: 220,
          description: "Dal/Kadhi, 1 Sabzi, Gluten free Millet Rotis(2)"
        },
        {
          id: "dt3",
          name: "Gluten Free Vegan Thali",
          price: 220,
          description: "Dal, 1 Sabzi, Gluten free Millet Rotis(2)"
        },
        {
          id: "dt4",
          name: "Feel Like Home Thali",
          price: 240,
          description: "Dal/Kadhi, 2 Sabzis, Rotis(3), Rice, Papad"
        },
        {
          id: "dt5",
          name: "Jain Thali",
          price: 300,
          description: "Dal/Kadhi, 2 Sabzis, Rotis(3), Rice, Papad"
        },
        {
          id: "dt6",
          name: "Punjabi Thali",
          price: 300,
          description: "Dal/Kadhi, 2 Premium Sabzis, Rotis(3), Rice, Papad"
        },
        {
          id: "dt7",
          name: "Rajasthani Thali",
          price: 300,
          description: "Aloodum or Masala Gatta, Sangri, Sweet Lunji or Garlic Chatni, Namkeen Puran Puri/Belma Paratha (4), Papad"
        }
      ],
      "Rice Bowls": [
        {
          id: "rb1",
          name: "Yellow Dal Tadka, Aloo Chokha and Rice",
          price: 220,
          description: "Comforting yellow dal with tempered spices, mashed potatoes and steamed rice"
        },
        {
          id: "rb2",
          name: "Plain Kadhi, Aloo Chokha and Rice",
          price: 220,
          description: "Traditional yogurt-based curry with mashed potatoes and rice"
        },
        {
          id: "rb3",
          name: "Chhole and Rice",
          price: 220,
          description: "Spiced chickpea curry served with steamed rice"
        },
        {
          id: "rb4",
          name: "Rajma and Rice",
          price: 220,
          description: "Classic kidney bean curry with steamed rice"
        },
        {
          id: "rb5",
          name: "Kali Dal and Rice",
          price: 220,
          description: "Black lentils slow-cooked with rice"
        },
        {
          id: "rb6",
          name: "Jain Rice Bowl",
          price: 220,
          description: "Specially prepared rice bowl following Jain dietary restrictions"
        }
      ]
    }
  }
]; 