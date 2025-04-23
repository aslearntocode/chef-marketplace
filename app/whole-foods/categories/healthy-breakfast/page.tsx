'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../components/CategoryPage';

export default function HealthyTreatsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthy breakfast'
  );

  return (
    <main className="mt-[72px] min-h-screen bg-[#FFC107] bg-opacity-10">
      <CategoryPage 
        category="Healthy Breakfast" 
        products={categoryProducts} 
      />
    </main>
  );
} 