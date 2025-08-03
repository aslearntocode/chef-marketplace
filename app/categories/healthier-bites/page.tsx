'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function HealthyBitesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthy bites'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Bites" 
        products={categoryProducts} 
        basePath="/categories/healthier-bites"
      />
    </main>
  );
} 