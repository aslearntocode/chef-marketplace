'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function DrinksPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'drinks'
  );

  return (
    <main className="mt-[72px] min-h-screen bg-[#FFC107] bg-opacity-10">
      <CategoryPage 
        category="Drinks" 
        products={categoryProducts} 
        basePath="/categories/drinks"
      />
    </main>
  );
} 