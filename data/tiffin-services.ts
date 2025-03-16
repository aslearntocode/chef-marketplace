import type { TiffinService } from '@/types/tiffin';

export const tiffinServices: TiffinService[] = [
  {
    id: 'tiffin_1',
    name: "Chef Payal Agarwal",
    specialty: "Simple Everyday North Indian meals/tiffins",
    location: "Sewri, Mumbai",
    rating: 4.7,
    image: "/chefs/Chef Payal Agarwal.png",
    description: "Chef Payal runs a cloud kitchen but the concept is 'GHAR JAISA KHANA' and not typical restaurant food. Payal's USP is pure veg Marwari, Bengali and North Indian food + lip-smacking chaats! Last but not the least, Payal does her entire cooking in rock salt.",
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
          name: "Home Like Thali",
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
          price: 340,
          description: "Dal/Kadhi, 2 Premium Sabzis, Rotis(3), Rice, Papad"
        },
        {
          id: "dt7",
          name: "Rajasthani Thali",
          price: 340,
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
      ],
      "Premium Sabzis": [
        {
          id: "ps1",
          name: "Panner Do Pyaaza",
          price: 360,
          description: "Paneer cooked with extra onions in rich gravy"
        },
        {
          id: "ps2",
          name: "Palak Paneer",
          price: 360,
          description: "Cottage cheese cooked in spinach gravy"
        },
        {
          id: "ps3",
          name: "Matar Paneer",
          price: 360,
          description: "Cottage cheese and peas curry"
        },
        {
          id: "ps4",
          name: "Kadai Paneer",
          price: 360,
          description: "Paneer cooked in kadai masala"
        },
        {
          id: "ps5",
          name: "Butter Paneer Masala",
          price: 360,
          description: "Rich and creamy paneer curry"
        },
        {
          id: "ps6",
          name: "Chena Shimamirchi Tamatar",
          price: 360,
          description: "Fresh cottage cheese with peppers and tomatoes"
        },
        {
          id: "ps7",
          name: "Mixed Veg with Paneer",
          price: 360,
          description: "Assorted vegetables cooked with paneer"
        }
      ],
      "Special Sabzis": [
        {
          id: "ss1",
          name: "Mix Veg Dry",
          price: 275,
          description: "Assorted vegetables in dry preparation"
        },
        {
          id: "ss2",
          name: "Lal Chana",
          price: 275,
          description: "Red chickpeas curry"
        },
        {
          id: "ss3",
          name: "Lauki Mangori",
          price: 275,
          description: "Bottle gourd with dried lentil dumplings"
        },
        {
          id: "ss4",
          name: "Pata Gobi Matar",
          price: 275,
          description: "Cabbage and peas preparation"
        },
        {
          id: "ss5",
          name: "Phool Gobi Matar",
          price: 275,
          description: "Cauliflower and peas curry"
        },
        {
          id: "ss6",
          name: "Aloo Matar",
          price: 275,
          description: "Potatoes and peas curry"
        },
        {
          id: "ss7",
          name: "Mix Veg Gravy",
          price: 275,
          description: "Mixed vegetables in gravy"
        },
        {
          id: "ss8",
          name: "Besan Shimla Mirchi",
          price: 275,
          description: "Bell peppers in gram flour preparation"
        },
        {
          id: "ss9",
          name: "Chole",
          price: 275,
          description: "Chickpea curry"
        },
        {
          id: "ss10",
          name: "Rajma",
          price: 275,
          description: "Kidney beans curry"
        }
      ],
      "Dals": [
        {
          id: "d1",
          name: "Yellow Dal",
          price: 240,
          description: "Classic yellow lentils"
        },
        {
          id: "d2",
          name: "Palak Dal",
          price: 240,
          description: "Lentils with spinach"
        },
        {
          id: "d3",
          name: "Dal Tadka",
          price: 240,
          description: "Tempered yellow lentils"
        },
        {
          id: "d4",
          name: "Chana Dal",
          price: 300,
          description: "Split chickpea lentils"
        },
        {
          id: "d5",
          name: "Haara Moong Dal",
          price: 300,
          description: "Green gram lentils"
        },
        {
          id: "d6",
          name: "Panchmela Dal",
          price: 300,
          description: "Five lentils combination"
        },
        {
          id: "d7",
          name: "Dal Makhani",
          price: 360,
          description: "Creamy black lentils"
        }
      ],
      "Kadhis": [
        {
          id: "k1",
          name: "Plain Kadhi",
          price: 240,
          description: "Simple yogurt-based curry"
        },
        {
          id: "k2",
          name: "Pakodi Kadhi",
          price: 240,
          description: "Kadhi with gram flour dumplings"
        },
        {
          id: "k3",
          name: "Palak Kadhi",
          price: 240,
          description: "Spinach kadhi"
        },
        {
          id: "k4",
          name: "Chilla Kadhi",
          price: 240,
          description: "Kadhi with gram flour pancakes"
        },
        {
          id: "k5",
          name: "Chanadal Kadhi",
          price: 240,
          description: "Kadhi with split chickpeas"
        },
        {
          id: "k6",
          name: "Gatta Kadhi",
          price: 275,
          description: "Kadhi with gram flour dumplings"
        },
        {
          id: "k7",
          name: "Mangodi Kadhi",
          price: 275,
          description: "Kadhi with moong dal dumplings"
        },
        {
          id: "k8",
          name: "Papad Kadhi",
          price: 275,
          description: "Kadhi with papad"
        }
      ],
      "Add Ons": [
        {
          id: "ao1",
          name: "Chaunkha Mircha",
          price: 155,
          description: "Tempered chilies"
        },
        {
          id: "ao2",
          name: "Tamatar Lungi",
          price: 155,
          description: "Tomato preparation"
        },
        {
          id: "ao3",
          name: "Imli Chatni",
          price: 155,
          description: "Tamarind chutney"
        },
        {
          id: "ao4",
          name: "Papad Churi",
          price: 155,
          description: "Crushed papad"
        },
        {
          id: "ao5",
          name: "Garlic Chatni",
          price: 180,
          description: "Garlic chutney"
        }
      ],
      "Breads": [
        {
          id: "b1",
          name: "Tawa Paratha",
          price: 18,
          description: "Plain flatbread"
        },
        {
          id: "b2",
          name: "Phulka",
          price: 18,
          description: "Whole wheat flatbread"
        },
        {
          id: "b3",
          name: "Makke Di Roti",
          price: 36,
          description: "Corn flour flatbread (Seasonal)"
        },
        {
          id: "b4",
          name: "Missi Roti",
          price: 36,
          description: "Mixed flour flatbread"
        },
        {
          id: "b5",
          name: "Namkeen Chanadal Puran Puri/Belma Paratha",
          price: 36,
          description: "Salty & spicy thin Parathas"
        },
        {
          id: "b6",
          name: "Gluten Free Roti",
          price: 36,
          description: "Gluten-free flatbread"
        },
        {
          id: "b7",
          name: "Ajwain Kadhai Puri (5)",
          price: 120,
          description: "Carom seeds flavored deep-fried bread"
        },
        {
          id: "b8",
          name: "Thepla (5)",
          price: 120,
          description: "Gujarati style flatbread"
        }
      ],
      "Stuffed Parathas": [
        {
          id: "sp1",
          name: "Chanadal",
          price: 120,
          description: "Split chickpea stuffed flatbread"
        },
        {
          id: "sp2",
          name: "Aloo",
          price: 120,
          description: "Potato stuffed flatbread"
        },
        {
          id: "sp3",
          name: "Pyaaz",
          price: 120,
          description: "Onion stuffed flatbread"
        },
        {
          id: "sp4",
          name: "Sattu",
          price: 120,
          description: "Roasted gram flour stuffed flatbread"
        },
        {
          id: "sp5",
          name: "Paneer",
          price: 155,
          description: "Cottage cheese stuffed flatbread"
        },
        {
          id: "sp6",
          name: "Besan",
          price: 120,
          description: "Gram flour stuffed flatbread"
        },
        {
          id: "sp7",
          name: "Cheese",
          price: 155,
          description: "Cheese stuffed flatbread"
        }
      ],
      "Rice & Accompaniments": [
        {
          id: "r1",
          name: "Plain Curd",
          price: 155,
          description: "Fresh yogurt"
        },
        {
          id: "r2",
          name: "Raita",
          price: 155,
          description: "Seasoned yogurt with vegetables"
        },
        {
          id: "r3",
          name: "Plain Rice",
          price: 165,
          description: "Steamed rice"
        },
        {
          id: "r4",
          name: "Jeera Rice",
          price: 275,
          description: "Cumin flavored rice"
        },
        {
          id: "r5",
          name: "Peas Pulao",
          price: 360,
          description: "Rice with green peas"
        },
        {
          id: "r6",
          name: "Mix Veg Pulao",
          price: 360,
          description: "Rice with mixed vegetables"
        },
        {
          id: "r7",
          name: "Gatta Pulao",
          price: 360,
          description: "Rice with gram flour dumplings"
        }
      ],
      "Rajasthani Cuisine": [
        {
          id: "rs1",
          name: "Masala Gatta",
          price: 300,
          description: "Spiced gram flour dumplings"
        },
        {
          id: "rs2",
          name: "Papad Mangori",
          price: 300,
          description: "Papad with lentil dumplings"
        },
        {
          id: "rs3",
          name: "Panchmela Dal",
          price: 300,
          description: "Five lentils mix"
        },
        {
          id: "rs4",
          name: "Ker Sangri",
          price: 300,
          description: "Traditional Rajasthani preparation"
        }
      ],
      "Bengali Cuisine": [
        {
          id: "bg1",
          name: "Luchi (5)",
          price: 120,
          description: "Deep fried bread"
        },
        {
          id: "bg2",
          name: "Bengali Aloo Dum",
          price: 300,
          description: "Bengali style potato curry"
        },
        {
          id: "bg3",
          name: "Bengali Style Channa Dal",
          price: 360,
          description: "Bengali preparation of split chickpeas"
        }
      ],
      "Bihari Cuisine": [
        {
          id: "bh1",
          name: "Aloo Chokha",
          price: 240,
          description: "Mashed potato preparation"
        },
        {
          id: "bh2",
          name: "Tamatar Chutney",
          price: 240,
          description: "Tomato chutney"
        }
      ],
      "Chaats": [
        {
          id: "ch1",
          name: "Kolkata Ghughni Chaat",
          price: 275,
          description: "Ragda with spices"
        },
        {
          id: "ch2",
          name: "Churmur",
          price: 300,
          description: "Crushed ragda, pakodi, aloo, lalchana & crunchy puris with spices n imli chatni (15 puris come separately)"
        },
        {
          id: "ch3",
          name: "Puchka 25",
          price: 300,
          description: "With aloochana, imli pudina paani and imli chatni"
        },
        {
          id: "ch4",
          name: "Puchka 50",
          price: 540,
          description: "With aloochana, imli pudina paani and imli chatni"
        }
      ]
    }
  },
  {
    id: 'tiffin_2',
    name: "Chef Anjali Broor",
    specialty: "Home-style Indian & International Cuisine",
    location: "Parel, Mumbai",
    rating: 4.8,
    image: "/chefs/Chef Anjali Broor.png",
    description: "Anjali, a seasoned ex banker, decided to follow her heart and eventually became a seasoned home chef. She believes in preparing food which is healthy and yummy. Each dish prepared by her brings in a tasty twist to conventional food items and recipes. Anjali believes in using the best ingredients and she never compromises with the quality and the taste of the raw materials. She is a staunch believer of 'FARM TO FORK'. Anjali started with weekend menus only but she now also caters for parties and corporate get togethers.",
    notes: [
      "Farm to Fork Philosophy",
      "Weekend Special Menus",
      "Party & Corporate Catering",
      "Order before 8 PM for next day delivery",
    ],
    deliveryAreas: ["Andheri", "Juhu", "Bandra"],
    menu: {
      "March 17 - Monday": [
        {
          id: "khao-suey",
          name: "Khao Suey",
          description: "If something could be called a bowl of happiness, this could well be it. A delicious noodle dish with a fragrant and creamy coconut milk curry infused with lemongrass, topped with diced Asian vegetables and an array of toppings that give it texture and flavor.",
          servingSize: "Noodles, Curry and Condiments all served separately",
          price: 470,
          variants: [
            { name: "Chicken", price: 490 },
            { name: "Vegetable", price: 470 }
          ]
        }
      ],
      "March 18 - Tuesday": [
        {
          id: "strawberry-feta-salad",
          name: "Strawberries and Feta Salad",
          description: "Fresh strawberries, mulberries, and blueberries nestled among a mix of greens, feta cheese, crunchy nuts, fresh herbs, and more. But the real star is the balsamic reduction!",
          servingSize: "Service Size: 500ml",
          price: 685
        }
      ],
      "March 19 - Wednesday": [
        {
          id: "butter-chicken",
          name: "Butter Chicken",
          description: "A velvety tomato-based sauce enriched with butter and cream that wraps around tender chicken pieces, creating a harmonious blend of flavors. We use a secret blend of traditional Indian spices to give our Butter Chicken that unmistakable and irresistible taste.",
          servingSize: "(4 pieces of boneless chicken + 1 naan)",
          price: 580,
          extras: [
            { name: "Extra Naan", price: 85 }
          ]
        }
      ],
      "March 20 - Thursday": [
        {
          id: "chicken-kebabs",
          name: "Chicken Kebabs with Tzatziki",
          description: "Chicken mince combined with mild spices, onion, and cilantro. Shallow fried in a skillet and served with homemade Tzatziki.",
          servingSize: "3 Kebabs and 50ml Tzatziki",
          price: 470
        },
        {
          id: "dal-makhani",
          name: "Slow Cooked Dal Makhni with Naan",
          description: "Prepared with black urad dal and kidney beans. The secret ingredient is our 'masala' that goes in along with special tempering, making it really flavorful!",
          servingSize: "250ml Dal served with 1 naan",
          price: 470,
          extras: [
            { name: "Extra naan", price: 85 }
          ]
        }
      ],
      "March 21 - Friday": [
        {
          id: "chicken-ghee-roast",
          name: "Chicken Ghee Roast and parantha",
          description: "Chicken Ghee Roast is a mildly spicy and tangy dish with freshly ground masala slow-roasted in ghee to create a magical flavour.",
          servingSize: "4 pieces of boneless chicken + 1 paratha",
          price: 580,
          extras: [
            { name: "Extra parantha", price: 85 }
          ]
        }
      ]
    }
  }
]; 