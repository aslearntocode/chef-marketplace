import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/whole-foods';
import CategoriesPageClient from './CategoriesPageClient';
import { generateCategoryMetaData } from '@/lib/metaUtils';

interface Category {
  id: string;
  name: string;
  description: string;
  href: string;
  image: string;
}

// Function to get a representative image for each category
const getCategoryImage = (categoryName: string): string => {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === categoryName.toLowerCase()
  );
  
  if (categoryProducts.length > 0) {
    return categoryProducts[0].image;
  }
  
  // Fallback to a default image if no products found
  return '/images/Coconut Barfi With Jaggery.jpeg';
};

const categories: Category[] = [
  {
    id: 'healthier-treats',
    name: 'Healthier Treats',
    description: 'Delicious and nutritious treats for guilt-free indulgence',
    href: '/categories/healthier-treats',
    image: getCategoryImage('Healthy Treats')
  },
  {
    id: 'healthier-beverages',
    name: 'Healthier Beverages',
    description: 'Refreshing drinks made with natural ingredients',
    href: '/categories/healthier-beverages',
    image: getCategoryImage('Healthier Beverages')
  },
  {
    id: 'healthier-bites',
    name: 'Healthier Bites',
    description: 'Perfect snacks for any time of the day',
    href: '/categories/healthier-bites',
    image: getCategoryImage('Healthy Bites')
  },
  {
    id: 'condiments',
    name: 'Pickles & Chutneys',
    description: 'Traditional pickles and flavorful condiments',
    href: '/categories/condiments',
    image: getCategoryImage('Condiments')
  },
  {
    id: 'healthier-breakfast',
    name: 'Healthier Breakfast',
    description: 'Start your day with nutritious breakfast options',
    href: '/categories/healthier-breakfast',
    image: getCategoryImage('Healthier Breakfast')
  },
  {
    id: 'spice-blends',
    name: 'Spice Blends',
    description: 'Pure and authentic Indian spice blends',
    href: '/categories/spice-blends',
    image: getCategoryImage('Spice Blends')
  },
  {
    id: 'nuts-and-seeds',
    name: 'Nuts & Nut Butters',
    description: 'Premium quality nuts, dry fruits and nut butters',
    href: '/categories/nuts-and-seeds',
    image: '/images/chocolate-peanut-butter.jpg'
  },
  {
    id: 'healthier-premixes',
    name: 'Healthier Premixes',
    description: 'Convenient premixes for quick and healthy meals',
    href: '/categories/healthier-premixes',
    image: getCategoryImage('Healthier Premixes')
  },
  {
    id: 'healthier-cakes',
    name: 'Healthier Cakes',
    description: 'Delicious cakes made with wholesome ingredients',
    href: '/categories/healthier-cakes',
    image: getCategoryImage('Healthy Cakes')
  },
  {
    id: 'sauces-and-dressings',
    name: 'Sauces & Dressings',
    description: 'Flavorful sauces and dressings for your meals',
    href: '/categories/sauces-and-dressings',
    image: getCategoryImage('Sauces and Dressings')
  },
  {
    id: 'mouth-fresheners',
    name: 'Mouth Fresheners',
    description: 'Natural mouth fresheners for fresh breath',
    href: '/categories/mouth-fresheners',
    image: getCategoryImage('Mouth Fresheners')
  }
];

export const metadata: Metadata = generateCategoryMetaData(
  'Food Categories',
  'categories',
  'Explore our wide range of healthy food categories including healthier treats, beverages, bites, condiments, and more. Discover pure, wholesome, chemical-free products.'
);

export default function CategoriesPage() {
  return <CategoriesPageClient categories={categories} />;
} 