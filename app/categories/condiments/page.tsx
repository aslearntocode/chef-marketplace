'use client';

import { products } from '@/data/whole-foods';
import CategoryPage from '../../whole-foods/components/CategoryPage';

export default function CondimentsPage() {
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === 'condiments'
  );

  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Condiments" 
        products={categoryProducts} 
        basePath="/categories/condiments"
      />
    </main>
  );
} 