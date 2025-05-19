'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../components/CategoryPage';

export default function NutsAndSeedsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'nuts and seeds'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Nuts and Seeds" 
        products={categoryProducts} 
      />
    </main>
  );
} 