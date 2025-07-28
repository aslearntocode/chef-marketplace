import { Product } from '@/types/whole-foods';
import image from 'next/image';

export const accessories: Product[] = [
  {
    id: 'pink-heart-mug',
    name: 'Pink Heart Mug',
    description: `Ceramics are materials made by shaping and then firing a non-metallic mineral, such as clay, at high temperatures. They are typically hard, brittle, heat-resistant, and corrosion-resistant. 
    Ceramics can be both functional and decorative, and they have a wide range of uses, from pottery and tiles to advanced industrial components. 
    Our ceramic serveware here is HANDMADE BY A LOCAL ARTISAN, MICROWAVE SAFE, LEAD FREE & CADMIUM FREE!.`,
    price: 229,
    image: '/images/accessories/pinkheartmug/IMG_1.jpeg',
    images: ['/images/accessories/pinkheartmug/IMG_1.jpeg',
      '/images/accessories/pinkheartmug/IMG_2.jpeg'
    ],
    category: 'Healthier Serveware',
    tags: ['madeinindia', 'makeinindia', 'artisansofindia', 'ceramicware', 'serveware', 'handmade', 'promoteindian', 'handmadeproducts', 'handmadeceramics', 'artistsofindia', 'microwavesafeserveware', 'microwavesafe', 'giftingceramics', 'coffeemugs', 'ceramicbowls', 'colourfulceramics', 'loveforceramics', 'leadfreeceramics', 'cadmiumfreeceramics', 'ceramics'],
    size: '200ml', 
    variants: {
      sizes: [
        { name: '200ml', value: '200ml', price: 229 },
      ]
    },
    ingredients_benefits: {
      'Excellent Heat Retention': [
        'Ceramics retain heat well, keeping beverages like coffee or tea warm for longer compared to glass or plastic.'
      ],
      'Doesn\'t Alter Flavour': [
        'Ceramic is non-reactive, so it doesn\'t affect the taste of your drink. Unlike metal or plastic, it won\'t give coffee or tea a metallic or chemical aftertaste.'
      ],
      'Durable (With Care)': [
        'While brittle if dropped, ceramic mugs are strong and long-lasting under normal use. They resist wear from daily washing and don\'t easily warp or degrade.'
      ],
      'Microwave and Dishwasher Safe': [
        'Most ceramic mugs are microwave-safe and dishwasher-friendly, making them convenient for modern use.'
      ],
      'Environmentally Friendly': [
        'Ceramic is more eco-friendly than plastic. It\'s reusable, made from natural materials, and doesn\'t leach harmful chemicals.'
      ],
      'Customizable and Aesthetic': [
        'Ceramic mugs come in many styles, colors, and finishes. They\'re easy to decorate, making them popular for personalized or artistic designs.'
      ],
      'Stain Resistant': [
        'Compared to plastic, ceramic mugs are less likely to stain from coffee, tea, or other dark liquids.'
      ]
    }
  },
    
    
    
    
    
    
    
    
      
];
