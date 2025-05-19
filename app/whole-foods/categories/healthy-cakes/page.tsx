'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../components/CategoryPage';

export default function HealthierCakesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier cakes'
  );

  return (
    <main className="mt-[72px] min-h-screen bg-[#FFC107] bg-opacity-10">
      <CategoryPage 
        category="Healthier Cakes" 
        products={categoryProducts} 
      />
    </main>
  );
} 