export const chefs = [
  {
    id: 'chef_1',
    name: "Anjali Broor",
    image: "/chefs/Chef Anjali Broor.png",
    rating: 4.8,
    specialty: "Home-style Indian & International Cuisine",
    location: "Mumbai",
    description: "Anjali, a seasoned ex banker, decided to follow her heart and eventually became a seasoned home chef. She believes in preparing food which is healthy and yummy. Each dish prepared by her brings in a tasty twist to conventional food items and recipes. Anjali believes in using the best ingredients and she never compromises with the quality and the taste of the raw materials. She is a staunch believer of 'FARM TO FORK'. Anjali started with weekend menus only but she now also caters for parties and corporate get togethers.",
    notes: [
      "Farm to Fork Philosophy",
      "Weekend Special Menus",
      "Party & Corporate Catering"
    ],
    topDishes: ["Butter Chicken", "Dal Makhani", "Paneer Tikka"],
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
  },

  // {
  //   id: 2,
  //   name: "Urmila Saud",
  //   specialty: "South Indian Cuisine",
  //   location: "Andheri East, Mumbai",
  //   rating: 4.8,
  //   image: "/chefs/chef_urmila.png",
  //   description: "Specializing in authentic South Indian dishes and home-style South Indian meals",
  //   topDishes: ["Butter Chicken", "Dal Makhani", "Paneer Tikka"],
  //   deliveryAreas: ["Andheri", "Juhu", "Bandra"],
  //   menu: {
  //     "Main Course": [
  //       { id: "ab1", name: "Butter Chicken", price: 350, description: "Tender chicken in rich tomato-butter gravy" },
  //       { id: "ab2", name: "Dal Makhani", price: 250, description: "Creamy black lentils cooked overnight" },
  //       { id: "ab3", name: "Paneer Tikka Masala", price: 280, description: "Grilled cottage cheese in spiced gravy" }
  //     ],
  //     "Breads": [
  //       { id: "ab4", name: "Butter Naan", price: 40, description: "Tandoor-baked flatbread" },
  //       { id: "ab5", name: "Laccha Paratha", price: 45, description: "Layered whole wheat bread" }
  //     ],
  //     "Rice": [
  //       { id: "ab6", name: "Jeera Rice", price: 150, description: "Cumin-flavored basmati rice" }
  //     ]
  //   }
  // },

  {
    id: 'chef_3',
    name: "Chef Payal Agarwal",
    specialty: "South Indian Cuisine",
    location: "Andheri East, Mumbai",
    rating: 4.8,
    image: "/chefs/Chef Payal Agarwal.png",
    description: "Specializing in authentic South Indian dishes and home-style South Indian meals",
    topDishes: ["Butter Chicken", "Dal Makhani", "Paneer Tikka"],
    deliveryAreas: ["Andheri", "Juhu", "Bandra"],
    menu: {
      "Main Course": [
        { id: "ab1", name: "Butter Chicken", price: 350, description: "Tender chicken in rich tomato-butter gravy" },
        { id: "ab2", name: "Dal Makhani", price: 250, description: "Creamy black lentils cooked overnight" },
        { id: "ab3", name: "Paneer Tikka Masala", price: 280, description: "Grilled cottage cheese in spiced gravy" }
      ],
      "Breads": [
        { id: "ab4", name: "Butter Naan", price: 40, description: "Tandoor-baked flatbread" },
        { id: "ab5", name: "Laccha Paratha", price: 45, description: "Layered whole wheat bread" }
      ],
      "Rice": [
        { id: "ab6", name: "Jeera Rice", price: 150, description: "Cumin-flavored basmati rice" }
      ]
    }
  },

  // {
  //   id: 4,
  //   name: "Manmeet Kaur",
  //   specialty: "South Indian Cuisine",
  //   location: "Andheri East, Mumbai",
  //   rating: 4.8,
  //   image: "/chefs/Chef Manmeet Kaur.png",
  //   description: "Specializing in authentic South Indian dishes and home-style South Indian meals",
  //   topDishes: ["Butter Chicken", "Dal Makhani", "Paneer Tikka"],
  //   deliveryAreas: ["Andheri", "Juhu", "Bandra"],
  //   menu: {
  //     "Main Course": [
  //       { id: "ab1", name: "Butter Chicken", price: 350, description: "Tender chicken in rich tomato-butter gravy" },
  //       { id: "ab2", name: "Dal Makhani", price: 250, description: "Creamy black lentils cooked overnight" },
  //       { id: "ab3", name: "Paneer Tikka Masala", price: 280, description: "Grilled cottage cheese in spiced gravy" }
  //     ],
  //     "Breads": [
  //       { id: "ab4", name: "Butter Naan", price: 40, description: "Tandoor-baked flatbread" },
  //       { id: "ab5", name: "Laccha Paratha", price: 45, description: "Layered whole wheat bread" }
  //     ],
  //     "Rice": [
  //       { id: "ab6", name: "Jeera Rice", price: 150, description: "Cumin-flavored basmati rice" }
  //     ]
  //   }
  // },
  {
    id: 'chef_5',
    name: "Chef Juhi Kastiya",
    specialty: "Indian, Continental, Mediterranean",
    location: "Worli, Mumbai",
    // rating: 4.9,
    image: "/chefs/Chef Juhi Kastiya.png",
    description: "Chef Juhi Kastiya started her journey as a baker/chef 4 years back and has been baking artisinal breads ever since. It's been a wonderful journey for her- thanks to all the love and trust of her lovely clients. She is on this platform to bedazzle people with her baked culinary delights.",
    notes: [
      "* All items are eggless",
      "* We accommodate requests for Jain variations also",
      "* All orders to be placed one day in advance",
      "* All bulk orders should be placed at least 4 to 5 days in advance"
    ],
    topDishes: ["Vol-Au-Vents", "Potli Biryani", "Pesto Arabiata Twisty"],
    deliveryAreas: ["Powai", "Vikhroli", "Kanjurmarg", "Bhandup"],
    menu: {
      "Starters": [
        { id: "jk1", name: "Vol-Au-Vents", price: 720, description: "A small round case of puff pastry filled with a savoury mixture! Creamy spinach and corn filling mixture (20pcs)" },
        { id: "jk2", name: "Pyaz Kachori", price: 240, description: "Traditional savory snack (3pcs)" },
        { id: "jk3", name: "Dal Kachori", price: 240, description: "Crispy lentil-filled pastry (3pcs)" },
        { id: "jk4", name: "Baked Vada Pav", price: 180, description: "A delectable potato filling encased in homemade pav! Garnished with fried chilly and chutney (2pcs)" },
        { id: "jk5", name: "Braided Bread", price: 480, description: "Loads of exotic vegetables stuffed in a beautifully braided bread! (2pcs)" },
        { id: "jk6", name: "Garlic Knots", price: 300, description: "Perfect accompaniment to soup and pasta (6pcs)" },
        { id: "jk7", name: "Canape", price: 600, description: "Pizza Canapes & Mini Potato Tarts (25pcs)" }
      ],
      "Main Course": [
        { id: "jk8", name: "Potli Biryani", price: 840, description: "Flavourful Biryani layered inside an edible potli. Served with raita and papad (Meal for 2)" },
        { id: "jk9", name: "Spinach rice with paprika sauce", price: 540, description: "Exotic vegetables in a spicy paprika sauce served with flavourful spinach rice (Meal for 2)" },
        { id: "jk10", name: "Quesadilla", price: 420, description: "Served with salsa (4pcs)" },
        { id: "jk11", name: "Burrito Bowl", price: 480, description: "Burrito bowl- layers of Mexican rice, beans, salsa, sour cream and tortilla chips (Meal for 1)" },
        { id: "jk12", name: "Classic Pide", price: 480, description: "Classic Pide: Onions, Cherry tomatoes, Bell Peppers and Cheese (Meal for 1)" },
        { id: "jk13", name: "Exotic Pide", price: 480, description: "Pide with sun-dried tomatoes, caramelised onions, baby corn, jalapeno and cheese (Meal for 1)" }
      ],
      "Pull-Out Breads": [
        { id: "jk14", name: "Pesto Arabiata Twisty", price: 1080, description: "Goodness of both Pesto and Arabiata layered and shaped in a twisty bread. Available in star and heart shapes also. (Serves 3-4ppl)" },
        { id: "jk15", name: "Pav Bhaji Fondue", price: 1080, description: "Local delicacy with a twist. A pull-out pav bhaji served with fondue on its side. (Serves 3-4ppl)" },
        { id: "jk16", name: "Spinach and Bell Pepper Ricotta Sunflower", price: 1080, description: "Home-made ricotta bread with spinach and bell pepper stuffing. (Serves 3-4ppl)" },
        { id: "jk17", name: "Paneer Tikka Star Pizza", price: 840, description: "Star-shaped pizza with paneer tikka topping (Serves 3-4ppl)" },
        { id: "jk18", name: "Hummus with Zaatar Pull Out Loaf", price: 720, description: "Mediterranean-inspired pull-out bread (Serves 3-4ppl)" }
      ],
      "Desserts": [
        { id: "jk19", name: "Crème Brulee", price: 600, description: "Custard filled donuts coated with crunchy caramel (6pcs)" },
        { id: "jk20", name: "Nutella Cinnamon Donuts", price: 600, description: "Nutella filled donuts topped with Cinnamon (6pcs)" },
        { id: "jk21", name: "Nutella Babka", price: 720, description: "Babka: A sweet braided bread that originated in Eastern Europe" },
        { id: "jk22", name: "Nutella Dark Chocolate Babka", price: 720 },
        { id: "jk23", name: "Cinnamon Babka", price: 720 },
        { id: "jk24", name: "Rose Pistachio Babka", price: 840 },
        { id: "jk25", name: "Cinnamon/Nutella Knots", price: 360, description: "Sweet twisted knots (4pcs)" },
        { id: "jk26", name: "Rose Pistachio Knots", price: 480, description: "Floral-flavored twisted knots (4pcs)" },
        { id: "jk27", name: "Cinnamon Loaf", price: 660, description: "A delicious cinnamon flavoured pull out bread which can be enjoyed alone or with vanilla icecream" },
        { id: "jk28", name: "Nutella Star Bread", price: 840 },
        { id: "jk29", name: "Chocolate Coconut Pinwheels", price: 300, description: "Sweet spiral treats (6pcs)" }
      ]
    }
  },
  // ... rest of the chefs data ...
]; 