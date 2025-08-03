'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function PicklesPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'pickles & condiments'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Pickles & Condiments" 
        products={categoryProducts} 
        basePath="/categories/pickles"
      />
    </main>
  );
} 