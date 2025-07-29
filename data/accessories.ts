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
  {
    id: 'green-ceramic-bowls',
    name: 'Green Ceramic Bowls - Set of 3',
    description: `Ceramics are materials made by shaping and then firing a non-metallic mineral, such as clay, at high temperatures. They are typically hard, brittle, heat-resistant, and corrosion-resistant. Ceramics can be both functional and decorative, and they have a wide range of uses, from pottery and tiles to advanced industrial components. Our ceramic serveware here is HANDMADE BY A LOCAL ARTISAN, MICROWAVE SAFE, LEAD FREE & CADMIUM FREE.`,
    price: 749,
    image: '/images/accessories/greenbowlsset/IMG_1.jpeg',
    images: ['/images/accessories/greenbowlsset/IMG_1.jpeg',
      '/images/accessories/greenbowlsset/IMG_2.jpeg'
    ],
    category: 'Healthier Serveware',
    tags: ['madeinindia', 'makeinindia', 'artisansofindia', 'ceramicware', 'serveware', 'handmade', 'promoteindian', 'handmadeproducts', 'handmadeceramics', 'artistsofindia', 'microwavesafeserveware', 'microwavesafe', 'giftingceramics', 'ceramicbowls', 'servingbowls', 'colourfulceramics', 'loveforceramics', 'leadfreeceramics', 'cadmiumfreeceramics', 'ceramics'],
    ingredients_benefits: {
    'Non-Toxic and Food Safe': [
    'Ceramic is inert, meaning it doesn’t leach chemicals or react with acidic or hot foods. This makes it a safe choice for serving and storing meals.'
    ],
    'Excellent Heat Retention': [
    'Ceramic bowls hold heat well, keeping soups, stews, and other hot dishes warm longer compared to glass or plastic.'
    ],
    'Doesn’t Alter Flavour': [
    'Ceramic is non-reactive, so it doesn’t affect the taste of your food/drink. Unlike metal or plastic, it won’t give the food a metallic or chemical aftertaste.'
    ],
    'Durable (With Care)': [
    'While brittle if dropped, ceramic bowls are strong and long-lasting under normal use. They resist wear from daily washing and don’t easily warp or degrade.'
    ],
    'Microwave and Dishwasher Safe': [
    'Most ceramic bowls are microwave-safe and dishwasher-friendly, making them convenient for modern use.'
    ],
    'Environmentally Friendly': [
    'Ceramic is more eco-friendly than plastic. It’s reusable, made from natural materials, and doesn\'t leach harmful chemicals.'
    ],
    'Customizable and Aesthetic': [
    'Ceramic bowls come in many styles, colors, and finishes. They’re easy to decorate, making them popular for personalized or artistic designs.'
    ],
    'Stain Resistant': [
    'Compared to plastic, ceramic bowls are less likely to stain from food products.'
    ],
    }
  },
  {
    id: 'heart-platter',
    name: 'Heart Platter',
    description: `Ceramics are materials made by shaping and then firing a non-metallic mineral, such as clay, at high temperatures. They are typically hard, brittle, heat-resistant, and corrosion-resistant. Ceramics can be both functional and decorative, and they have a wide range of uses, from pottery and tiles to advanced industrial components. Our ceramic serveware here is HANDMADE BY A LOCAL ARTISAN, MICROWAVE SAFE, LEAD FREE & CADMIUM FREE.`,
    price: 299,
    image: '/images/accessories/heart-platter.jpeg',
    images: ['/images/accessories/heart-platter.jpeg'
    ],
    category: 'Healthier Serveware',
    tags: ['madeinindia', 'makeinindia', 'artisansofindia', 'ceramicware', 'serveware', 'handmade', 'promoteindian', 'handmadeproducts', 'handmadeceramics', 'artistsofindia', 'microwavesafeserveware', 'microwavesafe', 'giftingceramics', 'ceramicplatter', 'servingplatter', 'colourfulceramics', 'loveforceramics', 'leadfreeceramics', 'cadmiumfreeceramics', 'ceramics'],
    ingredients_benefits: {
    'Elegant Presentation': [
    'Ceramic platters come in a variety of shapes, colors, and finishes, making food look more attractive. Perfect for serving at parties, dinners, or formal events.'
    ],
    'Heat Retention': [
    'Ceramic retains heat well, keeping dishes like roasted meats, grilled vegetables, or baked items warm longer after serving.'
    ],
    'Non-Reactive Surface': [
    'The glazed surface of ceramic doesn’t react with acidic or spicy foods, so it won’t alter the taste or leach chemicals—unlike some metals or plastics.'
    ],
    'Durable and Long-Lasting': [
    'With proper care, ceramic platters are resistant to scratches, fading, and wear. They\'re built to last for years in both home and restaurant settings.'
    ],
    'Microwave, Oven, and Dishwasher Safe': [
    'Many ceramic platters can safely go from oven to table to dishwasher, adding convenience and reducing cleanup time.'
    ],
    'Environmentally Friendly': [
    'Made from natural clay, ceramics are more sustainable and environmentally friendly than plastic or disposable serving ware.'
    ],
    'Stain & Odor Resistant': [
    'Glazed ceramic surfaces are smooth and resist staining from sauces, spices, or oils, and they don’t retain food odors.'
    ],
    'Eco-Friendly': [
    'Made from natural clay, ceramics are more sustainable and environmentally friendly than plastic or disposable serving ware.'
    ],
    }
  },
  {
    id: 'green-coffee-mugs',
    name: 'Green Coffee Mugs',
    description: `Ceramics are materials made by shaping and then firing a non-metallic mineral, such as clay, at high temperatures. 
    They are typically hard, brittle, heat-resistant, and corrosion-resistant. 
    Ceramics can be both functional and decorative, and they have a wide range of uses, from pottery and tiles to advanced industrial components. 
    Our ceramic serveware here is HANDMADE BY A LOCAL ARTISAN, MICROWAVE SAFE, LEAD FREE & CADMIUM FREE!.`,
    price: 229,
    image: '/images/accessories/green-coffee-mug.jpeg',
    images: ['/images/accessories/green-coffee-mug.jpeg'
    ],
    category: 'Healthier Serveware',
    tags: ['madeinindia', 'makeinindia', 'artisansofindia', 'ceramicware', 'serveware', 'handmade', 'promoteindian', 'handmadeproducts', 'handmadeceramics', 'artistsofindia', 'microwavesafeserveware', 'microwavesafe', 'giftingceramics', 'coffeemugs', 'ceramicmugs', 'colourfulceramics', 'loveforceramics', 'leadfreeceramics', 'cadmiumfreeceramics', 'ceramics'],
    ingredients_benefits: {
    'Excellent Heat Retention': [
    'Ceramics retain heat well, keeping beverages like coffee or tea warm for longer compared to glass or plastic.'
    ],
    'Doesn’t Alter Flavour': [
    'Ceramic is non-reactive, so it doesn’t affect the taste of your drink. Unlike metal or plastic, it won’t give coffee or tea a metallic or chemical aftertaste.'
    ],
    'Durable (With Care)': [
    'While brittle if dropped, ceramic mugs are strong and long-lasting under normal use. They resist wear from daily washing and don’t easily warp or degrade.'
    ],
    'Microwave and Dishwasher Safe': [
    'Most ceramic mugs are microwave-safe and dishwasher-friendly, making them convenient for modern use.'
    ],
    'Environmentally Friendly': [
    'Ceramic is more eco-friendly than plastic. It’s reusable, made from natural materials, and doesn\'t leach harmful chemicals.'
    ],
    'Customizable and Aesthetic': [
    'Ceramic mugs come in many styles, colors, and finishes. They’re easy to decorate, making them popular for personalized or artistic designs.'
    ],
    'Stain Resistant': [
    'Compared to plastic, ceramic mugs are less likely to stain from coffee, tea, or other dark liquids.'
    ],
    }
  },  
  {
    id: 'ceramic-tumbler-with-steel-straw',
    name: 'Ceramic Tumbler with Steel straw',
    description: `Ceramics are materials made by shaping and then firing a non-metallic mineral, such as clay, at high temperatures. 
    They are typically hard, brittle, heat-resistant, and corrosion-resistant. 
    Ceramics can be both functional and decorative, and they have a wide range of uses, from pottery and tiles to advanced industrial components. 
    Our ceramic serveware here is HANDMADE BY A LOCAL ARTISAN, MICROWAVE SAFE, LEAD FREE & CADMIUM FREE!.`,
    price: 289,
    image: '/images/accessories/tumblerswithsteelstraws/Creeper Design.jpeg',
    images: ['/images/accessories/tumblerswithsteelstraws/Creeper Design.jpeg',
      '/images/accessories/tumblerswithsteelstraws/Grass Design.jpeg',
      '/images/accessories/tumblerswithsteelstraws/Wave design.jpeg',
    ],
    category: 'Healthier Serveware',
    tags: ['madeinindia', 'makeinindia', 'artisansofindia', 'ceramicware', 'serveware', 'handmade', 'promoteindian', 'handmadeproducts', 'handmadeceramics', 'artistsofindia', 'microwavesafeserveware', 'microwavesafe', 'giftingceramics', 'sippers', 'ceramicsippers', 'colourfulceramics', 'loveforceramics', 'leadfreeceramics', 'cadmiumfreeceramics', 'ceramics', 'sipperswithsteelstraws', 'ceramictumblers'],
    variants: {
      sizes: [
        { name: 'Creeper Design', value: 'Creeper Design', price: 289 },
        { name: 'Grass Design', value: 'Grass Design', price: 289 },
        { name: 'Wave Design', value: 'Wave Design', price: 289 }
      ]
    },
    ingredients_benefits: {
    'Excellent Heat Retention': [
    'Ceramics retain heat well, keeping beverages like coffee or tea warm for longer compared to glass or plastic.'
    ],
    'Doesn’t Alter Flavour': [
    'Ceramic is non-reactive, so it doesn’t affect the taste of your drink. Unlike metal or plastic, it won’t give coffee or tea a metallic or chemical aftertaste.'
    ],
    'Durable (With Care)': [
    'While brittle if dropped, ceramic mugs are strong and long-lasting under normal use. They resist wear from daily washing and don’t easily warp or degrade.'
    ],
    'Microwave and Dishwasher Safe': [
    'Most ceramic mugs are microwave-safe and dishwasher-friendly, making them convenient for modern use.'
    ],
    'Environmentally Friendly': [
    'Ceramic is more eco-friendly than plastic. It’s reusable, made from natural materials, and doesn\'t leach harmful chemicals.'
    ],
    'Customizable and Aesthetic': [
    'Ceramic mugs come in many styles, colors, and finishes. They’re easy to decorate, making them popular for personalized or artistic designs.'
    ],
    'Stain Resistant': [
    'Compared to plastic, ceramic mugs are less likely to stain from coffee, tea, or other dark liquids.'
    ],
    }
  },
  {
    id: 'bow-gingham-mug',
    name: 'Bow Gingham Mug',
    description: `Ceramics are materials made by shaping and then firing a non-metallic mineral, such as clay, at high temperatures. 
    They are typically hard, brittle, heat-resistant, and corrosion-resistant. 
    Ceramics can be both functional and decorative, and they have a wide range of uses, from pottery and tiles to advanced industrial components. 
    Our ceramic serveware here is HANDMADE BY A LOCAL ARTISAN, MICROWAVE SAFE, LEAD FREE & CADMIUM FREE!.`,
    price: 249,
    image: '/images/accessories/bowginghammug/IMG_1.jpeg',
    images: ['/images/accessories/bowginghammug/IMG_1.jpeg',
      '/images/accessories/bowginghammug/IMG_2.jpeg'
    ],
    category: 'Healthier Serveware',
    tags: ['madeinindia', 'makeinindia', 'artisansofindia', 'ceramicware', 'serveware', 'handmade', 'promoteindian', 'handmadeproducts', 'handmadeceramics', 'artistsofindia', 'microwavesafeserveware', 'microwavesafe', 'giftingceramics', 'mugs', 'ceramicmugs', 'coffeemugs', 'colourfulceramics', 'loveforceramics', 'leadfreeceramics', 'cadmiumfreeceramics', 'ceramics', 'sipperswithsteelstraws'],
    ingredients_benefits: {
    'Excellent Heat Retention': [
    'Ceramics retain heat well, keeping beverages like coffee or tea warm for longer compared to glass or plastic.'
    ],
    'Doesn’t Alter Flavour': [
    'Ceramic is non-reactive, so it doesn’t affect the taste of your drink. Unlike metal or plastic, it won’t give coffee or tea a metallic or chemical aftertaste.'
    ],
    'Durable (With Care)': [
    'While brittle if dropped, ceramic mugs are strong and long-lasting under normal use. They resist wear from daily washing and don’t easily warp or degrade.'
    ],
    'Microwave and Dishwasher Safe': [
    'Most ceramic mugs are microwave-safe and dishwasher-friendly, making them convenient for modern use.'
    ],
    'Environmentally Friendly': [
    'Ceramic is more eco-friendly than plastic. It’s reusable, made from natural materials, and doesn\'t leach harmful chemicals.'
    ],
    'Customizable and Aesthetic': [
    'Ceramic mugs come in many styles, colors, and finishes. They’re easy to decorate, making them popular for personalized or artistic designs.'
    ],
    'Stain Resistant': [
    'Compared to plastic, ceramic mugs are less likely to stain from coffee, tea, or other dark liquids.'
    ],
    }
    },
    
    

];
