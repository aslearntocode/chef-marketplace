'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../components/CategoryPage';

export default function SpiceBlendsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'spice blends'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Spice Blends" 
        products={categoryProducts} 
      />
    </main>
  );
} 