'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function HealthyTreatsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthy breakfast'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Breakfast" 
        products={categoryProducts} 
        basePath="/categories/healthier-breakfast"
      />
    </main>
  );
} 