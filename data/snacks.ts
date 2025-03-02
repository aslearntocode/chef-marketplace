export const snacksChefs = [
  {
    id: 'snacks-1',
    name: 'Ahilya Jaiswal',
    image: '/chefs/Chef Juhi Kastiya.png',
    rating: 4.8,
    specialty: 'Traditional Indian Snacks',
    location: 'Worli, Mumbai',
    // deliveryAreas: ['Andheri', 'Juhu', 'Bandra'],
    description: 'Specializing in authentic Maharashtra snacks made with traditional recipes.',
    menu: [
      {
        category: 'Savory Snacks',
        items: [
          {
            id: 'chakli-1',
            name: 'Chakli',
            description: 'Crispy spiral-shaped snack made from rice flour and spices',
            price: 250,
            image: '/images/snacks/chakli.jpg',
            unit: '500g'
          },
          {
            id: 'mixture-1',
            name: 'Mixture',
            description: 'Crunchy mix of various fried ingredients and spices',
            price: 200,
            image: '/images/snacks/mixture.jpg',
            unit: '500g'
          }
        ]
      },
      {
        category: 'Sweet Snacks',
        items: [
          {
            id: 'chivda-1',
            name: 'Sweet Chivda',
            description: 'Sweet and crunchy flattened rice mixture',
            price: 300,
            image: '/images/snacks/chivda.jpg',
            unit: '500g'
          }
        ]
      }
    ]
  },
  {
    id: 'snacks-2',
    name: 'Rajesh Patel',
    image: '/images/chef2.jpg',
    rating: 4.7,
    specialty: 'Gujarati Snacks',
    location: 'Vile Parle, Mumbai',
    deliveryAreas: ['Vile Parle', 'Santacruz', 'Khar'],
    description: 'Creating delicious and healthy Gujarati snacks for over 15 years.',
    menu: [
      {
        category: 'Traditional Snacks',
        items: [
          {
            id: 'khakhra-1',
            name: 'Khakhra',
            description: 'Crispy thin crackers made from whole wheat flour',
            price: 150,
            image: '/images/snacks/khakhra.jpg',
            unit: '200g'
          },
          {
            id: 'gathiya-1',
            name: 'Gathiya',
            description: 'Crunchy gram flour snack',
            price: 200,
            image: '/images/snacks/gathiya.jpg',
            unit: '500g'
          }
        ]
      },
      {
        category: 'Special Items',
        items: [
          {
            id: 'fafda-1',
            name: 'Fafda',
            description: 'Crispy gram flour snack strips',
            price: 180,
            image: '/images/snacks/fafda.jpg',
            unit: '500g'
          }
        ]
      }
    ]
  }
]; 