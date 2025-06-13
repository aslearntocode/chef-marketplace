'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../components/CategoryPage';

export default function HealthierBeveragesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'healthier beverages'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Healthier Beverages" 
        products={categoryProducts} 
      />
    </main>
  );
} 