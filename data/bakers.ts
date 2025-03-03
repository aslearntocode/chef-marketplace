export const bakers = [
  {
    id: 1,
    name: "Baker Juhi Kastiya",
    specialty: "Cakes & Pastries",
    location: "Bandra West, Mumbai",
    rating: 4.9,
    image: "/chefs/Chef Juhi Kastiya.png",
    description: "Specializing in custom cakes, cupcakes, and French pastries. All eggless options available.",
    topDishes: ["Black Forest Cake", "Chocolate Truffle"],
    deliveryAreas: ["Bandra", "Khar", "Santacruz"],
    menu: {
      "Cakes": [
        { id: "jk1", name: "Black Forest Cake", price: 800, description: "Classic chocolate cake with cherries and cream (1kg)" },
        { id: "jk2", name: "Red Velvet Cake", price: 900, description: "Cream cheese frosted red velvet cake (1kg)" },
        { id: "jk3", name: "Chocolate Truffle", price: 850, description: "Rich chocolate cake with ganache (1kg)" }
      ],
      "Cupcakes": [
        { id: "jk4", name: "Vanilla Cupcakes", price: 120, description: "Classic vanilla cupcakes with buttercream (per piece)" },
        { id: "jk5", name: "Red Velvet Cupcakes", price: 140, description: "Mini red velvet cakes with cream cheese (per piece)" }
      ],
      "French Pastries": [
        { id: "jk6", name: "Chocolate Éclair", price: 180, description: "Choux pastry filled with cream and chocolate" },
        { id: "jk7", name: "Mille-feuille", price: 200, description: "Layered puff pastry with vanilla cream" }
      ],
      "Dessert Boxes": [
        { id: "jk8", name: "Assorted Mini Pastries", price: 600, description: "Box of 6 assorted mini pastries" }
      ]
    }
  },
  {
    id: 2,
    name: "Baker Ruchita Shah",
    specialty: "Indian Sweets",
    location: "Juhu, Mumbai",
    rating: 4.8,
    image: "/chefs/Chef Ruchita Shah.png",
    description: "Traditional Indian sweets with a modern twist. Pure ghee and premium ingredients only.",
    topDishes: ["Kaju Katli", "Rasmalai Cake", "Motichoor Ladoo"],
    deliveryAreas: ["Juhu", "Andheri", "Vile Parle"],
    menu: {
      "Premium Sweets": [
        { id: "rs1", name: "Kaju Katli", price: 900, description: "Premium cashew-based sweet (500g)" },
        { id: "rs2", name: "Rasmalai Cake", price: 1200, description: "Fusion dessert combining rasmalai and cake (1kg)" },
        { id: "rs3", name: "Saffron Malai Peda", price: 600, description: "Rich milk-based sweet with saffron (500g)" }
      ],
      "Traditional Ladoos": [
        { id: "rs4", name: "Motichoor Ladoo", price: 700, description: "Fine boondi ladoos in pure ghee (500g)" },
        { id: "rs5", name: "Besan Ladoo", price: 600, description: "Traditional gram flour ladoos (500g)" }
      ],
      "Festival Specials": [
        { id: "rs6", name: "Assorted Diwali Box", price: 1500, description: "Premium box of mixed sweets (1kg)" },
        { id: "rs7", name: "Dry Fruit Barfi Box", price: 1200, description: "Assorted dry fruit barfis (500g)" }
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