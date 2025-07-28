import { Product } from '@/types/whole-foods';
import image from 'next/image';

export const accessories: Product[] = [
    {
        id: 'premium-blender-pro',
        name: 'Premium Blender Pro',
        description: 'High-speed professional blender perfect for smoothies, soups, and nut butters. Features a powerful 1000W motor with 6-speed settings and pulse function. The stainless steel blades ensure smooth blending of even the toughest ingredients. Perfect for health enthusiasts who love making fresh smoothies, protein shakes, and healthy soups. The large 1.5L capacity jar is perfect for family-sized portions.',
        price: 2499,
        image: '/images/accessories/premium-blender-pro.jpg',
        category: 'Blenders',
        tags: ['blender', 'smoothie', 'soup', 'nut butter', 'professional', 'kitchen appliance', 'healthy', 'juicing', 'mixing', 'grinding'],
        size: '1.5L',
        ingredients_benefits: {
          '1000W Motor': ['Powerful blending for smooth results'],
          'Stainless Steel Blades': ['Durable and sharp for consistent blending'],
          '6-Speed Settings': ['Versatile control for different ingredients'],
          'Pulse Function': ['Precise control for chunky or smooth textures']
        }
    },
    {
        id: 'food-processor-deluxe',
        name: 'Food Processor Deluxe',
        description: 'Versatile food processor for chopping, slicing, and pureeing. This deluxe model comes with multiple attachments including a slicing disc, shredding disc, and dough blade. The 12-cup capacity bowl is perfect for large batches of food preparation. Features a powerful motor that can handle everything from chopping vegetables to kneading dough. Ideal for home chefs who want to streamline their food preparation process.',
        price: 1899,
        image: '/images/accessories/food-processor-deluxe.jpg',
        category: 'Processors',
        tags: ['food processor', 'chopping', 'slicing', 'pureeing', 'dough', 'vegetables', 'kitchen appliance', 'preparation', 'cooking', 'baking'],
        size: '12-cup',
        ingredients_benefits: {
          'Multiple Attachments': ['Versatile food preparation options'],
          'Large Capacity Bowl': ['Perfect for family-sized meals'],
          'Powerful Motor': ['Handles tough ingredients with ease'],
          'Dough Blade': ['Perfect for bread and pastry making']
        }
    },
    {
        id: 'stand-mixer-professional',
        name: 'Stand Mixer Professional',
        description: 'Professional stand mixer for baking and dough preparation. This heavy-duty mixer features a 5-quart bowl and comes with three essential attachments: flat beater, wire whip, and dough hook. The powerful motor can handle thick cookie dough, bread dough, and whipped cream with ease. Perfect for serious bakers and home chefs who love making fresh bread, cakes, and pastries. The tilt-head design makes it easy to add ingredients.',
        price: 3499,
        image: '/images/accessories/stand-mixer-professional.jpg',
        category: 'Mixers',
        tags: ['stand mixer', 'baking', 'dough', 'whipping', 'mixing', 'professional', 'kitchen appliance', 'bread', 'cake', 'pastry'],
        size: '5-quart',
        ingredients_benefits: {
          '5-Quart Bowl': ['Large capacity for big batches'],
          'Three Attachments': ['Versatile mixing options'],
          'Powerful Motor': ['Handles thick doughs and batters'],
          'Tilt-Head Design': ['Easy access for adding ingredients']
        }
    },
    {
        id: 'cold-press-juicer-premium',
        name: 'Cold Press Juicer Premium',
        description: 'Slow juicer that preserves nutrients and enzymes. This premium cold press juicer uses a slow masticating process that extracts maximum juice while preserving vital nutrients, enzymes, and vitamins. Perfect for health-conscious individuals who want to make fresh, nutrient-rich juices at home. The slow juicing process produces less heat and oxidation, resulting in juice that stays fresh longer and tastes better. Includes multiple screens for different textures.',
        price: 1299,
        image: '/images/accessories/cold-press-juicer-premium.jpg',
        category: 'Juicers',
        tags: ['juicer', 'cold press', 'slow juicer', 'nutrients', 'enzymes', 'healthy', 'fresh juice', 'vegetables', 'fruits', 'detox'],
        size: '1L',
        ingredients_benefits: {
          'Slow Masticating Process': ['Preserves maximum nutrients and enzymes'],
          'Low Heat Generation': ['Prevents nutrient loss during juicing'],
          'Multiple Screens': ['Versatile juicing for different textures'],
          'High Juice Yield': ['Extracts maximum juice from ingredients']
        }
    }
];
