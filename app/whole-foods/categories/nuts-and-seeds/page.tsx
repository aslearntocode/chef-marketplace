'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../components/CategoryPage';

export default function NutsAndSeedsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'nuts and seeds'
  );

  return (
    <main className="mt-[72px] min-h-screen bg-[#FFC107] bg-opacity-10">
      <CategoryPage 
        category="Nuts and Seeds" 
        products={categoryProducts} 
      />
    </main>
  );
} 