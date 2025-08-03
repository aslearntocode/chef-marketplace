'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function NutsAndSeedsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'nuts and seeds'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Nuts and Seeds" 
        products={categoryProducts} 
        basePath="/categories/nuts-and-seeds"
      />
    </main>
  );
} 