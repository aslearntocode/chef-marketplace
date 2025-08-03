'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function HealthierBeveragesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier beverages'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Beverages" 
        products={categoryProducts} 
        basePath="/categories/healthier-beverages"
      />
    </main>
  );
} 