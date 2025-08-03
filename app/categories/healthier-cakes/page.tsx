'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function HealthyCakesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthy cakes'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Cakes" 
        products={categoryProducts} 
        basePath="/categories/healthier-cakes"
      />
    </main>
  );
} 