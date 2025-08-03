'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function HealthierPremixesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier premixes'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Premixes" 
        products={categoryProducts} 
        basePath="/categories/healthier-premixes"
      />
    </main>
  );
} 