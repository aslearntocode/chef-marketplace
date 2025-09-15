'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function MouthFreshnerPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'mouth fresheners'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Mouth Fresheners" 
        products={categoryProducts} 
        basePath="/categories/mouth-fresheners"
      />
    </main>
  );
}
