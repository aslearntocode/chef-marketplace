'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function MouthFreshnerPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'mouth freshners'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Mouth Freshners" 
        products={categoryProducts} 
        basePath="/categories/mouth-freshners"
      />
    </main>
  );
}
