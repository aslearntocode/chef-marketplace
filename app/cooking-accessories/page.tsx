'use client';

import { accessories } from '@/data/accessories';
import CategoryPage from '../whole-foods/components/CategoryPage';

export default function CookingAccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#FDBE28] pt-[1cm]">
      <CategoryPage 
        category="Cooking Accessories" 
        products={accessories} 
      />
    </main>
  );
} 